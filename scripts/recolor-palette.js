const fs = require('fs');
const path = require('path');

const colorMap = [
  // Primary Purple & variations -> Burgundy
  { regex: /#4b2e83/gi, replacement: '#6D1A36' },
  { regex: /#261447/gi, replacement: '#420D20' },
  { regex: /#392166/gi, replacement: '#420D20' },
  { regex: /#2d1754/gi, replacement: '#420D20' },
  { regex: /#321e59/gi, replacement: '#420D20' },
  { regex: /#573694/gi, replacement: '#55142A' },
  { regex: /#5c38a1/gi, replacement: '#55142A' },
  { regex: /#6b4ba8/gi, replacement: '#8A2F4D' },
  { regex: /#8e68c6/gi, replacement: '#8A2F4D' },
  { regex: /#b59cdd/gi, replacement: '#B9BEC7' },
  { regex: /#d0bfea/gi, replacement: '#B9BEC7' },
  { regex: /#e6ddf5/gi, replacement: '#F6E9EE' },
  { regex: /#faf7fd/gi, replacement: '#F6E9EE' },

  // Saffron Orange & variations -> Burgundy Accent / Silver / Blush
  { regex: /#f28c28/gi, replacement: '#8A2F4D' },
  { regex: /#ffa756/gi, replacement: '#B9BEC7' },
  { regex: /#d97214/gi, replacement: '#420D20' },
];

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        processDirectory(fullPath);
      }
    } else if (
      entry.isFile() &&
      /\.(tsx|ts|jsx|js|css|svg)$/.test(entry.name)
    ) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      for (const { regex, replacement } of colorMap) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

console.log('Recoloring src directory to Burgundy & Silver palette...');
processDirectory(path.join(__dirname, '..', 'src'));
console.log('Done.');

