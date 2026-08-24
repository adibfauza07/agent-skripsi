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
<main class="bg-slate-50 text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden hero-pattern">
        <!-- Background Decorations -->
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-brand-100 opacity-50 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-100 opacity-50 blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
            <div class="text-center max-w-4xl mx-auto">
                <div class="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm tracking-wide shadow-sm">
                    <i class="fa-solid fa-graduation-cap text-brand-500 mr-2"></i> Konsultan Skripsi Profesional & Legal
                </div>
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6" style="line-height: 1.2;">
                    Solusi Cerdas Lulus Tepat Waktu <br class="hidden md:block"/>
                    <span class="gradient-text">Tanpa Pusing Revisi</span>
                </h1>
                
                <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                    Kami memahami lelahnya menghadapi dosen pembimbing yang sulit ditemui dan pengolahan data yang rumit. Serahkan naskah Anda pada Pena Elit, kami kawal sampai sah menjadi Sarjana!
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="https://wa.me/6281770450775" target="_blank" class="w-full sm:w-auto btn-gold text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        <i class="fa-brands fa-whatsapp text-2xl"></i> Konsultasi Gratis
                    </a>
                    <a href="#harga" class="w-full sm:w-auto bg-white border-2 border-brand-900 text-brand-900 hover:bg-brand-50 text-lg font-bold py-3.5 px-8 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3">
                        Lihat Harga
                    </a>
                </div>
                
                <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-500">
                    <span class="flex items-center gap-2"><i class="fa-solid fa-shield-halved text-green-500 text-lg"></i> Privasi 100% Aman</span>
                    <span class="flex items-center gap-2"><i class="fa-solid fa-clock text-blue-500 text-lg"></i> Tepat Waktu</span>
                    <span class="flex items-center gap-2"><i class="fa-solid fa-check-double text-brand-500 text-lg"></i> Turnitin &lt; 20%</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Agitation / Pain Points -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Problematika Mahasiswa</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Apakah Anda Mengalami Situasi Ini?</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Card 1 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="0">
                    <div class="w-14 h-14 bg-red-100 text-red-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-file-circle-xmark"></i></div>
                    <h3 class="font-bold text-slate-900 text-xl mb-3">Judul Ditolak Terus</h3>
                    <p class="text-slate-600 text-sm flex-grow leading-relaxed">Sudah mengajukan puluhan judul ke Kaprodi tapi selalu di-reject karena dianggap kurang "novelty" atau tidak ada masalah penelitian.</p>
                </div>
                <!-- Card 2 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-14 h-14 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-person-harassing"></i></div>
                    <h3 class="font-bold text-slate-900 text-xl mb-3">Dosen Pembimbing Sulit</h3>
                    <p class="text-slate-600 text-sm flex-grow leading-relaxed">Dosen super sibuk, sulit dihubungi, sering ghosting, atau memberikan coretan revisi yang sangat membingungkan.</p>
                </div>
                <!-- Card 3 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-chart-line"></i></div>
                    <h3 class="font-bold text-slate-900 text-xl mb-3">Stuck Pengolahan Data</h3>
                    <p class="text-slate-600 text-sm flex-grow leading-relaxed">Skripsi terhenti total di Bab 4 karena bingung pakai SPSS/SmartPLS, atau data kuesioner terbukti tidak valid.</p>
                </div>
                <!-- Card 4 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-14 h-14 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-briefcase"></i></div>
                    <h3 class="font-bold text-slate-900 text-xl mb-3">Sibuk Bekerja</h3>
                    <p class="text-slate-600 text-sm flex-grow leading-relaxed">Tidak punya waktu berjam-jam sehari untuk membaca jurnal internasional karena lelah bekerja full-time.</p>
                </div>
            </div>
            
            <div class="mt-16 bg-gradient-to-br from-brand-50 to-blue-50 p-8 md:p-10 rounded-3xl border border-brand-100 shadow-sm text-center" data-aos="fade-up">
                <h3 class="text-2xl md:text-3xl font-bold text-brand-900 mb-4">Jangan Biarkan Skripsi Menghambat Karir Anda!</h3>
                <p class="text-lg text-slate-700">Pena Elit hadir sebagai "Dosen Bayangan" yang siap mengeksekusi semua masalah teknis naskah Anda.</p>
            </div>
        </div>
    </section>

    <!-- Layanan Kami -->
    <section class="py-20 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Solusi Lengkap</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Apa Saja yang Akan Kami Kerjakan?</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="space-y-16">
                <!-- Row 1 -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100 flex flex-col lg:flex-row gap-10 items-center" data-aos="fade-up">
                    <div class="w-full lg:w-1/2">
                        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=600" alt="Penulisan Proposal Skripsi" class="rounded-2xl object-cover w-full shadow-md animate-float">
                    </div>
                    <div class="w-full lg:w-1/2">
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Pembuatan Judul & Proposal (Bab 1-3)</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Kami akan menyusun Latar Belakang yang tajam dengan fenomena masalah empiris, menentukan Research Gap yang jelas, merumuskan hipotesis, dan merancang metodologi penelitian yang tepat. Proposal Anda akan siap tempur di Sidang Sempro.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                            <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><i class="fa-solid fa-check"></i></div> 3 Opsi Judul Gratis</div>
                            <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><i class="fa-solid fa-check"></i></div> Jurnal Internasional</div>
                            <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><i class="fa-solid fa-check"></i></div> Draft PPT Sidang</div>
                            <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><i class="fa-solid fa-check"></i></div> Referensi Mendeley</div>
                        </div>
                    </div>
                </div>
                
                <!-- Row 2 -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100 flex flex-col lg:flex-row-reverse gap-10 items-center" data-aos="fade-up">
                    <div class="w-full lg:w-1/2">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600" alt="Olah Data Skripsi" class="rounded-2xl object-cover w-full shadow-md hover:-translate-y-2 transition-transform duration-500">
                    </div>
                    <div class="w-full lg:w-1/2">
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Olah Data SPSS & Analisis Bab 4-5</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Tim statistikawan kami ahlinya mengatasi data bermasalah. Kami melakukan tabulasi data, uji instrumen, asumsi klasik, regresi, hingga merangkai angka output tersebut menjadi narasi pembahasan komprehensif di Bab 4 dan 5.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                            <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center"><i class="fa-solid fa-check"></i></div> SPSS, SmartPLS, AMOS</div>
                            <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center"><i class="fa-solid fa-check"></i></div> Terapi Data Valid</div>
                            <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center"><i class="fa-solid fa-check"></i></div> Interpretasi Bab 4</div>
                            <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center"><i class="fa-solid fa-check"></i></div> Edukasi Baca Data</div>
                        </div>
                    </div>
                </div>
                
                <!-- Row 3 -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100 flex flex-col lg:flex-row gap-10 items-center" data-aos="fade-up">
                    <div class="w-full lg:w-1/2">
                        <div class="w-full h-[300px] bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-8 shadow-2xl relative overflow-hidden group">
                            <div class="absolute inset-0 bg-brand-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <i class="fa-solid fa-magnifying-glass-chart text-5xl mb-6 text-green-400 group-hover:scale-125 transition-transform duration-500"></i>
                            <div class="text-5xl font-black relative z-10">&lt; 20%</div>
                            <div class="text-slate-300 text-sm mt-3 relative z-10">Similarity Index Turnitin</div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Parafrase Penurunan Skor Turnitin</h3>
                        <p class="text-slate-600 leading-relaxed text-lg">
                            Jika naskah Anda penuh plagiasi (di atas 30%), Anda bisa dituduh menjiplak. Kami melayani perombakan struktur kalimat (parafrase) secara manual tanpa mengubah makna, sehingga skor Turnitin Anda dipastikan aman dan lolos standar kampus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Harga & Paket -->
    <section id="harga" class="py-20 bg-brand-900 text-white relative overflow-hidden">
        <!-- Abstract background shape -->
        <div class="absolute opacity-10 top-0 left-0 w-full h-full" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-accent-400 font-bold tracking-wider uppercase text-sm mb-2 block">Daftar Harga Transparan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Investasi Terjangkau & Bisa Dicicil</h2>
                <p class="text-brand-100 max-w-2xl mx-auto">Sistem pembayaran bertahap (per termin) sesuai progres pengerjaan naskah Anda.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Paket 1 -->
                <div class="bg-white text-slate-800 rounded-2xl p-8 shadow-xl flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="0">
                    <h3 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Paket Sempro <br/><span class="text-sm text-slate-500 font-normal">Bab 1, 2, 3</span></h3>
                    <div class="text-3xl font-black text-brand-600 mb-2">Mulai 1.2 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung riset.</p>
                    <ul class="space-y-4 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Penulisan Full Bab 1-3</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Daftar Pustaka Otomatis</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Bonus PPT Sidang</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Garansi Revisi</span></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center border-2 border-brand-900 text-brand-900 hover:bg-brand-50 font-bold py-3 rounded-xl transition-colors mt-auto">Tanya Admin</a>
                </div>
                
                <!-- Paket 2 -->
                <div class="bg-white text-slate-800 rounded-2xl p-8 shadow-xl flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="100">
                    <h3 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Paket Olah Data <br/><span class="text-sm text-slate-500 font-normal">Bab 4 & 5</span></h3>
                    <div class="text-3xl font-black text-brand-600 mb-2">Mulai 1.5 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung software.</p>
                    <ul class="space-y-4 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Tabulasi Data Mentah</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Output Uji Lengkap</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Penulisan Narasi Bab 4-5</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Bimbingan Baca Data</span></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center border-2 border-brand-900 text-brand-900 hover:bg-brand-50 font-bold py-3 rounded-xl transition-colors mt-auto">Tanya Admin</a>
                </div>
                
                <!-- Paket 3 (Laris) -->
                <div class="bg-gradient-to-b from-brand-50 to-white text-slate-800 rounded-2xl p-8 shadow-2xl flex flex-col h-full border-2 border-brand-500 relative transform transition-all duration-300 lg:scale-110 lg:-translate-y-4 z-10" data-aos="zoom-in" data-aos-delay="200">
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">Paling Dicari</div>
                    <h3 class="text-xl font-bold text-brand-900 border-b border-brand-200 pb-4 mb-4 mt-2">Full Service <br/><span class="text-sm text-brand-700 font-normal">Terima Beres Bab 1-5</span></h3>
                    <div class="text-3xl font-black text-brand-700 mb-2">Mulai 3.5 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Sistem cicil / termin.</p>
                    <ul class="space-y-4 mb-8 text-sm text-slate-800 flex-grow font-medium">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-star text-accent-500 mt-0.5"></i> <span>Penulisan Judul s/d Bab 5</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-star text-accent-500 mt-0.5"></i> <span>Olah Data Kuantitatif/Kual</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-star text-accent-500 mt-0.5"></i> <span>Lolos Plagiasi Turnitin</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-star text-accent-500 mt-0.5"></i> <strong class="text-brand-700">Garansi ACC Sidang</strong></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center btn-lux rounded-full text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg mt-auto hover:-translate-y-1 transform">Ambil Full Service</a>
                </div>
                
                <!-- Paket 4 -->
                <div class="bg-white text-slate-800 rounded-2xl p-8 shadow-xl flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="300">
                    <h3 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Turnitin & Format <br/><span class="text-sm text-slate-500 font-normal">Perapihan Naskah</span></h3>
                    <div class="flex items-end gap-1 mb-2">
                        <div class="text-3xl font-black text-brand-600">Mulai 15rb</div>
                        <div class="text-sm text-slate-500 font-medium mb-1">/Lbr</div>
                    </div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung skor awal.</p>
                    <ul class="space-y-4 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Parafrase Manual &lt; 20%</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Cek Typo & Margin Word</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Daftar Isi Otomatis</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> <span>Tersedia Kilat 24 Jam</span></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center border-2 border-brand-900 text-brand-900 hover:bg-brand-50 font-bold py-3 rounded-xl transition-colors mt-auto">Tanya Admin</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Workflow -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cara Memulai Pemesanan</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Step 1 -->
                <div class="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col h-full" data-aos="fade-up" data-aos-delay="0">
                    <div class="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"><i class="fa-brands fa-whatsapp"></i></div>
                    <h4 class="font-bold text-xl text-slate-900 mb-3">1. Konsultasi</h4>
                    <p class="text-slate-600 flex-grow text-sm leading-relaxed">Kirimkan pedoman kampus dan topik Anda ke Admin secara Gratis.</p>
                </div>
                <!-- Step 2 -->
                <div class="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"><i class="fa-solid fa-handshake"></i></div>
                    <h4 class="font-bold text-xl text-slate-900 mb-3">2. DP Transparan</h4>
                    <p class="text-slate-600 flex-grow text-sm leading-relaxed">Cukup bayar Down Payment (DP) sebagai tanda jadi, tim langsung bekerja.</p>
                </div>
                <!-- Step 3 -->
                <div class="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"><i class="fa-solid fa-file-signature"></i></div>
                    <h4 class="font-bold text-xl text-slate-900 mb-3">3. Review per Bab</h4>
                    <p class="text-slate-600 flex-grow text-sm leading-relaxed">Setiap 1 bab selesai, dikirim untuk dibimbingankan. Bayar bertahap.</p>
                </div>
                <!-- Step 4 -->
                <div class="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col h-full" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"><i class="fa-solid fa-medal"></i></div>
                    <h4 class="font-bold text-xl text-slate-900 mb-3">4. Revisi ACC</h4>
                    <p class="text-slate-600 flex-grow text-sm leading-relaxed">Perbaikan revisi dosen gratis sampai naskah Anda dinyatakan lulus (ACC).</p>
                </div>
            </div>
            
            <div class="mt-16 text-center" data-aos="zoom-in">
                <a href="https://wa.me/6281770450775" target="_blank" class="inline-flex items-center justify-center gap-3 btn-lux rounded-full text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                    <i class="fa-solid fa-phone-volume text-2xl"></i> Hubungi Admin Sekarang
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
<main class="bg-slate-50 text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden hero-pattern">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-100 opacity-50 blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1" data-aos="fade-right">
                    <div class="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm tracking-wide shadow-sm">
                        <i class="fa-solid fa-file-word text-blue-500 mr-2"></i> Spesialis Format Dokumen Word
                    </div>
                    
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6" style="line-height: 1.2;">
                        Pusing Naskah Skripsi <br class="hidden md:block"/>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Tampil Berantakan?</span>
                    </h1>
                    
                    <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                        Capek mikirin materi, ditambah stres ngurusin halaman Romawi, daftar isi manual, dan margin geser? Serahkan urusan teknis format Word pada ahlinya. <strong>Selesai dalam hitungan jam!</strong>
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                        <a href="https://wa.me/628211541284" target="_blank" class="w-full sm:w-auto btn-gold text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                            <i class="fa-brands fa-whatsapp text-2xl"></i> Rapikan Naskah Saya
                        </a>
                    </div>
                    
                    <div class="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-500">
                        <span class="flex items-center gap-2"><i class="fa-solid fa-bolt text-accent-500 text-lg"></i> Express 24 Jam</span>
                        <span class="flex items-center gap-2"><i class="fa-solid fa-check-circle text-green-500 text-lg"></i> 100% Sesuai Pedoman</span>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
                    <div class="relative w-full">
                        <div class="absolute inset-0 bg-blue-500 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                        <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800&h=600" alt="Edit Format Skripsi Word" class="relative rounded-3xl shadow-2xl border border-white z-10 w-full object-cover animate-float">
                        
                        <div class="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 items-center gap-4">
                            <i class="fa-solid fa-file-circle-check text-4xl text-green-500"></i>
                            <div>
                                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Garansi 100%</p>
                                <p class="text-base font-bold text-slate-900">Rapi & Presisi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mengapa Format Penting -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kenapa Skripsi Dicoret Gara-Gara Format?</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full mb-6"></div>
                <p class="text-lg text-slate-600 max-w-3xl mx-auto">Banyak dosen perfeksionis. Walau isinya bagus, jika margin & spasi asal-asalan, mood dosen hancur sebelum membaca.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="0">
                    <div class="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-list-dots"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Daftar Isi Manual = Bencana</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Mengetik titik-titik manual sangat melelahkan. Ada perubahan teks, nomor halaman bergeser, edit lagi dari awal.</p>
                </div>
                <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-file-excel"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Penomoran Halaman Error</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Sampul ikut bernomor, Romawi tercampur Angka Arab, urutan Bab berantakan karena salah fitur Section Break.</p>
                </div>
                <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-book-journal-whills"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Daftar Pustaka Copas</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Kewajiban Mendeley/Zotero diabaikan. Mengetik manual berisiko format penulisan (APA/Harvard) salah fatal.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Fitur Layanan -->
    <section class="py-20 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Cakupan Layanan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Kami Merapikan Keseluruhan Naskah Anda</h2>
                <div class="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Fitur -->
                <div class="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-2xl border border-slate-100 shadow-md card-hover group" data-aos="fade-up">
                    <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform"><i class="fa-solid fa-list-ol"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Otomatisasi (Automation)</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Pembuatan Daftar Isi Otomatis, Gambar, dan Lampiran dengan Headings. Cukup klik *Update Table*.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-2xl border border-slate-100 shadow-md card-hover group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform"><i class="fa-solid fa-file-lines"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Pemisahan & Penomoran</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Menata struktur halaman (Sampul tanpa nomor, Romawi di bawah, Bab di atas). Memanipulasi Section Break Word.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-2xl border border-slate-100 shadow-md card-hover group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform"><i class="fa-solid fa-paragraph"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Layouting Margin & Spasi</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Margin 4-4-3-3, spasi 1.5, justify tanpa rongga jelek, indentasi seragam, font standar rapi konsisten.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-2xl border border-slate-100 shadow-md card-hover group" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform"><i class="fa-solid fa-graduation-cap"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Sitasi Mendeley</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Konversi kutipan teks manual menjadi sistem sitasi referensi otomatis menggunakan Mendeley (APA/IEEE/Harvard).</p>
                    </div>
                </div>
            </div>
            
            <!-- Pricing CTA -->
            <div class="mt-20 relative rounded-3xl overflow-hidden shadow-2xl" data-aos="zoom-in">
                <div class="absolute inset-0 bg-blue-600"></div>
                <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
                <div class="relative z-10 p-10 md:p-16 text-center text-white">
                    <h3 class="text-3xl md:text-5xl font-extrabold mb-6">Mulai dari Rp 5.000 / Lembar Saja!</h3>
                    <p class="text-blue-100 text-lg md:text-xl mb-10 max-w-3xl mx-auto">Terjangkau untuk mahasiswa. Lampirkan file Word Anda dan Buku Pedoman Skripsi (PDF). Selesai secara kilat.</p>
                    <a href="https://wa.me/628211541284" target="_blank" class="inline-flex items-center justify-center gap-3 bg-white text-blue-700 text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                        <i class="fa-brands fa-whatsapp text-2xl"></i> Konsultasikan Naskah Word Anda
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
<main class="bg-slate-50 text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden hero-pattern">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-100 opacity-50 blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center" data-aos="fade-up">
            
            <div class="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 font-semibold text-sm tracking-wide shadow-sm">
                <i class="fa-solid fa-bolt text-purple-500 mr-2"></i> Layanan Kilat & Anti Plagiat
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto" style="line-height: 1.2;">
                Tugas Kuliah Menumpuk di Masa <br class="hidden md:block"/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Ujian Tengah/Akhir Semester?</span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Jadwal kuliah padat, ditambah tumpukan tugas makalah, esai, dan PPT deadlinenya besok pagi? Jangan korbankan IPK! Biarkan tenaga akademik kami menyelesaikannya dengan kualitas <strong>A+ Grade</strong>.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/6281770450775" target="_blank" class="w-full sm:w-auto btn-gold text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                    <i class="fa-solid fa-paper-plane"></i> Kirim Soal Tugas
                </a>
                <a href="#jenis" class="w-full sm:w-auto bg-white border-2 border-brand-900 text-brand-900 hover:bg-brand-50 text-lg font-bold py-3.5 px-8 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3">
                    Lihat Daftar Harga
                </a>
            </div>
            
            <div class="mt-10 flex justify-center items-center gap-3">
                <div class="flex text-accent-500 text-lg"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <span class="font-bold text-slate-600">4.9/5 Rating Mahasiswa</span>
            </div>
        </div>
    </section>

    <!-- Masalah Mahasiswa -->
    <section class="py-16 bg-brand-900 text-white text-center relative overflow-hidden">
        <div class="absolute opacity-10 top-0 left-0 w-full h-full" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Berhenti Stres Begadang Mengerjakan Tugas!</h2>
            <p class="text-lg text-brand-100 mb-12 max-w-3xl mx-auto">Waktu berharga Anda lebih baik difokuskan pada belajar ujian, bekerja full-time, atau menjaga kesehatan mental.</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-brand-800 p-6 rounded-2xl border border-brand-700">
                    <i class="fa-solid fa-clock text-4xl text-accent-400 mb-4"></i>
                    <h3 class="font-bold text-white text-sm md:text-base">Deadline Mepet (SKS)</h3>
                </div>
                <div class="bg-brand-800 p-6 rounded-2xl border border-brand-700">
                    <i class="fa-solid fa-shield-halved text-4xl text-accent-400 mb-4"></i>
                    <h3 class="font-bold text-white text-sm md:text-base">Garansi Lolos Turnitin</h3>
                </div>
                <div class="bg-brand-800 p-6 rounded-2xl border border-brand-700">
                    <i class="fa-solid fa-laptop-code text-4xl text-accent-400 mb-4"></i>
                    <h3 class="font-bold text-white text-sm md:text-base">Referensi Jurnal Kuat</h3>
                </div>
                <div class="bg-brand-800 p-6 rounded-2xl border border-brand-700">
                    <i class="fa-solid fa-brain text-4xl text-accent-400 mb-4"></i>
                    <h3 class="font-bold text-white text-sm md:text-base">Bebas Burnout Kuliah</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Jenis Tugas & Harga -->
    <section id="jenis" class="py-20 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Daftar Layanan & Harga</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Tugas Apa Saja yang Kami Kerjakan?</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Item 1 -->
                <div class="bg-white border border-slate-100 shadow-lg hover:shadow-xl rounded-3xl p-8 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="0">
                    <div class="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6 text-brand-600 text-3xl group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-file-word"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Makalah (Individu/Kel)</h3>
                    <p class="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">Pembuatan makalah berstruktur (Bab 1-3). Menggunakan sitasi jurnal terbaru dan format super rapi.</p>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center mt-auto">
                        <span class="text-xs text-slate-500 block mb-1">Mulai Dari</span>
                        <span class="text-brand-700 font-black text-xl">Rp 150.000</span>
                    </div>
                </div>
                
                <!-- Item 2 -->
                <div class="bg-gradient-to-b from-brand-50 to-white border-2 border-brand-500 shadow-2xl rounded-3xl p-8 flex flex-col h-full relative lg:-translate-y-4 transform transition-all duration-300 lg:scale-105 z-10" data-aos="zoom-in" data-aos-delay="100">
                    <div class="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md uppercase">Terfavorit</div>
                    <div class="w-16 h-16 bg-white border border-brand-100 rounded-2xl flex items-center justify-center mb-6 text-accent-500 text-3xl">
                        <i class="fa-solid fa-desktop"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Presentasi PPT Menarik</h3>
                    <p class="text-sm text-slate-700 mb-6 leading-relaxed flex-grow">Tidak perlu copas isi makalah. Kami buatkan slide infografis estetik, poin ringkas, dan transisi elegan.</p>
                    <div class="bg-brand-600 text-white p-4 rounded-xl text-center mt-auto shadow-md">
                        <span class="text-xs text-brand-100 block mb-1">Mulai Dari</span>
                        <span class="font-black text-xl">Rp 5.000 / Slide</span>
                    </div>
                </div>
                
                <!-- Item 3 -->
                <div class="bg-white border border-slate-100 shadow-lg hover:shadow-xl rounded-3xl p-8 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 text-3xl group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Review & Resume Jurnal</h3>
                    <p class="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">Merangkum jurnal internasional bahasa Inggris jadi teks ringkas bahasa Indonesia (Critical Journal Review).</p>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center mt-auto">
                        <span class="text-xs text-slate-500 block mb-1">Mulai Dari</span>
                        <span class="text-blue-700 font-black text-xl">Rp 100.000</span>
                    </div>
                </div>
                
                <!-- Item 4 -->
                <div class="bg-white border border-slate-100 shadow-lg hover:shadow-xl rounded-3xl p-8 flex flex-col h-full card-hover group" data-aos="fade-up" data-aos-delay="0">
                    <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-3xl group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-pen-nib"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Esai & Paper Opini</h3>
                    <p class="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">Penulisan esai argumentatif dengan gagasan kritis. Cocok untuk UAS (Take Home Exam) atau beasiswa.</p>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center mt-auto">
                        <span class="text-xs text-slate-500 block mb-1">Mulai Dari</span>
                        <span class="text-green-700 font-black text-xl">Rp 50.000 / Lbr</span>
                    </div>
                </div>
                
                <!-- Guarantee Box spanning 2 cols on md/lg -->
                <div class="md:col-span-2 bg-slate-900 shadow-xl rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center gap-8 card-hover" data-aos="fade-up" data-aos-delay="100">
                    <div class="text-center md:text-left flex-grow">
                        <div class="inline-flex bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Garansi A+</div>
                        <h3 class="font-bold text-2xl lg:text-3xl mb-3">Tugas Bebas Plagiasi</h3>
                        <p class="text-slate-300 text-sm lg:text-base leading-relaxed">Tugas murni diketik orisinal (bukan copy-paste), dengan referensi valid. Aman dari kecurigaan Dosen Pengampu.</p>
                    </div>
                    <div class="shrink-0 w-full md:w-auto">
                        <a href="https://wa.me/6281770450775" target="_blank" class="w-full text-center btn-lux rounded-full text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 block">Pesan Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Factors -->
    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
                <div class="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
                    <h3 class="text-3xl font-bold text-slate-900 mb-8">Mengapa Mahasiswa Memilih Pena Elit?</h3>
                    <ul class="space-y-6 text-slate-700 text-base">
                        <li class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5"><i class="fa-solid fa-check"></i></div>
                            <span class="leading-relaxed"><strong>Tim Ahli (Expert):</strong> Dikerjakan oleh tenaga akademik PTN, bukan anak magang/SMA.</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5"><i class="fa-solid fa-check"></i></div>
                            <span class="leading-relaxed"><strong>Sistem Kebut Semalam (SKS):</strong> Lupa ada tugas? Tim siap eksekusi cepat dalam hitungan jam.</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5"><i class="fa-solid fa-check"></i></div>
                            <span class="leading-relaxed"><strong>Anti Copas (Turnitin safe):</strong> Kami memparafrase teks agar lolos uji Turnitin kampus.</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5"><i class="fa-solid fa-check"></i></div>
                            <span class="leading-relaxed"><strong>Rahasia Identitas:</strong> Data kampus, NIM, dan file tugas tidak akan pernah bocor.</span>
                        </li>
                    </ul>
                </div>
                <div class="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=600" alt="Mahasiswa Mengerjakan Tugas Kuliah" class="rounded-2xl shadow-xl w-full object-cover animate-float">
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
<main class="bg-slate-50 text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <!-- Background Overlay -->
        <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center" data-aos="fade-up">
            
            <div class="inline-flex items-center justify-center mb-6 px-5 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-brand-400 font-bold text-sm tracking-wider shadow-sm uppercase">
                <i class="fa-solid fa-book-open-reader mr-2"></i> Kemitraan OJS Nasional
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8 max-w-5xl mx-auto tracking-tight" style="line-height: 1.1;">
                Publikasi Jurnal Nasional <br class="hidden md:block"/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">Terakreditasi SINTA</span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                Terbebani syarat kelulusan S1/S2 yang mewajibkan publikasi ilmiah? Atau Dosen yang butuh Kum? Kami memfasilitasi penerbitan jurnal Sinta 1 - 6 dengan <strong>Garansi LoA Fast Track!</strong>
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/6281770450775" target="_blank" class="w-full sm:w-auto btn-gold text-lg font-bold py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                    <i class="fa-solid fa-paper-plane text-xl"></i> Cek Slot Publikasi Tersedia
                </a>
            </div>
        </div>
    </section>

    <!-- Masalah Submit Jurnal -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Realita Lapangan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mempublikasikan Jurnal Sendiri Itu Sangat Lama</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 text-center card-hover group" data-aos="fade-up" data-aos-delay="0">
                    <div class="w-16 h-16 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-hourglass-half"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Antrean Panjang</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Jurnal hanya menerbitkan 10-20 artikel per edisi, yang mensubmit ribuan. Status naskah sering tertahan *"In Review"* berbulan-bulan.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 text-center card-hover group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-file-code"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">OJS & Template Rumit</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Gaya Selingkung tiap jurnal sangat kaku. Salah sedikit atur margin/sitasi Mendeley, naskah otomatis di-Desk Reject editor.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 text-center card-hover group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-language"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Syarat Bahasa Ketat</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Jurnal bereputasi (Sinta 1/2) wajib berbahasa Inggris grammar Native dan menuntut novelty (kebaruan) sangat tinggi.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Solusi Lengkap Layanan -->
    <section class="py-20 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
                <div class="w-full lg:w-1/2" data-aos="fade-right">
                    <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">All In One Service</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Terima Beres Dari Naskah Mentah Sampai LoA Terbit</h2>
                    <p class="text-lg text-slate-600 mb-10 leading-relaxed">
                        Anda tidak perlu pusing memikirkan template, terjemahan, atau bolak-balik revisi jurnal. Layanan kami terintegrasi sampai LoA di tangan.
                    </p>
                    
                    <div class="space-y-8">
                        <div class="flex items-start gap-5">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-lg mb-1">Rewriting (Skripsi ke Jurnal)</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Mengubah skripsi tebal jadi 10-15 halaman artikel IMRaD (Introduction, Method, Result, Discussion) padat.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-5">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-lg mb-1">Format Template & Mendeley</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Kami sesuaikan layout Word dengan gaya selingkung jurnal tujuan. Referensi auto-Mendeley.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-5">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-language"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-lg mb-1">Translate & Proofreading</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Khusus Sinta atas, naskah diterjemahkan agar lolos standar grammar bahasa Inggris akademik.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-5">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-bolt"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-lg mb-1">Kemitraan Fast-Track (LoA)</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">Jalur kemitraan kami dengan pengelola OJS mempercepat turunnya Letter of Acceptance (LoA).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2" data-aos="fade-left">
                    <div class="relative w-full">
                        <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=900" alt="Publikasi Jurnal Ilmiah" class="rounded-3xl shadow-2xl object-cover w-full h-[600px] animate-float">
                        <div class="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 items-center gap-4 z-20">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Sinta_Logo.png" alt="Sinta Logo" class="h-12 object-contain" onerror="this.style.display='none'">
                            <div>
                                <div class="font-black text-slate-900 text-xl leading-tight">SINTA 1 - 6</div>
                                <div class="text-slate-500 text-sm font-medium">Terakreditasi Dikti</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to action -->
    <section class="py-20 bg-brand-900 text-white text-center border-t border-brand-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Waktu Sangat Berharga. Segera Amankan Slot!</h2>
            <p class="text-lg text-brand-100 mb-10 max-w-2xl mx-auto">Kirimkan Skripsi/Tesis Anda. Kami review GRATIS untuk dicarikan jurnal Sinta yang memiliki jadwal terbit (Issue) terdekat.</p>
            
            <a href="https://wa.me/6281770450775" target="_blank" class="inline-flex items-center justify-center w-full sm:w-auto btn-lux rounded-full text-white text-lg font-bold py-4 px-10 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 gap-3">
                <i class="fa-brands fa-whatsapp text-2xl"></i> Hubungi Admin Sinta
            </a>
            
            <p class="mt-8 text-brand-200 text-sm max-w-2xl mx-auto">
                *Biaya Article Processing Charge (APC) bervariasi bergantung peringkat Sinta (1-6) dan kebijakan publisher tujuan.
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
    console.log('Successfully rebuilt highly aesthetic ' + s.filename);
});

console.log('All 4 long-form service pages rebuilt matching index.html aesthetic.');
