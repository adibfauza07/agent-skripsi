const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const excludeFiles = [
    'index.html',
    'tentang.html',
    'jasa-skripsi-purwakarta.html',
    'jasa-format-template-skripsi.html',
    'jasa-publikasi-jurnal-sinta.html',
    'joki-tugas-kuliah.html',
    'blog.html',
    'article1.html',
    'article2.html'
];

let updatedCount = 0;

for (const file of files) {
    if (excludeFiles.includes(file)) continue;

    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find H1
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (!h1Match) continue;

    let h1Text = h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');

    // Find lead paragraph
    const leadMatch = content.match(/<p class="lead[^>]*>([\s\S]*?)<\/p>/);
    let leadText = '';
    if (leadMatch) {
        leadText = leadMatch[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    } else {
        // Fallback to first regular paragraph if no lead
        const pMatch = content.match(/<p class="mb-6"[^>]*>([\s\S]*?)<\/p>/);
        if (pMatch) {
            leadText = pMatch[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
        }
    }

    if (!leadText) leadText = h1Text; // Fallback
    
    // Truncate description for SEO (usually 150-160 chars)
    let seoDesc = leadText;
    if (seoDesc.length > 155) {
        seoDesc = seoDesc.substring(0, 152) + '...';
    }
    
    // Replace double quotes to avoid breaking HTML attributes
    seoDesc = seoDesc.replace(/"/g, '&quot;');
    h1Text = h1Text.replace(/"/g, '&quot;');

    // Title
    const newTitle = `<title>${h1Text} - Pena Elit Akademika</title>`;
    content = content.replace(/<title>[\s\S]*?<\/title>/, newTitle);

    // Meta Description
    content = content.replace(/<meta name="description" content="([^"]*)">/, `<meta name="description" content="${seoDesc}">`);

    // Meta OG Title
    content = content.replace(/<meta property="og:title" content="([^"]*)">/, `<meta property="og:title" content="${h1Text} - Pena Elit Akademika">`);

    // Meta OG Description
    content = content.replace(/<meta property="og:description" content="([^"]*)">/, `<meta property="og:description" content="${seoDesc}">`);
    
    // Some articles might have schema markup that could also be updated, but let's stick to the main meta tags first.
    
    // Optional: Add some SEO keywords dynamically to <meta name="keywords"> if we want to be fancy
    const keywordsMatch = content.match(/<meta name="keywords" content="([^"]*)">/);
    if (keywordsMatch) {
        const oldKeywords = keywordsMatch[1];
        // Generate some basic keywords from H1
        const h1Words = h1Text.toLowerCase().replace(/[^\w\s]/g, '').split(' ').filter(w => w.length > 4);
        const newKeywords = [...new Set([oldKeywords, ...h1Words])].join(', ');
        content = content.replace(/<meta name="keywords" content="([^"]*)">/, `<meta name="keywords" content="${newKeywords}">`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Updated SEO tags for: ${file}`);
}

console.log(`Successfully updated ${updatedCount} articles.`);
