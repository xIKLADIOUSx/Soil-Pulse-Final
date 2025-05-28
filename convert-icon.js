const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'assets', 'images', 'icon.png');
const outputPath = path.join(__dirname, 'assets', 'images', 'icon_new.png');

sharp(inputPath)
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('Icon converted successfully!');
  })
  .catch(err => {
    console.error('Error converting icon:', err);
  }); 