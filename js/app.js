/* ===================== ROUTER ===================== */
const main = document.getElementById('main');
const stickyCta = document.getElementById('stickyCta');
let currentGallery = [];

function setActiveNav(route){
  document.querySelectorAll('#desktopNav > a').forEach(a=>{
    if(a.dataset.route===route) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
  });
  const btn=document.getElementById('appsBtn');
  if(btn) btn.dataset.active = (route==='aplikasi'||route==='produk') ? 'true':'false';
}
function setTitle(t){ document.title = t ? t+' · SmartOps' : 'SmartOps'; }

function render(){
  const raw = (location.hash||'#beranda').slice(1);
  const parts = raw.split('/').filter(Boolean);
  const r = parts[0]||'beranda';
  document.body.dataset.page='';
  stickyCta.hidden = true; stickyCta.dataset.show='false'; stickyCta.innerHTML='';
  let html='', title='';

  if(r===''||r==='beranda'){ html=pageHome(); setActiveNav(''); }
  else if(r==='aplikasi' && parts[1] && BY[parts[1]] && !parts[2]){
    const p=BY[parts[1]]; html=pageProduct(p); title=p.seo.split('|')[0].trim(); setActiveNav('produk');
    document.body.dataset.page='product';
    stickyCta.hidden=false; stickyCta.dataset.show='true';
    stickyCta.innerHTML=`<a class="btn btn-primary" href="#demo/${p.slug}">Diskusikan Kebutuhan ${esc(p.name)}</a>`;
  }
  else if(r==='aplikasi' && parts[1] && BY[parts[1]] && parts[2]){ // anchor deep-link: render product then scroll
    const p=BY[parts[1]]; html=pageProduct(p); title=p.seo.split('|')[0].trim(); setActiveNav('produk'); document.body.dataset.page='product';
  }
  else if(r==='aplikasi'){ html=pageCatalog('semua'); title='Katalog Aplikasi'; setActiveNav('aplikasi'); }
  else if(r==='integrasi'){ html=pageIntegrasi(); title='Integrasi Antarproduk'; setActiveNav('integrasi'); }
  else if(r==='cara-kerja'){ html=pageCaraKerja(); title='Cara Kerja dan Penerapan'; setActiveNav('cara-kerja'); }
  else if(r==='tentang'){ html=pageTentang(); title='Tentang SmartOps'; setActiveNav('tentang'); }
  else if(r==='kontak'){ html=pageKontak(); title='Kontak'; setActiveNav('kontak'); }
  else if(r==='demo'){ html=pageDemo(parts[1]&&BY[parts[1]]?parts[1]:null); title='Permintaan Demo'; setActiveNav(''); }
  else if(r==='masuk'){ html=pageMasuk(); title='Pilih Aplikasi — Masuk'; setActiveNav(''); }
  else if(r==='prospek'){ html=pageProspek(); title='Prospek (internal)'; setActiveNav(''); }
  else if(r==='privasi'){ html=pagePrivasi(); title='Privasi'; setActiveNav(''); }
  else if(r==='ketentuan'){ html=pageKetentuan(); title='Ketentuan'; setActiveNav(''); }
  else { html=page404(); title='Halaman tidak ditemukan'; setActiveNav(''); }

  main.innerHTML = html;
  setTitle(title);
  wirePage(r, parts);
  const anchor = (r==='aplikasi'&&parts[2]) ? document.getElementById('sec-'+parts[2]) : null;
  if(anchor){ anchor.scrollIntoView(); }
  else window.scrollTo(0,0);
  main.focus({preventScroll:true});
}

/* ===================== PAGE WIRING ===================== */
function wirePage(route, parts){
  // Catalog filter
  main.querySelectorAll('.chip-filter button').forEach(b=>{
    b.addEventListener('click',()=>{
      main.querySelectorAll('.chip-filter button').forEach(x=>x.setAttribute('aria-pressed','false'));
      b.setAttribute('aria-pressed','true');
      const f=b.dataset.filter;
      const list = PRODUCTS.filter(p=>f==='semua'||p.group===f||(f==='personel'&&p.slug==='workforce'));
      document.getElementById('catalogGrid').innerHTML = list.map(productCard).join('');
    });
  });

  // Role tabs
  const tablist = main.querySelector('[role="tablist"]');
  if(tablist){
    const tabs=[...tablist.querySelectorAll('[role="tab"]')];
    function select(i, focus){
      tabs.forEach((t,j)=>{ t.setAttribute('aria-selected',String(i===j)); t.tabIndex=i===j?0:-1;
        document.getElementById('panel-'+j).hidden = i!==j; });
      if(focus) tabs[i].focus();
    }
    tabs.forEach((t,i)=>{
      t.addEventListener('click',()=>select(i,false));
      t.addEventListener('keydown',e=>{
        let n=null;
        if(e.key==='ArrowRight') n=(i+1)%tabs.length;
        if(e.key==='ArrowLeft') n=(i-1+tabs.length)%tabs.length;
        if(e.key==='Home') n=0; if(e.key==='End') n=tabs.length-1;
        if(n!==null){ e.preventDefault(); select(n,true); }
      });
    });
  }

  // Gallery lightbox
  if(route==='aplikasi'&&parts[1]&&BY[parts[1]]){
    const p=BY[parts[1]];
    currentGallery=[
      ['Dashboard utama · '+p.full, mockHTML(p,p.mock,false)],
      ['Tampilan HP petugas · '+p.full, `<div style="display:grid;place-items:center;padding:12px">${phoneHTML(p,p.phone)}</div>`],
      ['Contoh data & laporan · '+p.full, mockHTML(p,p.mock2,false)]
    ];
    main.querySelectorAll('[data-gal]').forEach(b=>b.addEventListener('click',()=>openLightbox(+b.dataset.gal)));
    // subnav active highlight on scroll
    const links=[...main.querySelectorAll('.subnav a[data-anchor]')];
    const secs=links.map(a=>document.getElementById('sec-'+a.dataset.anchor)).filter(Boolean);
    if('IntersectionObserver' in window && secs.length){
      const io=new IntersectionObserver(es=>{
        es.forEach(en=>{ if(en.isIntersecting){ links.forEach(l=>l.classList.toggle('on', 'sec-'+l.dataset.anchor===en.target.id)); } });
      },{rootMargin:'-30% 0px -60% 0px'});
      secs.forEach(s=>io.observe(s));
    }
  }

  // Demo form
  const form=document.getElementById('demoForm');
  if(form) wireDemoForm(form);

  if(route==='prospek') wireProspek();
}

/* ===================== LIGHTBOX ===================== */
const lb=document.getElementById('lightbox');
let lbIndex=0;
function openLightbox(i){
  lbIndex=i;
  document.getElementById('lbTitle').textContent=currentGallery[i][0];
  document.getElementById('lbBody').innerHTML=currentGallery[i][1];
  lb.showModal();
}
function lbStep(d){ lbIndex=(lbIndex+d+currentGallery.length)%currentGallery.length; document.getElementById('lbTitle').textContent=currentGallery[lbIndex][0]; document.getElementById('lbBody').innerHTML=currentGallery[lbIndex][1]; }
document.getElementById('lbClose').addEventListener('click',()=>lb.close());
document.getElementById('lbPrev').addEventListener('click',()=>lbStep(-1));
document.getElementById('lbNext').addEventListener('click',()=>lbStep(1));
lb.addEventListener('click',e=>{ if(e.target===lb) lb.close(); });
lb.addEventListener('keydown',e=>{ if(e.key==='ArrowLeft'){e.preventDefault();lbStep(-1);} if(e.key==='ArrowRight'){e.preventDefault();lbStep(1);} });

/* ===================== DEMO FORM LOGIC ===================== */
function wireDemoForm(form){
  const metodeRadios=form.querySelectorAll('input[name="metode"]');
  const kontakInput=document.getElementById('f-kontak');
  const kontakLabel=document.getElementById('kontakLabel');
  const counter=document.getElementById('charCount');
  const kebutuhan=document.getElementById('f-kebutuhan');
  const statusEl=document.getElementById('formStatus');
  const submitBtn=document.getElementById('submitBtn');
  let submitting=false;
  const submissionKey='REQ-'+Math.random().toString(36).slice(2,8).toUpperCase();

  metodeRadios.forEach(r=>r.addEventListener('change',()=>{
    const email=form.metode.value==='email';
    kontakLabel.textContent=email?'Alamat email':'Nomor WhatsApp/telepon';
    kontakInput.type=email?'email':'tel';
    kontakInput.autocomplete=email?'email':'tel';
  }));
  kebutuhan.addEventListener('input',()=>{ counter.textContent=String(kebutuhan.value.length); });

  function setErr(name, on){
    const f=form.querySelector(`[data-name="${name}"]`);
    if(f) f.classList.toggle('invalid', on);
    return on;
  }
  function validate(){
    const errs=[];
    if(!form.nama.value.trim()){ setErr('nama',true); errs.push(['f-nama','Nama belum diisi']); } else setErr('nama',false);
    if(!form.org.value.trim()){ setErr('org',true); errs.push(['f-org','Perusahaan/organisasi belum diisi']); } else setErr('org',false);
    const prods=[...form.querySelectorAll('input[name="produk"]:checked')];
    if(!prods.length){ setErr('produk',true); errs.push(['f-kontak','Produk diminati belum dipilih']); } else setErr('produk',false);
    const kv=kontakInput.value.trim();
    const email=form.metode.value==='email';
    const okKontak = email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(kv) : /^[0-9+\-\s()]{8,}$/.test(kv);
    if(!okKontak){ setErr('kontak',true); errs.push(['f-kontak','Isi kontak yang dapat dihubungi']); } else setErr('kontak',false);
    if(!kebutuhan.value.trim()){ setErr('kebutuhan',true); errs.push(['f-kebutuhan','Kebutuhan utama belum diisi']); } else setErr('kebutuhan',false);
    if(!form.consent.checked){ setErr('consent',true); errs.push(['f-consent','Persetujuan dihubungi belum dicentang']); } else setErr('consent',false);
    return errs;
  }

  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(submitting) return;
    const errs=validate();
    const summary=document.getElementById('errSummary');
    const list=document.getElementById('errList');
    if(errs.length){
      list.innerHTML=errs.map(x=>`<li><a href="javascript:void(0)" data-focus="${x[0]}">${esc(x[1])}</a></li>`).join('');
      summary.hidden=false; summary.focus();
      list.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ const el=document.getElementById(a.dataset.focus); el&&el.focus(); }));
      statusEl.innerHTML='';
      return;
    }
    summary.hidden=true;
    submitting=true;
    submitBtn.disabled=true;
    submitBtn.innerHTML='<span class="spinner" aria-hidden="true"></span> Mengirim permintaan…';
    statusEl.innerHTML=`<div class="notice info">${I.info}<div><b>Permintaan sedang dikirim.</b><p>Mohon tunggu, jangan menutup halaman ini. ID permintaan: ${submissionKey}.</p></div></div>`;
    (async()=>{
      let ok=false, reason='';
      try{
        const cfg=window.SMARTOPS_CONFIG||{};
        if(cfg.simulate){ /* mode simulasi tanpa backend */ }
        else if(!cfg.supabaseUrl||!cfg.supabaseAnonKey||!window.supabase){ reason='storage'; }
        {
          const payload={
            id:submissionKey,
            dibuat:new Date().toISOString().slice(0,16).replace('T',' '),
            nama:form.nama.value.trim(),
            org:form.org.value.trim(),
            peran:form.peran.value||'',
            produk:[...form.querySelectorAll('input[name="produk"]:checked')].map(x=>x.value),
            metode:form.metode.value,
            kontak:kontakInput.value.trim(),
            lokasi:form.lokasi.value||'Belum ditentukan',
            personel:form.personel.value||'Belum ditentukan',
            kebutuhan:kebutuhan.value.trim(),
            consent:true,
            sumber:location.hash||'#demo',
            status:'Baru'
          };
          // submission_key yang sama dipakai untuk retry, sehingga tidak tercipta prospek ganda (unique constraint).
          if(cfg.simulate){ await new Promise(r=>setTimeout(r,600)); ok=true; }
          else if(!reason){
            const client=window.__sb||(window.__sb=window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey));
            const {error}=await client.from('website_demo_requests').insert({
              submission_key:payload.id, nama:payload.nama, organisasi:payload.org, peran:payload.peran,
              produk:payload.produk, metode_kontak:payload.metode, kontak:payload.kontak,
              jumlah_lokasi:payload.lokasi, jumlah_personel:payload.personel, kebutuhan:payload.kebutuhan,
              consent:true, consent_version:'v1-draft', sumber_halaman:payload.sumber
            });
            if(error){ if(error.code==='23505'){ ok=true; /* retry: sudah tercatat */ } else reason=error.code||'unknown'; }
            else ok=true;
          }
        }
      }catch(err){ reason=err&&err.code?err.code:'unknown'; }
      submitting=false;
      submitBtn.disabled=false;
      submitBtn.innerHTML='Kirim Permintaan '+I.arrow;
      if(ok){
        const sk=document.getElementById('successKey'); if(sk) sk.textContent=submissionKey;
        form.hidden=true;
        document.getElementById('successView').hidden=false;
        document.getElementById('successView').scrollIntoView({block:'center'});
      } else {
        const extra = reason==='storage'
          ? 'Backend belum dikonfigurasi: isi js/config.js (supabaseUrl, supabaseAnonKey) atau aktifkan simulate untuk uji tampilan.'
          : 'Terjadi gangguan sementara pada penyimpanan. ('+reason+')';
        statusEl.innerHTML=`<div class="notice err" role="alert">${I.x}<div><b>Permintaan belum terkirim.</b><p>Coba lagi; isian Anda tetap tersedia. Pengiriman ulang memakai ID permintaan yang sama (${submissionKey}) sehingga tidak tercipta data ganda. ${extra}</p></div></div>`;
        submitBtn.textContent='Coba lagi';
      }
    })();
  });
}

/* ===================== BOOT ===================== */
navHTML();
footerHTML();
window.addEventListener('hashchange',render);
render();
