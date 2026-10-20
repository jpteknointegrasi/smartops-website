/* ===================== HELPERS ===================== */
const esc = s => String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ic = (name, bg, size) => `<span class="ic" style="background:${bg}" aria-hidden="true">${I[name]||I.grid}</span>`;
const pill = v => Array.isArray(v) ? `<span class="pill ${v[0]}">${esc(v[1])}</span>` : esc(v);
const CAPTION = '<div class="caption">Ilustrasi antarmuka • Data contoh</div>';

function mockHTML(p, m, sm){
  const navs = m.nav.map(n=>`<div class="nv${n===m.active?' on':''}">${esc(n)}</div>`).join('');
  const kpis = m.kpis ? `<div class="kpis">${m.kpis.map(k=>`<div class="kpi"><b>${esc(k[0])}</b><span>${esc(k[1])}</span></div>`).join('')}</div>` : '';
  const head = m.cols.map(c=>`<th>${esc(c)}</th>`).join('');
  const rows = m.rows.map(r=>`<tr>${r.map(c=>`<td>${pill(c)}</td>`).join('')}</tr>`).join('');
  return `<div class="mock${sm?' sm':''}" role="img" aria-label="Ilustrasi antarmuka ${esc(p.full)}: ${esc(m.title)} (data contoh)">
    <div class="side" style="background:${p.accent}"><div class="brand">SmartOps<small>${esc(p.name)}</small></div>${navs}</div>
    <div class="main"><div class="t">${esc(m.title)}<span>Data contoh</span></div>${kpis}
      <table aria-hidden="true"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>
    </div></div>`;
}
function phoneHTML(p, ph){
  const items = ph.items.map(it=>`<div class="row"><span style="min-width:0"><b>${esc(it[0])}</b><small>${esc(it[1])}</small></span><span class="pill ${it[2]}">${esc(it[3])}</span></div>`).join('');
  return `<div class="phone" role="img" aria-label="Ilustrasi tampilan HP ${esc(p.full)}: ${esc(ph.title)} (data contoh)">
    <div class="ph-top" style="background:${p.accent}">${esc(ph.title)}<small>${esc(ph.sub)}</small></div>
    <div class="ph-body">${items}${ph.photo?'<div class="photo" aria-hidden="true"></div>':''}<div class="ph-btn">${esc(ph.btn)}</div></div></div>`;
}
function donutHTML(d){
  const total = d.items.reduce((a,b)=>a+b[1],0);
  let acc=0; const C=2*Math.PI*42;
  const segs = d.items.map(it=>{
    const frac=it[1]/total, off=C*(1-frac), rot=acc/total*360-90; acc+=it[1];
    return `<circle cx="60" cy="60" r="42" fill="none" stroke="${it[2]}" stroke-width="16" stroke-dasharray="${C}" stroke-dashoffset="${off}" transform="rotate(${rot} 60 60)"/>`;
  }).join('');
  const legend = d.items.map(it=>`<li><i style="background:${it[2]}"></i>${esc(it[0])}<b>${it[1]}</b></li>`).join('');
  return `<div class="donut"><svg viewBox="0 0 120 120" role="img" aria-label="${esc(d.title)}: ${d.items.map(i=>i[0]+' '+i[1]).join(', ')} (data contoh)">${segs}<text x="60" y="57" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">${esc(d.total)}</text><text x="60" y="74" text-anchor="middle" font-size="9" fill="currentColor" opacity=".65">${esc(d.title)}</text></svg><ul>${legend}</ul></div>`;
}
function reportHTML(p){
  const r=p.report;
  const head=r.cols.map(c=>`<th>${esc(c)}</th>`).join('');
  const rows=r.rows.map(row=>`<tr>${row.map(c=>`<td>${pill(c)}</td>`).join('')}</tr>`).join('');
  return `<div class="report">
    <div class="figure"><h4 style="margin-bottom:8px">${esc(r.title)}</h4><div class="table-wrap"><table class="rtable"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>${CAPTION}</div>
    <div class="figure"><h4 style="margin-bottom:12px">${esc(r.donut.title)}</h4>${donutHTML(r.donut)}${r.note?`<p class="small muted" style="margin-top:10px">${esc(r.note)}</p>`:''}${CAPTION}</div>
  </div>`;
}
const checkLi = t => `<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><span>${esc(t)}</span></li>`;
const plusLi = t => `<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--warn)" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg><span>${esc(t)}</span></li>`;


/* Visual layanan: ilustrasi konseptual, bukan dokumentasi pelanggan. */
const SERVICE_VISUALS = {
  workforce: ['Koordinasi tim', 'Koordinator berdiskusi dengan tim operasional'],
  security: ['Patroli & pengamanan', 'Petugas keamanan melakukan patroli di lobby gedung'],
  cleaning: ['Kebersihan area', 'Tim cleaning merawat kebersihan area gedung'],
  'pest-control': ['Inspeksi & pengendalian', 'Teknisi pest control memeriksa sudut ruangan dengan senter'],
  'gondola-climbing': ['Perawatan fasad', 'Teknisi gondola membersihkan fasad gedung'],
  garden: ['Perawatan lanskap', 'Tim garden merawat tanaman di halaman gedung'],
  project: ['Pelaksanaan proyek', 'Engineer meninjau pekerjaan renovasi di lapangan'],
  stp: ['Pemeliharaan instalasi', 'Teknisi STP memeriksa pompa dan instalasi pengolahan air limbah'],
  'field-service': ['Kunjungan per unit', 'Teknisi Field Service memeriksa perangkat internet dan checklist tiket']
};
function serviceImage(p, eager=false){
  // Panel cadangan tampil bila file ilustrasi belum tersedia (mis. pest-control.webp).
  return `<span class="img-fallback" aria-hidden="true" style="--fb:${p.accent}">${I[p.icon]}<small>${esc(SERVICE_VISUALS[p.slug][0])}</small></span><img onerror="this.parentNode.classList.add('img-missing');this.remove()" class="service-image" src="assets/${p.slug}.webp" width="1536" height="1024" alt="Ilustrasi ${esc(SERVICE_VISUALS[p.slug][1])}" loading="${eager?'eager':'lazy'}" decoding="async" ${eager?'fetchpriority="high"':''}>`;
}
function heroScene(){
  return `<div class="scene-wrap"><img class="hero-scene" src="assets/hero.webp" width="1536" height="1024" alt="Ilustrasi tim operasional mengelola gedung dan area taman" fetchpriority="high" decoding="async"><span class="scene-caption">Ilustrasi ekosistem SmartOps</span><div class="scene-note"><span class="scene-note-icon">${I.clip}</span><div><b>Dari lapangan ke laporan.</b><span>Rencana · Pelaksanaan · Pemeriksaan</span></div></div><div class="scene-chip">${I.grid}<span>9 aplikasi khusus</span></div></div>`;
}

/* ===================== SHARED CHROME ===================== */
function navHTML(){
  const items = PRODUCTS.map(p=>`<a class="menu-item" href="#aplikasi/${p.slug}" role="menuitem"><span class="ic" style="background:${p.accent}">${I[p.icon]}</span><span style="min-width:0"><b>${esc(p.name)}${p.sub?` <span class="small muted" style="display:inline">· ${esc(p.sub)}</span>`:''}</b><span>${esc(p.card)}</span></span></a>`).join('');
  document.getElementById('desktopNav').innerHTML = `
    <div class="menu" id="appsMenu">
      <button aria-expanded="false" aria-haspopup="true" id="appsBtn">Aplikasi <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
      <div class="menu-panel" id="appsPanel" role="menu" aria-label="Daftar aplikasi" hidden>
        <div class="items">${items}</div>
        <div class="menu-foot"><a href="#aplikasi" style="font-weight:600">Semua aplikasi ${I.arrow}</a><span class="muted small">9 aplikasi khusus</span></div>
      </div>
    </div>
    <a href="#integrasi" data-route="integrasi">Integrasi</a>
    <a href="#cara-kerja" data-route="cara-kerja">Cara Kerja</a>
    <a href="#tentang" data-route="tentang">Tentang</a>
    <a href="#kontak" data-route="kontak">Kontak</a>`;
  const mob = document.getElementById('mobileNav');
  mob.innerHTML = `
    <button id="mAppsBtn" aria-expanded="false" aria-controls="mAppsSub">Aplikasi <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-left:auto"><path d="M6 9l6 6 6-6"/></svg></button>
    <div class="sub" id="mAppsSub" hidden>${PRODUCTS.map(p=>`<a href="#aplikasi/${p.slug}">${esc(p.name)}${p.sub?` · ${esc(p.sub)}`:''}</a>`).join('')}<a href="#aplikasi"><b>Semua aplikasi →</b></a></div>
    <a href="#integrasi">Integrasi</a><a href="#cara-kerja">Cara Kerja</a><a href="#tentang">Tentang</a><a href="#kontak">Kontak</a>
    <div class="cta-row"><a class="btn btn-secondary" href="#masuk">Masuk</a><a class="btn btn-primary" href="#demo">Jadwalkan demo</a></div>`;

  const btn=document.getElementById('appsBtn'), panel=document.getElementById('appsPanel'), menu=document.getElementById('appsMenu');
  function closeMenu(focusBack){ panel.hidden=true; btn.setAttribute('aria-expanded','false'); if(focusBack) btn.focus(); }
  btn.addEventListener('click',()=>{ const open=panel.hidden; panel.hidden=!open; btn.setAttribute('aria-expanded',String(open)); if(open){ const f=panel.querySelector('a'); f&&f.focus(); } });
  document.addEventListener('click',e=>{ if(!menu.contains(e.target)) closeMenu(false); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!panel.hidden) closeMenu(true); });

  const burger=document.getElementById('burger');
  burger.addEventListener('click',()=>{ const open=mob.dataset.open!=='true'; mob.dataset.open=String(open); burger.setAttribute('aria-expanded',String(open)); burger.setAttribute('aria-label',open?'Tutup menu':'Buka menu'); });
  const mBtn=document.getElementById('mAppsBtn'), mSub=document.getElementById('mAppsSub');
  mBtn.addEventListener('click',()=>{ mSub.hidden=!mSub.hidden; mBtn.setAttribute('aria-expanded',String(!mSub.hidden)); });
  mob.addEventListener('click',e=>{ if(e.target.closest('a')) { mob.dataset.open='false'; burger.setAttribute('aria-expanded','false'); } });
}
function footerHTML(){
  document.getElementById('footer').innerHTML = `<div class="container">
    <div class="top">
      <div>
        <a class="logo" href="#beranda" aria-label="SmartOps, ke beranda"><img class="logo-img logo-img-sm" src="assets/brand/smartops-logo.png" width="373" height="96" alt="SmartOps"></a>
        <p class="muted small" style="margin-top:10px;max-width:34ch">Keluarga aplikasi pengelolaan layanan operasional.</p>
        <p class="muted small" style="margin-top:8px">Identitas pengelola, alamat dan kontak resmi akan dilengkapi sebelum publikasi.</p>
      </div>
      <div><h4>Aplikasi</h4><ul>${PRODUCTS.slice(0,4).map(p=>`<li><a href="#aplikasi/${p.slug}">${esc(p.name)}</a></li>`).join('')}<li><a href="#aplikasi">Semua aplikasi</a></li></ul></div>
      <div><h4>&nbsp;</h4><ul>${PRODUCTS.slice(4).map(p=>`<li><a href="#aplikasi/${p.slug}">${esc(p.name)}</a></li>`).join('')}</ul></div>
      <div><h4>SmartOps</h4><ul>
        <li><a href="#integrasi">Integrasi</a></li><li><a href="#cara-kerja">Cara Kerja</a></li><li><a href="#tentang">Tentang</a></li>
        <li><a href="#demo">Permintaan demo</a></li><li><a href="#kontak">Kontak</a></li><li><a href="#masuk">Masuk</a></li>
        <li><a href="#privasi">Privasi</a></li><li><a href="#ketentuan">Ketentuan</a></li></ul></div>
    </div>
    <div class="bottom"><span>© 2026 SmartOps · Konsep desain website · <a href="#prospek">Prospek (internal)</a></span><span>Seluruh contoh antarmuka memakai data fiktif.</span></div>
  </div>`;
}

/* ===================== PAGES ===================== */
function pageHome(){
  const cards = PRODUCTS.map(p=>productCard(p)).join('');
  const famRow = PRODUCTS.map(p=>`<a href="#aplikasi/${p.slug}"><span class="sw" aria-hidden="true"><i style="background:${p.accent}"></i><i style="background:var(--surface)"></i></span>${esc(p.name)}</a>`).join('');
  return `
  <section class="hero visual-home"><div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow"><span class="eyebrow-dot"></span>Untuk tim yang bekerja di lapangan</p>
      <h1>Pekerjaan dan pengawasan<br><span>jadi lebih mudah!</span></h1>
      <p class="lead">Kelola tim operasional, penugasan, kehadiran, laporan, dan evaluasi kinerja dalam satu alur kerja. Bantu operasional berjalan lebih tertib, efisien, dan mudah dipantau.</p>
      <div class="hero-cta"><a class="btn btn-primary btn-lg" href="#aplikasi">Jelajahi Aplikasi ${I.arrow}</a><a class="btn btn-secondary btn-lg" href="#demo">Diskusikan Kebutuhan</a></div>
      <div class="hero-points"><span>${I.check} Sesuai bidang layanan</span><span>${I.check} Mulai dari satu aplikasi</span></div>
    </div>
    ${heroScene()}
  </div></section>
  <div class="service-ribbon"><div class="container"><span class="ribbon-label">Keluarga SmartOps</span><div class="ribbon-links">${PRODUCTS.map(p=>`<a href="#aplikasi/${p.slug}"><span style="color:${p.accent}">${I[p.icon]}</span>${esc(p.name)}</a>`).join('')}</div></div></div>

  <section class="section"><div class="container">
    <div class="section-head"><div><p class="eyebrow" style="margin-bottom:10px">Setiap layanan, pendekatan berbeda</p><h2>Temukan aplikasi untuk bidang Anda</h2><p class="muted" style="margin-top:8px">Sembilan aplikasi untuk mendukung pengelolaan layanan secara lebih terstruktur dan terukur.</p></div></div>
    <div class="grid cols-3 service-grid">${cards}</div>
  </div></section>

  <section class="section alt"><div class="container">
    <div class="section-head"><h2>Mulai dari kebutuhan pekerjaan Anda</h2><p class="muted">Tiga langkah sederhana untuk menemukan aplikasi yang tepat.</p></div>
    <div class="grid cols-3">
      <div class="cards-sm"><div class="card">${ic('grid','var(--brown)')}<h3>Bidang layanan</h3><p>Pilih bidang layanan sesuai jenis usaha Anda — keamanan, kebersihan, taman, fasad, proyek atau STP.</p></div></div>
      <div class="cards-sm"><div class="card">${ic('file','var(--brown)')}<h3>Pekerjaan utama</h3><p>Tentukan pekerjaan utama yang ingin dikelola: jadwal, pelaksanaan, pemeriksaan atau pelaporan.</p></div></div>
      <div class="cards-sm"><div class="card">${ic('sliders','var(--brown)')}<h3>Kontrol yang dibutuhkan</h3><p>Pilih fitur dan kontrol sesuai kebutuhan operasional, lalu diskusikan lingkupnya bersama kami.</p></div></div>
    </div>
    <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-secondary" href="#aplikasi">Lihat katalog</a><a class="btn btn-text" href="#demo">Belum yakin? Diskusikan kebutuhan ${I.arrow}</a></div>
  </div></section>

  <section class="section"><div class="container">
    <div class="grid cols-2" style="align-items:center;gap:40px">
      <div>
        <h2>Satu aplikasi, alur kerja yang lengkap</h2>
        <p class="muted" style="margin-top:12px;max-width:60ch">Setiap aplikasi SmartOps menyediakan alur kerja yang lengkap secara mandiri — dari perencanaan, pelaksanaan, hingga laporan. Kemampuan dasar yang diperlukan sudah dibundel sesuai lingkup, tanpa keharusan membeli produk lain untuk menjalankan alur minimumnya.</p>
        <ul style="list-style:none;padding:0;margin:16px 0 0;display:grid;gap:10px">
          ${checkLi('Alur, tampilan dan laporan khusus per bidang')}
          ${checkLi('Paket menjelaskan yang termasuk dan tambahan opsional')}
          ${checkLi('Akses pelanggan dengan batas yang jelas')}
        </ul>
      </div>
      <div class="figure">${mockHTML(BY['cleaning'],BY['cleaning'].mock,false)}${CAPTION}</div>
    </div>
  </div></section>

  <section class="section alt"><div class="container">
    <div class="section-head"><div><h2>Terhubung saat dibutuhkan</h2><p class="muted" style="margin-top:8px">Beberapa aplikasi dapat dihubungkan untuk memberikan alur kerja yang lebih terpadu, sesuai kebutuhan dan izin.</p></div><a class="btn btn-text" href="#integrasi">Pelajari integrasi ${I.arrow}</a></div>
    <div class="grid cols-2">
      <div class="cards-sm"><div class="card"><div class="link-pair"><span class="chip"><i style="background:${BY['cleaning'].accent}">${I.broom}</i>Cleaning</span>${I.plus}<span class="chip"><i style="background:${BY['garden'].accent}">${I.leaf}</i>Garden</span></div><p>Jadwal kebersihan dan perawatan taman dalam satu alur koordinasi area.</p></div></div>
      <div class="cards-sm"><div class="card"><div class="link-pair"><span class="chip"><i style="background:${BY['stp'].accent}">${I.drop}</i>STP</span>${I.plus}<span class="chip"><i style="background:${BY['project'].accent}">${I.chart}</i>Project</span></div><p>Rehabilitasi instalasi terhubung dengan pekerjaan proyek hingga serah terima.</p></div></div>
    </div>
  </div></section>

  <section class="section"><div class="container">
    <div class="section-head"><h2>Penerapan sesuai kebutuhan</h2><p class="muted">Kami mendampingi penerapan sesuai lingkup dan kebutuhan usaha Anda.</p></div>
    <div class="grid cols-4">
      <div class="cards-sm"><div class="card"><span class="step-no">1</span>${ic('chat','var(--brown)')}<h4>Diskusi kebutuhan</h4><p>Memahami tujuan, bidang layanan dan lingkup pekerjaan.</p></div></div>
      <div class="cards-sm"><div class="card">${ic('cog','var(--brown)')}<h4>Konfigurasi</h4><p>Menyiapkan aplikasi sesuai kebutuhan yang disepakati.</p></div></div>
      <div class="cards-sm"><div class="card">${ic('clip','var(--brown)')}<h4>Uji penggunaan</h4><p>Menguji alur kerja bersama tim Anda.</p></div></div>
      <div class="cards-sm"><div class="card">${ic('check','var(--brown)')}<h4>Penerapan</h4><p>Aplikasi siap digunakan sesuai rencana dan kesiapan.</p></div></div>
    </div>
    <div style="margin-top:16px"><a class="btn btn-text" href="#cara-kerja">Lihat langkah penerapan selengkapnya ${I.arrow}</a></div>
  </div></section>

  <section class="section alt"><div class="container">
    <div class="section-head"><h2>Pertanyaan yang sering ditanyakan</h2></div>
    <div class="faq">${HOME_FAQ.map(f=>`<details><summary>${esc(f[0])}</summary><div class="ans">${esc(f[1])}</div></details>`).join('')}</div>
  </div></section>

  <section class="section"><div class="container">
    <div class="cta-band"><div><h2>Aplikasi mana yang sesuai untuk usaha Anda?</h2><p style="margin-top:8px">Diskusikan kebutuhan Anda dan temukan kombinasi aplikasi SmartOps yang paling sesuai.</p></div><a class="btn btn-primary btn-lg" href="#demo">Diskusikan Kebutuhan ${I.arrow}</a></div>
    <div style="margin-top:28px"><p class="small muted" style="margin-bottom:10px">Keluarga aplikasi SmartOps</p><div class="fam-row">${famRow}</div></div>
  </div></section>`;
}

function productCard(p){
  return `<a class="pcard visual-card" href="#aplikasi/${p.slug}" aria-label="Jelajahi ${esc(p.full)}: ${esc(p.card)}" style="--service-accent:${p.accent}">
    <div class="thumb service-thumb">${serviceImage(p)}<span class="image-label">${esc(SERVICE_VISUALS[p.slug][0])}</span><span class="card-arrow" aria-hidden="true">${I.arrow}</span></div>
    <div class="body">
      <div class="title">${ic(p.icon,p.accent)}<span><span class="brand-overline">SmartOps</span><b>${esc(p.name)}</b>${p.sub?`<span class="small muted" style="display:block">${esc(p.sub)}</span>`:''}</span></div>
      <p class="muted small">${esc(p.card)}</p>
      <div class="tags">${p.tags.slice(0,3).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
      <div class="foot"><span class="go">Lihat aplikasi ${I.arrow}</span><span class="status">Konsep</span></div>
    </div></a>`;
}

function pageCatalog(filter){
  const groups={semua:'Semua aplikasi',personel:'Personel',operasional:'Operasional',teknis:'Pekerjaan teknis'};
  filter = filter||'semua';
  const list = PRODUCTS.filter(p=>filter==='semua'||p.group===filter||(filter==='personel'&&p.slug==='workforce'));
  return `
  <section class="catalog-hero"><div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow"><span class="eyebrow-dot"></span>Keluarga aplikasi SmartOps</p>
      <h1>Pekerjaan berbeda.<br><span>Aplikasi yang tepat.</span></h1>
      <p class="lead">Dari pengelolaan tim hingga pemeliharaan instalasi. Temukan aplikasi dengan alur kerja yang memahami bidang Anda.</p>
      <div class="catalog-facts"><div><b>09</b><span>Bidang layanan</span></div><div><b>Mandiri</b><span>Mulai sesuai kebutuhan</span></div><div><b>Terhubung</b><span>Integrasi opsional</span></div></div>
    </div>
    ${heroScene()}
  </div></section>
  <section class="section catalog-section"><div class="container">
    <div class="section-head"><div><p class="eyebrow" style="margin-bottom:10px">Pilih bidang Anda</p><h2>Ada SmartOps untuk setiap layanan.</h2><p class="muted" style="margin-top:10px">Jelajahi pekerjaan, fitur, dan contoh tampilan setiap aplikasi.</p></div></div>
    <div class="chip-filter" style="justify-content:flex-start;margin-top:0" role="group" aria-label="Filter katalog">
      ${Object.entries(groups).map(([k,v])=>`<button data-filter="${k}" aria-pressed="${k===filter}">${v}</button>`).join('')}
    </div>
    <div class="grid cols-3 service-grid" id="catalogGrid">${list.map(productCard).join('')}</div>
    <div class="cta-band" style="margin-top:48px"><div><p class="eyebrow" style="color:var(--tan)">Konsultasi</p><h2 style="margin-top:6px">Belum yakin memilih aplikasi?</h2><p style="margin-top:8px">Diskusikan kebutuhan Anda, kami siap membantu menentukan aplikasi yang paling sesuai.</p></div><a class="btn btn-primary btn-lg" href="#demo">Diskusikan Kebutuhan ${I.arrow}</a></div>
  </div></section>`;
}

function pageProduct(p){
  const challenges = p.challenges.map(c=>`<div class="card">${ic('warn',p.accent)}<h4>${esc(c[0])}</h4><p>${esc(c[1])}</p></div>`).join('');
  const benefits = p.benefits.map(b=>`<div class="card">${ic('check',p.accent)}<h4>${esc(b[0])}</h4><p>${esc(b[1])}</p></div>`).join('');
  const features = p.features.map(f=>`<div class="feature"><span class="ic" style="background:${p.accent}">${I[f[0]]||I.grid}</span><div><h4>${esc(f[1])}</h4><p>${esc(f[2])}</p></div></div>`).join('');
  const flow = p.flow.map((s,i)=>`<div class="step"><span class="n" style="background:${p.accent}">${i+1}</span><b>${esc(s[0])}</b><p>${esc(s[1])}</p></div>`).join('');
  const tabs = p.roles.map((r,i)=>`<button role="tab" id="tab-${i}" aria-selected="${i===0}" aria-controls="panel-${i}" tabindex="${i===0?0:-1}">${esc(r[0])}</button>`).join('');
  const panels = p.roles.map((r,i)=>`<div class="tabpanel" id="panel-${i}" role="tabpanel" aria-labelledby="tab-${i}" ${i===0?'':'hidden'}><div class="role-note">${ic('users',p.accent)}<p><b>${esc(r[0])}.</b> ${esc(r[1])}</p></div></div>`).join('');
  const gallery = [
    ['Dashboard utama', ()=>mockHTML(p,p.mock,false), 0],
    ['Tampilan HP petugas', ()=>`<div style="padding:8px 0">${phoneHTML(p,p.phone)}</div>`, 1],
    ['Contoh data & laporan', ()=>mockHTML(p,p.mock2,false), 2]
  ].map((g,i)=>`<button class="gal-item" data-gal="${i}" aria-haspopup="dialog"><div>${g[1]()}</div><div class="gcap"><b>${esc(g[0])}</b><span>Perbesar</span></div><div class="caption" style="text-align:left;padding:2px 0 0">Ilustrasi antarmuka • Data contoh</div></button>`).join('');
  const included = p.scope.included.map(checkLi).join('');
  const optional = p.scope.optional.map(plusLi).join('');
  const integ = p.scope.integrations.map(it=>{const q=BY[it[0]];return `<li><span class="ic" style="background:${q.accent};width:28px;height:28px;border-radius:7px;display:inline-grid;place-items:center;color:#fff;flex:none">${I[q.icon]}</span><span><a href="#aplikasi/${q.slug}" style="font-weight:600">SmartOps ${esc(q.name)}</a><br><span class="small muted">${esc(it[1])}</span></span></li>`;}).join('');
  const faq = p.faq.map(f=>`<details><summary>${esc(f[0])}</summary><div class="ans">${esc(f[1])}</div></details>`).join('');
  return `
  <nav class="subnav" aria-label="Bagian halaman ${esc(p.name)}"><div class="container row">
    <a class="all small" href="#aplikasi">← Semua aplikasi</a>
    <a href="#aplikasi/${p.slug}/manfaat" data-anchor="manfaat">Manfaat</a>
    <a href="#aplikasi/${p.slug}/fitur" data-anchor="fitur">Fitur</a>
    <a href="#aplikasi/${p.slug}/alur" data-anchor="alur">Alur Kerja</a>
    <a href="#aplikasi/${p.slug}/tampilan" data-anchor="tampilan">Tampilan</a>
    <a href="#aplikasi/${p.slug}/faq" data-anchor="faq">FAQ</a>
    <a class="btn btn-primary btn-sm cta" href="#demo/${p.slug}">Diskusikan Kebutuhan</a>
  </div></nav>
  <section class="product-hero visual-product" style="--service-accent:${p.accent}"><div class="container">
    <div class="breadcrumb"><a href="#beranda">Beranda</a> › <a href="#aplikasi">Aplikasi</a> › <span aria-current="page">${esc(p.name)}</span></div>
    <div class="hero-grid" style="align-items:center">
      <div>
        <div class="ident">${ic(p.icon,p.accent)}<span><small>Aplikasi SmartOps${p.sub?` · ${esc(p.sub)}`:''}</small><b>${esc(p.full)}</b></span></div>
        <h1 style="font-size:clamp(30px,4vw,44px)">${esc(p.headline)}</h1>
        <p class="lead" style="margin-top:14px">${esc(p.intro)}</p>
        <p class="small muted" style="margin-top:12px"><b>Untuk siapa:</b> ${esc(p.audience)}.</p>
        <div class="hero-cta"><a class="btn btn-primary btn-lg" href="#demo/${p.slug}">Diskusikan Kebutuhan ${I.arrow}</a><span class="badge plan">Status: dalam pengembangan</span></div>
      </div>
      <div class="product-scene"><div class="product-photo">${serviceImage(p,true)}<span class="scene-caption">Ilustrasi layanan ${esc(p.name)}</span></div><div class="product-scene-note"><span class="ic" style="background:${p.accent}">${I[p.icon]}</span><div><small>Fokus layanan</small><b>${esc(SERVICE_VISUALS[p.slug][0])}</b><span>${esc(p.tags.slice(0,2).join(' · '))}</span></div></div><a class="product-scene-link" href="#aplikasi/${p.slug}/tampilan">Lihat contoh tampilan aplikasi ${I.arrow}</a></div>
    </div>
  </div></section>

  <section class="section" id="manfaat"><div class="container anchor" id="sec-manfaat">
    <div class="section-head"><h2>Tantangan umum di lapangan</h2></div>
    <div class="grid cols-3 cards-sm">${challenges}</div>
    <div class="section-head" style="margin-top:56px"><h2>Manfaat ${esc(p.full)}</h2></div>
    <div class="grid cols-3 cards-sm">${benefits}</div>
  </div></section>

  <section class="section alt" id="fitur"><div class="container anchor" id="sec-fitur">
    <div class="section-head"><h2>Fitur utama ${esc(p.full)}</h2><p class="muted">Kelompok fungsi inti sesuai pekerjaan di bidang ini.</p></div>
    <div class="feature-row">${features}</div>
  </div></section>

  <section class="section" id="alur"><div class="container anchor" id="sec-alur">
    <div class="section-head"><h2>Alur kerja</h2><p class="muted">Dari rencana sampai laporan dan tindak lanjut.</p></div>
    <div class="flow">${flow}</div>
  </div></section>

  <section class="section alt" id="tampilan"><div class="container anchor" id="sec-tampilan">
    <div class="section-head"><h2>Tampilan untuk setiap peran</h2><p class="muted">Setiap pengguna memiliki peran dan akses sesuai tanggung jawabnya.</p></div>
    <div role="tablist" class="tabs" aria-label="Peran pengguna">${tabs}</div>
    ${panels}
    <div class="gallery" style="margin-top:8px">${gallery}</div>
    <div class="section-head" style="margin-top:56px"><h2>Contoh laporan</h2><p class="muted">Keluaran yang dapat dihasilkan dari data pekerjaan.</p></div>
    ${reportHTML(p)}
  </div></section>

  <section class="section"><div class="container">
    <div class="section-head"><h2>Lingkup dan integrasi</h2></div>
    <div class="scope">
      <div class="box"><h4>Termasuk dalam aplikasi</h4><ul>${included}</ul></div>
      <div class="box"><h4>Opsional sesuai paket</h4><ul>${optional}</ul><h4 style="margin-top:18px">Integrasi opsional</h4><ul>${integ}</ul></div>
      <div class="box note"><h4 style="display:flex;gap:8px;align-items:center">${I.info} Perlu diketahui</h4><p class="small" style="margin-top:8px;color:var(--warn)">${esc(p.scope.note)}</p></div>
    </div>
  </div></section>

  <section class="section alt" id="faq"><div class="container anchor" id="sec-faq">
    <div class="section-head"><h2>Pertanyaan yang sering diajukan</h2></div>
    <div class="faq">${faq}</div>
  </div></section>

  <section class="section"><div class="container">
    <div class="cta-band"><div><h2>Siap mengelola ${p.slug==='stp'?'pemeliharaan STP':'pekerjaan '+p.name.toLowerCase()} dengan lebih terstruktur?</h2><p style="margin-top:8px">Diskusikan kebutuhan, lingkup dan alur kerja Anda bersama tim kami.</p></div><a class="btn btn-primary btn-lg" href="#demo/${p.slug}">Diskusikan Kebutuhan ${I.arrow}</a></div>
  </div></section>`;
}

/* ===================== INTEGRASI ===================== */
function pageIntegrasi(){
  const rels = [
    ['Akses produk','Gunakan identitas yang sesuai untuk produk yang berhak diakses.','Login dan aktivasi produk tidak sama dengan akses semua data.'],
    ['Data referensi','Gunakan kembali data personel atau lokasi yang diizinkan.','Pemilik data dan pemetaan identitas jelas.'],
    ['Pekerjaan','Tautkan temuan ke pekerjaan terkait di aplikasi lain.','Tidak otomatis menyetujui hasil atau menagihkan.'],
    ['Ringkasan manager','Pantau beberapa produk sesuai mandat.','Dashboard gabungan opsional; KPI tiap bidang tetap terpisah.']
  ];
  const scen = INTEGRATIONS.map(s=>{
    const chips = s.products.map((slug,i)=>{const q=BY[slug];return `${i>0?'<span aria-hidden="true">'+I.plus+'</span>':''}<span class="chip"><i style="background:${q.accent}">${I[q.icon]}</i>${esc(q.name)}</span>`;}).join('');
    const cards = s.mock.cards.map(c=>{const q=BY[c[0]];return `<div style="flex:1;min-width:150px;border:1px solid var(--line);border-radius:8px;padding:10px"><div style="display:flex;gap:8px;align-items:center;font-weight:600;font-size:12px;margin-bottom:6px"><i style="width:20px;height:20px;border-radius:5px;background:${q.accent};display:grid;place-items:center;color:#fff">${I[q.icon]}</i>${esc(c[1])}</div><b style="font-size:17px">${esc(c[2])}</b><div class="small muted" style="font-size:11px">${esc(c[3])}</div><div style="height:6px;border-radius:3px;background:var(--surface-2);margin-top:8px;overflow:hidden"><div style="width:${c[4]}%;height:100%;background:${q.accent}"></div></div></div>`;}).join('');
    return `<div class="scenario">
      <div class="top">
        <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center"><span class="badge plan">Skenario konsep · Status: ${esc(s.status[1])}</span></div>
        <div class="link-pair" style="margin-top:12px">${chips}</div>
        <h3>${esc(s.title)}</h3>
        <p class="muted" style="margin-top:6px;max-width:70ch">${esc(s.tagline)} ${esc(s.desc)}</p>
      </div>
      <div class="meta">
        <div><h4>Data terkait</h4><ul>${s.data.map(d=>`<li>${esc(d)}</li>`).join('')}</ul></div>
        <div><h4>Prasyarat</h4><ul>${s.prereq.map(d=>`<li>${esc(d)}</li>`).join('')}</ul></div>
        <div><h4>Lingkup</h4><ul>${s.scope.map(d=>`<li>${esc(d)}</li>`).join('')}</ul></div>
      </div>
      <div class="vis"><div class="figure"><h4 style="margin-bottom:10px;font-size:14px">${esc(s.mock.title)} <span class="small muted" style="font-weight:400">· Ringkasan manager (opsional)</span></h4><div style="display:flex;gap:10px;flex-wrap:wrap">${cards}</div>${CAPTION}</div></div>
    </div>`;
  }).join('<div style="height:28px"></div>');
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container">
    <div style="max-width:760px">
      <p class="eyebrow">Integrasi antarproduk</p>
      <h1 style="font-size:clamp(30px,4vw,46px);margin-top:10px">Aplikasi mandiri. Terhubung saat dibutuhkan.</h1>
      <p class="lead" style="margin-top:14px">Mulai dari satu aplikasi, lalu tambahkan hubungan sesuai kebutuhan, lingkup, dan izin. Hubungan produk mengikuti paket, mandat dan kesiapan implementasi.</p>
    </div>
    <div class="table-wrap" style="margin-top:36px;border:1px solid var(--line);border-radius:var(--r-card)">
      <table class="rel-table">
        <caption class="visually-hidden">Bentuk hubungan antarproduk</caption>
        <thead><tr><th scope="col">Bentuk hubungan</th><th scope="col">Untuk pengunjung</th><th scope="col">Kontrol</th></tr></thead>
        <tbody>${rels.map(r=>`<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}</td><td class="muted">${esc(r[2])}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div></section>
  <section class="section alt"><div class="container">
    <div class="section-head"><h2>Skenario konsep</h2><p class="muted">Setiap hubungan memiliki status, lingkup data, prasyarat dan reviewer sendiri.</p></div>
    ${scen}
    <div class="notice info" style="margin-top:28px">${I.info}<div><b>Lokasi yang sama tidak otomatis membuka data vendor lain.</b><p>Integrasi mengikuti pengaturan izin, lingkup dan kebutuhan masing-masing. Sharing lintas vendor memerlukan izin tersendiri.</p></div></div>
  </div></section>
  <section class="section"><div class="container">
    <div class="section-head"><h2>Pertanyaan umum</h2></div>
    <div class="faq">
      <details><summary>Apakah semua aplikasi harus digunakan?</summary><div class="ans">Tidak. Setiap aplikasi berdiri sendiri. Integrasi hanya ditambahkan bila memberi nilai bagi alur kerja Anda.</div></details>
      <details><summary>Bagaimana data antar aplikasi dihubungkan?</summary><div class="ans">Melalui data referensi yang diizinkan — misalnya lokasi atau personel yang sama — dengan pemilik data dan pemetaan identitas yang jelas.</div></details>
      <details><summary>Apakah data operasional digabungkan dalam satu tampilan?</summary><div class="ans">Tidak. Ringkasan manager bersifat opsional dan hanya menampilkan ringkasan sesuai mandat. Tim tetap bekerja di aplikasinya masing-masing.</div></details>
    </div>
    <div class="cta-band" style="margin-top:40px"><div><h2>Diskusikan skenario integrasi Anda</h2><p style="margin-top:8px">Ceritakan kombinasi layanan yang Anda kelola; kami bantu memetakan hubungannya.</p></div><a class="btn btn-primary btn-lg" href="#demo">Diskusikan Kebutuhan ${I.arrow}</a></div>
  </div></section>`;
}

/* ===================== CARA KERJA ===================== */
function pageCaraKerja(){
  const steps=[
    ['Diskusi kebutuhan','Kami memahami tujuan, lokasi, dan lingkup pekerjaan Anda untuk menentukan pendekatan yang tepat.',['Tujuan dan tantangan utama','Lokasi dan area kerja','Tim yang terlibat'],['Pemahaman kebutuhan yang jelas dan terarah']],
    ['Pilih produk dan lingkup','Pilih aplikasi yang sesuai dan tentukan lingkup penggunaan di setiap lokasi.',['Aplikasi yang dibutuhkan','Skenario pekerjaan utama','Lingkup per lokasi'],['Daftar aplikasi dan lingkup yang siap dikonfigurasi']],
    ['Konfigurasi lokasi, master dan peran','Pengaturan lokasi, data dasar, dan peran pengguna sesuai lingkup yang disepakati.',['Data lokasi dan area','Data master yang diperlukan','Peran dan hak akses'],['Aplikasi siap digunakan oleh pengguna terkait']],
    ['Uji bersama pengguna','Pengguna mencoba langsung sesuai peran masing-masing dengan data contoh yang relevan.',['Pengguna per peran','Skenario pekerjaan utama','Masukan dari tim lapangan'],['Aplikasi sesuai kebutuhan sebelum penerapan']],
    ['Gunakan sesuai kesiapan','Mulai digunakan pada lokasi dan tim yang sudah siap; dapat diperluas bertahap.',['Konfirmasi kesiapan tim','Lokasi awal penggunaan','Rencana perluasan (jika ada)'],['Aplikasi digunakan dengan lancar dan sesuai tujuan']]
  ];
  const prep=[['pin','Lokasi','Daftar lokasi dan area kerja beserta informasi dasar tiap lokasi.'],['clip','Lingkup pekerjaan','Jenis layanan yang dijalankan, area dan tim yang terlibat.'],['users','Peran pengguna','Peran di setiap lokasi dan tanggung jawab utamanya.'],['file','Contoh laporan','Format laporan yang biasa digunakan dan informasi penting di dalamnya.']];
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container">
    <div style="max-width:760px">
      <p class="eyebrow">Cara kerja</p>
      <h1 style="font-size:clamp(30px,4vw,46px);margin-top:10px">Penerapan yang mengikuti kebutuhan pekerjaan Anda.</h1>
      <p class="lead" style="margin-top:14px">Mulai dari kebutuhan nyata di lapangan, dengan langkah yang jelas dan terarah. Durasi penerapan mengikuti kesiapan tim dan lingkup yang disepakati.</p>
    </div>
  </div></section>
  <section class="section alt" style="padding-top:0"><div class="container" style="padding-top:clamp(32px,5vw,48px)">
    <h2 style="margin-bottom:24px">Langkah penerapan</h2>
    <div class="steps-v">${steps.map((s,i)=>`<div class="step-v"><span class="n">${i+1}</span><div><h3>${esc(s[0])}</h3><p class="muted" style="margin-top:6px">${esc(s[1])}</p><div class="io"><div><b>Input dari Anda</b><ul>${s[2].map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div><b>Hasil yang diharapkan</b><ul>${s[3].map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div></div></div>`).join('')}</div>
  </div></section>
  <section class="section"><div class="container">
    <div class="section-head"><h2>Apa yang perlu disiapkan?</h2><p class="muted">Beberapa hal yang membantu kelancaran penerapan sesuai kebutuhan Anda.</p></div>
    <div class="grid cols-4 cards-sm">${prep.map(p=>`<div class="card">${ic(p[0],'var(--brown)')}<h4>${esc(p[1])}</h4><p>${esc(p[2])}</p></div>`).join('')}</div>
  </div></section>
  <section class="section alt"><div class="container">
    <div class="section-head"><h2>Pertanyaan umum</h2></div>
    <div class="faq">
      <details><summary>Apakah penerapan harus dilakukan untuk semua lokasi sekaligus?</summary><div class="ans">Tidak. Penerapan dapat dimulai dari lokasi dan tim yang paling siap, lalu diperluas bertahap.</div></details>
      <details><summary>Siapa yang terlibat dalam penerapan?</summary><div class="ans">Pemilik kebutuhan, supervisor atau PIC lokasi, dan perwakilan tim lapangan — sesuai lingkup yang disepakati.</div></details>
      <details><summary>Apakah ada batasan dalam pemilihan aplikasi?</summary><div class="ans">Setiap aplikasi dapat dipakai sendiri. Kombinasi aplikasi dan integrasi mengikuti kebutuhan, lingkup dan izin.</div></details>
      <details><summary>Bagaimana jika ada perubahan kebutuhan setelah digunakan?</summary><div class="ans">Lingkup dan konfigurasi dapat disesuaikan. Perubahan ditinjau bersama agar alur kerja tetap konsisten.</div></details>
    </div>
    <div class="cta-band" style="margin-top:40px"><div><h2>Konsultasikan penerapan sesuai kebutuhan Anda</h2><p style="margin-top:8px">Kami siap membantu menjawab pertanyaan dan memetakan langkah yang tepat untuk pekerjaan Anda.</p></div><a class="btn btn-primary btn-lg" href="#demo">Diskusikan Kebutuhan ${I.arrow}</a></div>
  </div></section>`;
}

/* ===================== TENTANG ===================== */
function pageTentang(){
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container">
    <div class="grid cols-2" style="align-items:center;gap:40px">
      <div>
        <p class="eyebrow">Tentang SmartOps</p>
        <h1 style="font-size:clamp(30px,4vw,46px);margin-top:10px">Aplikasi yang mengikuti pekerjaan di lapangan.</h1>
        <p class="lead" style="margin-top:14px">SmartOps adalah keluarga sembilan aplikasi untuk membantu pengelolaan layanan operasional. Setiap aplikasi memiliki alur kerja sendiri sesuai kebutuhan bidangnya, dan dapat diintegrasikan saat diperlukan.</p>
      </div>
      <div class="figure" style="display:grid;gap:10px">
        <div class="notice info" style="background:var(--surface-2);color:var(--fg)">${I.check}<div><b>Pekerjaan lebih terarah</b><p class="muted">Informasi hasil mudah dibagikan; hasil di lapangan lebih terlihat.</p></div></div>
        <div class="notice info" style="background:var(--surface-2);color:var(--fg)">${I.users}<div><b>Peran yang jelas</b><p class="muted">Setiap pengguna memiliki peran dan akses sesuai tanggung jawabnya.</p></div></div>
        <div class="notice info" style="background:var(--surface-2);color:var(--fg)">${I.file}<div><b>Bukti dan tindak lanjut</b><p class="muted">Hasil pekerjaan terdokumentasi dengan rapi dan mudah ditindaklanjuti.</p></div></div>
      </div>
    </div>
  </div></section>
  <section class="section alt"><div class="container">
    <div class="section-head"><h2>Sembilan aplikasi dalam satu keluarga</h2><p class="muted">Pilih aplikasi sesuai kebutuhan, dan integrasikan saat diperlukan.</p></div>
    <div class="fam-row">${PRODUCTS.map(p=>`<a href="#aplikasi/${p.slug}"><span class="sw" aria-hidden="true"><i style="background:${p.accent}"></i><i style="background:var(--surface)"></i></span>${esc(p.name)}</a>`).join('')}</div>
    <div class="notice warn" style="margin-top:24px">${I.info}<div><b>Identitas pengelola akan dilengkapi sebelum publikasi.</b><p>Riwayat perusahaan, tim, alamat dan pencapaian hanya ditampilkan dari bahan yang disahkan pemilik bisnis.</p></div></div>
  </div></section>
  <section class="section"><div class="container">
    <div class="about-cards">
      <div class="card"><h3>Spesifik per bidang</h3><p>Setiap aplikasi dirancang sesuai proses dan kebutuhan pekerjaan di lapangan — bukan satu platform generik untuk semua.</p></div>
      <div class="card"><h3>Penyedia aplikasi</h3><p>SmartOps menyediakan perangkat lunak pengelolaan layanan. Kami bukan penyedia jasa petugas security, cleaning atau operator STP secara langsung.</p></div>
      <div class="card"><h3>Jujur pada status</h3><p>Contoh antarmuka memakai data fiktif dan berlabel ilustrasi. Status kesiapan fitur dikonfirmasi saat diskusi kebutuhan.</p></div>
    </div>
    <div class="cta-band" style="margin-top:40px"><div><h2>Ingin tahu lebih jauh?</h2><p style="margin-top:8px">Ceritakan usaha Anda dan kami akan menyiapkan informasi yang relevan.</p></div><a class="btn btn-primary btn-lg" href="#kontak">Hubungi Kami ${I.arrow}</a></div>
  </div></section>`;
}

/* ===================== KONTAK ===================== */
function pageKontak(){
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container">
    <div style="max-width:720px">
      <p class="eyebrow">Kontak</p>
      <h1 style="font-size:clamp(30px,4vw,46px);margin-top:10px">Ceritakan kebutuhan usaha Anda.</h1>
      <p class="lead" style="margin-top:14px">Sampaikan kebutuhan, ruang lingkup, atau pertanyaan Anda. Kami akan menyiapkan informasi yang relevan. Satu kebutuhan bisa melibatkan beberapa aplikasi.</p>
    </div>
    <div class="grid cols-2" style="margin-top:36px;align-items:start">
      <div class="figure" style="padding:22px">
        <h3 style="display:flex;gap:10px;align-items:center">${I.file} Formulir konsultasi</h3>
        <p class="muted small" style="margin-top:6px">Jelaskan kebutuhan Anda secara singkat. Kami akan menyiapkan informasi yang sesuai.</p>
        <div style="margin-top:16px"><a class="btn btn-primary" href="#demo">Isi permintaan konsultasi ${I.arrow}</a></div>
      </div>
      <div style="display:grid;gap:16px">
        <div class="figure" style="padding:22px">
          <h3 style="display:flex;gap:10px;align-items:center">${I.mail} Kanal lainnya</h3>
          <p class="muted small" style="margin-top:6px">Kanal email dan WhatsApp resmi akan ditetapkan dan diumumkan di halaman ini setelah diverifikasi. Hingga saat itu, gunakan formulir konsultasi — tidak ada tombol kosong di sini.</p>
        </div>
        <div class="figure" style="padding:22px">
          <h3 style="display:flex;gap:10px;align-items:center">${I.info} Pertanyaan yang sering diajukan</h3>
          <div class="faq" style="margin-top:12px">
            <details><summary>Informasi apa yang perlu disampaikan?</summary><div class="ans">Bidang layanan, jumlah lokasi (perkiraan), dan pekerjaan utama yang ingin dikelola.</div></details>
            <details><summary>Apakah ada presentasi produk?</summary><div class="ans">Ada, sesuai status kesiapan produk yang diminati. Jadwal disepakati setelah kebutuhan diterima.</div></details>
            <details><summary>Apakah permintaan ini mengikat?</summary><div class="ans">Tidak. Permintaan konsultasi bukan pembuatan akun atau pembelian langganan.</div></details>
            <details><summary>Kapan saya mendapatkan respon?</summary><div class="ans">Tim menindaklanjuti sesuai urutan permintaan. Kami tidak menjanjikan durasi tertentu sebelum standar layanan ditetapkan.</div></details>
          </div>
        </div>
      </div>
    </div>
  </div></section>`;
}

/* ===================== DEMO FORM ===================== */
function pageDemo(preselect){
  const prodChoices = PRODUCTS.map(p=>`<label class="choice"><input type="checkbox" name="produk" value="${p.slug}" ${preselect===p.slug?'checked':''}> ${esc(p.name)}</label>`).join('') + `<label class="choice"><input type="checkbox" name="produk" value="belum-yakin"> Belum yakin</label>`;
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container demo-grid">
    <div>
      <p class="eyebrow">Permintaan demo / konsultasi</p>
      <h1 style="font-size:clamp(30px,4vw,44px);margin-top:10px">Diskusikan kebutuhan Anda</h1>
      <p class="lead" style="margin-top:12px">Pilih aplikasi dan ceritakan pekerjaan yang ingin Anda kelola.</p>
      ${preselect&&BY[preselect]?`<p class="small" style="margin-top:10px"><span class="badge" style="background:var(--tan-soft);border-color:transparent;color:var(--fg)">Dari halaman: SmartOps ${esc(BY[preselect].name)} — pilihan dapat diubah</span></p>`:''}
      <form id="demoForm" class="form-wrap" style="margin-top:28px" novalidate>
        <div id="errSummary" class="err-summary" hidden tabindex="-1" role="alert"><b>Periksa kembali isian berikut:</b><ul id="errList"></ul></div>
        <div class="two">
          <div class="field" data-name="nama"><label for="f-nama">Nama</label><input type="text" id="f-nama" name="nama" autocomplete="name"><span class="err-msg">${I.warn} Isi nama Anda.</span></div>
          <div class="field" data-name="org"><label for="f-org">Perusahaan/organisasi</label><input type="text" id="f-org" name="org" autocomplete="organization"><span class="hint">Usaha perseorangan boleh ditulis apa adanya.</span><span class="err-msg">${I.warn} Isi nama perusahaan atau organisasi.</span></div>
        </div>
        <div class="field"><label for="f-peran">Peran <small>(opsional)</small></label><select id="f-peran" name="peran"><option value="">Pilih peran</option><option>Pemilik</option><option>Operasional</option><option>Supervisor</option><option>Pelanggan/PIC</option><option>Lainnya</option></select></div>
        <fieldset class="field" data-name="produk" style="border:0;padding:0;margin:0 0 18px"><legend style="font-weight:600;font-size:15px;padding:0;margin-bottom:6px">Produk diminati</legend><div class="choices">${prodChoices}</div><span class="err-msg">${I.warn} Pilih minimal satu produk atau "Belum yakin".</span></fieldset>
        <fieldset class="field" style="border:0;padding:0;margin:0 0 18px"><legend style="font-weight:600;font-size:15px;padding:0;margin-bottom:6px">Metode kontak</legend>
          <div class="radios"><label><input type="radio" name="metode" value="email" checked> Email</label><label><input type="radio" name="metode" value="wa"> WhatsApp/telepon</label></div>
        </fieldset>
        <div class="field" data-name="kontak" id="kontakField"><label for="f-kontak" id="kontakLabel">Alamat email</label><input type="email" id="f-kontak" name="kontak" autocomplete="email" placeholder=""><span class="err-msg" id="kontakErr">${I.warn} Isi kontak yang dapat dihubungi.</span></div>
        <div class="two">
          <div class="field"><label for="f-lokasi">Jumlah lokasi <small>(opsional)</small></label><select id="f-lokasi" name="lokasi"><option value="">Belum ditentukan</option><option>1 lokasi</option><option>2–5 lokasi</option><option>6–20 lokasi</option><option>Lebih dari 20 lokasi</option></select></div>
          <div class="field"><label for="f-personel">Jumlah personel <small>(opsional)</small></label><select id="f-personel" name="personel"><option value="">Belum ditentukan</option><option>1–10 personel</option><option>11–50 personel</option><option>51–200 personel</option><option>Lebih dari 200 personel</option></select></div>
        </div>
        <div class="field" data-name="kebutuhan"><label for="f-kebutuhan">Kebutuhan utama</label><textarea id="f-kebutuhan" name="kebutuhan" maxlength="500" placeholder="Ceritakan pekerjaan yang ingin Anda kelola dengan lebih detail…"></textarea><div class="counter"><span id="charCount">0</span>/500 karakter</div><span class="err-msg">${I.warn} Ceritakan kebutuhan Anda secara singkat.</span></div>
        <div class="field" data-name="consent"><label class="consent"><input type="checkbox" id="f-consent" name="consent"> <span>Saya setuju dihubungi untuk permintaan ini. Baca <a href="#privasi">Privasi</a> kami.</span></label><span class="err-msg">${I.warn} Centang persetujuan untuk dihubungi.</span></div>
        <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:8px">
          <button type="submit" class="btn btn-primary btn-lg" id="submitBtn">Kirim Permintaan ${I.arrow}</button>
          <span class="small muted">Mengirim form membuat prospek, bukan akun aplikasi atau langganan.</span>
        </div>
        <div id="formStatus" style="margin-top:18px" aria-live="polite"></div>
      </form>
      <div id="successView" hidden>
        <div class="success-card">
          <div class="ok-ic"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
          <h2 style="font-size:24px">Permintaan Anda sudah diterima.</h2>
          <p class="muted" style="margin-top:8px;max-width:48ch;margin-inline:auto">Tim SmartOps akan menghubungi Anda melalui kontak yang diberikan.</p>
          <p class="small muted" style="margin-top:14px">ID permintaan: <span id="successKey"></span>. Konfirmasi ini tampil setelah data tersimpan di penyimpanan.</p>
          <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn btn-secondary" href="#beranda">Kembali ke beranda</a><a class="btn btn-text" href="#aplikasi">Lihat katalog aplikasi</a></div>
        </div>
      </div>
    </div>
    <aside class="aside-box" aria-label="Informasi permintaan">
      <b>Apa yang terjadi setelah ini?</b>
      <ul><li>Tim membaca kebutuhan Anda</li><li>Kami menghubungi lewat kanal pilihan Anda</li><li>Diskusi lingkup dan status kesiapan produk</li></ul>
      <b>Yang tidak kami minta</b>
      <ul><li>KTP atau data identitas pribadi</li><li>Data karyawan atau dokumen operasional</li><li>Unggahan file apa pun</li></ul>
      <p class="small muted">Sumber halaman dan produk pilihan dicatat untuk konteks tindak lanjut, tanpa memasukkan data pribadi ke URL.</p>
    </aside>
  </div></section>`;
}

/* ===================== MASUK ===================== */
const loginUrl = p => ((window.SMARTOPS_CONFIG||{}).loginUrls||{})[p.slug] || '';
const demoUrl = p => ((window.SMARTOPS_CONFIG||{}).demoUrls||{})[p.slug] || '';
function pageMasuk(){
  const cards = PRODUCTS.map(p=>`
    <div class="login-card" style="grid-template-columns:1fr">
      <div style="min-width:0">
        <div style="display:flex;gap:10px;align-items:center">${ic(p.icon,p.accent)}<b>${esc(p.name)}</b></div>
        <p class="muted small" style="margin-top:6px">${esc(p.card)}</p>
        <div class="acts"><a class="btn btn-secondary btn-sm" href="#aplikasi/${p.slug}">Lihat informasi</a>${demoUrl(p)?`<a class="btn btn-secondary btn-sm" href="${esc(demoUrl(p))}" target="_blank" rel="noopener">Coba demo</a>`:''}${loginUrl(p)?`<a class="btn btn-primary btn-sm" href="${esc(loginUrl(p))}" target="_blank" rel="noopener">Masuk</a></div>`:`<button class="btn btn-primary btn-sm" disabled title="Tujuan akses belum dikonfirmasi">Masuk</button></div>
        <p class="st">Tombol Masuk aktif setelah tujuan akses diverifikasi.</p>`}
      </div>
    </div>`).join('');
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container">
    <div style="max-width:720px"><p class="eyebrow">Masuk</p><h1 style="font-size:clamp(30px,4vw,44px);margin-top:10px">Pilih aplikasi Anda</h1><p class="lead" style="margin-top:12px">Pilih aplikasi untuk masuk dan kelola pekerjaan Anda.</p></div>
    <div class="grid cols-2" style="margin-top:32px">${cards}</div>
    <div class="notice info" style="margin-top:28px">${I.info}<div><b>Sudah menggunakan salah satu aplikasi?</b><p>Jika Anda memiliki akses, pilih aplikasi di atas. Untuk kebutuhan akses baru, silakan <a href="#demo">diskusikan kebutuhan Anda</a>.</p></div></div>
  </div></section>`;
}

/* ===================== PRIVASI & KETENTUAN ===================== */
function pagePrivasi(){
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container">
    <p class="eyebrow">Privasi</p>
    <h1 style="font-size:clamp(30px,4vw,44px);margin-top:10px;margin-bottom:8px">Privasi</h1>
    <div class="notice warn" style="margin-block:16px 28px;max-width:860px">${I.warn}<div><b>Draft · Menunggu review penanggung jawab</b><p>Konten ini merupakan draf dan dapat disesuaikan dengan praktik nyata sebelum dipublikasikan.</p></div></div>
    <div class="doc">
      <nav aria-label="Daftar isi privasi"><a href="#pv-data">Data permintaan</a><a href="#pv-tujuan">Tujuan penggunaan</a><a href="#pv-akses">Akses</a><a href="#pv-simpan">Penyimpanan</a><a href="#pv-hak">Hak dan kontak</a></nav>
      <article>
        <section id="pv-data" class="anchor"><h3>Data permintaan</h3><p>Saat Anda mengisi formulir pada website ini, kami menerima data yang Anda berikan, seperti nama, nama perusahaan, kontak sesuai pilihan, dan informasi lain yang disampaikan dalam pesan Anda.</p><p style="margin-top:8px">Kami tidak meminta KTP, rekening, data karyawan, dokumen operasional, atau unggahan file untuk permintaan awal.</p></section>
        <section id="pv-tujuan" class="anchor"><h3>Tujuan penggunaan</h3><p>Data digunakan hanya untuk merespon permintaan Anda dan menyiapkan informasi yang relevan. Kami tidak menggunakan data ini untuk tujuan lain tanpa persetujuan terpisah.</p></section>
        <section id="pv-akses" class="anchor"><h3>Akses</h3><p>Data permintaan hanya dapat diakses oleh tim SmartOps yang ditugaskan menindaklanjuti permintaan. Data permintaan bukan milik vendor atau tenant mana pun.</p></section>
        <section id="pv-simpan" class="anchor"><h3>Penyimpanan</h3><p>Data disimpan selama diperlukan untuk tindak lanjut permintaan dan ditinjau secara berkala. Rincian retensi akan ditetapkan dalam versi yang disahkan.</p></section>
        <section id="pv-hak" class="anchor"><h3>Hak dan kontak</h3><p>Anda dapat meminta perbaikan atau penghapusan data permintaan Anda melalui kanal kontak resmi yang tercantum pada halaman Kontak setelah kanal tersebut ditetapkan.</p><p style="margin-top:8px"><b>Versi dan tanggal:</b> akan diisi saat disahkan.</p></section>
      </article>
    </div>
  </div></section>`;
}
function pageKetentuan(){
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container">
    <p class="eyebrow">Ketentuan</p>
    <h1 style="font-size:clamp(30px,4vw,44px);margin-top:10px;margin-bottom:8px">Ketentuan Penggunaan Website</h1>
    <div class="notice warn" style="margin-block:16px 28px;max-width:860px">${I.warn}<div><b>Draft · Menunggu review penanggung jawab</b><p>Konten ini merupakan draf dan dapat disesuaikan sebelum dipublikasikan.</p></div></div>
    <div class="doc">
      <nav aria-label="Daftar isi ketentuan"><a href="#kt-web">Penggunaan website</a><a href="#kt-info">Informasi produk</a><a href="#kt-demo">Permintaan demo</a><a href="#kt-hak">Hak penggunaan</a><a href="#kt-kontak">Kontak</a></nav>
      <article>
        <section id="kt-web" class="anchor"><h3>Penggunaan website</h3><p>Website ini disediakan untuk memberikan informasi mengenai keluarga aplikasi SmartOps. Anda dapat menggunakan informasi yang tersedia untuk memahami fitur, manfaat, dan kesesuaian dengan kebutuhan usaha Anda.</p><p style="margin-top:8px">Seluruh konten bersifat umum dan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.</p></section>
        <section id="kt-info" class="anchor"><h3>Informasi produk</h3><p>Contoh antarmuka pada website memakai data fiktif dan berlabel "Ilustrasi antarmuka • Data contoh". Gambar konsep tidak menyatakan status ketersediaan produk; status kesiapan fitur dikonfirmasi pada saat diskusi kebutuhan.</p></section>
        <section id="kt-demo" class="anchor"><h3>Permintaan demo</h3><p>Permintaan demo bukan pembuatan akun atau pembelian langganan. Permintaan demo dilakukan untuk mendapatkan informasi dan penjelasan produk yang sesuai dengan kebutuhan usaha Anda.</p></section>
        <section id="kt-hak" class="anchor"><h3>Hak penggunaan</h3><p>Merek, logo, dan materi pada website ini adalah milik pengelola SmartOps. Penggunaan ulang materi memerlukan izin tertulis.</p></section>
        <section id="kt-kontak" class="anchor"><h3>Kontak</h3><p>Pertanyaan mengenai ketentuan ini dapat disampaikan melalui kanal resmi pada halaman Kontak setelah kanal tersebut ditetapkan.</p><p style="margin-top:8px"><b>Versi dan tanggal:</b> akan diisi saat disahkan.</p></section>
      </article>
    </div>
  </div></section>`;
}

/* ===================== PROSPEK (INTERNAL) ===================== */
function pageProspek(){
  return `
  <section class="section" style="padding-top:clamp(32px,5vw,56px)"><div class="container">
    <p class="eyebrow">Internal</p>
    <h1 style="font-size:clamp(28px,3.6vw,40px);margin-top:10px">Permintaan konsultasi</h1>
    <p class="lead" style="margin-top:10px">Prospek yang masuk dari form permintaan demo. Hanya terbaca oleh pengguna dengan akses tulis pada artifact ini.</p>
    <div id="prospekStatus" style="margin-top:24px"><div class="notice info">${I.info}<div><b>Memuat daftar prospek…</b></div></div></div>
    <div class="table-wrap" id="prospekTable" style="margin-top:16px" hidden>
      <table class="rtable"><thead><tr><th>ID</th><th>Diterima</th><th>Nama</th><th>Organisasi</th><th>Produk diminati</th><th>Kontak</th><th>Kebutuhan</th></tr></thead><tbody id="prospekRows"></tbody></table>
    </div>
  </div></section>`;
}
function wireProspek(){
  const statusEl=document.getElementById('prospekStatus');
  statusEl.innerHTML='<div class="notice info">'+I.info+'<div><b>Daftar prospek tidak tersedia dari halaman publik.</b><p>Sesuai kebijakan akses (RLS), prospek hanya dapat dibaca oleh tim berizin melalui CMS/dasbor Supabase — bukan melalui website publik.</p></div></div>';
}

/* ===================== UTILITY PAGES ===================== */
function page404(){
  return `<section class="container"><div class="util">
    <div class="art"><span style="font-size:36px;font-weight:700">404</span></div>
    <div><h1 style="font-size:clamp(26px,3.6vw,36px)">Halaman tidak ditemukan</h1><p class="muted" style="margin-top:8px">Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
    <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap"><a class="btn btn-primary" href="#beranda">Kembali ke beranda</a><a class="btn btn-secondary" href="#aplikasi">Lihat katalog aplikasi</a></div></div>
  </div></section>`;
}
