const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, 'template_header.txt');
const footerPath = path.join(__dirname, 'template_footer.txt');

if (!fs.existsSync(headerPath) || !fs.existsSync(footerPath)) {
    console.error("Header or footer template not found!");
    process.exit(1);
}

const header = fs.readFileSync(headerPath, 'utf8');
const footer = fs.readFileSync(footerPath, 'utf8');

const services = [
  {
    filename: 'jasa-skripsi-purwakarta.html',
    title: 'Jasa Bimbingan & Joki Skripsi Terpercaya (Bergaransi Lulus ACC)',
    desc: 'Layanan jasa pembuatan dan bimbingan skripsi lengkap Bab 1-5, olah data, dan revisi dosen. Bergaransi bebas plagiasi (Turnitin), aman, dan privasi 100% terjaga.',
    body: `
<main class="bg-white text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
        <!-- Background Decorations (Hidden on mobile to prevent overlap/overflow) -->
        <div class="hidden md:block absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-brand-100 opacity-50 blur-3xl"></div>
        <div class="hidden md:block absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-100 opacity-50 blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <div class="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-white border border-brand-200 text-brand-700 font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                    <i class="fa-solid fa-graduation-cap text-yellow-500 mr-2"></i> Konsultan Skripsi Profesional & Legal
                </div>
                
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 sm:mb-8">
                    Solusi Cerdas Lulus Tepat Waktu <br class="hidden sm:block"/>
                    <span class="gradient-text">Tanpa Pusing Revisi</span>
                </h1>
                
                <p class="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2">
                    Kami memahami lelahnya menghadapi dosen pembimbing yang sulit ditemui dan pengolahan data yang rumit. Serahkan naskah Anda pada Pena Elit, kami kawal sampai sah menjadi Sarjana!
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                    <a href="https://wa.me/6281770450775" class="w-full sm:w-auto btn-gold text-base sm:text-lg font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3">
                        <i class="fa-brands fa-whatsapp text-xl sm:text-2xl"></i> Konsultasi Gratis
                    </a>
                    <a href="#harga" class="w-full sm:w-auto bg-white text-slate-700 border-2 border-slate-200 text-base sm:text-lg font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                        Lihat Harga
                    </a>
                </div>
                
                <div class="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-semibold text-slate-600">
                    <span class="flex items-center gap-2"><i class="fa-solid fa-shield-halved text-green-500 text-lg"></i> Privasi 100% Aman</span>
                    <span class="flex items-center gap-2"><i class="fa-solid fa-clock text-blue-500 text-lg"></i> Tepat Waktu</span>
                    <span class="flex items-center gap-2"><i class="fa-solid fa-check-double text-brand-500 text-lg"></i> Turnitin &lt; 20%</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Agitation / Pain Points -->
    <section class="py-16 md:py-24 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Apakah Anda Mengalami Situasi Ini?</h2>
                <p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Menyusun skripsi seringkali menjadi fase paling membuat frustrasi. Anda tidak sendirian jika merasakan hal ini.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Card 1 -->
                <div class="bg-red-50 p-6 sm:p-8 rounded-2xl border border-red-100 flex flex-col h-full">
                    <div class="text-red-500 text-3xl sm:text-4xl mb-4"><i class="fa-solid fa-file-circle-xmark"></i></div>
                    <h3 class="font-bold text-slate-800 text-lg mb-3">Judul Ditolak Terus</h3>
                    <p class="text-slate-600 text-sm flex-grow">Sudah mengajukan puluhan judul ke Kaprodi tapi selalu di-reject karena dianggap kurang "novelty" atau tidak ada masalah penelitian.</p>
                </div>
                <!-- Card 2 -->
                <div class="bg-orange-50 p-6 sm:p-8 rounded-2xl border border-orange-100 flex flex-col h-full">
                    <div class="text-orange-500 text-3xl sm:text-4xl mb-4"><i class="fa-solid fa-person-harassing"></i></div>
                    <h3 class="font-bold text-slate-800 text-lg mb-3">Dosen Pembimbing Sulit</h3>
                    <p class="text-slate-600 text-sm flex-grow">Dosen super sibuk, sulit dihubungi, sering ghosting, atau memberikan coretan revisi yang sangat membingungkan.</p>
                </div>
                <!-- Card 3 -->
                <div class="bg-indigo-50 p-6 sm:p-8 rounded-2xl border border-indigo-100 flex flex-col h-full">
                    <div class="text-indigo-500 text-3xl sm:text-4xl mb-4"><i class="fa-solid fa-chart-line"></i></div>
                    <h3 class="font-bold text-slate-800 text-lg mb-3">Stuck Pengolahan Data</h3>
                    <p class="text-slate-600 text-sm flex-grow">Skripsi terhenti total di Bab 4 karena bingung pakai SPSS/SmartPLS, atau data kuesioner terbukti tidak valid.</p>
                </div>
                <!-- Card 4 -->
                <div class="bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col h-full">
                    <div class="text-slate-500 text-3xl sm:text-4xl mb-4"><i class="fa-solid fa-briefcase"></i></div>
                    <h3 class="font-bold text-slate-800 text-lg mb-3">Sibuk Bekerja (Karyawan)</h3>
                    <p class="text-slate-600 text-sm flex-grow">Tidak punya waktu berjam-jam sehari untuk membaca jurnal internasional karena lelah bekerja full-time.</p>
                </div>
            </div>
            
            <div class="mt-12 sm:mt-16 text-center bg-brand-50 p-6 sm:p-8 md:p-10 rounded-2xl border border-brand-100">
                <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-brand-900 mb-3 sm:mb-4">Jangan Biarkan Skripsi Menghambat Karir Anda!</h3>
                <p class="text-base sm:text-lg text-brand-700">Pena Elit hadir sebagai "Dosen Bayangan" yang siap mengeksekusi semua masalah teknis naskah Anda.</p>
            </div>
        </div>
    </section>

    <!-- Layanan Kami -->
    <section class="py-16 md:py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 sm:mb-16">
                <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Solusi Lengkap</span>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Apa Saja yang Akan Kami Kerjakan?</h2>
                <div class="w-20 sm:w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="space-y-12 sm:space-y-16">
                <!-- Row 1 -->
                <div class="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md border border-slate-100 flex flex-col lg:flex-row gap-8 items-center">
                    <div class="w-full lg:w-2/5">
                        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=600" alt="Penulisan Proposal Skripsi" class="rounded-2xl object-cover w-full aspect-video shadow-sm">
                    </div>
                    <div class="w-full lg:w-3/5">
                        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Pembuatan Judul & Proposal (Bab 1-3)</h3>
                        <p class="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                            Kami akan menyusun Latar Belakang yang tajam dengan fenomena masalah empiris, menentukan Research Gap yang jelas, merumuskan hipotesis, dan merancang metodologi penelitian yang tepat. Proposal Anda akan siap tempur di Sidang Sempro.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm font-semibold text-slate-700">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500 text-lg"></i> 3 Opsi Judul Gratis</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500 text-lg"></i> Jurnal Internasional Terkini</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500 text-lg"></i> Draft PPT Sidang</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500 text-lg"></i> Daftar Pustaka Mendeley</div>
                        </div>
                    </div>
                </div>
                
                <!-- Row 2 -->
                <div class="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md border border-slate-100 flex flex-col lg:flex-row-reverse gap-8 items-center">
                    <div class="w-full lg:w-2/5">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600" alt="Olah Data Skripsi" class="rounded-2xl object-cover w-full aspect-video shadow-sm">
                    </div>
                    <div class="w-full lg:w-3/5">
                        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Olah Data SPSS & Analisis Bab 4-5</h3>
                        <p class="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                            Tim statistikawan kami ahlinya mengatasi data bermasalah. Kami melakukan tabulasi data, uji instrumen, asumsi klasik, regresi, hingga merangkai angka output tersebut menjadi narasi pembahasan komprehensif di Bab 4 dan 5.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm font-semibold text-slate-700">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-500 text-lg"></i> SPSS, SmartPLS, AMOS, EViews</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-500 text-lg"></i> Terapi Data (Normalisasi)</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-500 text-lg"></i> Interpretasi Hasil Bab 4</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-500 text-lg"></i> Edukasi Cara Baca Output</div>
                        </div>
                    </div>
                </div>
                
                <!-- Row 3 -->
                <div class="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md border border-slate-100 flex flex-col lg:flex-row gap-8 items-center">
                    <div class="w-full lg:w-2/5">
                        <div class="w-full aspect-video lg:aspect-auto lg:h-64 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 shadow-inner">
                            <i class="fa-solid fa-magnifying-glass-chart text-4xl sm:text-5xl mb-3 sm:mb-4 text-green-400"></i>
                            <div class="text-4xl sm:text-5xl font-black">&lt; 20%</div>
                            <div class="text-slate-400 text-sm mt-2">Similarity Index</div>
                        </div>
                    </div>
                    <div class="w-full lg:w-3/5">
                        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Parafrase Penurunan Skor Turnitin</h3>
                        <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Jika naskah Anda penuh plagiasi (di atas 30%), Anda bisa dituduh menjiplak. Kami melayani perombakan struktur kalimat (parafrase) secara manual tanpa mengubah makna, sehingga skor Turnitin Anda dipastikan aman dan lolos standar kampus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Harga & Paket (Transparent Pricing) -->
    <section id="harga" class="py-16 md:py-24 bg-brand-900 text-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-12 sm:mb-16">
                <span class="text-brand-300 font-bold tracking-wider uppercase text-sm mb-2 block">Daftar Harga & Paket Transparan</span>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Investasi Terjangkau & Bisa Dicicil</h2>
                <p class="text-sm sm:text-base text-brand-100 max-w-2xl mx-auto">Kami mengerti kondisi finansial mahasiswa. Harga transparan dan bisa dicicil bertahap (per termin/per bab) sesuai progres pengerjaan naskah Anda.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <!-- Paket 1 -->
                <div class="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col h-full border border-slate-200">
                    <h3 class="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Paket Sempro <br/><span class="text-sm text-slate-500 font-normal">Pembuatan Bab 1, 2, 3</span></h3>
                    <div class="text-2xl sm:text-3xl font-black text-brand-600 mb-2">Mulai 1.2 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung jurusan & riset.</p>
                    <ul class="space-y-3 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Penulisan Full Bab 1-3</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Daftar Pustaka Otomatis</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Bonus PPT Sidang Sempro</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Garansi Revisi Dosen</span></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors mt-auto">Tanya Admin</a>
                </div>
                
                <!-- Paket 2 -->
                <div class="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col h-full border border-slate-200">
                    <h3 class="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Paket Olah Data <br/><span class="text-sm text-slate-500 font-normal">Hasil & Analisis Bab 4, 5</span></h3>
                    <div class="text-2xl sm:text-3xl font-black text-brand-600 mb-2">Mulai 1.5 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung software & variabel.</p>
                    <ul class="space-y-3 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Tabulasi Data Mentah</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Output Uji Lengkap</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Penulisan Narasi Bab 4 & 5</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Bimbingan Baca Data</span></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors mt-auto">Tanya Admin</a>
                </div>
                
                <!-- Paket 3 (Laris) -->
                <div class="bg-brand-50 text-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col h-full border-2 border-brand-400 relative md:transform lg:scale-105 z-10 mt-4 lg:mt-0">
                    <div class="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap">Paling Dicari</div>
                    <h3 class="text-lg sm:text-xl font-bold text-brand-900 border-b border-brand-200 pb-4 mb-4 mt-2">Full Service <br/><span class="text-sm text-brand-700 font-normal">Terima Beres Bab 1-5</span></h3>
                    <div class="text-2xl sm:text-3xl font-black text-brand-700 mb-2">Mulai 3.5 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Bisa bayar sistem cicil / termin.</p>
                    <ul class="space-y-3 mb-8 text-sm text-slate-800 flex-grow font-medium">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-star text-yellow-500 mt-0.5"></i> <span>Penulisan Judul s/d Bab 5</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-star text-yellow-500 mt-0.5"></i> <span>Olah Data Kuantitatif/Kualitatif</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-star text-yellow-500 mt-0.5"></i> <span>Lolos Plagiasi Turnitin</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-star text-yellow-500 mt-0.5"></i> <strong class="text-brand-700">Garansi Revisi Sampai ACC</strong></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md hover:shadow-lg mt-auto">Ambil Full Service</a>
                </div>
                
                <!-- Paket 4 -->
                <div class="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col h-full border border-slate-200">
                    <h3 class="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Turnitin & Format <br/><span class="text-sm text-slate-500 font-normal">Perapihan Naskah</span></h3>
                    <div class="flex items-end gap-1 mb-2">
                        <div class="text-2xl sm:text-3xl font-black text-brand-600">Mulai 15rb</div>
                        <div class="text-sm text-slate-500 font-medium mb-1">/Lbr</div>
                    </div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung skor awal & deadline.</p>
                    <ul class="space-y-3 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Parafrase Manual &lt; 20%</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Cek Typo & Margin Word</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Daftar Isi Otomatis</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Tersedia Kilat 24 Jam</span></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors mt-auto">Tanya Admin</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Workflow -->
    <section class="py-16 md:py-24 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cara Memulai Pemesanan</h2>
                <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">Proses transparan, aman, dan memprioritaskan kenyamanan finansial mahasiswa.</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <!-- Step 1 -->
                <div class="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 text-center flex flex-col h-full">
                    <div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-md">1</div>
                    <h4 class="font-bold text-lg text-slate-900 mb-3">Konsultasi WA</h4>
                    <p class="text-sm text-slate-600 flex-grow leading-relaxed">Kirimkan pedoman penulisan kampus Anda (buku panduan) dan ceritakan topik yang Anda inginkan ke Admin kami secara Gratis.</p>
                </div>
                <!-- Step 2 -->
                <div class="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 text-center flex flex-col h-full">
                    <div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-md">2</div>
                    <h4 class="font-bold text-lg text-slate-900 mb-3">Kesepakatan & DP</h4>
                    <p class="text-sm text-slate-600 flex-grow leading-relaxed">Admin akan memberikan rincian harga. Cukup bayar Down Payment (DP) sebagai tanda jadi, dan tim langsung bekerja.</p>
                </div>
                <!-- Step 3 -->
                <div class="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 text-center flex flex-col h-full">
                    <div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-md">3</div>
                    <h4 class="font-bold text-lg text-slate-900 mb-3">Review per Bab</h4>
                    <p class="text-sm text-slate-600 flex-grow leading-relaxed">Setiap 1 bab selesai, kami kirim untuk direview dan dibimbingankan ke dosen. Pembayaran dilanjut bertahap per termin.</p>
                </div>
                <!-- Step 4 -->
                <div class="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 text-center flex flex-col h-full">
                    <div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-md">4</div>
                    <h4 class="font-bold text-lg text-slate-900 mb-3">Revisi Sampai ACC</h4>
                    <p class="text-sm text-slate-600 flex-grow leading-relaxed">Jika ada coretan dosen, cukup kirim fotonya ke kami. Kami perbaiki secara gratis sampai naskah ACC maju sidang.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10 sm:mb-12">
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">Pertanyaan yang Sering Diajukan (FAQ)</h2>
            </div>
            
            <div class="space-y-4">
                <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
                        <span class="font-bold text-slate-800 text-sm sm:text-base pr-4">Apakah privasi dan rahasia klien terjamin aman?</span>
                        <i class="fa-solid fa-chevron-down text-brand-600 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="px-6 pb-5 hidden text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        <strong>Sangat Terjamin 100%.</strong> Kami mengikat perjanjian etika (Non-Disclosure Agreement) dengan tim penulis. Naskah, nama, institusi, dan kontak Anda tidak akan pernah dipublikasikan, apalagi dijual kembali. Sistem file kami akan dihapus setelah project ACC.
                    </div>
                </div>
                <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
                        <span class="font-bold text-slate-800 text-sm sm:text-base pr-4">Berapa lama pengerjaan skripsi Bab 1 sampai 5?</span>
                        <i class="fa-solid fa-chevron-down text-brand-600 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="px-6 pb-5 hidden text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        Pengerjaan normal per-bab memakan waktu 1-2 minggu (karena diselingi menunggu *feedback* dosen Anda). Namun, jika butuh cepat untuk mengejar *deadline* yudisium, kami memiliki <strong>Layanan Express</strong> yang dapat menyelesaikan full bab kurang dari 1 bulan.
                    </div>
                </div>
                <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
                        <span class="font-bold text-slate-800 text-sm sm:text-base pr-4">Bagaimana sistem Garansi Revisi-nya?</span>
                        <i class="fa-solid fa-chevron-down text-brand-600 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="px-6 pb-5 hidden text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        Jika ada coretan masukan dari dosen, kirimkan file revisi tersebut ke admin. Tim kami akan memperbaiki naskah tersebut <strong>tanpa biaya tambahan</strong> (GRATIS) sampai dosen menyatakan ACC. Pengecualian garansi berlaku jika dosen tiba-tiba merombak Judul Total di tengah jalan.
                    </div>
                </div>
            </div>
            
            <div class="mt-12 sm:mt-16 text-center">
                <a href="https://wa.me/6281770450775" class="inline-flex items-center justify-center w-full sm:w-auto bg-brand-600 text-white text-lg sm:text-xl font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-brand-700 transition-all transform hover:scale-105">
                    <i class="fa-solid fa-phone-volume mr-3"></i> Chat Admin Sekarang
                </a>
            </div>
        </div>
    </section>
</main>
    `
  },
  {
    filename: 'jasa-format-template-skripsi.html',
    title: 'Jasa Perapihan Format & Template Skripsi Word Cepat (1 Hari Jadi)',
    desc: 'Atasi skripsi berantakan, margin geser, dan daftar isi manual! Layanan jasa perapihan format template skripsi Ms. Word sesuai pedoman kampus. Express 1 hari jadi.',
    body: `
<main class="bg-white text-slate-800">
    <!-- Hero -->
    <section class="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
        <div class="hidden md:block absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
                <div class="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                    <div class="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                        <i class="fa-solid fa-file-word text-blue-500 mr-2"></i> Spesialis Format Dokumen Word
                    </div>
                    
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 sm:mb-8">
                        Pusing Naskah Skripsi <br class="hidden sm:block"/>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Tampil Berantakan?</span>
                    </h1>
                    
                    <p class="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed px-2 lg:px-0">
                        Sudah capek mikirin materi, masih ditambah stres ngurusin halaman Romawi, daftar isi manual, dan margin yang geser tiap ganti laptop. Serahkan urusan teknis format Microsoft Word pada ahlinya. Selesai dalam hitungan jam!
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center px-4 lg:px-0">
                        <a href="https://wa.me/6281770450775" class="w-full sm:w-auto bg-blue-600 text-white text-base sm:text-lg font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                            <i class="fa-brands fa-whatsapp text-xl sm:text-2xl"></i> Rapikan Naskah Saya
                        </a>
                    </div>
                    
                    <div class="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm font-semibold text-slate-500">
                        <span class="flex items-center gap-2"><i class="fa-solid fa-bolt text-yellow-500 text-lg"></i> Express 24 Jam</span>
                        <span class="flex items-center gap-2"><i class="fa-solid fa-check-circle text-green-500 text-lg"></i> Sesuai Pedoman Kampus</span>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 order-1 lg:order-2 px-4 sm:px-8 lg:px-0 mb-8 lg:mb-0">
                    <div class="relative w-full max-w-lg mx-auto lg:max-w-none">
                        <div class="absolute inset-0 bg-blue-500 rounded-3xl transform rotate-3 scale-105 opacity-20 transition-transform duration-500"></div>
                        <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800&h=600" alt="Edit Format Skripsi Word" class="relative rounded-3xl shadow-xl border border-slate-100 z-10 w-full aspect-video md:aspect-[4/3] object-cover">
                        <!-- Floating badge (Hidden on extra small screens to prevent clipping) -->
                        <div class="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 items-center gap-3">
                            <i class="fa-solid fa-file-circle-check text-3xl text-green-500"></i>
                            <div>
                                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Garansi 100%</p>
                                <p class="text-sm font-bold text-slate-900">Rapi & Presisi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mengapa Format Penting -->
    <section class="py-16 md:py-24 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Kenapa Skripsi Selalu Dicoret Gara-Gara Format?</h2>
                <p class="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-2">Banyak dosen yang perfeksionis. Walaupun isinya bagus, jika tata letak margin dan spasi asal-asalan, dosen akan merasa Anda tidak teliti. *Mood* dosen hancur sebelum membaca isinya.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col h-full">
                    <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl mb-5"><i class="fa-solid fa-times"></i></div>
                    <h3 class="font-bold text-lg text-slate-900 mb-3">Daftar Isi Manual = Bencana</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Mengetik titik-titik secara manual di daftar isi sangat melelahkan. Saat ada perubahan teks di Bab 2, otomatis semua nomor halaman bergeser dan Anda harus mengedit semuanya lagi dari awal.</p>
                </div>
                <div class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col h-full">
                    <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl mb-5"><i class="fa-solid fa-times"></i></div>
                    <h3 class="font-bold text-lg text-slate-900 mb-3">Penomoran Halaman Error</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Ketidaktahuan memakai fitur *Section Break* membuat halaman sampul ikutan ada nomornya, angka romawi (i, ii) tercampur dengan angka arab (1,2,3), dan urutan Bab berantakan.</p>
                </div>
                <div class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col h-full">
                    <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl mb-5"><i class="fa-solid fa-times"></i></div>
                    <h3 class="font-bold text-lg text-slate-900 mb-3">Daftar Pustaka Copas</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Dosen mewajibkan penggunaan Reference Manager (Mendeley/Zotero). Mengetik daftar pustaka secara manual berisiko format penulisan (APA/Harvard) salah ketik.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Fitur Layanan (What we do) -->
    <section class="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 sm:mb-16">
                <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Cakupan Layanan</span>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Kami Merapikan Keseluruhan Naskah Anda</h2>
                <div class="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
                <!-- Fitur -->
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-list-ol"></i></div>
                    <div>
                        <h3 class="text-lg sm:text-xl font-bold text-slate-800 mb-2">Automation (Otomatisasi)</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Pembuatan Daftar Isi Otomatis, Daftar Gambar, dan Lampiran. Menggunakan fitur Headings sehingga navigasi di panel Word sangat rapi. Ada perubahan halaman? Tinggal klik *Update Table*.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-file-lines"></i></div>
                    <div>
                        <h3 class="text-lg sm:text-xl font-bold text-slate-800 mb-2">Pemisahan & Penomoran Halaman</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Menata struktur halaman (Sampul tanpa nomor, kata pengantar Romawi di bawah, isi Bab Angka di atas-kanan). Kami ahlinya memanipulasi fitur Page Break & Section Break Word.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-paragraph"></i></div>
                    <div>
                        <h3 class="text-lg sm:text-xl font-bold text-slate-800 mb-2">Layouting (Margin & Spasi)</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Pengaturan presisi margin standar (4-4-3-3), spasi 1.5, perataan teks rata kiri-kanan (justify) tanpa rongga jelek, indentasi paragraf seragam, dan format font Times New Roman konsisten.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-book-journal-whills"></i></div>
                    <div>
                        <h3 class="text-lg sm:text-xl font-bold text-slate-800 mb-2">Sitasi & Daftar Pustaka Mendeley</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Konversi kutipan teks manual menjadi sistem sitasi referensi otomatis menggunakan Mendeley / Zotero dengan style yang diwajibkan (APA 7th, IEEE, Harvard).</p>
                    </div>
                </div>
            </div>
            
            <!-- Pricing Banner -->
            <div class="mt-12 sm:mt-20 bg-blue-600 rounded-3xl p-8 sm:p-10 lg:p-12 text-white text-center shadow-xl relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
                <div class="relative z-10">
                    <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Mulai dari Rp 5.000 / Lembar Saja!</h3>
                    <p class="text-blue-100 text-sm sm:text-base lg:text-lg mb-8 max-w-3xl mx-auto px-2">Sangat terjangkau untuk mahasiswa. Cukup lampirkan file Word Anda dan Buku Pedoman Penulisan Skripsi kampus (PDF). Kami selesaikan secara kilat tanpa Anda perlu pusing lagi.</p>
                    <a href="https://wa.me/6281770450775" class="inline-flex items-center justify-center w-full sm:w-auto bg-white text-blue-600 font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:bg-slate-50 hover:shadow-xl transition-all">
                        <i class="fa-brands fa-whatsapp mr-2 text-xl"></i> Konsultasikan File Naskah Anda
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>
    `
  },
  {
    filename: 'joki-tugas-kuliah.html',
    title: 'Joki Tugas Kuliah Profesional: Makalah, Esai, PPT & Resume | Pena Elit',
    desc: 'Layanan joki tugas kuliah terlengkap. Menerima pembuatan makalah, esai, presentasi PowerPoint (PPT), resume, dan paper mahasiswa S1/S2. Anti plagiasi & bergaransi.',
    body: `
<main class="bg-white text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
        <div class="hidden md:block absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div class="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-white border border-purple-200 text-purple-700 font-bold text-xs sm:text-sm tracking-wide shadow-sm">
                <i class="fa-solid fa-bolt text-purple-500 mr-2"></i> Layanan Kilat & Anti Plagiat (Turnitin)
            </div>
            
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
                Tugas Kuliah Menumpuk di Masa <br class="hidden sm:block"/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Ujian Tengah/Akhir Semester?</span>
            </h1>
            
            <p class="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2">
                Jadwal kuliah padat, capek pulang kerja, ditambah tumpukan tugas makalah, esai, dan PPT yang deadlinenya besok pagi? Jangan sampai IPK hancur! Biarkan tenaga akademik kami menyelesaikannya untuk Anda dengan kualitas <strong>A+ Grade</strong>.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center px-4 lg:px-0">
                <a href="https://wa.me/6281770450775" class="w-full sm:w-auto bg-purple-600 text-white text-base sm:text-lg font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-3">
                    <i class="fa-solid fa-paper-plane text-xl"></i> Kirim Soal Tugas
                </a>
                <a href="#jenis" class="w-full sm:w-auto bg-white text-purple-700 border-2 border-purple-200 text-base sm:text-lg font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-3">
                    Lihat Daftar Harga
                </a>
            </div>
            
            <div class="mt-8 sm:mt-10 flex justify-center gap-6">
                <div class="flex items-center gap-2"><i class="fa-solid fa-star text-yellow-400 text-lg"></i><span class="font-bold text-sm sm:text-base text-slate-600">4.9/5 Rating Kepuasan Mahasiswa</span></div>
            </div>
        </div>
    </section>

    <!-- Masalah Mahasiswa -->
    <section class="py-12 sm:py-16 bg-slate-900 text-white text-center">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-purple-300 leading-snug">Berhenti Stres Begadang Mengerjakan Tugas yang Tidak Ada Habisnya!</h2>
            <p class="text-sm sm:text-base md:text-lg text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto">Waktu Anda lebih berharga difokuskan pada belajar ujian, bekerja secara full-time, berkumpul bersama keluarga, atau istirahat menjaga kesehatan mental.</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div class="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700 flex flex-col items-center justify-center">
                    <i class="fa-solid fa-clock text-2xl sm:text-3xl text-purple-400 mb-3"></i>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200">Bisa Deadline Super Mepet</span>
                </div>
                <div class="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700 flex flex-col items-center justify-center">
                    <i class="fa-solid fa-copy text-2xl sm:text-3xl text-purple-400 mb-3"></i>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200">Garansi Bebas Plagiasi</span>
                </div>
                <div class="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700 flex flex-col items-center justify-center">
                    <i class="fa-solid fa-laptop-code text-2xl sm:text-3xl text-purple-400 mb-3"></i>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200">Referensi Jurnal Internasional</span>
                </div>
                <div class="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700 flex flex-col items-center justify-center">
                    <i class="fa-solid fa-brain text-2xl sm:text-3xl text-purple-400 mb-3"></i>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200">Terhindar Dari Burnout</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Jenis Tugas & Harga -->
    <section id="jenis" class="py-16 md:py-24 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 sm:mb-16">
                <span class="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Daftar Layanan</span>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Tugas Apa Saja yang Kami Kerjakan?</h2>
                <div class="w-20 sm:w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <!-- Item 1 -->
                <div class="bg-white border border-slate-200 shadow-md hover:shadow-xl rounded-3xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300">
                    <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-5 text-purple-600 text-2xl">
                        <i class="fa-solid fa-file-word"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Makalah (Individu/Kel)</h3>
                    <p class="text-sm text-slate-600 mb-5 leading-relaxed flex-grow">Pembuatan makalah berstruktur (Bab 1, 2, 3). Menggunakan sitasi jurnal terbaru dan format margin/spasi yang sangat rapi.</p>
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                        <span class="text-xs text-slate-500 block mb-1">Estimasi Harga</span>
                        <span class="text-purple-700 font-bold text-lg">Mulai Rp 150.000</span>
                    </div>
                </div>
                
                <!-- Item 2 -->
                <div class="bg-white border-2 border-pink-100 shadow-xl rounded-3xl p-6 sm:p-8 flex flex-col h-full relative overflow-hidden transition-all duration-300 lg:-translate-y-2">
                    <div class="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-sm uppercase tracking-wider">Terfavorit</div>
                    <div class="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-5 text-pink-600 text-2xl">
                        <i class="fa-solid fa-desktop"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Presentasi PPT Menarik</h3>
                    <p class="text-sm text-slate-600 mb-5 leading-relaxed flex-grow">Tidak perlu copas isi makalah mentah-mentah. Kami buatkan slide infografis estetik, poin ringkas, dan transisi elegan.</p>
                    <div class="bg-pink-50 p-3 rounded-xl border border-pink-100 text-center mt-auto">
                        <span class="text-xs text-pink-500 block mb-1">Estimasi Harga</span>
                        <span class="text-pink-700 font-bold text-lg">Mulai Rp 5.000 / Slide</span>
                    </div>
                </div>
                
                <!-- Item 3 -->
                <div class="bg-white border border-slate-200 shadow-md hover:shadow-xl rounded-3xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300">
                    <div class="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-5 text-teal-600 text-2xl">
                        <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Review & Resume Jurnal</h3>
                    <p class="text-sm text-slate-600 mb-5 leading-relaxed flex-grow">Merangkum jurnal internasional berbahasa Inggris menjadi teks ringkas berbahasa Indonesia (Critical Journal Review).</p>
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center mt-auto">
                        <span class="text-xs text-slate-500 block mb-1">Estimasi Harga</span>
                        <span class="text-teal-700 font-bold text-lg">Mulai Rp 100.000</span>
                    </div>
                </div>
                
                <!-- Item 4 -->
                <div class="bg-white border border-slate-200 shadow-md hover:shadow-xl rounded-3xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300">
                    <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-5 text-indigo-600 text-2xl">
                        <i class="fa-solid fa-pen-nib"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Esai & Paper Opini</h3>
                    <p class="text-sm text-slate-600 mb-5 leading-relaxed flex-grow">Penulisan esai argumentatif dengan gagasan kritis. Cocok untuk tugas UAS (Take Home Exam) atau syarat beasiswa.</p>
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center mt-auto">
                        <span class="text-xs text-slate-500 block mb-1">Estimasi Harga</span>
                        <span class="text-indigo-700 font-bold text-lg">Mulai Rp 50.000 / Lbr</span>
                    </div>
                </div>
                
                <!-- Item 5 -->
                <div class="bg-white border border-slate-200 shadow-md hover:shadow-xl rounded-3xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300">
                    <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5 text-blue-600 text-2xl">
                        <i class="fa-solid fa-book-journal-whills"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Artikel Ilmiah Populer</h3>
                    <p class="text-sm text-slate-600 mb-5 leading-relaxed flex-grow">Pembuatan artikel untuk diterbitkan di blog/media massa. Ditulis dengan kaidah SEO-friendly maupun semi-formal akademik.</p>
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center mt-auto">
                        <span class="text-xs text-slate-500 block mb-1">Estimasi Harga</span>
                        <span class="text-blue-700 font-bold text-lg">Konsultasikan</span>
                    </div>
                </div>
                
                <!-- Guarantee Box -->
                <div class="bg-gradient-to-br from-purple-600 to-indigo-700 shadow-xl rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-center text-center h-full">
                    <i class="fa-solid fa-shield-halved text-4xl sm:text-5xl mb-4 text-purple-200"></i>
                    <h3 class="font-bold text-xl sm:text-2xl mb-3">Garansi Nilai Aman</h3>
                    <p class="text-purple-100 text-xs sm:text-sm mb-6 leading-relaxed flex-grow">Kami menggaransi bahwa tugas orisinal (bukan hasil copy-paste internet) dan disertai daftar pustaka valid, aman dari kecurigaan dosen.</p>
                    <a href="https://wa.me/6281770450775" class="bg-white text-purple-700 font-bold py-3 px-4 rounded-xl inline-block w-full hover:bg-slate-50 transition-colors shadow-md">Pesan Tugas Sekarang</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Factors -->
    <section class="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 bg-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-lg border border-slate-100">
                <div class="w-full lg:w-1/2 order-2 lg:order-1">
                    <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">Mengapa Mahasiswa Memilih Pena Elit untuk Tugas Mereka?</h3>
                    <ul class="space-y-5 text-slate-700 font-medium text-sm sm:text-base">
                        <li class="flex items-start gap-4">
                            <i class="fa-solid fa-circle-check text-green-500 text-xl mt-0.5 shrink-0"></i>
                            <span class="leading-relaxed"><strong>Tim Ahli (Expert):</strong> Tugas Anda TIDAK dikerjakan anak SMA/sekolah, melainkan oleh lulusan dan mahasiswa pascasarjana PTN ternama.</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <i class="fa-solid fa-circle-check text-green-500 text-xl mt-0.5 shrink-0"></i>
                            <span class="leading-relaxed"><strong>Bisa Kilat (Sistem SKS):</strong> Lupa ada tugas dan besok pagi mau dikumpulkan? Sistem Kebut Semalam kami siap mengeksekusi dalam 12 jam!</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <i class="fa-solid fa-circle-check text-green-500 text-xl mt-0.5 shrink-0"></i>
                            <span class="leading-relaxed"><strong>Anti Copas (Uji Turnitin):</strong> Kami benci plagiasi amatiran (hanya menyalin dari blog). Kami menggunakan parafrase kalimat. Bebas uji software.</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <i class="fa-solid fa-circle-check text-green-500 text-xl mt-0.5 shrink-0"></i>
                            <span class="leading-relaxed"><strong>Kerahasiaan Identitas:</strong> Data kampus, nama, NIM Anda, dan file soal tugas tidak akan pernah kami bocorkan. Privasi Anda terjamin.</span>
                        </li>
                    </ul>
                </div>
                <div class="w-full lg:w-1/2 order-1 lg:order-2">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=600" alt="Mahasiswa Mengerjakan Tugas Kuliah" class="rounded-2xl shadow-md w-full aspect-video lg:aspect-[4/3] object-cover">
                </div>
            </div>
        </div>
    </section>
</main>
    `
  },
  {
    filename: 'jasa-publikasi-jurnal-sinta.html',
    title: 'Jasa Publikasi Jurnal Sinta 1 - 6 (LoA Cepat & Pasti Terbit) | Pena Elit',
    desc: 'Layanan jasa publikasi jurnal nasional terakreditasi Sinta 1 hingga 6. Cocok untuk syarat kelulusan S1/S2/S3 dan kenaikan pangkat dosen. Garansi LoA cepat (Fast Track).',
    body: `
<main class="bg-white text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <!-- Background Overlay -->
        <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        <!-- Decorative Blur (Hidden on mobile) -->
        <div class="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        <div class="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div class="inline-flex items-center justify-center mb-6 px-4 sm:px-5 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-brand-400 font-bold text-xs sm:text-sm tracking-wider shadow-sm uppercase">
                <i class="fa-solid fa-book-open-reader mr-2"></i> Kemitraan OJS Nasional
            </div>
            
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 sm:mb-8 max-w-5xl mx-auto tracking-tight px-2">
                Publikasi Jurnal Nasional <br class="hidden sm:block"/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">Terakreditasi SINTA</span>
            </h1>
            
            <p class="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-light px-2">
                Terbebani syarat kelulusan S1/S2 yang mewajibkan publikasi ilmiah? Atau Dosen yang butuh Kum untuk Jafung? Kami memfasilitasi penerbitan jurnal Sinta 1 - 6 dengan <strong>Garansi LoA Fast Track!</strong>
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <a href="https://wa.me/6281770450775" class="w-full sm:w-auto bg-brand-600 text-white text-base sm:text-lg font-bold py-3.5 sm:py-4 px-6 sm:px-10 rounded-xl shadow-lg hover:bg-brand-700 transition-all flex items-center justify-center gap-3">
                    <i class="fa-brands fa-whatsapp text-xl sm:text-2xl"></i> Cek Ketersediaan Slot Jurnal
                </a>
            </div>
            
            <p class="mt-6 sm:mt-8 text-xs sm:text-sm text-slate-400 px-4">
                <i class="fa-solid fa-circle-exclamation text-brand-400 mr-1"></i> Kuota slot terbitan (Issue) jurnal sangat terbatas per bulan.
            </p>
        </div>
    </section>

    <!-- Masalah Submit Jurnal -->
    <section class="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">Mempublikasikan Jurnal Mandiri Itu Sangat Sulit & Lama</h2>
                <p class="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-2">Mensubmit artikel sendiri via OJS kampus menuntut kesabaran ekstra saat proses *peer-review*. Banyak mahasiswa terlambat wisuda karena naskahnya tertahan berbulan-bulan.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center h-full">
                    <div class="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-2xl mb-5"><i class="fa-solid fa-hourglass-half"></i></div>
                    <h3 class="font-bold text-lg sm:text-xl text-slate-900 mb-3">Antrean Publikasi Panjang</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Jurnal (Sinta 3, 4, 5) hanya menerbitkan 10-20 artikel per edisi, sedangkan yang mensubmit ribuan. Status naskah Anda bisa tertahan *"In Review"* selama 3-6 bulan tanpa pasti.</p>
                </div>
                <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center h-full">
                    <div class="w-14 h-14 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center text-2xl mb-5"><i class="fa-solid fa-file-code"></i></div>
                    <h3 class="font-bold text-lg sm:text-xl text-slate-900 mb-3">Format OJS & Template Rumit</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Setiap pengelola jurnal memiliki "Gaya Selingkung" (Template Word) yang sangat kaku. Salah sedikit mengatur margin atau sitasi, naskah otomatis di-Desk Reject editor.</p>
                </div>
                <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center h-full">
                    <div class="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-2xl mb-5"><i class="fa-solid fa-language"></i></div>
                    <h3 class="font-bold text-lg sm:text-xl text-slate-900 mb-3">Syarat Bahasa & Kualitas</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Jurnal bereputasi (Sinta 1 dan 2) mewajibkan artikel berbahasa Inggris akademik (Native Proofreading) dan menuntut novelty (kebaruan riset) yang sangat ketat.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Solusi Lengkap Layanan -->
    <section class="py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
                <div class="w-full lg:w-1/2">
                    <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">All In One Service</span>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">Kami Siapkan Semuanya, Dari Naskah Mentah Sampai LoA Terbit</h2>
                    <p class="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed px-1">
                        Anda tidak perlu pusing memikirkan template, terjemahan, atau bolak-balik email revisi jurnal. Layanan kami terintegrasi, Anda cukup terima beres LoA dan siap yudisium.
                    </p>
                    
                    <div class="space-y-6 sm:space-y-8">
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-base sm:text-lg mb-1">Konversi Skripsi ke Jurnal (Rewriting)</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Mengubah naskah skripsi tebal Anda (ratusan halaman) menjadi 10-15 halaman artikel jurnal padat berformat IMRaD (Introduction, Method, Result, Discussion).</p>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-base sm:text-lg mb-1">Format Template & Mendeley</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Kami mengatur layout Word menyesuaikan persis dengan gaya selingkung jurnal tujuan. Referensi juga akan dirapikan menggunakan aplikasi Mendeley.</p>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-language"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-base sm:text-lg mb-1">Translate & Proofreading</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Khusus jurnal Sinta 1-2, translator akademik kami akan menerjemahkan teks sehingga grammar lolos standar editor bahasa tingkat internasional.</p>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-file-signature"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-base sm:text-lg mb-1">Kemitraan Fast-Track (LoA Cepat)</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Berkat kemitraan kami dengan banyak institusi pengelola jurnal (OJS) se-Indonesia, kami bisa mengamankan slot LoA lebih cepat (kurang dari 1 bulan).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 mt-8 lg:mt-0 relative px-4 sm:px-8 lg:px-0">
                    <div class="relative w-full max-w-lg mx-auto lg:max-w-none">
                        <!-- Make the image height auto and use aspect ratio to prevent rigid heights breaking layout -->
                        <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=900" alt="Publikasi Jurnal Ilmiah" class="rounded-3xl shadow-2xl object-cover w-full aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[700px]">
                        <!-- Badge Overlay (Hidden on extra small mobile screens to prevent clipping) -->
                        <div class="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 sm:gap-4 z-20">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Sinta_Logo.png" alt="Sinta Logo" class="h-10 sm:h-12 object-contain" onerror="this.style.display='none'">
                            <div>
                                <div class="font-black text-slate-900 text-lg sm:text-xl leading-tight">SINTA 1 s/d 6</div>
                                <div class="text-slate-500 text-xs sm:text-sm">Terakreditasi Dikti</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to action -->
    <section class="py-16 md:py-24 bg-slate-900 text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">Waktu Sangat Berharga, Jangan Menunda Publikasi.</h2>
            <p class="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">Kirimkan naskah Skripsi/Tesis Anda. Kami akan review secara GRATIS untuk menentukan jurnal Sinta mana yang paling cocok dan memiliki jadwal terbit terdekat.</p>
            <div class="px-4">
                <a href="https://wa.me/6281770450775" class="inline-flex items-center justify-center w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white text-lg sm:text-xl font-bold py-4 px-6 sm:px-10 rounded-xl sm:rounded-full shadow-lg sm:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all transform hover:scale-105 gap-3">
                    <i class="fa-solid fa-paper-plane text-xl"></i> Cek Slot Publikasi
                </a>
            </div>
            <p class="mt-8 text-slate-400 text-xs sm:text-sm px-4 leading-relaxed max-w-3xl mx-auto">
                *Biaya publikasi (Article Processing Charge) bervariasi bergantung pada peringkat (Sinta 1-6) dan kebijakan penerbit (Publisher) jurnal tujuan.
            </p>
        </div>
    </section>
</main>
    `
  }
];

services.forEach(s => {
    let head = header.replace(/<title>.*<\/title>/, `<title>${s.title}</title>`);
    head = head.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${s.desc}">`);
    head = head.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${s.title}">`);
    head = head.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${s.desc}">`);
    
    const content = head + s.body + footer;
    fs.writeFileSync(path.join(__dirname, s.filename), content);
    console.log('Successfully rebuilt perfectly responsive ' + s.filename);
});

console.log('All 4 long-form service pages rebuilt with bulletproof responsive layout.');
