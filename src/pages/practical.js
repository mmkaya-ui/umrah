export const PracticalPage = {
  render: () => {
    return `
    <div class="page-container">
      <header class="app-header" role="banner">
        <a href="/" class="text-muted" data-link="/" style="display: flex; align-items: center;" data-i18n-attr="aria-label:aria.go_back">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 19l-7-7 7-7"></path></svg>
        </a>
        <div class="header-title" data-i18n="practical.title"></div>
        <div style="width:24px;"></div>
      </header>
      
      <main style="padding-top: var(--spacing-4);" role="main">
        <!-- Haircut Section -->
        <div class="card">
          <h2 class="font-semibold text-xl text-gold" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path></svg>
            <span data-i18n="practical.haircut_title"></span>
          </h2>
          <p class="text-sm text-muted" style="margin-bottom: var(--spacing-4);" data-i18n="practical.haircut_desc"></p>
          
          <a href="https://www.google.com/maps/search/barber/@21.4244243,39.8291583,16z" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%;">
             <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             <span data-i18n="practical.haircut_map"></span>
          </a>
        </div>
        
        <!-- Dining Section -->
        <div class="card" style="margin-top: var(--spacing-4);">
          <h2 class="font-semibold text-xl text-gold" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path></svg>
            <span data-i18n="practical.dining_title"></span>
          </h2>
          <p class="text-sm text-muted" style="margin-bottom: var(--spacing-4);" data-i18n="practical.dining_desc"></p>
          
          <a href="https://www.google.com/maps/search/Abraj+Al+Bait+Food+Court/@21.4184643,39.8253163,17z" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%;">
             <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             <span data-i18n="practical.dining_map"></span>
          </a>
        </div>

        <!-- Ziyarat Section -->
        <div class="card" style="margin-top: var(--spacing-4); margin-bottom: 80px;">
          <h2 class="font-semibold text-xl text-gold" style="margin-bottom: var(--spacing-2); display: flex; align-items: center; gap: 8px;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span data-i18n="ziyarat.title"></span>
          </h2>
          <p class="text-sm text-muted" style="margin-bottom: var(--spacing-4);">Mekke-i Mükerreme ve Medine-i Münevvere'deki kutsal ziyaret yerlerini, tarihi ve ruhani önemleriyle keşfedin.</p>
          <button class="btn btn-primary" style="width: 100%;" data-link="/umrah/ziyarat">
            <span data-i18n="ziyarat.title"></span>
          </button>
        </div>
      </main>
    </div>
    `;
  }
};
