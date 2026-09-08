const fs = require('fs');
const path = require('path');

const headerTemplate = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const articles = [
  {
    filename: 'cara-membuat-kuesioner-penelitian-kuantitatif.html',
    title: 'Cara Membuat Kuesioner Penelitian Kuantitatif yang Valid dan Reliabel',
    desc: 'Panduan lengkap cara menyusun kuesioner penelitian kuantitatif skripsi yang baik, valid, reliabel, dan mendapatkan responden dengan cepat.',
    h1: 'Cara Membuat Kuesioner Penelitian Kuantitatif yang Valid dan Reliabel untuk Skripsi',
    category: 'Metodologi Penelitian',
    date: '8 September 2026',
    icon: 'fa-clipboard-question',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Bagi mahasiswa tingkat akhir yang mengambil metode penelitian kuantitatif, menyusun <strong>kuesioner (angket) penelitian</strong> adalah salah satu tahap paling krusial. Kuesioner yang buruk akan menghasilkan data yang tidak valid, yang pada akhirnya akan merusak hasil olah data SPSS/PLS Anda secara keseluruhan.
                </p>

                <p class="mb-6">
                    Meskipun terdengar sederhana—hanya membuat daftar pertanyaan untuk dijawab orang lain—namun secara metodologis, pembuatan kuesioner membutuhkan ketelitian tinggi agar dapat mengukur variabel penelitian dengan presisi. Artikel ini akan membahas langkah demi langkah cara membuat kuesioner kuantitatif yang berbobot dan lolos uji validitas serta reliabilitas dosen penguji.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Pahami Konsep Variabel, Dimensi, dan Indikator</h2>
                <p class="mb-6">
                    Kesalahan terbesar mahasiswa adalah langsung membuat pertanyaan tanpa dasar yang jelas. Pertanyaan kuesioner harus diturunkan dari <strong>Definisi Operasional Variabel</strong> di Bab 3 Anda.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Variabel:</strong> Apa yang Anda teliti? (Contoh: Kepuasan Pelanggan).</li>
                    <li><strong>Dimensi (Aspek):</strong> Bagian dari variabel tersebut. (Contoh: Dimensi Kualitas Pelayanan seperti <em>Tangibles, Reliability, Responsiveness</em>).</li>
                    <li><strong>Indikator:</strong> Ukuran spesifik dari dimensi. (Contoh: Kebersihan ruangan, Kecepatan karyawan merespons keluhan).</li>
                </ul>
                <p class="mb-6">
                    Setiap indikator nantinya akan diturunkan menjadi 1 atau lebih item pernyataan di dalam kuesioner.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Gunakan Skala Pengukuran yang Tepat</h2>
                <p class="mb-6">
                    Untuk mengubah data kualitatif (persepsi responden) menjadi angka (kuantitatif), Anda membutuhkan skala ukur. Yang paling umum digunakan dalam skripsi sosial dan manajemen adalah <strong>Skala Likert</strong>.
                </p>
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6">
                    <h4 class="font-bold text-slate-900 mb-2">Contoh Skala Likert 5 Poin:</h4>
                    <ul class="list-disc pl-6 text-slate-700">
                        <li>1 = Sangat Tidak Setuju (STS)</li>
                        <li>2 = Tidak Setuju (TS)</li>
                        <li>3 = Netral / Ragu-ragu (N)</li>
                        <li>4 = Setuju (S)</li>
                        <li>5 = Sangat Setuju (SS)</li>
                    </ul>
                </div>
                <p class="mb-6">
                    Pastikan pilihan jawaban bersifat simetris sehingga tidak menggiring opini responden ke arah tertentu (bias).
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Tips Menyusun Kalimat Kuesioner (Item Pernyataan)</h2>
                <p class="mb-6">
                    Agar responden mudah memahami dan tidak asal mengisi, perhatikan prinsip penulisan berikut:
                </p>
                <ul class="list-decimal pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Gunakan bahasa yang sederhana:</strong> Hindari istilah akademis (jargon) yang membingungkan orang awam.</li>
                    <li><strong>Hindari <em>Double-Barreled Questions</em>:</strong> Jangan menanyakan dua hal dalam satu kalimat. <br><em>Salah: "Karyawan cepat dan ramah dalam melayani." (Bagaimana jika cepat tapi tidak ramah?)</em> <br><em>Benar: "Karyawan melayani dengan cepat." (Pisahkan keramahan di nomor lain).</em></li>
                    <li><strong>Hindari kalimat negatif ganda:</strong> Jangan membuat pernyataan seperti "Saya tidak pernah tidak puas." Ini sangat membingungkan.</li>
                    <li><strong>Jaga durasi pengisian:</strong> Kuesioner yang ideal diisi dalam waktu 5-10 menit (sekitar 15-30 pertanyaan). Lebih dari itu, responden akan malas dan asal centang.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Lakukan Uji Coba (Pilot Test / Pre-Test)</h2>
                <p class="mb-6">
                    Sebelum menyebarkan kuesioner ke ratusan sampel asli Anda, sebar terlebih dahulu ke sekitar 30 orang responden (minimal) untuk melakukan <strong>Uji Validitas dan Reliabilitas</strong> menggunakan SPSS.
                </p>
                <p class="mb-6">
                    Jika nilai <em>r-hitung > r-tabel</em> (Valid) dan <em>Cronbach's Alpha > 0.60</em> (Reliabel), maka kuesioner Anda siap disebarkan ke sampel utama. Jika ada item yang tidak valid, Anda harus menghapus pertanyaan tersebut atau mengganti kalimatnya sebelum penelitian sesungguhnya dimulai.
                </p>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-8">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Pusing Membuat Kuesioner dan Olah Data SPSS?</h3>
                    <p class="text-slate-700 mb-4">
                        Menurunkan teori ke dalam indikator hingga membuat kuesioner yang valid memang memakan waktu. Belum lagi risiko data tidak valid saat diolah di SPSS/PLS.
                    </p>
                    <p class="text-slate-700 font-medium">
                        Layanan <strong>Jasa Bimbingan Pembuatan Kuesioner & Olah Data Statistik</strong> kami siap membantu Anda mulai dari penyusunan matriks penelitian, pembuatan kuesioner Google Form, hingga lolos uji validitas dan reliabilitas. Data dijamin valid, aman, dan siap disidangkan!
                    </p>
                    <a href="https://wa.me/6282121300902?text=Halo%20Admin,%20saya%20butuh%20bantuan%20pembuatan%20kuesioner%20dan%20olah%20data%20untuk%20skripsi%20saya" target="_blank" class="inline-block mt-4 bg-brand-600 text-white font-bold py-2 px-6 rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasi Kuesioner Sekarang
                    </a>
                </div>
`
  },
  {
    filename: 'penyebab-daftar-pustaka-terkena-turnitin.html',
    title: 'Mengapa Daftar Pustaka Sering Terkena Plagiasi di Turnitin? Ini Solusinya',
    desc: 'Kesal karena daftar pustaka membuat skor Turnitin skripsi Anda tinggi? Temukan penyebab dan cara efektif mengatasi similarity index pada referensi.',
    h1: 'Penyebab Daftar Pustaka Terkena Turnitin dan Cara Mengatasinya',
    category: 'Cek Plagiasi',
    date: '8 September 2026',
    icon: 'fa-shield-halved',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Apakah Anda pernah merasa frustrasi karena sudah memparafrase seluruh isi Bab 1 sampai Bab 5 dengan susah payah, tetapi hasil uji Turnitin tetap tinggi hanya karena bagian <strong>Daftar Pustaka</strong> atau <em>Bibliography</em> terdeteksi sebagai plagiat?
                </p>

                <p class="mb-6">
                    Kondisi ini sangat sering dialami oleh mahasiswa. Terdeteksinya daftar pustaka dalam <em>similarity index</em> (indeks kesamaan) Turnitin tentu merugikan karena membuat skor akhir melebihi batas toleransi yang ditetapkan kampus (biasanya 20% - 25%). Artikel ini akan mengupas tuntas mengapa hal tersebut terjadi dan bagaimana cara teknis untuk mengatasinya.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Mengapa Daftar Pustaka Terdeteksi Sebagai Plagiasi?</h2>
                <p class="mb-6">
                    Sistem algoritma Turnitin bekerja dengan mencocokkan susunan teks pada dokumen Anda dengan miliaran database mereka (jurnal, website, dan dokumen tugas yang pernah diunggah). Daftar pustaka terdeteksi karena:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Format yang Baku (Standardisasi):</strong> Penulisan referensi memiliki format baku internasional seperti APA, MLA, atau Harvard Style. Karena urutan nama penulis, tahun, judul buku, dan penerbit harus persis sama, Turnitin akan melihatnya sebagai teks duplikat dari dokumen orang lain yang pernah mengutip buku/jurnal yang sama.</li>
                    <li><strong>Tidak Ada Elemen Unik:</strong> Berbeda dengan isi paragraf yang bisa diparafrase, Anda <strong>DILARANG KERAS</strong> mengubah atau memparafrase judul buku dan nama penulis dalam daftar pustaka demi menurunkan Turnitin. Hal tersebut melanggar etika akademik.</li>
                    <li><strong>Pengaturan (Setting) Turnitin oleh Dosen:</strong> Penyebab utama sebenarnya ada pada administrator atau dosen yang melakukan pengecekan. Jika mereka tidak mengecualikan (exclude) bagian daftar pustaka, maka sistem akan menghitungnya secara mentah-mentah.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Cara Mengatasi Daftar Pustaka yang Terkena Turnitin</h2>
                <p class="mb-6">
                    Berikut adalah langkah-langkah solutif yang bisa Anda terapkan atau sampaikan kepada dosen/petugas perpustakaan:
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">1. Meminta Fitur "Exclude Bibliography" Diaktifkan</h3>
                <p class="mb-6">
                    Ini adalah cara yang paling benar secara sistem. Saat dosen atau petugas perpus mengunggah dokumen Anda, minta mereka untuk mencentang opsi <strong>"Exclude Bibliography"</strong> pada pengaturan (settings) Turnitin. Dengan begitu, algoritma akan secara otomatis mengabaikan teks apapun yang berada di bawah judul "Daftar Pustaka" atau "References".
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">2. Pastikan Judul "DAFTAR PUSTAKA" Ditulis dengan Benar</h3>
                <p class="mb-6">
                    Fitur <em>Exclude Bibliography</em> hanya akan berfungsi jika Turnitin mengenali bahwa halaman tersebut adalah daftar pustaka. Pastikan Anda menuliskan heading tepat sebagai "DAFTAR PUSTAKA" atau "REFERENCES" di tengah halaman (Center) tanpa tambahan kata lain seperti "Daftar Pustaka Skripsi Bab 1-5". Jika penulisannya salah, sistem AI Turnitin mungkin gagal mendeteksi batas pengecualiannya.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">3. Menggunakan Gambar (Tidak Disarankan)</h3>
                <p class="mb-6">
                    Beberapa mahasiswa mengambil jalan pintas dengan me-<em>screenshot</em> daftar pustaka dan memasukkannya sebagai format gambar (JPEG/PNG) ke dalam file Word. Turnitin memang tidak mendeteksi teks di dalam gambar, namun cara ini sangat dihindari dan dianggap sebagai <strong>kecurangan akademik (Cheating)</strong>. Dosen yang teliti pasti akan mengetahuinya dan bisa menolak skripsi Anda.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">4. Memisahkan File Daftar Pustaka</h3>
                <p class="mb-6">
                    Jika kampus Anda meminta pengecekan per bab, lebih baik Anda tidak memasukkan daftar pustaka pada saat pengecekan plagiasi Bab 1-5. Satukan daftar pustaka di file terpisah jika hanya untuk arsip perpustakaan, atau hapus sementara daftar pustaka saat dokumen akan dicek di Turnitin (jika diizinkan oleh dosen).
                </p>

                <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl my-8">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Butuh Cek Turnitin Cepat dan Jasa Parafrase?</h3>
                    <p class="text-slate-700 mb-4">
                        Sudah pusing revisi isi skripsi tapi skor Turnitin masih menyala merah di atas batas wajar? Jangan ambil risiko menggunakan trik curang (cheat) yang bisa merusak metadata file Anda.
                    </p>
                    <p class="text-slate-700 font-medium">
                        Gunakan layanan <strong>Cek Turnitin (No Repository Resmi) & Jasa Parafrase Manual</strong> dari tim ahli bahasa kami. Kami akan merombak susunan kalimat Anda secara akademis hingga lolos standar kampus (skor < 20%) tanpa mengubah makna penelitian.
                    </p>
                    <a href="https://wa.me/6282121300902?text=Halo%20Admin,%20saya%20ingin%20cek%20Turnitin%20dan%20tanya%20jasa%20parafrase%20penurun%20plagiasi" target="_blank" class="inline-block mt-4 bg-brand-600 text-white font-bold py-2 px-6 rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Pesan Jasa Turnitin & Parafrase
                    </a>
                </div>
`
  },
  {
    filename: 'cara-mencari-variabel-penelitian-skripsi.html',
    title: '7 Trik Rahasia Mencari Variabel Penelitian Skripsi yang Belum Banyak Diteliti',
    desc: 'Judul skripsi sering ditolak karena pasaran? Pelajari cara mencari variabel penelitian baru, unik, dan state-of-the-art dari jurnal bereputasi.',
    h1: 'Cara Mencari Variabel Penelitian Skripsi yang Unik dan Belum Banyak Diteliti',
    category: 'Tips Skripsi',
    date: '8 September 2026',
    icon: 'fa-magnifying-glass-chart',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    "Judul ini sudah banyak yang meneliti, coba cari variabel lain yang lebih <em>update</em>." Jika Anda sering mendengar kalimat ini dari dosen pembimbing (dospem) dan proposal Anda terus menerus ditolak, berarti Anda mengalami masalah klasikal: kekurangan inovasi (novelty) dalam pemilihan <strong>Variabel Penelitian</strong>.
                </p>

                <p class="mb-6">
                    Menggunakan variabel <em>mainstream</em> (pasaran) seperti "Pengaruh Kualitas Pelayanan terhadap Kepuasan Pelanggan" atau "Pengaruh Disiplin Kerja terhadap Kinerja Karyawan" di tahun 2026 kemungkinan besar akan ditolak mentah-mentah. Universitas kini menuntut mahasiswanya untuk meneliti fenomena terkini. Berikut adalah 7 trik mencari variabel penelitian yang segar, unik, dan dijamin langsung di-ACC oleh dospem!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Manfaatkan Bagian "Future Research / Rekomendasi" di Jurnal</h2>
                <p class="mb-6">
                    Ini adalah tambang emas yang sering dilewatkan mahasiswa. Ketika membaca jurnal penelitian terdahulu (terutama jurnal internasional SINTA 1/2 atau Scopus), langsung scroll ke bagian akhir yaitu bab Kesimpulan atau Saran (<em>Limitation and Future Research</em>).
                </p>
                <p class="mb-6">
                    Peneliti sebelumnya biasanya akan secara terang-terangan memberikan rekomendasi seperti: <em>"Penelitian selanjutnya disarankan untuk menambahkan variabel X (misalnya: Literasi Digital) untuk memperluas model ini."</em> Gunakan rekomendasi tersebut sebagai variabel kebaruan (novelty) skripsi Anda!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Cari Variabel Mediasi (Intervening) atau Moderasi yang Baru</h2>
                <p class="mb-6">
                    Jika Anda sangat ingin meneliti "Kepuasan Pelanggan" namun sudah pasaran, Anda tidak perlu membuangnya. Cukup tambahkan "bumbu" di tengahnya. Gunakan variabel Mediasi (perantara) atau Moderasi (memperkuat/memperlemah).
                </p>
                <p class="mb-6">
                    Contoh: Pengaruh Kualitas Layanan Aplikasi X terhadap Loyalitas Pengguna <strong>dengan <em>Trust</em> (Kepercayaan) sebagai Variabel Mediasi</strong>. Penggunaan variabel mediasi/moderasi membuat model penelitian Anda naik tingkat menjadi lebih kompleks (biasanya diolah menggunakan SmartPLS).
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Gabungkan Dua Bidang Ilmu (Interdisipliner)</h2>
                <p class="mb-6">
                    Menyilangkan ilmu dari dua konsentrasi yang berbeda akan memunculkan variabel yang sangat menarik. Misalnya, Anda anak Manajemen SDM, jangan hanya membahas Motivasi Kerja. Gabungkan dengan ilmu Psikologi atau IT. Contoh Variabel: <em>Technostress</em> (stres akibat teknologi), <em>Cyberloafing</em> (bermain internet saat jam kerja), atau <em>Green Human Resource Management (GHRM)</em>.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Eksplorasi Fenomena Gen-Z dan Tren Digital (Current Issues)</h2>
                <p class="mb-6">
                    Dosen sangat menyukai penelitian yang menjawab fenomena sosial terbaru. Carilah isu-isu hangat di media sosial, portal berita ekonomi, atau fenomena <em>startup</em>. Beberapa contoh variabel kontemporer yang relevan saat ini:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><em>Fear of Missing Out (FOMO)</em></li>
                    <li><em>Impulsive Buying behavior</em> pada TikTok Shop / Live Streaming</li>
                    <li><em>Work-Life Integration</em> (bukan sekedar Work-Life Balance)</li>
                    <li><em>Financial Technology (Fintech) Adoption</em> atau <em>Paylater</em></li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Gunakan Keyword Pencarian yang Spesifik di Google Scholar</h2>
                <p class="mb-6">
                    Jangan hanya mengetik "Jurnal Pemasaran". Gunakan fitur filter tahun (maksimal 3 tahun terakhir) pada Google Scholar. Gunakan kata kunci berbahasa Inggris karena perkembangan ilmu lebih cepat tercatat di jurnal internasional, misalnya: <em>"Determinants of [Topik Anda]"</em>, <em>"Antecedents and Consequences of [Topik Anda]"</em>, atau <em>"Recent Trends in [Bidang Ilmu]"</em>.
                </p>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-2xl my-8">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Masih Kesulitan Menemukan Judul dan Jurnal Referensi?</h3>
                    <p class="text-slate-700 mb-4">
                        Mencari jurnal acuan (grand theory) untuk mendukung variabel baru kadang sangat sulit karena keterbatasan akses ke portal jurnal internasional berbayar.
                    </p>
                    <p class="text-slate-700 font-medium">
                        Kami menyediakan <strong>Layanan Konsultasi Judul & Pencarian Jurnal Referensi (Nasional/Internasional)</strong>. Kami akan merumuskan 3 opsi judul proposal yang inovatif lengkap dengan matriks variabel dan PDF jurnal pendukungnya. Anda tinggal membawanya ke dosen pembimbing!
                    </p>
                    <a href="https://wa.me/6282121300902?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20pembuatan%20judul%20skripsi%20dan%20pencarian%20jurnal" target="_blank" class="inline-block mt-4 bg-brand-600 text-white font-bold py-2 px-6 rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Pesan Jasa Pencarian Judul & Jurnal
                    </a>
                </div>
`
  },
  {
    filename: 'kesalahan-grammar-abstrak-skripsi-bahasa-inggris.html',
    title: 'Kesalahan Grammar Paling Sering pada Abstrak Skripsi Bahasa Inggris',
    desc: 'Waspadai kesalahan tata bahasa (grammar), tenses, dan kosakata pada terjemahan abstrak skripsi bahasa Inggris yang sering menurunkan nilai sidang.',
    h1: 'Kesalahan Grammar yang Paling Sering Terjadi Pada Abstrak Skripsi Bahasa Inggris',
    category: 'Bahasa & Penulisan',
    date: '8 September 2026',
    icon: 'fa-language',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Abstrak adalah "wajah" dari skripsi Anda. Sebelum dosen penguji atau pembaca lain melihat isi ratusan halaman dokumen Anda, mereka akan terlebih dahulu membaca abstrak. Selain abstrak Bahasa Indonesia, hampir seluruh perguruan tinggi di Indonesia mewajibkan mahasiswa melampirkan <strong>Abstrak dalam Bahasa Inggris (English Abstract)</strong>.
                </p>

                <p class="mb-6">
                    Sayangnya, banyak mahasiswa mengandalkan <em>Google Translate</em> atau <em>AI Generator</em> gratisan secara mentah-mentah tanpa proses editing dan proofreading (baca ulang). Hasilnya? Susunan tata bahasa (<em>grammar</em>) menjadi berantakan, membingungkan, dan menghilangkan konteks akademis (<em>academic tone</em>). Berikut adalah kesalahan grammar dan tenses yang paling fatal namun sering dilakukan mahasiswa pada abstrak skripsi.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Kesalahan Pemilihan Tenses (Waktu)</h2>
                <p class="mb-6">
                    Abstrak memiliki aturan baku dalam penggunaan tenses berdasarkan bagian informasinya. Kesalahan paling umum adalah mencampuradukkan tenses sesuka hati. Aturan dasarnya adalah:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Background (Latar Belakang) & Fakta Umum:</strong> Gunakan <em>Present Tense</em> (Misal: <em>Technology plays a crucial role...</em>).</li>
                    <li><strong>Methodology (Metode) & Proses Penelitian:</strong> Gunakan <em>Past Tense</em> karena penelitian SUDAH Anda lakukan. (Misal: <em>This study used a quantitative approach...</em> BUKAN <em>This study uses...</em>).</li>
                    <li><strong>Results (Hasil Penelitian):</strong> Gunakan <em>Past Tense</em>. (Misal: <em>The results showed that variable X significantly influenced variable Y...</em>).</li>
                    <li><strong>Conclusion (Kesimpulan / Rekomendasi):</strong> Kembali menggunakan <em>Present Tense</em>. (Misal: <em>Therefore, it is recommended that...</em>).</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Terjemahan Harfiah (Word-for-Word Translation)</h2>
                <p class="mb-6">
                    Mesin penerjemah sering menerjemahkan idiom atau istilah lokal Indonesia secara harfiah kata demi kata, yang mana terdengar sangat aneh (<em>awkward</em>) dalam bahasa Inggris akademis.
                </p>
                <p class="mb-6">
                    <strong>Contoh Kasus:</strong>
                    Kalimat "Penelitian ini mengambil tempat di..." sering diterjemahkan mahasiswa menjadi <em>"This research takes place in..."</em> (salah konteks). Padahal istilah akademis yang lebih tepat adalah <em>"This research was conducted at..."</em>
                </p>
                <p class="mb-6">
                    Penggunaan <em>"Di samping itu..."</em> sering diartikan <em>"Beside that..."</em>, padahal dalam konteks formal sebaiknya menggunakan <em>"Furthermore,"</em> atau <em>"Moreover,"</em>.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Kesalahan Penggunaan Active vs Passive Voice</h2>
                <p class="mb-6">
                    Dalam penulisan <em>academic paper</em>, struktur kalimat pasif (<em>Passive Voice</em>) lebih disukai daripada kalimat aktif karena menggeser fokus dari "Si Peneliti" menjadi ke "Objek Penelitian". 
                </p>
                <p class="mb-6">
                    <strong>Hindari:</strong> <em>"I distributed the questionnaire to 100 students."</em> (Terlalu personal/informal).<br>
                    <strong>Gunakan:</strong> <em>"The questionnaire was distributed to 100 students."</em> (Objektif/formal).
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Pengulangan Kata yang Terus Menerus (Redundancy)</h2>
                <p class="mb-6">
                    Karena keterbatasan kosakata bahasa Inggris, mahasiswa sering menggunakan kata sambung yang itu-itu saja di setiap awal kalimat abstrak. Misalnya, memulai kalimat berturut-turut dengan kata: <em>"The result of this study...", "The result showed...", "The result also indicated..."</em>. 
                </p>
                <p class="mb-6">
                    Hal ini menurunkan estetika tulisan. Gunakan variasi <em>transition words</em> dan sinonim, seperti: <em>The findings revealed..., Furthermore, the analysis demonstrated..., Ultimately, it can be concluded that...</em>
                </p>

                <div class="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl my-8">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Kurang Percaya Diri dengan Terjemahan Abstrak Anda?</h3>
                    <p class="text-slate-700 mb-4">
                        Jangan biarkan nilai skripsi Anda dipotong oleh dosen penguji hanya karena abstrak Bahasa Inggris yang berantakan, tidak terbaca, atau ketahuan hasil Google Translate mentah.
                    </p>
                    <p class="text-slate-700 font-medium">
                        Serahkan pada <strong>Layanan Jasa Translate Abstrak & Proofreading Akademis</strong> dari kami! Dikerjakan secara manual oleh translator berpengalaman dengan menggunakan standar kosa kata akademis (Academic English) yang dijamin lolos revisi penguji. Pengerjaan cepat, hasil tepat sasaran.
                    </p>
                    <a href="https://wa.me/6282121300902?text=Halo%20Admin,%20saya%20butuh%20jasa%20translate%20dan%20proofreading%20abstrak%20skripsi%20bahasa%20Inggris" target="_blank" class="inline-block mt-4 bg-brand-600 text-white font-bold py-2 px-6 rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Pesan Jasa Translate Abstrak
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
    <!-- Content Section -->
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
                <span class="inline-block ${article.color} text-${article.color.replace('bg-', '').replace('-50', '')}-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">${article.category}</span>
                <h1 class="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 leading-tight mb-6">
                    ${article.h1}
                </h1>
                <div class="flex items-center justify-center text-sm text-slate-500 space-x-4">
                    <span class="flex items-center"><i class="fa-solid fa-calendar mr-2"></i> ${article.date}</span>
                    <span class="flex items-center"><i class="fa-solid fa-user-pen mr-2"></i> Tim Pena Elit</span>
                </div>
            </div>

            <!-- Hero Image -->
            <div class="rounded-3xl overflow-hidden shadow-xl mb-12 h-64 md:h-96 ${article.color} flex items-center justify-center border border-slate-100 relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-${article.color.replace('bg-', '').replace('-50', '')}-100 to-transparent opacity-50"></div>
                <i class="fa-solid ${article.icon} text-9xl ${article.iconColor} z-10 animate-float"></i>
            </div>

            <!-- Article Content -->
            <article class="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-700">
${article.body}
            
                <!-- Artikel Terkait -->
                <div class="mt-12 mb-8 border-t border-slate-100 pt-10">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><i class="fa-solid fa-book-open text-brand-600"></i> Baca Juga Artikel Terkait:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <a href="jasa-skripsi-purwakarta.html" class="group block border border-slate-200 rounded-2xl p-5 hover:border-brand-500 hover:shadow-lg transition-all bg-white">
                            <span class="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 block">Info Layanan</span>
                            <h4 class="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">Jasa Pembuatan Skripsi Terbaik & Anti Plagiat (Bisa Bayar Bertahap)</h4>
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

console.log('All 4 new articles generated successfully!');
