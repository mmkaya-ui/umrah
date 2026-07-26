import { i18n } from '../utils/i18n.js';

export const ZiyaratPage = {
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
        
        <!-- Tabs -->
        <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: var(--spacing-4);">
          <button id="tab-mecca" class="ziyarat-tab active" style="flex: 1; padding: var(--spacing-3); background: none; border: none; color: var(--color-gold); font-weight: 600; border-bottom: 2px solid var(--color-gold);" data-i18n="ziyarat.mecca_tab"></button>
          <button id="tab-medina" class="ziyarat-tab" style="flex: 1; padding: var(--spacing-3); background: none; border: none; color: var(--color-text-muted); font-weight: 600; border-bottom: 2px solid transparent;" data-i18n="ziyarat.medina_tab"></button>
        </div>

        <!-- Mecca Content -->
        <div id="content-mecca">
          <!-- Hira -->
          <div class="card">
            <h2 class="text-gold font-semibold text-lg" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span data-i18n="ziyarat.hira_title"></span>
            </h2>
            <p class="text-sm text-muted" data-i18n="ziyarat.hira_desc" style="line-height: 1.6;"></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Cave+of+Hira+Makkah" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top: var(--spacing-4);">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span data-i18n="ziyarat.map_button"></span>
            </a>
          </div>
          
          <!-- Thawr -->
          <div class="card">
            <h2 class="text-gold font-semibold text-lg" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <span data-i18n="ziyarat.thawr_title"></span>
            </h2>
            <p class="text-sm text-muted" data-i18n="ziyarat.thawr_desc" style="line-height: 1.6;"></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Cave+of+Thawr+Makkah" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top: var(--spacing-4);">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span data-i18n="ziyarat.map_button"></span>
            </a>
          </div>
          
          <!-- Mualla -->
          <div class="card">
            <h2 class="text-gold font-semibold text-lg" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <span data-i18n="ziyarat.mualla_title"></span>
            </h2>
            <p class="text-sm text-muted" data-i18n="ziyarat.mualla_desc" style="line-height: 1.6;"></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Jannat+al-Mu%27alla+Makkah" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top: var(--spacing-4);">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span data-i18n="ziyarat.map_button"></span>
            </a>
          </div>
        </div>

        <!-- Medina Content -->
        <div id="content-medina" style="display: none;">
          <!-- Nabawi -->
          <div class="card">
            <h2 class="text-gold font-semibold text-lg" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              <span data-i18n="ziyarat.nabawi_title"></span>
            </h2>
            <p class="text-sm text-muted" data-i18n="ziyarat.nabawi_desc" style="line-height: 1.6;"></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Al-Masjid+an-Nabawi+Madinah" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top: var(--spacing-4);">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span data-i18n="ziyarat.map_button"></span>
            </a>
          </div>

          <!-- Quba -->
          <div class="card">
            <h2 class="text-gold font-semibold text-lg" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
              <span data-i18n="ziyarat.quba_title"></span>
            </h2>
            <p class="text-sm text-muted" data-i18n="ziyarat.quba_desc" style="line-height: 1.6;"></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Quba+Mosque+Madinah" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top: var(--spacing-4);">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span data-i18n="ziyarat.map_button"></span>
            </a>
          </div>

          <!-- Uhud -->
          <div class="card">
            <h2 class="text-gold font-semibold text-lg" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
              <span data-i18n="ziyarat.uhud_title"></span>
            </h2>
            <p class="text-sm text-muted" data-i18n="ziyarat.uhud_desc" style="line-height: 1.6;"></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Mount+Uhud+Archers+Hill+Madinah" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top: var(--spacing-4);">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span data-i18n="ziyarat.map_button"></span>
            </a>
          </div>

          <!-- Baqi -->
          <div class="card">
            <h2 class="text-gold font-semibold text-lg" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <span data-i18n="ziyarat.baqi_title"></span>
            </h2>
            <p class="text-sm text-muted" data-i18n="ziyarat.baqi_desc" style="line-height: 1.6;"></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Jannat+al-Baqi+Madinah" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top: var(--spacing-4);">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span data-i18n="ziyarat.map_button"></span>
            </a>
          </div>

          <!-- Ravza & Nusuk Guide -->
          <div class="card" style="background: rgba(13, 75, 60, 0.25); border: 1.5px solid var(--color-gold); margin-top: var(--spacing-4);">
            <h2 class="text-gold font-semibold text-lg" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span data-i18n="ziyarat.rawdah_title"></span>
            </h2>
            <p class="text-sm text-muted" style="line-height: 1.6; margin-bottom: 12px;" data-i18n="ziyarat.rawdah_desc">
            </p>
            <ul style="padding-left: 18px; font-size: 0.85rem; color: var(--color-text-main); margin-bottom: 16px; display: flex; flex-direction: column; gap: 6px;">
              <li data-i18n="ziyarat.rawdah_b1"></li>
              <li data-i18n="ziyarat.rawdah_b2"></li>
              <li data-i18n="ziyarat.rawdah_b3"></li>
              <li data-i18n="ziyarat.rawdah_b4"></li>
            </ul>
          </div>
        </div>

      </main>
    </div>
    `;
  },
  
  afterRender: () => {
    const tabMecca = document.getElementById('tab-mecca');
    const tabMedina = document.getElementById('tab-medina');
    const contentMecca = document.getElementById('content-mecca');
    const contentMedina = document.getElementById('content-medina');

    if (tabMecca && tabMedina) {
      tabMecca.addEventListener('click', () => {
        tabMecca.style.color = 'var(--color-gold)';
        tabMecca.style.borderBottom = '2px solid var(--color-gold)';
        tabMedina.style.color = 'var(--color-text-muted)';
        tabMedina.style.borderBottom = '2px solid transparent';
        contentMecca.style.display = 'block';
        contentMedina.style.display = 'none';
      });

      tabMedina.addEventListener('click', () => {
        tabMedina.style.color = 'var(--color-gold)';
        tabMedina.style.borderBottom = '2px solid var(--color-gold)';
        tabMecca.style.color = 'var(--color-text-muted)';
        tabMecca.style.borderBottom = '2px solid transparent';
        contentMedina.style.display = 'block';
        contentMecca.style.display = 'none';
      });
    }
  }
};
