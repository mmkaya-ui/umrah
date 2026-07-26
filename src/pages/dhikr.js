import { i18n } from '../utils/i18n.js';

export const DhikrPage = {
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

      <main style="padding-top: var(--spacing-4); padding-bottom: 80px;" role="main">
        <!-- Selector for Dhikr Preset -->
        <div class="card" style="margin-bottom: var(--spacing-4);">
          <label style="display: block; font-size: 0.85rem; color: var(--color-gold); font-weight: 600; margin-bottom: 6px;" data-i18n="dhikr.select_label"></label>
          <select id="dhikr-preset-select" class="btn btn-outline" style="width: 100%; text-align: left; padding: 10px; font-size: 0.95rem;">
            <option value="subhanallah">سُبْحَانَ اللَّهِ - Subhanallah</option>
            <option value="alhamdulillah">الْحَمْدُ لِلَّهِ - Alhamdulillah</option>
            <option value="allahuakbar">اللَّهُ أَكْبَرُ - Allahu Akbar</option>
            <option value="lailahaillallah">لاَ إِلَهَ إِلاَّ اللَّهُ - La ilaha illallah</option>
            <option value="salavat">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ - Salawat</option>
            <option value="custom">Dhikr</option>
          </select>
        </div>

        <!-- Main Interactive Dhikr Counter Card -->
        <div class="card" style="text-align: center; padding: 30px 20px; margin-bottom: var(--spacing-4);">
          <div id="dhikr-arabic-text" class="arabic" style="font-family: var(--font-arabic); font-size: 2.2rem; color: var(--color-text-arabic); margin-bottom: 8px;">سُبْحَانَ اللَّهِ</div>
          <div id="dhikr-meaning-text" class="text-sm text-muted" style="margin-bottom: var(--spacing-4);"></div>

          <!-- Counter Display -->
          <div style="position: relative; width: 180px; height: 180px; margin: 0 auto var(--spacing-6); border-radius: 50%; background: radial-gradient(circle at center, rgba(13, 75, 60, 0.3) 0%, rgba(6, 10, 18, 0.9) 100%); border: 3px solid var(--color-gold); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(212, 175, 55, 0.25);">
            <span id="dhikr-counter-value" style="font-size: 3.5rem; font-weight: 800; color: var(--color-gold); line-height: 1;">0</span>
            <span id="dhikr-target-label" style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 4px;"></span>
          </div>

          <!-- Big Tap Button -->
          <button id="btn-dhikr-tap" class="btn btn-gold" style="width: 100%; height: 60px; font-size: 1.1rem; border-radius: var(--radius-2xl); box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
            <span data-i18n="dhikr.tap_button"></span>
          </button>

          <!-- Reset Button -->
          <button id="btn-dhikr-reset" class="btn btn-outline" style="width: 100%; margin-top: 12px;">
            <span data-i18n="dhikr.reset_button"></span>
          </button>

          <!-- Completion Alert -->
          <div id="dhikr-complete-banner" style="display: none; margin-top: 16px; background: rgba(45, 212, 191, 0.15); border: 1px solid var(--color-success); padding: 12px; border-radius: var(--radius-lg); color: var(--color-success); font-weight: 600;" data-i18n="dhikr.complete_msg">
          </div>
        </div>
        <div class="card footer-wish-card" style="margin-top: var(--spacing-6); margin-bottom: 20px; background: linear-gradient(135deg, rgba(13, 75, 60, 0.3) 0%, rgba(201, 168, 76, 0.12) 100%); border: 1px solid var(--color-gold); text-align: center; padding: 20px; border-radius: var(--radius-xl); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
          <p style="font-size: 0.9rem; line-height: 1.6; color: var(--color-text-arabic); font-style: italic; font-weight: 500;" data-i18n="wishes.dhikr"></p>
        </div>
      </main>
    </div>
    `;
  },

  afterRender: () => {
    const select = document.getElementById('dhikr-preset-select');
    const arabicEl = document.getElementById('dhikr-arabic-text');
    const meaningEl = document.getElementById('dhikr-meaning-text');
    const counterEl = document.getElementById('dhikr-counter-value');
    const targetEl = document.getElementById('dhikr-target-label');
    const btnTap = document.getElementById('btn-dhikr-tap');
    const btnReset = document.getElementById('btn-dhikr-reset');
    const banner = document.getElementById('dhikr-complete-banner');

    const presets = {
      subhanallah: { arabic: 'سُبْحَانَ اللَّهِ', meaningKey: 'dhikr.subhanallah_meaning', target: 33 },
      alhamdulillah: { arabic: 'الْحَمْدُ لِلَّهِ', meaningKey: 'dhikr.alhamdulillah_name', target: 33 },
      allahuakbar: { arabic: 'اللَّهُ أَكْبَرُ', meaningKey: 'dhikr.allahuakbar_name', target: 33 },
      lailahaillallah: { arabic: 'لاَ إِلَهَ إِلاَّ اللَّهُ', meaningKey: 'dhikr.lailahaillallah_name', target: 100 },
      salavat: { arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ', meaningKey: 'dhikr.salavat_name', target: 100 },
      custom: { arabic: 'ذِكْرٌ', meaningKey: 'dhikr.custom_name', target: 999 }
    };

    let count = parseInt(localStorage.getItem('dhikr_count') || '0', 10);
    let currentPreset = localStorage.getItem('dhikr_preset') || 'subhanallah';

    select.value = currentPreset;

    const updatePreset = (presetKey) => {
      const p = presets[presetKey] || presets.subhanallah;
      arabicEl.textContent = p.arabic;
      meaningEl.textContent = i18n.t(p.meaningKey);
      targetEl.textContent = i18n.t('dhikr.target_prefix') + p.target;
      counterEl.textContent = count;

      if (count >= p.target && p.target < 999) {
        banner.style.display = 'block';
      } else {
        banner.style.display = 'none';
      }
    };

    updatePreset(currentPreset);

    select.addEventListener('change', (e) => {
      currentPreset = e.target.value;
      localStorage.setItem('dhikr_preset', currentPreset);
      updatePreset(currentPreset);
    });

    btnTap.addEventListener('click', () => {
      count++;
      localStorage.setItem('dhikr_count', count.toString());
      const p = presets[currentPreset] || presets.subhanallah;
      updatePreset(currentPreset);

      // Haptic Feedback
      if (navigator.vibrate) {
        if (count % p.target === 0) {
          navigator.vibrate([100, 50, 100]);
        } else {
          navigator.vibrate(35);
        }
      }
    });

    btnReset.addEventListener('click', () => {
      if (confirm(i18n.t('dhikr.reset_button') + '?')) {
        count = 0;
        localStorage.setItem('dhikr_count', '0');
        updatePreset(currentPreset);
      }
    });
  }
};
