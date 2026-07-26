const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'logo.png');
const outDir = path.join(__dirname, 'public');

async function generateIcons() {
  try {
    // 1. PWA 192x192 (transparent)
    await sharp(inputPath)
      .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(path.join(outDir, 'pwa-192x192.png'));

    // 2. PWA 512x512 (transparent)
    await sharp(inputPath)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(path.join(outDir, 'pwa-512x512.png'));

    // 3. Apple Touch Icon (180x180)
    await sharp(inputPath)
      .resize(180, 180, { fit: 'contain', background: { r: 10, g: 15, b: 26, alpha: 1 } })
      .toFile(path.join(outDir, 'apple-touch-icon.png'));

    // 4. Transparent PNG Favicon (64x64) for Browser Tab
    await sharp(inputPath)
      .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(path.join(outDir, 'favicon.png'));

    // 5. Social Banner / Open Graph (1200x630)
    await sharp(inputPath)
      .resize(1000, 500, { fit: 'contain', background: { r: 10, g: 15, b: 26, alpha: 1 } })
      .extend({
        top: 65,
        bottom: 65,
        left: 100,
        right: 100,
        background: { r: 10, g: 15, b: 26, alpha: 1 }
      })
      .toFile(path.join(outDir, 'social-banner.png'));

    console.log('Successfully generated all icons from the user\'s uploaded logo!');
  } catch (err) {
    console.error('Error generating icons:', err);
  }
}

generateIcons();
