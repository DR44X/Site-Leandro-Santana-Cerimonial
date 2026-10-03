import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = './staging-photos';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

console.log(`Found ${files.length} JPG photos in staging-photos:\n`);

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const meta = await sharp(path.join(dir, file)).metadata();
  const orientation = meta.width >= meta.height ? 'Landscape' : 'Portrait';
  console.log(`[${i+1}] ${file} | ${meta.width}x${meta.height} | ${orientation}`);
}
