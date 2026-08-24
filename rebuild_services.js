const fs = require('fs');
const path = require('path');

const header = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footer = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const services = [
  {
    filename: 'jasa-skripsi-purwakarta.html',
    title: 'Jasa Bimbingan & Konsultasi Skripsi Terbaik Bergaransi ACC | Pena Elit',
    desc: 'Jasa bimbingan skripsi Bab 1-5, olah data SPSS, pembuatan proposal, dan pendampingan sidang. Bebas plagiasi Turnitin dan bergaransi revisi sampai lulus!',
    body: `
<main class="bg-white overflow-hidden text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50 hero-pattern">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-brand-100 opacity-50 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-100 opacity-50 blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-4xl mx-auto" data-aos="fade-up">
                <div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-white border border-brand-100 text-brand-700 font-semibold text-sm tracking-wide shadow-sm">
                    <i class="fa-solid fa-star text-yellow-500 mr-1"></i> Bimbingan Skripsi Bergaransi 100% ACC
                </div>
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                    Solusi Cerdas Lulus Tepat Waktu <br/>
                    <span class="gradient-text">Tanpa Stres Mikirin Revisi Dosen</span>
                </h1>
                
                <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                    Dari penentuan judul, penyusunan Bab 1-5, olah data SPSS/PLS, hingga persiapan sidang komprehensif. Kami kawal naskah skripsi Anda sampai benar-benar sah menjadi Sarjana!
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="https://wa.me/6281770450775" class="w-full sm:w-auto btn-gold text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        <i class="fa-brands fa-whatsapp text-2xl"></i> Konsultasi Gratis Sekarang
                    </a>
                </div>
                
                <div class="mt-10 flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
                    <span class="flex items-center gap-2"><i class="fa-solid fa-shield-halved text-green-500"></i> Aman & Rahasia</span>
                    <span class="flex items-center gap-2"><i class="fa-solid fa-clock text-blue-500"></i> Selesai Tepat Waktu</span>
                    <span class="flex items-center gap-2"><i class="fa-solid fa-check-double text-brand-500"></i> Bebas Plagiasi</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Mengapa Memilih Kami -->
    <section class="py-20 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Keunggulan Layanan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Mengapa Mempercayakan Skripsi Anda Pada Pena Elit?</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow card-hover border border-slate-100 flex flex-col h-full group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-14 h-14 bg-red-50 text-red-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-ban"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3">Anti Plagiasi (Turnitin)</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Kami menulis naskah secara manual dan menggunakan teknik parafrase akademis. Dijamin skor Turnitin di bawah standar kampus (umumnya < 20%).</p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow card-hover border border-slate-100 flex flex-col h-full group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-rotate-left"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3">Garansi Revisi Sepuasnya</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Dicoret dosen? Jangan panik. Kami memberikan garansi perbaikan revisi secara gratis hingga naskah Anda benar-benar di-ACC oleh dosen pembimbing.</p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow card-hover border border-slate-100 flex flex-col h-full group" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3">Simulasi & Mentoring Sidang</h3>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">Tidak hanya memberikan dokumen jadi, kami juga memberikan layanan bimbingan privat agar Anda paham isi skripsi dan siap menghadapi pembantaian dosen penguji.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Detail Paket -->
    <section class="py-20 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Pilihan Paket</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Layanan Skripsi Sesuai Kebutuhan Anda</h2>
                <div class="w-24 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Paket 1 -->
                <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col" data-aos="fade-up" data-aos-delay="100">
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Pencarian Judul & Outline</h3>
                    <p class="text-sm text-slate-500 mb-4 h-10">Cocok bagi yang masih bingung mencari fenomena masalah.</p>
                    <ul class="space-y-3 mb-6 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> 3 Opsi Judul Update</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> Latar Belakang Singkat</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> Rekomendasi Jurnal Rujukan</li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 rounded-lg transition-colors">Pilih Paket</a>
                </div>
                <!-- Paket 2 -->
                <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col" data-aos="fade-up" data-aos-delay="200">
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Proposal Skripsi (Bab 1-3)</h3>
                    <p class="text-sm text-slate-500 mb-4 h-10">Fokus untuk persiapan maju Seminar Proposal (Sempro).</p>
                    <ul class="space-y-3 mb-6 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> Penulisan Bab 1, 2, 3 Lengkap</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> Daftar Pustaka (Mendeley)</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> PPT Sidang Sempro</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> Garansi Lolos Turnitin</li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 rounded-lg transition-colors">Pilih Paket</a>
                </div>
                <!-- Paket 3 -->
                <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col relative transform md:-translate-y-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">Paling Laris</div>
                    <h3 class="text-lg font-bold text-brand-700 mb-2 mt-2">Full Service (Bab 1-5)</h3>
                    <p class="text-sm text-slate-500 mb-4 h-10">Terima beres sampai sidang akhir. Sangat cocok untuk mahasiswa sibuk.</p>
                    <ul class="space-y-3 mb-6 text-sm text-slate-700 flex-grow font-medium">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-500 mt-0.5"></i> Pembuatan dari Nol / Lanjutan</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-500 mt-0.5"></i> Olah Data & Interpretasi Lengkap</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-500 mt-0.5"></i> Garansi Revisi Dosen Tak Terbatas</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-500 mt-0.5"></i> Mentoring 1-on-1 via Zoom</li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg">Pilih Paket</a>
                </div>
                <!-- Paket 4 -->
                <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col" data-aos="fade-up" data-aos-delay="400">
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Olah Data Bab 4-5</h3>
                    <p class="text-sm text-slate-500 mb-4 h-10">Bantuan khusus analisis statistik Kuantitatif / Kualitatif.</p>
                    <ul class="space-y-3 mb-6 text-sm text-slate-700 flex-grow">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> Output SPSS, SmartPLS, AMOS, Eviews</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> Penulisan Narasi Bab 4 & 5</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5"></i> Penjelasan Cara Membaca Data</li>
                    </ul>
                    <a href="https://wa.me/6281770450775" target="_blank" class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 rounded-lg transition-colors">Pilih Paket</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Proses Kerja -->
    <section class="py-20 bg-brand-900 text-white relative overflow-hidden">
        <div class="absolute opacity-10 top-0 left-0 w-full h-full" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-white">Cara Kerja Kami</h2>
                <p class="text-brand-100">Sistem kerja transparan, aman, dan dapat dicicil per termin.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 rounded-full bg-white text-brand-900 text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">1</div>
                    <h4 class="font-bold text-lg mb-2">Konsultasi Kebutuhan</h4>
                    <p class="text-sm text-brand-100">Kirimkan pedoman kampus dan diskusikan ekspektasi Anda dengan Admin.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 rounded-full bg-white text-brand-900 text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">2</div>
                    <h4 class="font-bold text-lg mb-2">Pembayaran Termin</h4>
                    <p class="text-sm text-brand-100">Lakukan pembayaran DP yang aman. Sisa pembayaran dilakukan saat draft selesai.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 rounded-full bg-white text-brand-900 text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">3</div>
                    <h4 class="font-bold text-lg mb-2">Proses Pengerjaan</h4>
                    <p class="text-sm text-brand-100">Konsultan ahli kami akan mengerjakan naskah Anda sesuai target waktu.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                    <div class="w-16 h-16 rounded-full bg-white text-brand-900 text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">4</div>
                    <h4 class="font-bold text-lg mb-2">Pengiriman & Revisi</h4>
                    <p class="text-sm text-brand-100">Naskah dikirim. Jika ada coretan dari dosen, kami bantu revisi sampai tuntas.</p>
                </div>
            </div>
        </div>
    </section>

</main>
    `
  },
  {
    filename: 'jasa-format-template-skripsi.html',
    title: 'Jasa Perapihan Format & Template Skripsi Word | Pena Elit',
    desc: 'Lelah mengatur margin, spasi, dan daftar isi otomatis? Gunakan jasa perapihan format template skripsi Microsoft Word kami. Selesai dalam 24 jam!',
    body: `
<main class="bg-white overflow-hidden text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50 hero-pattern">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
                    <div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm tracking-wide shadow-sm">
                        <i class="fa-solid fa-file-word text-blue-500 mr-1"></i> Spesialis Format Microsoft Word
                    </div>
                    
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                        Pusing Atur Format Skripsi yang <br/>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Selalu Berantakan?</span>
                    </h1>
                    
                    <p class="text-lg text-slate-600 mb-10 leading-relaxed">
                        Daftar isi manual? Nomor halaman Romawi campur angka Arab yang error? Margin bergeser saat dipindah komputer? Serahkan pada Pena Elit. Kami rapikan naskah Anda agar tampil elegan dan profesional 100% sesuai Pedoman Kampus.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                        <a href="https://wa.me/6281770450775" class="w-full sm:w-auto bg-blue-600 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                            <i class="fa-brands fa-whatsapp text-2xl"></i> Pesan Jasa Edit Format
                        </a>
                    </div>
                </div>
                <div class="w-full lg:w-1/2" data-aos="fade-left">
                    <div class="relative">
                        <div class="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                        <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800&h=600" alt="Edit Format Skripsi Word" class="relative rounded-2xl shadow-2xl border border-slate-100 z-10 w-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Layanan Format -->
    <section class="py-20 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Cakupan Layanan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Apa Saja yang Akan Kami Rapikan?</h2>
                <div class="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div class="flex gap-4" data-aos="fade-up">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0"><i class="fa-solid fa-list-ol"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Daftar Isi, Gambar & Tabel Otomatis</h3>
                        <p class="text-slate-600 leading-relaxed">Pembuatan *Table of Contents* yang clickable dan otomatis ter-update halamannya, tidak perlu edit titik-titik secara manual lagi.</p>
                    </div>
                </div>
                <div class="flex gap-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0"><i class="fa-solid fa-file-lines"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Penomoran Halaman Kompleks</h3>
                        <p class="text-slate-600 leading-relaxed">Pengaturan Section Breaks untuk memisahkan halaman Romawi (i, ii, iii) di bagian depan dan Angka (1, 2, 3) di bagian inti naskah tanpa error.</p>
                    </div>
                </div>
                <div class="flex gap-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0"><i class="fa-solid fa-paragraph"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Margin, Spasi & Paragraf Konsisten</h3>
                        <p class="text-slate-600 leading-relaxed">Meratakan margin (kiri 4, atas 4, kanan 3, bawah 3), spasi baris 1.5 atau 2.0, justify text, serta memastikan setiap Bab selalu dimulai di halaman baru.</p>
                    </div>
                </div>
                <div class="flex gap-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0"><i class="fa-solid fa-quote-left"></i></div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">Perapihan Daftar Pustaka (Mendeley)</h3>
                        <p class="text-slate-600 leading-relaxed">Menyinkronkan sitasi di dalam teks dengan daftar pustaka di bagian akhir menggunakan format APA, Harvard, atau IEEE secara rapi.</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-16 text-center" data-aos="zoom-in">
                <div class="inline-block bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <p class="font-semibold text-slate-800 text-lg mb-2">⚡ Pengerjaan Super Cepat!</p>
                    <p class="text-slate-600">Skripsi Anda berantakan dan besok pagi mau diserahkan ke Dosen? <br>Gunakan paket <strong class="text-blue-600">Express 24 Jam</strong> kami.</p>
                </div>
            </div>
        </div>
    </section>
</main>
    `
  },
  {
    filename: 'joki-tugas-kuliah.html',
    title: 'Jasa Joki Tugas Kuliah, Makalah, Esai, dan Jurnal | Pena Elit',
    desc: 'Bebaskan diri dari beban tugas menumpuk! Joki tugas makalah, esai, presentasi PPT, resume, hingga artikel jurnal. Kualitas terjamin dan bergaransi.',
    body: `
<main class="bg-white overflow-hidden text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50 hero-pattern">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 font-semibold text-sm tracking-wide shadow-sm" data-aos="fade-down">
                <i class="fa-solid fa-bolt text-purple-500 mr-1"></i> Cepat, Tepat, & Anti Plagiat
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto" data-aos="fade-up">
                Tugas Kuliah Numpuk Tapi <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Waktu Semakin Mepet?</span>
            </h1>
            
            <p class="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Fokuslah bekerja, berorganisasi, atau beristirahat. Biarkan para expert akademik kami yang menyelesaikan Makalah, Esai, Resume, dan Presentasi PPT Anda dengan nilai maksimal.
            </p>
            
            <div class="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <a href="https://wa.me/6281770450775" class="bg-purple-600 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-[0_10px_20px_rgba(147,51,234,0.3)] hover:bg-purple-700 transition-all transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(147,51,234,0.4)] flex items-center gap-3">
                    <i class="fa-solid fa-paper-plane"></i> Kirim Soal Tugas Sekarang
                </a>
            </div>
        </div>
    </section>

    <!-- Jenis Tugas -->
    <section class="py-20 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Jenis Tugas yang Kami Kerjakan</h2>
                <div class="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Item 1 -->
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group" data-aos="zoom-in" data-aos-delay="100">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-purple-600 text-2xl group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-file-lines"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 mb-2">Makalah Akademik</h3>
                    <p class="text-sm text-slate-600">Makalah kelompok/individu dengan format lengkap (Bab 1-3) dan sumber jurnal terpercaya.</p>
                </div>
                <!-- Item 2 -->
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group" data-aos="zoom-in" data-aos-delay="200">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-pink-600 text-2xl group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-desktop"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 mb-2">Presentasi PPT</h3>
                    <p class="text-sm text-slate-600">Desain slide PowerPoint yang visual, estetik, dan materi yang dirangkum dengan sangat baik.</p>
                </div>
                <!-- Item 3 -->
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group" data-aos="zoom-in" data-aos-delay="300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-teal-600 text-2xl group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-newspaper"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 mb-2">Resume & Review</h3>
                    <p class="text-sm text-slate-600">Tugas mereview buku, merangkum jurnal internasional, dan analisis artikel.</p>
                </div>
                <!-- Item 4 -->
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group" data-aos="zoom-in" data-aos-delay="400">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-indigo-600 text-2xl group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-pen-nib"></i>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 mb-2">Esai & Artikel</h3>
                    <p class="text-sm text-slate-600">Penulisan esai kritis, opini, maupun artikel ilmiah mini populer yang argumentatif.</p>
                </div>
            </div>
            
            <div class="mt-16 max-w-3xl mx-auto bg-purple-50 rounded-2xl p-8 border border-purple-100 flex flex-col sm:flex-row items-center gap-6" data-aos="fade-up">
                <div class="text-5xl text-purple-400"><i class="fa-solid fa-shield-cat"></i></div>
                <div>
                    <h4 class="text-xl font-bold text-slate-900 mb-2">Garansi Kualitas Original 100%</h4>
                    <p class="text-slate-700 leading-relaxed">Kami sangat mengharamkan praktek copy-paste dari Wikipedia atau blog abal-abal. Semua tugas dikerjakan berdasarkan referensi akademis yang kredibel dan lolos pengecekan anti-plagiasi.</p>
                </div>
            </div>
        </div>
    </section>
</main>
    `
  },
  {
    filename: 'jasa-publikasi-jurnal-sinta.html',
    title: 'Jasa Publikasi Jurnal Sinta 1-6 Cepat & Terjamin | Pena Elit',
    desc: 'Layanan publikasi artikel jurnal nasional terakreditasi Sinta 1, 2, 3, 4, 5, 6. Termasuk translate, proofreading, format LoA cepat untuk syarat kelulusan.',
    body: `
<main class="bg-white overflow-hidden text-slate-800">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-900 hero-pattern text-white">
        <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div class="inline-block mb-6 px-5 py-2 rounded-full bg-slate-800 border border-slate-700 text-brand-400 font-semibold text-sm tracking-wider shadow-sm uppercase" data-aos="fade-down">
                <i class="fa-solid fa-book-open-reader mr-2"></i> Kemitraan Jurnal Nasional
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-5xl mx-auto" data-aos="fade-up">
                Wujudkan Publikasi Jurnal <span class="text-brand-500">SINTA</span> <br/>
                Lebih Cepat, Tanpa Antrean Panjang!
            </h1>
            
            <p class="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light" data-aos="fade-up" data-aos-delay="100">
                Punya tuntutan wajib publikasi jurnal sebagai syarat lulus S1/S2 atau kenaikan pangkat Dosen? Kami bantu konversi skripsi Anda menjadi artikel ilmiah berstandar dan mempublikasikannya di Jurnal Nasional Terakreditasi Sinta 1 hingga 6.
            </p>
            
            <div class="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <a href="https://wa.me/6281770450775" class="bg-brand-600 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-brand-700 transition-all transform hover:-translate-y-1 flex items-center gap-3">
                    <i class="fa-brands fa-whatsapp"></i> Cek Ketersediaan Slot Jurnal
                </a>
            </div>
        </div>
    </section>

    <!-- Kenapa Susah Publikasi -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right">
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mengapa Publikasi Jurnal Mandiri Sangat Sulit?</h2>
                    <p class="text-slate-600 mb-6 text-lg leading-relaxed">Submit jurnal sendirian seringkali berujung pada frustrasi. Berbulan-bulan naskah berstatus <em>"In Review"</em> tanpa kejelasan, lalu berujung di-<em>Reject</em> karena format tidak sesuai template.</p>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1"><i class="fa-solid fa-xmark"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-800">Antrean (Issue) Terlalu Penuh</h4>
                                <p class="text-slate-600 text-sm mt-1">Satu jurnal hanya menerbitkan 10-20 artikel per edisi, sementara yang submit ribuan.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1"><i class="fa-solid fa-xmark"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-800">Format OJS & Template Rumit</h4>
                                <p class="text-slate-600 text-sm mt-1">Setiap jurnal punya gaya selingkung sendiri. Salah layout sedikit, naskah langsung dikembalikan.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="bg-white p-8 rounded-3xl shadow-xl border border-slate-100" data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6 text-center border-b pb-4 border-slate-100">Solusi Layanan Publikasi Kami</h3>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3 text-slate-700 p-3 bg-slate-50 rounded-xl">
                            <i class="fa-solid fa-check-circle text-green-500 text-xl"></i>
                            <strong>Konversi Skripsi ke Jurnal (Tulis Ulang)</strong>
                        </li>
                        <li class="flex items-center gap-3 text-slate-700 p-3 bg-slate-50 rounded-xl">
                            <i class="fa-solid fa-check-circle text-green-500 text-xl"></i>
                            <strong>Translate & Proofreading (Mendeley)</strong>
                        </li>
                        <li class="flex items-center gap-3 text-slate-700 p-3 bg-slate-50 rounded-xl">
                            <i class="fa-solid fa-check-circle text-green-500 text-xl"></i>
                            <strong>Format Template Sesuai Gaya Jurnal Tujuan</strong>
                        </li>
                        <li class="flex items-center gap-3 text-slate-700 p-3 bg-slate-50 rounded-xl border-l-4 border-brand-500">
                            <i class="fa-solid fa-check-circle text-brand-500 text-xl"></i>
                            <strong>Garansi Terbit (LoA Fast Track)*</strong>
                        </li>
                    </ul>
                    <p class="text-xs text-slate-400 mt-4 text-center">* Letter of Acceptance (LoA) bisa didapatkan lebih cepat berkat kemitraan kami dengan pengelola jurnal di seluruh Indonesia.</p>
                </div>
            </div>
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
    console.log('Successfully rebuilt ' + s.filename);
});

console.log('All 4 service pages have been successfully SEO-optimized and layout improvised.');
