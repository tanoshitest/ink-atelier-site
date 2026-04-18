import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/media';
const targets = ['IMG_1637.PNG', 'IMG_1501.jpg', 'IMG_1633.PNG', 'IMG_1638.jpg', 'IMG_1745.PNG'];

async function run() {
  for (const file of targets) {
    const oldPath = path.join(dir, file);
    if (!fs.existsSync(oldPath)) continue;
    
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const newName = `${basename}.webp`;
    const newPath = path.join(dir, newName);
    
    console.log(`Compressing ${file} -> ${newName}...`);
    await sharp(oldPath)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(newPath);
      
    fs.unlinkSync(oldPath);
  }
  console.log('All done!');
}

run().catch(console.error);
