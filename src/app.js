import { Router } from './router.js';

// Basic skeleton for pages
const HomePage = {
  render: () => `
    <div class="page-container">
      <header class="app-header">
        <div class="header-title">🕋 Umre Rehberi</div>
      </header>
      
      <main style="padding-top: var(--spacing-4);">
        <div class="card">
          <h1 class="text-gold" style="font-size: var(--text-2xl); margin-bottom: var(--spacing-2);">Hoş Geldiniz</h1>
          <p class="text-muted">Allah yolculuğunuzu mübarek, niyetinizi halis kılsın.</p>
        </div>
        
        <div class="card tefekkur-card">
          <div class="tefekkur-title">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            Niyet ve İhlas
          </div>
          <p class="text-sm">Yola çıkmadan önce niyetimizi tazeleyelim. Yalnızca Allah'ın rızasını umarak yola çıkan, O'nun misafiri olur.</p>
        </div>
        
        <button class="btn btn-primary" style="margin-top: var(--spacing-4);" data-link="/umrah/preparation">
          Umreye Hazırlık Başla
        </button>
      </main>
      
      <!-- Bottom Nav Component (Placeholder) -->
      <nav class="bottom-nav">
        <a href="/" class="nav-item active" data-link="/">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <span>Ana Sayfa</span>
        </a>
        <a href="/umrah" class="nav-item" data-link="/umrah">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          <span>Rehber</span>
        </a>
      </nav>
    </div>
  `
};

const PreparationPage = {
  render: () => `
    <div class="page-container">
      <header class="app-header">
        <a href="/" class="text-muted" data-link="/" style="display: flex; align-items: center;">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
        </a>
        <div class="header-title">İhram Hazırlığı</div>
        <div style="width:24px;"></div> <!-- balancer -->
      </header>
      
      <main style="padding-top: var(--spacing-4);">
        <div class="card">
          <div class="badge badge-step">1. Adım</div>
          <h2 class="font-semibold text-xl" style="margin-bottom: var(--spacing-2);">Maddi ve Manevi Temizlik</h2>
          <p class="text-sm text-muted" style="margin-bottom: var(--spacing-3);">
            İhrama girmeden önce, tıpkı namaza durur gibi maddi ve manevi kirlerden arınmak gerekir.
          </p>
          <ul style="list-style: disc; padding-left: 20px; color: var(--color-text-main);" class="text-sm">
            <li>Gusül abdesti almak sünnettir.</li>
            <li>Tırnakları kesmek, vücut temizliğini yapmak.</li>
            <li>Güzel koku sürmek (Erkekler için - ihrama girmeden hemen önce vücuda sürülebilir, elbiseye sürülmez).</li>
          </ul>
        </div>
      </main>
    </div>
  `
};

const routes = {
  '/': HomePage,
  '/umrah/preparation': PreparationPage,
};

const router = new Router(routes);

// Register PWA SW
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // vite-plugin-pwa handles the registration via virtual module usually,
    // but for simple manual usage we can let it auto-register or use virtual:pwa-register
  });
}

// Initial route
router.handleRoute(location.pathname);
