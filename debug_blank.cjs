const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    const content = await page.content();
    console.log('HTML length:', content.length);
    if (content.includes('Umrah Companion') || content.includes('data-i18n')) {
      console.log('App appears to have loaded correctly.');
    } else {
      console.log('App did NOT load correctly. HTML:', content.substring(0, 500));
    }
  } catch (err) {
    console.error('Failed to load page:', err);
  }

  await browser.close();
})();
