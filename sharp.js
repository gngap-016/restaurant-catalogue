const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/heros/');
const destinnation = path.resolve(__dirname, 'dist/heros/');

if (!fs.existsSync(destinnation)) {
  fs.mkdirSync(destinnation);
}

fs.readdirSync(target)
  .forEach(image => {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destinnation}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));
    
    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
    .resize(480)
    .toFile(path.resolve(
      __dirname,
      `${destinnation}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
    ));
  });
