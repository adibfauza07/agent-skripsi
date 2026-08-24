const fs = require('fs');
const path = require('path');

const header = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footer = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const services = [
  {
    filename: 'jasa-skripsi-purwakarta.html',
    title: 'Jasa Bimbingan & Joki Skripsi Terpercaya (Bergaransi Lulus ACC)',
    desc: 'Layanan jasa pembuatan dan bimbingan skripsi lengkap Bab 1-5, olah data, dan revisi dosen. Bergaransi bebas plagiasi (Turnitin), aman, dan privasi 100% terjaga.',
    body: `
<main class="bg-white overflow-hidden text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-brand-100 opacity-50 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-100 opacity-50 blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-white border border-brand-200 text-brand-700 font-bold text-sm tracking-wide shadow-sm">
                    <i class="fa-solid fa-graduation-cap text-yellow-500 mr-1"></i> Konsultan Skripsi Profesional & Legal
                </div>
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                    Solusi Cerdas Lulus Tepat Waktu <br/>
                    <span class="gradient-text">Tanpa Pusing Revisi & Beban Mental</span>
                </h1>
                
                <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                    Kami memahami betapa melelahkannya menghadapi dosen pembimbing yang sulit ditemui, pengolahan data SPSS yang rumit, dan tekanan <em>deadline</em> kelulusan. Serahkan naskah Anda pada Pena Elit, kami kawal dari nol hingga Anda resmi meraih gelar Sarjana!
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="https://wa.me/6281770450775" class="w-full sm:w-auto btn-gold text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3">
                        <i class="fa-brands fa-whatsapp text-2xl"></i> Konsultasi Judul Gratis
                    </a>
                    <a href="#harga" class="w-full sm:w-auto bg-white text-slate-700 border-2 border-slate-200 text-lg font-bold py-4 px-8 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                        Lihat Daftar Harga
                    </a>
                </div>
                
                <div class="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-semibold text-slate-600">
                    <span class="flex items-center gap-2"><i class="fa-solid fa-shield-halved text-green-500 text-lg"></i> Privasi 100% Aman</span>
                    <span class="flex items-center gap-2"><i class="fa-solid fa-clock text-blue-500 text-lg"></i> Tepat Waktu</span>
                    <span class="flex items-center gap-2"><i class="fa-solid fa-check-double text-brand-500 text-lg"></i> Turnitin < 20%</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Agitation / Pain Points -->
    <section class="py-16 md:py-24 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Apakah Anda Mengalami Situasi Ini?</h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">Menyusun skripsi seringkali menjadi fase paling membuat frustrasi selama kuliah. Anda tidak sendirian jika merasakan hal ini.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div class="text-red-500 text-4xl mb-4"><i class="fa-solid fa-file-circle-xmark"></i></div>
                    <h3 class="font-bold text-slate-800 text-lg mb-2">Judul Ditolak Terus</h3>
                    <p class="text-slate-600 text-sm">Sudah mengajukan puluhan judul ke Kaprodi tapi selalu di-reject karena dibilang kurang "novelty" atau tidak ada masalah penelitian yang jelas.</p>
                </div>
                <div class="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                    <div class="text-orange-500 text-4xl mb-4"><i class="fa-solid fa-person-harassing"></i></div>
                    <h3 class="font-bold text-slate-800 text-lg mb-2">Dosen Pembimbing Sulit</h3>
                    <p class="text-slate-600 text-sm">Dosen super sibuk, sulit dihubungi, sering *ghosting*, atau memberikan coretan revisi yang sangat membingungkan dan berubah-ubah.</p>
                </div>
                <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <div class="text-indigo-500 text-4xl mb-4"><i class="fa-solid fa-chart-line"></i></div>
                    <h3 class="font-bold text-slate-800 text-lg mb-2">Stuck Pengolahan Data</h3>
                    <p class="text-slate-600 text-sm">Skripsi terhenti total di Bab 4 karena buta huruf soal statistik, bingung pakai SPSS/SmartPLS, atau data kuesioner terbukti tidak valid/tidak normal.</p>
                </div>
                <div class="bg-slate-100 p-6 rounded-2xl border border-slate-200">
                    <div class="text-slate-500 text-4xl mb-4"><i class="fa-solid fa-briefcase"></i></div>
                    <h3 class="font-bold text-slate-800 text-lg mb-2">Sibuk Bekerja (Kelas Karyawan)</h3>
                    <p class="text-slate-600 text-sm">Tidak punya waktu 4-5 jam sehari untuk membaca jurnal internasional karena sudah lelah bekerja full-time sejak pagi hingga malam.</p>
                </div>
            </div>
            
            <div class="mt-12 text-center bg-brand-50 p-8 rounded-2xl border border-brand-100">
                <h3 class="text-2xl font-bold text-brand-900 mb-2">Jangan Biarkan Skripsi Menghambat Karir Anda!</h3>
                <p class="text-brand-700 mb-6">Pena Elit hadir sebagai "Dosen Bayangan" (Shadow Mentor) yang siap mengeksekusi semua masalah teknis naskah Anda.</p>
            </div>
        </div>
    </section>

    <!-- Layanan Kami -->
    <section class="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Solusi Lengkap</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Apa Saja yang Akan Kami Kerjakan?</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="space-y-8">
                <!-- Row 1 -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-md border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                    <div class="w-full md:w-1/3">
                        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=400" alt="Penulisan Proposal Skripsi" class="rounded-2xl object-cover w-full h-48 md:h-full shadow-sm">
                    </div>
                    <div class="w-full md:w-2/3">
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Pembuatan Judul & Proposal (Bab 1-3)</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Fondasi skripsi yang kuat berawal dari Bab 1. Kami akan menyusun Latar Belakang yang tajam dengan fenomena masalah empiris (didukung data pra-riset), menentukan *Research Gap* yang jelas, merumuskan hipotesis berdasarkan *Grand Theory* di Bab 2, dan merancang metodologi penelitian yang tepat di Bab 3. Hasilnya? Proposal yang sangat logis dan siap tempur di Sidang Sempro.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> Gratis 3 Opsi Judul</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> Rujukan Jurnal Internasional Terkini</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> Draft PPT Sidang Sempro</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> Daftar Pustaka via Mendeley</div>
                        </div>
                    </div>
                </div>
                
                <!-- Row 2 -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-md border border-slate-100 flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div class="w-full md:w-1/3">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400" alt="Olah Data Skripsi" class="rounded-2xl object-cover w-full h-48 md:h-full shadow-sm">
                    </div>
                    <div class="w-full md:w-2/3">
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Olah Data SPSS & Analisis Bab 4-5</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Bagian tersulit dari penelitian Kuantitatif adalah saat data yang diuji ternyata "Tidak Normal" atau "Tidak Signifikan". Tim statistikawan kami ahlinya mengatasi data bermasalah. Kami akan melakukan tabulasi data, uji instrumen (validitas/reliabilitas), uji asumsi klasik, regresi, hingga merangkai angka-angka *output* tersebut menjadi narasi pembahasan yang komprehensif di Bab 4.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-500"></i> Menguasai SPSS, SmartPLS, AMOS, EViews</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-500"></i> Terapi Data (Normalisasi Data Cacat)</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-500"></i> Interpretasi Hasil Lengkap (Bab 4)</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-500"></i> Edukasi Cara Baca Output untuk Sidang</div>
                        </div>
                    </div>
                </div>
                
                <!-- Row 3 -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-md border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                    <div class="w-full md:w-1/3">
                        <div class="w-full h-48 md:h-full bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 shadow-inner">
                            <i class="fa-solid fa-magnifying-glass-chart text-5xl mb-4 text-green-400"></i>
                            <div class="text-3xl font-black">15%</div>
                            <div class="text-slate-400 text-sm mt-1">Similarity Index</div>
                        </div>
                    </div>
                    <div class="w-full md:w-2/3">
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Parafrase Penurunan Skor Turnitin</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Sudah capek-capek mengetik tapi saat diuji lab kampus skor plagiasinya (Turnitin) di atas 50%? Jika naskah Anda penuh plagiasi, Anda bisa dituduh menjiplak. Kami memiliki layanan spesial merombak struktur kalimat (parafrase) secara manual tanpa mengubah esensi makna, sehingga skor similarity Turnitin Anda dijamin turun sesuai standar kampus (umumnya < 20%).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Harga & Paket (Transparent Pricing) -->
    <section id="harga" class="py-16 md:py-24 bg-brand-900 text-white relative overflow-hidden">
        <div class="absolute opacity-10 top-0 left-0 w-full h-full" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <span class="text-brand-300 font-bold tracking-wider uppercase text-sm mb-2 block">Daftar Harga & Paket Transparan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Investasi Terjangkau untuk Masa Depan Anda</h2>
                <p class="text-brand-100 max-w-2xl mx-auto">Kami mengerti kondisi finansial mahasiswa. Semua harga kami transparan dan <strong>bisa dicicil secara bertahap (per termin/per bab)</strong> sesuai progres pengerjaan.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Paket 1 -->
                <div class="bg-white text-slate-800 rounded-2xl p-6 shadow-xl flex flex-col transform hover:-translate-y-2 transition-transform">
                    <h3 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Paket Sempro <br/><span class="text-sm text-slate-500 font-normal">Pembuatan Bab 1, 2, 3</span></h3>
                    <div class="text-3xl font-black text-brand-600 mb-2">Mulai 1.2 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung jurusan & tingkat kesulitan riset.</p>
                    <ul class="space-y-3 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Penulisan Full Bab 1-3</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Daftar Pustaka Otomatis</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Bonus PPT Sidang Sempro</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Garansi Revisi Dosen Pembimbing</li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors">Tanya Admin</a>
                </div>
                <!-- Paket 2 -->
                <div class="bg-white text-slate-800 rounded-2xl p-6 shadow-xl flex flex-col transform hover:-translate-y-2 transition-transform relative">
                    <h3 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Paket Olah Data <br/><span class="text-sm text-slate-500 font-normal">Hasil & Analisis Bab 4, 5</span></h3>
                    <div class="text-3xl font-black text-brand-600 mb-2">Mulai 1.5 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung software SPSS/PLS & jumlah variabel.</p>
                    <ul class="space-y-3 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Tabulasi Data Mentah</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Output Lengkap (Validitas - Regresi)</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Penulisan Narasi Bab 4 & 5</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Bimbingan Cara Baca Data</li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors">Tanya Admin</a>
                </div>
                <!-- Paket 3 -->
                <div class="bg-brand-50 text-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col transform hover:-translate-y-2 transition-transform relative border-2 border-brand-500 lg:-mt-4 lg:mb-4">
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">Paling Dicari</div>
                    <h3 class="text-xl font-bold text-brand-900 border-b border-brand-200 pb-4 mb-4 mt-2">Full Service <br/><span class="text-sm text-brand-700 font-normal">Terima Beres Bab 1-5</span></h3>
                    <div class="text-3xl font-black text-brand-600 mb-2">Mulai 3.5 Jt</div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Bayar sistem cicil (DP - Termin Bab - Pelunasan).</p>
                    <ul class="space-y-3 mb-8 text-sm text-slate-700 flex-grow font-medium">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-star text-yellow-500 mt-1"></i> Pembuatan Judul & Bab 1 - 5</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-star text-yellow-500 mt-1"></i> Olah Data Statistik Kuantitatif/Kualitatif</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-star text-yellow-500 mt-1"></i> Garansi Lolos Plagiasi Turnitin</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-star text-yellow-500 mt-1"></i> <strong class="text-brand-700">Garansi Revisi Sampai ACC Sidang</strong></li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md hover:shadow-lg">Ambil Promo Full Service</a>
                </div>
                <!-- Paket 4 -->
                <div class="bg-white text-slate-800 rounded-2xl p-6 shadow-xl flex flex-col transform hover:-translate-y-2 transition-transform">
                    <h3 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4">Turnitin & Format <br/><span class="text-sm text-slate-500 font-normal">Perapihan Naskah Jadi</span></h3>
                    <div class="text-3xl font-black text-brand-600 mb-2">Mulai 15rb<span class="text-base font-normal text-slate-500">/lbr</span></div>
                    <p class="text-xs text-slate-500 mb-6 italic">*Tergantung skor awal & deadline.</p>
                    <ul class="space-y-3 mb-8 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Parafrase Manual Skor < 20%</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Cek Typo (PUEBI) & Margin</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Perapihan Daftar Isi Otomatis</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-1"></i> Tersedia Layanan Kilat 24 Jam</li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors">Tanya Admin</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Workflow -->
    <section class="py-16 md:py-24 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cara Memulai Pemesanan</h2>
                <p class="text-slate-600 max-w-2xl mx-auto">Proses transparan, aman, dan memprioritaskan kenyamanan finansial mahasiswa.</p>
            </div>
            
            <div class="relative">
                <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-brand-100 -translate-y-1/2 z-0"></div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center relative">
                        <div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-md">1</div>
                        <h4 class="font-bold text-lg text-slate-900 mb-2">Konsultasi WA</h4>
                        <p class="text-sm text-slate-600">Kirimkan pedoman penulisan kampus Anda (buku panduan) dan ceritakan topik yang Anda inginkan ke Admin kami.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center relative">
                        <div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-md">2</div>
                        <h4 class="font-bold text-lg text-slate-900 mb-2">Kesepakatan & DP</h4>
                        <p class="text-sm text-slate-600">Admin akan memberikan rincian harga. Cukup bayar Down Payment (DP) sebagai tanda jadi, tim riset langsung bekerja.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center relative">
                        <div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-md">3</div>
                        <h4 class="font-bold text-lg text-slate-900 mb-2">Review per Bab</h4>
                        <p class="text-sm text-slate-600">Setiap 1 bab selesai, kami akan mengirimkannya untuk Anda review dan bimbingankan ke dosen. Pembayaran dilanjut ke termin berikutnya.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center relative">
                        <div class="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-md">4</div>
                        <h4 class="font-bold text-lg text-slate-900 mb-2">Revisi Sampai ACC</h4>
                        <p class="text-sm text-slate-600">Jika dosen memberikan coretan, kirimkan file revisi tersebut. Kami akan memperbaikinya secara gratis hingga disetujui (ACC) maju sidang!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimoni / Social Proof -->
    <section class="py-16 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-slate-900 mb-12">Cerita Sukses Klien Pena Elit</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div class="flex text-yellow-400 mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <p class="text-slate-600 mb-4 italic text-sm">"Sumpah nyesel gak dari dulu pakai jasa ini. Udah mau DO karena dosen pembimbing killer banget minta ganti judul 4 kali. Di sini dibuatin judul beserta datanya, langsung ACC! Pengerjaan Bab 1-3 super cepet. Makasih min!"</p>
                    <div class="font-bold text-slate-900 text-sm">Dimas A. (Manajemen)</div>
                    <div class="text-xs text-slate-500">Universitas Swasta di Jakarta</div>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div class="flex text-yellow-400 mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <p class="text-slate-600 mb-4 italic text-sm">"Bab 4 kuantitatif ku ancur lebur karena data kuesioner ga valid. Admin Pena Elit bantu terapi dataku di SPSS sampai lulus normalitas dan regresi bagus. Tulisannya juga ilmiah banget. Sangat recommended buat yang nyerah sama angka."</p>
                    <div class="font-bold text-slate-900 text-sm">Siti N. (Ilmu Komunikasi)</div>
                    <div class="text-xs text-slate-500">Universitas Negeri di Jabar</div>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div class="flex text-yellow-400 mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <p class="text-slate-600 mb-4 italic text-sm">"Buat karyawan yang kerja dari jam 8 pagi sampe jam 6 sore kayak aku, nyusun skripsi itu mustahil. Ambil paket Full Service di sini bener-bener terima beres. Privasi aman bgt. Aku tinggal hafalin materi buat sidang akhir doang."</p>
                    <div class="font-bold text-slate-900 text-sm">Hendra W. (Sistem Informasi)</div>
                    <div class="text-xs text-slate-500">Universitas Swasta di Surabaya</div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 md:py-24 bg-white border-t border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h2>
            </div>
            
            <div class="space-y-4">
                <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
                        <span class="font-bold text-slate-800">Apakah privasi dan rahasia klien terjamin aman?</span>
                        <i class="fa-solid fa-chevron-down text-brand-600 transition-transform duration-300"></i>
                    </button>
                    <div class="px-6 pb-4 hidden text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3 mt-1">
                        <strong>Sangat Terjamin 100%.</strong> Kami mengikat perjanjian etika (Non-Disclosure Agreement) dengan tim penulis. Naskah, nama, institusi, dan kontak Anda tidak akan pernah dipublikasikan, dijadikan portofolio publik, apalagi dijual kembali. Sistem file sharing kami langsung dihapus setelah project dinyatakan selesai dan ACC.
                    </div>
                </div>
                <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
                        <span class="font-bold text-slate-800">Berapa lama proses pembuatan skripsi Bab 1 sampai 5?</span>
                        <i class="fa-solid fa-chevron-down text-brand-600 transition-transform duration-300"></i>
                    </button>
                    <div class="px-6 pb-4 hidden text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3 mt-1">
                        Pengerjaan normal per-bab memakan waktu antara 1 hingga 2 minggu. Namun hal ini sangat dipengaruhi oleh waktu Anda bimbingan dengan dosen (menunggu feedback dosen). Jika Anda butuh cepat karena mepet *deadline* pendaftaran yudisium, kami memiliki <strong>Layanan Prioritas/Express</strong> yang dapat menyelesaikan full bab dalam waktu kurang dari 1 bulan.
                    </div>
                </div>
                <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
                        <span class="font-bold text-slate-800">Bagaimana sistem Garansi Revisi-nya?</span>
                        <i class="fa-solid fa-chevron-down text-brand-600 transition-transform duration-300"></i>
                    </button>
                    <div class="px-6 pb-4 hidden text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3 mt-1">
                        Kami paham bahwa dosen pasti memberikan revisi. Jika ada coretan atau masukan dari dosen, cukup *forward* ke admin kami. Tim kami akan memperbaiki naskah tersebut <strong>tanpa biaya tambahan</strong> (GRATIS) sampai dosen menyatakan setuju (ACC). Pengecualian garansi jika revisinya adalah dosen tiba-tiba meminta ganti total Judul atau Variabel di tengah jalan setelah sebelumnya disepakati.
                    </div>
                </div>
                <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
                        <span class="font-bold text-slate-800">Apakah saya bisa paham isinya saat ditanya di ruang sidang nanti?</span>
                        <i class="fa-solid fa-chevron-down text-brand-600 transition-transform duration-300"></i>
                    </button>
                    <div class="px-6 pb-4 hidden text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3 mt-1">
                        Tentu bisa! Kami tidak hanya menyerahkan *file* mati. Kami akan membuatkan draft presentasi (PPT) dan Anda berhak mendapatkan layanan konsultasi/mentoring via Chat atau Zoom. Kami akan menjelaskan secara rinci alur penelitian Anda dan melatih cara Anda menjawab pertanyaan-pertanyaan mematikan dari dosen penguji.
                    </div>
                </div>
            </div>
            
            <div class="mt-16 text-center">
                <a href="https://wa.me/6281770450775" class="inline-block bg-brand-600 text-white text-xl font-bold py-5 px-10 rounded-xl shadow-xl hover:bg-brand-700 transition-all transform hover:scale-105">
                    <i class="fa-solid fa-phone-volume mr-2"></i> Chat Admin (Respon Cepat)
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
<main class="bg-white overflow-hidden text-slate-800">
    <!-- Hero -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="w-full lg:w-1/2 text-center lg:text-left">
                    <div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm tracking-wide shadow-sm">
                        <i class="fa-solid fa-file-word text-blue-500 mr-1"></i> Spesialis Format Dokumen Word
                    </div>
                    
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                        Pusing Naskah Skripsi <br/>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Tampil Berantakan?</span>
                    </h1>
                    
                    <p class="text-lg text-slate-600 mb-10 leading-relaxed">
                        Sudah capek mikirin revisi materi, malah ditambah stres ngurusin halaman Romawi, daftar isi manual yang titik-titiknya berantakan, dan margin yang geser tiap ganti laptop. Serahkan urusan teknis format Microsoft Word pada ahlinya. Selesai dalam hitungan jam!
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                        <a href="https://wa.me/6281770450775" class="w-full sm:w-auto bg-blue-600 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                            <i class="fa-brands fa-whatsapp text-2xl"></i> Rapikan Skripsiku Sekarang
                        </a>
                    </div>
                    
                    <div class="mt-8 text-sm font-semibold text-slate-500 flex items-center justify-center lg:justify-start gap-4">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-bolt text-yellow-500"></i> Express 24 Jam</span>
                        <span class="flex items-center gap-1"><i class="fa-solid fa-check-circle text-green-500"></i> Sesuai Buku Panduan</span>
                    </div>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="relative group">
                        <div class="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                        <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800&h=600" alt="Edit Format Skripsi Word" class="relative rounded-2xl shadow-2xl border border-slate-100 z-10 w-full object-cover">
                        <!-- Floating badge -->
                        <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3">
                            <i class="fa-solid fa-file-circle-check text-3xl text-green-500"></i>
                            <div>
                                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Garansi 100%</p>
                                <p class="text-sm font-bold text-slate-900">Sesuai Pedoman Kampus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mengapa Format Penting -->
    <section class="py-16 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-slate-900 mb-6">Kenapa Skripsi Anda Selalu Dicoret Gara-Gara Format?</h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto mb-12">Banyak dosen yang sangat perfeksionis. Walaupun isinya bagus, jika tata letak margin, spasi, dan penomorannya asal-asalan, dosen akan merasa Anda mahasiswa yang malas dan tidak teliti. Akibatnya, <em>mood</em> dosen hancur sebelum membaca isi skripsinya.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div class="p-6 bg-slate-50 rounded-2xl">
                    <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl mb-4"><i class="fa-solid fa-times"></i></div>
                    <h3 class="font-bold text-lg mb-2">Daftar Isi Manual = Bencana</h3>
                    <p class="text-slate-600 text-sm">Mengetik titik-titik secara manual di daftar isi sangat memalukan. Saat dosen menyuruh Anda menambah paragraf di Bab 2, otomatis semua halaman ke bawah akan bergeser, dan Anda harus mengedit daftar isi secara manual lagi semalaman.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl">
                    <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl mb-4"><i class="fa-solid fa-times"></i></div>
                    <h3 class="font-bold text-lg mb-2">Penomoran Halaman Error</h3>
                    <p class="text-slate-600 text-sm">Ketidaktahuan memfungsikan fitur <em>Section Break</em> membuat halaman sampul ikutan ada nomornya, angka romawi (i, ii) tercampur dengan angka arab (1,2,3), dan penomoran Bab baru tidak konsisten.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl">
                    <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl mb-4"><i class="fa-solid fa-times"></i></div>
                    <h3 class="font-bold text-lg mb-2">Daftar Pustaka Copas</h3>
                    <p class="text-slate-600 text-sm">Dosen masa kini mewajibkan penggunaan Reference Manager (Mendeley/Zotero). Mengetik daftar pustaka secara manual berisiko format (APA/Harvard) salah ketik dan ada sumber yang tidak tertulis.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Fitur Layanan (What we do) -->
    <section class="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Cakupan Layanan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Kami Merapikan Keseluruhan Naskah Anda</h2>
                <div class="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
                <!-- Fitur -->
                <div class="flex gap-4">
                    <div class="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-list-ol"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Automation (Otomatisasi)</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Pembuatan <strong>Daftar Isi Otomatis</strong>, Daftar Gambar, Daftar Tabel, dan Daftar Lampiran. Semua menggunakan fitur Headings sehingga Anda bisa navigasi di panel Word secara cepat. Jika ada perubahan halaman, cukup klik <em>Update Table</em>.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex gap-4">
                    <div class="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-file-lines"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Pemisahan & Penomoran Halaman</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Menata struktur halaman (Sampul tanpa nomor, kata pengantar Romawi di bawah-tengah, dan isi Bab Angka di atas-kanan). Kami ahlinya memanipulasi *Page Break* & *Section Break* di Word.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex gap-4">
                    <div class="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-paragraph"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Layouting (Margin, Spasi, Font)</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Pengaturan presisi margin standar (4-4-3-3 atau custom), spasi 1.5, perataan justify (rata kiri kanan tanpa rongga jelek), indentasi awal paragraf yang seragam, dan format font Times New Roman konsisten 100%.</p>
                    </div>
                </div>
                <!-- Fitur -->
                <div class="flex gap-4">
                    <div class="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-book-journal-whills"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Sitasi & Daftar Pustaka Mendeley</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">Konversi kutipan manual menjadi sistem sitasi otomatis menggunakan Mendeley / Zotero dengan *style* yang diwajibkan kampus Anda (contoh: APA 7th Edition, IEEE, Chicago).</p>
                    </div>
                </div>
            </div>
            
            <!-- Pricing Banner -->
            <div class="mt-16 bg-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-xl relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div class="relative z-10">
                    <h3 class="text-2xl md:text-3xl font-bold mb-4">Mulai dari Rp 5.000 / Lembar Saja!</h3>
                    <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Sangat terjangkau untuk mahasiswa. Cukup lampirkan file Word Anda dan Buku Pedoman Penulisan Skripsi kampus, kami selesaikan dalam waktu 24-48 Jam tanpa Anda perlu pusing lagi.</p>
                    <a href="https://wa.me/6281770450775" class="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-slate-50 transition-colors">Konsultasikan File Naskah Anda</a>
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
<main class="bg-white overflow-hidden text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-white border border-purple-200 text-purple-700 font-bold text-sm tracking-wide shadow-sm">
                <i class="fa-solid fa-bolt text-purple-500 mr-1"></i> Layanan Kilat & Anti Plagiat (Turnitin)
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
                Tugas Kuliah Menumpuk di Masa <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Ujian Tengah/Akhir Semester?</span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Jadwal kuliah padat, capek pulang kerja, ditambah tumpukan tugas makalah, esai, resume, dan PPT dari 5 mata kuliah berbeda yang deadlinenya besok pagi? Jangan sampai IPK Anda hancur! Biarkan para tenaga akademik (Lulusan PTN) kami menyelesaikannya untuk Anda dengan kualitas <strong>A+ Grade</strong>.
            </p>
            
            <div class="flex justify-center flex-col sm:flex-row gap-4">
                <a href="https://wa.me/6281770450775" class="bg-purple-600 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(147,51,234,0.3)] hover:bg-purple-700 transition-all flex items-center justify-center gap-3">
                    <i class="fa-solid fa-paper-plane"></i> Kirim Soal Tugas Sekarang
                </a>
                <a href="#jenis" class="bg-white text-purple-700 border-2 border-purple-200 text-lg font-bold py-4 px-8 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-3">
                    Lihat Jenis Layanan
                </a>
            </div>
            
            <div class="mt-8 flex justify-center gap-6">
                <div class="flex items-center gap-2"><i class="fa-solid fa-star text-yellow-400"></i><span class="font-bold text-sm">4.9/5 Rating Mahasiswa</span></div>
            </div>
        </div>
    </section>

    <!-- Masalah Mahasiswa -->
    <section class="py-16 bg-slate-900 text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 text-purple-300">Berhenti Stres Begadang Mengerjakan Tugas yang Tidak Ada Habisnya!</h2>
            <p class="text-slate-300 mb-10 text-lg">Waktu Anda lebih berharga untuk difokuskan pada belajar ujian, bekerja (bagi karyawan), keluarga, atau istirahat menjaga kesehatan fisik dan mental.</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700"><i class="fa-solid fa-clock text-2xl text-purple-400 mb-2 block"></i><span class="text-sm font-semibold">Tenggat Waktu Super Mepet</span></div>
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700"><i class="fa-solid fa-copy text-2xl text-purple-400 mb-2 block"></i><span class="text-sm font-semibold">Hindari Tuduhan Plagiasi Dosen</span></div>
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700"><i class="fa-solid fa-laptop-code text-2xl text-purple-400 mb-2 block"></i><span class="text-sm font-semibold">Kurang Referensi Jurnal / Buku</span></div>
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700"><i class="fa-solid fa-brain text-2xl text-purple-400 mb-2 block"></i><span class="text-sm font-semibold">Kelelahan Mental (Burnout)</span></div>
            </div>
        </div>
    </section>

    <!-- Jenis Tugas -->
    <section id="jenis" class="py-20 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Cakupan Layanan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Tugas Apa Saja yang Bisa Kami Kerjakan?</h2>
                <div class="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Item 1 -->
                <div class="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 text-3xl">
                        <i class="fa-solid fa-file-word"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Makalah Kelompok / Individu</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">Pembuatan makalah berstruktur (Bab 1 Pendahuluan, Bab 2 Pembahasan, Bab 3 Penutup). Menggunakan sitasi jurnal terbaru dan format yang sangat rapi (rata kiri-kanan).</p>
                    <div class="text-purple-700 font-bold">Harga: Mulai Rp 150.000 / Tugas</div>
                </div>
                <!-- Item 2 -->
                <div class="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Terfavorit</div>
                    <div class="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 text-pink-600 text-3xl">
                        <i class="fa-solid fa-desktop"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Presentasi PowerPoint (PPT)</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">Anda tidak perlu memindahkan isi makalah ke PPT secara manual. Kami buatkan presentasi dengan desain estetik, poin-poin infografis yang ringkas (tidak banyak teks), dan transisi elegan.</p>
                    <div class="text-pink-700 font-bold">Harga: Mulai Rp 5.000 / Slide</div>
                </div>
                <!-- Item 3 -->
                <div class="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 text-teal-600 text-3xl">
                        <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Review & Resume Jurnal</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">Merangkum atau mereview jurnal internasional berbahasa Inggris menjadi teks ringkas berbahasa Indonesia (Critical Journal Review) dengan analisis kritis yang masuk akal.</p>
                    <div class="text-teal-700 font-bold">Harga: Mulai Rp 100.000 / Jurnal</div>
                </div>
                <!-- Item 4 -->
                <div class="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 text-3xl">
                        <i class="fa-solid fa-pen-nib"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Esai & Paper Opini</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">Penulisan esai argumentatif yang membutuhkan gagasan kritis. Sangat cocok untuk tugas UAS (Take Home Exam) atau esai persyaratan pendaftaran beasiswa mahasiswa.</p>
                    <div class="text-indigo-700 font-bold">Harga: Mulai Rp 50.000 / Halaman</div>
                </div>
                <!-- Item 5 -->
                <div class="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 text-3xl">
                        <i class="fa-solid fa-book-journal-whills"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Artikel Ilmiah Populer</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">Pembuatan artikel untuk diterbitkan di blog, media massa, atau tugas pengganti UTS/UAS. Ditulis dengan kaidah bahasa jurnalistik yang SEO-friendly maupun semi-formal.</p>
                    <div class="text-blue-700 font-bold">Harga: Menyesuaikan Jumlah Kata</div>
                </div>
                <!-- Guarantee Box -->
                <div class="bg-gradient-to-br from-purple-600 to-indigo-700 shadow-lg rounded-3xl p-8 text-white flex flex-col justify-center text-center">
                    <i class="fa-solid fa-shield-halved text-5xl mb-4 text-purple-200"></i>
                    <h3 class="font-bold text-2xl mb-3">Garansi Nilai Aman</h3>
                    <p class="text-purple-100 text-sm mb-6 leading-relaxed">Kami berani menggaransi bahwa tugas dikerjakan secara orisinal (bukan hasil <em>copy-paste</em>) dan disertai referensi daftar pustaka yang valid, sehingga aman dari kecurigaan dosen.</p>
                    <a href="https://wa.me/6281770450775" class="bg-white text-purple-700 font-bold py-2 px-4 rounded-lg inline-block w-full">Pesan Tugas Sekarang</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Factors -->
    <section class="py-16 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <div class="w-full md:w-1/2">
                    <h3 class="text-3xl font-bold text-slate-900 mb-6">Mengapa Mahasiswa Memilih Pena Elit untuk Tugas Mereka?</h3>
                    <ul class="space-y-4 text-slate-700 font-medium">
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                            <span><strong>Tim Ahli (Expert):</strong> Tugas Anda TIDAK dikerjakan oleh anak sekolah, melainkan oleh lulusan dan mahasiswa pascasarjana PTN ternama (UI, UGM, ITB, UPI, dll).</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                            <span><strong>Bisa Kilat (Deadline Besok):</strong> Lupa ada tugas dan besok pagi mau dikumpulkan? Sistem SKS (Sistem Kebut Semalam) kami siap mengeksekusi dalam 12 jam!</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                            <span><strong>Anti Copas (Uji Turnitin):</strong> Kami benci plagiasi amatiran. Kami menggunakan parafrase kalimat. Bebas uji software Turnitin!</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                            <span><strong>Sistem Rahasia & Anonim:</strong> Data kampus, nama, NIM Anda, dan file tugas tidak akan pernah kami bocorkan ke pihak mana pun. Privasi adalah harga mati kami.</span>
                        </li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=600" alt="Mahasiswa Mengerjakan Tugas Kuliah" class="rounded-2xl shadow-md w-full">
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
<main class="bg-white overflow-hidden text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div class="inline-block mb-6 px-5 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-brand-400 font-bold text-sm tracking-wider shadow-sm uppercase">
                <i class="fa-solid fa-book-open-reader mr-2"></i> Kemitraan OJS Publikasi Nasional
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-5xl mx-auto tracking-tight">
                Publikasi Jurnal Nasional <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">Terakreditasi SINTA</span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                Terbebani syarat kelulusan S1/S2 yang mewajibkan publikasi artikel ilmiah? Atau Anda seorang Dosen yang membutuhkan Kum untuk Kenaikan Pangkat (Jafung)? Kami memfasilitasi penerbitan di jurnal Sinta 1 hingga Sinta 6 dengan <strong>Garansi LoA (Letter of Acceptance) Fast Track!</strong>
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/6281770450775" class="bg-brand-600 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-brand-700 transition-all flex items-center justify-center gap-3">
                    <i class="fa-brands fa-whatsapp text-2xl"></i> Cek Ketersediaan Slot Jurnal (Volume/Issue)
                </a>
            </div>
            <p class="mt-6 text-sm text-slate-400"><i class="fa-solid fa-circle-exclamation text-brand-400"></i> Kuota slot terbitan (Issue) di tiap jurnal sangat terbatas setiap bulannya.</p>
        </div>
    </section>

    <!-- Masalah Submit Jurnal -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mempublikasikan Jurnal Mandiri Itu Sulit, Lama, dan Sering Ditolak.</h2>
                <p class="text-slate-600 max-w-3xl mx-auto text-lg">Jika Anda mensubmit artikel sendiri ke website portal jurnal kampus (OJS), Anda harus siap mental menghadapi proses *peer-review* yang panjang. Banyak mahasiswa terlambat sidang yudisium hanya karena menunggu status naskahnya berbulan-bulan.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-3xl mb-6"><i class="fa-solid fa-hourglass-half"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Antrean Publikasi Panjang</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Satu jurnal (Sinta 3, 4, atau 5) biasanya hanya menerbitkan 10-20 artikel per edisi, sedangkan yang mensubmit dari seluruh Indonesia bisa ribuan. Status naskah Anda akan tertahan *"In Review"* selama 3-6 bulan tanpa kepastian.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center text-3xl mb-6"><i class="fa-solid fa-file-code"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Format OJS & Template Rumit</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Setiap pengelola jurnal memiliki "Gaya Selingkung" (Template layout Word) yang sangat kaku dan berbeda-beda. Salah mengatur margin, font, atau cara sitasi daftar pustaka, naskah otomatis di-<em>Desk Reject</em> editor.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-3xl mb-6"><i class="fa-solid fa-language"></i></div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Syarat Bahasa & Kualitas</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Jurnal Sinta tinggi (Sinta 1 dan 2) umumnya mewajibkan artikel berbahasa Inggris akademik (*Proofreading* native) dan standar novelty serta metodologi penelitian yang sangat ketat dan dalam.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Solusi Lengkap Layanan -->
    <section class="py-20 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
                <div class="w-full lg:w-1/2">
                    <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">All In One Service</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Kami Siapkan Semuanya Dari Naskah Mentah Sampai Terbit (LoA)</h2>
                    <p class="text-slate-600 text-lg mb-8 leading-relaxed">Anda tidak perlu lagi pusing memikirkan template, terjemahan, atau bolak-balik email revisi dengan reviewer jurnal. Layanan Pena Elit terintegrasi mencakup proses hulu ke hilir. Terima beres, LoA terbit, Anda siap ujian/naik pangkat!</p>
                    
                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-lg">Konversi Skripsi Menjadi Jurnal (Rewriting)</h4>
                                <p class="text-slate-600 text-sm mt-1">Mengubah naskah skripsi tebal Anda yang ratusan halaman menjadi 10-15 halaman artikel jurnal padat (Format IMRaD: Pendahuluan, Metode, Hasil, Kesimpulan).</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-lg">Format Template (Gaya Selingkung) & Mendeley</h4>
                                <p class="text-slate-600 text-sm mt-1">Kami yang akan mengatur layout Word menyesuaikan persis dengan template jurnal tujuan yang dipilih. Serta merapikan referensi menggunakan aplikasi Mendeley.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-language"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-lg">Translate & Academic Proofreading (Untuk Sinta 1-2)</h4>
                                <p class="text-slate-600 text-sm mt-1">Jika jurnal tujuan mewajibkan bahasa Inggris, kami memiliki translator spesialis jurnal akademik (*bukan Google Translate*) sehingga grammar jurnal Anda lolos editor luar negeri.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xl"><i class="fa-solid fa-file-signature"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-lg">Kemitraan Fast-Track (LoA Cepat)</h4>
                                <p class="text-slate-600 text-sm mt-1">Berkat jaringan dan kemitraan kami dengan banyak institusi pengelola OJS jurnal Sinta 3 hingga 6 se-Indonesia, kami bisa mendapatkan slot prioritas dan LoA (Letter of Acceptance) lebih cepat untuk Anda (Bisa kurang dari 1 bulan).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 relative">
                    <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=900" alt="Publikasi Jurnal Ilmiah" class="rounded-3xl shadow-2xl object-cover h-[700px] w-full">
                    <!-- Badge Overlay -->
                    <div class="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Sinta_Logo.png" alt="Sinta Logo" class="h-12 object-contain" onerror="this.style.display='none'">
                        <div>
                            <div class="font-black text-slate-900 text-xl">SINTA 1 s/d 6</div>
                            <div class="text-slate-500 text-sm">Terakreditasi Ristekdikti</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to action -->
    <section class="py-20 bg-slate-900 text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Waktu Sangat Berharga, Jangan Menunggu Terlalu Lama.</h2>
            <p class="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Sampaikan naskah mentah (Skripsi/Tesis/Jurnal) Anda kepada kami. Kami akan melakukan review kelayakan awal secara GRATIS untuk menentukan jurnal Sinta target mana yang paling cocok dan memiliki jadwal terbit (Issue) terdekat.</p>
            <a href="https://wa.me/6281770450775" class="inline-block bg-brand-600 hover:bg-brand-500 text-white text-xl font-bold py-5 px-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all transform hover:scale-105">
                <i class="fa-solid fa-paper-plane mr-2"></i> Konsultasi Publikasi Sekarang
            </a>
            <p class="mt-6 text-slate-400 text-sm">*Biaya publikasi (Article Processing Charge/APC) bervariasi bergantung pada peringkat (Tingkat Sinta) dan kebijakan masing-masing pengelola jurnal tujuan.</p>
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
    console.log('Successfully rebuilt ' + s.filename + ' with long-form SEO content.');
});

console.log('All 4 long-form service pages have been successfully built.');
