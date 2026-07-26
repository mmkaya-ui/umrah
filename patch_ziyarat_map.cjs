const fs = require('fs');
const path = require('path');

const projectRoot = 'd:\\antigravity\\umrah';

const mapButtons = {
  tr: "Haritada Göster 📍",
  en: "Show on Map 📍",
  ar: "عرض على الخريطة 📍",
  de: "Auf Karte anzeigen 📍",
  ru: "Показать на карте 📍",
  es: "Mostrar en el mapa 📍",
  ko: "지도에서 보기 📍"
};

const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];

for (const lang of langs) {
  const filePath = path.join(projectRoot, 'public', 'locales', `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!content.ziyarat) content.ziyarat = {};
    content.ziyarat.map_button = mapButtons[lang];
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Updated ziyarat.map_button for ${lang}.json`);
  }
}
