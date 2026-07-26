const fs = require('fs');
const path = require('path');

const projectRoot = 'd:\\antigravity\\umrah';

const data = {
  tr: {
    nav: { dhikr: "Zikirmatik" },
    dhikr: { title: "Dijital Zikirmatik", short_title: "Zikirmatik" },
    packing: { title: "Umre Valiz Kontrol Listesi" }
  },
  en: {
    nav: { dhikr: "Dhikr Counter" },
    dhikr: { title: "Digital Dhikr Counter", short_title: "Dhikr" },
    packing: { title: "Umrah Packing Checklist" }
  },
  ar: {
    nav: { dhikr: "المسبحة" },
    dhikr: { title: "المسبحة الرقمية", short_title: "المسبحة" },
    packing: { title: "قائمة أمتعة العمرة" }
  },
  de: {
    nav: { dhikr: "Dhikr-Zähler" },
    dhikr: { title: "Digitaler Dhikr-Zähler", short_title: "Dhikr" },
    packing: { title: "Packliste für Umrah" }
  },
  ru: {
    nav: { dhikr: "Тасбих" },
    dhikr: { title: "Электронный Тасбих", short_title: "Тасбих" },
    packing: { title: "Чек-лист вещей для Умры" }
  },
  es: {
    nav: { dhikr: "Dhikr" },
    dhikr: { title: "Contador Digital de Dhikr", short_title: "Dhikr" },
    packing: { title: "Lista de Equipaje para la Umrah" }
  },
  ko: {
    nav: { dhikr: "디지털 디크르" },
    dhikr: { title: "디지털 디크르 카운터", short_title: "디크르" },
    packing: { title: "움라 짐 싸기 체크리스트" }
  }
};

const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];

for (const lang of langs) {
  const filePath = path.join(projectRoot, 'public', 'locales', `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!content.nav) content.nav = {};
    content.nav.dhikr = data[lang].nav.dhikr;
    content.dhikr = data[lang].dhikr;
    content.packing = data[lang].packing;
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Patched dhikr and packing keys for ${lang}.json`);
  }
}
