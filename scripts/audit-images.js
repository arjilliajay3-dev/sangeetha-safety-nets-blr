const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function auditImages() {
  const baseDir = path.resolve(__dirname, '../public/images');
  function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(fullPath));
      } else if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
        results.push(fullPath);
      }
    });
    return results;
  }

  const files = getFiles(baseDir);
  const auditData = [];

  for (const f of files) {
    try {
      const meta = await sharp(f).metadata();
      const rel = path.relative(path.resolve(__dirname, '../public'), f).replace(/\\/g, '/');
      auditData.push({
        path: '/' + rel,
        filename: path.basename(f),
        width: meta.width,
        height: meta.height,
        format: meta.format,
        sizeKb: (fs.statSync(f).size / 1024).toFixed(1)
      });
    } catch (e) {
      console.error('Error reading:', f, e.message);
    }
  }

  console.log(`Total raster images audited: ${auditData.length}`);
  fs.writeFileSync(
    path.resolve(__dirname, '../docs/image-audit.json'),
    JSON.stringify(auditData, null, 2)
  );
  console.log('Saved audit to docs/image-audit.json');
}

auditImages();

