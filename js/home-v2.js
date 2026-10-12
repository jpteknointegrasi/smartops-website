/* =====================================================================
   Beranda versi 2 (layout editorial, sejalan dengan halaman produk v2).
   Menggantikan pageHome() dari pages.js.
   ===================================================================== */

const HOME_CARDS = {
  'workforce':        ['#96652F','Pengelolaan penempatan dan kompetensi personel lintas layanan.'],
  'security':         ['#123F56','Pos jaga, patroli, dan pencatatan insiden keamanan.'],
  'cleaning':         ['#0E5357','Jadwal pekerjaan, pemeriksaan mutu, dan laporan kebersihan.'],
  'pest-control':     ['#52672D','Titik monitoring, inspeksi, dan tindak lanjut pengendalian hama.'],
  'gondola-climbing': ['#28617F','Zona fasad, kesiapan tim dan peralatan, pelaksanaan, serah terima.'],
  'garden':           ['#237454','Inventaris tanaman, program perawatan, kondisi, dan tindak lanjut.'],
  'project':          ['#AF653E','Tahap pekerjaan, progres, perubahan, dan dokumentasi proyek.'],
  'stp':              ['#187A91','Kunjungan pemeliharaan, pemeriksaan peralatan, dan tindak lanjut instalasi.'],
  'field-service':    ['#3F3B8E','Tiket kunjungan per unit, checklist, foto bergeotag, dan tanda terima.', 'Prototipe demo']
};

const HOME_FAQ_V2 = [
  ['Bisa memakai satu aplikasi saja?','Bisa. Pilih aplikasi sesuai bidang layanan dan alur yang dibutuhkan, dengan lingkup paket yang jelas.'],
  ['Harus membeli Workforce?','Tidak. Tidak ada keharusan membeli Workforce untuk menjalankan alur minimum aplikasi lain yang telah dibundel sesuai lingkupnya.'],
  ['Apa yang dapat dilihat pelanggan?','Informasi lokasi, pekerjaan, bukti, atau laporan mengikuti batas akses dan lingkup yang ditetapkan; pelanggan tidak otomatis melihat seluruh data vendor.'],
  ['Bagaimana mengetahui kesiapan fitur?','Tinjau status pengembangan, lingkup fitur, dan tambahan opsional pada halaman produk, lalu konfirmasi kebutuhan melalui demo atau diskusi.']
];

function homeCard(p){
  const c=HOME_CARDS[p.slug]||[p.accent,p.card];
  return `<a class="hm-card" href="#aplikasi/${p.slug}" style="--a:${c[0]}">
    <div class="hm-card-txt">
      <span class="hm-card-ic" aria-hidden="true">${I[p.icon]||I.grid}</span>
      <h3>${esc(p.name)}</h3>${p.sub?`<small>${esc(p.sub)}</small>`:''}
      <p>${esc(c[1])}</p>
      <span class="hm-go">Lihat aplikasi ${VICON.arrowR}</span>
    </div>
    <div class="hm-card-img"><img src="assets/card-${p.slug}.webp" width="360" height="450" alt="" loading="lazy" decoding="async">${c[2]?`<span class="hm-badge">${esc(c[2])}</span>`:''}</div>
  </a>`;
}

function pageHome(){
  const demoView = {
    title:'Pekerjaan Hari Ini', location:'Semua area',
    kpis:[['clip','24','Dijadwalkan'],['checkC','15','Selesai'],['search','6','Menunggu periksa'],['alert','3','Tindak lanjut']],
    cards:[
      { type:'list', title:'Pekerjaan', rows:[['Lobby Utama · Cleaning','Selesai','08.32','ok','lobby'],['Area Taman · Garden','Dalam proses','09.10','run','gd-taman'],['Patroli Zona B · Security','Dalam proses','09.25','run'],['Perawatan STP · STP','Terjadwal','13.00','wait','stp-pump']] },
      { type:'bars', title:'Diperiksa per area', rows:[['Lobby',6,6],['Taman',3,4],['Basement',2,4]] }
    ]
  };
  const phone = { title:'Pemeriksaan', area:'Lobby Utama', sub:'Cleaning · 08.32', img:'assets/th-area.webp', checks:[['Kondisi area',1],['Kelengkapan',1],['Catatan',0]], btn:'Simpan' };
  const navApp = [['grid','Beranda'],['clip','Pekerjaan'],['users','Tim'],['pin','Area'],['search','Pemeriksaan'],['bars','Laporan']];
  const step=(icon,t,d)=>`<li><span class="hm-step-ic">${VICON[icon]}</span><div><b>${esc(t)}</b><p>${esc(d)}</p></div></li>`;
  const pair=(a,b,img,alt,t,d)=>`<a class="hm-int" href="#integrasi"><img src="${img}" width="1200" height="900" alt="${esc(alt)}" loading="lazy"><div><div class="hm-pair"><span style="color:${HOME_CARDS[a][0]}">${I[BY[a].icon]}</span>${VICON.plus}<span style="color:${HOME_CARDS[b][0]}">${I[BY[b].icon]}</span></div><h3>${esc(BY[a].name)} + ${esc(BY[b].name)}</h3><p>${esc(t)}</p><span class="hm-go">${esc(d)} ${VICON.arrowR}</span></div></a>`;

  return `<div class="pv2 hm" style="--v:#96652F;--v2:#7F5424;--vsoft:#F4EADF;--vb:#96652F;--vb2:#7F5424">

  <section class="v2-hero shift hm-hero" style="--hpos:right center;--mpos:62% center;--hleft:32%">
    <img class="v2-hero-img" src="assets/home-hero.webp" width="1536" height="1024" alt="Supervisor mengelola pekerjaan lapangan melalui tablet dengan tim kebersihan, keamanan, dan taman di area gedung." fetchpriority="high" decoding="async">
    <div class="container v2-hero-in">
      <p class="v2-eyebrow">Untuk tim yang bekerja di lapangan</p>
      <h1>Kerja lapangan tertata.<br><span>Pengawasan lebih mudah.</span></h1>
      <p class="v2-lead">Aplikasi sesuai bidang layanan untuk mengelola tim, pekerjaan, pemeriksaan, dan laporan.</p>
      <div class="v2-cta"><a class="v2-btn" href="#aplikasi">Jelajahi Aplikasi ${VICON.arrowR}</a><a class="v2-btn ghost" href="#demo">Jadwalkan demo</a></div>
      <p class="hm-chip">${VICON.grid}<span><b>9</b> aplikasi khusus</span></p>
    </div>
  </section>

  <section class="hm-strip"><div class="container">
    <div><span class="v2-ic">${VICON.doc}</span><div><h3>Mulai dari satu aplikasi</h3><p>Pilih sesuai kebutuhan tim Anda.</p></div></div>
    <div><span class="v2-ic">${VICON.gear}</span><div><h3>Alur sesuai bidang layanan</h3><p>Fitur dan proses mengikuti karakter pekerjaan.</p></div></div>
    <div><span class="v2-ic">${VICON.share}</span><div><h3>Integrasi saat dibutuhkan</h3><p>Terhubung sesuai kebutuhan, cakupan, dan izin.</p></div></div>
  </div></section>

  <section class="v2-sec"><div class="container">
    <div class="v2-head"><div><p class="v2-eyebrow">Aplikasi SmartOps</p><h2>Temukan aplikasi<br>untuk bidang Anda.</h2></div><p class="v2-side">Sembilan aplikasi dengan fokus layanan berbeda; dapat digunakan secara mandiri atau dihubungkan sesuai kebutuhan dan lingkup.</p></div>
    <div class="hm-grid">${PRODUCTS.map(homeCard).join('')}</div>
    <p class="v2-mini">${VICON.info}Kesiapan fitur mengikuti tahap pengembangan dan lingkup.</p>
  </div></section>

  <section class="v2-sec"><div class="container hm-flow">
    <div>
      <p class="v2-eyebrow">Alur kerja di setiap aplikasi</p>
      <h2>Dari lapangan ke laporan, alurnya jelas.</h2>
      <ol class="hm-steps">
        ${step('cal','Rencanakan pekerjaan','Jadwal, penugasan, dan area kerja.')}
        ${step('clip','Catat pelaksanaan','Hasil kerja, foto, temuan, dan dokumentasi.')}
        ${step('checkC','Periksa dan evaluasi','Review hasil, tindak lanjut, serta laporan.')}
      </ol>
    </div>
    <div class="v2-devices">${v2Laptop({full:'SmartOps'},navApp,demoView,'')}${v2Phone({full:'SmartOps'},phone)}<span class="v2-note">Data contoh, bukan data pelanggan</span></div>
  </div></section>

  <section class="v2-sec hm-indep"><div class="container"><div class="hm-panel">
    <p class="v2-eyebrow">Fleksibel sesuai kebutuhan</p>
    <h2>Satu aplikasi dapat menjadi langkah awal.</h2>
    <div class="hm-3">
      <div><span class="v2-ic">${VICON.grid}</span><div><h3>Mandiri sesuai lingkup</h3><p>Alur minimum aplikasi dapat dijalankan sesuai paketnya, tanpa harus membeli aplikasi lain.</p></div></div>
      <div><span class="v2-ic">${VICON.users}</span><div><h3>Akses sesuai peran</h3><p>Informasi dan tindakan mengikuti tanggung jawab pengguna.</p></div></div>
      <div><span class="v2-ic">${VICON.plus}</span><div><h3>Tambahan opsional</h3><p>Integrasi atau fitur tambahan dipilih sesuai kebutuhan.</p></div></div>
    </div>
  </div></div></section>

  <section class="v2-sec"><div class="container">
    <div class="v2-head"><div><p class="v2-eyebrow">Integrasi opsional</p><h2>Terhubung<br>saat dibutuhkan.</h2></div><p class="v2-side">Integrasi opsional sesuai kebutuhan dan izin. Setiap aplikasi tetap dapat digunakan secara mandiri.</p></div>
    <div class="hm-ints">
      ${pair('cleaning','garden','assets/garden-maintenance.webp','Tim taman merawat area hijau gedung','Koordinasi jadwal pembersihan dan perawatan area taman serta fasilitas sekitar.','Pelajari integrasi')}
      ${pair('stp','project','assets/stp-inspection.webp','Teknisi memeriksa peralatan instalasi STP','Koordinasi proyek rehabilitasi atau peningkatan instalasi sampai serah terima.','Pelajari integrasi')}
    </div>
  </div></section>

  <section class="v2-sec"><div class="container">
    <div class="v2-head"><div><p class="v2-eyebrow">Proses penerapan</p><h2>Penerapan mengikuti<br>kebutuhan Anda.</h2></div><p class="v2-side"><a class="v2-link" href="#cara-kerja">Lihat langkah penerapan ${VICON.arrowR}</a></p></div>
    <ol class="v2-flow hm-apply">
      <li><span class="v2-step-ic"><em>1</em>${VICON.users}</span><b>Diskusi kebutuhan</b><p>Bidang layanan, tujuan, dan lingkup pekerjaan.</p></li>
      <li><span class="v2-step-ic"><em>2</em>${VICON.gear}</span><b>Konfigurasi</b><p>Aplikasi, data, dan peran sesuai kesepakatan.</p></li>
      <li><span class="v2-step-ic"><em>3</em>${VICON.search}</span><b>Uji penggunaan</b><p>Meninjau alur bersama tim Anda.</p></li>
      <li><span class="v2-step-ic"><em>4</em>${VICON.checkC}</span><b>Penerapan</b><p>Penggunaan mengikuti rencana dan kesiapan.</p></li>
    </ol>
  </div></section>

  <section class="v2-sec" id="faq"><div class="container">
    <div class="v2-head"><div><p class="v2-eyebrow">Pertanyaan yang sering diajukan</p><h2>Pertanyaan yang<br>sering diajukan.</h2></div><p class="v2-side">Pertanyaan lain? <a class="v2-link" href="#kontak">Hubungi kami ${VICON.arrowR}</a></p></div>
    <div class="v2-faq hm-faq">${HOME_FAQ_V2.map(f=>`<details><summary>${esc(f[0])}<span aria-hidden="true">${VICON.plus}</span></summary><div class="ans">${esc(f[1])}</div></details>`).join('')}</div>
  </div></section>

  <section class="hm-band"><div class="container"><div><h2>Aplikasi mana yang sesuai untuk usaha Anda?</h2><p>Diskusikan bidang layanan dan alur kerja tim Anda.</p></div><a class="v2-btn" href="#demo">Jadwalkan demo ${VICON.arrowR}</a></div></section>
  </div>`;
}
