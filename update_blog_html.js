const fs = require('fs');
const path = require('path');

const blogPath = path.join(__dirname, 'blog.html');
let blogContent = fs.readFileSync(blogPath, 'utf8');

const newCards = `
                    <!-- New Articles Batch 6 -->
                    <article class="blog-item bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex-col group transform hover:-translate-y-1" data-category="olah-data">
                        <a href="cara-membuat-kuesioner-skripsi.html" class="block h-full flex flex-col">
                            <div class="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
                                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500 rounded-full mix-blend-screen filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <i class="fa-solid fa-list-check text-white text-5xl group-hover:scale-110 group-hover:text-emerald-300 transition-transform duration-500 z-10"></i>
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Olah Data</span>
                                <h2 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-600 transition-colors leading-snug">Cara Membuat Kuesioner Skripsi yang Valid dan Menarik Responden</h2>
                                <p class="text-slate-600 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">
                                    Panduan lengkap cara membuat kuesioner penelitian skripsi kuantitatif yang valid, reliabel, dan mudah diisi oleh responden. Lengkap dengan contohnya.
                                </p>
                                <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                                    <span><i class="fa-regular fa-calendar mr-1"></i> 11 Sep 2026</span>
                                    <span><i class="fa-regular fa-clock mr-1"></i> 5 min baca</span>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article class="blog-item bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex-col group transform hover:-translate-y-1" data-category="panduan">
                        <a href="contoh-kata-pengantar-skripsi.html" class="block h-full flex flex-col">
                            <div class="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
                                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <i class="fa-solid fa-envelope-open-text text-white text-5xl group-hover:scale-110 group-hover:text-purple-300 transition-transform duration-500 z-10"></i>
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <span class="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">Panduan Menulis</span>
                                <h2 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-600 transition-colors leading-snug">Contoh Kata Pengantar Skripsi yang Baik, Benar, dan Menyentuh</h2>
                                <p class="text-slate-600 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">
                                    Cara menyusun kata pengantar skripsi yang baik dan benar. Urutan ucapan terima kasih untuk dosen, keluarga, hingga pacar agar formal namun tetap berkesan.
                                </p>
                                <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                                    <span><i class="fa-regular fa-calendar mr-1"></i> 11 Sep 2026</span>
                                    <span><i class="fa-regular fa-clock mr-1"></i> 5 min baca</span>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article class="blog-item bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex-col group transform hover:-translate-y-1" data-category="panduan">
                        <a href="cara-membuat-kesimpulan-dan-saran-skripsi.html" class="block h-full flex flex-col">
                            <div class="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
                                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <i class="fa-solid fa-check-double text-white text-5xl group-hover:scale-110 group-hover:text-blue-300 transition-transform duration-500 z-10"></i>
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <span class="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Tips Menulis</span>
                                <h2 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-600 transition-colors leading-snug">Cara Membuat Kesimpulan dan Saran Skripsi (Bab 5) yang Benar</h2>
                                <p class="text-slate-600 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">
                                    Bab 5 Skripsi sering direvisi karena kesimpulan tidak menjawab rumusan masalah. Simak cara mudah menyusun kesimpulan dan saran skripsi yang cepat ACC dosen.
                                </p>
                                <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                                    <span><i class="fa-regular fa-calendar mr-1"></i> 11 Sep 2026</span>
                                    <span><i class="fa-regular fa-clock mr-1"></i> 4 min baca</span>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article class="blog-item bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex-col group transform hover:-translate-y-1" data-category="tips">
                        <a href="tips-memilih-dosen-pembimbing-skripsi.html" class="block h-full flex flex-col">
                            <div class="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
                                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
                                <div class="absolute -top-10 -left-10 w-32 h-32 bg-rose-500 rounded-full mix-blend-screen filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <i class="fa-solid fa-user-tie text-white text-5xl group-hover:scale-110 group-hover:text-rose-300 transition-transform duration-500 z-10"></i>
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <span class="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">Tips Kampus</span>
                                <h2 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-600 transition-colors leading-snug">Tips Memilih Dosen Pembimbing Skripsi (Dosbing) yang Tepat</h2>
                                <p class="text-slate-600 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">
                                    Salah pilih dosen pembimbing bisa membuat skripsi molor bertahun-tahun. Ketahui tips dan strategi jitu memilih dospem yang responsif, asyik, dan cepat ACC.
                                </p>
                                <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                                    <span><i class="fa-regular fa-calendar mr-1"></i> 11 Sep 2026</span>
                                    <span><i class="fa-regular fa-clock mr-1"></i> 6 min baca</span>
                                </div>
                            </div>
                        </a>
                    </article>
`;

blogContent = blogContent.replace('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blogGrid">', '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blogGrid">\n' + newCards);

fs.writeFileSync(blogPath, blogContent);
console.log('blog.html updated with 4 new articles.');
