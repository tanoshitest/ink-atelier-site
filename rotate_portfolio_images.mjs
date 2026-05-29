import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const targetDir = 'public/media/anh tho nam';

async function run() {
  if (!fs.existsSync(targetDir)) {
    console.error(`Target directory does not exist: ${targetDir}`);
    return;
  }

  console.log(`Scanning portfolio directory: ${targetDir} for horizontal images...`);
  const files = fs.readdirSync(targetDir);
  let rotatedCount = 0;

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
      const filePath = path.join(targetDir, file);
      try {
        const metadata = await sharp(filePath).metadata();
        const width = metadata.width;
        const height = metadata.height;

        // If the width is greater than the height, the image is landscape/horizontal
        if (width > height) {
          console.log(`Rotating horizontal image: ${file} (${width}x${height})...`);
          
          // Rotate 90 degrees clockwise and save
          const buffer = await sharp(filePath)
            .rotate(90)
            .toBuffer();
            
          fs.writeFileSync(filePath, buffer);
          
          const newMetadata = await sharp(filePath).metadata();
          console.log(`Successfully rotated! New size: ${newMetadata.width}x${newMetadata.height}`);
          rotatedCount++;
        } else {
          console.log(`Image already vertical or square: ${file} (${width}x${height})`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
      }
    }
  }

  console.log(`\nProcessing complete! Rotated ${rotatedCount} images in ${targetDir}.`);
}

run().catch(console.error);
