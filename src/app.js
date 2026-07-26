import { Router } from './router.js';
import { i18n } from './utils/i18n.js';
import { Storage } from './utils/storage.js';
import { TawafPage } from './pages/tawaf.js';
import { SaiPage } from './pages/sai.js';
import { PracticalPage } from './pages/practical.js';
import { ZiyaratPage } from './pages/ziyarat.js';
import { DhikrPage } from './pages/dhikr.js';
import { registerSW } from 'virtual:pwa-register';

/* ──────────────────────────── Font Scaling ──────────────────────────── */
const FONT_SCALES = ['normal', 'large', 'largest'];
const FONT_LABELS = { normal: 'A', large: 'A+', largest: 'A++' };

function getFontScale() {
  return localStorage.getItem('font_scale') || 'normal';
}

function applyFontScale(scale) {
  if (scale === 'normal') {
    document.documentElement.removeAttribute('data-font-scale');
  } else {
    document.documentElement.setAttribute('data-font-scale', scale);
  }
  localStorage.setItem('font_scale', scale);
  const btn = document.getElementById('font-scale-btn');
  if (btn) btn.textContent = FONT_LABELS[scale];
}

function cycleFontScale() {
  const current = getFontScale();
  const idx = FONT_SCALES.indexOf(current);
  const next = FONT_SCALES[(idx + 1) % FONT_SCALES.length];
  applyFontScale(next);
}

/* ──────────────────────────── Bottom Nav (Global) ──────────────────────────── */
function getBottomNav(currentPath) {
  const items = [
    { href: '/',                icon: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',                   i18nKey: 'nav.home',      ariaKey: 'aria.nav_home' },
    { href: '/umrah/preparation', icon: '<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>', i18nKey: 'preparation.title', ariaKey: 'aria.nav_guide' },
    { href: '/umrah/tawaf',       icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>',         i18nKey: 'tawaf.title',   ariaKey: 'aria.nav_tawaf' },
    { href: '/umrah/sai',         icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>',                                                                                            i18nKey: 'sai.title',     ariaKey: 'aria.nav_sai' },
    { href: '/umrah/dhikr',       icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>',                                                            i18nKey: 'dhikr.short_title', ariaKey: 'aria.nav_dhikr' },
    { href: '/umrah/practical',   icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',                                                            i18nKey: 'nav.practical', ariaKey: 'aria.nav_practical' },
  ];

  return `
    <nav class="bottom-nav" role="navigation" aria-label="${i18n.t('aria.main_nav')}">
      ${items.map(item => `
        <a href="${item.href}" class="nav-item ${currentPath === item.href ? 'active' : ''}" data-link="${item.href}" aria-label="${i18n.t(item.ariaKey)}" ${currentPath === item.href ? 'aria-current="page"' : ''}>
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">${item.icon}</svg>
          <span data-i18n="${item.i18nKey}"></span>
        </a>
      `).join('')}
    </nav>
  `;
}

function updateBottomNav(path) {
  const navContainer = document.getElementById('bottom-nav-container');
  if (navContainer) navContainer.innerHTML = getBottomNav(path);
}

/* ──────────────────────────── Pages ──────────────────────────── */

const HomePage = {
  render: () => `
    <div class="page-container">
      <header class="app-header" role="banner">
        <a href="/" data-link="/" style="display: flex; align-items: center; gap: 8px; text-decoration: none; cursor: pointer;" aria-label="Ana Sayfa">
          <img src="/logo.png" alt="Umrah Companion Logo" style="height: 38px; max-width: 180px; object-fit: contain;" />
        </a>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button id="font-scale-btn" class="btn btn-outline" style="width: auto; padding: 4px 10px; font-size: 14px; font-weight: 700; min-width: 36px;" aria-label="${i18n.t('aria.font_scale')}" title="${i18n.t('aria.font_scale')}">
            ${FONT_LABELS[getFontScale()]}
          </button>
          <select id="lang-switch" class="btn btn-gold" style="padding: 4px 8px; font-size: 14px; width: auto;" aria-label="${i18n.t('aria.lang_switch')}">
            <option value="tr" ${i18n.currentLang === 'tr' ? 'selected' : ''}>TR</option>
            <option value="en" ${i18n.currentLang === 'en' ? 'selected' : ''}>EN</option>
            <option value="ar" ${i18n.currentLang === 'ar' ? 'selected' : ''}>AR</option>
            <option value="de" ${i18n.currentLang === 'de' ? 'selected' : ''}>DE</option>
            <option value="es" ${i18n.currentLang === 'es' ? 'selected' : ''}>ES</option>
            <option value="ru" ${i18n.currentLang === 'ru' ? 'selected' : ''}>RU</option>
            <option value="ko" ${i18n.currentLang === 'ko' ? 'selected' : ''}>KO</option>
          </select>
        </div>
      </header>
      
      <main style="padding-top: var(--spacing-4);" role="main">
        <div class="card">
          <h1 class="text-gold" style="font-size: var(--text-2xl); margin-bottom: var(--spacing-2);" data-i18n="home.welcome_title"></h1>
          <p class="text-muted" data-i18n="home.welcome_subtitle"></p>
        </div>
        
        <div class="card tefekkur-card">
          <div class="tefekkur-title">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            <span data-i18n="home.tefekkur_title"></span>
          </div>
          <p class="text-sm" data-i18n="home.tefekkur_text"></p>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: var(--spacing-4);">
          <button class="btn btn-primary" style="padding: 14px;" data-link="/umrah/preparation" aria-label="${i18n.t('aria.start_umrah')}">
            <span data-i18n="home.start_button"></span>
          </button>
          
          <button class="btn btn-outline" style="padding: 12px;" data-link="/umrah/ziyarat" aria-label="${i18n.t('ziyarat.title')}">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span data-i18n="ziyarat.title"></span>
          </button>
        <div class="card footer-wish-card" style="margin-top: var(--spacing-6); margin-bottom: 20px; background: linear-gradient(135deg, rgba(13, 75, 60, 0.3) 0%, rgba(201, 168, 76, 0.12) 100%); border: 1px solid var(--color-gold); text-align: center; padding: 20px; border-radius: var(--radius-xl); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
          <p style="font-size: 0.9rem; line-height: 1.6; color: var(--color-text-arabic); font-style: italic; font-weight: 500;" data-i18n="wishes.home"></p>
        </div>
      </main>
    </div>
  `
};

const PreparationPage = {
  render: () => {
    let stepsHTML = '';
    for (let i = 1; i <= 5; i++) {
      const isCompleted = Storage.getProgress(`step_prep_${i}`);
      stepsHTML += `
        <div class="card ${isCompleted ? 'completed-card' : ''}" id="card_step_prep_${i}" style="cursor: pointer;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <div class="badge badge-step">${i}</div>
              <h2 class="font-semibold text-xl" style="margin-bottom: var(--spacing-2);" data-i18n="preparation.step${i}_title"></h2>
            </div>
            <label class="custom-checkbox" aria-label="${i18n.t('preparation.mark_complete')}">
              <input type="checkbox" id="check_step_prep_${i}" ${isCompleted ? 'checked' : ''}>
              <span class="checkmark"></span>
            </label>
          </div>
          
          <p class="text-sm text-muted" style="margin-bottom: var(--spacing-3);" data-i18n="preparation.step${i}_desc"></p>
          
          <ul style="list-style: disc; padding-left: 20px; color: var(--color-text-main); margin-bottom: var(--spacing-4);" class="text-sm">
            ${[0,1,2,3,4].map(idx => {
              const key = `preparation.step${i}_bullets.${idx}`;
              const text = i18n.t(key);
              return text !== key ? `<li data-i18n="${key}"></li>` : '';
            }).join('')}
          </ul>
      `;

      if (i === 2) {
        stepsHTML += `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: var(--spacing-4); margin-bottom: var(--spacing-4);">
            <div class="ihram-guide-card" data-zoom-img="/images/ihram_izar.png">
              <img src="/images/ihram_izar.png" alt="İzar Bağlama Rehberi" class="ihram-guide-img" loading="lazy">
              <div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                <svg width="14" height="14" fill="none" stroke="#C9A84C" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                <span class="font-semibold text-xs text-gold" data-i18n="preparation.izar_caption"></span>
              </div>
            </div>
            <div class="ihram-guide-card" data-zoom-img="/images/ihram_rida.png">
              <img src="/images/ihram_rida.png" alt="Rida Giyme Rehberi" class="ihram-guide-img" loading="lazy">
              <div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                <svg width="14" height="14" fill="none" stroke="#C9A84C" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                <span class="font-semibold text-xs text-gold" data-i18n="preparation.rida_caption"></span>
              </div>
            </div>
          </div>

          <!-- Püf Noktaları ve Taktikler Kutusu -->
          <div style="background: rgba(201, 168, 76, 0.08); border: 1px dashed var(--color-gold); border-radius: var(--radius-lg); padding: var(--spacing-4); margin-bottom: var(--spacing-4);">
            <div style="color: var(--color-gold); font-weight: 700; display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-size: 0.95rem;">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span data-i18n="preparation.tips_title"></span>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: var(--color-text-main); display: flex; flex-direction: column; gap: 8px;">
              <li data-i18n="preparation.tip_1"></li>
              <li data-i18n="preparation.tip_2"></li>
              <li data-i18n="preparation.tip_3"></li>
            </ul>
          </div>
        `;
      }

      if (i === 4) {
        stepsHTML += `
          <div class="dua-card" role="region" aria-label="${i18n.t('duas.ihram_niyyah.title')}">
            <h4 class="font-semibold text-gold" style="margin-bottom: 8px;" data-i18n="duas.ihram_niyyah.title"></h4>
            <div class="arabic" data-i18n="duas.ihram_niyyah.arabic"></div>
            <div class="transliteration" data-i18n="duas.ihram_niyyah.transliteration"></div>
            <div class="meaning" data-i18n="duas.ihram_niyyah.translation"></div>
          </div>

          <div class="dua-card" role="region" aria-label="${i18n.t('duas.talbiyah.title')}">
            <h4 class="font-semibold text-gold" style="margin-bottom: 8px;" data-i18n="duas.talbiyah.title"></h4>
            <div class="arabic" data-i18n="duas.talbiyah.arabic"></div>
            <div class="transliteration" data-i18n="duas.talbiyah.transliteration"></div>
            <div class="meaning" data-i18n="duas.talbiyah.translation"></div>
            <button class="btn btn-outline btn-listen-dua" data-speech="Lebbeyk Allâhümme lebbeyk, lebbeyke lâ şerîke leke lebbeyk, innel-hamde ven-ni'mete leke vel-mülk, lâ şerîke lek" style="width: 100%; margin-top: 10px; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.707 12 4.155 12 5.05v13.9c0 .895-1.077 1.343-1.707.707L5.586 15z"></path></svg>
              <span data-i18n="preparation.listen_talbiyah"></span>
            </button>
          </div>
        `;
      }
      
      stepsHTML += `</div>`;
    }

    return `
    <div class="page-container">
      <header class="app-header" role="banner">
        <a href="/" data-link="/" style="display: flex; align-items: center; gap: 8px; text-decoration: none; cursor: pointer;">
          <img src="/logo.png" alt="Umrah Companion Logo" style="height: 38px; max-width: 180px; object-fit: contain;" />
        </a>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button id="font-scale-btn" class="btn btn-outline" style="width: auto; padding: 4px 10px; font-size: 14px; font-weight: 700; min-width: 36px;" aria-label="${i18n.t('aria.font_scale')}" title="${i18n.t('aria.font_scale')}">
            ${FONT_LABELS[getFontScale()]}
          </button>
          <select id="lang-switch" class="btn btn-gold" style="padding: 4px 8px; font-size: 14px; width: auto;" aria-label="${i18n.t('aria.lang_switch')}">
            <option value="tr" ${i18n.currentLang === 'tr' ? 'selected' : ''}>TR</option>
            <option value="en" ${i18n.currentLang === 'en' ? 'selected' : ''}>EN</option>
            <option value="ar" ${i18n.currentLang === 'ar' ? 'selected' : ''}>AR</option>
            <option value="de" ${i18n.currentLang === 'de' ? 'selected' : ''}>DE</option>
            <option value="es" ${i18n.currentLang === 'es' ? 'selected' : ''}>ES</option>
            <option value="ru" ${i18n.currentLang === 'ru' ? 'selected' : ''}>RU</option>
            <option value="ko" ${i18n.currentLang === 'ko' ? 'selected' : ''}>KO</option>
          </select>
        </div>
      </header>
      
      <main style="padding-top: var(--spacing-4); padding-bottom: 80px;" role="main">
        <!-- Packing Checklist Card -->
        <div class="card" style="margin-bottom: var(--spacing-4); background: rgba(201, 168, 76, 0.06); border: 1px solid var(--color-gold);">
          <h3 class="text-gold font-semibold text-lg" style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            <span data-i18n="packing.title">Umre Valiz Kontrol Listesi</span>
          </h3>
          <p class="text-xs text-muted" style="margin-bottom: 12px;" data-i18n="preparation.packing_subtitle"></p>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox" id="check_pack_1"> <span data-i18n="preparation.pack_item_1"></span></label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox" id="check_pack_2"> <span data-i18n="preparation.pack_item_2"></span></label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox" id="check_pack_3"> <span data-i18n="preparation.pack_item_3"></span></label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox" id="check_pack_4"> <span data-i18n="preparation.pack_item_4"></span></label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox" id="check_pack_5"> <span data-i18n="preparation.pack_item_5"></span></label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox" id="check_pack_6"> <span data-i18n="preparation.pack_item_6"></span></label>
          </div>
        </div>
        <div class="card tefekkur-card">
          <div class="tefekkur-title">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            <span data-i18n="preparation.tefekkur_title"></span>
          </div>
          <p class="text-sm" data-i18n="preparation.tefekkur_text"></p>
        </div>

        ${stepsHTML}

        <div class="card footer-wish-card" style="margin-top: var(--spacing-6); margin-bottom: 20px; background: linear-gradient(135deg, rgba(13, 75, 60, 0.3) 0%, rgba(201, 168, 76, 0.12) 100%); border: 1px solid var(--color-gold); text-align: center; padding: 20px; border-radius: var(--radius-xl); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
          <p style="font-size: 0.9rem; line-height: 1.6; color: var(--color-text-arabic); font-style: italic; font-weight: 500;" data-i18n="wishes.preparation"></p>
        </div>
      </main>
    </div>
  `;
  }
};

/* ──────────────────────────── Routing ──────────────────────────── */

const routes = {
  '/': HomePage,
  '/umrah/preparation': PreparationPage,
  '/umrah/tawaf': TawafPage,
  '/umrah/sai': SaiPage,
  '/umrah/practical': PracticalPage,
  '/umrah/ziyarat': ZiyaratPage,
  '/umrah/dhikr': DhikrPage,
};

const router = new Router(routes);

/* ──────────────────────────── Bootstrap ──────────────────────────── */

async function bootstrap() {
  await i18n.init();

  // Apply saved font scale on load
  applyFontScale(getFontScale());

  // Build persistent app shell
  const appEl = document.getElementById('app');
  appEl.innerHTML = `
    <div id="page-content"></div>
    <div id="bottom-nav-container"></div>
  `;
  
  // Global Event Delegation (memory-efficient — single listener on #app)
  appEl.addEventListener('change', (e) => {
    // Language Switcher
    if (e.target.id === 'lang-switch') {
      i18n.setLanguage(e.target.value);
    }
    
    // Checklists
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

  appEl.addEventListener('click', (e) => {
    // Font Scale button
    if (e.target.id === 'font-scale-btn' || e.target.closest('#font-scale-btn')) {
      cycleFontScale();
    }

    // Step Card Click Toggle (Clicking anywhere on the card toggles completion)
    const stepCard = e.target.closest('[id^="card_step_prep_"]');
    if (stepCard && !e.target.closest('[data-zoom-img]') && !e.target.closest('.custom-checkbox') && !e.target.closest('button') && !e.target.closest('a')) {
      const stepId = stepCard.id.replace('card_', '');
      const checkbox = document.getElementById('check_' + stepId);
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    // Speech Audio Listener
    const speechBtn = e.target.closest('.btn-listen-dua');
    if (speechBtn) {
      const textToSpeak = speechBtn.getAttribute('data-speech');
      if (textToSpeak && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
      }
    }

    // Image Zoom Modal Trigger
    const zoomTarget = e.target.closest('[data-zoom-img]') || (e.target.classList.contains('info-image') ? e.target : null);
    if (zoomTarget) {
      const imgSrc = zoomTarget.getAttribute('data-zoom-img') || zoomTarget.getAttribute('src');
      if (imgSrc) {
        openImageModal(imgSrc);
      }
    }
  });

  function openImageModal(src) {
    let overlay = document.getElementById('global-img-modal');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'global-img-modal';
      overlay.className = 'img-modal-overlay';
      overlay.onclick = () => overlay.remove();
      document.body.appendChild(overlay);
    }
    overlay.innerHTML = `<img src="${src}" class="img-modal-content" alt="Büyütülmüş Görsel" /><span style="color: white; margin-top: 14px; font-size: 14px; font-weight: 500;">Kapatmak için ekrana dokunun</span>`;
  }

  router.handleRoute(location.pathname);
  
  // Re-translate and update nav on route changes
  document.addEventListener('route-changed', (e) => {
    i18n.translateDOM();
    updateBottomNav(e.detail.path);
  });
  
  // On language change, re-render whole page
  window.addEventListener('languageChanged', () => {
    router.handleRoute(location.pathname);
  });
  
  // Register Service Worker for Offline PWA
  const updateSW = registerSW({
    onNeedRefresh() {
      // Could show a toast here in the future
      console.log('App update available');
    },
    onOfflineReady() {
      console.log('App is ready to work offline');
    },
  });
}

bootstrap();
