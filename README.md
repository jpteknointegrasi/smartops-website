# SmartOps Website (Deploy Package)

Website publik SmartOps — keluarga 8 aplikasi pengelolaan layanan.
Dibangun sebagai SPA statis (tanpa build step) sesuai **Brief Website & Desain UI SmartOps v1.0**.

## Struktur

```
smartops-website/
├── index.html            # Shell halaman + pemuatan script
├── css/styles.css        # Token desain (espresso–tan) + seluruh komponen
├── js/config.js          # Konfigurasi: mode simulasi / kredensial Supabase
├── js/data.js            # Data 8 produk, skenario integrasi, FAQ
├── js/pages.js           # Template semua halaman
├── js/app.js             # Router (hash), interaksi, logika form demo
└── supabase/schema.sql   # Skema website_demo_requests + RLS (review dulu!)
```

## Menjalankan secara lokal

Tidak perlu build. Jalankan server statis apa pun dari folder ini:

```bash
# salah satu:
npx serve .
python -m http.server 8080
```

Buka `http://localhost:8080`. Routing memakai hash (`#aplikasi/security`, `#demo/stp`, dst.)
sehingga bekerja di hosting statis mana pun tanpa konfigurasi rewrite.

## Langkah mengaktifkan form demo (Supabase)

1. **Review** `supabase/schema.sql` bersama pemilik produk — jangan langsung
   dijalankan di database produksi yang belum diaudit (brief 21.1).
2. Jalankan skema di **staging/branch** Supabase terlebih dahulu, lalu di proyek
   yang disetujui.
3. Isi `js/config.js`:
   ```js
   window.SMARTOPS_CONFIG = {
     simulate: false,
     supabaseUrl: "https://xxxx.supabase.co",
     supabaseAnonKey: "<publishable key>"   // BUKAN service-role key
   };
   ```
4. Uji kriteria brief:
   - **WEB-08**: kirim form valid → data tercatat sekali; konfirmasi tampil
     setelah server menerima.
   - **WEB-09**: klik ganda / retry → `submission_key` yang sama, tidak ada
     prospek ganda (unique constraint; error 23505 saat retry = sudah tercatat
     → ditampilkan sebagai sukses).
   - **WEB-12**: `curl` SELECT ke tabel dengan anon key harus ditolak (RLS tanpa
     policy SELECT).

Selama `simulate: true`, form menampilkan alur lengkap (mengirim → sukses)
tanpa menulis ke backend — untuk uji tampilan.

## Yang masih perlu keputusan sebelum publikasi (brief bagian 26)

- Domain/hosting dan identitas badan pengelola + kontak resmi (footer & halaman Kontak).
- Status ketersediaan tiap produk/fitur (badge saat ini: "dalam pengembangan").
- URL login tiap aplikasi (tombol Masuk sengaja nonaktif sampai diverifikasi).
- Isi final Privasi & Ketentuan (saat ini berlabel draft).
- CMS draft→review→publish (bisa tahap berikutnya; konten saat ini statis di `js/data.js`).

## Catatan keamanan

- Frontend hanya memegang publishable/anon key (WEB-24).
- Prospek tidak pernah bisa dibaca dari halaman publik — penolakan terjadi di
  RLS, bukan sekadar menu disembunyikan.
- Jangan memasukkan data pribadi ke URL atau analytics (brief 22.2).
