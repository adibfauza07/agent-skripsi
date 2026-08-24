const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

const target1 = '<li><a href="https://pena-elit-akademika.vercel.app/" target="_blank" class="hover:text-brand-400 transition-colors">Website Utama (Segera Hadir)</a></li>';
const target2 = '                        <li><a href="https://pena-elit-akademika.vercel.app/" target="_blank" class="hover:text-brand-400 transition-colors">Website Utama (Segera Hadir)</a></li>\r\n';
const target3 = '                        <li><a href="https://pena-elit-akademika.vercel.app/" target="_blank" class="hover:text-brand-400 transition-colors">Website Utama (Segera Hadir)</a></li>\n';

let count = 0;
files.forEach(f => {
  if (f.endsWith('.html') || f === 'template_footer.txt') {
    const filePath = path.join(dir, f);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(target2, '');
    content = content.replace(target3, '');
    content = content.replace(target1, '');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + f);
      count++;
    }
  }
});
console.log('Total files updated: ' + count);
