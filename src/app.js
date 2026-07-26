import { Router } from './router.js';
import { i18n } from './utils/i18n.js';
import { Storage } from './utils/storage.js';
import { TawafPage } from './pages/tawaf.js';
import { SaiPage } from './pages/sai.js';
import { PracticalPage } from './pages/practical.js';

const HomePage = {
  render: () => `
    <div class="page-container">
      <header class="app-header">
        <div class="header-title" data-i18n="nav.guide"></div>
        <select id="lang-switch" class="btn btn-gold" style="padding: 4px 8px; font-size: 14px; width: auto;">
          <option value="tr" ${i18n.currentLang === 'tr' ? 'selected' : ''}>TR</option>
          <option value="en" ${i18n.currentLang === 'en' ? 'selected' : ''}>EN</option>
        </select>
      </header>
      
      <main style="padding-top: var(--spacing-4);">
        <div class="card">
          <h1 class="text-gold" style="font-size: var(--text-2xl); margin-bottom: var(--spacing-2);" data-i18n="home.welcome_title"></h1>
          <p class="text-muted" data-i18n="home.welcome_subtitle"></p>
        </div>
        
        <div class="card tefekkur-card">
          <div class="tefekkur-title">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            <span data-i18n="home.tefekkur_title"></span>
          </div>
          <p class="text-sm" data-i18n="home.tefekkur_text"></p>
        </div>
        
        <button class="btn btn-primary" style="margin-top: var(--spacing-4);" data-link="/umrah/preparation">
          <span data-i18n="home.start_button"></span>
        </button>
      </main>
      
      <nav class="bottom-nav">
        <a href="/" class="nav-item active" data-link="/">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <span data-i18n="nav.home"></span>
        </a>
        <a href="/umrah/preparation" class="nav-item" data-link="/umrah/preparation">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          <span data-i18n="nav.guide"></span>
        </a>
        <a href="/umrah/tawaf" class="nav-item" data-link="/umrah/tawaf">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          <span data-i18n="tawaf.title"></span>
        </a>
        <a href="/umrah/sai" class="nav-item" data-link="/umrah/sai">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
          <span data-i18n="sai.title"></span>
        </a>
        <a href="/umrah/practical" class="nav-item" data-link="/umrah/practical">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span data-i18n="nav.practical"></span>
        </a>
      </nav>
    </div>
  `
};

const PreparationPage = {
  render: () => {
    const isCompleted = Storage.getProgress('step_prep_1');
    return `
    <div class="page-container">
      <header class="app-header">
        <a href="/" class="text-muted" data-link="/" style="display: flex; align-items: center;">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
        </a>
        <div class="header-title" data-i18n="preparation.title"></div>
        <div style="width:24px;"></div>
      </header>
      
      <main style="padding-top: var(--spacing-4);">
        <div class="card ${isCompleted ? 'completed-card' : ''}" id="card_step_prep_1">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <div class="badge badge-step">1</div>
              <h2 class="font-semibold text-xl" style="margin-bottom: var(--spacing-2);" data-i18n="preparation.step1_title"></h2>
            </div>
            <label class="custom-checkbox">
              <input type="checkbox" id="check_step_prep_1" ${isCompleted ? 'checked' : ''}>
              <span class="checkmark"></span>
            </label>
          </div>
          
          <p class="text-sm text-muted" style="margin-bottom: var(--spacing-3);" data-i18n="preparation.step1_desc"></p>
          
          <ul style="list-style: disc; padding-left: 20px; color: var(--color-text-main); margin-bottom: var(--spacing-4);" class="text-sm">
            <li data-i18n="preparation.step1_bullets.0"></li>
            <li data-i18n="preparation.step1_bullets.1"></li>
            <li data-i18n="preparation.step1_bullets.2"></li>
          </ul>

          <div class="dua-card">
            <div class="arabic" data-i18n="duas.ihram_niyyah.arabic"></div>
            <div class="transliteration" data-i18n="duas.ihram_niyyah.transliteration"></div>
            <div class="meaning" data-i18n="duas.ihram_niyyah.translation"></div>
          </div>
        </div>
      </main>
    </div>
  `;
  }
};

const routes = {
  '/': HomePage,
  '/umrah/preparation': PreparationPage,
  '/umrah/tawaf': TawafPage,
  '/umrah/sai': SaiPage,
  '/umrah/practical': PracticalPage,
};

const router = new Router(routes);

async function bootstrap() {
  await i18n.init();
  
  // Global Event Delegation for memory efficiency
  document.getElementById('app').addEventListener('change', (e) => {
    // Handle Language Switcher
    if (e.target.id === 'lang-switch') {
      i18n.setLanguage(e.target.value);
    }
    
    // Handle Checklists
    if (e.target.type === 'checkbox' && e.target.id.startsWith('check_')) {
      const stepId = e.target.id.replace('check_', '');
      Storage.toggleProgress(stepId, e.target.checked);
      
      const card = document.getElementById('card_' + stepId);
      if (card) {
        if (e.target.checked) card.classList.add('completed-card');
        else card.classList.remove('completed-card');
      }
    }
  });

  router.handleRoute(location.pathname);
  
  // Re-translate when route changes
  document.addEventListener('route-changed', () => {
    i18n.translateDOM();
  });
  
  window.addEventListener('languageChanged', () => {
    router.handleRoute(location.pathname); // Re-render whole page to inject correct translation bindings
  });
}

// Register PWA SW
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Vite PWA handles auto-registration if configured
  });
}

bootstrap();
