import { Storage } from '../utils/storage.js';
import { i18n } from '../utils/i18n.js';

export const TawafPage = {
  render: () => {
    // We will initialize the counter state in a route-changed listener, but for now we render the skeleton
    return `
    <div class="page-container">
      <header class="app-header" role="banner">
        <a href="/" class="text-muted" data-link="/" style="display: flex; align-items: center;" data-i18n-attr="aria-label:aria.go_back">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 19l-7-7 7-7"></path></svg>
        </a>
        <div class="header-title" data-i18n="tawaf.title"></div>
        <div style="width:24px;"></div>
      </header>
      
      <main style="padding-top: var(--spacing-4);" role="main">
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
          
          <div id="tawaf-complete-msg" class="text-green font-semibold" style="display: none; margin-top: var(--spacing-4);" data-i18n="tawaf.complete"></div>
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
