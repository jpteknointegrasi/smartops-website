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
    faq: {
      title:'Pertanyaan yang sering diajukan.',
      side:'Temukan jawaban untuk pertanyaan umum seputar SmartOps Security.',
      items:[
        ['Apa perbedaan antara kehadiran dan pos terisi?','Kehadiran menunjukkan petugas hadir di lokasi; pos terisi menunjukkan petugas ditempatkan pada pos sesuai penugasan. Keduanya dipantau sebagai informasi berbeda.'],
        ['Siapa saja yang dapat menggunakan SmartOps Security?','Pemilik vendor, manager operasi, chief/Danru, petugas, dan PIC pelanggan, masing-masing dengan hak akses sesuai perannya.'],
        ['Apa yang dapat dilihat PIC pelanggan?','Ringkasan penjagaan, patroli, temuan, dan laporan pada lokasi yang menjadi tanggung jawabnya sesuai hak akses. Data lokasi pelanggan lain tidak ditampilkan.'],
        ['Apakah SmartOps Security harus terintegrasi dengan Workforce?','Tidak harus. Integrasi Workforce bersifat opsional sesuai kebutuhan sinkronisasi personel dan lingkup implementasi.'],
        ['Apakah aplikasi ini bisa menangani respons SOS?','Kemampuan SOS perlu melalui pengujian lintas perangkat dan prosedur operasional sebelum dinyatakan sebagai respons teruji.']
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
  return `<table class="v2-table rows"><caption class="sr-only">${esc(tb.title)} (data contoh)</caption><thead><tr>${tb.cols.map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>${tb.rows.map(r=>{const h=tb.head??1;return `<tr>${r.map((v,i)=>i===h?`<th scope="row">${esc(v)}</th>`:i<h?`<td class="txt">${esc(v)}</td>`:td(v)).join('')}</tr>`;}).join('')}</tbody></table>`;
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
      <div class="v2-cta"><a class="v2-btn" href="#demo/${p.slug}">Diskusikan Kebutuhan</a><a class="v2-link" href="#aplikasi/${p.slug}/tampilan">Lihat Tampilan Aplikasi ${VICON.arrowR}</a></div>
      <p class="v2-status"><i></i>Dalam pengembangan${v.hero.for?`<span class="v2-for">Untuk: ${esc(v.hero.for)}</span>`:''}</p>
    </div>
  </section>

  <nav class="subnav v2-subnav" aria-label="Bagian halaman ${esc(p.name)}"><div class="container row">
    <a class="all small" href="#aplikasi">← Semua aplikasi</a>
    <a href="#aplikasi/${p.slug}/manfaat" data-anchor="manfaat">Manfaat</a>
    <a href="#aplikasi/${p.slug}/fitur" data-anchor="fitur">Fitur</a>
    <a href="#aplikasi/${p.slug}/alur" data-anchor="alur">Alur Kerja</a>
    <a href="#aplikasi/${p.slug}/tampilan" data-anchor="tampilan">Tampilan</a>
    <a href="#aplikasi/${p.slug}/faq" data-anchor="faq">FAQ</a>
    <a class="v2-btn sm cta" href="#demo/${p.slug}">Diskusikan Kebutuhan</a>
  </div></nav>

  <section class="v2-sec" id="manfaat"><div class="container anchor" id="sec-manfaat">
    ${v2Head(v.benefit)}
    <div class="v2-benefits">${v.benefit.items.map(b=>`<div><span class="v2-ic">${VICON[b[0]]}</span><div><h3>${esc(b[1])}</h3><p>${esc(b[2])}</p></div></div>`).join('')}</div>
    ${v.benefit.problems?`<div class="v2-problems"><b>Masalah yang dijawab</b><ul>${v.benefit.problems.map(x=>`<li>${VICON.x}${esc(x)}</li>`).join('')}</ul></div>`:''}
    ${v2Photos(v.benefit.photos)}
  </div></section>

  <section class="v2-sec" id="fitur"><div class="container anchor" id="sec-fitur">
    ${v2Head(v.features)}
    <div class="v2-features">${v.features.items.map(f=>`<div class="v2-fcard"><span class="v2-ic">${VICON[f[0]]}</span><div><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></div></div>`).join('')}</div>
    ${v2Photos(v.features.photos)}
  </div></section>

  <section class="v2-sec" id="alur"><div class="container anchor" id="sec-alur">
    ${v2Head(v.flow)}
    <ol class="v2-flow">${v.flow.steps.map((s,i)=>`<li><span class="v2-step-ic"><em>${i+1}</em>${VICON[s[0]]}</span><b>${esc(s[1])}</b><p>${esc(s[2])}</p></li>`).join('')}</ol>
  </div></section>

  <section class="v2-sec" id="tampilan"><div class="container anchor" id="sec-tampilan">
    ${v2Head(v.roles)}
    <div role="tablist" class="v2-tabs" aria-label="Peran pengguna">${tabs}</div>
    ${rolesBlock}
  </div></section>

  <section class="v2-sec"><div class="container">
    ${v2Head(v.report)}
    <div class="v2-report${v.report.table.kind==='rows'?' wide':''}">
      <div class="v2-panel"><div class="v2-panel-h"><b>${esc(v.report.table.title)}</b><small>Data contoh</small></div><div class="tbl-wrap">${v2Table(v.report.table)}</div></div>
      <div class="v2-panel"><div class="v2-panel-h"><b>${esc(v.report.chart.title)}</b><small>Data contoh</small></div>${v2Chart(v.report.chart)}</div>
    </div>
    ${(v.report.notes||[]).map(n=>`<p class="v2-mini">${VICON.info}${esc(n)}</p>`).join('')}
  </div></section>

  <section class="v2-sec"><div class="container">
    ${v2Head(sc)}
    <div class="v2-scope${sc.core.length>3?' stack':''}">
      <div class="v2-core">${sc.core.map(c=>`<div class="v2-fcard sm"><span class="v2-ic">${VICON[c[0]]}</span><div><h3>${esc(c[1])}</h3><p>${esc(c[2])}</p></div></div>`).join('')}</div>
      <div class="v2-extra"><b>Integrasi tambahan (opsional)</b><div class="n${sc.extra.length}">${sc.extra.map(e=>{const q=BY[e[0]];return `<a class="v2-fcard sm" href="#aplikasi/${q.slug}"><span class="v2-ic">${VICON[e[1]]}</span><div><h3>SmartOps ${esc(q.name)}</h3><p>${esc(e[2])}</p></div></a>`;}).join('')}</div>
        ${sc.optional?`<b class="opt">Opsional sesuai paket</b><ul class="v2-opt">${sc.optional.map(o=>`<li>${VICON.plus}${esc(o)}</li>`).join('')}</ul>`:''}</div>
    </div>
    <p class="v2-notice">${VICON.info}<span>${esc(sc.note)}</span></p>
  </div></section>

  <section class="v2-sec" id="faq"><div class="container anchor" id="sec-faq">
    <div class="v2-head"><div><p class="v2-eyebrow">FAQ</p><h2>${esc(v.faq.title)}</h2></div><p class="v2-side">${esc(v.faq.side)}</p></div>
    <div class="v2-faq">${v.faq.items.map(f=>`<details><summary>${esc(f[0])}<span aria-hidden="true">${VICON.plus}</span></summary><div class="ans">${esc(f[1])}</div></details>`).join('')}</div>
  </div></section>

  <section class="v2-band"><div class="container"><div><h2>${esc(v.cta.title)}</h2><p>${esc(v.cta.text)}</p></div><a class="v2-btn tan" href="#demo/${p.slug}">Diskusikan Kebutuhan ${VICON.arrowR}</a></div></section>
  </div>`;
}
