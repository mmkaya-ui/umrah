export class Router {
  constructor(routes) {
    this.routes = routes;
    this.appElement = document.getElementById('page-content');
    
    window.addEventListener('popstate', () => this.handleRoute(location.pathname));
    
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        this.navigateTo(link.getAttribute('href'));
      }
    });
  }

  navigateTo(url) {
    if (location.pathname === url) return;
    history.pushState(null, null, url);
    this.handleRoute(url);
  }

  async handleRoute(path) {
    // Basic route matching. In a real app we'd parse params.
    const route = this.routes[path] || this.routes['/404'] || { render: () => '<h1>404 Sayfa Bulunamadı</h1>' };
    
    if (document.startViewTransition) {
      document.startViewTransition(async () => {
        await this.renderRoute(route);
      });
    } else {
      this.appElement.classList.add('page-exit');
      await new Promise(r => setTimeout(r, 150));
      await this.renderRoute(route);
      this.appElement.classList.remove('page-exit');
      this.appElement.classList.add('page-enter');
      setTimeout(() => this.appElement.classList.remove('page-enter'), 300);
    }
  }

  async renderRoute(route) {
    const content = typeof route.render === 'function' ? await route.render() : route.render;
    this.appElement.innerHTML = content;
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Dispatch event so components can initialize
    document.dispatchEvent(new CustomEvent('route-changed', { detail: { path: location.pathname } }));
    
    // Call page-specific lifecycle hook
    if (typeof route.afterRender === 'function') {
      route.afterRender();
    }
  }
}
