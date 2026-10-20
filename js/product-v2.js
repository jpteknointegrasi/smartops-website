/* =====================================================================
   Halaman produk versi 2 (layout editorial) — dipakai bila V2[slug] ada.
   Produk: Cleaning, Security. Produk lain cukup menambah entri V2.
   ===================================================================== */

const VI = (d, sw=1.8) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const VICON = {
  cal: VI('<rect x="3.5" y="4.5" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M8 2.8v3.4M16 2.8v3.4"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01M16 16.5h.01" stroke-width="2.6"/>'),
  clip: VI('<rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V3h6v1M9 4h6"/><path d="M9 12.5l2 2 4-4"/>'),
  bars: VI('<path d="M5 20V13M10 20V9M15 20V11M20 20V5"/>', 2.6),
  users: VI('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.8 14.6c2.3.2 4.1 1.8 4.6 4.9"/>'),
  user: VI('<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.8 3.6-6 7-6s6.2 2.2 7 6"/>'),
  doc: VI('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>'),
  search: VI('<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>'),
  map: VI('<path d="M9 4L3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>'),
  refresh: VI('<path d="M20 11a8 8 0 0 0-14.3-4.6L4 8"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.3 4.6L20 16"/><path d="M20 20v-4h-4"/>'),
  pin: VI('<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>'),
  monitor: VI('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M8 11l2.5-2.5 2 2L16 7"/>'),
  mobile: VI('<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10 18.5h4"/><path d="M9.5 10.5l1.8 1.8 3.4-3.4"/>'),
  history: VI('<path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M12 8v4.5l3 2"/>'),
  leaf: VI('<path d="M5 19c0-8 5-13 14-14-.5 9-5.5 14-13 14z"/><path d="M5 19c3-4 6-6.5 9.5-8.5"/>'),
  building: VI('<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15M10.5 21v-3h3v3"/>'),
  info: VI('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8h.01" stroke-width="2.4"/>'),
  plus: VI('<path d="M12 5v14M5 12h14"/>', 2),
  bell: VI('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>'),
  arrowR: VI('<path d="M5 12h14M13 6l6 6-6 6"/>', 2),
  check: VI('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 2.6),
  gear: VI('<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5L19.8 7"/>'),
  grid: VI('<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>'),
  shield: VI('<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M9 12l2 2 4-4"/>'),
  alert: VI('<path d="M12 4l9 16H3z"/><path d="M12 10v4.5M12 17.3h.01" stroke-width="2.3"/>'),
  swap: VI('<path d="M4 8h13l-3.5-3.5M20 16H7l3.5 3.5"/>'),
  checkC: VI('<circle cx="12" cy="12" r="8.5"/><path d="M8.3 12.3l2.5 2.5 5-5"/>'),
  share: VI('<circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8"/>'),
  x: VI('<path d="M7 7l10 10M17 7L7 17"/>', 2.2),
  layers: VI('<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'),
  flask: VI('<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>'),
  camera: VI('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'),
  tool: VI('<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/>')
};

/* ---------- data per produk ---------- */
const V2 = {
  cleaning: {
    theme: { c:'#0E5357', c2:'#13696E', soft:'#E4F0EF', b:'#B07A45', b2:'#9A6837' },
    hero: {
      eyebrow:'SmartOps Cleaning',
      line1:'Setiap area terawat.', line2:'Setiap hasil terpantau.',
      lead:'Kelola jadwal, pekerjaan lapangan, dan pemeriksaan mutu dalam satu alur.',
      img:'assets/cleaning-hero.webp', pos:'right center', mpos:'72% center',
      alt:'Ilustrasi tim cleaning merawat lantai dan kaca lobby gedung sambil memantau checklist di tablet'
    },
    benefit: {
      eyebrow:'Keuntungan', title:['Standar kebersihan','yang terjaga.'],
      side:'Pekerjaan lebih teratur, hasil lebih konsisten, dan lebih mudah diawasi.',
      items:[
        ['cal','Area terjadwal','Setiap area memiliki jadwal dan standar yang jelas.'],
        ['clip','Pekerjaan periodik terpantau','Pekerjaan khusus seperti deep cleaning lebih terkontrol.'],
        ['bars','Mutu hasil diperiksa','Hasil pekerjaan diverifikasi dengan checklist dan QC.']
      ],
      photos:[
        ['assets/cleaning-qc.webp','Supervisor memeriksa hasil pel lantai lobby sambil mencocokkan checklist di tablet','QC langsung di lokasi','Temuan dicatat di tempat, lengkap dengan foto.'],
        ['assets/cleaning-checklist.webp','Petugas cleaning memotret area lobby dengan HP sebagai bukti pekerjaan selesai','Bukti kerja dari HP','Checklist dan foto hasil terkirim dari lapangan.']
      ]
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur untuk','seluruh pekerjaan.'],
      side:'Dari penjadwalan hingga laporan, semua terintegrasi dalam satu aplikasi.',
      items:[
        ['cal','Area & frekuensi','Atur area, jadwal dan tingkat frekuensi pembersihan.'],
        ['users','Penugasan petugas','Tetapkan petugas sesuai area dan jadwal, termasuk pengganti.'],
        ['clip','Checklist pekerjaan','Standar kerja digital di setiap area.'],
        ['doc','Pekerjaan periodik','Jadwalkan pekerjaan khusus seperti deep cleaning.'],
        ['search','QC & rework','Pemeriksaan hasil dan tindak lanjut jika belum sesuai.'],
        ['bars','Laporan','Rekap kerja, hasil QC, dan riwayat pekerjaan.']
      ]
    },
    flow: {
      eyebrow:'Cara kerja', title:['Dari rencana','hingga laporan.'],
      side:'Alur kerja yang jelas, memudahkan koordinasi di semua level.',
      steps:[
        ['map','Petakan','Tentukan area dan standar kerja.'],
        ['cal','Jadwalkan','Atur jadwal dan penugasan.'],
        ['user','Kerjakan','Petugas melakukan pekerjaan sesuai checklist.'],
        ['search','Periksa','QC memeriksa hasil pekerjaan.'],
        ['refresh','Perbaiki','Tindak lanjut jika belum sesuai.'],
        ['bars','Laporkan','Hasil terdokumentasi dan siap dievaluasi.']
      ]
    },
    roles: {
      eyebrow:'Aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Setiap peran melihat informasi yang relevan dengan pekerjaannya.',
      list:[
        ['Pemilik',[['monitor','Pantau seluruh lokasi dalam satu dashboard'],['bars','Lihat progres harian dan status pekerjaan'],['history','Akses laporan dan histori kapan saja']]],
        ['Supervisor',[['cal','Susun jadwal dan tetapkan pengganti'],['search','Lakukan QC dengan foto dan catatan'],['refresh','Kembalikan pekerjaan yang belum sesuai']]],
        ['Leader',[['users','Bagi tugas harian ke petugas'],['clip','Pastikan checklist tiap area terisi'],['bell','Laporkan kendala di lapangan']]],
        ['Cleaner',[['mobile','Lihat tugas hari ini dari HP'],['clip','Isi checklist area satu per satu'],['doc','Lampirkan foto hasil pekerjaan']]],
        ['PIC lokasi',[['pin','Lihat status area di lokasinya'],['search','Pantau temuan QC dan tindak lanjutnya'],['history','Unduh laporan sesuai izin akses']]]
      ]
    },
    dash: {
      nav:[['grid','Dashboard'],['pin','Lokasi'],['users','Penugasan'],['clip','Checklist'],['search','QC'],['bars','Laporan'],['gear','Pengaturan']],
      title:'Ringkasan Operasional', location:'Jakarta Residence',
      kpis:[['pin','12','Total Lokasi'],['clip','248','Area Dibersihkan'],['users','36','Petugas aktif'],['refresh','18','Dalam Proses']],
      cards:[
        { type:'donut', title:'Status Pekerjaan Hari Ini', total:'248', label:'Total Area', items:[['Selesai',180,'#13797A'],['Dalam Proses',42,'#5FB3A8'],['Menunggu',18,'#D9A15B'],['Tidak Sesuai',8,'#C0463B']] },
        { type:'list', title:'Aktivitas Terbaru', rows:[['Area Lobby','Selesai','08.32','ok','lobby'],['Lift & Koridor','Selesai','08.20','ok','lift'],['Toilet Publik','Dalam Proses','08.15','run','toilet'],['Area Parkir','Menunggu','07.50','wait','parkir']] }
      ],
      phone:{ title:'Detail Area', area:'Area Lobby', sub:'Lantai 1 · Gedung A', img:'assets/th-area.webp', checks:[['Lantai',1],['Kaca & Pintu',1],['Fasilitas',1],['Kebersihan Umum',0]], btn:'Selesai' }
    },
    report: {
      eyebrow:'Laporan', title:['Laporan yang','membantu evaluasi.'],
      side:'Lihat perkembangan pekerjaan, temuan QC, dan riwayat kerja untuk perbaikan berkelanjutan.',
      table:{ kind:'numeric', title:'Rekap Pekerjaan per Area', cols:['Area','Target','Selesai','Dalam Proses','Tidak Sesuai'],
        rows:[['Lobby',28,26,2,0],['Lift & Koridor',36,32,3,1],['Toilet Publik',24,20,3,1],['Area Parkir',18,14,3,1]] },
      chart:{ title:'Tren Penyelesaian Pekerjaan', labels:['1 Apr','3 Apr','5 Apr','7 Apr','9 Apr','11 Apr','13 Apr'],
        series:[['Selesai','#13797A',[34,46,57,63,79,96,108]],['Dalam Proses','#D9A15B',[10,17,24,30,38,45,47]]], max:120 }
    },
    scope: {
      eyebrow:'Integrasi & lingkup', title:['Terhubung dengan','operasional Anda.'],
      side:'Mudah disesuaikan dengan kebutuhan gedung dan tim Anda.',
      core:[['users','Manajemen tim','Data petugas, jadwal, dan pembagian area.'],['pin','Lokasi & area','Multi lokasi, gedung, dan area kerja.'],['clip','Checklist & QC','Standar kerja, inspeksi, dan tindak lanjut.']],
      extra:[['garden','leaf','Perawatan area hijau dan taman.'],['gondola-climbing','building','Pekerjaan fasad dan area tinggi.']],
      optional:['Pekerjaan khusus (deep cleaning) sesuai lingkup','Laporan khusus pelanggan'],
      note:'Checklist selesai belum berarti QC lulus. Semua hasil pekerjaan tetap melalui pemeriksaan sesuai standar.'
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Cleaning.',
      items:[
        ['Apakah SmartOps bisa digunakan untuk beberapa lokasi?','Bisa. Pengelola memantau banyak lokasi, gedung, dan area dari satu dashboard, sedangkan petugas hanya melihat lokasi tempat ia ditugaskan.'],
        ['Siapa yang melakukan pemeriksaan hasil pekerjaan?','Supervisor atau petugas QC yang ditunjuk. Pemeriksa bukan orang yang mengerjakan, dan hasil yang belum sesuai dikembalikan sebagai rework dengan alasan yang tercatat.'],
        ['Apakah ada integrasi dengan sistem lain?','Integrasi opsional tersedia dengan SmartOps Garden serta Gondola & Climbing. Kebutuhan integrasi dengan sistem lain dibahas sesuai lingkup proyek.'],
        ['Apakah bisa mengatur pekerjaan periodik seperti deep cleaning?','Bisa. Pekerjaan harian, mingguan, dan bulanan dijadwalkan per area dan dipantau jatuh temponya.'],
        ['Bagaimana jika petugas berhalangan?','Supervisor menunjuk pengganti sehingga cakupan area tetap terpenuhi, dan tercatat siapa yang mengerjakan.'],
        ['Apakah hasil pekerjaan bisa dilampirkan foto?','Bisa. Petugas dan pemeriksa dapat melampirkan foto hasil serta catatan pada setiap checklist dan QC.']
      ]
    },
    cta: { title:'Siap menata pekerjaan cleaning?', text:'Diskusikan kebutuhan Anda, dan lihat bagaimana SmartOps dapat membantu operasional Anda.' }
  },

  security: {
    theme: { c:'#123F56', c2:'#1A5470', soft:'#E3EDF2', b:'#96652F', b2:'#7F5424' },
    hero: {
      eyebrow:'SmartOps Security',
      line1:'Penjagaan terpantau.', line2:'Patroli terdokumentasi.',
      lead:'Kelola pos, regu, patroli, dan tindak lanjut insiden dalam satu alur.',
      for:'Pemilik vendor, manager operasi, chief/Danru, petugas, dan PIC pelanggan.',
      img:'assets/security-hero.webp', pos:'right center', mpos:'58% center',
      alt:'Petugas keamanan melakukan patroli, menjaga pos, dan meninjau kegiatan melalui perangkat aplikasi.'
    },
    benefit: {
      eyebrow:'Manfaat', title:['Pengamanan lebih','terstruktur.'],
      side:'Membantu tim pengelola keamanan dan vendor jasa pengamanan memantau penjagaan, serah terima, serta tindak lanjut secara terstruktur dan terdokumentasi.',
      items:[
        ['shield','Cakupan pos jelas','Status setiap pos dan cakupan area dapat dipantau.'],
        ['clip','Serah terima tercatat','Logbook dan serah terima antarshift tersimpan dan mudah ditelusuri.'],
        ['doc','Insiden ditindaklanjuti','Temuan dicatat, ditugaskan, dan dipantau sampai penyelesaian.']
      ],
      problems:['Petugas hadir, tetapi pos kosong','Catatan serah terima sulit ditelusuri','Temuan tanpa tindak lanjut yang jelas']
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur untuk','operasional keamanan.'],
      side:'Dari penempatan pos hingga laporan shift, semua tercatat di satu aplikasi.',
      items:[
        ['users','Pos & regu','Pengelolaan pos, cakupan area, dan komposisi regu.'],
        ['cal','Jadwal & cakupan','Jadwal penjagaan dan penugasan untuk setiap pos.'],
        ['doc','Logbook & serah terima','Pencatatan kegiatan, informasi penting, dan serah terima shift.'],
        ['pin','Patroli & checkpoint','Jadwal patroli, titik pemeriksaan, dan bukti pelaksanaan.'],
        ['alert','Insiden & respons','Pencatatan temuan, penugasan penanganan, dan status penyelesaian.'],
        ['bars','Laporan shift','Rekap penjagaan, patroli, dan insiden per periode.']
      ],
      photos:[
        ['assets/security-patrol.webp','Petugas mendokumentasikan checkpoint patroli menggunakan HP.','Patroli dengan checkpoint','Setiap titik pemeriksaan tercatat waktunya dari HP petugas.'],
        ['assets/security-handover.webp','Petugas dan Danru meninjau logbook pada serah terima shift.','Serah terima shift','Danru meninjau logbook bersama regu saat pergantian shift.']
      ]
    },
    flow: {
      eyebrow:'Cara kerja', title:['Dari penugasan','hingga evaluasi.'],
      side:'Setiap shift berjalan dengan urutan yang sama, sehingga mudah ditinjau.',
      steps:[
        ['clip','Atur penjagaan','Tentukan pos, regu, dan jadwal.'],
        ['users','Tugaskan regu','Plot petugas pada setiap pos.'],
        ['mobile','Catat pelaksanaan','Isi logbook dan dokumentasi patroli.'],
        ['alert','Tangani temuan','Catat insiden dan tugaskan tindak lanjut.'],
        ['search','Review','Danru dan manager meninjau pelaksanaan.'],
        ['checkC','Laporan shift','Susun rekap per periode.']
      ]
    },
    roles: {
      eyebrow:'Aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Setiap peran melihat informasi yang relevan dengan pekerjaannya.',
      list:[
        ['Pemilik',[['shield','Pantau kondisi penjagaan di seluruh lokasi'],['pin','Lihat pelaksanaan patroli dan temuan penting'],['doc','Akses laporan untuk evaluasi operasional']], {
          title:'Ringkasan Operasional', location:'Semua lokasi',
          kpis:[['users','34/36','Personel hadir'],['shield','12/14','Pos terisi'],['pin','18/22','Patroli selesai'],['alert','2','Temuan terbuka']],
          cards:[
            { type:'bars', title:'Pos terisi per Lokasi', rows:[['Gedung Melati',4,4],['Gedung Kenanga',3,4],['Area Parkir',2,3],['Ruang Utilitas',3,3]] },
            { type:'list', title:'Checkpoint Patroli', rows:[['Lobby Utama','Gedung Melati','08.12','ok'],['Lift & Koridor','Gedung Melati','09.05','ok'],['Area Parkir','Basement 1','09.28','run'],['Ruang Utilitas','Lantai 2','—','wait']] }
          ] }],
        ['Manager',[['pin','Pantau lokasi dan penugasan per shift'],['bars','Lihat progres operasional harian'],['doc','Evaluasi laporan dan temuan']], {
          title:'Pemantauan Lokasi', location:'Gedung Melati',
          kpis:[['users','12/12','Personel hadir'],['shield','4/4','Pos terisi'],['pin','7/8','Patroli selesai'],['alert','1','Temuan terbuka']],
          cards:[
            { type:'bars', title:'Penugasan per Shift', rows:[['Pagi',4,4],['Siang',4,4],['Malam',3,4]] },
            { type:'list', title:'Temuan & Tindak Lanjut', rows:[['Lampu koridor padam','Selesai','07.40','ok'],['Pintu tidak terkunci','Diteruskan ke BM','09.15','wait'],['Kamera lobby buram','Sedang ditindaklanjuti','10.02','run']] }
          ] }],
        ['Danru',[['shield','Cek cakupan pos dan kehadiran regu'],['swap','Tinjau serah terima dan logbook shift'],['search','Review temuan dan pelaksanaan patroli']], {
          title:'Serah Terima Shift', location:'Shift Pagi → Siang',
          kpis:[['users','8/8','Regu hadir'],['shield','4/4','Pos terisi'],['doc','6','Entri logbook'],['alert','1','Temuan terbuka']],
          cards:[
            { type:'list', title:'Logbook Shift Pagi', rows:[['Kunci ruang panel diserahkan','Pos Lobby','06.55','ok'],['Tamu kontraktor lift','Pos Lobby','08.30','ok'],['Pintu darurat terbuka','Pos Belakang','09.10','run']] },
            { type:'bars', title:'Status Pos', rows:[['Pos Lobby',2,2],['Pos Parkir',2,2],['Pos Belakang',1,1],['Pos Utilitas',1,1]] }
          ] }],
        ['Petugas',[['mobile','Lihat pos penugasan dan jadwal patroli di HP'],['checkC','Catat checkpoint satu per satu'],['alert','Laporkan temuan beserta foto']], {
          title:'Tugas Saya', location:'Pos Lobby · Shift Pagi',
          kpis:[['pin','Lobby','Pos penugasan'],['refresh','2/3','Ronde patroli'],['checkC','6/8','Checkpoint'],['doc','2','Entri logbook']],
          cards:[
            { type:'list', title:'Checkpoint Ronde 2', rows:[['Lobby Utama','Tercatat','08.12','ok'],['Lift & Koridor','Tercatat','09.05','ok'],['Area Parkir','Berikutnya','—','run'],['Pintu Darurat','Belum','—','wait']] },
            { type:'list', title:'Logbook Saya', rows:[['Serah terima kunci','Pos Lobby','06.55','ok'],['Tamu kontraktor lift','Pos Lobby','08.30','ok']] }
          ] }],
        ['PIC pelanggan',[['building','Lihat ringkasan lokasi yang menjadi tanggung jawab Anda'],['alert','Pantau temuan dan status tindak lanjutnya'],['history','Unduh laporan sesuai hak akses']], {
          title:'Laporan Lokasi', location:'Gedung Melati (lokasi Anda)',
          kpis:[['shield','4/4','Pos terisi'],['pin','7/8','Patroli selesai'],['alert','1','Temuan terbuka'],['checkC','5','Temuan selesai']],
          cards:[
            { type:'bars', title:'Pelaksanaan Patroli Minggu Ini', rows:[['Senin',8,8],['Selasa',8,8],['Rabu',7,8],['Kamis',8,8]] },
            { type:'list', title:'Temuan di Lokasi Anda', rows:[['Lampu koridor padam','Selesai','07.40','ok'],['Pintu tidak terkunci','Diteruskan ke BM','09.15','wait']] }
          ] }]
      ]
    },
    dash: {
      nav:[['grid','Dashboard'],['shield','Pos'],['cal','Jadwal'],['pin','Patroli'],['alert','Insiden'],['bars','Laporan']],
      phone:{ title:'Checklist Patroli', area:'Gedung Melati', sub:'Ronde 2 · 12 Okt 2026', checks:[['Lobby Utama',1,'08.12'],['Lift & Koridor',1,'09.05'],['Area Parkir',0],['Ruang Utilitas',0],['Pintu Darurat',0]], btn:'Simpan checkpoint' }
    },
    report: {
      eyebrow:'Laporan', title:['Setiap kegiatan','dapat ditelusuri.'],
      side:'Rekap patroli, temuan, dan tindak lanjut menjadi dasar evaluasi operasional.',
      table:{ kind:'rows', title:'Rekap Patroli & Temuan', cols:['Tanggal','Area','Patroli','Temuan','Tindak lanjut','Status'],
        rows:[['12 Okt','Lobby Utama',4,1,'Lampu koridor diganti',['ok','Selesai']],['12 Okt','Lift & Koridor',4,1,'Kamera lobby dibersihkan',['run','Sedang ditindaklanjuti']],['12 Okt','Area Parkir',3,0,'—',['none','Tanpa temuan']],['12 Okt','Ruang Utilitas',4,1,'Pintu tidak terkunci',['wait','Diteruskan ke BM']],['12 Okt','Pintu Darurat',2,0,'—',['none','Tanpa temuan']]] },
      chart:{ title:'Pelaksanaan Patroli 7 Hari', labels:['6 Okt','7 Okt','8 Okt','9 Okt','10 Okt','11 Okt','12 Okt'],
        series:[['Terjadwal','#9AA9B2',[22,22,22,22,22,22,22]],['Terlaksana','#123F56',[20,21,19,22,21,22,17]]], max:25, ticks:[0,5,10,15,20,25] },
      notes:['Kehadiran personel, pos terisi, dan pelaksanaan patroli dihitung terpisah.']
    },
    scope: {
      eyebrow:'Cakupan & integrasi', title:['Terhubung dengan','tim dan lokasi.'],
      side:'Lingkup inti siap dipakai; modul tambahan dan integrasi menyesuaikan paket.',
      core:[['building','Manajemen pos','Pos, regu, dan cakupan area.'],['cal','Jadwal','Penjagaan dan patroli.'],['doc','Logbook','Kegiatan dan serah terima.'],['pin','Patroli','Checkpoint terstruktur di seluruh area.'],['alert','Insiden','Temuan, tindak lanjut, dan status.'],['bars','Laporan','Rekap operasional per periode.']],
      extra:[['workforce','share','Sinkronisasi data personel, penugasan, dan jadwal.']],
      optional:['Pencatatan tamu','Izin barang/kendaraan sesuai lingkup','Laporan khusus pelanggan'],
      note:'Kehadiran berbeda dari pos terisi. Petugas yang hadir belum tentu sudah menempati pos sesuai penugasan, sehingga keduanya dipantau terpisah.'
    },
    modules: {
      eyebrow: 'Modul lengkap',
      title: ['Lebih dari', 'pos dan patroli.'],
      side: 'Rincian modul yang sudah dibangun di SmartOps Security. Yang aktif di tiap lokasi mengikuti paket dan tahap implementasi.',
      groups: [
        ['users', 'Regu, plotting & absensi', [
          'Plotting pos per regu per shift — terlihat siapa jaga di mana saat ini juga',
          'Roster pola 2-2-2 dengan rotasi otomatis; pengganti lintas regu tercatat',
          'Absensi selfie dari HP terhubung ke plotting — telat dan pos kosong langsung terdeteksi',
          'Briefing awal shift, logbook pos, dan serah terima antarshift',
        ]],
        ['alert', 'Insiden, SOS & tamu', [
          'Laporan insiden berjenjang (anggota → Danru → Chief) dengan foto dan nomor resmi',
          'Status dipisah: urgensi, progres penanganan, dan persetujuan',
          'Tombol SOS yang langsung memberi tahu Danru dan Chief di lokasi yang sama',
          'Tamu dan kendaraan (termasuk daftar blokir plat), Lost & Found, izin barang',
        ]],
        ['shield', 'Aset, SDM & kepatuhan', [
          'Registri aset — HT, senter, kunci, seragam — dengan pemegang dan riwayat serah terima',
          'Audit kelengkapan bulanan per pos dan per regu dari lapangan',
          'Data personel, KTA Satpam & sertifikat Gada dengan pengingat kedaluwarsa (Perpol 1/2023)',
          'Cuti, izin, SP, serta payroll & lembur dari data absensi, dengan pemisahan tugas',
          'Template Renpam dan Renkon untuk audit SMP (Perkap 24/2007)',
        ]],
        ['bars', 'Laporan bulanan dari data', [
          'Dirakit dari absensi, patroli, insiden, dan aset — tanpa rekap ulang di Excel',
          'Dua versi: internal vendor dan pelanggan (BM/P3SRS)',
          'Ekspor PDF, Excel, dan Word',
          'Jejak audit: setiap angka dapat ditelusuri ke data sumbernya',
        ]],
      ],
      note: 'Payroll dan modul SDM mengikuti paket. Portal pelanggan Security disiapkan pada tahap berikutnya.',
    },
    caseStudy: {
      eyebrow: 'Website vendor',
      title: ['Setiap vendor punya', 'website sendiri.'],
      side: 'Termasuk di SmartOps Security: halaman profil perusahaan untuk pelanggan dan calon pelanggan, dengan nama, warna, dan layanan vendor itu sendiri.',
      monogram: 'PS81',
      status: 'Contoh · Mode demo',
      company: 'PT. Prima Sejahtera Delapan Satu',
      site: 'Security Grand Asia Afrika Residence',
      address: 'Jl. Bali No.3, Merdeka, Sumur Bandung, Kota Bandung',
      text: 'Setiap vendor keamanan yang memakai SmartOps Security mendapat halaman profil dari template yang sama: tentang perusahaan, layanan, keunggulan, area tugas, dan kontak. Halaman ini menjadi website vendor, sementara tim internalnya masuk ke aplikasi dari tombol staf di halaman yang sama.',
      usesLabel: 'Isi halaman vendor',
      uses: [
        ['building', 'Profil dan nilai perusahaan'],
        ['shield', 'Layanan pengamanan yang ditawarkan'],
        ['pin', 'Area tugas dan peta lokasi'],
        ['users', 'Kontak, WhatsApp, dan masuk staf'],
      ],
      link: ['Lihat contoh: halaman PS81', 'https://app.smart-ops.biz.id/v/ps81', 'PT Prima dipakai sebagai data contoh mode demo. Isi halaman tiap vendor diganti dengan profil perusahaan masing-masing.'],
    },
    packages: {
      eyebrow: 'Paket',
      title: ['Mulai dari satu lokasi,', 'tumbuh bertahap.'],
      side: 'Paket disesuaikan dengan jumlah lokasi dan personel. Harga diberikan setelah diskusi kebutuhan.',
      items: [
        ['Starter', '1 lokasi, hingga 30 personel.', 'Hubungi kami'],
        ['Profesional', '1–5 lokasi, hingga 150 personel, termasuk aset dan payroll.', 'Hubungi kami'],
        ['Enterprise', 'Multi-lokasi dan multi-vendor, termasuk portal pelanggan.', 'Minta penawaran'],
      ],
      allLabel: 'Semua paket termasuk',
      all: ['Ekspor PDF, Excel, dan Word', 'Jejak audit', 'Pendampingan onboarding'],
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Security.',
      items:[
        ['Apa perbedaan antara kehadiran dan pos terisi?','Kehadiran menunjukkan petugas hadir di lokasi; pos terisi menunjukkan petugas ditempatkan pada pos sesuai penugasan. Keduanya dipantau sebagai informasi berbeda.'],
        ['Siapa saja yang dapat menggunakan SmartOps Security?','Pemilik vendor, manager operasi, chief/Danru, petugas, dan PIC pelanggan, masing-masing dengan hak akses sesuai perannya.'],
        ['Apa yang dapat dilihat PIC pelanggan?','Ringkasan penjagaan, patroli, temuan, dan laporan pada lokasi yang menjadi tanggung jawabnya sesuai hak akses. Data lokasi pelanggan lain tidak ditampilkan.'],
        ['Apakah SmartOps Security harus terintegrasi dengan Workforce?','Tidak harus. Integrasi Workforce bersifat opsional sesuai kebutuhan sinkronisasi personel dan lingkup implementasi.'],
        ['Apakah aplikasi ini bisa menangani respons SOS?','Tombol SOS mengirim peringatan ke Danru dan Chief di lokasi yang sama, termasuk notifikasi saat aplikasi tertutup. Fitur ini sudah diuji di server; uji lapangan lintas perangkat berjalan selama pilot, dan SOS tetap melengkapi — bukan menggantikan — prosedur darurat lokasi.']
      ]
    },
    cta: { title:'Siap menata operasional security?', text:'Diskusikan kebutuhan lokasi, tim, dan alur kerja Anda bersama tim kami.' }
  },
  'pest-control': {
    theme: { c:'#52672D', c2:'#5F7834', soft:'#EEF1E3', b:'#96652F', b2:'#7F5424' },
    hero: {
      eyebrow:'SmartOps Pest Control',
      line1:'Titik terpantau.', line2:'Tindakan terdokumentasi.',
      lead:'Kelola inspeksi, temuan, dan tindak lanjut pengendalian hama dalam satu alur.',
      for:'Vendor pest control, reviewer teknis, teknisi, dan pelanggan.',
      img:'assets/pest-hero.webp', pos:'right center', mpos:'62% center', shift:'26%',
      alt:'Teknisi memeriksa perangkat monitoring hama dan mencatat hasil melalui tablet.'
    },
    benefit: {
      eyebrow:'Manfaat', title:['Pengendalian berbasis','catatan lapangan.'],
      side:'Catat hasil inspeksi dan tindakan secara terstruktur untuk membantu pemantauan kondisi lingkungan.',
      items:[
        ['doc','Riwayat tiap titik','Catatan perangkat dan titik monitoring dapat ditelusuri dari waktu ke waktu.'],
        ['clip','Tindakan tercatat','Hasil inspeksi, foto, tindakan, dan material terdokumentasi.'],
        ['cal','Monitor ulang terencana','Titik yang perlu perhatian dijadwalkan untuk diperiksa kembali.']
      ],
      problems:['Titik tidak terdokumentasi','Titik tak dapat diakses dianggap nihil aktivitas','Temuan tanpa tindak lanjut yang jelas']
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur untuk','pengendalian hama.'],
      side:'Dari survei dan program hingga analisis, semua tercatat dalam satu aplikasi.',
      items:[
        ['clip','Survei & program','Data awal, program monitoring, target area, dan rencana pekerjaan.'],
        ['pin','Titik & perangkat','Daftar titik monitoring serta perangkat seperti trap dan bait station.'],
        ['checkC','Inspeksi','Kondisi perangkat, observasi aktivitas, foto, dan catatan.'],
        ['shield','Treatment & material','Rekam tindakan pengendalian dan material sesuai program.'],
        ['doc','Temuan & tindak lanjut','Temuan hama, penugasan tindakan, dan rencana pemeriksaan kembali.'],
        ['bars','Analisis & laporan','Tren temuan, evaluasi tindakan, dan rekomendasi.']
      ],
      photos:[
        ['assets/pest-inspection.webp','Teknisi memeriksa titik monitoring dan mendokumentasikan hasil melalui HP.','Inspeksi tiap titik','Kondisi perangkat dan foto dicatat langsung dari HP teknisi.'],
        ['assets/pest-review.webp','Reviewer teknis dan teknisi meninjau hasil inspeksi serta tindak lanjut.','Review & tindak lanjut','Reviewer teknis menilai temuan dan menjadwalkan monitor ulang.']
      ]
    },
    flow: {
      eyebrow:'Alur kerja', title:['Dari inspeksi hingga','monitor ulang.'],
      side:'Proses yang terstruktur untuk memastikan setiap temuan ditangani dengan tepat.',
      steps:[
        ['clip','Program','Tentukan area, titik, dan rencana.'],
        ['cal','Jadwalkan','Atur jadwal inspeksi dan teknisi.'],
        ['search','Periksa','Inspeksi tiap titik dan catat hasil.'],
        ['tool','Tindakan','Lakukan pengendalian sesuai program.'],
        ['doc','Review','Evaluasi hasil dan temuan.'],
        ['refresh','Monitor ulang','Periksa kembali titik yang dipantau.']
      ]
    },
    roles: {
      eyebrow:'Tampilan aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Status pemeriksaan dan hasil pengamatan ditampilkan terpisah di setiap peran.',
      list:[
        ['Pemilik',[['monitor','Pantau status titik di seluruh lokasi'],['bars','Lihat tren temuan dan pelaksanaan'],['doc','Pantau tindak lanjut sampai selesai']], {
          title:'Titik Monitoring', location:'Semua lokasi',
          kpis:[['pin','48','Total titik'],['checkC','41','Sudah diperiksa'],['clip','5','Belum diperiksa'],['alert','2','Tidak dapat diakses']],
          cards:[{ type:'tbl', title:'Status Titik', cols:['Lokasi / Area','Titik','Pemeriksaan','Hasil pengamatan','Terakhir'],
            rows:[['Tower A / Lobby','BS-01',['ok','Diperiksa'],'Nihil aktivitas','10 Okt'],['Tower A / Parkir','BS-07',['wait','Belum diperiksa'],'—','—'],['Tower B / Lt 5','LT-03',['ok','Diperiksa'],'Ada aktivitas','9 Okt'],['Area Servis','BS-12',['bad','Tidak dapat diakses'],'—','8 Okt']] }] }],
        ['Reviewer teknis',[['search','Review hasil inspeksi dan tindakan'],['checkC','Setujui atau kembalikan dengan catatan'],['refresh','Rekomendasikan monitor ulang']], {
          title:'Review Inspeksi', location:'Tower B',
          kpis:[['clip','12','Menunggu review'],['checkC','28','Disetujui'],['refresh','3','Dikembalikan'],['cal','6','Monitor ulang']],
          cards:[
            { type:'list', title:'Temuan perlu review', rows:[['LT-03 · Lalat','Ada aktivitas · Lantai 5','9 Okt','run'],['BS-09 · Tikus','Ada aktivitas · Basement','9 Okt','run'],['BS-12 · Area Servis','Tidak dapat diakses','8 Okt','wait']] },
            { type:'bars', title:'Monitor ulang terjadwal', rows:[['Lantai 5',1,2],['Basement',0,2],['Area Servis',1,2]] }
          ] }],
        ['Teknisi',[['mobile','Lihat jadwal dan daftar titik di HP'],['checkC','Catat kondisi perangkat dan foto'],['tool','Rekam tindakan dan material']], {
          title:'Jadwal Hari Ini', location:'Tower A · 12 Okt',
          kpis:[['pin','14','Titik hari ini'],['checkC','9','Sudah diperiksa'],['clip','4','Belum diperiksa'],['alert','1','Tidak dapat diakses']],
          cards:[
            { type:'list', title:'Titik berikutnya', rows:[['BS-04 · Lobby Utama','Belum diperiksa','—','wait'],['BS-05 · Pantry','Belum diperiksa','—','wait'],['LT-01 · Ruang Sampah','Tidak dapat diakses','09.20','bad']] },
            { type:'list', title:'Tindakan & material', rows:[['Penggantian umpan BS-03','Material tercatat','09.40','ok'],['Pembersihan LT-02','Tercatat','10.15','ok']] }
          ] }],
        ['Pelanggan',[['building','Lihat ringkasan lokasi Anda'],['doc','Unduh laporan bulanan sesuai hak akses'],['alert','Pantau temuan dan tindak lanjutnya']], {
          title:'Laporan Lokasi', location:'Tower A (lokasi Anda)',
          kpis:[['pin','24','Titik di lokasi'],['checkC','22','Sudah diperiksa'],['alert','2','Belum / tidak dapat diakses'],['doc','7/8','Tindak lanjut selesai']],
          cards:[
            { type:'bars', title:'Titik diperiksa per bulan', rows:[['Agustus',24,24],['September',23,24],['Oktober',22,24]] },
            { type:'list', title:'Temuan & tindak lanjut', rows:[['Semut · Pantry','Selesai','3 Okt','ok'],['Tikus · Parkir','Monitor ulang','9 Okt','run']] }
          ] }]
      ]
    },
    dash: {
      nav:[['grid','Dashboard'],['pin','Lokasi'],['checkC','Inspeksi'],['alert','Temuan'],['refresh','Tindak Lanjut'],['bars','Laporan']],
      phone:{ title:'Inspeksi Titik', area:'BS-04 · Lobby Utama', sub:'Tower A · Bait station', img:'assets/th-pc-box.webp',
        groups:[['Status pemeriksaan',['Sudah diperiksa','Belum diperiksa','Tidak dapat diakses'],0],['Hasil pengamatan',['Ada aktivitas','Nihil aktivitas'],1]],
        note:'Umpan utuh, tidak ada jejak.', btn:'Simpan' }
    },
    report: {
      eyebrow:'Laporan & analisis', title:['Tren temuan','untuk evaluasi.'],
      side:'Telusuri pola temuan, tindakan, serta kebutuhan pemeriksaan ulang dari waktu ke waktu.',
      table:{ kind:'rows', head:0, title:'Temuan per Bulan · Tower A & B', cols:['Bulan','Titik diperiksa','Tikus','Lalat','Kecoa','Semut','Tindak lanjut'],
        rows:[['Jan 2026','46/48',5,12,18,25,'18/25'],['Feb 2026','47/48',3,10,14,20,'16/20'],['Mar 2026','45/48',4,8,11,18,'15/18'],['Apr 2026','48/48',2,6,9,12,'10/12'],['Mei 2026','46/48',1,5,7,10,'9/10'],['Jun 2026','47/48',2,4,6,8,'7/8']] },
      chart:{ title:'Tren jumlah temuan', labels:['Jan','Feb','Mar','Apr','Mei','Jun'],
        series:[['Tikus','#52672D',[5,3,4,2,1,2]],['Lalat','#2F7FA8',[12,10,8,6,5,4]],['Kecoa','#C0563B',[18,14,11,9,7,6]],['Semut','#D9A15B',[25,20,18,12,10,8]]], max:30, ticks:[0,10,20,30] },
      notes:['Temuan = jumlah titik dengan aktivitas per jenis hama, hanya dari titik yang benar-benar diperiksa. Tindak lanjut = selesai / dibuat.','Tren pada contoh ini adalah data ilustrasi, bukan klaim hasil layanan.']
    },
    scope: {
      eyebrow:'Lingkup & integrasi', title:['Terhubung dengan','lingkungan operasional.'],
      side:'Mendukung pengelolaan tim, lokasi, hingga integrasi dengan layanan lain di SmartOps.',
      core:[['users','Manajemen tim','Peran dan akses tim internal vendor.'],['pin','Lokasi, area, titik','Struktur lokasi hingga titik monitoring.'],['clip','Inspeksi, treatment, tindak lanjut','Seluruh proses dalam satu alur.'],['bars','Laporan & tren','Hasil kerja terdokumentasi dan siap dievaluasi.']],
      extra:[['cleaning','share','Koordinasi area sanitasi.'],['garden','leaf','Titik monitoring area luar.']],
      optional:['Program khusus (fumigasi, termite) sesuai lingkup','Laporan khusus pelanggan'],
      note:'Titik tidak diperiksa berbeda dari nihil aktivitas. Aplikasi membantu pencatatan dan pemantauan, dan tidak menjanjikan kondisi bebas hama secara otomatis.'
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Pest Control.',
      items:[
        ['Apa saja yang bisa dikelola di SmartOps Pest Control?','Survei, program monitoring, titik dan perangkat, inspeksi, tindakan, material, temuan, monitor ulang, serta laporan.'],
        ['Apakah bisa mencatat temuan dan tindak lanjut?','Bisa. Temuan dicatat bersama foto dan catatan, lalu diikuti rencana penanganan serta pemeriksaan ulang.'],
        ['Bagaimana jika titik tidak dapat diakses?','Catat sebagai tidak dapat diakses dengan alasan dan tindak lanjut, bukan sebagai nihil aktivitas.'],
        ['Apakah pelanggan dapat melihat data lokasinya sendiri?','Pelanggan melihat ringkasan dan laporan lokasi sesuai hak akses yang diberikan.'],
        ['Apakah ada jaminan bebas hama?','Tidak. Aplikasi membantu pencatatan dan evaluasi program, dan tidak memberikan jaminan bebas hama secara otomatis.']
      ]
    },
    cta: { title:'Siap menata program pest control?', text:'Diskusikan kebutuhan lokasi, lingkup, dan alur kerja Anda bersama tim kami.' }
  },
  garden: {
    theme: { c:'#237454', c2:'#2C8862', soft:'#EDF3EC', b:'#96652F', b2:'#7F5424' },
    hero: {
      eyebrow:'SmartOps Garden',
      line1:'Perawatan terjadwal.', line2:'Kondisi taman terpantau.',
      lead:'Kelola tanaman, pekerjaan lapangan, dan tindak lanjut dalam satu alur.',
      for:'Vendor taman, supervisor landscape, gardener, dan pengelola lokasi.',
      img:'assets/garden-hero.webp', pos:'right center', mpos:'55% center', shift:'24%',
      alt:'Tim taman merawat area hijau dan supervisor mencatat kondisi tanaman melalui tablet.'
    },
    benefit: {
      eyebrow:'Manfaat', title:['Area hijau','lebih terawat.'],
      side:'Inventaris tanaman, jadwal perawatan, hasil pekerjaan, dan kondisi area hijau tercatat lebih terstruktur.',
      items:[
        ['cal','Perawatan terjadwal','Program dan jadwal jelas per area dan jenis pekerjaan.'],
        ['leaf','Kondisi terdokumentasi','Pengamatan tanaman tercatat dengan foto dan tanggal.'],
        ['bars','Tindak lanjut terukur','Temuan diikuti rencana aksi, penggantian, atau perawatan khusus.']
      ],
      problems:['Area terlewat','Kondisi tanaman tidak terpantau','Temuan tanpa tindak lanjut yang jelas']
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur untuk','pengelolaan taman.'],
      side:'Fitur lengkap untuk mendukung pekerjaan tim di lapangan dan pemantauan oleh pengelola.',
      items:[
        ['pin','Zona & tanaman','Inventaris lokasi, jenis tanaman, dan dokumentasi.'],
        ['cal','Program perawatan','Jadwal rutin, jenis pekerjaan, dan frekuensinya.'],
        ['clip','Tugas pekerjaan','Penugasan tim dan pemantauan penyelesaian.'],
        ['doc','Kondisi & temuan','Pengamatan tanaman dan area, foto, serta catatan.'],
        ['refresh','Penggantian & material','Penggantian tanaman dan penggunaan material.'],
        ['bars','Laporan','Rekap pekerjaan, kondisi tanaman, dan dokumentasi foto.']
      ],
      photos:[
        ['assets/garden-maintenance.webp','Petugas memangkas semak dan menyiram tanaman di taman gedung.','Perawatan sesuai program','Pemangkasan dan penyiraman tercatat sebagai tugas per zona.'],
        ['assets/garden-inspection.webp','Supervisor dan gardener mengamati kondisi daun serta mencatat temuan.','Pengamatan kondisi','Temuan pada tanaman dicatat terpisah dari tugas yang selesai.']
      ]
    },
    flow: {
      eyebrow:'Alur kerja', title:['Dari inventaris','hingga laporan.'],
      side:'Seluruh proses terhubung dalam satu alur kerja yang jelas dan mudah dipantau.',
      steps:[
        ['leaf','Inventaris','Data zona dan tanaman.'],
        ['cal','Rencana','Program dan jadwal perawatan.'],
        ['checkC','Pekerjaan','Pelaksanaan di lapangan.'],
        ['search','Pengamatan','Cek kondisi tanaman dan area.'],
        ['doc','Tindak lanjut','Aksi perbaikan jika diperlukan.'],
        ['bars','Laporan','Rekap pekerjaan dan kondisi.']
      ]
    },
    roles: {
      eyebrow:'Tampilan aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Pekerjaan selesai dan kondisi tanaman dicatat sebagai dua indikator terpisah.',
      list:[
        ['Pemilik',[['monitor','Pantau program perawatan di semua zona'],['leaf','Lihat kondisi tanaman dari hasil pengamatan'],['alert','Ketahui area yang perlu tindak lanjut']], {
          title:'Taman Residence', location:'Semua zona',
          kpis:[['pin','12','Zona taman'],['leaf','240','Tanaman'],['cal','14/18','Pekerjaan minggu ini'],['alert','6','Tindak lanjut']],
          cards:[
            { type:'bars', title:'Pekerjaan selesai per zona', rows:[['Lobby Utama',5,5],['Taman Timur',4,5],['Kolam Renang',3,4],['Taman Selatan',2,4]] },
            { type:'list', title:'Kondisi perlu tindak lanjut', rows:[['Heliconia · Taman Timur','Perlu perhatian','10 Mei','run','gd-taman'],['Palem Raja · Kolam','Perlu penggantian','9 Mei','bad','gd-kolam'],['Pucuk merah · Lobby','Perlu perhatian','8 Mei','run','gd-lobby']] }
          ] }],
        ['Supervisor',[['cal','Atur jadwal dan penugasan gardener'],['search','Review pekerjaan dan hasil pengamatan'],['refresh','Susun rencana perbaikan atau penggantian']], {
          title:'Review Pekerjaan', location:'Taman Residence',
          kpis:[['clip','7','Menunggu review'],['checkC','11','Disetujui'],['users','6','Gardener aktif'],['refresh','3','Rencana perbaikan']],
          cards:[
            { type:'list', title:'Pekerjaan hari ini', rows:[['Pangkas semak · Lobby','Budi Santoso','08.10','ok'],['Pemupukan · Taman Timur','Siti Rahayu','09.30','run'],['Penyiraman · Kolam','Andi Pratama','—','wait']] },
            { type:'list', title:'Rencana perbaikan', rows:[['Ganti Palem Raja (2)','Menunggu material','—','wait'],['Perawatan khusus Heliconia','Dijadwalkan 14 Mei','—','run'],['Sulam rumput Taman Selatan','Disetujui','11 Mei','ok']] }
          ] }],
        ['Gardener',[['mobile','Lihat tugas area dari HP'],['clip','Isi checklist dan kirim foto'],['leaf','Catat pengamatan kondisi tanaman']], {
          title:'Tugas Saya', location:'Taman Timur · 12 Mei',
          kpis:[['clip','4','Tugas hari ini'],['checkC','2','Selesai'],['doc','3','Foto terkirim'],['leaf','1','Pengamatan baru']],
          cards:[
            { type:'list', title:'Checklist hari ini', rows:[['Pangkas semak','Selesai','08.40','ok'],['Siram tanaman','Selesai','09.10','ok'],['Periksa kondisi Heliconia','Berikutnya','—','run'],['Bersihkan gulma','Belum','—','wait']] },
            { type:'list', title:'Pengamatan saya', rows:[['Heliconia · daun menguning','Perlu perhatian','09.20','run','gd-taman']] }
          ] }],
        ['Pengelola lokasi',[['building','Lihat rekap pekerjaan di lokasi Anda'],['leaf','Pantau kondisi tanaman per periode'],['history','Unduh laporan sesuai hak akses']], {
          title:'Rekap Lokasi', location:'Taman Residence (lokasi Anda)',
          kpis:[['checkC','42/45','Pekerjaan selesai'],['leaf','172','Tanaman sehat'],['alert','56','Perlu perhatian'],['refresh','12','Perlu penggantian']],
          cards:[
            { type:'bars', title:'Pekerjaan selesai per minggu', rows:[['Minggu 1',11,12],['Minggu 2',12,12],['Minggu 3',10,11],['Minggu 4',9,10]] },
            { type:'list', title:'Tindak lanjut kondisi', rows:[['Penggantian Palem Raja','Dijadwalkan','15 Mei','run'],['Pemupukan ulang Heliconia','Selesai','10 Mei','ok']] }
          ] }]
      ]
    },
    dash: {
      nav:[['grid','Beranda'],['leaf','Tanaman'],['cal','Pekerjaan'],['search','Kondisi'],['refresh','Tindak Lanjut'],['bars','Laporan']],
      phone:{ title:'Detail Tanaman', area:'Heliconia rostrata', sub:'Taman Timur · 18 tanaman', img:'assets/th-gd-plant.webp',
        groups:[['Tugas pemupukan',['Selesai','Belum selesai'],0],['Kondisi (pengamatan)',['Sehat','Perlu perhatian','Perlu penggantian'],1]],
        note:'Daun menguning pada 3 tanaman.', btn:'Simpan Catatan' }
    },
    report: {
      eyebrow:'Laporan', title:['Pekerjaan dan kondisi','terlihat jelas.'],
      side:'Tinjau aktivitas perawatan, pengamatan kondisi, dan tindak lanjut per area.',
      table:{ kind:'rows', head:1, title:'Aktivitas Pekerjaan · 7–12 Mei 2026', cols:['Tanggal','Area','Pekerjaan','Pelaksana','Status tugas'],
        rows:[['12 Mei','Lobby Utama','Pangkas semak','Budi Santoso',['ok','Selesai']],['10 Mei','Taman Timur','Pemupukan','Siti Rahayu',['ok','Selesai']],['9 Mei','Kolam Renang','Penyiraman','Andi Pratama',['ok','Selesai']],['8 Mei','Taman Selatan','Bersihkan gulma','Budi Santoso',['run','Dikerjakan']],['7 Mei','Area Bermain','Periksa kondisi','Siti Rahayu',['ok','Selesai']]] },
      summary:{ title:'Ringkasan Kondisi Tanaman', sub:'Pengamatan 1–12 Mei 2026 · 240 tanaman', rows:[['Sehat',172,'#2E8B57'],['Perlu perhatian',56,'#D9A15B'],['Perlu penggantian',12,'#C0463B']] },
      notes:['Status kondisi berasal dari pengamatan tanaman, bukan dihitung otomatis dari tugas yang selesai.']
    },
    scope: {
      eyebrow:'Lingkup & integrasi', title:['Terhubung dengan','area dan tim.'],
      side:'Dapat digunakan mandiri untuk pengelolaan taman, atau terintegrasi dengan modul lain sesuai kebutuhan.',
      core:[['leaf','Inventaris zona & tanaman','Data area, tanaman, dan dokumentasi.'],['cal','Program & jadwal','Perawatan sesuai kebutuhan tiap zona.'],['doc','Tugas, kondisi & temuan','Pencatatan terpisah per indikator.'],['bars','Laporan','Pekerjaan dan kondisi tanaman.']],
      extra:[['cleaning','share','Koordinasi jadwal pembersihan taman dan fasilitas sekitar.']],
      optional:['Penyesuaian kategori tanaman','Perawatan khusus','Laporan khusus pelanggan'],
      note:'Pekerjaan selesai dan kondisi tanaman adalah indikator berbeda. Tugas yang selesai tidak otomatis berarti tanaman dalam kondisi baik.'
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Garden.',
      items:[
        ['Apakah pekerjaan selesai otomatis berarti tanaman dalam kondisi baik?','Tidak. Penyelesaian tugas dan hasil pengamatan tanaman dicatat terpisah.'],
        ['Untuk siapa SmartOps Garden digunakan?','Vendor taman, supervisor landscape, gardener, dan pengelola lokasi, masing-masing dengan hak akses sesuai perannya.'],
        ['Apakah bisa mencatat jenis tanaman yang beragam?','Bisa. Inventaris mencatat jenis tanaman, zona, dan dokumentasi sesuai kategori yang digunakan.'],
        ['Bagaimana temuan ditindaklanjuti?','Temuan diikuti rencana aksi, perawatan khusus, atau penggantian, kemudian hasilnya dicatat.'],
        ['Apakah bisa diintegrasikan dengan modul lain?','Integrasi dengan SmartOps Cleaning bersifat opsional untuk koordinasi pekerjaan taman dan fasilitas sekitar.']
      ]
    },
    cta: { title:'Siap menata perawatan taman?', text:'Diskusikan kebutuhan lokasi, lingkup, dan alur kerja Anda bersama tim kami.' }
  },
  'gondola-climbing': {
    theme: { c:'#28617F', c2:'#317394', soft:'#E6EFF4', b:'#96652F', b2:'#7F5424' },
    hero: {
      eyebrow:'SmartOps Gondola & Climbing',
      line1:'Kesiapan terverifikasi.', line2:'Progres fasad terpantau.',
      lead:'Kelola tim, peralatan, izin, pelaksanaan, dan serah terima pekerjaan dalam satu alur.',
      for:'Vendor fasad, penanggung jawab teknis, supervisor, dan tim lapangan.',
      img:'assets/gondola-hero.webp', pos:'right center', mpos:'55% center', shift:'26%',
      alt:'Supervisor meninjau pekerjaan fasad dengan tim gondola dan rope access pada area berbeda.'
    },
    benefit: {
      eyebrow:'Manfaat', title:['Pekerjaan fasad','lebih terstruktur.'],
      side:'Dari survei zona sampai berita acara, pekerjaan fasad direncanakan, diperiksa, dan didokumentasikan.',
      items:[
        ['clip','Kesiapan tercatat','Personel, peralatan, izin, dan kondisi cuaca diperiksa sebelum pekerjaan.'],
        ['pin','Zona terpantau','Status zona dapat ditelusuri dari rencana hingga diterima.'],
        ['doc','BA terdokumentasi','Hasil pemeriksaan, berita acara, dan foto pekerjaan tersimpan bersama.']
      ],
      problems:['Kesiapan tidak lengkap','Progres zona sulit dipantau','Pemeriksaan, foto, dan BA tersebar']
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur dari survei','hingga serah terima.'],
      side:'Gondola dan climbing/rope access diperlakukan sebagai metode berbeda, dengan formulir dan pemeriksaan masing-masing.',
      items:[
        ['map','Survei zona','Area fasad, kategori metode, dan tingkat kesulitan.'],
        ['users','Kelayakan personel','Data kompetensi, sertifikasi, dan penugasan tim.'],
        ['tool','Peralatan','Pengelolaan alat gondola, climbing, dan kelengkapannya.'],
        ['clip','Izin & kesiapan','Perizinan dan kondisi cuaca sebelum pekerjaan.'],
        ['alert','Pelaksanaan & penghentian','Catatan harian pekerjaan dan alasan penghentian.'],
        ['checkC','QC & BA','Hasil pemeriksaan, dokumentasi, dan berita acara serah terima.']
      ],
      photos:[
        ['assets/gondola-work.webp','Teknisi membersihkan fasad dari platform gondola.','Metode gondola','Pekerjaan dari platform kerja tergantung, dengan pemeriksaan alat tersendiri.'],
        ['assets/gondola-rope.webp','Teknisi melakukan pekerjaan fasad dengan akses tali.','Metode climbing / rope access','Pekerjaan dengan akses tali, dicatat sebagai metode yang berbeda.']
      ]
    },
    flow: {
      eyebrow:'Alur kerja', title:['Setiap tahap','memiliki catatan.'],
      side:'Pekerjaan baru dimulai setelah kesiapan diverifikasi oleh pihak berwenang.',
      steps:[
        ['map','Survei','Pemetaan dan identifikasi zona.'],
        ['cal','Rencanakan','Metode, resource, dan jadwal.'],
        ['shield','Verifikasi kesiapan','Personel, alat, izin, dan cuaca.'],
        ['tool','Kerjakan','Pelaksanaan dan catatan progres.'],
        ['search','Periksa','QC hasil pekerjaan.'],
        ['doc','BA','Serah terima disertai dokumentasi.']
      ]
    },
    roles: {
      eyebrow:'Tampilan aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Checklist membantu pencatatan; keputusan kelayakan tetap di tangan pihak berwenang.',
      list:[
        ['Pemilik',[['monitor','Pantau progres zona di seluruh lokasi'],['alert','Lihat kendala dan penghentian pekerjaan'],['doc','Akses hasil serah terima (BA)']], {
          title:'Peta Zona Fasad', location:'Tower Melati',
          kpis:[['pin','6','Total zona'],['tool','2','Berjalan'],['search','1','Menunggu QC'],['checkC','2','Diterima BA']],
          cards:[{ type:'tbl', title:'Status Zona', cols:['Zona','Metode','Status','Catatan'],
            rows:[['A-01','Gondola',['ok','Diterima BA'],'BA diterbitkan 8 Okt'],['A-02','Gondola',['run','Berjalan'],'Kaca lantai 12–14'],['B-01','Climbing',['wait','Menunggu QC'],'QC dijadwalkan 13 Okt'],['C-01','Gondola',['none','Belum'],'Menunggu peralatan']] }] }],
        ['PJ teknis',[['users','Review kelayakan personel dan sertifikasi'],['tool','Periksa kelengkapan peralatan per metode'],['clip','Tinjau izin dan kesiapan sebelum kerja']], {
          title:'Review Kesiapan', location:'Zona A-02 · Gondola',
          kpis:[['users','4/4','Personel siap'],['tool','11/12','Peralatan lengkap'],['doc','2/2','Izin aktif'],['alert','1','Catatan terbuka']],
          cards:[
            { type:'list', title:'Kelayakan personel', rows:[['Rudi H. · Operator gondola','Sertifikat berlaku','s.d. Mar 2027','ok'],['Agus P. · Teknisi','Sertifikat berlaku','s.d. Jan 2027','ok'],['Dedi S. · Teknisi','Perpanjangan diproses','—','wait']] },
            { type:'bars', title:'Kelengkapan per metode', rows:[['Gondola A-02',6,6],['Climbing B-02',5,6]] }
          ] }],
        ['Supervisor',[['clip','Catat pelaksanaan harian per zona'],['alert','Catat penghentian beserta alasannya'],['search','Lakukan QC dan unggah dokumentasi']], {
          title:'Pelaksanaan Hari Ini', location:'Tower Melati · 12 Okt',
          kpis:[['tool','2','Zona dikerjakan'],['alert','1','Penghentian'],['search','1','QC dijadwalkan'],['doc','14','Foto hari ini']],
          cards:[
            { type:'list', title:'Catatan pelaksanaan', rows:[['A-02 · Pembersihan kaca','Berjalan','08.15','run'],['B-02 · Rope access','Dihentikan · angin kencang','10.40','bad'],['B-02 · Lanjut','Ditunda ke besok','11.05','wait']] },
            { type:'list', title:'QC & dokumentasi', rows:[['B-01 · QC hasil','Dijadwalkan 13 Okt','—','wait'],['A-01 · BA','Diterbitkan','8 Okt','ok']] }
          ] }],
        ['Tim',[['mobile','Lihat penugasan zona di HP'],['checkC','Isi checklist kesiapan sebelum kerja'],['doc','Catat pekerjaan dan kirim foto']], {
          title:'Penugasan Saya', location:'Zona A-02 · Gondola',
          kpis:[['pin','A-02','Zona'],['checkC','5/6','Checklist kesiapan'],['clip','2','Catatan hari ini'],['doc','6','Foto terkirim']],
          cards:[
            { type:'list', title:'Checklist kesiapan', rows:[['Personel lengkap','Tercatat','07.40','ok'],['Peralatan siap','Tercatat','07.45','ok'],['Izin aktif','Tercatat','07.46','ok'],['Briefing selesai','Belum','—','wait']] },
            { type:'list', title:'Catatan pekerjaan', rows:[['Kaca lantai 12','Selesai','09.30','ok'],['Kaca lantai 13','Berjalan','—','run']] }
          ] }],
        ['PIC pelanggan',[['building','Lihat progres zona di lokasi Anda'],['search','Pantau hasil pemeriksaan'],['history','Unduh BA sesuai hak akses']], {
          title:'Rekap Lokasi', location:'Tower Melati (lokasi Anda)',
          kpis:[['tool','5/6','Zona dikerjakan'],['checkC','2/6','Diterima BA'],['search','1','Menunggu QC'],['alert','1','Kendala terbuka']],
          cards:[
            { type:'donut', title:'Status zona', total:'6', label:'Zona', items:[['Diterima BA',2,'#2E8B57'],['Menunggu QC',1,'#C98B32'],['Berjalan',2,'#28617F'],['Belum',1,'#B9C2C7']] },
            { type:'list', title:'BA terbaru', rows:[['BA Zona A-01','Diterbitkan','8 Okt','ok'],['BA Zona C-02','Diterbitkan','5 Okt','ok']] }
          ] }]
      ]
    },
    dash: {
      nav:[['grid','Dashboard'],['map','Zona Fasad'],['cal','Jadwal'],['users','Personel'],['tool','Peralatan'],['clip','Izin'],['checkC','QC & BA'],['bars','Laporan']],
      phone:{ title:'Checklist Kesiapan', area:'Zona A-02 · Gondola', sub:'Tower Melati · 12 Okt 2026', checks:[['Personel lengkap',1],['Peralatan siap',1],['Izin aktif',1],['Metode kerja sesuai',1],['Cuaca memenuhi syarat',1],['Briefing selesai',0]], btn:'Ajukan verifikasi' }
    },
    report: {
      eyebrow:'Laporan', title:['Progres zona dan kendala','dapat ditelusuri.'],
      side:'Pantau pelaksanaan, pemeriksaan hasil, dan status serah terima pada setiap zona.',
      table:{ kind:'rows', head:0, title:'Status Zona · Tower Melati', cols:['Zona','Metode','Status','Catatan'],
        rows:[['A-01','Gondola',['ok','Diterima BA'],'Pekerjaan selesai, BA diterbitkan.'],['A-02','Gondola',['run','Berjalan'],'Pembersihan kaca lantai 12–14.'],['B-01','Climbing',['wait','Menunggu QC'],'Pembersihan selesai, QC dijadwalkan.'],['B-02','Climbing',['run','Berjalan'],'Dihentikan sementara karena angin; lanjut besok.'],['C-01','Gondola',['none','Belum'],'Menunggu peralatan tiba.'],['C-02','Climbing',['ok','Diterima BA'],'Pekerjaan selesai, BA diterbitkan.']] },
      donut:{ title:'Komposisi Status Zona', total:'6', label:'Zona', items:[['Diterima BA',2,'#2E8B57'],['Menunggu QC',1,'#C98B32'],['Berjalan',2,'#28617F'],['Belum',1,'#B9C2C7']] },
      notes:['Status per zona bersifat eksklusif. Zona yang diterima BA juga termasuk zona yang sudah dikerjakan, sehingga progres pekerjaan dan penerimaan BA tidak dijumlahkan.']
    },
    scope: {
      eyebrow:'Lingkup & integrasi', title:['Terhubung dengan','tim dan pekerjaan.'],
      side:'Aplikasi mencatat kontrol yang ditetapkan pihak berwenang, tanpa menggantikan prosedur keselamatan perusahaan.',
      core:[['map','Zona & metode','Zona kerja dengan metode gondola atau climbing.'],['users','Personel, peralatan & izin','Data tim, alat, dan perizinan dalam satu alur.'],['checkC','Pelaksanaan, QC & BA','Progres, pemeriksaan, dan serah terima.'],['bars','Laporan','Rekap progres, kendala, dan dokumentasi.']],
      extra:[['cleaning','share','Koordinasi pembersihan setelah pekerjaan fasad.']],
      optional:['Penyesuaian formulir','Alur persetujuan','Laporan khusus pelanggan'],
      note:'Gondola dan climbing dicatat sebagai metode berbeda. Checklist di aplikasi tidak menjamin keselamatan secara otomatis; keputusan kelayakan tetap ditetapkan pihak berwenang.'
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Gondola & Climbing.',
      items:[
        ['Apakah keputusan kelayakan ditentukan oleh aplikasi?','Tidak. Aplikasi membantu pencatatan dan review kesiapan. Keputusan kelayakan ditetapkan oleh pihak berwenang sesuai prosedur pekerjaan.'],
        ['Apa perbedaan metode gondola dan climbing?','Gondola menggunakan platform kerja tergantung; climbing/rope access menggunakan akses tali. Keduanya memiliki pencatatan metode dan kebutuhan pemeriksaan berbeda.'],
        ['Apakah bisa mencatat penghentian pekerjaan?','Bisa. Catatan pelaksanaan dapat memuat alasan penghentian dan tindak lanjutnya.'],
        ['Apakah SmartOps menggantikan prosedur keselamatan perusahaan?','Tidak. Aplikasi mencatat kontrol yang ditetapkan perusahaan dan pihak berwenang, bukan menggantikannya.'],
        ['Apakah bisa diintegrasikan dengan modul lain?','Integrasi dengan SmartOps Cleaning bersifat opsional untuk koordinasi pembersihan setelah pekerjaan fasad.']
      ]
    },
    cta: { title:'Siap menata pekerjaan fasad?', text:'Diskusikan kebutuhan lokasi, lingkup, dan alur kerja Anda bersama tim kami.' }
  },
  project: {
    theme: { c:'#AF653E', c2:'#9A5432', soft:'#F6E9E1', b:'#394F63', b2:'#2D3F50' },
    hero: {
      eyebrow:'SmartOps Project',
      line1:'Rencana jelas.', line2:'Progres proyek terpantau.',
      lead:'Kelola tahapan, laporan lapangan, perubahan, dan serah terima pekerjaan dalam satu alur.',
      for:'Kontraktor kecil, vendor pekerjaan khusus, pengawas, mandor, dan pemilik pekerjaan.',
      img:'assets/project-hero.webp', pos:'right center', mpos:'68% center', shift:'20%',
      alt:'Engineer dan mandor meninjau rencana serta progres renovasi gedung melalui tablet.'
    },
    benefit: {
      eyebrow:'Manfaat', title:['Pelaksanaan proyek','lebih terkendali.'],
      side:'Catat progres, laporan harian, perubahan pekerjaan, dan serah terima dalam satu aplikasi yang mudah digunakan tim teknis.',
      items:[
        ['bars','Progres terlihat jelas','Rencana dan realisasi tiap tahap dapat dibandingkan.'],
        ['doc','Perubahan tercatat','Tambah/ubah pekerjaan didokumentasikan sebelum disetujui.'],
        ['checkC','Serah terima terdokumentasi','Laporan, verifikasi, penerimaan klien, dan penagihan dipisahkan dengan jelas.']
      ],
      problems:['Data progres tersebar','Perubahan sulit ditelusuri','Koordinasi banyak pihak','Status serah terima tidak jelas']
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur dari lingkup','hingga termin.'],
      side:'Dari survei dan SPK sampai berita acara dan termin, setiap langkah tercatat.',
      items:[
        ['doc','Survei, penawaran & SPK','Data survei, penawaran, dan SPK dalam satu alur.'],
        ['layers','Tahap & volume','Tahap, volume, dan target pekerjaan.'],
        ['users','Jadwal & tim','Rencana jadwal dan pembagian tim lapangan.'],
        ['clip','Laporan harian','Catatan pekerjaan, foto, dan kendala.'],
        ['bars','Progres & QC','Rencana versus realisasi dan hasil pemeriksaan.'],
        ['checkC','Perubahan, BA & termin','Perubahan pekerjaan, berita acara, dan termin sesuai paket.']
      ],
      photos:[
        ['assets/project-field.webp','Pekerjaan renovasi dilaksanakan dan didokumentasikan melalui laporan harian di HP.','Laporan harian dari lapangan','Mandor mencatat pekerjaan, foto, dan kendala langsung dari HP.'],
        ['assets/project-qc.webp','Engineer dan mandor memeriksa hasil pemasangan panel serta mencatat QC.','Pemeriksaan & QC','Pengawas memverifikasi hasil sebelum diajukan untuk penerimaan.']
      ]
    },
    flow: {
      eyebrow:'Alur kerja', title:['Setiap tahap','memiliki bukti.'],
      side:'Pekerjaan yang dilaporkan tidak otomatis diterima atau ditagihkan.',
      steps:[
        ['doc','Lingkup','Tentukan ruang lingkup pekerjaan.'],
        ['cal','Rencana','Susun tahap, jadwal, dan tim.'],
        ['clip','Laporan hasil','Catat progres dan temuan.'],
        ['search','Verifikasi','Cek dan sahkan laporan.'],
        ['checkC','Penerimaan','Pekerjaan diterima klien.'],
        ['doc','Tagihan','Sesuai kontrak dan termin.']
      ]
    },
    roles: {
      eyebrow:'Tampilan aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Akses mengikuti tanggung jawab pengguna dan paket fitur. Biaya tidak tampil bagi mandor tanpa mandat.',
      list:[
        ['Kontraktor',[['monitor','Ringkasan proyek dan progres per tahap'],['doc','Pantau perubahan dan serah terima'],['bars','Termin sesuai paket dan hak akses']], {
          title:'Proyek Renovasi Lobby Apartemen', location:'PRJ-026',
          kpis:[['bars','42%','Realisasi kumulatif'],['cal','48%','Rencana kumulatif'],['doc','2','Perubahan diajukan'],['checkC','1/4','Termin ditagihkan']],
          cards:[{ type:'tbl', title:'Progres per Tahap', cols:['Tahap','Rencana','Realisasi','Status terkini'],
            rows:[['Persiapan','100%','100%',['ok','Diterima klien']],['Demolisi & pekerjaan awal','100%','90%',['run','Terverifikasi']],['Arsitektur & interior','60%','40%',['wait','Dilaporkan']],['MEP','40%','20%',['wait','Dilaporkan']]] }] }],
        ['Pengawas',[['search','Review laporan harian dari lapangan'],['checkC','Verifikasi progres dan hasil QC'],['refresh','Catat perbaikan yang diperlukan']], {
          title:'Verifikasi Laporan', location:'PRJ-026 · Lobby',
          kpis:[['clip','5','Menunggu verifikasi'],['checkC','18','Terverifikasi'],['refresh','2','Perlu perbaikan'],['search','3','QC terjadwal']],
          cards:[
            { type:'list', title:'Laporan perlu verifikasi', rows:[['Pemasangan panel dinding','Dilaporkan · 12 m²','12 Mar','wait','pj-panel'],['Instalasi titik lampu','Dilaporkan · 8 titik','12 Mar','wait'],['Perataan plafon','Perlu perbaikan','11 Mar','bad']] },
            { type:'bars', title:'Hasil QC per tahap', rows:[['Demolisi',9,10],['Arsitektur',4,6],['MEP',2,4]] }
          ] }],
        ['Mandor',[['mobile','Lihat jadwal dan tugas tim hari ini'],['clip','Kirim laporan harian, volume, dan foto'],['alert','Catat kendala pekerjaan']], {
          title:'Pekerjaan Hari Ini', location:'Lobby · Rabu 12 Mar',
          kpis:[['users','6','Tenaga kerja'],['clip','3','Item pekerjaan'],['doc','8','Foto'],['alert','1','Kendala']],
          cards:[
            { type:'list', title:'Item pekerjaan', rows:[['Pasang panel dinding sisi timur','12 m² dilaporkan','16.10','ok'],['Rapikan plafon area resepsionis','Berjalan','—','run'],['Instalasi titik lampu','Menunggu material','—','wait']] },
            { type:'list', title:'Kendala', rows:[['Material panel kurang 6 lembar','Diteruskan ke kontraktor','11.20','run']] }
          ] }],
        ['Pemilik pekerjaan',[['building','Lihat progres yang sudah diverifikasi'],['doc','Tinjau dan setujui perubahan pekerjaan'],['checkC','Terima pekerjaan sesuai BA']], {
          title:'Proyek Saya', location:'Renovasi Lobby Apartemen',
          kpis:[['checkC','38%','Progres terverifikasi'],['bars','42%','Progres dilaporkan'],['doc','2','Perubahan menunggu Anda'],['checkC','1','BA diterima']],
          cards:[
            { type:'list', title:'Perubahan pekerjaan', rows:[['Tambah aksen kayu dinding','Menunggu persetujuan','10 Mar','wait'],['Ganti tipe lampu sorot','Menunggu persetujuan','11 Mar','wait']] },
            { type:'list', title:'Penerimaan', rows:[['BA Tahap Persiapan','Diterima','28 Feb','ok'],['BA Demolisi','Dijadwalkan','15 Mar','run']] }
          ] }]
      ]
    },
    dash: {
      nav:[['grid','Dashboard'],['layers','Proyek'],['clip','Laporan'],['doc','Dokumen'],['refresh','Perubahan'],['users','Tim']],
      phone:{ title:'Laporan Harian', area:'Pemasangan panel dinding', sub:'Rabu, 12 Mar · Lobby', img:'assets/th-pj-panel.webp',
        groups:[['Volume dilaporkan',['12 m² dari 40 m²'],0]], note:'Sisi timur selesai, material kurang 6 lembar.', btn:'Kirim Laporan' }
    },
    report: {
      eyebrow:'Laporan & status', title:['Rencana dan realisasi','dapat dibandingkan.'],
      side:'Progres per tahap, jadwal, dan kurva progres kumulatif ditampilkan terpisah.',
      table:{ kind:'rows', head:0, align:'r', title:'Progres per Tahap · PRJ-026', cols:['Tahap pekerjaan','Rencana','Realisasi'],
        rows:[['Persiapan','100%','100%'],['Demolisi & pekerjaan awal','100%','90%'],['Arsitektur & interior','60%','40%'],['MEP','40%','20%'],['Finishing','20%','0%'],['Serah terima','0%','0%']] },
      chart:{ title:'Kurva S Progres Kumulatif', labels:['M0','M2','M4','M6','M8','M10','M12','M14','M16','M18','M20'],
        series:[['Rencana','#394F63',[0,4,10,18,30,44,58,72,84,94,100]],['Realisasi','#AF653E',[0,3,8,15,25,36,47,55]]], max:100, ticks:[0,25,50,75,100] },
      states:[['Dilaporkan','Progres disampaikan dari lapangan.','clip'],['Terverifikasi','Diperiksa oleh pihak berwenang.','search'],['Diterima klien','Diterima sesuai proses penerimaan.','checkC'],['Ditagihkan','Mengikuti kontrak dan termin.','doc']],
      notes:['Kurva S memakai bobot tiap tahap per minggu (M = minggu ke-); persentase per tahap tidak dijumlahkan langsung sebagai total progres.']
    },
    scope: {
      eyebrow:'Lingkup & integrasi', title:['Terhubung dengan','tim dan dokumen.'],
      side:'Lingkup inti untuk pelaksanaan; modul keuangan dan integrasi menyesuaikan paket.',
      core:[['doc','Proyek & dokumen','Gambar, spesifikasi, SPK, dan referensi.'],['cal','Tahap, jadwal & tim','Rencana kerja, volume, dan pembagian tim.'],['clip','Laporan harian','Catatan pekerjaan, foto, dan kendala.'],['search','Progres, QC & perubahan','Pemeriksaan dan catatan perubahan.'],['checkC','BA & termin','Serah terima dan termin sesuai paket.']],
      extra:[['stp','share','Untuk proyek rehabilitasi atau peningkatan instalasi STP.']],
      optional:['Pengelolaan anggaran & tagihan','Analisis biaya & profitabilitas','Integrasi sistem lain'],
      note:'Dilaporkan, terverifikasi, diterima klien, dan ditagihkan adalah status berbeda. Pekerjaan yang dilaporkan tidak otomatis diterima atau ditagihkan.'
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Project.',
      items:[
        ['Apakah SmartOps Project cocok untuk proyek skala kecil?','Ya. Konsep aplikasi ditujukan bagi kontraktor kecil, vendor pekerjaan khusus, serta tim pengawas dan pemilik pekerjaan dengan alur sesuai lingkup implementasi.'],
        ['Bagaimana pencatatan perubahan pekerjaan dilakukan?','Tambahan atau perubahan pekerjaan dicatat dan didokumentasikan sebelum melalui proses persetujuan.'],
        ['Apakah pekerjaan yang dilaporkan otomatis bisa ditagihkan?','Tidak. Pekerjaan perlu diverifikasi dan diterima klien terlebih dahulu; penagihan mengikuti kontrak dan termin.'],
        ['Apakah fitur tagihan wajib digunakan?','Tidak. Pengelolaan tagihan dan anggaran bersifat opsional sesuai paket dan kebutuhan.'],
        ['Siapa saja yang dapat menggunakan aplikasi ini?','Kontraktor, pengawas, mandor, dan pemilik pekerjaan, dengan akses sesuai tanggung jawabnya.']
      ]
    },
    cta: { title:'Siap menata pelaksanaan proyek?', text:'Diskusikan kebutuhan proyek, lingkup, dan alur kerja Anda bersama tim kami.' }
  },
  stp: {
    theme: { c:'#187A91', c2:'#136779', soft:'#E3F1F4', b:'#96652F', b2:'#7F5424' },
    hero: {
      eyebrow:'SmartOps STP',
      line1:'Instalasi terpantau.', line2:'Pemeliharaan terdokumentasi.',
      lead:'Kelola kunjungan, pemeriksaan peralatan, hasil laboratorium, dan tindak lanjut dalam satu alur.',
      for:'Vendor pemeliharaan, supervisor teknis, teknisi, operator sesuai kontrak, dan PIC pelanggan.',
      img:'assets/stp-hero.webp', pos:'right center', mpos:'62% center', shift:'32%',
      alt:'Teknisi memeriksa peralatan STP dan supervisor mencatat hasil melalui tablet.'
    },
    benefit: {
      eyebrow:'Manfaat', title:['Pemeliharaan','lebih terstruktur.'],
      side:'Pantau kondisi peralatan, hasil pemeriksaan, dan rekomendasi dalam satu aplikasi yang mudah digunakan tim teknis.',
      items:[
        ['cal','Kunjungan terjadwal','Program rutin dan checklist tercatat sesuai kontrak.'],
        ['gear','Kondisi alat tercatat','Hasil pemeriksaan dan foto tersimpan per peralatan.'],
        ['doc','Tindak lanjut terpantau','Gangguan, perbaikan, dan rekomendasi memiliki status yang jelas.']
      ],
      problems:['Kondisi alat tidak terpantau','Pemeriksaan tidak terdokumentasi','Perbaikan terlambat atau berulang']
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur untuk','pemeliharaan STP.'],
      side:'Pemeliharaan berkala dan pengoperasian harian dicatat terpisah sesuai pembagian tanggung jawab kontrak.',
      items:[
        ['building','Profil instalasi & peralatan','Data instalasi, proses, dan peralatan.'],
        ['cal','Program kunjungan','Jadwal rutin sesuai kontrak.'],
        ['clip','Checklist pemeriksaan','Sesuai jenis instalasi dan peralatan.'],
        ['doc','Log sesuai kontrak','Catatan operasional sesuai pembagian tanggung jawab.'],
        ['flask','Hasil laboratorium','Arsip hasil uji kualitas air.'],
        ['tool','Gangguan & perbaikan','Temuan, tindakan, serta status tindak lanjut.'],
        ['bars','Laporan & rekomendasi','Laporan kunjungan dan rekomendasi.']
      ],
      photos:[
        ['assets/stp-inspection.webp','Tim pemeliharaan memeriksa kondisi peralatan serta indikator instalasi STP.','Pemeriksaan peralatan','Kondisi pompa, blower, dan indikator dicatat per peralatan.'],
        ['assets/stp-review.webp','Supervisor dan teknisi meninjau hasil pemeriksaan, dokumen uji, serta tindak lanjut.','Review hasil & tindak lanjut','Hasil uji dan temuan ditinjau sebelum rekomendasi disusun.']
      ]
    },
    flow: {
      eyebrow:'Alur kerja', title:['Dari pemeriksaan','hingga tindak lanjut.'],
      side:'Setiap kunjungan meninggalkan catatan yang dapat ditinjau kembali.',
      steps:[
        ['building','Inventaris','Data instalasi dan peralatan.'],
        ['cal','Jadwalkan','Program kunjungan.'],
        ['clip','Periksa','Pemeriksaan di lapangan.'],
        ['search','Review','Tinjau hasil dan temuan.'],
        ['tool','Tindak lanjut','Perbaiki dan monitor status.'],
        ['bars','Laporan','Susun laporan serta rekomendasi.']
      ]
    },
    roles: {
      eyebrow:'Tampilan aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Operator hanya ada bila termasuk dalam kontrak; pemeliharaan berkala berbeda dari pengoperasian harian.',
      list:[
        ['Pemilik',[['monitor','Ringkasan kondisi instalasi'],['history','Riwayat kunjungan per lokasi'],['tool','Status tindak lanjut perbaikan']], {
          title:'Ringkasan STP', location:'1–31 Mar 2026',
          kpis:[['cal','8/10','Kunjungan selesai'],['gear','24/26','Peralatan berfungsi'],['flask','4','Hasil lab tercatat'],['tool','3','Tindak lanjut terbuka']],
          cards:[{ type:'tbl', title:'Kunjungan Terbaru', cols:['Tanggal','Area','Petugas','Checklist','Status'],
            rows:[['12 Mar','Blower Room','Andi','18/18',['ok','Selesai']],['08 Mar','Bak Aerasi','Rina','15/15',['ok','Selesai']],['02 Mar','Clarifier','Andi','12/12',['ok','Selesai']],['16 Mar','Panel Kontrol','Rina','—',['wait','Terjadwal']]] }] }],
        ['Supervisor teknis',[['search','Review hasil pemeriksaan teknisi'],['flask','Tinjau hasil uji dan dokumennya'],['doc','Susun rekomendasi tindak lanjut']], {
          title:'Review Pemeriksaan', location:'STP Residence A',
          kpis:[['clip','3','Menunggu review'],['gear','2','Perlu perbaikan'],['flask','1','Hasil lab baru'],['doc','2','Rekomendasi draf']],
          cards:[
            { type:'list', title:'Temuan perlu review', rows:[['Getaran blower meningkat','Blower 2 · 12 Mar','Rina','run'],['Kebocoran kecil pada valve','Pompa lumpur · 8 Mar','Andi','wait']] },
            { type:'list', title:'Hasil lab untuk ditinjau', rows:[['Sampling outlet · Maret','Dokumen uji terlampir','10 Mar','ok']] }
          ] }],
        ['Teknisi',[['mobile','Lihat jadwal kunjungan di HP'],['clip','Isi checklist per peralatan + foto'],['alert','Catat temuan dan tindakan']], {
          title:'Kunjungan Hari Ini', location:'Blower Room · 12 Mar',
          kpis:[['gear','6','Peralatan diperiksa'],['clip','18/18','Checklist'],['doc','9','Foto'],['alert','1','Temuan']],
          cards:[
            { type:'list', title:'Checklist peralatan', rows:[['Pompa air limbah 1','Berfungsi','09.10','ok','stp-pump'],['Blower 1','Berfungsi','09.25','ok'],['Blower 2','Perlu perbaikan','09.40','bad'],['Panel kontrol','Berfungsi','09.55','ok']] },
            { type:'list', title:'Tindakan', rows:[['Blower 2 · cek alignment','Diusulkan','10.05','run']] }
          ] }],
        ['Operator',[['clip','Isi log harian sesuai kontrak'],['bell','Laporkan kejanggalan ke teknisi'],['history','Lihat riwayat log sendiri']], {
          title:'Log Harian', location:'Shift pagi · 12 Mar',
          kpis:[['clip','6/6','Pembacaan tercatat'],['gear','Normal','Status operasi'],['bell','1','Laporan ke teknisi'],['history','30','Hari tercatat']],
          cards:[
            { type:'list', title:'Pembacaan log', rows:[['Jam operasi blower','Tercatat','07.00','ok'],['Debit inlet','Tercatat','07.05','ok'],['Pengamatan visual bak aerasi','Tercatat','07.10','ok']] },
            { type:'list', title:'Laporan ke teknisi', rows:[['Suara blower 2 tidak biasa','Diteruskan','07.20','run']] }
          ] }],
        ['PIC pelanggan',[['building','Lihat laporan kunjungan di lokasi Anda'],['flask','Lihat hasil uji beserta dokumennya'],['tool','Pantau tindak lanjut perbaikan']], {
          title:'Laporan Lokasi', location:'STP Residence A (lokasi Anda)',
          kpis:[['cal','8/10','Kunjungan bulan ini'],['gear','24/26','Peralatan berfungsi'],['flask','1','Dokumen uji baru'],['tool','2','Perbaikan berjalan']],
          cards:[
            { type:'list', title:'Laporan kunjungan', rows:[['Kunjungan 12 Mar','Laporan tersedia','12 Mar','ok'],['Kunjungan 08 Mar','Laporan tersedia','08 Mar','ok']] },
            { type:'list', title:'Tindak lanjut', rows:[['Penggantian valve pompa lumpur','Terjadwal 15 Mar','—','run'],['Alignment blower 2','Dalam proses','—','run']] }
          ] }]
      ]
    },
    dash: {
      nav:[['grid','Beranda'],['cal','Kunjungan'],['gear','Peralatan'],['flask','Laboratorium'],['tool','Tindak Lanjut'],['bars','Laporan']],
      phone:{ title:'Pemeriksaan Peralatan', area:'Pompa air limbah 1', sub:'Blower Room · 12 Mar', img:'assets/th-stp-pump.webp',
        groups:[['Kondisi',['Berfungsi','Perlu perbaikan'],0]], note:'Operasi normal, tidak ada kebocoran. 1 foto terlampir.', btn:'Simpan' }
    },
    report: {
      eyebrow:'Laporan & data', title:['Kondisi peralatan dan','hasil uji tercatat.'],
      side:'Pelaksanaan kunjungan, kondisi peralatan, dan hasil laboratorium ditampilkan sebagai tiga catatan terpisah.',
      panels:[
        { title:'Kunjungan & checklist', table:{ kind:'rows', head:1, cols:['Tanggal','Area','Checklist','Status'],
          rows:[['12 Mar','Blower Room','18/18',['ok','Selesai']],['08 Mar','Bak Aerasi','15/15',['ok','Selesai']],['02 Mar','Clarifier','12/12',['ok','Selesai']]] } },
        { title:'Kondisi peralatan', sub:'Diperiksa 12 Mar 2026', table:{ kind:'rows', head:0, cols:['Peralatan','Kondisi','Tindak lanjut'],
          rows:[['Pompa air limbah',['ok','Berfungsi'],'—'],['Blower 2',['bad','Perlu perbaikan'],'Cek alignment'],['Diffuser',['ok','Berfungsi'],'—'],['Pompa lumpur',['bad','Perlu perbaikan'],'Ganti valve']] } },
        { title:'Hasil laboratorium', sub:'Sampling outlet · 10 Mar 2026 · dokumen uji terlampir', table:{ kind:'rows', head:0, align:'r', cols:['Parameter','Hasil','Satuan'],
          rows:[['pH','7,2','—'],['BOD','18','mg/L'],['COD','52','mg/L'],['TSS','28','mg/L']] } }
      ],
      notes:['Kunjungan selesai, alat berfungsi, dan kualitas air adalah indikator berbeda.','Nilai laboratorium di atas adalah data contoh, bukan hasil instalasi Anda dan bukan batas baku mutu; evaluasi mengikuti rujukan yang ditetapkan untuk tiap instalasi.']
    },
    scope: {
      eyebrow:'Lingkup & integrasi', title:['Terhubung dengan','instalasi dan tim.'],
      side:'Suku cadang dan analisis performa adalah pilihan fitur STP; integrasi Project untuk koordinasi pekerjaan proyek.',
      core:[['building','Profil instalasi & peralatan','Data proses, peralatan, dan dokumentasi.'],['cal','Kunjungan & checklist','Jadwal, pelaksanaan, dan hasil pemeriksaan.'],['doc','Log sesuai kontrak','Catatan operasional sesuai tanggung jawab.'],['flask','Hasil laboratorium','Arsip hasil uji dan dokumennya.'],['bars','Laporan & rekomendasi','Ringkasan kondisi dan saran tindak lanjut.']],
      extra:[['project','share','Untuk proyek rehabilitasi atau peningkatan instalasi STP.']],
      optional:['Manajemen suku cadang','Analisis tren & performa','Integrasi sistem lain'],
      note:'Kunjungan selesai, alat berfungsi, dan kualitas air adalah indikator berbeda. SmartOps membantu mendokumentasikan pelaksanaan, kondisi peralatan, hasil uji, dan tindak lanjut, tanpa menjamin kepatuhan atau baku mutu tertentu.'
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps STP.',
      items:[
        ['Apakah SmartOps STP cocok untuk seluruh jenis instalasi?','Profil instalasi, proses, peralatan, dan checklist disesuaikan dengan lingkup implementasi serta kontrak.'],
        ['Apakah ada batasan parameter hasil laboratorium di aplikasi?','Website tidak menetapkan batas hasil laboratorium yang berlaku universal. Pencatatan dan evaluasi hasil mengikuti rujukan yang sesuai untuk instalasi dan dokumen pengujian.'],
        ['Bagaimana tindak lanjut perbaikan dicatat?','Gangguan, tindakan, rekomendasi, dan status penyelesaian didokumentasikan untuk ditinjau kembali.'],
        ['Apakah operator harian selalu termasuk?','Tidak. Peran operator mengikuti kontrak; pemeliharaan berkala dan pengoperasian harian dicatat terpisah.'],
        ['Apakah bisa diintegrasikan dengan SmartOps Project?','Bisa, secara opsional, untuk rehabilitasi atau peningkatan instalasi STP.']
      ]
    },
    cta: { title:'Siap menata pemeliharaan STP?', text:'Diskusikan kebutuhan instalasi, lingkup kontrak, dan alur kerja Anda bersama tim kami.' }
  },
  'field-service': {
    theme: { c:'#3F3B8E', c2:'#4E49A6', soft:'#ECEBF6', b:'#96652F', b2:'#7F5424' },
    subnavFull: true,
    hero: {
      eyebrow:'SmartOps Field Service',
      line1:'Banyak tiket kecil,', line2:'satu kendali.',
      lead:'Aplikasi work order untuk vendor jasa kunjungan per unit — pasang internet (IKR), servis AC, CCTV, cleaning. Checklist per langkah, foto bergeotag, dan tanda terima di layar.',
      for:'Pemilik vendor jasa kunjungan, admin/dispatcher, pengawas, teknisi, dan klien korporat.',
      status:'Prototipe demo — P0', btn:'Jadwalkan demo',
      img:'assets/fs-hero.webp', pos:'right center', mpos:'66% center', shift:'26%',
      alt:'Teknisi memasang perangkat internet di unit dan mendokumentasikan langkah pekerjaan.'
    },
    benefit: {
      eyebrow:'Manfaat', title:['Order jelas.','Bukti kerja tersimpan.'],
      side:'Setiap kunjungan tercatat: checklist, foto bergeotag, tanda terima — dari order masuk sampai diterima klien.',
      items:[
        ['monitor','Kendali harian','Antrean, penugasan, dan hasil lapangan terbaca tanpa menunggu laporan WA.'],
        ['camera','Bukti bisa ditinjau','Foto, hasil ukur, dan tanda terima tersimpan per tiket.'],
        ['bars','Angka terpisah','Selesai lapangan berbeda dari hasil review dan penerimaan klien.'],
        ['users','Ritel & korporat','Order satuan dan borongan provider dalam antrean yang sama.']
      ],
      problems:['Hari ini selesai berapa tiket, yang gagal kenapa?','Besok siapa ke mana?','Buktinya mana?','Order borongan provider sampai mana?']
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur untuk','setiap kunjungan.'],
      side:'Rancangan prototipe P0 untuk pilot IKR; jenis pekerjaan lain menyesuaikan lewat data master.',
      items:[
        ['clip','Tiket per kunjungan','Pelanggan/unit, jadwal, teknisi, status, dan riwayat. Satu tiket bisa lebih dari satu kunjungan.'],
        ['layers','Jenis pekerjaan','Checklist, langkah wajib foto/ukur, dan definisi selesai per jenis. Template IKR: redaman dBm, speedtest Mbps.'],
        ['mobile','Aplikasi teknisi di HP','Hari Ini, check-in, checklist, kamera geotag, tanda tangan, draft offline, navigasi ke titik pelanggan.'],
        ['pin','Foto bergeotag','Koordinat dicatat saat jepret. Jarak di luar ambang menjadi bendera review; tanpa sinyal dicatat beserta alasan.'],
        ['refresh','Review & rework','Pengawas menerima atau menolak; tiket ditolak kembali sebagai rework tanpa menambah angka selesai.'],
        ['users','Ritel & korporat','Order satuan dan borongan provider; titik pelanggan cukup dari link share lokasi WhatsApp/Google Maps.'],
        ['alert','Gagal kunjungan tercatat','Pelanggan tidak ada, ODP penuh, lokasi tak dapat diakses: alasan + foto, lalu dijadwalkan ulang.']
      ],
      photos:[
        ['assets/fs-testing.webp','Tim teknisi melakukan pengujian instalasi fiber dan mencatat hasil ukur.','Hasil ukur per langkah','Redaman dan speedtest dicatat dan dibandingkan dengan ambang jenis pekerjaan.'],
        ['assets/fs-handover.webp','Pelanggan memberikan tanda terima pekerjaan melalui tanda tangan di layar HP.','Tanda terima di layar','Foto hasil dan tanda tangan pelanggan menutup kunjungan lapangan.']
      ],
      note:'Geotag menjadi bahan review, bukan keputusan.'
    },
    flow: {
      eyebrow:'Alur kerja', title:['Dari order sampai','diterima klien.'],
      side:'Satu tiket bisa dikunjungi lebih dari sekali; seluruh kunjungan tersimpan di riwayat.',
      steps:[
        ['doc','Order masuk','Ritel atau borongan korporat; tiket terdaftar.'],
        ['cal','Jadwalkan','Admin menugaskan; tiket muncul di HP teknisi.'],
        ['tool','Kerjakan','Check-in, checklist, foto bergeotag, hasil ukur.'],
        ['checkC','Tanda terima','Foto hasil dan tanda tangan pelanggan di layar.'],
        ['search','Review','Pengawas menerima, atau menolak menjadi rework.'],
        ['bars','Diterima klien','Masuk rekap; penagihan menyusul sesuai paket.']
      ],
      note:'Rework dan kunjungan gagal tidak menambah angka selesai.'
    },
    roles: {
      eyebrow:'Tampilan aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Teknisi hanya melihat tiket miliknya, tanpa angka tarif atau uang.',
      list:[
        ['Pemilik',[['monitor','Tiket selesai, terverifikasi, dan diterima hari ini'],['alert','Kunjungan gagal beserta alasannya'],['bars','Rekap harian tanpa menunggu laporan WA']], {
          title:'Ringkasan Hari Ini', location:'Selasa, 13 Okt',
          kpis:[['checkC','42','Selesai lapangan'],['search','35','Terverifikasi'],['doc','31','Diterima klien'],['alert','6','Kunjungan gagal']],
          cards:[
            { type:'bars', title:'Selesai lapangan per teknisi', rows:[['Budi',9,10],['Rina',8,9],['Agus',7,10],['Dewi',6,8]] },
            { type:'list', title:'Alasan gagal teratas', rows:[['Pelanggan tidak ada','3 tiket','—','wait'],['ODP penuh','2 tiket','—','bad'],['Lokasi tak dapat diakses','1 tiket','—','wait']] }
          ] }],
        ['Admin',[['clip','Antrean tiket belum terjadwal'],['users','Penugasan per teknisi'],['building','Data pelanggan & master jenis pekerjaan']], {
          title:'Antrean & Penugasan', location:'Besok · 14 Okt',
          kpis:[['clip','18','Belum terjadwal'],['cal','46','Terjadwal besok'],['refresh','6','Jadwal ulang'],['users','8','Teknisi aktif']],
          cards:[{ type:'tbl', title:'Antrean belum terjadwal', cols:['Tiket','Pelanggan / unit','Jenis','Asal order','Status'],
            rows:[['FS-1042','Tower B · 12-07','IKR pasang baru','Provider (borongan)',['wait','Belum terjadwal']],['FS-1043','Ruko Melati 3','Servis AC','Ritel',['wait','Belum terjadwal']],['FS-1038','Tower A · 08-11','IKR pasang baru','Provider (borongan)',['run','Jadwal ulang']],['FS-1044','Rumah Jl. Kenari 5','Pasang CCTV','Ritel',['wait','Belum terjadwal']]] }] }],
        ['Pengawas',[['camera','Lihat bukti foto dan hasil ukur'],['pin','Periksa bendera jarak geotag'],['checkC','Terima, atau tolak menjadi rework']], {
          title:'Papan Review', location:'Menunggu review: 7',
          kpis:[['clip','7','Menunggu review'],['checkC','35','Diterima hari ini'],['refresh','2','Ditolak → rework'],['pin','3','Bendera jarak']],
          cards:[
            { type:'list', title:'Bukti perlu ditinjau', rows:[['FS-1031 · redaman −21,8 dBm','Dalam ambang','10.42','ok','fs-ont'],['FS-1029 · foto 412 m dari titik','Bendera jarak','10.15','wait'],['FS-1027 · speedtest 38/100 Mbps','Di bawah ambang','09.50','bad']] },
            { type:'list', title:'Keputusan terakhir', rows:[['FS-1022','Diterima','09.30','ok'],['FS-1019','Ditolak → rework','09.05','bad']] }
          ] }],
        ['Teknisi',[['mobile','Hanya tiket milik saya hari ini'],['clip','Checklist per langkah, kamera, tanda terima'],['alert','Catat gagal kunjungan dengan alasan']], {
          title:'Hari Ini', location:'Budi · 10 tiket',
          kpis:[['clip','10','Tiket hari ini'],['checkC','6','Selesai lapangan'],['tool','1','Sedang dikerjakan'],['alert','1','Gagal']],
          cards:[
            { type:'list', title:'Tiket saya', rows:[['FS-1031 · Tower B 12-07','Selesai lapangan','10.42','ok'],['FS-1033 · Tower B 15-02','Sedang dikerjakan','—','run'],['FS-1035 · Tower C 03-09','Berikutnya','11.30','wait'],['FS-1030 · Tower B 09-04','Gagal · pelanggan tidak ada','09.20','bad']] },
            { type:'list', title:'Draft offline', rows:[['FS-1033 · 4 foto menunggu sinyal','Tersimpan di HP','—','run']] }
          ] }],
        ['Klien korporat',[['building','Status order borongan per tiket'],['camera','Bukti foto dan tanda terima per tiket'],['history','Portal penuh menyusul (P3)']], {
          title:'Order Borongan', location:'PO-ISP-0925 · 200 titik',
          kpis:[['clip','200','Tiket order'],['checkC','124','Selesai lapangan'],['search','108','Terverifikasi'],['doc','96','Diterima']],
          cards:[
            { type:'bars', title:'Diterima per minggu', rows:[['Minggu 1',28,50],['Minggu 2',34,50],['Minggu 3',34,50]] },
            { type:'list', title:'Tiket terbaru', rows:[['FS-1022 · Tower A 05-03','Diterima','09.30','ok'],['FS-1029 · Tower B 07-11','Menunggu review','10.15','run']] }
          ] }]
      ]
    },
    dash: {
      nav:[['grid','Dashboard'],['clip','Tiket'],['cal','Jadwal'],['search','Review'],['users','Pelanggan'],['layers','Jenis Pekerjaan'],['bars','Laporan']],
      phone:{ title:'Tiket FS-1033', area:'IKR pasang baru', sub:'Tower B · 15-02 · check-in 10.55', img:'assets/th-fs-ont.webp',
        checks:[['Tarik kabel drop',1,'11.02'],['Pasang roset & ONT',1,'11.20'],['Ukur redaman (dBm)',1,'11.24'],['Speedtest (Mbps)',0],['Foto hasil + tanda tangan',0]], btn:'Simpan langkah' }
    },
    report: {
      eyebrow:'Laporan', title:['Angka berbeda,','dibaca terpisah.'],
      side:'Selesai lapangan, terverifikasi, dan diterima klien adalah tiga angka terpisah, bukan kategori yang dijumlahkan.',
      panels:[
        { title:'Tiket', sub:'Minggu 6–12 Okt 2026', kpis:[['214','Selesai lapangan'],['188','Terverifikasi'],['171','Diterima klien']],
          table:{ kind:'rows', head:0, align:'r', cols:['Hari','Selesai','Terverif.','Diterima'], rows:[['Senin','38','34','31'],['Selasa','42','35','31'],['Rabu','36','33','30']] } },
        { title:'Kunjungan & kegagalan', sub:'Minggu 6–12 Okt 2026', kpis:[['241','Kunjungan'],['27','Gagal'],['22','Dijadwal ulang']],
          table:{ kind:'rows', head:0, align:'r', cols:['Alasan gagal','Jumlah'], rows:[['Pelanggan tidak ada','12'],['ODP penuh','8'],['Lokasi tak dapat diakses','7']] } },
        { title:'Lokasi kunjungan', sub:'Peta berbasis OpenStreetMap · ekspor CSV koordinat (P1, menyusul)',
          map:{ label:'Ilustrasi sebaran titik kunjungan dengan bendera jarak (data contoh)', points:[[60,50,'ok'],[90,90,'ok'],[150,40,'ok'],[175,105,'flag'],[205,60,'ok'],[260,40,'ok'],[280,130,'fail'],[45,150,'ok'],[190,160,'flag'],[135,140,'ok']],
            legend:[['Kunjungan','#3F3B8E'],['Bendera jarak','#D9A15B'],['Gagal','#C0463B']] },
          foot:'Ilustrasi lokasi, bukan peta geografis operasional.' }
      ],
      notes:['Rework dan kunjungan gagal tidak menambah angka selesai; satu tiket bisa memiliki beberapa kunjungan. Angka ditagihkan dipisahkan bila fitur tagihan (P2) digunakan.','Semua angka pada halaman ini adalah data contoh, bukan data pelanggan.']
    },
    scope: {
      eyebrow:'Lingkup', title:['Bertahap, sesuai','kebutuhan vendor.'],
      side:'Tahap P0 adalah prototipe demo. Fitur P1–P3 menyusul dan tidak dijanjikan sebagai sudah tersedia.',
      core:[['clip','Tiket & kunjungan','Tiket per unit dengan riwayat kunjungan.'],['layers','Jenis pekerjaan','Checklist, ambang ukur, definisi selesai.'],['mobile','Aplikasi teknisi','Checklist, kamera geotag, tanda terima.'],['search','Review & rework','Keputusan pengawas tercatat per tiket.']],
      extraLabel:'Keluarga SmartOps (tahap lanjut)',
      extra:[['project','share','Borongan besar tetap di Project; kelak kontrak Project dapat memunculkan tiket Field Service.']],
      optLabel:'Menyusul / sesuai paket',
      optional:['P1 — dispatch tarik-taruh, impor order CSV, peta interaktif','P2 — tarif, invoice, rekap tagihan, PDF bulanan berkop vendor','P3 — portal klien korporat, notifikasi, komplain/garansi, SLA'],
      excluded:['Pelacakan posisi teknisi terus-menerus','Optimasi rute','Pembayaran online','Booking publik','API provider otomatis','OTP / verifikasi KTP'],
      note:'Koordinat dicatat hanya saat aksi tiket (foto, check-in, tanda terima). Aplikasi mencatat pekerjaan, bukan menjamin hasil kerja atau kecepatan internet.'
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Field Service.',
      items:[
        ['Apa bedanya dengan SmartOps Project?','Field Service mengelola banyak tiket kecil per unit atau kunjungan; Project mengelola pekerjaan besar bertahap.'],
        ['Apakah aplikasi melacak posisi teknisi terus-menerus?','Tidak. Koordinat hanya direkam pada aksi tiket seperti foto, check-in, dan tanda terima.'],
        ['Bagaimana jika teknisi tidak mendapat sinyal GPS?','Dicatat sebagai tanpa lokasi dengan alasan, sebagai bahan review; bukan blokir otomatis.'],
        ['Bisakah untuk jasa selain pasang internet?','Bisa. Jenis pekerjaan adalah data master; IKR hanya template pilot. Servis AC, CCTV, atau cleaning menyesuaikan checklist dan definisi selesai.'],
        ['Bagaimana order borongan provider masuk?','Input manual terlebih dahulu; impor CSV merupakan pengembangan P1 yang menyusul.'],
        ['Apakah tanda terima menggunakan OTP atau KTP?','Tidak. Tanda terima memakai foto hasil dan tanda tangan pelanggan di layar.']
      ]
    },
    cta: { title:'Siap menata kunjungan tim lapangan?', text:'Mulai dengan prototipe demo dan diskusikan kebutuhan vendor Anda.', btn:'Jadwalkan demo' }
  },
  workforce: {
    theme: { c:'#96652F', c2:'#7F5424', soft:'#F4EADF', b:'#44505B', b2:'#353F48' },
    hero: {
      eyebrow:'SmartOps Workforce',
      line1:'Kebutuhan terpetakan.', line2:'Penempatan lebih terarah.',
      lead:'Kelola posisi, kompetensi, penempatan, jadwal, dan evaluasi personel dalam satu alur.',
      for:'Vendor SDM, HR, pengelola kontrak personel, dan building management.',
      btn:'Jadwalkan demo',
      img:'assets/wf-hero.webp', pos:'right center', mpos:'64% center', shift:'34%',
      alt:'Koordinator HR dan supervisor membahas penempatan bersama tim operasional.'
    },
    benefit: {
      eyebrow:'Manfaat', title:['Pengelolaan personel','lebih terstruktur.'],
      side:'Membantu vendor SDM, tim HR, dan pengelola kontrak memantau kebutuhan sampai evaluasi kerja.',
      items:[
        ['users','Kebutuhan posisi jelas','Pemenuhan kebutuhan tiap lokasi dapat dipantau.'],
        ['doc','Kompetensi terdokumentasi','Profil, kompetensi, sertifikat, dan masa berlaku tersimpan rapi.'],
        ['pin','Riwayat penempatan terpantau','Lokasi, periode, aktivitas, dan evaluasi dapat ditelusuri.']
      ],
      problems:['Kekurangan personel baru diketahui setelah keluhan','Dokumen kompetensi tersebar','Riwayat siapa ditempatkan di mana tidak tercatat']
    },
    features: {
      eyebrow:'Fitur utama', title:['Satu alur untuk','pengelolaan tenaga kerja.'],
      side:'Dari kebutuhan posisi sampai evaluasi kinerja, tercatat dalam satu aplikasi.',
      items:[
        ['clip','Kebutuhan posisi','Personel per lokasi dan periode.'],
        ['user','Profil & kompetensi','Data personel, kompetensi, sertifikat, dan masa berlaku.'],
        ['share','Mobilisasi personel','Rencana dan proses mobilisasi ke lokasi.'],
        ['pin','Penempatan personel','Posisi, lokasi, dan kompetensi sesuai kebutuhan.'],
        ['cal','Jadwal & kehadiran','Jadwal kerja dan catatan kehadiran.'],
        ['bars','Aktivitas & KPI','Aktivitas, target, serta evaluasi kinerja.']
      ],
      photos:[
        ['assets/wf-placement.webp','Koordinator menjelaskan roster dan penugasan kepada tim.','Penempatan & mobilisasi','Roster dan penugasan per lokasi dijelaskan kepada tim.'],
        ['assets/wf-competency.webp','HR dan supervisor meninjau dokumen kompetensi serta catatan personel.','Review kompetensi','Sertifikat dan masa berlakunya ditinjau sebelum penempatan.']
      ]
    },
    flow: {
      eyebrow:'Alur kerja', title:['Dari kebutuhan','hingga evaluasi.'],
      side:'Setiap keputusan kepegawaian tetap diambil pengguna; aplikasi mencatat dan menampilkan datanya.',
      steps:[
        ['clip','Petakan posisi','Kebutuhan per lokasi.'],
        ['users','Pilih personel','Kandidat berkompetensi.'],
        ['checkC','Verifikasi kompetensi','Cek sertifikat dan persyaratan.'],
        ['pin','Penempatan','Lokasi dan periode penugasan.'],
        ['cal','Aktivitas & kehadiran','Rekam kerja harian.'],
        ['bars','Evaluasi','Hasil kerja dan tindak lanjut.']
      ]
    },
    roles: {
      eyebrow:'Tampilan aplikasi', title:['Tampilan sesuai','tanggung jawab.'],
      side:'Pelanggan tidak otomatis memperoleh data gaji atau seluruh data internal vendor.',
      list:[
        ['Pemilik',[['monitor','Pemenuhan kontrak di semua lokasi'],['users','Kebutuhan personel dan penempatan'],['bars','Ringkasan kinerja']], {
          title:'Ringkasan Tenaga Kerja', location:'Semua lokasi',
          kpis:[['users','34','Total kebutuhan'],['checkC','30','Terisi'],['alert','4','Kosong'],['doc','3','Sertifikat segera habis']],
          cards:[{ type:'tbl', title:'Kebutuhan & penempatan per posisi', cols:['Posisi','Kebutuhan','Terisi','Kosong','Status'],
            rows:[['Security','10','10','0',['ok','Terpenuhi']],['Cleaning Service','8','6','2',['wait','Kurang 2']],['Receptionist','4','4','0',['ok','Terpenuhi']],['Teknisi','6','4','2',['wait','Kurang 2']],['Gardener','6','6','0',['ok','Terpenuhi']]] }] }],
        ['HR',[['user','Profil dan kompetensi personel'],['doc','Dokumen dan masa berlaku sertifikat'],['share','Mobilisasi dan penempatan']], {
          title:'Kompetensi & Dokumen', location:'Semua personel',
          kpis:[['users','30','Personel aktif'],['checkC','26','Dokumen lengkap'],['alert','3','Habis ≤ 60 hari'],['share','2','Mobilisasi berjalan']],
          cards:[
            { type:'list', title:'Masa berlaku sertifikat', rows:[['Sertifikat Security · Andi','Berlaku s.d. 12 Mar 2027','—','ok','wf-doc'],['Teknik Listrik · Rudi','Habis 5 Jan 2026 · perpanjang','—','bad'],['K3 Umum · Sari','Berlaku s.d. 18 Sep 2027','—','ok']] },
            { type:'list', title:'Mobilisasi', rows:[['2 teknisi → Tower B','Dokumen diverifikasi','14 Okt','run'],['1 cleaner → Lobby','Menunggu kandidat','—','wait']] }
          ] }],
        ['Supervisor',[['pin','Personel di lokasi saya'],['cal','Jadwal, kehadiran, dan aktivitas'],['bars','Catat evaluasi kerja']], {
          title:'Lokasi Tower A', location:'Hari ini',
          kpis:[['users','12','Personel terjadwal'],['checkC','11','Hadir'],['clip','18','Aktivitas tercatat'],['bars','2','Evaluasi tertunda']],
          cards:[
            { type:'bars', title:'Kehadiran per shift', rows:[['Pagi',6,6],['Siang',4,4],['Malam',1,2]] },
            { type:'list', title:'Aktivitas terbaru', rows:[['Inspeksi area publik · Dewi','Selesai','10.20','ok'],['Laporan harian · Bayu','Dikirim','09.45','ok'],['Briefing shift malam','Terjadwal','18.30','wait']] }
          ] }],
        ['Personel',[['mobile','Jadwal dan penugasan saya'],['clip','Catat aktivitas harian'],['history','Riwayat penempatan saya']], {
          title:'Jadwal Saya', location:'Okt 2026',
          kpis:[['cal','22','Shift bulan ini'],['checkC','9','Sudah hadir'],['pin','Lobby','Penempatan'],['clip','3','Aktivitas hari ini']],
          cards:[
            { type:'list', title:'Hari ini', rows:[['Shift pagi · Lobby Utama','07.00–15.00','07.00','ok'],['Rapat koordinasi · Gedung A','10.00–11.00','10.00','run'],['Laporan harian','Belum dikirim','14.30','wait']] },
            { type:'list', title:'Penempatan saya', rows:[['Tower A · Lobby','Sejak Jul 2026','—','ok']] }
          ] }],
        ['Pelanggan',[['building','Pemenuhan posisi di lokasi Anda'],['doc','Laporan lokasi sesuai hak akses'],['alert','Tanpa data gaji atau data internal vendor']], {
          title:'Pemenuhan Lokasi', location:'Tower A (lokasi Anda)',
          kpis:[['users','14','Kebutuhan'],['checkC','13','Terisi'],['alert','1','Kosong'],['doc','Okt','Laporan tersedia']],
          cards:[
            { type:'bars', title:'Terisi per posisi', rows:[['Security',4,4],['Cleaning',5,6],['Receptionist',2,2],['Teknisi',2,2]] },
            { type:'list', title:'Laporan', rows:[['Laporan bulanan September','Tersedia','1 Okt','ok']] }
          ] }]
      ]
    },
    dash: {
      nav:[['grid','Dashboard'],['clip','Kebutuhan Posisi'],['users','Personel'],['pin','Penempatan'],['cal','Jadwal & Kehadiran'],['bars','Aktivitas & KPI'],['doc','Laporan']],
      phone:{ title:'Jadwal Saya', area:'Rabu, 13 Okt', sub:'Tower A · Lobby Utama', checks:[['Shift pagi 07.00–15.00',1,'07.00'],['Rapat koordinasi',1,'10.00'],['Inspeksi area publik',0,'13.00'],['Laporan harian',0,'14.30']], btn:'Lihat detail' }
    },
    report: {
      eyebrow:'Laporan & monitoring', title:['Pemenuhan posisi dan','evaluasi terlihat jelas.'],
      side:'Pemenuhan posisi, kelengkapan kompetensi, kehadiran, dan evaluasi adalah ukuran yang berbeda.',
      panels:[
        { title:'Status pemenuhan posisi', sub:'Oktober 2026 · semua lokasi', kpis:[['34','Kebutuhan'],['30','Terisi'],['4','Kosong']],
          table:{ kind:'rows', head:0, align:'r', cols:['Posisi','Kebutuhan','Terisi','Kosong'], rows:[['Security','10','10','0'],['Cleaning Service','8','6','2'],['Receptionist','4','4','0'],['Teknisi','6','4','2'],['Gardener','6','6','0'],['Total','34','30','4']] } },
        { title:'Masa berlaku kompetensi', sub:'Dicek 13 Okt 2026',
          table:{ kind:'rows', head:0, cols:['Sertifikat','Berlaku s.d.','Status'], rows:[['Security','12 Mar 2027',['ok','Berlaku']],['Kebersihan','20 Jul 2026',['bad','Kedaluwarsa']],['Teknik Listrik','5 Jan 2026',['bad','Kedaluwarsa']],['K3 Umum','18 Sep 2027',['ok','Berlaku']]] } }
      ],
      notes:['Persentase posisi terisi tidak sama dengan persentase kompetensi terverifikasi; definisi metrik dan skala evaluasi ditetapkan saat implementasi.','Semua angka, nama, dan tanggal adalah data contoh, bukan data personel nyata.']
    },
    scope: {
      eyebrow:'Lingkup & integrasi', title:['Fokus personel, terhubung','sesuai kebutuhan.'],
      side:'Kelola personel untuk operasional gedung dan area kerja, dengan integrasi yang fleksibel.',
      core:[['clip','Kebutuhan posisi','Per lokasi dan periode.'],['user','Profil & kompetensi','Data, sertifikat, masa berlaku.'],['pin','Penempatan & jadwal','Lokasi, jadwal, dan kehadiran.'],['bars','Aktivitas & evaluasi','Kinerja dan tindak lanjut.'],['doc','Laporan operasional','Rekap pemenuhan dan kehadiran.']],
      extra:[['security','shield','Sinkronisasi data personel, penugasan, dan penjadwalan.']],
      optional:['Penggajian','Administrasi lanjutan','Laporan khusus pelanggan'],
      note:'Workforce bukan prasyarat memakai aplikasi SmartOps lainnya. Data gaji tidak otomatis terlihat oleh pelanggan.'
    },
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Workforce.',
      items:[
        ['Apakah Workforce wajib untuk memakai aplikasi lain?','Tidak. Berlangganan Workforce penuh bukan prasyarat menjalankan alur minimum aplikasi SmartOps lain sesuai lingkupnya.'],
        ['Apa saja data personel yang dikelola?','Profil, kompetensi, sertifikat dan masa berlaku, penempatan, jadwal, kehadiran, aktivitas, dan evaluasi sesuai lingkup implementasi.'],
        ['Apakah penggajian termasuk di dalam aplikasi?','Penggajian dan administrasi lanjutan merupakan opsi sesuai paket.'],
        ['Apakah pelanggan dapat melihat data personel?','Informasi pelanggan dibatasi sesuai hak akses dan lingkup; data internal atau gaji tidak otomatis terbuka.']
      ]
    },
    cta: { title:'Siap menata pengelolaan personel?', text:'Jadwalkan demo dan diskusikan kebutuhan serta alur kerja tim Anda.', btn:'Jadwalkan demo' }
  }
};

/* ---------- komponen ---------- */
const V2_STATUS = { ok:'ok', run:'run', wait:'wait', bad:'bad', none:'none' };

function v2Head(s){
  return `<div class="v2-head"><div><p class="v2-eyebrow">${esc(s.eyebrow)}</p><h2>${esc(s.title[0])}<br>${esc(s.title[1])}</h2></div><p class="v2-side">${esc(s.side)}</p></div>`;
}

function v2Photos(list){
  return list ? `<div class="v2-photos">${list.map(ph=>`<figure><img src="${ph[0]}" alt="${esc(ph[1])}" width="1200" height="900" loading="lazy" decoding="async"><figcaption><b>${esc(ph[2])}</b><span>${esc(ph[3])}</span></figcaption></figure>`).join('')}</div>` : '';
}

function v2Donut(d){
  const tot=d.items.reduce((a,b)=>a+b[1],0); const r=42, C=2*Math.PI*r; let off=0;
  const segs=d.items.map(it=>{const len=it[1]/tot*C; const s=`<circle cx="60" cy="60" r="${r}" fill="none" stroke="${it[2]}" stroke-width="16" stroke-dasharray="${len.toFixed(2)} ${(C-len).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 60 60)"/>`; off+=len; return s;}).join('');
  return `<div class="v2-donut"><svg viewBox="0 0 120 120" aria-hidden="true">${segs}<text x="60" y="59" text-anchor="middle" font-size="19" font-weight="700" fill="#1F2A2A">${d.total}</text><text x="60" y="73" text-anchor="middle" font-size="8" fill="#6B7372">${esc(d.label)}</text></svg>
    <ul>${d.items.map(i=>`<li><i style="background:${i[2]}"></i><span>${esc(i[0])}</span><b>${i[1]}</b></li>`).join('')}</ul></div>`;
}

function v2Card(c){
  let body='';
  if(c.type==='donut') body=v2Donut(c);
  else if(c.type==='bars') body=`<ul class="v2-bars">${c.rows.map(r=>{const pct=Math.round(r[1]/r[2]*100);return `<li><span>${esc(r[0])}</span><em>${r[1]}/${r[2]}</em><i><b class="${pct===100?'ok':pct>=75?'run':'wait'}" style="width:${pct}%"></b></i></li>`;}).join('')}</ul>`;
  else if(c.type==='tbl') body=`<table class="v2-mtbl"><thead><tr>${c.cols.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${c.rows.map(r=>`<tr>${r.map(x=>Array.isArray(x)?`<td><span class="v2-pill sm ${x[0]}">${esc(x[1])}</span></td>`:`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  else body=`<ul class="v2-act">${c.rows.map(a=>`<li class="${a[4]?'':'nothumb'}">${a[4]?`<img src="assets/th-${a[4]}.webp" alt="" width="120" height="90" loading="lazy">`:`<i class="dot ${a[3]}"></i>`}<span><b>${esc(a[0])}</b><em class="${a[3]}">${esc(a[1])}</em></span><time>${a[2]}</time></li>`).join('')}</ul>`;
  return `<div class="v2-card${c.type==='tbl'?' span':''}"><b class="t">${esc(c.title)}</b>${body}</div>`;
}

function v2Laptop(p, nav, view, roleName){
  return `<div class="v2-laptop" role="img" aria-label="Ilustrasi dashboard ${esc(p.full)}${roleName?` untuk ${esc(roleName)}`:''}: ${esc(view.title)}, ${view.kpis.map(k=>k[1]+' '+k[2]).join(', ')} (data contoh)">
    <div class="v2-screen"><div class="v2-app" aria-hidden="true">
      <aside><img src="assets/brand/smartops-logo.png" alt="" width="373" height="96">${nav.map((n,i)=>`<span class="${i===0?'on':''}">${VICON[n[0]]||''}${esc(n[1])}</span>`).join('')}</aside>
      <div class="v2-app-main">
        <div class="v2-app-top"><b>${esc(view.title)}</b><span>${VICON.pin}${esc(view.location)}</span></div>
        <div class="v2-kpis">${view.kpis.map(k=>`<div><span class="k-ic">${VICON[k[0]]}</span><b>${esc(k[1])}</b><small>${esc(k[2])}</small></div>`).join('')}</div>
        <div class="v2-app-grid">${view.cards.map(v2Card).join('')}</div>
      </div>
    </div></div>
    <div class="v2-base"></div>
  </div>`;
}

function v2Phone(p, ph){
  return `<div class="v2-phone" role="img" aria-label="Ilustrasi aplikasi HP petugas: ${esc(ph.title)} ${esc(ph.area)} (data contoh)"><div class="v2-phone-in" aria-hidden="true">
    <div class="ph-top"><span>9.41</span><span>●●●</span></div>
    <div class="ph-title">‹ ${esc(ph.title)}</div>
    ${ph.img?`<img src="${ph.img}" alt="" width="240" height="180">`:''}
    <b class="ph-area">${esc(ph.area)}</b><small>${esc(ph.sub)}</small>
    ${ph.groups?ph.groups.map(g=>`<div class="ph-g"><small>${esc(g[0])}</small>${g[1].map((o,i)=>`<span class="ph-r${i===g[2]?' on':''}"><i></i>${esc(o)}</span>`).join('')}</div>`).join('')+(ph.note?`<div class="ph-note">${esc(ph.note)}</div>`:''):''}
    ${ph.checks?`<ul>${ph.checks.map(c=>`<li class="${c[1]?'on':''}"><i>${c[1]?VICON.check:''}</i><span>${esc(c[0])}</span>${c[2]?`<time>${c[2]}</time>`:''}</li>`).join('')}</ul>`:''}
    <span class="ph-btn">${esc(ph.btn)}</span>
  </div></div>`;
}

function v2Chart(c){
  const W=520,H=230,L=34,R=24,T=14,B=30, iw=W-L-R, ih=H-T-B, n=c.labels.length;
  const ticks=c.ticks||[0,1,2,3,4].map(i=>Math.round(c.max*i/4));
  const x=i=>L+i*iw/(n-1), y=v=>T+ih-(v/c.max)*ih;
  const grid=ticks.map(v=>`<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" stroke="#E7E1D8"/><text x="${L-8}" y="${y(v)+4}" text-anchor="end" font-size="11" fill="#7A746C">${v}</text>`).join('');
  const lab=c.labels.map((l,i)=>`<text x="${x(i)}" y="${H-8}" text-anchor="middle" font-size="11" fill="#7A746C">${l}</text>`).join('');
  const lines=c.series.map(s=>`<polyline fill="none" stroke="${s[1]}" stroke-width="2.5" stroke-linejoin="round" points="${s[2].map((v,i)=>x(i)+','+y(v)).join(' ')}"/>${s[2].map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="3.2" fill="#fff" stroke="${s[1]}" stroke-width="2"/>`).join('')}`).join('');
  const desc=c.series.map(s=>`${s[0]}: ${s[2].join(', ')}`).join('; ');
  return `<svg class="v2-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title)} ${c.labels[0]}–${c.labels[n-1]} (data contoh). ${esc(desc)}.">${grid}${lab}${lines}</svg>
    <div class="v2-legend">${c.series.map(s=>`<span><i style="background:${s[1]}"></i>${esc(s[0])}</span>`).join('')}</div>`;
}

function v2Table(tb){
  if(tb.kind==='numeric'){
    const tot=tb.cols.slice(1).map((_,j)=>tb.rows.reduce((a,r)=>a+r[j+1],0));
    const cell=(val,j)=> j===4 && val>0 ? `<td class="bad">${val}</td>` : j===3 && val>0 ? `<td class="mid">${val}</td>` : `<td>${val}</td>`;
    return `<table class="v2-table"><caption class="sr-only">${esc(tb.title)} (data contoh)</caption><thead><tr>${tb.cols.map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
      <tbody>${tb.rows.map(r=>`<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c,j)=>cell(c,j+1)).join('')}</tr>`).join('')}</tbody>
      <tfoot><tr><th scope="row">Total</th>${tot.map(c=>`<td>${c}</td>`).join('')}</tr></tfoot></table>`;
  }
  const td=v=> Array.isArray(v) ? `<td class="st"><span class="v2-pill ${V2_STATUS[v[0]]}">${esc(v[1])}</span></td>` : typeof v==='number' ? `<td class="num${v>0&&false?'':''}">${v}</td>` : `<td class="txt">${esc(v)}</td>`;
  return `<table class="v2-table rows${tb.align?' r':''}"><caption class="sr-only">${esc(tb.title)} (data contoh)</caption><thead><tr>${tb.cols.map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>${tb.rows.map(r=>{const h=tb.head??1;return `<tr>${r.map((v,i)=>i===h?`<th scope="row">${esc(v)}</th>`:i<h?`<td class="txt">${esc(v)}</td>`:td(v)).join('')}</tr>`;}).join('')}</tbody></table>`;
}

function v2Summary(sm){
  const tot=sm.rows.reduce((a,r)=>a+r[1],0);
  return `<div class="v2-panel"><div class="v2-panel-h"><b>${esc(sm.title)}</b><small>Data contoh</small></div><p class="v2-sum-sub">${esc(sm.sub)}</p>
    <ul class="v2-sum">${sm.rows.map(r=>{const pct=Math.round(r[1]/tot*100);return `<li><i style="background:${r[2]}"></i><span>${esc(r[0])}</span><b>${r[1]}</b><em>${pct}%</em><span class="bar" aria-hidden="true"><span style="width:${pct}%;background:${r[2]}"></span></span></li>`;}).join('')}</ul></div>`;
}

function v2Map(m){
  const pts=m.points.map(pt=>`<g><circle cx="${pt[0]}" cy="${pt[1]}" r="6" fill="${pt[2]==='flag'?'#D9A15B':pt[2]==='fail'?'#C0463B':'var(--v)'}" stroke="#fff" stroke-width="2"/>${pt[2]==='flag'?`<path d="M${pt[0]+7} ${pt[1]-14}v10M${pt[0]+7} ${pt[1]-14}h8l-2 3 2 3h-8" stroke="#9A5F17" stroke-width="1.6" fill="#F6E1C2"/>`:''}</g>`).join('');
  return `<svg class="v2-map" viewBox="0 0 320 200" role="img" aria-label="${esc(m.label)}"><rect width="320" height="200" rx="10" fill="#EEF0EA"/><path d="M0 70 C80 60 120 95 200 80 S300 60 320 70" stroke="#fff" stroke-width="10" fill="none"/><path d="M110 0 C115 60 95 120 120 200" stroke="#fff" stroke-width="8" fill="none"/><path d="M230 0 L250 200" stroke="#fff" stroke-width="6" fill="none"/><rect x="18" y="110" width="70" height="60" rx="6" fill="#DDE6D5"/><rect x="150" y="120" width="70" height="55" rx="6" fill="#E3E1DA"/><rect x="260" y="95" width="45" height="80" rx="6" fill="#E3E1DA"/>${pts}</svg>
    <ul class="v2-map-leg">${m.legend.map(l=>`<li><i style="background:${l[1]}"></i>${esc(l[0])}</li>`).join('')}</ul>`;
}
function v2Panels(list){
  const body=pn=> pn.kpis?`<div class="v2-k3">${pn.kpis.map(k=>`<div><b>${esc(k[0])}</b><span>${esc(k[1])}</span></div>`).join('')}</div>`:'';
  return `<div class="v2-report3${list.length===2?' two':''}">${list.map(pn=>`<div class="v2-panel"><div class="v2-panel-h"><b>${esc(pn.title)}</b><small>Data contoh</small></div>${pn.sub?`<p class="v2-sum-sub">${esc(pn.sub)}</p>`:''}${body(pn)}${pn.map?v2Map(pn.map):''}${pn.table?`<div class="tbl-wrap">${v2Table({...pn.table,title:pn.title})}</div>`:''}${pn.foot?`<p class="v2-pfoot">${esc(pn.foot)}</p>`:''}</div>`).join('')}</div>`;
}

/* ---------- halaman ---------- */
function pageProductV2(p){
  const v=V2[p.slug], t=v.theme;
  const roleViews=v.roles.list.some(r=>r[2]);
  const tabs=v.roles.list.map((r,i)=>`<button role="tab" id="tab-${i}" aria-selected="${i===0}" aria-controls="panel-${i}" tabindex="${i===0?0:-1}">${esc(r[0])}</button>`).join('');
  const pts=r=>`<ul>${r[1].map(x=>`<li><span class="v2-ic sm">${VICON[x[0]]}</span>${esc(x[1])}</li>`).join('')}</ul>`;
  const devices=(view,roleName)=>`<div class="v2-devices">${v2Laptop(p,v.dash.nav,view,roleName)}${v2Phone(p,v.dash.phone)}<span class="v2-note">Ilustrasi antarmuka • Data contoh</span></div>`;
  const rolesBlock = roleViews
    ? v.roles.list.map((r,i)=>`<div class="tabpanel v2-roles" id="panel-${i}" role="tabpanel" aria-labelledby="tab-${i}" ${i===0?'':'hidden'}><div class="v2-rolepts">${pts(r)}</div>${devices(r[2],r[0])}</div>`).join('')
    : `<div class="v2-roles"><div>${v.roles.list.map((r,i)=>`<div class="tabpanel v2-rolepts" id="panel-${i}" role="tabpanel" aria-labelledby="tab-${i}" ${i===0?'':'hidden'}>${pts(r)}</div>`).join('')}</div>${devices(v.dash)}</div>`;
  const sc=v.scope;
  return `<div class="pv2" style="--v:${t.c};--v2:${t.c2};--vsoft:${t.soft};--vb:${t.b};--vb2:${t.b2}">

  <section class="v2-hero${v.hero.shift?' shift':''}" style="--hpos:${v.hero.pos};--mpos:${v.hero.mpos}${v.hero.shift?`;--hleft:${v.hero.shift}`:''}">
    <img class="v2-hero-img" src="${v.hero.img}" width="1536" height="1024" alt="${esc(v.hero.alt)}" fetchpriority="high" decoding="async">
    <div class="container v2-hero-in">
      <nav class="v2-crumb" aria-label="Breadcrumb"><a href="#beranda">Beranda</a> › <a href="#aplikasi">Aplikasi</a> › <span aria-current="page">${esc(p.name)}</span></nav>
      <p class="v2-eyebrow">${esc(v.hero.eyebrow)}</p>
      <h1>${esc(v.hero.line1)}<br><span>${esc(v.hero.line2)}</span></h1>
      <p class="v2-lead">${esc(v.hero.lead)}</p>
      <div class="v2-cta"><a class="v2-btn" href="#demo/${p.slug}">${esc(v.hero.btn||'Diskusikan Kebutuhan')}</a><a class="v2-link" href="#aplikasi/${p.slug}/tampilan">Lihat Tampilan Aplikasi ${VICON.arrowR}</a></div>
      <p class="v2-status"><i></i>${esc(v.hero.status||'Dalam pengembangan')}${v.hero.for?`<span class="v2-for">Untuk: ${esc(v.hero.for)}</span>`:''}</p>
    </div>
  </section>

  <nav class="subnav v2-subnav" aria-label="Bagian halaman ${esc(p.name)}"><div class="container row">
    <a class="all small" href="#aplikasi">← Semua aplikasi</a>
    <a href="#aplikasi/${p.slug}/manfaat" data-anchor="manfaat">Manfaat</a>
    <a href="#aplikasi/${p.slug}/fitur" data-anchor="fitur">Fitur</a>
    <a href="#aplikasi/${p.slug}/alur" data-anchor="alur">Alur Kerja</a>
    <a href="#aplikasi/${p.slug}/tampilan" data-anchor="tampilan">Tampilan</a>
    ${v.subnavFull?`<a href="#aplikasi/${p.slug}/laporan" data-anchor="laporan">Laporan</a><a href="#aplikasi/${p.slug}/lingkup" data-anchor="lingkup">Lingkup</a>`:''}
    ${v.modules?`<a href="#aplikasi/${p.slug}/modul" data-anchor="modul">Modul</a>`:''}${v.caseStudy?`<a href="#aplikasi/${p.slug}/contoh" data-anchor="contoh">Website Vendor</a>`:''}${v.packages?`<a href="#aplikasi/${p.slug}/paket" data-anchor="paket">Paket</a>`:''}
    <a href="#aplikasi/${p.slug}/faq" data-anchor="faq">FAQ</a>
    <a class="v2-btn sm cta" href="#demo/${p.slug}">${esc(v.hero.btn||'Diskusikan Kebutuhan')}</a>
  </div></nav>

  <section class="v2-sec" id="manfaat"><div class="container anchor" id="sec-manfaat">
    ${v2Head(v.benefit)}
    <div class="v2-benefits">${v.benefit.items.map(b=>`<div><span class="v2-ic">${VICON[b[0]]}</span><div><h3>${esc(b[1])}</h3><p>${esc(b[2])}</p></div></div>`).join('')}</div>
    ${v.benefit.problems?`<div class="v2-problems"><b>Masalah yang dijawab</b><ul>${v.benefit.problems.map(x=>`<li>${VICON.x}${esc(x)}</li>`).join('')}</ul></div>`:''}
    ${v2Photos(v.benefit.photos)}
  </div></section>

  <section class="v2-sec" id="fitur"><div class="container anchor" id="sec-fitur">
    ${v2Head(v.features)}
    <div class="v2-features n${v.features.items.length}">${v.features.items.map(f=>`<div class="v2-fcard"><span class="v2-ic">${VICON[f[0]]}</span><div><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></div></div>`).join('')}</div>
    ${v2Photos(v.features.photos)}
    ${v.features.note?`<p class="v2-mini">${VICON.info}${esc(v.features.note)}</p>`:''}
  </div></section>

  <section class="v2-sec" id="alur"><div class="container anchor" id="sec-alur">
    ${v2Head(v.flow)}
    <ol class="v2-flow">${v.flow.steps.map((s,i)=>`<li><span class="v2-step-ic"><em>${i+1}</em>${VICON[s[0]]}</span><b>${esc(s[1])}</b><p>${esc(s[2])}</p></li>`).join('')}</ol>
    ${v.flow.note?`<p class="v2-mini">${VICON.info}${esc(v.flow.note)}</p>`:''}
  </div></section>

  <section class="v2-sec" id="tampilan"><div class="container anchor" id="sec-tampilan">
    ${v2Head(v.roles)}
    <div role="tablist" class="v2-tabs" aria-label="Peran pengguna">${tabs}</div>
    ${rolesBlock}
  </div></section>

  <section class="v2-sec" id="laporan"><div class="container anchor" id="sec-laporan">
    ${v2Head(v.report)}
    ${v.report.panels?v2Panels(v.report.panels):`<div class="v2-report${v.report.table.kind==='rows'?' wide':''}">
      <div class="v2-panel"><div class="v2-panel-h"><b>${esc(v.report.table.title)}</b><small>Data contoh</small></div><div class="tbl-wrap">${v2Table(v.report.table)}</div></div>
      ${v.report.chart?`<div class="v2-panel"><div class="v2-panel-h"><b>${esc(v.report.chart.title)}</b><small>Data contoh</small></div>${v2Chart(v.report.chart)}</div>`:v.report.donut?`<div class="v2-panel"><div class="v2-panel-h"><b>${esc(v.report.donut.title)}</b><small>Data contoh</small></div><div class="v2-donut big">${v2Donut(v.report.donut).replace('<div class="v2-donut">','').replace(/<\/div>$/,'')}</div></div>`:v2Summary(v.report.summary)}
    </div>`}
    ${v.report.states?`<div class="v2-states"><b>Status utama</b><ol>${v.report.states.map((st,i)=>`<li><span class="v2-ic sm">${VICON[st[2]]}</span><div><h3>${esc(st[0])}</h3><p>${esc(st[1])}</p></div></li>`).join('')}</ol></div>`:''}
    ${(v.report.notes||[]).map(n=>`<p class="v2-mini">${VICON.info}${esc(n)}</p>`).join('')}
  </div></section>

  <section class="v2-sec" id="lingkup"><div class="container anchor" id="sec-lingkup">
    ${v2Head(sc)}
    <div class="v2-scope${sc.core.length>3?' stack':''}">
      <div class="v2-core">${sc.core.map(c=>`<div class="v2-fcard sm"><span class="v2-ic">${VICON[c[0]]}</span><div><h3>${esc(c[1])}</h3><p>${esc(c[2])}</p></div></div>`).join('')}</div>
      <div class="v2-extra"><b>${esc(sc.extraLabel||'Integrasi tambahan (opsional)')}</b><div class="n${sc.extra.length}">${sc.extra.map(e=>{const q=BY[e[0]];return `<a class="v2-fcard sm" href="#aplikasi/${q.slug}"><span class="v2-ic">${VICON[e[1]]}</span><div><h3>SmartOps ${esc(q.name)}</h3><p>${esc(e[2])}</p></div></a>`;}).join('')}</div>
        ${sc.optional?`<b class="opt">${esc(sc.optLabel||'Opsional sesuai paket')}</b><ul class="v2-opt">${sc.optional.map(o=>`<li>${VICON.plus}${esc(o)}</li>`).join('')}</ul>`:''}</div>
    </div>
    ${sc.phases?`<div class="v2-phases">${sc.phases.map(ph=>`<div class="${ph[3]||''}"><span class="ph-tag">${esc(ph[0])}</span><b>${esc(ph[1])}</b><p>${esc(ph[2])}</p></div>`).join('')}</div>`:''}
    ${sc.excluded?`<div class="v2-problems excl"><b>Tidak termasuk</b><ul>${sc.excluded.map(x=>`<li>${VICON.x}${esc(x)}</li>`).join('')}</ul></div>`:''}
    <p class="v2-notice">${VICON.info}<span>${esc(sc.note)}</span></p>
  </div></section>

  ${v.modules?`<section class="v2-sec" id="modul"><div class="container anchor" id="sec-modul">
    ${v2Head(v.modules)}
    <div class="v2-modules">${v.modules.groups.map(g=>`<div class="v2-mod"><div class="v2-mod-h"><span class="v2-ic">${VICON[g[0]]}</span><h3>${esc(g[1])}</h3></div><ul>${g[2].map(x=>`<li>${VICON.check}<span>${esc(x)}</span></li>`).join('')}</ul></div>`).join('')}</div>
    ${v.modules.note?`<p class="v2-mini">${VICON.info}${esc(v.modules.note)}</p>`:''}
  </div></section>`:''}

  ${v.caseStudy?`<section class="v2-sec" id="contoh"><div class="container anchor" id="sec-contoh">
    ${v2Head(v.caseStudy)}
    <div class="v2-case">
      <div class="v2-case-id">
        <span class="v2-case-mono">${esc(v.caseStudy.monogram)}</span>
        <div><p class="v2-case-tag">${esc(v.caseStudy.status)}</p><h3>${esc(v.caseStudy.company)}</h3><p>${esc(v.caseStudy.site)}</p><p class="v2-case-addr">${VICON.pin}<span>${esc(v.caseStudy.address)}</span></p></div>
      </div>
      <div class="v2-case-body">
        <p>${esc(v.caseStudy.text)}</p>
        <b class="v2-case-lbl">${esc(v.caseStudy.usesLabel)}</b>
        <ul>${v.caseStudy.uses.map(u=>`<li><span class="v2-ic sm">${VICON[u[0]]}</span><span>${esc(u[1])}</span></li>`).join('')}</ul>
        ${v.caseStudy.link?`<a class="v2-link" href="${esc(v.caseStudy.link[1])}" target="_blank" rel="noopener">${esc(v.caseStudy.link[0])} ${VICON.arrowR}</a><p class="v2-case-note">${esc(v.caseStudy.link[2])}</p>`:''}
      </div>
    </div>
    ${v.caseStudy.note?`<p class="v2-mini">${VICON.info}${esc(v.caseStudy.note)}</p>`:''}
  </div></section>`:''}

  ${v.packages?`<section class="v2-sec" id="paket"><div class="container anchor" id="sec-paket">
    ${v2Head(v.packages)}
    <div class="v2-packs">${v.packages.items.map(k=>`<div class="v2-pack"><b>${esc(k[0])}</b><p>${esc(k[1])}</p><a class="v2-link" href="#demo/${p.slug}">${esc(k[2])} ${VICON.arrowR}</a></div>`).join('')}
      <div class="v2-pack all"><b>${esc(v.packages.allLabel)}</b><ul>${v.packages.all.map(x=>`<li>${VICON.check}<span>${esc(x)}</span></li>`).join('')}</ul></div>
    </div>
    ${v.packages.note?`<p class="v2-mini">${VICON.info}${esc(v.packages.note)}</p>`:''}
  </div></section>`:''}

  <section class="v2-sec" id="faq"><div class="container anchor" id="sec-faq">
    <div class="v2-head"><div><p class="v2-eyebrow">FAQ</p><h2>${esc(v.faq.title)}</h2></div><p class="v2-side">${esc(v.faq.side)}</p></div>
    <div class="v2-faq">${v.faq.items.map(f=>`<details><summary>${esc(f[0])}<span aria-hidden="true">${VICON.plus}</span></summary><div class="ans">${esc(f[1])}</div></details>`).join('')}</div>
  </div></section>

  <section class="v2-band"><div class="container"><div><h2>${esc(v.cta.title)}</h2><p>${esc(v.cta.text)}</p></div><a class="v2-btn tan" href="#demo/${p.slug}">${esc(v.cta.btn||'Diskusikan Kebutuhan')} ${VICON.arrowR}</a></div></section>
  </div>`;
}
