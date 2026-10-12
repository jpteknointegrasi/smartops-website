/* =====================================================================
   Halaman produk versi 2 (layout editorial) — dipakai bila V2[slug] ada.
   Saat ini: SmartOps Cleaning. Struktur sengaja generik agar produk lain
   bisa menyusul cukup dengan menambah entri V2.
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
  gear: VI('<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5L19.8 7"/>')
};

const V2 = {
  cleaning: {
    theme: { c:'#0E5357', c2:'#13696E', soft:'#E4F0EF' },
    hero: {
      eyebrow:'SmartOps Cleaning',
      line1:'Setiap area terawat.', line2:'Setiap hasil terpantau.',
      lead:'Kelola jadwal, pekerjaan lapangan, dan pemeriksaan mutu dalam satu alur.',
      img:'assets/cleaning-hero.webp',
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
      location:'Jakarta Residence',
      nav:[['grid','Dashboard'],['pin','Lokasi'],['users','Penugasan'],['clip','Checklist'],['search','QC'],['bars','Laporan'],['gear','Pengaturan']],
      kpis:[['pin','12','Total Lokasi'],['clip','248','Area Dibersihkan'],['users','36','Petugas aktif'],['refresh','18','Dalam Proses']],
      donut:{ total:'248', label:'Total Area', items:[['Selesai',180,'#13797A'],['Dalam Proses',42,'#5FB3A8'],['Menunggu',18,'#D9A15B'],['Tidak Sesuai',8,'#C0463B']] },
      activity:[['lobby','Area Lobby','Selesai','08.32','ok'],['lift','Lift & Koridor','Selesai','08.20','ok'],['toilet','Toilet Publik','Dalam Proses','08.15','run'],['parkir','Area Parkir','Menunggu','07.50','wait']],
      phone:{ title:'Detail Area', area:'Area Lobby', sub:'Lantai 1 · Gedung A', img:'assets/th-area.webp', checks:[['Lantai',1],['Kaca & Pintu',1],['Fasilitas',1],['Kebersihan Umum',0]] }
    },
    report: {
      eyebrow:'Laporan', title:['Laporan yang','membantu evaluasi.'],
      side:'Lihat perkembangan pekerjaan, temuan QC, dan riwayat kerja untuk perbaikan berkelanjutan.',
      table:{ title:'Rekap Pekerjaan per Area', cols:['Area','Target','Selesai','Dalam Proses','Tidak Sesuai'],
        rows:[['Lobby',28,26,2,0],['Lift & Koridor',36,32,3,1],['Toilet Publik',24,20,3,1],['Area Parkir',18,14,3,1]] },
      chart:{ title:'Tren Penyelesaian Pekerjaan', labels:['1 Apr','3 Apr','5 Apr','7 Apr','9 Apr','11 Apr','13 Apr'],
        series:[['Selesai','#13797A',[34,46,57,63,79,96,108]],['Dalam Proses','#D9A15B',[10,17,24,30,38,45,47]]], max:120 }
    },
    scope: {
      eyebrow:'Integrasi & lingkup', title:['Terhubung dengan','operasional Anda.'],
      side:'Mudah disesuaikan dengan kebutuhan gedung dan tim Anda.',
      core:[['users','Manajemen tim','Data petugas, jadwal, dan pembagian area.'],['pin','Lokasi & area','Multi lokasi, gedung, dan area kerja.'],['clip','Checklist & QC','Standar kerja, inspeksi, dan tindak lanjut.']],
      extra:[['garden','leaf','Perawatan area hijau dan taman.'],['gondola-climbing','building','Pekerjaan fasad dan area tinggi.']],
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
  }
};

/* ---------- komponen ---------- */
function v2Head(s, id){
  return `<div class="v2-head"${id?` id="${id}"`:''}><div><p class="v2-eyebrow">${esc(s.eyebrow)}</p><h2>${esc(s.title[0])}<br>${esc(s.title[1])}</h2></div><p class="v2-side">${esc(s.side)}</p></div>`;
}

function v2Donut(d){
  const tot=d.items.reduce((a,b)=>a+b[1],0); const r=42, C=2*Math.PI*r; let off=0;
  const segs=d.items.map(it=>{const len=it[1]/tot*C; const s=`<circle cx="60" cy="60" r="${r}" fill="none" stroke="${it[2]}" stroke-width="16" stroke-dasharray="${len.toFixed(2)} ${(C-len).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 60 60)"/>`; off+=len; return s;}).join('');
  return `<div class="v2-donut"><svg viewBox="0 0 120 120" aria-hidden="true">${segs}<text x="60" y="59" text-anchor="middle" font-size="19" font-weight="700" fill="#1F2A2A">${d.total}</text><text x="60" y="73" text-anchor="middle" font-size="8" fill="#6B7372">${esc(d.label)}</text></svg>
    <ul>${d.items.map(i=>`<li><i style="background:${i[2]}"></i><span>${esc(i[0])}</span><b>${i[1]}</b></li>`).join('')}</ul></div>`;
}

function v2Laptop(p, d){
  const pill={ok:['ok','Selesai'],run:['run','Dalam Proses'],wait:['wait','Menunggu']};
  return `<div class="v2-laptop" role="img" aria-label="Ilustrasi dashboard ${esc(p.full)} untuk pemilik: ringkasan 12 lokasi, 248 area, status pekerjaan hari ini, dan aktivitas terbaru (data contoh)">
    <div class="v2-screen"><div class="v2-app" aria-hidden="true">
      <aside><img src="assets/brand/smartops-logo.png" alt="" width="373" height="96">${d.nav.map((n,i)=>`<span class="${i===0?'on':''}">${VICON[n[0]]||I[n[0]]}${esc(n[1])}</span>`).join('')}</aside>
      <div class="v2-app-main">
        <div class="v2-app-top"><b>Ringkasan Operasional</b><span>${VICON.pin}${esc(d.location)} ›</span></div>
        <div class="v2-kpis">${d.kpis.map(k=>`<div><span class="k-ic">${VICON[k[0]]}</span><b>${k[1]}</b><small>${esc(k[2])}</small></div>`).join('')}</div>
        <div class="v2-app-grid">
          <div class="v2-card"><b class="t">Status Pekerjaan Hari Ini</b>${v2Donut(d.donut)}</div>
          <div class="v2-card"><b class="t">Aktivitas Terbaru</b><ul class="v2-act">${d.activity.map(a=>`<li><img src="assets/th-${a[0]}.webp" alt="" width="120" height="90" loading="lazy"><span><b>${esc(a[1])}</b><em class="${a[4]}">${esc(a[2])}</em></span><time>${a[3]}</time></li>`).join('')}</ul></div>
        </div>
      </div>
    </div></div>
    <div class="v2-base"></div>
  </div>`;
}

function v2Phone(p, ph){
  return `<div class="v2-phone" role="img" aria-label="Ilustrasi aplikasi HP petugas: detail ${esc(ph.area)} dengan checklist (data contoh)"><div class="v2-phone-in" aria-hidden="true">
    <div class="ph-top"><span>9.41</span><span>●●●</span></div>
    <div class="ph-title">‹ ${esc(ph.title)}</div>
    <img src="${ph.img}" alt="" width="240" height="180">
    <b class="ph-area">${esc(ph.area)}</b><small>${esc(ph.sub)}</small>
    <ul>${ph.checks.map(c=>`<li class="${c[1]?'on':''}"><i>${c[1]?VICON.check:''}</i>${esc(c[0])}</li>`).join('')}</ul>
    <span class="ph-btn">Selesai</span>
  </div></div>`;
}

function v2Chart(c){
  const W=520,H=230,L=34,R=24,T=14,B=30, iw=W-L-R, ih=H-T-B, n=c.labels.length;
  const x=i=>L+i*iw/(n-1), y=v=>T+ih-(v/c.max)*ih;
  const grid=[0,30,60,90,120].map(v=>`<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" stroke="#E7E1D8"/><text x="${L-8}" y="${y(v)+4}" text-anchor="end" font-size="11" fill="#7A746C">${v}</text>`).join('');
  const lab=c.labels.map((l,i)=>`<text x="${x(i)}" y="${H-8}" text-anchor="middle" font-size="11" fill="#7A746C">${l}</text>`).join('');
  const lines=c.series.map(s=>`<polyline fill="none" stroke="${s[1]}" stroke-width="2.5" stroke-linejoin="round" points="${s[2].map((v,i)=>x(i)+','+y(v)).join(' ')}"/>${s[2].map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="3.2" fill="#fff" stroke="${s[1]}" stroke-width="2"/>`).join('')}`).join('');
  const desc=c.series.map(s=>`${s[0]}: ${s[2][0]} menjadi ${s[2][s[2].length-1]}`).join('; ');
  return `<svg class="v2-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title)} ${c.labels[0]}–${c.labels[n-1]} (data contoh). ${esc(desc)}.">${grid}${lab}${lines}</svg>
    <div class="v2-legend">${c.series.map(s=>`<span><i style="background:${s[1]}"></i>${esc(s[0])}</span>`).join('')}</div>`;
}

/* ---------- halaman ---------- */
function pageProductV2(p){
  const v=V2[p.slug], t=v.theme;
  const tabs=v.roles.list.map((r,i)=>`<button role="tab" id="tab-${i}" aria-selected="${i===0}" aria-controls="panel-${i}" tabindex="${i===0?0:-1}">${esc(r[0])}</button>`).join('');
  const panels=v.roles.list.map((r,i)=>`<div class="tabpanel v2-rolepts" id="panel-${i}" role="tabpanel" aria-labelledby="tab-${i}" ${i===0?'':'hidden'}><ul>${r[1].map(x=>`<li><span class="v2-ic sm">${VICON[x[0]]}</span>${esc(x[1])}</li>`).join('')}</ul></div>`).join('');
  const tb=v.report.table; const tot=tb.cols.slice(1).map((_,j)=>tb.rows.reduce((a,r)=>a+r[j+1],0));
  const cell=(val,j)=> j===4 && val>0 ? `<td class="bad">${val}</td>` : j===3 && val>0 ? `<td class="mid">${val}</td>` : `<td>${val}</td>`;
  return `<div class="pv2" style="--v:${t.c};--v2:${t.c2};--vsoft:${t.soft}">

  <section class="v2-hero">
    <img class="v2-hero-img" src="${v.hero.img}" width="1536" height="1024" alt="${esc(v.hero.alt)}" fetchpriority="high" decoding="async">
    <div class="container v2-hero-in">
      <nav class="v2-crumb" aria-label="Breadcrumb"><a href="#beranda">Beranda</a> › <a href="#aplikasi">Aplikasi</a> › <span aria-current="page">${esc(p.name)}</span></nav>
      <p class="v2-eyebrow">${esc(v.hero.eyebrow)}</p>
      <h1>${esc(v.hero.line1)}<br><span>${esc(v.hero.line2)}</span></h1>
      <p class="v2-lead">${esc(v.hero.lead)}</p>
      <div class="v2-cta"><a class="v2-btn" href="#demo/${p.slug}">Diskusikan Kebutuhan</a><a class="v2-link" href="#aplikasi/${p.slug}/tampilan">Lihat Tampilan Aplikasi ${VICON.arrowR}</a></div>
      <p class="v2-status"><i></i>Dalam pengembangan</p>
    </div>
  </section>

  <section class="v2-sec" id="manfaat"><div class="container anchor" id="sec-manfaat">
    ${v2Head(v.benefit)}
    <div class="v2-benefits">${v.benefit.items.map(b=>`<div><span class="v2-ic">${VICON[b[0]]}</span><div><h3>${esc(b[1])}</h3><p>${esc(b[2])}</p></div></div>`).join('')}</div>
    <div class="v2-photos">${v.benefit.photos.map(ph=>`<figure><img src="${ph[0]}" alt="${esc(ph[1])}" width="1200" height="900" loading="lazy" decoding="async"><figcaption><b>${esc(ph[2])}</b><span>${esc(ph[3])}</span></figcaption></figure>`).join('')}</div>
  </div></section>

  <section class="v2-sec" id="fitur"><div class="container anchor" id="sec-fitur">
    ${v2Head(v.features)}
    <div class="v2-features">${v.features.items.map(f=>`<div class="v2-fcard"><span class="v2-ic">${VICON[f[0]]}</span><div><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></div></div>`).join('')}</div>
  </div></section>

  <section class="v2-sec" id="alur"><div class="container anchor" id="sec-alur">
    ${v2Head(v.flow)}
    <ol class="v2-flow">${v.flow.steps.map((s,i)=>`<li><span class="v2-step-ic"><em>${i+1}</em>${VICON[s[0]]}</span><b>${esc(s[1])}</b><p>${esc(s[2])}</p></li>`).join('')}</ol>
  </div></section>

  <section class="v2-sec" id="tampilan"><div class="container anchor" id="sec-tampilan">
    ${v2Head(v.roles)}
    <div role="tablist" class="v2-tabs" aria-label="Peran pengguna">${tabs}</div>
    <div class="v2-roles">
      <div>${panels}</div>
      <div class="v2-devices">${v2Laptop(p,v.dash)}${v2Phone(p,v.dash.phone)}<span class="v2-note">Ilustrasi antarmuka • Data contoh</span></div>
    </div>
  </div></section>

  <section class="v2-sec"><div class="container">
    ${v2Head(v.report)}
    <div class="v2-report">
      <div class="v2-panel"><div class="v2-panel-h"><b>${esc(tb.title)}</b><small>Data contoh</small></div>
        <div class="tbl-wrap"><table class="v2-table"><caption class="sr-only">${esc(tb.title)} (data contoh)</caption><thead><tr>${tb.cols.map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
        <tbody>${tb.rows.map(r=>`<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c,j)=>cell(c,j+1)).join('')}</tr>`).join('')}</tbody>
        <tfoot><tr><th scope="row">Total</th>${tot.map(c=>`<td>${c}</td>`).join('')}</tr></tfoot></table></div></div>
      <div class="v2-panel"><div class="v2-panel-h"><b>${esc(v.report.chart.title)}</b><small>Data contoh</small></div>${v2Chart(v.report.chart)}</div>
    </div>
  </div></section>

  <section class="v2-sec"><div class="container">
    ${v2Head(v.scope)}
    <div class="v2-scope">
      <div class="v2-core">${v.scope.core.map(c=>`<div class="v2-fcard sm"><span class="v2-ic">${VICON[c[0]]}</span><div><h3>${esc(c[1])}</h3><p>${esc(c[2])}</p></div></div>`).join('')}</div>
      <div class="v2-extra"><b>Integrasi tambahan (opsional)</b><div>${v.scope.extra.map(e=>{const q=BY[e[0]];return `<a class="v2-fcard sm" href="#aplikasi/${q.slug}"><span class="v2-ic">${VICON[e[1]]}</span><div><h3>${esc(q.name)}</h3><p>${esc(e[2])}</p></div></a>`;}).join('')}</div></div>
    </div>
    <p class="v2-notice">${VICON.info}<span>${esc(v.scope.note)}</span></p>
  </div></section>

  <section class="v2-sec" id="faq"><div class="container anchor" id="sec-faq">
    <div class="v2-head"><div><p class="v2-eyebrow">FAQ</p><h2>${esc(v.faq.title)}</h2></div><p class="v2-side">${esc(v.faq.side)}</p></div>
    <div class="v2-faq">${v.faq.items.map(f=>`<details><summary>${esc(f[0])}<span aria-hidden="true">${VICON.plus}</span></summary><div class="ans">${esc(f[1])}</div></details>`).join('')}</div>
  </div></section>

  <section class="v2-band"><div class="container"><div><h2>${esc(v.cta.title)}</h2><p>${esc(v.cta.text)}</p></div><a class="v2-btn tan" href="#demo/${p.slug}">Diskusikan Kebutuhan ${VICON.arrowR}</a></div></section>
  </div>`;
}
