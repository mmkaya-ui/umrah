import { Storage } from '../utils/storage.js';
import { i18n } from '../utils/i18n.js';

export const SaiPage = {
  render: () => {
    return `
    <div class="page-container">
      <header class="app-header" role="banner">
        <a href="/" class="text-muted" data-link="/" style="display: flex; align-items: center;" data-i18n-attr="aria-label:aria.go_back">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 19l-7-7 7-7"></path></svg>
        </a>
        <div class="header-title" data-i18n="sai.title"></div>
        <div style="width:24px;"></div>
      </header>
      
      <main style="padding-top: var(--spacing-4);" role="main">
        <div class="card" style="text-align: center;">
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
          
          <div id="sai-complete-msg" class="text-green font-semibold" style="display: none; margin-top: var(--spacing-4);" data-i18n="sai.complete"></div>
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
