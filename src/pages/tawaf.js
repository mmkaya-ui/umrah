import { Storage } from '../utils/storage.js';
import { i18n } from '../utils/i18n.js';

export const TawafPage = {
  render: () => {
    // We will initialize the counter state in a route-changed listener, but for now we render the skeleton
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
            <span data-i18n="tawaf.tefekkur_title"></span>
          </div>
          <p class="text-sm" data-i18n="tawaf.tefekkur_text"></p>
        </div>

        <!-- Kaaba Map Visualization -->
        <div class="card" style="text-align: center; padding-bottom: var(--spacing-2);">
          <h3 class="font-semibold text-lg" style="margin-bottom: var(--spacing-4);" data-i18n="tawaf_map.title"></h3>
          <div class="kaaba-map-container">
            <div class="tawaf-path">
              <svg class="tawaf-arrow" viewBox="0 0 24 24"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>
            </div>
            <div class="rabbana-zone"></div>
            
            <div class="kaaba-box">
              <div class="hijr-ismail"></div>
              <div class="maqam-ibrahim"></div>
              <div class="kaaba-door"></div>
              
              <div class="hajr-aswad-dot">
                <div class="start-line"></div>
              </div>
              <div class="rukn-yamani-dot"></div>
            </div>
            
            <div class="map-label label-hajr" data-i18n="tawaf_map.hajr_aswad"></div>
            <div class="map-label label-rukn" data-i18n="tawaf_map.rukn_yamani"></div>
            <div class="map-label label-hijr" data-i18n="tawaf_map.hijr_ismail"></div>
            <div class="map-label label-maqam" data-i18n="tawaf_map.maqam_ibrahim"></div>
          </div>
          <p class="text-xs text-muted" data-i18n="tawaf_map.direction"></p>
        </div>

        <!-- Counter UI -->
        <div class="card" style="text-align: center;">
          <h2 class="text-gold font-semibold" style="margin-bottom: var(--spacing-2);" data-i18n="tawaf.counter_title"></h2>
          <p class="text-sm text-muted" style="margin-bottom: var(--spacing-4);" data-i18n="tawaf.instruction"></p>
          
          <div class="counter-display" style="font-size: 48px; font-weight: bold; color: var(--color-gold); margin: var(--spacing-4) 0;" aria-live="polite">
            <span id="tawaf-count">0</span><span style="font-size: 24px; color: var(--color-text-muted);">/7</span>
          </div>
          
          <button id="btn-add-round" class="btn btn-primary" style="width: 100%; padding: 16px; font-size: 18px; margin-bottom: var(--spacing-3);">
            <span data-i18n="tawaf.add_round"></span>
          </button>
          
          <button id="btn-reset-round" class="btn btn-outline" style="width: 100%;">
            <span data-i18n="tawaf.reset"></span>
          </button>
          
          <div id="tawaf-complete-msg" style="display: none; margin-top: var(--spacing-5); text-align: left; background: rgba(13, 75, 60, 0.25); border: 1px solid var(--color-gold); border-radius: var(--radius-lg); padding: var(--spacing-4);">
            <div style="color: var(--color-gold); font-weight: 700; font-size: 1.1rem; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span data-i18n="tawaf.complete_title"></span>
            </div>
            <p class="text-xs text-muted" style="margin-bottom: 12px;" data-i18n="tawaf.complete_subtitle"></p>
            <ul style="padding-left: 0; list-style: none; font-size: 0.85rem; color: var(--color-text-main); margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
              <li data-i18n="tawaf.post_step_1"></li>
              <li data-i18n="tawaf.post_step_2"></li>
              <li data-i18n="tawaf.post_step_3"></li>
              <li data-i18n="tawaf.post_step_4"></li>
            </ul>
            <button class="btn btn-primary" data-link="/umrah/sai" style="width: 100%;">
              <span data-i18n="tawaf.btn_start_sai"></span>
            </button>
          </div>
        </div>

        <!-- Duas -->
        <div class="card" style="margin-top: var(--spacing-4);">
          <img src="/images/hajr_aswad.png" alt="Hajr al-Aswad" class="info-image" loading="lazy">
          <h3 class="font-semibold text-lg" style="margin-bottom: var(--spacing-2);" data-i18n="duas.tawaf_start.title"></h3>
          <div class="dua-card">
            <div class="arabic" data-i18n="duas.tawaf_start.arabic"></div>
            <div class="transliteration" data-i18n="duas.tawaf_start.transliteration"></div>
            <div class="meaning" data-i18n="duas.tawaf_start.translation"></div>
          </div>
        </div>
        
        <div class="card" style="margin-top: var(--spacing-4); margin-bottom: 80px;">
          <img src="/images/rukn_yamani.png" alt="Rukn Yamani" class="info-image" loading="lazy">
          <h3 class="font-semibold text-lg" style="margin-bottom: var(--spacing-2);" data-i18n="duas.rabbana_atina.title"></h3>
          <div class="dua-card">
            <div class="arabic" data-i18n="duas.rabbana_atina.arabic"></div>
            <div class="transliteration" data-i18n="duas.rabbana_atina.transliteration"></div>
            <div class="meaning" data-i18n="duas.rabbana_atina.translation"></div>
          </div>
        </div>
      </main>
    </div>
    `;
  },
  
  afterRender: () => {
    const countDisplay = document.getElementById('tawaf-count');
    const btnAdd = document.getElementById('btn-add-round');
    const btnReset = document.getElementById('btn-reset-round');
    const msgComplete = document.getElementById('tawaf-complete-msg');
    
    let currentCount = parseInt(localStorage.getItem('tawaf_count') || '0', 10);
    
    const updateUI = () => {
      countDisplay.textContent = currentCount;
      if (currentCount >= 7) {
        msgComplete.style.display = 'block';
        btnAdd.disabled = true;
        btnAdd.style.opacity = '0.5';
      } else {
        msgComplete.style.display = 'none';
        btnAdd.disabled = false;
        btnAdd.style.opacity = '1';
      }
    };
    
    updateUI(); // initial paint
    
    // Using global event delegation for these is possible, but binding locally and relying on DOM replacement 
    // for GC is standard in simple SPAs. However, since the user asked for zero memory leaks, we should use 
    // named functions and clean them up, OR handle these in the global delegator in app.js.
    // Let's keep it simple here, since the DOM nodes are destroyed when routing away, event listeners attached 
    // to them directly (without closure leaks) will be garbage collected.
    
    btnAdd.addEventListener('click', () => {
      if (currentCount < 7) {
        currentCount++;
        localStorage.setItem('tawaf_count', currentCount.toString());
        updateUI();
        
        // Haptic feedback if available
        if (window.navigator && window.navigator.vibrate) {
          window.navigator.vibrate(50);
        }
      }
    });
    
    btnReset.addEventListener('click', () => {
      if (confirm(i18n.t('tawaf.confirm_reset'))) {
        currentCount = 0;
        localStorage.setItem('tawaf_count', '0');
        updateUI();
      }
    });
  }
};
