const fs = require('fs');

const filePath = 'template-skripsi.html';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
    /<div id="(modal-\d)" class="fixed inset-0 z-\[60\] hidden bg-black\/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity opacity-0 duration-300">\s*<div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-\[85vh\] flex flex-col transform scale-95 transition-transform duration-300 relative overflow-hidden">([\s\S]*?)<\/div>\s*<\/div>/g,
    `<div id="$1" class="fixed inset-0 z-[60] hidden transition-opacity opacity-0 duration-300">
        <!-- Overlay -->
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm modal-overlay" onclick="closePreview('$1')"></div>
        <!-- Scrollable Container -->
        <div class="fixed inset-0 z-10 overflow-y-auto pointer-events-none">
            <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
                <!-- Modal Panel -->
                <div class="modal-panel relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-4xl scale-95 duration-300 pointer-events-auto flex flex-col max-h-[90vh]">
$2
                </div>
            </div>
        </div>
    </div>`
);

content = content.replace(
    /modal\.querySelector\('div'\)\.classList\.remove\('scale-95'\);/g,
    `modal.querySelector('.modal-panel').classList.remove('scale-95');`
);
content = content.replace(
    /modal\.querySelector\('div'\)\.classList\.add\('scale-95'\);/g,
    `modal.querySelector('.modal-panel').classList.add('scale-95');`
);

content = content.replace(
    /\/\/ Close on background click[\s\S]*?}\);/g,
    `// Close on background click is handled by the overlay onclick attribute`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed modals in template-skripsi.html');
