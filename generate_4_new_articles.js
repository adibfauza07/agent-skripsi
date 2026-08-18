const fs = require('fs');
const path = require('path');

const headerTemplate = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const articles = [
  {
    filename: 'cara-mengatasi-mental-block-skripsi.html',
    title: 'Cara Mengatasi Mental Block Saat Mengerjakan Skripsi',
    desc: 'Sering stuck dan kehilangan motivasi saat menyusun skripsi? Ketahui penyebab mental block dan cara mengatasinya agar skripsi cepat selesai.',
    h1: 'Cara Ampuh Mengatasi Mental Block Saat Mengerjakan Skripsi',
    category: 'Tips Kuliah',
    date: '18 Agustus 2026',
    icon: 'fa-brain',
    color: 'bg-teal-50',
    iconColor: 'text-teal-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Pernahkah kamu duduk berjam-jam di depan laptop, menatap layar Microsoft Word yang kosong, namun tidak ada satu kalimat pun yang berhasil diketik? Jika iya, kamu sedang mengalami yang namanya <strong>Mental Block</strong>.
                </p>

                <p class="mb-6">
                    Mental block adalah kondisi psikologis di mana otak seolah-olah "macet" dan kehilangan inspirasi atau motivasi untuk melanjutkan pekerjaan. Bagi mahasiswa akhir, ini adalah musuh utama yang membuat skripsi terbengkalai berbulan-bulan. Berikut adalah cara ampuh mengatasinya!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Kenali Penyebabnya (Overwhelming)</h2>
                <p class="mb-6">
                    Seringkali mental block terjadi karena kamu memikirkan skripsi sebagai satu "gunung" tugas yang sangat besar. Membayangkan harus menulis puluhan halaman sekaligus akan membuat otak merasa terbebani (overwhelmed).
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Pecah tugas menjadi bagian-bagian sangat kecil (micro-tasks). Jangan menargetkan "Hari ini saya harus selesaikan Bab 2". Ubahlah menjadi "Hari ini saya hanya akan merangkum 3 jurnal untuk sub-bab 2.1". Target kecil jauh lebih mudah dieksekusi dan tidak mengintimidasi.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Teknik "Muntah" (Free Writing)</h2>
                <p class="mb-6">
                    Salah satu pemicu mental block adalah sifat perfeksionis. Kamu ingin setiap kalimat yang diketik langsung sempurna secara tata bahasa dan akademis. Akibatnya, kamu menghapus-mengetik-menghapus terus menerus.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Lakukan "Free Writing". Tulis saja semua ide yang ada di kepalamu tanpa mempedulikan typo, margin, atau struktur kalimat. Biarkan idemu mengalir (muntah) ke kertas/layar. Nanti, kamu bisa mengedit dan merapikannya setelah draft kasarnya selesai.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Ubah Suasana Lingkungan (Change of Scenery)</h2>
                <p class="mb-6">
                    Mengerjakan skripsi di kamar kos yang berantakan, di atas kasur yang sama setiap hari akan membuat otak jenuh dan mengasosiasikan tempat tersebut dengan stres.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Bawa laptopmu ke perpustakaan kampus, <em>co-working space</em>, atau kedai kopi. Melihat orang lain yang juga sedang sibuk bekerja (body doubling) secara psikologis dapat memacu motivasimu untuk ikut produktif.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Beri Jeda dan Hadiah (Reward System)</h2>
                <p class="mb-6">
                    Memaksa otak bekerja saat sedang "korslet" justru kontraproduktif. Kamu butuh istirahat sejenak untuk memulihkan energi mental. 
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Gunakan sistem hadiah. "Jika saya berhasil mengetik 2 halaman hari ini, saya boleh menonton 1 episode drakor malam ini". Merayakan kemenangan kecil (small wins) akan menjaga dopamin dan motivasimu tetap stabil.
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Mental Block Tak Kunjung Hilang?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Jika kamu sudah stuck berbulan-bulan dan merasa tidak sanggup lagi melanjutkan skripsi sendirian, jangan menyerah! Masa depan dan gelar sarjanamu terlalu berharga untuk dilepaskan.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Tim <strong>Pena Elit</strong> siap menjadi mentor sekaligus "Co-Pilot" skripsimu! Melalui layanan <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Bimbingan Skripsi Intensif</a>, kami akan memecah kebuntuanmu, memberikan arahan materi, hingga membantu penyusunan draf agar skripsimu kembali <em>on track</em> menuju ACC.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20stuck%20mengerjakan%20skripsi%20dan%20butuh%20bantuan." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Dapatkan Solusi Skripsi Sekarang
                    </a>
                </div>
    `
  },
  {
    filename: 'tips-membuat-powerpoint-sidang-skripsi.html',
    title: 'Tips Membuat PowerPoint Sidang Skripsi yang Menarik Dosen',
    desc: 'Jangan buat PPT sidang skripsi yang membosankan! Ikuti tips membuat presentasi PowerPoint yang visual, ringkas, dan elegan.',
    h1: 'Tips Membuat PowerPoint Sidang Skripsi yang Menarik dan Profesional',
    category: 'Bimbingan Sidang',
    date: '18 Agustus 2026',
    icon: 'fa-desktop',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Sidang skripsi adalah momen pembuktian terakhir. Sayangnya, banyak mahasiswa yang gagal memberikan kesan pertama yang baik karena slide presentasi (PowerPoint) mereka terlihat seperti koran berjalan. 
                </p>

                <p class="mb-6">
                    Menyalin seluruh isi Word ke dalam PowerPoint (PPT) adalah kesalahan fatal! Slide yang dipenuhi teks kecil tidak akan dibaca oleh dosen penguji, justru akan membuat presentasimu membosankan. Berikut adalah tips menyusun PPT sidang skripsi yang elegan dan profesional!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Prinsip 6x6 (Maksimal 6 Baris)</h2>
                <p class="mb-6">
                    PowerPoint adalah "Alat Bantu Visual", bukan dokumen teks. Gunakan prinsip 6x6: maksimal 6 poin (bullet points) per slide, dan maksimal 6 kata per poin.
                </p>
                <p class="mb-6">
                    Tuliskan saja <em>keyword</em> atau inti gagasannya di slide. Penjelasan lengkapnya harus kamu sampaikan secara lisan. Ini menunjukkan bahwa kamu menguasai materi, bukan sekadar membaca slide.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Visualisasikan Data (Gunakan Grafik & Bagan)</h2>
                <p class="mb-6">
                    Dosen penguji lebih suka melihat alur logika yang divisualisasikan daripada membaca paragraf panjang.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li>Gunakan <strong>Bagan/SmartArt</strong> untuk menjelaskan Kerangka Berpikir di Bab 2.</li>
                    <li>Gunakan <strong>Pie Chart atau Bar Chart</strong> untuk menyajikan karakteristik responden atau hasil uji statistik di Bab 4. Jangan menampilkan tabel mentah dari SPSS yang font-nya sangat kecil!</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Desain Elegan dan Minimalis</h2>
                <p class="mb-6">
                    Hindari template PPT bawaan yang terlalu norak (warna-warni) atau menggunakan animasi yang berlebihan (teks berputar-putar, suara tepuk tangan).
                </p>
                <p class="mb-6">
                    Gunakan desain bersih dengan latar belakang terang (putih/abu-abu muda) dan teks gelap, atau <em>dark mode</em> yang elegan. Gunakan font sans-serif yang tegas dan mudah dibaca seperti Montserrat, Roboto, atau Arial dengan ukuran minimal 24pt. Sertakan logo kampus di setiap slide.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Struktur Slide yang Ideal</h2>
                <p class="mb-6">
                    Waktu presentasi sidang biasanya hanya 10-15 menit. Jadi, kamu tidak perlu membuat lebih dari 15-20 slide. Berikut struktur idealnya:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Judul (1 slide):</strong> Judul, Nama, NIM, Logo Kampus.</li>
                    <li><strong>Pendahuluan (2-3 slide):</strong> Fenomena masalah utama, Rumusan Masalah, Tujuan.</li>
                    <li><strong>Tinjauan Pustaka (1-2 slide):</strong> Grand theory dan Kerangka Berpikir.</li>
                    <li><strong>Metodologi (2 slide):</strong> Jenis penelitian, populasi/sampel, teknik analisis.</li>
                    <li><strong>Hasil & Pembahasan (4-5 slide):</strong> Inti dari temuan penelitan. Fokuskan presentasimu di bagian ini.</li>
                    <li><strong>Kesimpulan & Saran (1-2 slide):</strong> Jawaban dari rumusan masalah.</li>
                </ul>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-laptop-file"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Bikin PPT Sendiri Bikin Pusing?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Naskah skripsi sudah beres, tapi jadwal sidang sangat mepet dan tidak ada waktu lagi untuk mendesain PowerPoint yang proper? 
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Serahkan pada ahlinya! <strong>Pena Elit</strong> menyediakan <a href="joki-tugas-kuliah.html" class="text-brand-600 font-bold hover:underline">Jasa Pembuatan PowerPoint Presentasi</a>. Kami akan menyarikan inti skripsimu menjadi puluhan slide ringkas, mendesainnya dengan layout premium, dan menyisipkan bagan/grafik menarik yang dijamin memukau dosen penguji!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20jasa%20desain%20PPT%20untuk%20sidang%20skripsi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Pesan Desain PPT Sidang
                    </a>
                </div>
    `
  },
  {
    filename: 'cara-menghubungi-dosen-pembimbing.html',
    title: 'Etika dan Cara Menghubungi Dosen Pembimbing via WhatsApp',
    desc: 'Sering diabaikan (di-read doang) oleh dosen pembimbing? Pelajari etika dan template chat yang sopan untuk menghubungi dosen via WhatsApp.',
    h1: 'Etika Menghubungi Dosen Pembimbing via WhatsApp Agar Tidak Diabaikan',
    category: 'Konsultasi Skripsi',
    date: '18 Agustus 2026',
    icon: 'fa-comments',
    color: 'bg-green-50',
    iconColor: 'text-green-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Di era digital, komunikasi antara mahasiswa dan dosen pembimbing sebagian besar beralih ke aplikasi <em>WhatsApp</em>. Namun, banyak mahasiswa mengeluh karena pesan mereka sering diabaikan (di-read saja) atau dijawab dengan ketus. 
                </p>

                <p class="mb-6">
                    Bukan karena dosennya sombong, melainkan karena tata cara dan etika mahasiswa saat mengirim pesan seringkali kurang sopan atau tidak efisien. Dosen menerima puluhan chat setiap hari dari mahasiswa. Jika pesanmu tidak sesuai standar etika akademik, otomatis akan dihiraukan. Berikut panduannya!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Perhatikan Waktu Pengiriman Pesan (Golden Rules)</h2>
                <p class="mb-6">
                    Jangan pernah mengirim chat (apalagi menelepon) di luar jam kerja (sebelum jam 8 pagi atau setelah jam 5 sore), waktu ibadah, dan hari libur (Sabtu-Minggu atau tanggal merah). Waktu terbaik untuk menghubungi dosen adalah hari kerja (Senin-Jumat) antara pukul <strong>08.00 hingga 15.00</strong>.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Struktur Pesan yang Baik dan Benar</h2>
                <p class="mb-6">
                    Pesanmu harus lengkap namun tidak bertele-tele. Jangan pernah mengirimkan salam pendek seperti "P" atau sekadar "Assalamualaikum pak" lalu menunggu dibalas. Sampaikan secara utuh dalam satu balon chat (paragraf).
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Salam Pembuka:</strong> "Selamat pagi/siang, Bapak/Ibu [Sebutkan Nama beserta Gelarnya]." Jika dosen beragama Islam, awali dengan "Assalamualaikum".</li>
                    <li><strong>Perkenalkan Diri:</strong> "Mohon maaf mengganggu waktu Bapak/Ibu. Saya [Nama Lengkap], mahasiswa bimbingan skripsi Bapak/Ibu, angkatan [Tahun]."</li>
                    <li><strong>Maksud dan Tujuan:</strong> Langsung <em>to the point</em>. Misalnya, ingin meminta jadwal bimbingan atau mengirim revisi.</li>
                    <li><strong>Penutup:</strong> "Terima kasih banyak atas waktu dan perhatian Bapak/Ibu. Selamat pagi."</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Contoh Template Pesan (Copy-Paste Saja)</h2>
                <p class="mb-6 bg-slate-100 p-4 rounded-lg text-sm border-l-4 border-brand-500 italic">
                    "Assalamualaikum Wr. Wb. Selamat pagi, Bapak Dr. Budi Santoso, S.E., M.Si.<br><br>
                    Mohon maaf mengganggu waktu Bapak. Saya Andi Pradana, mahasiswa program studi Akuntansi angkatan 2020 (NIM 123456).<br><br>
                    Tujuan saya menghubungi Bapak adalah untuk menginformasikan bahwa saya telah menyelesaikan revisi Bab 1 hingga Bab 3 sesuai dengan arahan Bapak minggu lalu. Kiranya jika Bapak berkenan, kapan saya bisa menemui Bapak untuk melakukan bimbingan selanjutnya?<br><br>
                    Terima kasih atas waktu dan bimbingan Bapak. Selamat pagi."
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Jangan Mengejar (Spamming)</h2>
                <p class="mb-6">
                    Jika pesan belum dibalas setelah 24 jam, jangan melakukan <em>spam chat</em> (mengirim tanda tanya berkali-kali). Tunggulah 1-2 hari kerja. Jika masih belum dibalas, kirim ulang pesan dengan kata pengantar permintaan maaf (contoh: "Mohon maaf Bapak/Ibu, saya izin mengingatkan kembali pesan saya sebelumnya...").
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Bimbingan Terus Terhambat karena Skripsi Belum Siap?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Menghubungi dosen sudah lancar, tapi draft skripsi justru berantakan dan selalu disuruh rombak ulang? Jangan biarkan masa studimu semakin molor.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Kami siap membantu merapikan, melengkapi, dan memperbaiki kualitas skripsimu! Melalui <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Jasa Konsultasi Skripsi</a> Pena Elit, kami akan membimbingmu agar draft penelitianmu menjadi sempurna sebelum diajukan ke dosen pembimbing.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bantuan%20konsultasi%20untuk%20merevisi%20skripsi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasi Skripsi Sekarang
                    </a>
                </div>
    `
  },
  {
    filename: 'perbedaan-skripsi-tesis-dan-disertasi.html',
    title: 'Perbedaan Skripsi, Tesis, dan Disertasi yang Wajib Diketahui',
    desc: 'Apa bedanya Skripsi (S1), Tesis (S2), dan Disertasi (S3)? Simak perbedaan tingkat kesulitan, bobot kebaruan (novelty), dan tujuannya di sini.',
    h1: 'Memahami Perbedaan Skripsi, Tesis, dan Disertasi yang Wajib Mahasiswa Tahu',
    category: 'Tips Kuliah',
    date: '18 Agustus 2026',
    icon: 'fa-book-bookmark',
    color: 'bg-rose-50',
    iconColor: 'text-rose-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Di dunia akademik perguruan tinggi, terdapat tiga tugas akhir yang menjadi syarat wajib kelulusan bagi para mahasiswa berdasarkan jenjang pendidikannya: Skripsi untuk Sarjana (S1), Tesis untuk Magister (S2), dan Disertasi untuk Doktoral (S3).
                </p>

                <p class="mb-6">
                    Meskipun ketiganya sama-sama merupakan karya tulis ilmiah (penelitian), nyatanya tingkat kesulitan, bobot filosofis, dan kontribusinya terhadap ilmu pengetahuan sangatlah berbeda. Jangan sampai saat menyusun skripsi (S1), gayamu terlalu muluk-muluk layaknya mahasiswa S3 yang akhirnya membuatmu gagal lulus! Mari kita bedah perbedaannya.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Skripsi (S1): Mengaplikasikan Teori</h2>
                <p class="mb-6">
                    Fokus utama dari skripsi adalah <strong>menguji pemahaman mahasiswa</strong> terhadap teori-teori yang telah dipelajari selama kuliah.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Tujuan:</strong> Mahasiswa S1 dituntut mampu mengidentifikasi masalah di lapangan, lalu menyelesaikannya menggunakan pisau analisis (teori) yang sudah ada secara mandiri.</li>
                    <li><strong>Kebaruan (Novelty):</strong> Tidak diwajibkan menemukan hal baru. Mahasiswa S1 diperbolehkan mereplikasi penelitian sebelumnya, asalkan objek/lokasi/tahun penelitiannya berbeda.</li>
                    <li><strong>Bobot:</strong> Lebih menekankan pada prosedur penelitian yang benar (metodologi) daripada penemuan fenomenal.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Tesis (S2): Mengembangkan Teori</h2>
                <p class="mb-6">
                    Tesis tingkatannya jauh lebih mendalam. Tidak cukup hanya mengaplikasikan teori, mahasiswa Magister diharapkan dapat <strong>mengembangkan pemikiran</strong> atau memberikan sintesis baru dari teori yang ada.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Tujuan:</strong> Menguji kemampuan sintesis dan analisis tajam mahasiswa terhadap suatu permasalahan akademik yang kompleks.</li>
                    <li><strong>Kebaruan (Novelty):</strong> Disyaratkan memiliki <em>novelty</em> (unsur kebaruan) meskipun belum radikal. Harus ada nilai tambah bagi literatur (misalnya: menghubungkan dua grand theory yang sebelumnya jarang dipadukan).</li>
                    <li><strong>Sifat:</strong> Lebih filosofis dan membutuhkan penguasaan multi-referensi internasional.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Disertasi (S3): Menemukan Teori Baru</h2>
                <p class="mb-6">
                    Ini adalah kasta tertinggi penelitian akademik. Mahasiswa Doktoral (S3) dianggap tidak kompeten jika hanya menyadur teori orang lain. Mereka dituntut untuk "meruntuhkan" teori lama atau <strong>menemukan teori baru</strong>.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Tujuan:</strong> Menciptakan kontribusi orisinal yang sangat signifikan terhadap cabang ilmu pengetahuan tertentu (<em>State of the Art</em>).</li>
                    <li><strong>Kebaruan (Novelty):</strong> Mutlak harus orisinal. Penemuan di disertasi seringkali menjadi model, rumus, atau konsep baru yang akan digunakan dan dikutip oleh mahasiswa S1 dan S2 di masa depan.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Kesimpulan</h2>
                <p class="mb-6">
                    Singkatnya: Mahasiswa S1 (Skripsi) adalah <em>pengguna teori</em>. Mahasiswa S2 (Tesis) adalah <em>pengembang teori</em>. Dan mahasiswa S3 (Disertasi) adalah <em>penemu teori</em>. Oleh karena itu, bagi kamu mahasiswa S1, tetaplah fokus dan tidak perlu <em>overthinking</em> mencari masalah penelitian yang terlalu rumit dan bombastis!
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-book-open-reader"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Pusing Menyusun Naskah Akademik S1/S2?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Baik skripsi maupun tesis memiliki tingkat kesulitan tersendiri dalam merangkai kata akademik dan mengolah data penelitian agar hasilnya valid.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Gunakan layanan <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Bimbingan Skripsi & Olah Data</a> dari Pena Elit. Konsultan akademik kami siap membantu merapikan format tesis/skripsimu, menjalankan pengujian statistik dengan SPSS/SmartPLS, serta menyiapkan presentasi sidang yang maksimal.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20layanan%20bimbingan%20dan%20olah%20data%20akademik." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Hubungi Konsultan Kami
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

console.log('All 4 new articles generated successfully!');
