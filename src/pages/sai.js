import { Storage } from '../utils/storage.js';
import { i18n } from '../utils/i18n.js';

export const SaiPage = {
  render: () => {
    return `
    <div class="page-container">
      <header class="app-header" role="banner">
        <a href="/" data-link="/" style="display: flex; align-items: center; gap: 8px; text-decoration: none; cursor: pointer;">
          <img src="/logo.png" alt="Umrah Companion Logo" style="height: 38px; max-width: 180px; object-fit: contain;" />
        </a>
        <div style="display: flex; align-items: center; gap: 8px;">
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
        <div class="card tefekkur-card" style="margin-bottom: var(--spacing-4);">
          <div class="tefekkur-title">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            <span data-i18n="sai.tefekkur_title"></span>
          </div>
          <p class="text-sm" data-i18n="sai.tefekkur_text"></p>
        </div>

        <div class="card" style="text-align: center; margin-bottom: 80px;">
          <img src="/images/safa_marwa.png" alt="Safa and Marwa" class="info-image" loading="lazy">
          <h2 class="text-gold font-semibold" style="margin-bottom: var(--spacing-2);" data-i18n="sai.counter_title"></h2>
          <p class="text-sm text-muted" style="margin-bottom: var(--spacing-4);" data-i18n="sai.instruction"></p>
          
          <div class="counter-display" style="font-size: 48px; font-weight: bold; color: var(--color-gold); margin: var(--spacing-4) 0;" aria-live="polite">
            <span id="sai-count">0</span><span style="font-size: 24px; color: var(--color-text-muted);">/7</span>
          </div>
          
          <div id="sai-direction" class="badge" style="margin-bottom: var(--spacing-3); display: inline-block;" data-i18n="sai.dir_safa_marwa">
          </div>
          
          <button id="btn-add-sai-round" class="btn btn-primary" style="width: 100%; padding: 16px; font-size: 18px; margin-bottom: var(--spacing-3);">
            <span data-i18n="sai.add_round"></span>
          </button>
          
          <button id="btn-reset-sai-round" class="btn btn-outline" style="width: 100%;">
            <span data-i18n="sai.reset"></span>
          </button>
          
          <div id="sai-complete-msg" style="display: none; margin-top: var(--spacing-5); text-align: left; background: rgba(13, 75, 60, 0.25); border: 1px solid var(--color-gold); border-radius: var(--radius-lg); padding: var(--spacing-4);">
            <div style="color: var(--color-gold); font-weight: 700; font-size: 1.1rem; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span data-i18n="sai.complete_title"></span>
            </div>
            <p class="text-xs text-muted" style="margin-bottom: 12px;" data-i18n="sai.complete_subtitle"></p>
            <ul style="padding-left: 0; list-style: none; font-size: 0.85rem; color: var(--color-text-main); margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
              <li data-i18n="sai.post_step_1"></li>
              <li data-i18n="sai.post_step_2"></li>
              <li data-i18n="sai.post_step_3"></li>
            </ul>
            <button class="btn btn-primary" data-link="/umrah/ziyarat" style="width: 100%;">
              <span data-i18n="sai.btn_explore_ziyarat"></span>
            </button>
          </div>
        </div>
      </main>
    </div>
    `;
  },
  
  afterRender: () => {
    const countDisplay = document.getElementById('sai-count');
    const directionDisplay = document.getElementById('sai-direction');
    const btnAdd = document.getElementById('btn-add-sai-round');
    const btnReset = document.getElementById('btn-reset-sai-round');
    const msgComplete = document.getElementById('sai-complete-msg');
    
    let currentCount = parseInt(localStorage.getItem('sai_count') || '0', 10);
    
    const updateUI = () => {
      countDisplay.textContent = currentCount;
      
      // Even rounds (0, 2, 4, 6) are Safa -> Marwa. Odd rounds (1, 3, 5) are Marwa -> Safa.
      // Wait, 1st round (index 1) is Safa to Marwa. 2nd round is Marwa to Safa.
      // If currentCount is 0, we are starting Safa -> Marwa.
      if (currentCount % 2 === 0) {
        directionDisplay.textContent = i18n.t('sai.dir_safa_marwa');
        directionDisplay.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
      } else {
        directionDisplay.textContent = i18n.t('sai.dir_marwa_safa');
        directionDisplay.style.backgroundColor = 'rgba(13, 75, 60, 0.1)';
      }

      if (currentCount >= 7) {
        msgComplete.style.display = 'block';
        btnAdd.disabled = true;
        btnAdd.style.opacity = '0.5';
        directionDisplay.textContent = i18n.t('sai.dir_completed');
      } else {
        msgComplete.style.display = 'none';
        btnAdd.disabled = false;
        btnAdd.style.opacity = '1';
      }
    };
    
    updateUI();
    
    btnAdd.addEventListener('click', () => {
      if (currentCount < 7) {
        currentCount++;
        localStorage.setItem('sai_count', currentCount.toString());
        updateUI();
        if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
      }
    });
    
    btnReset.addEventListener('click', () => {
      if (confirm(i18n.t('sai.confirm_reset'))) {
        currentCount = 0;
        localStorage.setItem('sai_count', '0');
        updateUI();
      }
    });
  }
};
