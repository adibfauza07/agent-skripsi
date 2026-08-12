const fs = require('fs');
const path = require('path');

const headerTemplate = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const articles = [
  {
    filename: 'rahasia-dosen-pembimbing-skripsi.html',
    title: 'Rahasia Dosen Pembimbing: Kesalahan Fatal yang Bikin Skripsi Dicoret',
    desc: 'Mengerjakan skripsi seringkali terhambat oleh revisi dosen. Ketahui kesalahan fatal yang sering mahasiswa lakukan agar skripsi cepat ACC.',
    h1: 'Rahasia Dosen Pembimbing: Kesalahan Fatal yang Bikin Skripsi Kamu Dicoret-coret',
    category: 'Konsultasi Skripsi',
    date: '12 Agustus 2026',
    icon: 'fa-user-tie',
    color: 'bg-red-50',
    iconColor: 'text-red-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Proses bimbingan skripsi seringkali menjadi drama tersendiri bagi mahasiswa akhir. Mulai dari menunggu dosen berjam-jam, hingga menghadapi kenyataan pahit saat naskah skripsi dicoret-coret dengan tinta merah. Padahal, revisi yang menumpuk bisa dihindari jika mahasiswa memahami apa yang sebenarnya diharapkan oleh dosen pembimbing.
                </p>

                <p class="mb-6">
                    Banyak mahasiswa merasa dosen pembimbing mereka terlalu "killer" atau perfeksionis. Kenyataannya, dosen hanya ingin menjaga kualitas karya ilmiah sesuai standar akademik. Sayangnya, ada beberapa kesalahan fatal yang sering dilakukan mahasiswa, yang membuat dosen pembimbing langsung "ilfeel" dan enggan memberikan ACC. Berikut adalah rahasia dari sudut pandang dosen mengenai kesalahan-kesalahan yang wajib kamu hindari.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Latar Belakang Masalah yang Terlalu Luas dan Tidak Fokus</h2>
                <p class="mb-6">
                    Kesalahan pertama yang paling sering ditemukan di Bab 1 adalah latar belakang yang sangat bertele-tele. Mahasiswa seringkali memulai dari hal yang terlalu general, misalnya sejarah pendidikan di Indonesia sejak zaman penjajahan, padahal fokus penelitiannya adalah penerapan metode belajar spesifik di satu SMP.
                </p>
                <p class="mb-6">
                    <strong>Apa yang diinginkan dosen?</strong> Dosen ingin melihat pola <em>piramida terbalik</em>. Mulailah dari isu umum yang relevan, lalu segera mengerucut ke masalah spesifik yang terjadi di lokasi penelitian. Tunjukkan urgensi penelitianmu dengan data awal atau hasil observasi pendahuluan yang konkret.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Copy-Paste Tanpa Parafrase (Plagiarisme)</h2>
                <p class="mb-6">
                    Jangan pernah berpikir kamu bisa membodohi dosen dengan melakukan copy-paste dari Wikipedia, blog, atau skripsi kakak tingkat. Dosen pembimbing membaca puluhan hingga ratusan skripsi setiap tahun. Mereka memiliki intuisi tajam untuk mendeteksi kalimat yang bukan tulisan asli mahasiswanya. Belum lagi saat ini kampus menggunakan <em>Turnitin</em>.
                </p>
                <p class="mb-6">
                    <strong>Apa yang diinginkan dosen?</strong> Dosen menghargai kejujuran akademik. Jika kamu mengambil gagasan orang lain, lakukan <em>parafrase</em> (menulis ulang dengan bahasamu sendiri) dan cantumkan sitasi yang benar. Skripsi dengan banyak sitasi jurnal kredibel justru menunjukkan bahwa kamu rajin membaca.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Format Penulisan Berantakan (Typo, Margin, Spasi)</h2>
                <p class="mb-6">
                    Ini adalah hal yang paling membuat dosen jengkel. Sebelum dosen membaca isi dan argumen penelitianmu, hal pertama yang mereka lihat adalah tampilan visual skripsimu. Jika margin berantakan, jarak spasi tidak konsisten, banyak <em>typo</em> (salah ketik), dan daftar pustaka tidak urut abjad, dosen akan menganggap kamu tidak serius dan malas.
                </p>
                <p class="mb-6">
                    "Jika hal teknis dan mudah seperti format saja salah, bagaimana dengan metodologinya?" Itulah yang ada di pikiran dosen. Selalu <em>proofread</em> atau periksa ulang format skripsimu sebelum diserahkan.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Metodologi Penelitian yang Tidak Sesuai</h2>
                <p class="mb-6">
                    Seringkali mahasiswa memilih metode kuantitatif hanya karena ikut-ikutan teman, padahal rumusan masalahnya membutuhkan pendekatan kualitatif (atau sebaliknya). Selain itu, kesalahan dalam menentukan populasi, sampel, dan teknik pengumpulan data juga menjadi sasaran empuk coretan dosen.
                </p>
                <p class="mb-6">
                    Bab 3 (Metodologi Penelitian) adalah "dapur" dari skripsimu. Jika resep dan alat masaknya salah, maka hasilnya di Bab 4 pasti tidak valid. Pastikan kamu benar-benar paham buku panduan metodologi, bukan sekadar <em>copy-paste</em> dari skripsi lama.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Menghilang (Ghosting) Saat Proses Bimbingan</h2>
                <p class="mb-6">
                    Revisi yang banyak sering membuat mahasiswa mentalnya <em>down</em>, lalu memilih untuk menghilang berbulan-bulan. Ketika mendekati <em>deadline</em> pendaftaran sidang, tiba-tiba muncul dan memaksa dosen untuk segera ACC. Ini adalah kesalahan etika yang sangat fatal.
                </p>
                <p class="mb-6">
                    Dosen juga memiliki kesibukan mengajar, meneliti, dan membimbing banyak mahasiswa lain. Bersikaplah proaktif, hubungi dosen secara rutin dan sopan, serta tunjukkan <em>progress</em> perbaikan meskipun hanya sedikit.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Kesimpulan: Skripsi Selesai Bukan Karena Pintar Saja</h2>
                <p class="mb-6">
                    Lulus skripsi dengan cepat bukan hanya monopoli mahasiswa jenius, melainkan mahasiswa yang gigih, teliti, dan pandai berkomunikasi dengan pembimbingnya. Hindari 5 kesalahan fatal di atas, maka proses bimbinganmu akan jauh lebih mulus dan coretan merah di draft skripsimu akan berkurang drastis.
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Pusing Revisi Terus? Kami Siap Membantu!</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Jika kamu merasa kewalahan dengan revisi dari dosen atau <em>stuck</em> tidak tahu harus mulai dari mana, jangan biarkan skripsimu terbengkalai. <strong>Pena Elit</strong> hadir sebagai solusi masalah tugas akhirmu!
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Kami menyediakan <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Jasa Skripsi & Bimbingan Konsultasi Skripsi</a> yang siap mendampingi kamu dari pencarian judul hingga simulasi sidang. Bebaskan dirimu dari stres, lulus tepat waktu dengan kualitas riset yang membanggakan.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bantuan%20untuk%20jasa%20konsultasi%20skripsi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasi Gratis Sekarang
                    </a>
                </div>
    `
  },
  {
    filename: 'beda-jurnal-sinta-1-hingga-6.html',
    title: 'Jangan Asal Submit! Ini Beda Jurnal SINTA 1 hingga 6',
    desc: 'Masih bingung dengan tingkatan Jurnal SINTA? Simak perbedaan SINTA 1 hingga 6 agar publikasi jurnal kamu sesuai dengan syarat kelulusan kampus.',
    h1: 'Jangan Asal Submit! Ini Beda Jurnal SINTA 1 hingga 6 yang Wajib Mahasiswa Tahu',
    category: 'Publikasi Jurnal',
    date: '12 Agustus 2026',
    icon: 'fa-book-open-reader',
    color: 'bg-purple-50',
    iconColor: 'text-purple-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Belakangan ini, publikasi jurnal menjadi salah satu syarat wajib kelulusan bagi mahasiswa program Sarjana (S1), Magister (S2), hingga Doktor (S3). Di Indonesia, standar yang paling sering digunakan oleh perguruan tinggi adalah jurnal yang terindeks <strong>SINTA (Science and Technology Index)</strong>.
                </p>

                <p class="mb-6">
                    Namun, sayangnya banyak mahasiswa yang masih kebingungan ketika diminta untuk mempublikasikan artikel ilmiahnya ke jurnal SINTA. Pertanyaan yang sering muncul adalah: <em>"Apa bedanya SINTA 1, 2, 3, sampai 6?"</em> dan <em>"Harus submit ke SINTA berapa agar bisa lulus?"</em>. Jika kamu asal submit tanpa mengetahui perbedaannya, artikelmu bisa saja ditolak mentah-mentah atau justru ditolak oleh pihak kampus karena tidak sesuai standar. Mari kita bahas tuntas perbedaannya!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Apa Itu SINTA?</h2>
                <p class="mb-6">
                    SINTA adalah portal yang dikelola oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) Republik Indonesia. Portal ini berfungsi untuk mengukur kinerja ilmu pengetahuan dan teknologi yang meliputi kinerja peneliti, penulis, author, institusi, hingga jurnal ilmiah itu sendiri.
                </p>
                <p class="mb-6">
                    SINTA membagi jurnal ke dalam 6 tingkatan kualitas, mulai dari SINTA 1 (S1) yang merupakan peringkat tertinggi, hingga SINTA 6 (S6) yang merupakan peringkat terendah. Pembagian ini didasarkan pada nilai akreditasi Arjuna (Akreditasi Jurnal Nasional).
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Perbedaan Jurnal SINTA 1 hingga 6</h2>
                
                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. SINTA 1 (S1) dan SINTA 2 (S2): Kasta Tertinggi</h3>
                <p class="mb-4">
                    Jurnal yang masuk dalam kategori SINTA 1 dan 2 adalah jurnal-jurnal bereputasi sangat tinggi di tingkat nasional, dan sebagian besar SINTA 1 juga sudah terindeks di database internasional bereputasi seperti <strong>Scopus</strong> atau <strong>Web of Science (WoS)</strong>.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Kualitas Review:</strong> Sangat ketat (Rigorous Peer-Review). Penolakan (rejection rate) sangat tinggi.</li>
                    <li><strong>Bahasa:</strong> Biasanya wajib menggunakan Bahasa Inggris yang akademis.</li>
                    <li><strong>Waktu Tunggu:</strong> Bisa memakan waktu berbulan-bulan hingga lebih dari setahun dari <em>submit</em> hingga <em>published</em>.</li>
                    <li><strong>Target:</strong> Biasanya menjadi syarat wajib kelulusan untuk mahasiswa S3 (Doktoral) atau syarat kenaikan pangkat dosen menjadi Guru Besar.</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. SINTA 3 (S3) dan SINTA 4 (S4): Menengah (Middle)</h3>
                <p class="mb-4">
                    Ini adalah target publikasi yang paling umum bagi mahasiswa S2 (Magister) dan mahasiswa S1 di beberapa kampus negeri ternama. Jurnal di level ini memiliki kualitas tata kelola yang baik namun belum setaraf Scopus.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Kualitas Review:</strong> Cukup ketat. Artikel harus memiliki kebaruan (novelty) yang jelas.</li>
                    <li><strong>Bahasa:</strong> Menerima Bahasa Indonesia yang baku (EBI) maupun Bahasa Inggris.</li>
                    <li><strong>Waktu Tunggu:</strong> Sekitar 2 hingga 6 bulan.</li>
                    <li><strong>Target:</strong> Ideal untuk syarat kelulusan S2, syarat kelulusan S1 jalur tanpa skripsi, dan pelaporan hibah penelitian.</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">3. SINTA 5 (S5) dan SINTA 6 (S6): Jurnal Pemula</h3>
                <p class="mb-4">
                    Jurnal SINTA 5 dan 6 adalah jurnal yang baru berkembang, sedang merintis tata kelola yang lebih baik, atau memiliki lingkup spesifik skala lokal/regional. Jurnal ini sangat cocok bagi penulis pemula atau mahasiswa S1 yang sedang belajar menulis publikasi ilmiah.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Kualitas Review:</strong> Standar. Selama format sesuai template, plagiasi rendah, dan metode masuk akal, peluang diterima (acceptance rate) cukup tinggi.</li>
                    <li><strong>Bahasa:</strong> Bahasa Indonesia.</li>
                    <li><strong>Waktu Tunggu:</strong> Relatif cepat, berkisar antara 1 hingga 3 bulan.</li>
                    <li><strong>Target:</strong> Sangat disarankan untuk mahasiswa S1 sebagai syarat kelulusan (menggantikan sidang komprehensif atau sekadar syarat wisuda).</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Tips Submit ke Jurnal SINTA Agar Cepat LoA</h2>
                <ol class="list-decimal pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Cek Syarat Kampus:</strong> Pastikan kamu bertanya ke prodi, minimal SINTA berapa yang diakui. Jangan sampai kamu lolos di SINTA 5, tapi kampus mensyaratkan minimal SINTA 3.</li>
                    <li><strong>Sesuaikan Focus & Scope:</strong> Pastikan judul penelitianmu relevan dengan fokus jurnal yang dituju (misal: jurnal pendidikan jangan di-submit ke jurnal teknik komputer).</li>
                    <li><strong>Patuhi Template Secara Mutlak:</strong> Editor jurnal paling anti dengan naskah yang mengabaikan <em>Author Guidelines</em> atau <em>Template</em> yang disediakan. Sesuaikan margin, font, dan format daftar pustakanya.</li>
                    <li><strong>Cek Biaya (APC):</strong> Publikasi SINTA bervariasi, ada yang gratis (namun biasanya antrean panjang) dan ada yang berbayar <em>(Article Processing Charge)</em>.</li>
                </ol>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-book-open"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Pusing Cari Jurnal SINTA yang Fast Track?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Sudah submit berbulan-bulan tapi tidak ada balasan dari pihak jurnal? Waktu wisuda semakin dekat tapi LoA (Letter of Acceptance) belum turun? Jangan panik, kami punya solusinya!
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Tim <strong>Pena Elit</strong> menyediakan layanan <a href="jasa-publikasi-jurnal-sinta.html" class="text-brand-600 font-bold hover:underline">Jasa Publikasi Jurnal SINTA</a> yang bergaransi terbit (LoA). Mulai dari pra-review, penyesuaian template, hingga translate bahasa. Kami memiliki jaringan jurnal nasional terakreditasi SINTA 2 hingga 6 yang prosesnya cepat dan aman.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bantuan%20layanan%20publikasi%20jurnal%20SINTA." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Hubungi Admin Jurnal SINTA
                    </a>
                </div>
    `
  },
  {
    filename: 'cara-merapikan-format-skripsi-semalam.html',
    title: 'Margin Berantakan Bikin Pusing? Cara Merapikan Format Skripsi',
    desc: 'Mengatur format margin, daftar isi, dan penomoran halaman skripsi seringkali memakan waktu. Ikuti panduan praktis merapikan format Word skripsi dalam semalam.',
    h1: 'Margin Berantakan Bikin Pusing? Cara Merapikan Format Skripsi dalam Semalam!',
    category: 'Format & Template',
    date: '12 Agustus 2026',
    icon: 'fa-file-word',
    color: 'bg-blue-50',
    iconColor: 'text-blue-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Seringkali, bagian yang paling menyiksa dari pengerjaan skripsi bukanlah saat melakukan penelitian atau mengolah data, melainkan saat harus mengurus pernak-pernik format Microsoft Word. Margin yang tiba-tiba bergeser, daftar isi manual yang titik-titiknya tidak rata, hingga nomor halaman yang berantakan kerap membuat mahasiswa menangis di depan laptop.
                </p>

                <p class="mb-6">
                    Banyak mahasiswa harus bolak-balik direvisi oleh petugas tata usaha (TU) kampus atau dosen hanya gara-gara urusan administratif ini. Jika kamu sedang berjuang merapikan ratusan halaman naskahmu yang formatnya hancur berantakan karena beda versi Microsoft Word atau hasil gabungan dari beberapa file, tenang saja. Artikel ini akan memandu kamu merapikan semuanya hanya dalam semalam!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Atur Margin Skripsi Standar (4-4-3-3) Secara Global</h2>
                <p class="mb-6">
                    Kesalahan umum adalah mengatur margin setelah skripsi selesai atau per bab. Ini sangat rawan error jika kamu copy-paste dari file lain. Atur margin dokumen secara keseluruhan sebelum memulai perapian.
                </p>
                <p class="mb-6">
                    Standar umum skripsi di Indonesia adalah menggunakan kertas A4 dengan margin <strong>Kiri 4 cm, Atas 4 cm, Kanan 3 cm, Bawah 3 cm</strong> (untuk ruang penjilidan di sebelah kiri dan ruang header di atas).
                    <br><br>
                    <strong>Caranya:</strong> Pilih menu <em>Layout</em> -> <em>Margins</em> -> <em>Custom Margins</em>. Pastikan satuan ukur di Word-mu sudah cm (centimeter), bukan inchi.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Gunakan "Styles" (Heading) untuk Bab dan Sub-bab</h2>
                <p class="mb-6">
                    Menebalkan teks (Bold) dan membesarkan ukuran font secara manual untuk setiap judul bab dan sub-bab adalah metode primitif yang harus ditinggalkan! Jika kamu menggunakan cara manual, kamu tidak akan bisa membuat Daftar Isi otomatis.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li>Tandai judul "BAB I PENDAHULUAN", lalu pada menu <em>Home</em> klik style <strong>Heading 1</strong>.</li>
                    <li>Tandai sub-bab "1.1 Latar Belakang", lalu klik style <strong>Heading 2</strong>.</li>
                    <li>Tandai sub-sub-bab "1.1.1 Sejarah", lalu klik style <strong>Heading 3</strong>.</li>
                </ul>
                <p class="mb-6">
                    Ubah desain Heading (font, ukuran, spasi, bold) dengan cara klik kanan pada tulisan Heading di menu Home lalu pilih <em>Modify</em>.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Rahasia Daftar Isi, Daftar Tabel & Gambar Otomatis</h2>
                <p class="mb-6">
                    Jika kamu sudah menerapkan trik Heading 1, 2, dan 3 di atas, membuat Daftar Isi hanyalah pekerjaan 5 detik!
                    <br><br>
                    <strong>Caranya:</strong> Siapkan halaman kosong, pergi ke menu <em>References</em> -> <em>Table of Contents</em>, lalu pilih <em>Automatic Table 1</em>. Boom! Daftar isimu jadi dengan nomor halaman yang presisi secara otomatis.
                </p>
                <p class="mb-6">
                    Untuk tabel dan gambar, gunakan menu <em>References</em> -> <em>Insert Caption</em> setiap kali menyisipkan gambar/tabel. Nantinya kamu bisa membuat Daftar Tabel secara otomatis dari menu <em>Insert Table of Figures</em>.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Taklukkan Masalah Nomor Halaman Berbeda (Romawi & Angka)</h2>
                <p class="mb-6">
                    Ini adalah bos terakhir format Word: Halaman awal (Kata Pengantar, Daftar Isi) harus Romawi (i, ii, iii) letaknya di tengah bawah. Sementara halaman BAB harus Angka (1, 2, 3), dan posisinya pindah-pindah (halaman judul bab di tengah bawah, halaman isi bab di kanan atas).
                </p>
                <p class="mb-6">
                    Kunci dari masalah ini adalah fitur <strong>Section Breaks</strong>, bukan Page Breaks.
                    <br>
                    <strong>Caranya:</strong> Letakkan kursor di paling akhir halaman Daftar Isi, lalu pilih menu <em>Layout</em> -> <em>Breaks</em> -> <em>Next Page</em>. Ini akan memisahkan sistem dokumen menjadi dua "section" (Section 1 untuk Romawi, Section 2 untuk Angka). Matikan tombol <em>Link to Previous</em> di menu Header & Footer agar format penomoran antar section tidak saling terhubung.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Gunakan "Find and Replace" untuk Spasi Ganda</h2>
                <p class="mb-6">
                    Jika teks hasil copy-paste dari PDF memiliki banyak spasi ganda berlebihan, jangan perbaiki satu per satu. Tekan CTRL+H (Find and Replace). Di kolom "Find what" ketik dua spasi (tekan spasi 2x), di kolom "Replace with" ketik satu spasi. Klik <em>Replace All</em>. Ulangi sampai tidak ada spasi ganda tersisa.
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-file-word"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Menyerah Melawan Microsoft Word?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Terkadang, meskipun sudah mengikuti tutorial, Word tetap error, halaman lari-lari sendiri, dan daftar isi hancur. Jangan habiskan waktu tidurmu yang berharga untuk hal yang membuat emosi ini!
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Serahkan kepada masternya di <strong>Pena Elit</strong>! Kami menyediakan <a href="jasa-format-template-skripsi.html" class="text-brand-600 font-bold hover:underline">Jasa Format & Template Skripsi</a> super kilat. Kami akan menyusun skripsimu sesuai dengan pedoman format kampusmu. Mulai dari layouting margin, heading, penomoran halaman romawi/angka yang presisi, hingga daftar pustaka otomatis.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20ingin%20menggunakan%20jasa%20merapikan%20format%20skripsi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Rapikan Skripsi Saya Sekarang!
                    </a>
                </div>
    `
  },
  {
    filename: 'trik-manajemen-waktu-mahasiswa-sibuk.html',
    title: 'Terjebak Deadline? 5 Trik Manajemen Waktu Mahasiswa Sibuk',
    desc: 'Sibuk dengan kegiatan organisasi atau part-time? Ini 5 trik manajemen waktu mahasiswa agar tugas kuliah selesai tepat waktu tanpa begadang dan stres.',
    h1: 'Terjebak Deadline? 5 Trik Manajemen Waktu Mahasiswa Sibuk Agar Tugas Tetap Aman',
    category: 'Tips Kuliah',
    date: '12 Agustus 2026',
    icon: 'fa-clock',
    color: 'bg-amber-50',
    iconColor: 'text-amber-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Menjadi mahasiswa masa kini bukan hanya tentang duduk manis mendengarkan dosen di kelas. Banyak mahasiswa yang memiliki setumpuk kegiatan lain di luar akademik: menjadi pengurus BEM, mengikuti kepanitiaan organisasi, merintis bisnis kecil-kecilan, hingga mengambil pekerjaan <em>part-time</em> untuk tambahan uang saku.
                </p>

                <p class="mb-6">
                    Masalah utama yang sering muncul adalah: <strong>Tugas kuliah menumpuk bak gunung!</strong> Akibatnya, sistem kebut semalam (SKS) dengan meminum kopi literan menjadi jalan ninja para mahasiswa. Pola ini tidak hanya merusak nilai Indeks Prestasi (IPK), tapi juga mengancam kesehatan fisik dan mental. Jika kamu merasa 24 jam sehari tidak cukup, berikut adalah 5 trik manajemen waktu yang <em>powerful</em> untuk menyelamatkanmu dari tumpukan <em>deadline</em> tugas.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Matriks Eisenhower: Mana yang Mendesak vs Penting?</h2>
                <p class="mb-6">
                    Berhenti memperlakukan semua kegiatan memiliki prioritas yang sama. Gunakan Matriks Eisenhower (Kuadran Prioritas). Kelompokkan tugas ke dalam 4 kotak:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Penting & Mendesak (Do It Now):</strong> Tugas presentasi besok pagi, laporan praktikum deadline nanti malam. Kerjakan segera!</li>
                    <li><strong>Penting & Tidak Mendesak (Schedule It):</strong> Belajar untuk ujian akhir bulan depan, menyicil skripsi. Jadwalkan waktunya.</li>
                    <li><strong>Tidak Penting & Mendesak (Delegate):</strong> Mengurus konsumsi acara himpunan yang bisa diserahkan ke anggota lain, membeli perlengkapan kos. Coba delegasikan.</li>
                    <li><strong>Tidak Penting & Tidak Mendesak (Drop):</strong> <em>Scrolling</em> TikTok tanpa henti, menonton maraton drakor saat sedang genting. Singkirkan!</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Praktikkan Teknik Pomodoro</h2>
                <p class="mb-6">
                    Banyak mahasiswa malas mulai mengerjakan tugas makalah karena membayangkan harus mengetik berjam-jam secara <em>non-stop</em>. Hal ini memicu prokrastinasi (penundaan). Lawan ini dengan Teknik Pomodoro.
                </p>
                <p class="mb-6">
                    Atur timer <strong>25 menit</strong>, jauhkan HP, dan fokus 100% mengerjakan tugas. Setelah 25 menit, ambil istirahat pendek selama <strong>5 menit</strong> (minum air, meregangkan badan). Lakukan ini sebanyak 4 siklus (total 2 jam pengerjaan intensif), lalu ambil istirahat panjang 15-30 menit. Secara psikologis, fokus selama 25 menit terasa jauh lebih ringan dan beban kerja menjadi mudah ditaklukkan.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Prinsip "Dua Menit" (Two-Minute Rule)</h2>
                <p class="mb-6">
                    Jika ada suatu tugas ringan yang bisa diselesaikan dalam waktu dua menit atau kurang, lakukan saat itu juga! Jangan menundanya. Misalnya: membalas email dosen, membuat folder struktur tugas, men-download file jurnal referensi, atau mengirim file ke grup WhatsApp kelompok. 
                </p>
                <p class="mb-6">
                    Menumpuk pekerjaan-pekerjaan kecil yang sebenarnya mudah diselesaikan justru akan membuat otak merasa kewalahan (<em>cognitive overload</em>) dan merasa "banyak banget yang belum dikerjakan".
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Time-Blocking: Lindungi Jadwalmu</h2>
                <p class="mb-6">
                    Mengandalkan ingatan atau sekadar <em>To-Do List</em> saja seringkali tidak ampuh karena tidak mengikat waktu. Gunakan Google Calendar untuk melakukan <em>time-blocking</em>. Blokir jadwal spesifik untuk kegiatan tertentu layaknya kamu memiliki jadwal kuliah.
                </p>
                <p class="mb-6">
                    Misalnya, blokir hari Selasa pukul 19.00-21.00 khusus sebagai "Deep Work Makalah Manajemen". Ketika jadwal itu tiba, anggaplah kamu sedang rapat penting yang tidak bisa diganggu gugat. Tolak ajakan nongkrong dadakan dengan sopan karena kamu sudah punya "janji" dengan jadwal studimu sendiri.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Kenali Batas Diri: Tidak Semua Harus Dikerjakan Sendiri</h2>
                <p class="mb-6">
                    Meski kamu jago memanajemen waktu, ada kalanya realita tidak bersahabat. Dosen tiba-tiba memberikan 3 tugas makalah bersamaan, sementara akhir pekan kamu diwajibkan survei lapangan untuk organisasi, dan kamu sedang kelelahan parah. 
                </p>
                <p class="mb-6">
                    Berusaha menjadi <em>superhero</em> dengan mengerjakan semuanya tanpa tidur hanya berujung di rumah sakit. Manusia punya batasan. Di titik kritis seperti ini, kamu perlu bersikap pragmatis dan mencari bantuan pihak ketiga untuk mem-<em>back up</em> tugas akademis agar IPK tetap terselamatkan.
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-laptop-file"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Tugas Terlanjur Menumpuk dan Waktu Sudah Habis?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Sudah coba mengatur waktu tapi <em>deadline</em> pengumpulan sisa 24 jam lagi? Daripada mengorbankan nilai dengan mengerjakan tugas seadanya atau malah telat kumpul, biarkan tim profesional kami mengambil alih bebanmu.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        <strong>Pena Elit</strong> menghadirkan layanan <a href="joki-tugas-kuliah.html" class="text-brand-600 font-bold hover:underline">Joki Tugas Kuliah & Pembuatan Makalah Presentasi</a> terpercaya. Dikerjakan oleh tenaga akademik ahli, dijamin bebas plagiasi (lolos Turnitin), rapi, dan cepat. Tersedia layanan <em>express</em> untuk tugas dadakan. Selamatkan IPK-mu, delegasikan tugasmu sekarang!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bantuan%20mengerjakan%20tugas%20kuliah%20secepatnya." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Pesan Jasa Tugas Kuliah
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

console.log('All articles generated successfully!');
