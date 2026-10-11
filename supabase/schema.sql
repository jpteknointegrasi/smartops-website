-- ============================================================
-- SmartOps Website — Skema prospek (website_demo_requests)
-- Sesuai Brief Website & Desain UI SmartOps v1.0, bagian 13 & 21.
--
-- CATATAN PENTING (brief 21.1): jangan menjalankan migrasi ini pada
-- database produksi yang belum diaudit. Review dulu bersama pemilik
-- produk; jalankan di staging/branch terlebih dahulu.
-- ============================================================

-- 1) Tabel prospek -------------------------------------------------
create table if not exists public.website_demo_requests (
  id              uuid primary key default gen_random_uuid(),
  submission_key  text not null unique,          -- idempotensi retry (WEB-09)
  nama            text not null check (char_length(trim(nama)) between 1 and 120),
  organisasi      text not null check (char_length(trim(organisasi)) between 1 and 160),
  peran           text check (peran in ('Pemilik','Operasional','Supervisor','Pelanggan/PIC','Lainnya') or peran is null or peran = ''),
  produk          text[] not null check (array_length(produk, 1) between 1 and 9),
  metode_kontak   text not null check (metode_kontak in ('email','wa')),
  kontak          text not null check (char_length(trim(kontak)) between 5 and 160),
  jumlah_lokasi   text,
  jumlah_personel text,
  kebutuhan       text not null check (char_length(trim(kebutuhan)) between 1 and 500),
  consent         boolean not null check (consent = true),   -- wajib dicentang (13.1)
  consent_version text not null default 'v1-draft',
  sumber_halaman  text,                                      -- slug halaman asal, tanpa data pribadi
  status          text not null default 'Baru'
                  check (status in ('Baru','Ditugaskan','Ditindaklanjuti','Selesai')),
  penanggung_jawab text,
  catatan_internal text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

comment on table public.website_demo_requests is
  'Prospek dari form permintaan demo website SmartOps. Data bisnis pengelola SmartOps; bukan milik tenant vendor (brief 21.2).';

create index if not exists idx_wdr_status  on public.website_demo_requests (status);
create index if not exists idx_wdr_created on public.website_demo_requests (created_at desc);

-- 2) RLS: pengunjung hanya boleh INSERT; tidak ada SELECT publik ----
alter table public.website_demo_requests enable row level security;
alter table public.website_demo_requests force row level security;

-- Pengunjung (anon) boleh membuat prospek. Validasi kolom lewat CHECK di atas.
drop policy if exists wdr_insert_anon on public.website_demo_requests;
create policy wdr_insert_anon
  on public.website_demo_requests
  for insert
  to anon
  with check (consent = true);

-- Tidak ada policy SELECT/UPDATE/DELETE untuk anon → akses baca ditolak
-- di backend, bukan sekadar menu disembunyikan (WEB-12).
-- Tim bisnis membaca lewat dasbor Supabase / CMS dengan peran tersendiri.
-- Contoh (AKTIFKAN HANYA setelah peran pengelola prospek ditetapkan):
--
-- drop policy if exists wdr_select_staff on public.website_demo_requests;
-- create policy wdr_select_staff
--   on public.website_demo_requests
--   for select
--   to authenticated
--   using ((auth.jwt() ->> 'app_role') = 'pengelola_prospek');

-- 3) updated_at otomatis -------------------------------------------
create or replace function public.wdr_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists trg_wdr_touch on public.website_demo_requests;
create trigger trg_wdr_touch
  before update on public.website_demo_requests
  for each row execute function public.wdr_touch_updated_at();

-- 4) Log aktivitas prospek (brief 21.3: website_lead_activities) ----
create table if not exists public.website_lead_activities (
  id          uuid primary key default gen_random_uuid(),
  request_id  uuid not null references public.website_demo_requests(id) on delete cascade,
  aktivitas   text not null,
  pelaku      text,
  hasil       text,
  created_at  timestamptz not null default now()
);

alter table public.website_lead_activities enable row level security;
alter table public.website_lead_activities force row level security;
-- Tidak ada policy untuk anon sama sekali: tabel internal murni.

-- ============================================================
-- Pengamanan (brief 21.4):
-- * Frontend hanya memakai publishable/anon key; service-role key
--   tidak pernah dikirim ke browser (WEB-24).
-- * Sukses form = INSERT berhasil di server, bukan klik tombol.
-- * submission_key unik mencegah duplikasi saat retry (WEB-09):
--   error 23505 pada retry berarti data sudah tercatat → tampilkan sukses.
-- * Pertimbangkan rate limiting / captcha pada tahap berikutnya
--   (mis. lewat Edge Function sebagai endpoint validasi).
-- ============================================================
