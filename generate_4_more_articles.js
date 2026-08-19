const fs = require('fs');
const path = require('path');

const headerTemplate = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const articles = [
  {
    filename: 'cara-menjawab-pertanyaan-dosen-penguji-sidang.html',
    title: 'Cara Menjawab Pertanyaan Dosen Penguji Saat Sidang (Walau Tidak Tahu Jawabannya)',
    desc: 'Blank saat ditanya dosen penguji di sidang skripsi? Jangan panik! Ini trik dan cara menjawab pertanyaan dosen penguji dengan cerdas dan elegan meski kamu lupa.',
    h1: 'Cara Cerdas Menjawab Pertanyaan Dosen Penguji Sidang Saat Kamu "Blank"',
    category: 'Sidang Skripsi',
    date: '19 Agustus 2026',
    icon: 'fa-microphone-lines',
    color: 'bg-red-50',
    iconColor: 'text-red-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Momen paling mendebarkan dalam sidang skripsi bukanlah saat kamu mempresentasikan PPT, melainkan saat sesi Q&A (tanya jawab) dengan dosen penguji dimulai. Tangan mulai dingin, dan tiba-tiba... <em>Blank!</em> 
                </p>

                <p class="mb-6">
                    Meskipun kamu sudah menguasai materi, rasa gugup bisa membuatmu lupa segalanya. Lalu, bagaimana jika dosen memberikan pertanyaan menjebak atau pertanyaan yang sama sekali tidak kamu tahu jawabannya? Jangan diam saja! Berikut adalah trik elegan menghadapi situasi tersebut agar tetap terlihat cerdas dan profesional.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Jangan Langsung Menjawab "Saya Tidak Tahu"</h2>
                <p class="mb-6">
                    Mengatakan "saya tidak tahu" secara gamblang akan memberi kesan bahwa kamu kurang persiapan atau bahkan tidak mengerjakan skripsi tersebut sendiri. Kamu harus belajar mengemas ketidaktahuanmu dengan diplomasi akademik.
                </p>
                <p class="mb-6">
                    <strong>Alternatif Jawaban:</strong><br>
                    <em>"Terima kasih atas pertanyaannya, Bapak/Ibu. Terkait dengan poin tersebut, hal itu memang di luar fokus batasan masalah penelitian saya saat ini. Namun, berdasarkan teori X yang saya gunakan, probabilitasnya mengarah pada..."</em>
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Beli Waktu dengan Teknik Parafrase</h2>
                <p class="mb-6">
                    Jika kamu butuh beberapa detik untuk memanggil kembali ingatanmu, gunakan teknik memparafrase atau mengulang kembali pertanyaan dosen penguji.
                </p>
                <p class="mb-6">
                    <strong>Contoh:</strong><br>
                    <em>"Baik, Bapak/Ibu, jika saya boleh memastikan kembali, maksud pertanyaan Bapak/Ibu adalah tentang korelasi antara variabel A dan B pada indikator ketiga, benar begitu?"</em><br>
                    Sembari dosen mengangguk, otakmu memiliki ekstra waktu 5-10 detik untuk mencari letak jawaban di ingatan atau di naskah skripsi yang ada di meja.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Buka Naskah (Open Book) dengan Elegan</h2>
                <p class="mb-6">
                    Banyak mahasiswa yang takut melihat naskah skripsi saat ditanya. Padahal, sidang skripsi pada dasarnya adalah "open book". Justru dengan membuka naskah, kamu menunjukkan bahwa argumenmu berdasar.
                </p>
                <p class="mb-6">
                    <strong>Cara Elegan:</strong><br>
                    <em>"Mohon izin Bapak/Ibu untuk membuka naskah skripsi saya pada halaman 45 tabel 4.2..."</em><br>
                    Sampaikan dengan tenang. Jangan membuka halaman secara panik dan terburu-buru.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Terima Kritik Tanpa Perlu "Ngeyel" Berlebihan</h2>
                <p class="mb-6">
                    Seringkali dosen penguji bukan bertanya untuk mencari jawaban, tetapi untuk menguji mentalmu atau sekadar memberikan koreksi. Jika dosen menemukan kesalahan logika atau salah ketik yang fatal, jangan defensif mencari-cari alasan yang tidak masuk akal.
                </p>
                <p class="mb-6">
                    <strong>Contoh Jawaban Terbaik:</strong><br>
                    <em>"Terima kasih atas koreksinya, Bapak/Ibu. Memang benar ada kekeliruan pada bagian tersebut. Masukan dari Bapak/Ibu sangat berharga dan akan segera saya perbaiki pada revisi nanti."</em> 
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Takut Dibantai Saat Sidang Skripsi?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Kunci utama lulus sidang skripsi bukan sekadar pintar berbicara, melainkan seberapa solid dan bebas-error naskah skripsimu. Semakin banyak "celah" dalam naskahmu, semakin habis kamu "dibantai" oleh dosen penguji.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Amankan nilai sidangmu dengan layanan <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Bimbingan Skripsi Spesialis Mentoring Sidang</a> dari Pena Elit. Kami akan meninjau skripsimu, mencari celah yang mungkin ditanyakan dosen, dan mengadakan "Mock-Up Sidang" (simulasi sidang) secara personal sebelum hari H.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20ingin%20berkonsultasi%20untuk%20persiapan%20menghadapi%20sidang%20skripsi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasi Persiapan Sidang
                    </a>
                </div>
    `
  },
  {
    filename: 'alasan-judul-skripsi-sering-ditolak.html',
    title: '5 Alasan Mengapa Judul Skripsi Selalu Ditolak Dosen Pembimbing',
    desc: 'Sudah mengajukan banyak judul tapi selalu ditolak (dicoret) dosen pembimbing? Ketahui 5 alasan utamanya dan cara membuat judul skripsi yang pasti ACC.',
    h1: '5 Alasan Utama Mengapa Judul Skripsi Kamu Selalu Ditolak Dosen',
    category: 'Persiapan Skripsi',
    date: '19 Agustus 2026',
    icon: 'fa-file-circle-xmark',
    color: 'bg-orange-50',
    iconColor: 'text-orange-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Fase paling menguras emosi di awal semester akhir adalah <strong>Pengajuan Judul Skripsi</strong>. Membawa 3 opsi judul ke dosen pembimbing, dan ketiganya berakhir dicoret dengan tinta merah. Terus berulang berminggu-minggu sampai kamu frustrasi.
                </p>

                <p class="mb-6">
                    Kenapa dosen sering menolak judul mahasiswa? Sebenarnya, dosen tidak berniat menyusahkanmu. Mereka menolak karena melihat adanya "kecacatan" fundamental dari rencana penelitianmu. Jika diteruskan, kamu sendirilah yang akan tersiksa di tengah jalan. Berikut adalah 5 alasan utama judulmu ditolak dan cara memperbaikinya!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Judul Terlalu Pasaran (Kurang Novelty)</h2>
                <p class="mb-6">
                    <em>"Pengaruh Kualitas Pelayanan Terhadap Kepuasan Pelanggan di PT Maju Mundur."</em> <br>
                    Ini adalah contoh judul yang mungkin sudah ditulis oleh ribuan mahasiswa sejak tahun 1990-an. Dosen sangat anti dengan judul klise yang minim nilai kebaruan (novelty). 
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Tambahkan variabel moderasi/intervening yang unik, ubah konteks objeknya ke fenomena digital terkini (misal: <em>E-Service Quality</em> pada aplikasi AI), atau kombinasikan dengan teori baru.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Fenomena Masalah Tidak Jelas (Hanya Asumsi)</h2>
                <p class="mb-6">
                    Skripsi harus diawali dengan masalah, bukan sekadar "ingin meneliti". Jika ditanya, <em>"Memangnya ada masalah apa di objek penelitianmu?"</em> dan kamu menjawab, <em>"Sepertinya kinerjanya menurun, Pak,"</em> maka otomatis akan ditolak. Kata "sepertinya" menunjukkan bahwa kamu hanya berasumsi.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Bawa data pra-riset (fenomena gap). Tunjukkan grafik penurunan penjualan 3 bulan terakhir, tunjukkan <em>screenshot</em> komplain pelanggan di Google Maps, atau tunjukkan berita yang valid.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Variabel Tidak Logis atau Sulit Diukur</h2>
                <p class="mb-6">
                    Kadang mahasiswa membuat judul yang puitis tapi tidak operasional secara ilmiah. Misalnya: <em>"Analisis Kebahagiaan Jiwa Masyarakat Selama Pemilu."</em> Variabel "Kebahagiaan Jiwa" itu abstrak dan sulit dicari instrumen kuesioner bakunya.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Gunakan variabel yang sudah diakui dan memiliki jurnal rujukan utama (grand theory) beserta indikator yang jelas untuk diukur.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Terlalu Luas (Tidak Fokus)</h2>
                <p class="mb-6">
                    <em>"Dampak Internet Terhadap Perilaku Anak Muda di Indonesia."</em> Judul ini sangat ambisius. Meneliti seluruh pemuda di Indonesia membutuhkan waktu puluhan tahun dan dana miliaran rupiah.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Batasi scope penelitian (<em>delimitation</em>). Fokuskan pada satu kecamatan spesifik, komunitas tertentu, atau rentang usia yang jelas agar sampel penelitianmu realistis untuk diselesaikan dalam 1 semester.
                </p>
                
                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Plagiasi Halus (Hanya Mengganti Objek)</h2>
                <p class="mb-6">
                    Dosen pembimbing biasanya sangat hapal dengan penelitian kakak tingkatmu. Mengambil skripsi kakak tingkat lalu hanya mengganti nama PT/lokasinya adalah bentuk plagiasi malas yang sangat mudah terdeteksi.
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-lightbulb"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Stuck Cari Judul Skripsi yang Pasti ACC?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Waktu terus berjalan, teman-teman lain sudah menyusun Bab 2, sedangkan kamu masih pusing memikirkan satu pun judul yang masuk akal?
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Tim Akademik <strong>Pena Elit</strong> siap membantumu! Melalui layanan <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Pembuatan Judul dan Outline Skripsi</a>, kami akan merekomendasikan beberapa opsi judul yang <em>fresh</em>, lengkap dengan rumusan masalah, grand theory, serta referensi jurnal internasional ter-update agar dosen pembimbingmu langsung meng-ACC-nya.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20stuck%20dan%20butuh%20bantuan%20mencari%20judul%20skripsi%20yang%20menarik." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasi Judul Skripsi
                    </a>
                </div>
    `
  },
  {
    filename: 'cara-membuat-latar-belakang-skripsi-bab-1.html',
    title: 'Cara Membuat Latar Belakang Skripsi (Bab 1) yang Kuat',
    desc: 'Kesulitan menulis Latar Belakang Masalah di Bab 1 Skripsi? Gunakan metode Segitiga Terbalik dan gap penelitian agar proposal skripsi langsung disetujui dosen.',
    h1: 'Rahasia Menulis Latar Belakang Skripsi (Bab 1) Agar Tidak Dicoret Dosen',
    category: 'Penulisan Skripsi',
    date: '19 Agustus 2026',
    icon: 'fa-align-left',
    color: 'bg-blue-50',
    iconColor: 'text-blue-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    "Mengapa kamu meneliti topik ini?" Ini adalah pertanyaan pamungkas yang pasti ditanyakan oleh dosen. Dan satu-satunya tempat untuk menjawabnya secara tertulis adalah di <strong>Latar Belakang Masalah (Bab 1)</strong>. 
                </p>

                <p class="mb-6">
                    Sayangnya, 80% mahasiswa mengawali Bab 1 dengan definisi teori yang membosankan. Dosen tidak butuh definisi pendidikan menurut UUD 1945 di paragraf pertama! Latar belakang yang baik harus memuat <em>urgensi masalah</em>. Berikut adalah rumusan rahasia menyusun latar belakang yang kuat dan tajam layaknya argumen pengacara!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Gunakan Pola Piramida Terbalik (Deduktif)</h2>
                <p class="mb-6">
                    Piramida terbalik berarti kamu menulis dari ranah yang <strong>Umum (Global/Nasional)</strong> mengerucut ke <strong>Khusus (Objek Penelitian Spesifik)</strong>.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Paragraf 1-2 (Kondisi Ideal/Umum):</strong> Ceritakan fenomena global atau harapan ideal mengenai topik yang diangkat. (Misal: Harapan ideal tentang sistem keuangan perbankan di era digital).</li>
                    <li><strong>Paragraf 3-4 (Kondisi Aktual/Masalah):</strong> Benturkan kondisi ideal tadi dengan realita pahit di lapangan. Munculkan berita atau fakta bahwa terjadi banyak masalah.</li>
                    <li><strong>Paragraf 5-6 (Objek Penelitian):</strong> Bawa masalah tersebut ke objek spesifik penelitianmu (Misal: Kasus masalah digitalisasi yang terjadi di Bank XYZ).</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Wajib Ada "Gap" (Kesenjangan)</h2>
                <p class="mb-6">
                    Tanpa adanya Gap, penelitianmu menjadi tidak berguna (tidak ada masalah yang harus diselesaikan). Ada dua jenis gap yang harus kamu tampilkan di latar belakang:
                </p>
                <p class="mb-6">
                    <strong>a. Fenomena Gap:</strong> Kesenjangan antara harapan/target dan realita. <em>"Target penjualan 100%, tapi realisasinya hanya 60%. Mengapa ini terjadi?"</em> Ini disebut fenomena masalah empiris.
                </p>
                <p class="mb-6">
                    <strong>b. Research Gap:</strong> Perbedaan hasil penelitian sebelumnya (Inkonsistensi). <em>"Jurnal A mengatakan harga berpengaruh pada loyalitas, tapi Jurnal B mengatakan harga tidak berpengaruh. Karena itu, perlu diteliti ulang."</em> Research gap membuat urgensi penelitianmu sangat kuat di mata dosen!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Data Pra-Penelitian (Angka Bicara Lebih Keras)</h2>
                <p class="mb-6">
                    Hindari menggunakan kalimat kualitatif tak terukur seperti, "Masyarakat saat ini merasa kurang puas." Sebagai gantinya, gunakan data. 
                </p>
                <p class="mb-6">
                    Sisipkan tabel komplain pelanggan bulan Januari-Maret, atau data hasil kuisioner pra-penelitian awal (<em>pre-liminary study</em>) pada 15 responden. Menampilkan tabel atau grafik di Bab 1 akan membuat dosen yakin bahwa masalah yang kamu angkat memang benar ada, bukan karanganmu sendiri.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Akhiri dengan Solusi (Judul)</h2>
                <p class="mb-6">
                    Setelah berhasil meyakinkan pembaca bahwa kondisinya sedang "gawat" atau "bermasalah", paragraf terakhir Bab 1 harus menjadi hero (pahlawan) yang menawarkan solusi.
                </p>
                <p class="mb-6">
                    <em>"Berdasarkan latar belakang masalah yang telah diuraikan di atas, maka peneliti tertarik untuk melakukan penelitian lebih lanjut dengan judul: [Tuliskan Judul Skripsimu]."</em>
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-file-pen"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Bab 1 Penuh Coretan Merah dari Dosen?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Banyak mahasiswa berhenti dan menyerah hanya karena tidak bisa menembus Bab 1. Dosen terus-menerus meminta revisi dengan alasan "masalahnya kurang tajam".
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Tidak perlu buang waktu dan air mata! Tim ahli dari <strong>Pena Elit</strong> siap memberikan <a href="jasa-skripsi-purwakarta.html" class="text-brand-600 font-bold hover:underline">Jasa Pendampingan Penyusunan Proposal (Bab 1-3)</a>. Kami akan merumuskan Latar Belakang dengan alur pemikiran yang logis, lengkap dengan data empiris dan research gap yang dijamin membuat dosen pembimbing terpukau!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bantuan%20untuk%20menyusun%20dan%20memperbaiki%20Bab%201%20skripsi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Bantu Saya Susun Bab 1
                    </a>
                </div>
    `
  },
  {
    filename: 'ciri-ciri-skripsi-lolos-revisi-cepat.html',
    title: 'Ciri-Ciri Naskah Skripsi yang Pasti Lolos Revisi Cepat (Rahasia Dosen)',
    desc: 'Ingin skripsi cepat di-ACC tanpa banyak revisi? Ketahui ciri-ciri naskah skripsi berkualitas yang disukai dosen pembimbing dan penguji. Terapkan 4 prinsip rahasia ini!',
    h1: 'Bocoran Rahasia Dosen: Ciri-Ciri Skripsi yang Pasti Cepat Di-ACC Tanpa Banyak Revisi',
    category: 'Tips Kuliah',
    date: '19 Agustus 2026',
    icon: 'fa-spell-check',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-400',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Ada mahasiswa yang revisi skripsinya memakan waktu berbulan-bulan hingga berganti semester. Namun, ada pula mahasiswa "ajaib" yang skripsinya mulus, minim coretan, dan langsung di-ACC dalam beberapa kali bimbingan saja. Apa rahasianya? 
                </p>

                <p class="mb-6">
                    Sebagai akademisi, dosen pembimbing sebenarnya memiliki standar bawah sadar saat membaca draft skripsi. Jika naskahmu memenuhi kriteria tertentu di detik-detik awal mereka membaca, dosen akan langsung beranggapan bahwa skripsi tersebut "layak". Berikut adalah ciri-ciri naskah skripsi yang disukai dosen dan jaminan minim revisi!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Format Penulisan Super Rapi (Kesan Pertama)</h2>
                <p class="mb-6">
                    Percaya atau tidak, dosen seringkali menilai <em>attitude</em> mahasiswa dari margin dan spasi ketikannya. Jika halaman pertama saja sudah penuh salah ketik (typo), margin rata kiri-kanan (justify) berantakan, dan spasi antar paragraf tidak konsisten, dosen akan malas membacanya lebih lanjut.
                </p>
                <p class="mb-6">
                    <strong>Solusinya:</strong> Pastikan font, ukuran, margin (biasanya 4-4-3-3), dan letak nomor halaman sudah benar-benar sesuai dengan Pedoman Penulisan Skripsi kampusmu. Skripsi yang terlihat rapi secara visual mencerminkan penulisnya yang teliti dan serius.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Konsistensi Antar Bab (Benang Merah)</h2>
                <p class="mb-6">
                    Penyebab utama mahasiswa disuruh mengulang bab 4 adalah hilangnya "benang merah". Benang merah adalah hubungan logis dari rumusan masalah (Bab 1), metode yang digunakan (Bab 3), dan hasil penelitian (Bab 4).
                </p>
                <p class="mb-6">
                    Jika di Bab 1 rumusan masalahnya ada 3, maka di Bab 4 hasil penelitiannya juga harus menjawab 3 masalah tersebut secara berurutan, dan di Bab 5 kesimpulannya juga harus berisi 3 poin utama. Jangan sampai rumusan masalah tanya A, tapi yang dijawab malah B!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Sitasi yang Otomatis dan Tervalidasi (Mendeley/Zotero)</h2>
                <p class="mb-6">
                    Dosen pembimbing yang teliti pasti akan melakukan sinkronisasi silang: mengecek apakah nama penulis yang ada di Bab 2 benar-benar tercantum di Daftar Pustaka. 
                </p>
                <p class="mb-6">
                    Menulis daftar pustaka secara manual sangat berisiko terlewat. Skripsi yang "hijau" di mata dosen adalah skripsi yang daftar pustakanya menggunakan <em>Reference Manager</em> seperti <strong>Mendeley</strong> atau <strong>Zotero</strong>. Ini menandakan mahasiswanya melek teknologi dan sumbernya kredibel.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Bebas dari Plagiarisme (Parafrase yang Halus)</h2>
                <p class="mb-6">
                    Skripsi yang terlalu banyak <em>copy-paste</em> langsung dari internet atau PDF jurnal lain akan langsung terdeteksi merah oleh aplikasi <strong>Turnitin</strong>. Dosen sangat benci tulisan yang bergaya <em>patchwork</em> (tambal sulam tanpa koneksi kalimat yang baik).
                </p>
                <p class="mb-6">
                    Skripsi yang berkualitas menggunakan teknik <strong>Parafrase</strong>: membaca jurnal orang lain, mengambil inti idenya, lalu menuliskannya kembali menggunakan gaya bahasa sendiri tanpa mengubah makna.
                </p>
                
                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-medal"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Bosan Revisi Tiap Minggu Karena Kesalahan Sepele?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Seringkali otakmu kelelahan untuk mengecek 100 halaman skripsi secara mendetail. Akibatnya, ada banyak salah ketik, format daftar isi yang hancur, dan plagiasi yang tidak kamu sadari.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Serahkan beban administratif itu kepada <strong>Pena Elit</strong>! Kami menyediakan <a href="jasa-format-template-skripsi.html" class="text-brand-600 font-bold hover:underline">Jasa Perapihan Format & Penurunan Plagiasi Turnitin</a>. Kami akan merombak total tampilan skripsimu agar rapi 100% sesuai panduan kampus, mem-parafrase kalimat agar lolos Turnitin, dan merapikan daftar pustaka dengan Mendeley dalam waktu singkat (24 Jam)!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20jasa%20perapihan%20format%20skripsi%20dan%20parafrase%20Turnitin." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Jadikan Skripsimu Sempurna
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
