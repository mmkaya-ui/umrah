const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'logo.png');
const outDir = path.join(__dirname, 'public');

if (!fs.existsSync(inputPath)) {
  console.error(`Error: Source logo not found at ${inputPath}`);
  console.error('Please place your logo file there and run this script again.');
  process.exit(1);
}

async function generateIcons() {
  try {
    // 1. Apple Touch Icon (180x180) - usually needs white background if logo is transparent
    await sharp(inputPath)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .toFile(path.join(outDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png (180x180)');

    // 2. PWA Icon (192x192) - transparent
    await sharp(inputPath)
      .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(outDir, 'pwa-192x192.png'));
    console.log('Generated pwa-192x192.png');

    // 3. PWA Icon (512x512) - transparent
    await sharp(inputPath)
      .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(outDir, 'pwa-512x512.png'));
    console.log('Generated pwa-512x512.png');

    // 4. Favicon (32x32)
    await sharp(inputPath)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(outDir, 'favicon.ico'));
    console.log('Generated favicon.ico (32x32)');

    // 5. Social Banner / Open Graph Image (1200x630) - centered on white or dark bg
    await sharp(inputPath)
      .resize(800, 420, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } }) // resize logo to fit inside
      .extend({
        top: 105,
        bottom: 105,
        left: 200,
        right: 200,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .toFile(path.join(outDir, 'social-banner.png'));
    console.log('Generated social-banner.png (1200x630)');

    console.log('\nAll icons successfully generated! You can now run "npm run build" to update the PWA service worker.');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
