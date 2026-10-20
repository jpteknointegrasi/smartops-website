// Konfigurasi SmartOps website.
// simulate: true  -> form tidak mengirim ke backend (uji tampilan lokal)
// simulate: false -> form insert ke Supabase (tabel website_demo_requests, RLS insert-only)
window.SMARTOPS_CONFIG = {
  simulate: false,
  supabaseUrl: "https://wqvgxuirdtctvndfwgrb.supabase.co",
  supabaseAnonKey: "sb_publishable_yBvv93gouLcyL74vhG5MZQ_bmPwhcRY", // publishable key (aman untuk frontend)
  // URL login per aplikasi (slug -> URL). Aplikasi tanpa entri: tombol Masuk nonaktif.
  loginUrls: {
    security: "https://app.smart-ops.biz.id"
  }
};
