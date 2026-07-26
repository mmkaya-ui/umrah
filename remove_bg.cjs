const sharp = require('sharp');
const path = require('path');

const logoPath = path.join(__dirname, 'public', 'logo.png');
const cleanLogoPath = path.join(__dirname, 'public', 'logo_clean.png');

async function processLogo() {
  try {
    const { data, info } = await sharp(logoPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // If near white, make transparent
      if (r > 225 && g > 225 && b > 225) {
        data[i + 3] = 0;
      }
    }

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(cleanLogoPath);

    console.log('Clean logo generated with 100% transparent background!');
  } catch (err) {
    console.error('Error removing bg:', err);
  }
}

processLogo();
