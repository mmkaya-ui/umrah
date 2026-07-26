class I18nEngine {
  constructor() {
    this.currentLang = localStorage.getItem('i18n_lang') || this.detectBrowserLang();
    this.fallbackLang = 'tr'; // Turkish is the base language for development
    this.translations = {};
    this.fallbackTranslations = {};
    this.supportedLangs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];
  }

  detectBrowserLang() {
    const navLang = (navigator.language || 'tr').split('-')[0].toLowerCase();
    return this.supportedLangs.includes(navLang) ? navLang : 'tr';
  }

  async init() {
    this.translations = await this.loadLocale(this.currentLang);
    if (this.currentLang !== this.fallbackLang) {
      this.fallbackTranslations = await this.loadLocale(this.fallbackLang);
    }
    this.applyDocumentMeta();
    this.translateDOM();
  }

  async loadLocale(lang) {
    const cacheKey = `i18n_dict_${lang}`;
    try {
      const res = await fetch(`/locales/${lang}.json`);
      if (!res.ok) throw new Error(`Locale HTTP error ${res.status}`);
      const data = await res.json();
      localStorage.setItem(cacheKey, JSON.stringify(data));
      return data;
    } catch (err) {
      console.warn(`[i18n] Failed fetching ${lang}, falling back to cache:`, err);
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
      if (lang !== this.fallbackLang) return await this.loadLocale(this.fallbackLang);
      return {};
    }
  }

  async setLanguage(lang) {
    if (this.currentLang === lang && Object.keys(this.translations).length > 0) return;
    if (!this.supportedLangs.includes(lang)) return;
    
    this.currentLang = lang;
    localStorage.setItem('i18n_lang', lang);
    this.translations = await this.loadLocale(lang);
    this.applyDocumentMeta();
    this.translateDOM();
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  applyDocumentMeta() {
    const dir = this.translations?.meta?.dir || (this.currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.dir = dir;
    document.documentElement.lang = this.currentLang;
  }

  t(path, params = {}) {
    const keys = path.split('.');
    let val = keys.reduce((obj, k) => obj && obj[k], this.translations);
    
    if (val === undefined || val === null) {
      val = keys.reduce((obj, k) => obj && obj[k], this.fallbackTranslations);
    }
    
    if (typeof val !== 'string') return val || path;

    return val.replace(/{(\w+)}/g, (_, k) => params[k] !== undefined ? params[k] : `{${k}}`);
  }

  translateDOM(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (typeof translation === 'string') {
        el.textContent = translation;
      }
    });

    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const bindings = el.getAttribute('data-i18n-attr').split(',');
      bindings.forEach(binding => {
        const [attr, key] = binding.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, this.t(key));
      });
    });
  }
}

export const i18n = new I18nEngine();
