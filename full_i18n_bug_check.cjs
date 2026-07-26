const fs = require('fs');
const path = require('path');

const projectRoot = 'd:/antigravity/umrah';
const localesDir = path.join(projectRoot, 'public', 'locales');
const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];

const localeData = {};
langs.forEach(lang => {
  const file = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(file)) {
    localeData[lang] = JSON.parse(fs.readFileSync(file, 'utf8'));
  }
});

function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullPath));
    } else {
      keys.push(fullPath);
    }
  }
  return keys;
}

const baseKeys = getAllKeys(localeData.tr);
console.log(`Base (TR) total keys: ${baseKeys.length}`);

let missingReport = {};

langs.forEach(lang => {
  if (lang === 'tr') return;
  const langKeys = getAllKeys(localeData[lang]);
  const missingInLang = baseKeys.filter(k => !langKeys.includes(k));
  if (missingInLang.length > 0) {
    missingReport[lang] = missingInLang;
  }
});

console.log('--- MISSING KEYS REPORT ---');
console.log(JSON.stringify(missingReport, null, 2));

// Search JS files for hardcoded elements
const srcDir = path.join(projectRoot, 'src');
function getJsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getJsFiles(filePath));
    } else if (file.endsWith('.js')) {
      results.push(filePath);
    }
  });
  return results;
}

const jsFiles = getJsFiles(srcDir);
console.log(`\nScanning ${jsFiles.length} JS files for untranslated elements...`);

jsFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(projectRoot, file);
  
  // Find lines with hardcoded text inside tags like <span>Text</span> or <button>Text</button> without data-i18n
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('<') && line.includes('>') && !line.includes('data-i18n') && !line.includes('i18n.t') && !line.includes('svg') && !line.includes('path') && !line.includes('img')) {
      const cleaned = line.replace(/<[^>]*>/g, '').trim();
      if (cleaned.length > 3 && !cleaned.startsWith('//') && !cleaned.includes('${') && !cleaned.includes('import') && !cleaned.includes('export')) {
        console.log(`[File: ${relPath}:L${idx + 1}]: "${cleaned}"`);
      }
    }
  });
});
