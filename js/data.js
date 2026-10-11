/* ===================== ICONS ===================== */
const I = {
  users:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  shield:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  broom:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3l-9 9"/><path d="M13 9l2 2-5 7-5-5 7-5z"/><path d="M5 13l-2 6 6-2"/></svg>',
  bug:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l1.9 1.9M16 2l-1.9 1.9"/><rect x="7" y="6" width="10" height="14" rx="5"/><path d="M12 6v14M2 13h5M17 13h5M4 20l3-3M20 20l-3-3M4 7l3 2M20 7l-3 2"/></svg>',
  climb:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 3v18M12 3v18M16 3v18M4 9h16M4 15h16"/></svg>',
  leaf:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.5 5-6.5"/></svg>',
  chart:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  drop:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7s-6 6.8-6 11a6 6 0 0 0 12 0c0-4.2-6-11-6-11z"/></svg>',
  check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  arrow:'<svg class="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  link:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
  info:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  warn:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
  x:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>',
  lock:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  doc:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  chat:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H6l-4 3V12a8 8 0 0 1 8-8h3a8 8 0 0 1 8 8z"/></svg>',
  cog:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  clip:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/></svg>',
  grid:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  file:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
  sliders:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>',
  pin:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  cal:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  search:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  tool:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L22 9l-3-3-2.3 2.3zM3 21l8.5-8.5"/><path d="M14.7 6.3L9.6 1.2 7 3.8l5 5"/></svg>',
  flag:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4a1 1 0 0 1 1-1h10l1 2h4v10h-7l-1-2H4"/></svg>',
  bell:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  book:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  flask:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/></svg>',
  layers:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l10 5-10 5L2 7l10-5z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/></svg>',
  refresh:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',
  camera:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  dollar:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  star:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
  home:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  mail:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>',
  phone:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>'
};

/* ===================== PRODUCT DATA ===================== */
const PRODUCTS = [
{
  slug:'workforce', name:'Workforce', full:'SmartOps Workforce', accent:'#475569', icon:'users',
  sub:'SDM & BM', group:'personel',
  card:'Pengelolaan penempatan dan kompetensi personel lintas layanan.',
  cardAud:'Untuk tim operasional dan pengelola layanan.',
  tags:['Penempatan','Kompetensi','Jadwal'],
  headline:'Kelola personel dari kebutuhan posisi hingga evaluasi kerja.',
  intro:'Membantu vendor SDM, tim HR, dan pengelola kontrak personel mengelola kebutuhan, kompetensi, penempatan, hingga evaluasi kinerja secara terpantau dalam satu sistem.',
  audience:'Vendor SDM, HR, pengelola kontrak personel dan BM',
  challenges:[
    ['Kebutuhan posisi tidak terpetakan','Lokasi mana yang kekurangan personel baru terlihat saat sudah terjadi keluhan.'],
    ['Data kompetensi tersebar','Sertifikat, masa berlaku, dan riwayat pelatihan tersimpan di file yang berbeda-beda.'],
    ['Penempatan sulit ditelusuri','Siapa ditempatkan di mana dan sejak kapan tidak terekam dengan rapi.']
  ],
  benefits:[
    ['Pemenuhan posisi lebih terarah','Kebutuhan tiap lokasi dapat dipetakan dan dipantau pemenuhannya.'],
    ['Kompetensi personel lebih lengkap','Data profil, kompetensi dan sertifikasi tersimpan dengan rapi dan mudah dicek.'],
    ['Penempatan terpantau dari waktu ke waktu','Riwayat penempatan, aktivitas dan evaluasi tercatat secara berkelanjutan.']
  ],
  features:[
    ['pin','Kebutuhan posisi','Catat kebutuhan personel per lokasi dan periode.'],
    ['clip','Profil dan kompetensi','Data personel, kompetensi, sertifikat dan masa berlaku.'],
    ['refresh','Mobilisasi personel','Rencanakan dan pantau proses mobilisasi ke lokasi.'],
    ['users','Penempatan personel','Tempatkan personel sesuai posisi dan kompetensi.'],
    ['cal','Jadwal dan kehadiran','Atur jadwal kerja dan rekam kehadiran harian.'],
    ['chart','Aktivitas dan KPI','Catat aktivitas, target dan evaluasi kinerja.']
  ],
  flow:[['Kebutuhan posisi','Petakan posisi per lokasi'],['Pilih personel','Dari kandidat berkompetensi'],['Verifikasi kompetensi','Cek sertifikat dan syarat'],['Penempatan','Tempatkan ke lokasi'],['Aktivitas & kehadiran','Rekam kerja harian'],['Evaluasi kerja','Nilai dan tindak lanjut']],
  roles:[
    ['Pemilik','Memantau pemenuhan kontrak dan kinerja secara menyeluruh dengan laporan yang jelas.'],
    ['HR','Mengelola data personel, kompetensi, mobilisasi dan administrasi tenaga.'],
    ['Supervisor','Mengatur jadwal, memverifikasi kehadiran dan mencatat aktivitas tim.'],
    ['Personel','Melihat jadwal pribadi, mengajukan izin dan mencatat aktivitas dari HP.'],
    ['Pelanggan','Melihat personel yang ditempatkan dan ringkasan pemenuhan posisi sesuai izin.']
  ],
  mock:{ nav:['Beranda','Kebutuhan','Personel','Penempatan','Jadwal','Laporan'], active:'Penempatan', title:'Penempatan personel',
    kpis:[['34','Total posisi'],['30','Terisi'],['4','Kosong'],['88%','Kelengkapan']],
    cols:['Posisi','Lokasi','Kebutuhan','Terisi','Status'],
    rows:[['Security','Tower A','10','10',['ok','Terpenuhi']],['Cleaning','Tower B','8','6',['warn','2 kosong']],['Receptionist','Lobby','4','4',['ok','Terpenuhi']],['Teknisi','Gedung A','6','4',['warn','2 kosong']],['Gardener','Area Luar','6','6',['ok','Terpenuhi']]] },
  phone:{ title:'Jadwal saya', sub:'Sen, 21 Apr 2025', items:[['08.00 – 16.00','Lobby Utama · Security','ok','Hadir'],['16.00 – 24.00','Parkir Barat · Security','info','Terjadwal'],['Izin cuti','Pengajuan 24 Apr','warn','Menunggu']], btn:'Ajukan izin' },
  mock2:{ nav:['Beranda','Kebutuhan','Personel','Penempatan','Jadwal','Laporan'], active:'Personel', title:'Rekap kompetensi personel',
    cols:['Nama','Posisi','Sertifikat','Berlaku s.d.','Status'],
    rows:[['Andi Pratama','Security','Gada Pratama','Mar 2027',['ok','Aktif']],['Siti Rahma','Cleaning','Housekeeping','Jan 2026',['warn','Segera habis']],['Budi Santoso','Teknisi','K3 Listrik','Des 2026',['ok','Aktif']],['Dewi Lestari','Receptionist','—','—',['neutral','Tidak wajib']]] },
  report:{ title:'Rekap posisi, kompetensi dan evaluasi', cols:['Posisi','Kebutuhan','Terisi','Kompetensi','Nilai evaluasi'],
    rows:[['Security','10','10','100%','4,5'],['Cleaning Service','8','6','75%','4,0'],['Receptionist','4','4','100%','4,3'],['Teknisi','6','4','67%','3,8'],['Gardener','6','6','100%','4,4']],
    donut:{title:'Pemenuhan posisi',total:'34',items:[['Terisi',30,'#475569'],['Kosong',4,'#C99B65']]} },
  scope:{ included:['Manajemen kebutuhan posisi','Data personel dan kompetensi','Penempatan, jadwal dan kehadiran','Aktivitas dan evaluasi kerja','Laporan operasional'],
    optional:['Penggajian dan komponen administrasi lanjutan (sesuai paket)','Laporan khusus sesuai kebutuhan'],
    integrations:[['security','Sinkronisasi data personel untuk penugasan dan penjadwalan']],
    note:'Data gaji tidak otomatis terlihat oleh pelanggan. Berlangganan Workforce penuh bukan prasyarat untuk memakai aplikasi SmartOps lainnya.' },
  faq:[
    ['Apakah SmartOps Workforce harus digunakan agar bisa memakai aplikasi lain?','Tidak. Workforce adalah aplikasi yang berdiri sendiri. Security, Project, STP dan aplikasi lain memiliki data personel dasar masing-masing sesuai lingkupnya.'],
    ['Apa saja data personel yang dikelola?','Profil, posisi, kompetensi dan sertifikat, riwayat penempatan, jadwal, kehadiran, aktivitas dan hasil evaluasi.'],
    ['Apakah fitur penggajian termasuk di dalam aplikasi?','Penggajian merupakan komponen lanjutan yang mengikuti paket dan mandat. Data gaji tidak tampil kepada pelanggan atau peran yang tidak berwenang.'],
    ['Apakah pelanggan dapat melihat data personel?','Pelanggan melihat personel yang ditempatkan di lokasinya beserta ringkasan pemenuhan posisi, sesuai izin yang diatur vendor.']
  ],
  seo:'SmartOps Workforce | Aplikasi Pengelolaan Personel'
},
{
  slug:'security', name:'Security', full:'SmartOps Security', accent:'#1E3A5F', icon:'shield', group:'operasional',
  card:'Pengawasan pos jaga, patroli dan pencatatan insiden keamanan.',
  cardAud:'Untuk tim keamanan dan pengelola area.',
  tags:['Pos jaga','Patroli','Insiden'],
  headline:'Pantau penjagaan, patroli, dan tindak lanjut insiden.',
  intro:'Membantu tim pengelola keamanan dan vendor jasa pengamanan memantau pos, regu, patroli, serah terima dan tindak lanjut insiden secara terstruktur dan terdokumentasi.',
  audience:'Pemilik vendor, manager operasi, chief/Danru, petugas dan PIC pelanggan',
  challenges:[
    ['Pos terisi tidak sama dengan hadir','Petugas hadir di lokasi, tetapi pos tertentu tetap kosong tanpa diketahui.'],
    ['Serah terima tidak tercatat','Catatan logbook antar shift hilang atau tidak bisa ditelusuri kembali.'],
    ['Insiden tanpa tindak lanjut','Temuan dicatat, tetapi siapa menangani dan hasilnya tidak terlihat.']
  ],
  benefits:[
    ['Cakupan pos lebih jelas','Status setiap pos dan cakupan area dapat dipantau dengan mudah.'],
    ['Serah terima terdokumentasi','Logbook dan serah terima shift tersimpan rapi dan mudah ditelusuri.'],
    ['Insiden ditindaklanjuti','Temuan dan insiden dapat dicatat, ditugaskan, dan dipantau tindak lanjutnya.']
  ],
  features:[
    ['pin','Pos dan regu','Kelola pos, cakupan area dan komposisi regu.'],
    ['cal','Jadwal dan cakupan','Atur jadwal penjagaan dan cakupan setiap pos.'],
    ['book','Logbook dan serah terima','Catat kegiatan dan serah terima antar shift.'],
    ['search','Patroli','Jadwal patroli, checkpoint dan bukti pelaksanaan.'],
    ['bell','Insiden dan respons','Catat temuan, tugaskan, dan pantau penyelesaian.'],
    ['file','Laporan shift','Rekap penjagaan, patroli dan insiden per periode.']
  ],
  flow:[['Atur penjagaan','Pos, regu dan jadwal'],['Tugaskan regu','Plot petugas per pos'],['Catat pelaksanaan','Logbook dan patroli'],['Tangani temuan','Insiden dan respons'],['Review','Danru dan manager'],['Laporan shift','Rekap per periode']],
  roles:[
    ['Pemilik','Memantau kondisi penjagaan, kepatuhan patroli dan tindak lanjut insiden dengan laporan yang terstruktur.'],
    ['Manager','Mengatur pos, regu, jadwal dan meninjau laporan shift lintas lokasi.'],
    ['Danru','Memverifikasi kehadiran di pos, memimpin serah terima dan menangani temuan di shift-nya.'],
    ['Petugas','Menjalankan patroli, mengisi checkpoint dengan foto bukti dan melaporkan insiden dari HP.'],
    ['PIC pelanggan','Melihat ringkasan penjagaan, patroli dan insiden di lokasinya sesuai izin.']
  ],
  mock:{ nav:['Beranda','Pos & Regu','Penjagaan','Patroli','Insiden','Laporan'], active:'Patroli', title:'Ringkasan penjagaan hari ini',
    kpis:[['7/8','Pos terisi'],['9','Patroli selesai'],['18/22','Checkpoint'],['3','Temuan terbuka']],
    cols:['Waktu','Pos / Area','Petugas','Status','Catatan'],
    rows:[['08.12','Lobby','Budi',['ok','Selesai'],'Area aman'],['09.30','Parkir Barat','Andi',['ok','Selesai'],'Ada tamu'],['10.45','Gedung A','Rina',['warn','Temuan'],'Pintu samping terbuka'],['12.20','Area Luar','Dedi',['ok','Selesai'],'Area aman'],['14.10','Parkir Timur','Andi',['info','Berjalan'],'—']] },
  phone:{ title:'Patroli', sub:'Checkpoint 3 / 5 · Parkir Timur', items:[['Lokasi','Parkir Timur','neutral','Terdeteksi'],['Status','Aman','ok','Aman'],['Foto bukti','1 foto terlampir','info','Terlampir']], btn:'Simpan checkpoint', photo:true },
  mock2:{ nav:['Beranda','Pos & Regu','Penjagaan','Patroli','Insiden','Laporan'], active:'Insiden', title:'Insiden dan tindak lanjut',
    cols:['ID','Tanggal','Area','Kategori','Status'],
    rows:[['IN-031','21 Apr','Gedung A','Pintu terbuka',['warn','Ditindaklanjuti']],['IN-030','20 Apr','Parkir','Kendaraan asing',['ok','Selesai']],['IN-029','19 Apr','Lobby','Tamu tanpa izin',['ok','Selesai']],['IN-028','18 Apr','Area Luar','Lampu padam',['info','Diteruskan ke BM']]] },
  report:{ title:'Patroli dan tindak lanjut insiden', cols:['Tanggal','Area','Jumlah patroli','Temuan','Ditindaklanjuti'],
    rows:[['21 Apr 2025','Lobby','5','1','1'],['21 Apr 2025','Parkir Barat','4','0','0'],['21 Apr 2025','Gedung A','6','2','1'],['21 Apr 2025','Area Luar','4','0','0'],['21 Apr 2025','Parkir Timur','4','1','1']],
    donut:{title:'Temuan minggu ini',total:'12',items:[['Selesai',8,'#1E3A5F'],['Ditindaklanjuti',3,'#C99B65'],['Diteruskan',1,'#88776B']]} },
  scope:{ included:['Manajemen pos, regu dan cakupan','Jadwal penjagaan dan patroli','Logbook dan serah terima shift','Pencatatan insiden dan tindak lanjut','Laporan operasional'],
    optional:['Pencatatan tamu dan izin barang/kendaraan sesuai lingkup','Laporan khusus pelanggan'],
    integrations:[['workforce','Sinkronisasi data personel untuk penugasan dan penjadwalan']],
    note:'Kehadiran berbeda dari pos terisi. Fitur tombol darurat (SOS) tidak dipromosikan sebagai kemampuan respons teruji sebelum uji lintas perangkat dan prosedurnya selesai.' },
  faq:[
    ['Apa perbedaan antara kehadiran dan pos terisi?','Kehadiran menunjukkan jumlah personel yang hadir, sedangkan pos terisi menunjukkan jumlah pos yang sudah terisi sesuai kebutuhan. Satu personel dapat mengisi lebih dari satu pos dalam kondisi tertentu.'],
    ['Apakah aplikasi ini bisa menangani respons SOS?','Aplikasi ini digunakan untuk pencatatan, pemantauan dan tindak lanjut insiden. Tidak ada jaminan respons SOS dalam aplikasi ini.'],
    ['Apakah SmartOps Security harus terintegrasi dengan Workforce?','Tidak. Security memiliki data personel dasar sendiri. Integrasi dengan Workforce bersifat opsional untuk administrasi tenaga lanjutan.'],
    ['Apa yang dapat dilihat PIC pelanggan?','Ringkasan pos terisi, patroli dan insiden di lokasinya. Pengaturan akses ditentukan vendor dan pelanggan bersama.']
  ],
  seo:'SmartOps Security | Aplikasi Operasional Pengamanan'
},
{
  slug:'cleaning', name:'Cleaning', full:'SmartOps Cleaning', accent:'#0F766E', icon:'broom', group:'operasional',
  card:'Penjadwalan pekerjaan, inspeksi kualitas dan pelaporan kebersihan.',
  cardAud:'Untuk tim kebersihan dan pengelola fasilitas.',
  tags:['Jadwal','Inspeksi QC','Laporan'],
  headline:'Atur pekerjaan kebersihan dan periksa hasil setiap area.',
  intro:'Jadwal, pelaksanaan, checklist, dan hasil pemeriksaan tercatat rapi untuk menjaga standar kebersihan di seluruh area.',
  audience:'Vendor cleaning, supervisor, leader, cleaner dan PIC lokasi',
  challenges:[
    ['Area terlewat','Area tertentu tidak kebagian jadwal saat petugas berhalangan.'],
    ['Pekerjaan periodik terlupa','Pekerjaan mingguan dan bulanan tidak terpantau jatuh temponya.'],
    ['Hasil tidak diperiksa','Checklist terisi, tetapi mutu hasil tidak dicek dan dibuktikan.']
  ],
  benefits:[
    ['Pemerataan cakupan area','Setiap area mendapat jadwal yang jelas dan terpantau secara merata.'],
    ['Pekerjaan periodik tercatat','Pekerjaan harian, mingguan dan bulanan tercatat dan tidak terlewat.'],
    ['Mutu diperiksa','Hasil pekerjaan diperiksa dengan foto dan catatan, termasuk tindak lanjut jika perlu.']
  ],
  features:[
    ['pin','Area dan frekuensi','Kelola daftar area dan tentukan frekuensi pekerjaan.'],
    ['users','Pembagian petugas','Atur penugasan dan penggantian petugas dengan mudah.'],
    ['refresh','Cakupan dan pengganti','Pastikan seluruh area tercover saat petugas berhalangan.'],
    ['clip','Checklist pekerjaan','Daftar tugas yang jelas untuk setiap area.'],
    ['cal','Pekerjaan periodik','Penjadwalan harian, mingguan dan bulanan.'],
    ['search','QC dan rework','Pemeriksaan hasil, catatan dan penugasan ulang jika perlu.'],
    ['file','Laporan','Rekap pekerjaan, hasil pemeriksaan dan status area per periode.']
  ],
  flow:[['Petakan area','Daftarkan area dan frekuensi'],['Jadwalkan','Buat jadwal dan tugaskan'],['Kerjakan','Checklist oleh petugas'],['Periksa','QC dengan foto dan catatan'],['Perbaiki','Rework jika diperlukan'],['Laporkan','Hasil dan capaian area']],
  roles:[
    ['Pemilik','Memantau cakupan pekerjaan, hasil pemeriksaan dan area yang perlu perhatian.'],
    ['Supervisor','Menyusun jadwal, memastikan pengganti dan melakukan QC hasil pekerjaan.'],
    ['Leader','Membagi tugas harian dan memastikan checklist tiap area terisi.'],
    ['Cleaner','Mengerjakan checklist area dan melampirkan foto hasil dari HP.'],
    ['PIC lokasi','Melihat status area dan temuan QC di lokasinya sesuai izin.']
  ],
  mock:{ nav:['Beranda','Area','Jadwal','Pekerjaan','Inspeksi QC','Laporan'], active:'Jadwal', title:'Kontrol pekerjaan area',
    kpis:[['24','Due'],['18','Selesai'],['6','Belum diperiksa'],['2','Rework']],
    cols:['Area','Jadwal','Petugas','Pekerjaan','QC'],
    rows:[['Lobby','08.00','Rani','General cleaning',['ok','Bersih']],['Ruang Rapat','09.00','Budi','Vacuum & lap',['ok','Bersih']],['Toilet Lt. 1','09.30','Siti','Sanitasi',['warn','Perlu perhatian']],['Koridor Lt. 2','10.00','Andi','Pel lantai',['ok','Bersih']],['Pantry','10.30','Rani','General cleaning',['neutral','Belum diperiksa']]] },
  phone:{ title:'Pemeriksaan QC', sub:'Toilet Lt. 1 · Sanitasi', items:[['Hasil pemeriksaan','Perlu rework','warn','Rework'],['Catatan','Kebersihan wastafel','neutral','Catatan'],['Foto hasil','2 foto terlampir','info','Terlampir']], btn:'Simpan hasil', photo:true },
  mock2:{ nav:['Beranda','Area','Jadwal','Pekerjaan','Inspeksi QC','Laporan'], active:'Laporan', title:'Rekap cakupan area · Mei 2024',
    cols:['Area','Total jadwal','Selesai','Rework','Cakupan'],
    rows:[['Lobby','31','28',['neutral','2'],'90%'],['Ruang Rapat','31','27',['neutral','1'],'87%'],['Toilet Lt. 1','31','30',['neutral','1'],'97%'],['Koridor Lt. 2','31','26',['neutral','1'],'84%'],['Pantry','31','29',['neutral','1'],'94%']] },
  report:{ title:'Rekap cakupan area · Bulan Mei 2024', cols:['Area','Total jadwal','Selesai','Belum diperiksa','Rework','Cakupan'],
    rows:[['Lobby','31','28','2','1','90%'],['Ruang Rapat','31','27','3','1','87%'],['Toilet Lt. 1','31','30','1','0','97%'],['Koridor Lt. 2','31','26','4','1','84%'],['Pantry','31','29','1','1','94%']],
    donut:{title:'Temuan QC',total:'12',items:[['Perlu rework',5,'#0F766E'],['Kebersihan kurang',4,'#C99B65'],['Perlengkapan',2,'#88776B'],['Lainnya',1,'#D9CFC3']]} },
  scope:{ included:['Manajemen tim dasar (petugas, peran, jadwal)','Manajemen lokasi dan area','Checklist, QC dan rework','Laporan cakupan dan temuan'],
    optional:['Pekerjaan khusus (deep cleaning, pest-ready) sesuai lingkup','Laporan khusus pelanggan'],
    integrations:[['garden','Berbagi data area luar dan taman'],['gondola-climbing','Koordinasi pembersihan area ketinggian']],
    note:'Checklist selesai belum berarti QC lulus. Pekerjaan dianggap lengkap setelah melalui pemeriksaan sesuai standar.' },
  faq:[
    ['Apa saja yang bisa dikelola di SmartOps Cleaning?','Area dan frekuensi, jadwal dan pembagian petugas, checklist pekerjaan, pemeriksaan mutu (QC), rework dan laporan.'],
    ['Siapa saja yang dapat menggunakan aplikasi ini?','Pemilik vendor, supervisor, leader, cleaner dan PIC lokasi dengan hak akses masing-masing.'],
    ['Apakah bisa mengatur jadwal pekerjaan periodik?','Bisa. Pekerjaan harian, mingguan dan bulanan dijadwalkan per area dan dipantau jatuh temponya.'],
    ['Bagaimana jika petugas berhalangan?','Supervisor menunjuk pengganti sehingga cakupan area tetap terpenuhi dan tercatat siapa yang mengerjakan.'],
    ['Apakah hasil pekerjaan bisa dilampirkan foto?','Bisa. Cleaner dan pemeriksa dapat melampirkan foto hasil dan catatan pada setiap checklist dan QC.'],
    ['Apakah ada integrasi dengan aplikasi lain?','Integrasi opsional tersedia dengan SmartOps Garden dan Gondola & Climbing sesuai lingkup dan izin.']
  ],
  seo:'SmartOps Cleaning | Aplikasi Pengelolaan Kebersihan'
},
{
  slug:'pest-control', name:'Pest Control', full:'SmartOps Pest Control', accent:'#4D6128', icon:'bug', group:'operasional',
  card:'Pencatatan inspeksi, pemetaan titik dan tindak lanjut pengendalian hama.',
  cardAud:'Untuk tim pest control dan pengelola area.',
  tags:['Titik inspeksi','Temuan','Tindak lanjut'],
  headline:'Kelola titik monitoring, inspeksi, dan tindakan pengendalian hama.',
  intro:'Catat hasil inspeksi, temuan, dan tindakan secara terstruktur untuk menjaga lingkungan tetap terkendali.',
  audience:'Vendor pest control, reviewer teknis, teknisi dan pelanggan',
  challenges:[
    ['Titik tidak terdokumentasi','Riwayat tiap perangkat dan titik umpan tidak bisa ditelusuri kembali.'],
    ['Titik tidak diperiksa dianggap aman','Titik yang tidak bisa diakses tercatat seolah-olah nihil aktivitas.'],
    ['Tindak lanjut tidak terpantau','Temuan hama tidak jelas kapan dan bagaimana ditindaklanjuti.']
  ],
  benefits:[
    ['Riwayat tiap titik terjaga','Setiap titik monitoring memiliki catatan lengkap dari waktu ke waktu.'],
    ['Tindakan terdokumentasi','Hasil inspeksi dan tindakan tercatat dengan jelas, termasuk foto dan material yang digunakan.'],
    ['Monitor ulang terencana','Titik yang perlu perhatian dijadwalkan untuk diperiksa kembali.']
  ],
  features:[
    ['clip','Survei dan program','Atur data awal, program monitoring dan target area.'],
    ['pin','Titik dan perangkat','Kelola titik monitoring dan perangkat seperti trap atau bait station.'],
    ['search','Inspeksi','Catat hasil inspeksi, kondisi perangkat dan observasi aktivitas.'],
    ['flask','Treatment dan material','Rekam tindakan pengendalian dan penggunaan material.'],
    ['flag','Sighting dan tindak lanjut','Catat temuan hama dan rencana tindak lanjut.'],
    ['chart','Analisis dan laporan','Rekap tren temuan, efektivitas tindakan dan rekomendasi.']
  ],
  flow:[['Program','Tentukan area, titik dan rencana'],['Jadwalkan','Atur jadwal inspeksi dan teknisi'],['Periksa','Inspeksi tiap titik dan catat hasil'],['Tindakan','Pengendalian sesuai program'],['Review','Evaluasi hasil dan temuan'],['Monitor ulang','Periksa kembali titik yang dipantau']],
  roles:[
    ['Pemilik','Memantau status titik, tren temuan dan tindak lanjut yang perlu dilakukan.'],
    ['Reviewer teknis','Meninjau hasil inspeksi, menetapkan tindakan dan memvalidasi laporan.'],
    ['Teknisi','Memeriksa titik, mencatat observasi dan tindakan dari HP, termasuk foto perangkat.'],
    ['Pelanggan','Melihat titik yang diperiksa, temuan dan rencana tindak lanjut di lokasinya.']
  ],
  mock:{ nav:['Beranda','Area & Titik','Inspeksi','Tindakan','Laporan'], active:'Inspeksi', title:'Inspeksi titik monitoring',
    kpis:[['42','Diperiksa'],['5','Belum dapat diakses'],['28','Nihil aktivitas'],['9','Ada temuan']],
    cols:['Titik','Perangkat','Inspeksi','Observasi','Tindak lanjut'],
    rows:[['PC-001','Trap','12 Mei',['ok','Nihil'],'—'],['PC-002','Bait station','12 Mei',['warn','Tikus'],'Ganti umpan'],['PC-014','Glue trap','12 Mei',['warn','Lalat'],'Bersihkan'],['PC-018','Light trap','12 Mei',['ok','Nihil'],'—'],['PC-021','Bait station','11 Mei',['err','Semut'],'Treatment']] },
  phone:{ title:'Pemeriksaan titik', sub:'PC-014 · Glue trap', items:[['Observasi','Lalat (2 ekor)','warn','Temuan'],['Kondisi perangkat','Baik','ok','Baik'],['Tindakan','Bersihkan perangkat','info','Dijadwalkan']], btn:'Simpan hasil', photo:true },
  mock2:{ nav:['Beranda','Area & Titik','Inspeksi','Tindakan','Laporan'], active:'Area & Titik', title:'Daftar titik dan status',
    cols:['Titik','Lokasi','Temuan','Status'],
    rows:[['PC-01','Dapur','Tidak ada',['ok','Aman']],['PC-02','Gudang','Jejak tikus',['warn','Perlu tindakan']],['PC-03','Area sampah','Tidak ada',['ok','Aman']],['PC-04','Parkir','Ada serangga',['info','Ditangani']],['PC-05','Ruang genset','Tidak ada',['ok','Aman']]] },
  report:{ title:'Tren temuan dan tindak lanjut', cols:['Bulan','Tikus','Lalat','Kecoa','Semut','Tindak lanjut'],
    rows:[['Jan','4','6','2','3','8'],['Feb','3','7','1','2','7'],['Mar','5','5','2','3','9'],['Apr','4','7','2','4','11'],['Mei','4','6','1','2','8'],['Jun','2','3','1','2','5']],
    donut:{title:'Temuan bulan ini',total:'10',items:[['Tikus',4,'#4D6128'],['Lalat',3,'#C99B65'],['Semut',2,'#88776B'],['Kecoa',1,'#D9CFC3']]} },
  scope:{ included:['Manajemen tim dasar (teknisi, peran, jadwal)','Manajemen lokasi, area dan titik monitoring','Inspeksi, treatment dan tindak lanjut','Laporan dan analisis tren'],
    optional:['Program khusus (fumigasi, termite) sesuai lingkup','Laporan khusus pelanggan'],
    integrations:[['cleaning','Koordinasi area sanitasi'],['garden','Titik monitoring area luar']],
    note:'Titik tidak diperiksa berbeda dari nihil aktivitas. Aplikasi tidak menjanjikan kondisi bebas hama secara otomatis.' },
  faq:[
    ['Apa saja yang bisa dikelola di SmartOps Pest Control?','Program monitoring, titik dan perangkat, jadwal inspeksi, treatment dan material, temuan serta laporan tren.'],
    ['Apakah bisa mencatat temuan dan tindak lanjut?','Bisa. Setiap temuan dicatat dengan foto, lalu ditetapkan tindakan dan jadwal monitor ulang.'],
    ['Apakah ada jaminan bebas hama?','Tidak. Aplikasi mendokumentasikan inspeksi dan tindakan. Hasil pengendalian bergantung pada program dan pelaksanaan di lapangan.'],
    ['Bagaimana jika ada titik yang tidak dapat diakses?','Titik tersebut dicatat sebagai "belum dapat diakses" dan tampil terpisah dari titik nihil aktivitas, sehingga laporan tetap jujur.'],
    ['Apakah pelanggan dapat melihat data lokasi sendiri?','Ya, sesuai izin: titik yang diperiksa, temuan dan rencana tindak lanjut di lokasinya.']
  ],
  seo:'SmartOps Pest Control | Aplikasi Pengendalian Hama'
},
{
  slug:'gondola-climbing', name:'Gondola & Climbing', full:'SmartOps Gondola & Climbing', accent:'#9A4D2E', icon:'climb', group:'teknis',
  card:'Pengelolaan pekerjaan di ketinggian dengan pemetaan area dan kesiapan peralatan.',
  cardAud:'Untuk tim kerja ketinggian dan pengelola gedung.',
  tags:['Area fasad','Peralatan','Pekerjaan'],
  headline:'Kelola kesiapan tim dan progres pekerjaan fasad.',
  intro:'Dari survei zona hingga serah terima, pastikan setiap pekerjaan gondola dan climbing berjalan terencana, terverifikasi, dan terdokumentasi.',
  audience:'Vendor fasad, penanggung jawab teknis, supervisor dan tim lapangan',
  challenges:[
    ['Kesiapan tidak lengkap','Personel, peralatan, izin atau kondisi cuaca tidak terpenuhi dengan baik.'],
    ['Progres sulit dipantau','Status pekerjaan di banyak zona fasad tidak terlihat secara real-time.'],
    ['Dokumentasi tersebar','Hasil pemeriksaan, foto dan BA sering tersimpan di tempat yang berbeda.']
  ],
  benefits:[
    ['Kesiapan terverifikasi','Personel, alat, izin dan cuaca dicek sebelum pekerjaan dimulai.'],
    ['Zona terpantau','Setiap zona fasad terlihat statusnya dari rencana hingga diterima.'],
    ['BA terdokumentasi','Hasil pemeriksaan dan berita acara tersimpan bersama foto pekerjaan.']
  ],
  features:[
    ['grid','Survei zona','Pemetaan area fasad, kategori metode dan tingkat kesulitan.'],
    ['users','Kelayakan personel','Cek kompetensi, sertifikasi dan penugasan tim.'],
    ['tool','Peralatan','Kelola alat gondola, climbing dan kelengkapannya.'],
    ['clip','Izin dan kesiapan','Pantau perizinan dan kondisi cuaca sebelum pekerjaan.'],
    ['flag','Pelaksanaan dan penghentian','Catat pelaksanaan harian dan alasan penghentian bila ada.'],
    ['file','QC / BA','Pemeriksaan hasil, dokumentasi dan berita acara.']
  ],
  flow:[['Survei','Pemetaan dan identifikasi zona'],['Rencanakan','Tentukan metode, resource, jadwal'],['Verifikasi kesiapan','Cek personel, alat, izin, cuaca'],['Kerjakan','Pelaksanaan pekerjaan'],['Periksa','QC hasil pekerjaan'],['BA','Serah terima dengan dokumentasi']],
  roles:[
    ['Pemilik','Memantau progres zona, kendala dan hasil serah terima seluruh pekerjaan fasad.'],
    ['Penanggung jawab teknis','Memverifikasi kesiapan, kelayakan personel dan peralatan sebelum pekerjaan dimulai.'],
    ['Supervisor','Mengatur jadwal zona, memantau pelaksanaan harian dan mencatat penghentian.'],
    ['Tim','Mengisi pemeriksaan pra-pekerjaan dan melaporkan progres zona dari HP.'],
    ['PIC pelanggan','Melihat zona yang dikerjakan, status BA dan dokumentasi hasil.']
  ],
  mock:{ nav:['Beranda','Zona Fasad','Jadwal','Tim & Peralatan','Izin & Cuaca','QC / BA'], active:'Zona Fasad', title:'Progres pekerjaan fasad',
    kpis:[['35','Dikerjakan'],['28','Diterima (BA)'],['8','Belum dikerjakan'],['2','Dihentikan']],
    cols:['Zona','Metode','Tim','Lantai','Status'],
    rows:[['Zona A','Gondola','Tim A','12–20',['ok','Selesai']],['Zona B','Climbing','Tim B','12–20',['warn','Menunggu verifikasi']],['Zona C','Gondola','Tim A','1–11',['ok','Selesai']],['Zona D','Climbing','Tim C','21–30',['info','Dalam proses']],['Zona E','Gondola','Tim B','1–11',['neutral','Terjadwal']]] },
  phone:{ title:'Cek kesiapan pra-pekerjaan', sub:'Zona B · Climbing', items:[['Personel','3 orang bersertifikat','ok','Lengkap'],['Alat','Tali, harness, helm','ok','Lengkap'],['Izin kerja','Disetujui 14 Apr','ok','Ada'],['Kondisi cuaca','Angin sedang','warn','Pantau']], btn:'Simpan' },
  mock2:{ nav:['Beranda','Zona Fasad','Jadwal','Tim & Peralatan','Izin & Cuaca','QC / BA'], active:'Izin & Cuaca', title:'Catatan kendala',
    cols:['Tanggal','Zona','Kendala','Status'],
    rows:[['12 Apr','Zona B','Cuaca tidak mendukung',['warn','Dihentikan']],['14 Apr','Zona D','Akses terhalang',['info','Dialihkan']],['16 Apr','Zona A','Menunggu izin tambahan',['ok','Selesai']]] },
  report:{ title:'Rekap zona pekerjaan', cols:['Item','Jumlah'],
    rows:[['Zona dikerjakan','35'],['Zona diterima (BA)','28'],['Zona belum dikerjakan','8'],['Personel siap','12'],['Peralatan lengkap','8'],['Izin aktif','8']],
    donut:{title:'Status zona',total:'71',items:[['Dikerjakan',35,'#9A4D2E'],['Diterima (BA)',28,'#C99B65'],['Belum',8,'#D9CFC3']]} },
  scope:{ included:['Pengelolaan zona dan metode (gondola, climbing)','Manajemen personel, peralatan dan izin','Pencatatan pelaksanaan, QC dan BA','Laporan progres dan dokumentasi'],
    optional:['Penyesuaian formulir dan alur persetujuan','Laporan khusus sesuai kebutuhan'],
    integrations:[['cleaning','Koordinasi pembersihan setelah pekerjaan fasad']],
    note:'Aplikasi mencatat kontrol yang ditetapkan pihak berwenang; tidak menjamin keselamatan hanya dari checklist. Metode gondola dan climbing tetap dibedakan.' },
  faq:[
    ['Apakah keputusan kelayakan ditentukan oleh aplikasi?','Tidak. Keputusan kelayakan mengikuti verifikasi pihak berwenang. Aplikasi membantu menyiapkan data dan dokumentasi yang dibutuhkan.'],
    ['Apa perbedaan metode gondola dan climbing?','Gondola memakai platform gantung bermesin; climbing memakai tali akses. Keduanya memiliki kebutuhan personel, alat dan pemeriksaan yang berbeda dan dicatat terpisah.'],
    ['Apakah bisa mencatat penghentian pekerjaan?','Bisa. Penghentian karena cuaca, akses atau alasan lain dicatat dengan waktu dan alasan, sehingga progres zona tetap akurat.'],
    ['Apakah bisa diintegrasikan dengan modul lain?','Integrasi opsional dengan SmartOps Cleaning untuk koordinasi pembersihan area setelah pekerjaan fasad.']
  ],
  seo:'SmartOps Gondola & Climbing | Aplikasi Pekerjaan Ketinggian'
},
{
  slug:'garden', name:'Garden', full:'SmartOps Garden', accent:'#2F6B3C', icon:'leaf', group:'operasional',
  card:'Pemantauan kondisi tanaman, penjadwalan perawatan dan tindak lanjut.',
  cardAud:'Untuk tim pertamanan dan pengelola lingkungan.',
  tags:['Kondisi tanaman','Perawatan','Tindak lanjut'],
  headline:'Jadwalkan perawatan dan pantau kondisi area hijau.',
  intro:'Kelola inventaris tanaman, jadwal perawatan, hasil pekerjaan, dan kondisi area hijau dengan lebih terstruktur dan terdokumentasi.',
  audience:'Vendor taman, supervisor landscape, gardener dan pengelola lokasi',
  challenges:[
    ['Program tidak terjadwal','Perawatan sering dilakukan tidak sesuai jadwal atau ada area yang terlewat.'],
    ['Kondisi tanaman tidak terpantau','Perubahan kondisi tanaman sering tidak terdeteksi sejak dini.'],
    ['Tindak lanjut kurang jelas','Temuan di lapangan tidak selalu diikuti dengan aksi perbaikan yang terukur.']
  ],
  benefits:[
    ['Perawatan terjadwal','Program dan jadwal perawatan jelas per area dan jenis pekerjaan.'],
    ['Kondisi terdokumentasi','Pengamatan kondisi tanaman tercatat dengan foto dan tanggal.'],
    ['Tindak lanjut terukur','Temuan diikuti rencana aksi, penggantian atau perawatan khusus.']
  ],
  features:[
    ['layers','Inventaris zona dan tanaman','Data lokasi, jenis tanaman, dan dokumentasi.'],
    ['cal','Program perawatan','Jadwal rutin, jenis pekerjaan, dan frekuensi.'],
    ['clip','Tugas pekerjaan','Penugasan tim dan pemantauan penyelesaian.'],
    ['search','Kondisi dan temuan','Pencatatan hasil pengamatan dan temuan di lapangan.'],
    ['refresh','Penggantian dan material','Pencatatan penggantian tanaman dan penggunaan material.'],
    ['file','Laporan','Rekap pekerjaan, kondisi tanaman, dan dokumentasi foto.']
  ],
  flow:[['Inventaris','Data zona dan tanaman'],['Rencana','Program dan jadwal perawatan'],['Pekerjaan','Pelaksanaan di lapangan'],['Pengamatan','Cek kondisi tanaman dan area'],['Tindak lanjut','Aksi perbaikan jika diperlukan'],['Laporan','Rekap pekerjaan dan kondisi']],
  roles:[
    ['Pemilik','Memantau program perawatan, kondisi tanaman dan area yang perlu tindak lanjut.'],
    ['Supervisor','Menyusun program, menugaskan tim dan memeriksa hasil pekerjaan.'],
    ['Gardener','Mengerjakan tugas perawatan dan mencatat kondisi tanaman dengan foto dari HP.'],
    ['Pengelola lokasi','Melihat kondisi area hijau dan rencana perawatan berikutnya sesuai izin.']
  ],
  mock:{ nav:['Beranda','Area & Tanaman','Jadwal Perawatan','Tugas','Temuan','Laporan'], active:'Area & Tanaman', title:'Kondisi zona taman',
    kpis:[['72','Sehat'],['18','Perlu perhatian'],['6','Penggantian'],['5/6','Tugas hari ini']],
    cols:['Tanaman','Lokasi','Kondisi','Tindakan'],
    rows:[['Palem Raja','Area depan',['ok','Baik'],'Siram rutin'],['Pucuk Merah','Taman timur',['ok','Baik'],'Pangkas ringan'],['Bougenville','Area lobi',['warn','Perlu perhatian'],'Pemupukan'],['Rumput Gajah','Area parkir',['ok','Baik'],'Siram rutin'],['Lili Paris','Rooftop',['err','Penggantian'],'Ganti tanaman']] },
  phone:{ title:'Detail tanaman', sub:'Lili Paris · Rooftop', items:[['Kondisi','Pucuk daun menguning','warn','Perlu perhatian'],['Tindak lanjut','Pemupukan','info','Dijadwalkan'],['Catatan','Berikan pupuk daun 2 minggu','neutral','Catatan']], btn:'Simpan', photo:true },
  mock2:{ nav:['Beranda','Area & Tanaman','Jadwal Perawatan','Tugas','Temuan','Laporan'], active:'Jadwal Perawatan', title:'Aktivitas perawatan',
    cols:['Tanggal','Area','Pekerjaan','Pelaksana','Status'],
    rows:[['10 Apr','Taman Depan','Penyiraman','Tim A',['ok','Selesai']],['12 Apr','Area Timur','Pemangkasan','Tim B',['ok','Selesai']],['14 Apr','Rooftop','Pemupukan','Tim A',['info','Berjalan']],['16 Apr','Area Parkir','Penggantian','Tim B',['neutral','Terjadwal']]] },
  report:{ title:'Aktivitas perawatan', cols:['Tanggal','Area','Pekerjaan','Pelaksana'],
    rows:[['10 Apr','Taman Depan','Penyiraman','Tim A'],['12 Apr','Area Timur','Pemangkasan','Tim B'],['14 Apr','Rooftop','Pemupukan','Tim A'],['16 Apr','Area Parkir','Penggantian','Tim B']],
    donut:{title:'Kondisi tanaman',total:'96',items:[['Sehat',72,'#2F6B3C'],['Perlu perhatian',18,'#C99B65'],['Penggantian',6,'#9A4D2E']]} },
  scope:{ included:['Inventaris zona dan data tanaman','Program dan jadwal perawatan','Pencatatan tugas, kondisi dan temuan','Laporan pekerjaan dan kondisi tanaman'],
    optional:['Penyesuaian kategori dan perawatan khusus','Laporan khusus sesuai kebutuhan'],
    integrations:[['cleaning','Koordinasi penjadwalan pembersihan area taman dan fasilitas sekitar']],
    note:'Pekerjaan selesai dan kondisi tanaman adalah indikator berbeda. Aplikasi mencatat keduanya secara terpisah.' },
  faq:[
    ['Apakah pekerjaan selesai otomatis berarti tanaman dalam kondisi baik?','Tidak. Pekerjaan selesai dan kondisi tanaman adalah indikator berbeda. Aplikasi mencatat keduanya secara terpisah.'],
    ['Apakah bisa mencatat jenis tanaman yang beragam?','Bisa. Inventaris mendukung kategori tanaman, lokasi dan dokumentasi foto per item atau per zona.'],
    ['Bagaimana temuan ditindaklanjuti?','Temuan diberi rencana tindak lanjut: pemupukan, pemangkasan, pengendalian atau penggantian, lalu dipantau hingga selesai.'],
    ['Apakah bisa diintegrasikan dengan modul lain?','Integrasi opsional dengan SmartOps Cleaning untuk koordinasi pembersihan area taman.']
  ],
  seo:'SmartOps Garden | Aplikasi Perawatan Taman'
},
{
  slug:'project', name:'Project', full:'SmartOps Project', accent:'#9A3412', icon:'chart', group:'teknis',
  card:'Pemantauan tahapan pekerjaan, progres dan dokumentasi proyek.',
  cardAud:'Untuk tim proyek dan pengelola pekerjaan.',
  tags:['Tahapan','Progres','Dokumen'],
  headline:'Pantau pekerjaan dari rencana hingga serah terima.',
  intro:'Catat progres, laporan harian, perubahan pekerjaan, hingga serah terima dalam satu aplikasi yang mudah digunakan oleh tim teknis.',
  audience:'Kontraktor kecil, vendor pekerjaan khusus, pengawas, mandor dan pemilik pekerjaan',
  challenges:[
    ['Progres sulit dipantau','Data tersebar dan tidak terbarui secara real-time.'],
    ['Perubahan tidak terdokumentasi','Risiko salah paham dan keterlambatan saat serah terima.'],
    ['Koordinasi banyak pihak rumit','Informasi proyek tidak terpusat dan sulit diakses.']
  ],
  benefits:[
    ['Progres terlihat jelas','Rencana versus realisasi tiap tahap terbaca setiap saat.'],
    ['Perubahan tercatat','Tambah atau ubah pekerjaan terdokumentasi sebelum disetujui.'],
    ['Serah terima terdokumentasi','Status dilaporkan, terverifikasi, diterima dan ditagihkan dipisahkan dengan jelas.']
  ],
  features:[
    ['file','Survei, penawaran dan SPK','Kelola data survei, penawaran dan SPK dalam satu alur.'],
    ['layers','Tahap pekerjaan dan volume','Atur tahap, volume dan target pekerjaan dengan jelas.'],
    ['users','Jadwal dan tim','Rencanakan jadwal dan pembagian tim di lapangan.'],
    ['camera','Laporan harian','Catat pekerjaan, foto, dan kendala dari lapangan.'],
    ['chart','Progres dan QC','Pantau progres rencana vs realisasi dan hasil QC.'],
    ['refresh','Perubahan, BA dan termin','Kelola perubahan pekerjaan serta BA dan termin sesuai paket.']
  ],
  flow:[['Lingkup','Tentukan ruang lingkup pekerjaan'],['Rencana','Susun tahap, jadwal dan tim'],['Laporan hasil','Catat progres dan temuan'],['Verifikasi','Cek dan sahkan laporan'],['Penerimaan','Terima pekerjaan oleh klien'],['Tagihan','Sesuai kontrak dan termin']],
  roles:[
    ['Kontraktor','Memantau seluruh proyek, progres, perubahan dan serah terima dalam satu tampilan.'],
    ['Pengawas','Memverifikasi laporan harian dan hasil QC sebelum diterima klien.'],
    ['Mandor','Mengisi laporan harian, volume tambahan, foto dan kendala dari HP. Informasi biaya tidak tampil tanpa mandat.'],
    ['Pemilik pekerjaan','Melihat progres, perubahan pekerjaan dan BA untuk persetujuan.']
  ],
  mock:{ nav:['Beranda','Proyek','Tahapan','Tugas','Dokumen','Laporan'], active:'Tahapan', title:'Progres proyek · Renovasi Gedung A',
    kpis:[['120','Dilaporkan'],['98','Terverifikasi'],['85','Diterima klien'],['72','Ditagihkan']],
    cols:['Tahap','Mulai','Selesai','Rencana','Realisasi'],
    rows:[['Persiapan','1 Mar','7 Mar','100%',['ok','100%']],['Pekerjaan struktur','8 Mar','20 Mar','80%',['info','70%']],['Pekerjaan MEP','15 Mar','28 Mar','60%',['warn','45%']],['Finishing','21 Mar','30 Mar','30%',['neutral','0%']],['Serah terima','31 Mar','31 Mar','0%',['neutral','0%']]] },
  phone:{ title:'Laporan harian', sub:'Renovasi Gedung A · 14 Mar', items:[['Pekerjaan','Pasang keramik lantai 2','neutral','Hari ini'],['Volume','42 m² (target 40 m²)','ok','Tercapai'],['Kendala','Pengiriman material terlambat','warn','Kendala']], btn:'Simpan laporan', photo:true },
  mock2:{ nav:['Beranda','Proyek','Tahapan','Tugas','Dokumen','Laporan'], active:'Dokumen', title:'Catatan perubahan pekerjaan',
    cols:['Tanggal','Perubahan','Status'],
    rows:[['12 Mar 2024','Tambah pekerjaan partisi',['ok','Disetujui']],['25 Mar 2024','Ubah spesifikasi keramik',['warn','Dalam review']],['10 Apr 2024','Tambah titik lampu',['ok','Disetujui']]] },
  report:{ title:'Rekap progres rencana vs realisasi', cols:['Tahap pekerjaan','Rencana','Realisasi'],
    rows:[['Persiapan','100%','100%'],['Struktur','80%','70%'],['Finishing','60%','45%'],['Serah terima','0%','0%']],
    donut:{title:'Status item pekerjaan',total:'120',items:[['Ditagihkan',72,'#9A3412'],['Diterima klien',13,'#C99B65'],['Terverifikasi',13,'#88776B'],['Dilaporkan',22,'#D9CFC3']]} },
  scope:{ included:['Manajemen proyek dan dokumen','Tahap pekerjaan, jadwal dan tim','Laporan harian, foto dan kendala','Progres, QC dan perubahan pekerjaan','BA dan termin sesuai paket'],
    optional:['Pengelolaan anggaran dan tagihan','Analisis biaya dan profitabilitas','Integrasi dengan sistem lain sesuai kebutuhan'],
    integrations:[['stp','Untuk proyek rehabilitasi atau peningkatan instalasi STP']],
    note:'Status dilaporkan, terverifikasi, diterima klien dan ditagihkan dipisahkan dengan jelas. Visual biaya tidak muncul pada peran mandor tanpa mandat.' },
  faq:[
    ['Apakah SmartOps Project cocok untuk proyek skala kecil?','Ya. Aplikasi dirancang untuk kontraktor kecil dan vendor pekerjaan khusus; lingkup dapat disesuaikan dengan ukuran proyek.'],
    ['Bagaimana pencatatan perubahan pekerjaan dilakukan?','Perubahan diajukan dengan uraian dan volume, ditinjau pengawas, lalu disetujui pemilik pekerjaan sebelum masuk ke progres dan BA.'],
    ['Apakah fitur tagihan wajib digunakan?','Tidak. Tagihan dan termin mengikuti paket dan kontrak. Progres dan BA tetap dapat dikelola tanpa fitur biaya.'],
    ['Siapa saja yang dapat menggunakan aplikasi ini?','Kontraktor, pengawas, mandor dan pemilik pekerjaan dengan hak akses yang berbeda-beda.']
  ],
  seo:'SmartOps Project | Aplikasi Pemantauan Proyek'
},
{
  slug:'stp', name:'STP', full:'SmartOps STP', accent:'#0E6475', icon:'drop', group:'teknis',
  card:'Pemantauan aset, inspeksi dan perawatan instalasi pengolahan air limbah.',
  cardAud:'Untuk tim teknis dan pengelola utilitas.',
  tags:['Aset','Inspeksi','Perawatan'],
  headline:'Dokumentasikan pemeriksaan dan tindak lanjut pemeliharaan STP.',
  intro:'Pantau kondisi peralatan, hasil pemeriksaan, laboratorium dan tindak lanjutnya dalam satu aplikasi yang mudah digunakan oleh tim teknis.',
  audience:'Vendor pemeliharaan, supervisor teknis, teknisi, operator sesuai kontrak dan PIC pelanggan',
  challenges:[
    ['Kondisi peralatan tidak terpantau','Risiko gangguan dan penurunan kinerja instalasi.'],
    ['Pemeriksaan tidak terdokumentasi','Sulit memastikan pemeliharaan sesuai kontrak.'],
    ['Tindak lanjut perbaikan terlambat','Masalah berulang dan operasional terganggu.']
  ],
  benefits:[
    ['Kunjungan terjadwal','Program kunjungan rutin dan checklist tercatat sesuai kontrak.'],
    ['Kondisi alat terdokumentasi','Hasil pemeriksaan dan foto tersimpan per peralatan.'],
    ['Tindak lanjut terpantau','Gangguan, perbaikan dan rekomendasi terlihat statusnya.']
  ],
  features:[
    ['layers','Profil instalasi dan peralatan','Kelola data instalasi, proses dan peralatan secara lengkap.'],
    ['cal','Program kunjungan','Atur jadwal kunjungan rutin sesuai kontrak.'],
    ['clip','Checklist pemeriksaan','Gunakan checklist sesuai jenis instalasi dan peralatan.'],
    ['book','Log operasional','Catat log operasional sesuai tanggung jawab kontrak.'],
    ['flask','Hasil laboratorium','Kelola hasil uji kualitas air dengan rapi.'],
    ['tool','Gangguan dan perbaikan','Catat gangguan, tindakan perbaikan dan statusnya.'],
    ['file','Laporan dan rekomendasi','Hasilkan laporan kunjungan dan rekomendasi tindak lanjut.']
  ],
  flow:[['Inventaris','Data instalasi dan peralatan'],['Jadwalkan','Buat program kunjungan'],['Periksa','Pemeriksaan di lapangan'],['Review','Tinjau hasil dan temuan'],['Tindak lanjut','Perbaiki dan monitor status'],['Laporan','Susun laporan dan rekomendasi']],
  roles:[
    ['Pemilik','Melihat ringkasan kondisi instalasi, riwayat kunjungan dan tindak lanjut secara menyeluruh.'],
    ['Supervisor teknis','Meninjau hasil pemeriksaan, hasil laboratorium dan menetapkan rekomendasi.'],
    ['Teknisi','Mengisi checklist pemeriksaan peralatan, mencatat parameter dan foto dari HP.'],
    ['Operator sesuai kontrak','Mencatat log operasional harian sesuai tanggung jawab yang disepakati.'],
    ['PIC pelanggan','Melihat laporan kunjungan, kondisi alat dan rekomendasi untuk lokasinya.']
  ],
  mock:{ nav:['Beranda','Aset','Inspeksi','Perawatan','Laporan'], active:'Inspeksi', title:'Kunjungan 12 April 2024',
    kpis:[['12','Kunjungan selesai'],['78%','Alat berfungsi baik'],['4','Titik sampel'],['3','Perlu perbaikan']],
    cols:['Peralatan','Lokasi','Parameter','Nilai','Status'],
    rows:[['Pompa inlet','Bak Inlet','Debit (m³/jam)','18',['ok','Normal']],['Blower B-1','Aerasi','Tekanan (bar)','0,8',['ok','Normal']],['Panel listrik','Panel utama','Suhu (°C)','32',['ok','Normal']],['Bak aerasi','Aerasi','pH','7,2',['ok','Normal']],['Bak clarifier','Clarifier','Kekeruhan (NTU)','4',['warn','Perlu perhatian']]] },
  phone:{ title:'Pemeriksaan peralatan', sub:'Blower B-1 · Aerasi', items:[['Kondisi','Berfungsi','ok','Normal'],['Tekanan (bar)','0,8','neutral','Tercatat'],['Rekomendasi','Lanjutkan pemantauan','info','Dicatat']], btn:'Simpan', photo:true },
  mock2:{ nav:['Beranda','Aset','Inspeksi','Perawatan','Laporan'], active:'Perawatan', title:'Temuan kunjungan April 2024',
    cols:['Peralatan','Kondisi','Catatan','Tindak lanjut'],
    rows:[['Blower B-1',['ok','Berfungsi'],'Normal','—'],['Pompa P-2',['warn','Perlu perbaikan'],'Suara bergetar','Jadwalkan perbaikan'],['Panel listrik',['ok','Berfungsi'],'Normal','—'],['Aerator A-1',['neutral','Belum diperiksa'],'—','Jadwalkan pemeriksaan']] },
  report:{ title:'Hasil laboratorium', cols:['Parameter','Hasil','Satuan'],
    rows:[['pH','7,2','—'],['BOD','18','mg/L'],['COD','52','mg/L'],['TSS','28','mg/L']],
    donut:{title:'Kondisi peralatan',total:'15',items:[['Berfungsi',12,'#0E6475'],['Perlu perbaikan',3,'#C99B65']]},
    note:'Pemeliharaan berkala berbeda dari operasional harian. Tidak ada batas baku hasil laboratorium atau jaminan kepatuhan universal pada website ini.' },
  scope:{ included:['Profil instalasi dan data peralatan','Program kunjungan dan checklist','Log operasional sesuai kontrak','Hasil laboratorium','Laporan dan rekomendasi'],
    optional:['Manajemen suku cadang','Analisis tren dan performa','Integrasi dengan sistem lain sesuai kebutuhan'],
    integrations:[['project','Untuk proyek rehabilitasi atau peningkatan instalasi STP']],
    note:'Pemeliharaan berkala berbeda dari pengoperasian harian. Kunjungan selesai, alat berfungsi dan hasil kualitas air adalah tiga hal yang berbeda.' },
  faq:[
    ['Apakah SmartOps STP cocok untuk seluruh jenis instalasi?','Checklist dan profil peralatan dapat disesuaikan dengan jenis instalasi. Detail fitur diselaraskan dengan blueprint STP yang disahkan.'],
    ['Apakah ada batasan parameter hasil laboratorium di aplikasi?','Aplikasi mencatat hasil sesuai laboratorium. Baku mutu mengikuti ketentuan yang berlaku di lokasi masing-masing, tidak ditetapkan oleh website.'],
    ['Bagaimana tindak lanjut perbaikan dicatat?','Gangguan dicatat dengan foto dan deskripsi, kemudian ditetapkan tindakan perbaikan dan dipantau statusnya hingga selesai.'],
    ['Apakah aplikasi ini dapat diintegrasikan dengan SmartOps Project?','Ya, secara opsional. Pekerjaan rehabilitasi besar dapat ditautkan dari instalasi ke proyek; serah terima memperbarui riwayat instalasi.']
  ],
  seo:'SmartOps STP | Aplikasi Pemeliharaan Instalasi STP'
}
];
const BY = Object.fromEntries(PRODUCTS.map(p=>[p.slug,p]));

const INTEGRATIONS = [
  { id:'cgg', title:'Cleaning + Garden + Gondola & Climbing', products:['cleaning','garden','gondola-climbing'], status:['plan','Rencana'],
    tagline:'Pengelolaan area gedung secara terkoordinasi.',
    desc:'Setiap tim bekerja di aplikasinya masing-masing. Manajer dapat melihat ringkasan lintas aplikasi untuk memastikan pekerjaan di area yang sama berjalan selaras.',
    data:['Lokasi dan area kerja','Jadwal pekerjaan','Status penyelesaian','Catatan temuan area'],
    prereq:['Lokasi yang sama pada tiap aplikasi','Pengaturan izin akses lintas aplikasi untuk manajer terkait'],
    scope:['Ringkasan progres, status dan temuan per area','Setiap tim tetap bekerja di aplikasinya masing-masing','Tidak menggabungkan data operasional'],
    mock:{ title:'Ringkasan Area · Gedung Utama', cards:[['cleaning','Cleaning','12 / 14','Area selesai',86],['garden','Garden','5 / 6','Area selesai',83],['gondola-climbing','Gondola & Climbing','2 / 3','Zona selesai',67]] } },
  { id:'sp', title:'STP + Project', products:['stp','project'], status:['plan','Rencana'],
    tagline:'Proyek rehabilitasi besar dengan keterkaitan instalasi dan riwayat serah terima.',
    desc:'Pekerjaan proyek terhubung dengan instalasi dan pengelolaan STP, serta terdokumentasi hingga serah terima. Biaya dan WO tidak dicatat ganda.',
    data:['Lokasi instalasi','Progres pekerjaan proyek','Riwayat serah terima','Riwayat pemeliharaan'],
    prereq:['Lokasi dan aset yang sama','Pengaturan hubungan proyek dengan instalasi terkait'],
    scope:['Memantau progres proyek dan status instalasi','Riwayat serah terima ke operasi','Setiap tim bekerja di aplikasinya masing-masing'],
    mock:{ title:'Proyek & Instalasi Terkait', cards:[['project','Project','70%','Rehabilitasi STP Gedung B',70],['stp','STP','Dalam uji','STP Gedung B · 150 m³/hari',40]] } },
  { id:'sw', title:'Security + Workforce', products:['security','workforce'], status:['plan','Rencana'],
    tagline:'Administrasi personel lebih lanjut, sementara patroli tetap di Security.',
    desc:'Data karyawan dikelola lebih lengkap di Workforce, sedangkan kegiatan patroli dan laporan kejadian tetap berada di Security.',
    data:['Data personel dan penugasan','Jadwal dan kehadiran','Laporan kejadian'],
    prereq:['Personel yang sama di kedua aplikasi','Pengaturan peran dan akses yang sesuai'],
    scope:['Data karyawan dikelola di Workforce','Patroli, insiden dan laporan tetap di Security','Manajer melihat ringkasan keterkaitan yang relevan'],
    mock:{ title:'Karyawan & Penugasan Terkait', cards:[['workforce','Workforce','3','Karyawan aktif ditautkan',100],['security','Security','3 rute','Patroli hari ini · 0 kejadian',100]] } }
];

const HOME_FAQ = [
  ['Bisa menggunakan satu aplikasi saja?','Bisa. Setiap aplikasi SmartOps berdiri sendiri dengan alur, tampilan dan laporan yang lengkap untuk bidangnya. Pilih aplikasi sesuai lingkup yang disepakati.'],
  ['Harus membeli Workforce untuk memakai aplikasi lain?','Tidak. Setiap aplikasi memiliki pengelolaan personel dasar sesuai kebutuhannya. Workforce dipakai bila Anda membutuhkan administrasi tenaga yang lebih lengkap.'],
  ['Apa yang dapat dilihat pelanggan?','Setiap aplikasi menyediakan akses pelanggan atau PIC lokasi dengan batas yang jelas: ringkasan pekerjaan, hasil dan tindak lanjut di lokasinya, bukan data internal vendor.'],
  ['Bagaimana mengetahui kesiapan fitur?','Status setiap aplikasi dan fitur ditampilkan pada halaman produk dan dikonfirmasi saat diskusi kebutuhan. Mockup antarmuka adalah ilustrasi konsep, bukan bukti ketersediaan.']
];
