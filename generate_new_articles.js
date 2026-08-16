const fs = require('fs');
const path = require('path');

const headerTemplate = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const articles = [
  {
    filename: 'cara-mengutip-jurnal-dari-internet.html',
    title: 'Cara Mengutip Jurnal dari Internet Format APA & Harvard',
    desc: 'Panduan lengkap cara mengutip jurnal dari internet dengan benar sesuai format APA dan Harvard untuk daftar pustaka skripsi Anda.',
    h1: 'Cara Mengutip Jurnal dari Internet dengan Benar Sesuai Format APA dan Harvard',
    category: 'Format & Template',
    date: '17 Agustus 2026',
    icon: 'fa-quote-right',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Mengutip sumber dari jurnal online adalah keharusan bagi mahasiswa yang sedang menyusun skripsi. Namun, banyak yang masih kebingungan tentang bagaimana cara mengutip jurnal dari internet yang benar agar tidak dianggap plagiat dan sesuai dengan kaidah penulisan ilmiah.
                </p>

                <p class="mb-6">
                    Dalam dunia akademik, ada dua gaya selingkung (style) kutipan yang paling populer digunakan oleh perguruan tinggi di Indonesia, yaitu <strong>APA (American Psychological Association) Style</strong> dan <strong>Harvard Style</strong>. Artikel ini akan membahas secara tuntas panduan praktis dan contoh cara mengutip dari kedua gaya tersebut.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Cara Mengutip Jurnal Internet dengan Format APA Style</h2>
                <p class="mb-6">
                    APA Style edisi ke-7 (terbaru) adalah standar yang paling umum digunakan pada rumpun ilmu sosial, psikologi, pendidikan, dan bisnis. Fokus utamanya adalah pada Nama Penulis dan Tahun Terbit.
                </p>
                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">Kutipan dalam Teks (In-text Citation)</h3>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Satu Penulis:</strong> Menurut Smith (2020), metode ini efektif... <em>atau</em> ...metode ini terbukti efektif (Smith, 2020).</li>
                    <li><strong>Dua Penulis:</strong> (Smith & Jones, 2021)</li>
                    <li><strong>Tiga Penulis atau Lebih:</strong> Gunakan "et al." setelah penulis pertama. Contoh: (Smith et al., 2022).</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">Penulisan di Daftar Pustaka</h3>
                <p class="mb-6 bg-slate-100 p-4 rounded-lg text-sm border-l-4 border-brand-500">
                    <strong>Format:</strong> Nama Belakang, Inisial Nama Depan. (Tahun). Judul artikel jurnal. <em>Nama Jurnal</em>, Volume(Issue), Halaman. DOI atau URL
                </p>
                <p class="mb-6">
                    <strong>Contoh:</strong><br>
                    Anderson, B., & Smith, C. (2021). The impact of online learning on student performance. <em>Journal of Educational Psychology</em>, 45(2), 112-125. https://doi.org/10.xxxx/xxxx
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Cara Mengutip Jurnal Internet dengan Format Harvard Style</h2>
                <p class="mb-6">
                    Harvard Style sangat mirip dengan APA karena sama-sama menggunakan sistem <em>Author-Date</em>. Namun ada sedikit perbedaan pada tanda baca dan cara penulisan daftar pustakanya.
                </p>
                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">Kutipan dalam Teks</h3>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Satu Penulis:</strong> (Brown, 2019)</li>
                    <li><strong>Dua Penulis:</strong> (Brown and White, 2019) <em>*Perhatikan penggunaan kata 'and' alih-alih simbol '&'.</em></li>
                    <li><strong>Lebih dari tiga penulis:</strong> (Brown et al., 2020)</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">Penulisan di Daftar Pustaka</h3>
                <p class="mb-6 bg-slate-100 p-4 rounded-lg text-sm border-l-4 border-brand-500">
                    <strong>Format:</strong> Nama Belakang, Inisial. (Tahun) 'Judul artikel', <em>Nama Jurnal</em>, Volume(Issue), pp. Halaman. Tersedia di: URL (Diakses: Tanggal Akses).
                </p>
                <p class="mb-6">
                    <strong>Contoh:</strong><br>
                    Brown, A. and White, D. (2019) 'Digital marketing trends', <em>Journal of Marketing</em>, 12(4), pp. 45-60. Tersedia di: https://www.journal.com/article (Diakses: 15 Agustus 2026).
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Gunakan Reference Manager Agar Bebas Pusing</h2>
                <p class="mb-6">
                    Menghafal letak titik, koma, spasi, dan huruf miring untuk ratusan daftar pustaka adalah pekerjaan yang melelahkan dan rentan salah. Dosen penguji sangat jeli melihat daftar pustaka yang formatnya tidak konsisten.
                </p>
                <p class="mb-6">
                    Sangat disarankan menggunakan perangkat lunak (Reference Manager) seperti <strong>Mendeley, Zotero, atau EndNote</strong>. Dengan aplikasi ini, Anda bisa mengubah gaya kutipan dari APA ke Harvard hanya dengan satu klik!
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-file-word"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Pusing Urusan Daftar Pustaka?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Apakah skripsi Anda penuh dengan kutipan manual yang berantakan? Atau dosen pembimbing meminta Anda mengubah seluruh kutipan manual menjadi Mendeley tapi Anda tidak tahu caranya?
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Kami siap merapikan daftar pustaka Anda! Melalui <a href="jasa-format-template-skripsi.html" class="text-brand-600 font-bold hover:underline">Jasa Format Skripsi</a> Pena Elit, kami akan mengonversi semua daftar referensi manual Anda menjadi format <em>Reference Manager</em> (Mendeley/Zotero) yang rapi, presisi, dan sesuai dengan panduan kampus Anda dalam semalam.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20jasa%20merapikan%20daftar%20pustaka%20dengan%20Mendeley." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Rapikan Daftar Pustaka Saya
                    </a>
                </div>
    `
  },
  {
    filename: 'struktur-proposal-skripsi-yang-benar.html',
    title: 'Struktur Proposal Skripsi yang Benar agar Cepat di-ACC Dosen',
    desc: 'Ketahui struktur proposal skripsi yang benar dan lengkap mulai dari Bab 1 hingga Bab 3 agar proposal Anda langsung disetujui dosen pembimbing.',
    h1: 'Struktur Proposal Skripsi yang Benar agar Cepat di-ACC Dosen Pembimbing',
    category: 'Penyusunan Skripsi',
    date: '17 Agustus 2026',
    icon: 'fa-list-ol',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Proposal skripsi adalah "tiket masuk" sebelum Anda diizinkan untuk terjun ke lapangan atau menyebar kuesioner. Sayangnya, banyak mahasiswa yang tertahan di tahap Seminar Proposal (Sempro) selama berbulan-bulan karena struktur proposalnya tidak sistematis, membingungkan, dan tidak fokus.
                </p>

                <p class="mb-6">
                    Agar proposal Anda bisa langsung di-ACC oleh dosen pembimbing, Anda harus memahami struktur standar yang diinginkan oleh kalangan akademisi. Secara umum, proposal skripsi terdiri dari tiga bab utama. Mari kita bedah satu per satu!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">BAB I: PENDAHULUAN (Jantung Penelitian)</h2>
                <p class="mb-6">
                    Bab ini adalah kesan pertama dosen terhadap penelitian Anda. Jika di bagian ini logikanya rapuh, dosen tidak akan mau membaca bab selanjutnya.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Latar Belakang Masalah:</strong> Ceritakan fenomena gap (kesenjangan) antara <em>das sollen</em> (harapan/teori) dan <em>das sein</em> (realita di lapangan). Jangan bertele-tele, sajikan data konkrit dan buktikan bahwa masalah ini layak diteliti.</li>
                    <li><strong>Rumusan Masalah:</strong> Berupa pertanyaan penelitian (<em>Research Question</em>) yang tajam dan spesifik.</li>
                    <li><strong>Tujuan Penelitian:</strong> Menjawab rumusan masalah.</li>
                    <li><strong>Manfaat Penelitian:</strong> Dibagi menjadi manfaat teoritis (pengembangan ilmu) dan praktis (kegunaan untuk masyarakat/perusahaan).</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">BAB II: TINJAUAN PUSTAKA (Pondasi Teori)</h2>
                <p class="mb-6">
                    Banyak mahasiswa terjebak membuat Bab II seperti kamus—hanya berisi kumpulan definisi dari buku cetak. Padahal, ini adalah tempat untuk mensintesis (menggabungkan) teori.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Kajian Teori:</strong> Penjelasan mendalam tentang variabel-variabel penelitian (Variabel X dan Variabel Y).</li>
                    <li><strong>Penelitian Terdahulu (State of The Art):</strong> Tabel matriks jurnal 5 tahun terakhir. Bagian ini krusial untuk menunjukkan kebaruan (<em>novelty</em>) penelitian Anda dan membuktikan bahwa skripsi Anda bukan plagiat dari penelitian orang lain.</li>
                    <li><strong>Kerangka Berpikir:</strong> Visualisasi alur logika penelitian (biasanya berupa bagan atau skema).</li>
                    <li><strong>Hipotesis (Khusus Kuantitatif):</strong> Dugaan sementara yang akan dibuktikan melalui uji statistik.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">BAB III: METODOLOGI PENELITIAN (Alat Bedah)</h2>
                <p class="mb-6">
                    Bab ini menjelaskan <em>bagaimana</em> Anda akan menjawab rumusan masalah. Dosen sangat teliti membaca bagian ini untuk menilai kelayakan metode Anda.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Jenis/Pendekatan Penelitian:</strong> Kualitatif, Kuantitatif, atau R&D.</li>
                    <li><strong>Lokasi & Waktu Penelitian:</strong> Sebutkan di mana dan kapan.</li>
                    <li><strong>Populasi dan Sampel:</strong> Siapa subjeknya dan teknik apa yang digunakan (misal: Purposive Sampling, Random Sampling).</li>
                    <li><strong>Teknik Pengumpulan Data:</strong> Apakah kuesioner, wawancara, observasi, atau dokumentasi.</li>
                    <li><strong>Teknik Analisis Data:</strong> Software dan rumus yang digunakan (misal: Uji Regresi Linear Berganda dengan SPSS, atau Reduksi Data model Miles & Huberman).</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Tips Tambahan Agar Proposal Disukai Dosen</h2>
                <p class="mb-6">
                    Pastikan benang merah antara <strong>Judul -> Rumusan Masalah -> Tujuan -> Metodologi</strong> terhubung erat. Jika judul membahas "Pengaruh", maka metodologinya harus Kuantitatif, dan teknik analisisnya harus asosiatif/regresi.
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Stuck Membuat Proposal Skripsi?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Merangkai Latar Belakang hingga Metodologi yang masuk akal memang membutuhkan jam terbang dan pemahaman akademis yang tinggi. Jika proposal Anda terus menerus ditolak atau Anda bingung memulainya dari mana, tenang saja!
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Gunakan layanan <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Konsultasi dan Bimbingan Proposal Skripsi</a> dari Pena Elit. Tim konsultan kami yang berpengalaman akan membimbing Anda menyusun draft proposal yang sistematis, minim celah revisi, dan bergaransi hingga ACC Sempro!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bimbingan%20membuat%20proposal%20skripsi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasi Proposal Sekarang
                    </a>
                </div>
    `
  },
  {
    filename: 'rekomendasi-website-parafrase-terbaik.html',
    title: '5 Website Parafrase Terbaik untuk Lolos Plagiarisme Turnitin',
    desc: 'Kurangi skor plagiarisme Turnitin skripsi Anda dengan mudah menggunakan 5 rekomendasi website parafrase online gratis terbaik ini.',
    h1: 'Rekomendasi 5 Website Parafrase Terbaik untuk Menurunkan Plagiarisme Turnitin',
    category: 'Anti Plagiasi',
    date: '17 Agustus 2026',
    icon: 'fa-shield-halved',
    color: 'bg-red-50',
    iconColor: 'text-red-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Skor persentase plagiarisme di Turnitin ibarat momok menakutkan bagi mahasiswa akhir. Kampus di Indonesia umumnya mensyaratkan skor <em>similarity index</em> maksimal 20% hingga 25% sebagai syarat untuk bisa maju sidang skripsi.
                </p>

                <p class="mb-6">
                    Salah satu cara paling ampuh untuk menurunkan persentase Turnitin tanpa mengubah substansi makna kalimat adalah dengan melakukan <strong>Parafrase</strong> (menulis ulang kalimat dengan struktur dan sinonim kata yang berbeda). Jika Anda lelah mem-parafrase secara manual, teknologi AI masa kini bisa menjadi asisten andalan Anda. Berikut adalah rekomendasi website parafrase terbaik!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. QuillBot (Super Populer & Natural)</h2>
                <p class="mb-6">
                    QuillBot adalah raja di dunia parafrase saat ini. Sangat disukai oleh pelajar di seluruh dunia.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Keunggulan:</strong> Hasil sangat natural (tidak kaku seperti robot), bisa mengatur tingkat kosata yang digunakan (Standar, Fluency, Formal).</li>
                    <li><strong>Bahasa Indonesia:</strong> Didukung penuh dan hasilnya sangat bisa diandalkan.</li>
                    <li><strong>Kekurangan:</strong> Versi gratisnya membatasi jumlah kata (hanya sekitar 125 kata per klik) dan membatasi beberapa mode penulisan.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Paraphraser.io (Tanpa Limit Mengganggu)</h2>
                <p class="mb-6">
                    Bagi Anda yang malas mendaftar atau terhalang batas kata di Quillbot, Paraphraser.io adalah alternatif yang sangat solid.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Keunggulan:</strong> Versi gratis memberikan batas hingga 600 kata per klik (jauh lebih banyak dari kompetitor). Hasilnya cukup memuaskan untuk bahasa akademik.</li>
                    <li><strong>Tersedia:</strong> Mode Fluency dan Standard gratis.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Prepostseo (Toolkit Akademik Lengkap)</h2>
                <p class="mb-6">
                    Prepostseo bukan hanya alat parafrase, tetapi platform <em>all-in-one</em> untuk mahasiswa.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Keunggulan:</strong> Anda tidak hanya bisa melakukan parafrase, tetapi di dalam website yang sama Anda bisa cek plagiarisme gratis dan memperbaiki <em>grammar</em>. Pilihan yang sangat efisien!</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Smodin.io (Canggih & Multilingual)</h2>
                <p class="mb-6">
                    Smodin sangat terkenal karena mesin AI-nya yang mampu memahami konteks kalimat dengan sangat baik.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Keunggulan:</strong> Hasil tulisan ulang (Rewrite) sangat mulus untuk Bahasa Indonesia. Bahkan terkadang Smodin bisa memperpanjang kalimat Anda secara logis.</li>
                    <li><strong>Kekurangan:</strong> Sering meminta login dan terbatas penggunaannya (credit system) per hari untuk versi gratis.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. ChatGPT (Fleksibilitas Tanpa Batas)</h2>
                <p class="mb-6">
                    Walaupun bukan spesifik website parafrase, ChatGPT adalah tool terkuat jika Anda pandai membuat "Prompt" (perintah).
                </p>
                <p class="mb-6">
                    <strong>Trik Penggunaan:</strong> Jangan sekadar menyuruh "Parafrase ini". Gunakan prompt khusus seperti: <em>"Bertindaklah sebagai mahasiswa S1. Parafrase teks berikut dengan menggunakan gaya bahasa akademik formal, gunakan sinonim tingkat lanjut, ubah kalimat aktif menjadi pasif, dan pertahankan makna aslinya. [Paste Teks Anda]"</em>
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Peringatan Keras: Jangan Lupa Proofread!</h2>
                <p class="mb-6">
                    Meskipun kelima <em>tools</em> di atas sangat canggih, mereka adalah mesin (AI). Terkadang ada istilah-istilah ilmiah spesifik dalam skripsi Anda yang tidak boleh diparafrase (misalnya "Indeks Pembangunan Manusia"). Selalu baca ulang dan sesuaikan diksi secara manual sebelum memasukkannya ke dokumen skripsi.
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Skor Turnitin Masih Merah Merona (Di Atas 40%)?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Mempublikasikan skripsi ke AI Paraphraser satu per satu per paragraf sangat memakan waktu. Belum lagi risiko susunan kalimat menjadi tidak koheren karena mesin tidak mengerti alur utuh skripsi Anda.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Tenang, kami punya solusinya! Gunakan <a href="cara-lolos-uji-turnitin.html" class="text-brand-600 font-bold hover:underline">Jasa Penurunan Plagiasi Turnitin</a> dari Pena Elit. Tim kami akan melakukan parafrase manual dipadukan dengan teknik ahli untuk menurunkan skor Turnitin hingga di bawah 20% (bisa disesuaikan permintaan kampus), dengan jaminan makna kalimat tetap terjaga. Tersedia pengerjaan kilat 24 Jam!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20jasa%20penurunan%20skor%20Turnitin." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Turunkan Skor Turnitin Saya
                    </a>
                </div>
    `
  },
  {
    filename: 'kesalahan-umum-mengerjakan-skripsi.html',
    title: 'Kesalahan Umum Mahasiswa Saat Mengerjakan Skripsi',
    desc: 'Hindari kesalahan umum dan fatal ini saat menyusun skripsi agar bisa lulus tepat waktu, hemat biaya, dan terhindar dari stres berlebih.',
    h1: '5 Kesalahan Umum Mahasiswa Saat Mengerjakan Skripsi yang Wajib Dihindari',
    category: 'Tips Kuliah',
    date: '17 Agustus 2026',
    icon: 'fa-triangle-exclamation',
    color: 'bg-orange-50',
    iconColor: 'text-orange-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Banyak mahasiswa memiliki potensi akademik yang cemerlang, namun tiba-tiba "layu" dan hilang arah ketika dihadapkan pada tugas akhir bernama Skripsi. Fenomena menjadi "Mahasiswa Abadi" ini sangat umum terjadi di berbagai kampus.
                </p>

                <p class="mb-6">
                    Seringkali, mandeknya skripsi bukan karena materinya yang terlalu sulit, melainkan karena kesalahan-kesalahan strategis dan <em>mindset</em> yang dilakukan mahasiswa sejak awal. Mari kita ulas 5 kesalahan fatal yang wajib Anda hindari jika ingin segera menyandang gelar Sarjana.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Perfeksionis yang Berlebihan (Overthinking)</h2>
                <p class="mb-6">
                    "Saya ingin membuat skripsi yang bisa mengubah dunia!" Ini adalah niat mulia, tapi sangat berbahaya. Banyak mahasiswa terlalu lama berpikir mencari judul yang paling fenomenal dan metodologi paling rumit. Akibatnya? Berbulan-bulan mereka bahkan belum menyentuh Bab 1.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Skripsi yang baik adalah skripsi yang selesai, bukan yang sempurna. Fokuslah memenuhi standar akademik kampus, buktikan rumusan masalah, dan lulus. Anda bisa meraih hadiah Nobel nanti setelah lulus S3, tidak perlu di tingkat S1.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Menulis Skripsi Tanpa Outline</h2>
                <p class="mb-6">
                    Membuka Microsoft Word yang kosong dan berharap inspirasi akan datang adalah cara terbaik untuk membuang waktu. Menulis bab-bab secara acak tanpa <em>outline</em> (kerangka tulisan) akan membuat argumen Anda tumpang tindih dan lompat-lompat.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Sebelum menulis paragraf, buat daftar pokok pikiran untuk setiap bab dan sub-bab. Tuliskan apa yang ingin Anda bahas di paragraf 1, paragraf 2, dan seterusnya. Ini akan mempercepat proses mengetik Anda hingga 3x lipat.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Menyembunyikan Diri dari Dosen Pembimbing (Ghosting)</h2>
                <p class="mb-6">
                    Saat menerima revisi yang banyak (yang mana naskah dicoret-coret merah), mental mahasiswa biasanya langsung jatuh. Merasa takut atau malu, mahasiswa memilih untuk menghilang berbulan-bulan (Ghosting) dari dosennya.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Telan ego dan rasa takut itu. Dosen mengkritik tulisan Anda, bukan menyerang karakter pribadi Anda. Semakin cepat Anda memperbaiki dan mengkonsultasikannya kembali, semakin cepat Anda lulus.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Memulai Olah Data Terlalu Lambat</h2>
                <p class="mb-6">
                    Khusus untuk penelitian kuantitatif, banyak mahasiswa mengulur waktu dalam menyebarkan kuesioner. Mereka menunggu sampai akhir semester. Padahal, mengumpulkan 100 responden itu tidak mudah. Belum lagi jika ternyata datanya "tidak valid" atau "tidak reliabel" saat diuji di SPSS.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Segera sebar kuesioner Anda H+1 setelah proposal di-ACC. Tabulasi data secara bertahap. Jika ada data outlier atau tidak normal, Anda masih punya cukup waktu untuk mencari responden tambahan.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Manajemen File dan Format yang Kacau</h2>
                <p class="mb-6">
                    Percayalah, menamai file dengan <em>"Skripsi_Bab 1_Revisi_Final_Banget_Oke_Fix"</em> akan membuat Anda sendiri kebingungan saat sidang. Kehilangan file draft karena laptop rusak atau lupa save juga menjadi kisah horor legendaris mahasiswa.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Simpan file Anda di Cloud (Google Drive / OneDrive) agar aman tersinkronisasi. Gunakan penamaan file sistematis seperti <em>"Nama_NIM_Bab 1_TglBlnThn"</em>.
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Mulai Kehilangan Motivasi Mengerjakan Skripsi?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Skripsi yang terbengkalai bukan hanya membuang waktu Anda, tetapi juga membuang biaya UKT yang terus berjalan setiap semesternya. Jangan biarkan masa depan Anda terhambat!
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        <strong>Pena Elit</strong> hadir sebagai Partner Akademik Anda. Melalui layanan <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Konsultasi Skripsi Lengkap</a>, kami akan menjadi "Co-Pilot" Anda. Kami akan membantu merapikan format, mengolah data statistik yang rumit, memberikan bimbingan arah materi, hingga mendampingi simulasi sidang skripsi.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20terhambat%20mengerjakan%20skripsi%20dan%20butuh%20konsultasi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Dapatkan Solusi Skripsi Sekarang
                    </a>
                </div>
    `
  }
];

articles.forEach(article => {
  let head = headerTemplate.replace(/<title>.*<\/title>/, `<title>${article.title} - Pena Elit Akademika</title>`);
  head = head.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${article.desc}">`);
  head = head.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${article.title} - Pena Elit">`);
  head = head.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${article.desc}">`);

  const htmlContent = `${head}
    <section class="pt-28 pb-10 lg:pt-36 lg:pb-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Breadcrumbs -->
            <nav class="text-sm text-slate-500 mb-8 font-medium">
                <a href="index.html" class="hover:text-brand-600 transition-colors">Beranda</a> 
                <span class="mx-2"><i class="fa-solid fa-chevron-right text-xs"></i></span> 
                <a href="blog.html" class="hover:text-brand-600 transition-colors">Blog</a>
                <span class="mx-2"><i class="fa-solid fa-chevron-right text-xs"></i></span>
                <span class="text-slate-800">${article.title}</span>
            </nav>

            <!-- Article Header -->
            <div class="mb-10 text-center">
                <span class="inline-block bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">${article.category}</span>
                <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                    ${article.h1}
                </h1>
                <div class="flex items-center justify-center text-sm text-slate-500 space-x-4">
                    <span class="flex items-center"><i class="fa-solid fa-calendar mr-2"></i> ${article.date}</span>
                    <span class="flex items-center"><i class="fa-solid fa-user-pen mr-2"></i> Tim Pena Elit</span>
                </div>
            </div>

            <!-- Hero Image -->
            <div class="rounded-3xl overflow-hidden shadow-xl mb-12 h-64 md:h-96 ${article.color} flex items-center justify-center border border-slate-100">
                <i class="fa-solid ${article.icon} text-9xl ${article.iconColor}"></i>
            </div>

            <!-- Article Content -->
            <article class="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-700">
${article.body}
            
                <!-- Artikel Terkait -->
                <div class="mt-12 mb-8 border-t border-slate-100 pt-10">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><i class="fa-solid fa-book-open text-brand-600"></i> Baca Juga Artikel Terkait:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <a href="tips-lulus-skripsi-cepat.html" class="group block border border-slate-200 rounded-2xl p-5 hover:border-brand-500 hover:shadow-lg transition-all bg-white">
                            <span class="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 block">Konsultasi Skripsi</span>
                            <h4 class="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">7 Tips Lulus Skripsi Cepat Tanpa Pusing Revisi</h4>
                            <p class="text-sm text-slate-500">Baca artikel <i class="fa-solid fa-arrow-right ml-1"></i></p>
                        </a>
                        <a href="cara-lolos-uji-turnitin.html" class="group block border border-slate-200 rounded-2xl p-5 hover:border-brand-500 hover:shadow-lg transition-all bg-white">
                            <span class="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 block">Tips Akademik</span>
                            <h4 class="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">Rahasia Cara Lolos Uji Turnitin dengan Skor Rendah</h4>
                            <p class="text-sm text-slate-500">Baca artikel <i class="fa-solid fa-arrow-right ml-1"></i></p>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </section>
${footerTemplate}`;

  fs.writeFileSync(path.join(__dirname, article.filename), htmlContent);
  console.log('Generated:', article.filename);
});

console.log('All new articles generated successfully!');
