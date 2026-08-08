const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

const files = fs.readdirSync(__dirname);
for (const file of files) {
  // Abaikan folder/file yang tidak perlu diupload ke server live
  if (
    file === 'node_modules' || 
    file === 'dist' || 
    file === 'functions' ||
    file.startsWith('.') || 
    file.endsWith('.js') || 
    file.endsWith('.json') || 
    file.endsWith('.ps1')
  ) {
    continue;
  }
  
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(dist, file);
  const stat = fs.statSync(srcPath);
  
  if (stat.isFile()) {
    fs.copyFileSync(srcPath, destPath);
  } else if (stat.isDirectory()) {
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
}

console.log('Build output successfully copied to dist/ folder.');
