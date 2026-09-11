const fs = require('fs');
const path = require('path');

const headerTemplate = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const articles = [
  {
    filename: 'cara-menyusun-kerangka-pemikiran-skripsi.html',
    title: 'Cara Menyusun Kerangka Pemikiran Skripsi yang Benar dan Logis',
    desc: 'Panduan lengkap cara membuat kerangka pemikiran skripsi, dari pengertian, fungsi, hingga contoh cara menggambarkannya dalam penelitian kualitatif maupun kuantitatif.',
    h1: 'Panduan Lengkap Menyusun Kerangka Pemikiran Skripsi yang Benar, Logis, dan Menarik',
    category: 'Panduan Skripsi',
    date: '31 Agustus 2026',
    icon: 'fa-diagram-project',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Dalam penulisan karya ilmiah seperti skripsi, tesis, maupun disertasi, <strong>kerangka pemikiran</strong> (atau kerangka konseptual) merupakan salah satu elemen paling esensial. Sayangnya, banyak mahasiswa masih kebingungan saat diminta oleh dosen pembimbing untuk membuat kerangka pemikiran yang solid, logis, dan terstruktur. Kerangka pemikiran bukan sekadar gambar kotak-kotak dengan tanda panah, melainkan representasi visual dari seluruh logika penelitian Anda.
                </p>

                <p class="mb-6">
                    Membangun kerangka pemikiran yang benar akan sangat membantu Anda dalam menyusun hipotesis, menentukan metodologi, hingga menganalisis data nantinya. Sebuah kerangka pemikiran yang baik ibarat peta jalan (roadmap) yang akan memandu Anda dari awal hingga akhir penelitian, memastikan bahwa Anda tidak melenceng dari tujuan utama. Artikel ini akan membahas tuntas mulai dari definisi, fungsi, langkah-langkah penyusunan, hingga contoh konkret kerangka pemikiran yang sering digunakan dalam skripsi.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Apa Itu Kerangka Pemikiran?</h2>
                <p class="mb-6">
                    Secara sederhana, kerangka pemikiran adalah sebuah model konseptual tentang bagaimana teori berhubungan dengan berbagai faktor yang telah diidentifikasi sebagai masalah yang penting. Ini adalah penjelasan sementara terhadap gejala-gejala yang menjadi objek permasalahan. Menurut para ahli metodologi penelitian seperti Sugiyono (2019), kerangka pemikiran merupakan sintesa tentang hubungan antar variabel yang disusun dari berbagai teori yang telah dideskripsikan.
                </p>
                <p class="mb-6">
                    Dengan kata lain, kerangka pemikiran adalah alur logika penelitian Anda yang menghubungkan antara masalah penelitian, teori yang digunakan untuk menganalisis masalah, variabel-variabel yang diteliti, dan hasil yang diharapkan. Biasanya, kerangka pemikiran disajikan dalam bentuk narasi (penjelasan tertulis) dan diakhiri dengan bagan atau paradigma penelitian (diagram).
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Mengapa Kerangka Pemikiran Sangat Penting?</h2>
                <p class="mb-6">
                    Banyak mahasiswa menganggap remeh pembuatan kerangka pemikiran, menganggapnya hanya sebagai formalitas kelengkapan Bab 2. Padahal, kerangka pemikiran memiliki fungsi yang sangat krusial, antara lain:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Memperjelas Arah Penelitian:</strong> Dengan adanya kerangka, peneliti tahu pasti variabel apa saja yang harus diukur dan bagaimana cara mengukurnya. Ini mencegah peneliti kebingungan di tengah jalan.</li>
                    <li><strong>Dasar Perumusan Hipotesis:</strong> Dalam penelitian kuantitatif, hipotesis diturunkan secara langsung dari kerangka pemikiran. Jika kerangkanya logis, hipotesisnya pun akan mudah dirumuskan.</li>
                    <li><strong>Memudahkan Komunikasi dengan Dosen:</strong> Dosen penguji atau pembimbing sering kali hanya perlu melihat bagan kerangka pemikiran Anda untuk memahami keseluruhan isi skripsi Anda. Jika bagannya membingungkan, mereka akan berasumsi bahwa pemahaman Anda terhadap penelitian juga masih kurang.</li>
                    <li><strong>Menunjukkan Kedalaman Teoritis:</strong> Kerangka pemikiran yang baik menunjukkan bahwa peneliti telah membaca dan mensintesis berbagai literatur dengan baik, bukan sekadar menjiplak penelitian terdahulu.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Langkah-Langkah Menyusun Kerangka Pemikiran yang Benar</h2>
                <p class="mb-6">
                    Menyusun kerangka pemikiran tidak bisa dilakukan secara instan. Ada proses bertahap yang harus dilalui agar hasilnya maksimal. Berikut adalah langkah-langkah praktisnya:
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Langkah 1: Tetapkan Variabel Penelitian secara Jelas</h3>
                <p class="mb-6">
                    Langkah pertama adalah mengidentifikasi semua variabel yang akan diteliti. Variabel adalah segala sesuatu yang berbentuk apa saja yang ditetapkan oleh peneliti untuk dipelajari sehingga diperoleh informasi tentang hal tersebut, kemudian ditarik kesimpulannya. Pastikan Anda tahu mana Variabel Independen (X) yang mempengaruhi, Variabel Dependen (Y) yang dipengaruhi, serta apakah ada Variabel Moderating atau Intervening.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Langkah 2: Lakukan Kajian Pustaka yang Mendalam</h3>
                <p class="mb-6">
                    Anda tidak bisa membuat hubungan antar variabel tanpa dasar teori. Bacalah buku teks, jurnal nasional terakreditasi (SINTA), dan jurnal internasional (Scopus) yang relevan. Cari teori-teori (Grand Theory, Middle Range Theory, Applied Theory) yang dapat menjelaskan mengapa Variabel X berhubungan dengan Variabel Y. Catat pendapat para ahli yang mendukung logika Anda.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Langkah 3: Deskripsikan Teori dan Hubungan Antar Variabel</h3>
                <p class="mb-6">
                    Setelah mengumpulkan literatur, saatnya menuliskannya dalam bentuk narasi. Jelaskan konsep masing-masing variabel berdasarkan teori. Kemudian, buatlah argumen logis mengenai hubungan antar variabel tersebut. Misalnya, "Menurut Teori Z dari Tokoh A, peningkatan kompensasi akan memotivasi karyawan. Oleh karena itu, diduga ada hubungan positif antara Kompensasi (X) dengan Kinerja (Y)." Lakukan ini untuk semua hubungan variabel dalam penelitian Anda.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Langkah 4: Cari Dukungan dari Penelitian Terdahulu</h3>
                <p class="mb-6">
                    Selain teori dasar, kerangka pemikiran Anda harus diperkuat dengan temuan empiris dari penelitian sebelumnya. Sebutkan beberapa penelitian terdahulu yang hasilnya sejalan dengan alur logika yang sedang Anda bangun. Hal ini akan menambah validitas kerangka pemikiran Anda di mata dosen penguji.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Langkah 5: Buatlah Model Visual / Bagan (Paradigma Penelitian)</h3>
                <p class="mb-6">
                    Langkah terakhir adalah menerjemahkan narasi yang sudah panjang lebar tersebut ke dalam bentuk diagram atau bagan visual. Gunakan kotak (persegi panjang) untuk mewakili variabel yang diukur secara nyata (variabel manifes/indikator) atau oval/elips untuk variabel laten. Gunakan tanda panah searah untuk menunjukkan pengaruh sebab-akibat (regresi) atau panah dua arah untuk menunjukkan hubungan korelasi timbal balik.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Perbedaan Kerangka Pemikiran Kuantitatif dan Kualitatif</h2>
                <p class="mb-6">
                    Penting untuk dipahami bahwa pendekatan kuantitatif dan kualitatif memiliki sifat kerangka pemikiran yang berbeda:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Kerangka Pemikiran Kuantitatif:</strong> Bersifat deduktif, linier, dan kaku. Kerangka dibuat di awal penelitian (Bab 2) dan digunakan untuk merumuskan hipotesis yang akan diuji secara statistik. Bagannya biasanya sangat jelas menunjukkan hubungan pengaruh (panah X ke Y).</li>
                    <li><strong>Kerangka Pemikiran Kualitatif:</strong> Bersifat induktif, sirkuler, dan fleksibel. Sering disebut sebagai "Fokus Penelitian" atau "Peta Konsep". Kerangka ini berfungsi sebagai pedoman awal yang bisa berubah, berkembang, atau direvisi setelah peneliti terjun ke lapangan dan menemukan fakta baru. Hubungan antar konsepnya lebih kompleks dan tidak selalu bersifat sebab-akibat langsung.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Kesalahan Umum Mahasiswa Saat Membuat Kerangka Pemikiran</h2>
                <p class="mb-6">
                    Agar Anda tidak sering disuruh revisi oleh dosen, hindari kesalahan-kesalahan fatal berikut ini:
                </p>
                <ol class="list-decimal pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Hanya Menggambar Bagan Tanpa Narasi:</strong> Ini kesalahan klasik. Banyak mahasiswa langsung menaruh gambar kotak dan panah tanpa ada penjelasan berupa teks (narasi) di paragraf sebelumnya. Padahal, gambar tersebut harus dijelaskan alur logikanya secara tertulis.</li>
                    <li><strong>Arah Panah Salah:</strong> Tanda panah memiliki makna matematis. Panah satu arah (→) berarti pengaruh (regresi). Panah dua arah (↔) berarti hubungan korelasional tanpa tahu mana sebab mana akibat. Jangan tertukar!</li>
                    <li><strong>Tidak Sesuai dengan Rumusan Masalah:</strong> Jika rumusan masalah Anda mempertanyakan 3 hal, maka kerangka pemikiran dan bagan Anda idealnya juga merepresentasikan 3 alur logika untuk menjawab masalah tersebut. Harus ada benang merah (sinkronisasi) dari Bab 1 hingga Bab 3.</li>
                    <li><strong>Melompat Logika (Logical Fallacy):</strong> Variabel X dihubungkan dengan Y secara tiba-tiba tanpa ada penjelasan teori mengapa keduanya bisa berhubungan. Ingat, harus ada jembatan logika (teori atau penelitian terdahulu).</li>
                </ol>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Kesimpulan</h2>
                <p class="mb-6">
                    Menyusun kerangka pemikiran memang membutuhkan pemikiran ekstra, literatur yang memadai, dan daya sintesis yang baik. Namun, dengan mengikuti langkah-langkah di atas secara disiplin, Anda akan mampu menghasilkan kerangka pemikiran yang kokoh, meyakinkan dosen penguji, dan pada akhirnya memperlancar penyusunan keseluruhan bab dalam skripsi Anda. Jangan ragu untuk berkonsultasi dengan pembimbing jika Anda menemui jalan buntu dalam menentukan alur logika penelitian Anda.
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Mentok Menyusun Kerangka Pemikiran dan Teori Bab 2?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Menyusun kerangka pemikiran yang logis, mencari teori pendukung (Grand Theory), dan menyelaraskannya dengan hipotesis memang sering membuat mahasiswa frustrasi dan menghabiskan waktu berbulan-bulan tanpa progress.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Jangan biarkan skripsi Anda terbengkalai! Tim konsultan akademik <strong>Pena Elit</strong> siap membantu Anda merancang kerangka pemikiran yang solid, sistematis, dan dijamin masuk akal (logis) di mata dosen penguji. Kami menyediakan layanan bimbingan privat penyusunan proposal, pencarian literatur jurnal bereputasi, hingga perumusan hipotesis yang presisi. 
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bantuan%20konsultasi%20untuk%20menyusun%20kerangka%20pemikiran%20dan%20Bab%202%20skripsi%20saya." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasi Kerangka Pemikiran Sekarang
                    </a>
                </div>
    `
  },
  {
    filename: 'daftar-pertanyaan-sidang-skripsi-komprehensif.html',
    title: 'Daftar Pertanyaan Sidang Skripsi Komprehensif dan Cara Menjawabnya',
    desc: 'Persiapan menghadapi sidang skripsi komprehensif. Berikut adalah daftar pertanyaan yang paling sering diajukan dosen penguji beserta tips menjawabnya agar mendapat nilai A.',
    h1: 'Bocoran Daftar Pertanyaan Sidang Skripsi Komprehensif & Trik Ampuh Menjawabnya',
    category: 'Sidang Skripsi',
    date: '31 Agustus 2026',
    icon: 'fa-clipboard-question',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Sidang skripsi akhir atau sering disebut sidang komprehensif adalah momen puncak dari perjuangan selama bertahun-tahun di bangku perkuliahan. Wajar jika ketegangan, kecemasan, dan rasa gugup bercampur aduk menjelang hari H. Menghadapi dewan penguji yang terdiri dari dosen-dosen senior (bahkan mungkin "killer") membutuhkan lebih dari sekadar persiapan materi, tetapi juga kesiapan mental dan strategi komunikasi yang jitu.
                </p>

                <p class="mb-6">
                    Kabar baiknya, pola pertanyaan dosen penguji saat sidang skripsi sebenarnya sangat bisa diprediksi. Mereka biasanya memiliki struktur evaluasi yang standar untuk menguji sejauh mana penguasaan mahasiswa terhadap penelitian yang diklaim sebagai karya orisinalnya. Dengan mengetahui "bocoran" daftar pertanyaan ini, Anda dapat menyiapkan jawaban yang terstruktur, logis, dan mengesankan.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Mengapa Disebut Sidang Komprehensif?</h2>
                <p class="mb-6">
                    Sebelum masuk ke daftar pertanyaan, Anda perlu paham mengapa sidang ini disebut komprehensif. Artinya, dosen tidak hanya akan bertanya tentang isi naskah skripsi Anda (Bab 1 hingga Bab 5), tetapi juga menguji pemahaman menyeluruh (komprehensif) Anda mengenai keilmuan di jurusan Anda. Dosen ingin memastikan bahwa Anda pantas menyandang gelar sarjana dan menguasai konsep dasar dari program studi yang Anda ambil. Oleh karena itu, penguasaan teori dasar sama pentingnya dengan penguasaan data penelitian.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Daftar Pertanyaan yang Paling Sering Muncul dan Cara Menjawabnya</h2>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">1. Pertanyaan Seputar Orisinalitas dan Motivasi (Bab 1)</h3>
                <p class="mb-6">
                    <strong>Pertanyaan:</strong> <em>"Coba ceritakan secara singkat, apa yang melatarbelakangi Anda mengambil judul ini? Dan apa bedanya dengan skripsi kating (kakak tingkat) tahun lalu?"</em>
                </p>
                <p class="mb-6">
                    <strong>Cara Menjawab:</strong> Dosen ingin menguji dua hal: Fenomena masalah dan kebaruan (novelty). Jangan pernah menjawab "Karena disuruh dosen pembimbing" atau "Karena datanya gampang dicari." Jawablah dengan mengemukakan data empiris atau fenomena kesenjangan (gap) antara harapan dan kenyataan di lapangan.
                    <br><br>
                    <em>Contoh Jawaban:</em> "Terima kasih Bapak/Ibu. Alasan utama saya adalah adanya fenomena penurunan kinerja karyawan di PT X selama 3 tahun berturut-turut pasca pandemi, padahal perusahaan sudah memberikan kompensasi di atas UMR. Ini adalah masalah riil yang perlu dicari akar penyebabnya. Perbedaannya dengan penelitian tahun lalu adalah saya memasukkan variabel Lingkungan Kerja Non-Fisik yang belum diteliti sebelumnya, serta menggunakan metode analisis Partial Least Square (PLS) yang lebih robust."
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">2. Pertanyaan Seputar Teori dan Konsep Dasar (Bab 2)</h3>
                <p class="mb-6">
                    <strong>Pertanyaan:</strong> <em>"Anda menggunakan teori X dari ahli Y. Coba jelaskan apa inti dari teori tersebut, dan kenapa teori itu yang paling cocok untuk penelitian Anda?"</em>
                </p>
                <p class="mb-6">
                    <strong>Cara Menjawab:</strong> Ini adalah ujian penguasaan literatur. Pastikan Anda benar-benar membaca buku sumber aslinya (atau setidaknya memahami substansinya), bukan hanya <em>copy-paste</em> dari skripsi orang.
                    <br><br>
                    <em>Contoh Jawaban:</em> "Teori TAM (Technology Acceptance Model) yang digagas oleh Davis (1989) pada intinya menyatakan bahwa penerimaan pengguna terhadap teknologi ditentukan oleh dua faktor utama: Persepsi Kemudahan (Perceived Ease of Use) dan Persepsi Kebermanfaatan (Perceived Usefulness). Teori ini sangat relevan digunakan dalam penelitian saya karena objek risetnya adalah peluncuran aplikasi mobile baru, sehingga kita perlu mengukur apakah user merasa aplikasi ini mudah dan bermanfaat atau tidak."
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">3. Pertanyaan Seputar Metodologi Penelitian (Bab 3)</h3>
                <p class="mb-6">
                    <strong>Pertanyaan:</strong> <em>"Kenapa Anda menggunakan metode kualitatif (atau kuantitatif)? Mengapa sampel yang diambil hanya 50 orang? Bagaimana cara Anda memastikan data ini valid?"</em>
                </p>
                <p class="mb-6">
                    <strong>Cara Menjawab:</strong> Bab 3 adalah bab yang paling sering "dibantai" dosen karena menyangkut kaidah ilmiah. Anda harus hafal alasan rasional di balik setiap pilihan metode (rumus sampel, teknik sampling, instrumen uji).
                    <br><br>
                    <em>Contoh Jawaban:</em> "Saya menggunakan pendekatan kuantitatif karena tujuan penelitian ini adalah menguji hipotesis dan mencari pengaruh antar variabel, bukan menggali makna mendalam. Mengenai sampel 50 orang, angka ini didapat dari rumus Lemeshow karena total populasinya tidak diketahui secara pasti. Untuk memastikan validitas, saya telah melakukan uji coba instrumen (try out) kepada 30 responden awal dan hasilnya nilai r-hitung lebih besar dari r-tabel, sehingga kuesioner dinyatakan valid."
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">4. Pertanyaan Seputar Hasil dan Pembahasan (Bab 4)</h3>
                <p class="mb-6">
                    <strong>Pertanyaan:</strong> <em>"Dari hasil olah data Anda, ternyata hipotesis pertama ditolak (tidak ada pengaruh). Kenapa bisa begitu? Apakah penelitian Anda gagal?"</em>
                </p>
                <p class="mb-6">
                    <strong>Cara Menjawab:</strong> Banyak mahasiswa panik jika hipotesisnya ditolak, padahal dalam sains, ditolaknya hipotesis BUKAN berarti penelitian gagal. Itu adalah temuan ilmiah yang berharga. Dosen ingin menguji kemampuan argumentasi dan analisis Anda.
                    <br><br>
                    <em>Contoh Jawaban:</em> "Penelitian ini sama sekali tidak gagal, Bapak/Ibu. Hasil empiris memang menunjukkan hipotesis ditolak, artinya variabel X secara statistik tidak berpengaruh signifikan terhadap Y di lokasi penelitian ini. Setelah saya analisis lebih mendalam melalui observasi lanjutan dan wawancara singkat, penyebabnya adalah faktor demografi responden yang mayoritas Generasi Z, yang memiliki preferensi berbeda dibandingkan asumsi teori awal. Temuan anomali ini justru menjadi sumbangsih (kontribusi) baru bagi ilmu pengetahuan."
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">5. Pertanyaan Seputar Kesimpulan dan Saran (Bab 5)</h3>
                <p class="mb-6">
                    <strong>Pertanyaan:</strong> <em>"Lalu apa kontribusi nyata (manfaat praktis) dari skripsi Anda ini untuk masyarakat atau perusahaan? Apa saran konkrit yang bisa Anda berikan?"</em>
                </p>
                <p class="mb-6">
                    <strong>Cara Menjawab:</strong> Dosen benci kesimpulan yang bertele-tele dan saran yang normatif/klise (seperti "Perusahaan harus lebih baik lagi"). Berikan saran teknis yang operasional (actionable).
                    <br><br>
                    <em>Contoh Jawaban:</em> "Kontribusi praktis dari penelitian ini adalah perusahaan dapat mengetahui secara presisi faktor mana yang paling mendongkrak penjualan. Berdasarkan nilai koefisien regresi tertinggi, variabel promosi digital memiliki pengaruh paling dominan. Oleh karena itu, saran konkrit saya adalah perusahaan sebaiknya merealokasi 40% anggaran marketing konvensionalnya ke dalam kampanye Facebook Ads dan TikTok Ads, karena terbukti secara empiris lebih efektif menjangkau segmen pasar mereka."
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Tips Emas Berkomunikasi Saat Sidang</h2>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Jangan Defensif atau Ngeyel:</strong> Jika dosen memberikan kritik membangun, terimalah dengan lapang dada. Ucapkan, "Terima kasih atas masukannya yang sangat berharga Bapak/Ibu, ini luput dari pengamatan saya dan akan saya perbaiki di masa revisi." Dosen menyukai mahasiswa yang <em>teachable</em> (mau diajar).</li>
                    <li><strong>Eye Contact & Bahasa Tubuh:</strong> Tatap mata penguji saat berbicara, duduk tegak namun rileks. Jangan terlalu sering menunduk melihat teks atau menggigit bibir karena menunjukkan rasa tidak percaya diri.</li>
                    <li><strong>Simulasi (Gladi Resik):</strong> Lakukan simulasi presentasi di depan cermin atau teman minimal 5 kali. Rekam suara Anda untuk mengevaluasi intonasi dan durasi presentasi. Waktu presentasi biasanya sangat terbatas (10-15 menit).</li>
                    <li><strong>Kuasai Istilah Teknis:</strong> Dosen sering mengetes dengan istilah. Pastikan Anda paham bedanya korelasi dan regresi, signifikansi, margin of error, validitas, reliabilitas, uji beda, dll.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Kesimpulan</h2>
                <p class="mb-6">
                    Lulus sidang skripsi dengan nilai A (Sangat Memuaskan) atau Cumlaude bukanlah hal yang mustahil asalkan Anda menguasai medan pertempuran. Dengan persiapan materi yang matang, pemahaman mendalam tentang naskah sendiri, dan ketenangan mental dalam merespons pertanyaan dosen, Anda pasti bisa melewati tahap akhir ini dengan gemilang. Ingat, andalah pakar tertinggi mengenai skripsi Anda sendiri, karena Andalah yang menelitinya dari awal hingga akhir!
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-microphone-lines"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Makin Dekat Hari H Sidang, Makin Stres dan Blank?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Apakah Anda merasa kurang percaya diri mempresentasikan hasil penelitian? Takut tidak bisa menjawab pertanyaan kritis dari dosen penguji yang terkenal "killer"? Membaca tips saja terkadang tidak cukup untuk membangun mental juara.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Tim <strong>Pena Elit</strong> menyediakan program unggulan <strong>Private Mock-Up (Simulasi) Sidang Skripsi Intensif</strong> via Zoom. Kami akan membedah naskah skripsi Anda, menyiapkan slide PowerPoint berstandar presentasi akademik, dan yang terpenting: melakukan role-play (simulasi) sidang di mana konsultan kami akan bertindak sebagai dosen penguji. Kami akan mencecar Anda dengan pertanyaan sulit dan melatih Anda menjawab dengan tenang, elegan, dan akademis. 
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20tertarik%20mengikuti%20program%20Mentoring%20dan%20Simulasi%20Persiapan%20Sidang%20Skripsi." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Daftar Mentoring Simulasi Sidang
                    </a>
                </div>
    `
  },
  {
    filename: 'cara-menulis-tinjauan-pustaka-bab-2.html',
    title: 'Cara Menulis Tinjauan Pustaka (Bab 2) Skripsi Anti Plagiat',
    desc: 'Bingung menyusun Bab 2? Ikuti panduan cara menulis tinjauan pustaka skripsi yang baik, benar, dan bebas plagiarisme untuk menghindari tingginya skor Turnitin.',
    h1: 'Cara Jitu Menulis Tinjauan Pustaka (Bab 2) Skripsi Berkualitas dan Lolos Turnitin',
    category: 'Panduan Skripsi',
    date: '31 Agustus 2026',
    icon: 'fa-book',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Bab 2 atau Tinjauan Pustaka (Kajian Literatur) sering dianggap sebagai bab yang paling "membosankan" sekaligus paling tebal dalam penulisan skripsi. Banyak mahasiswa yang terjebak pada metode <em>copy-paste</em> secara brutal dari skripsi-skripsi senior atau artikel blog internet, sekadar untuk menebalkan halaman. Akibatnya? Saat dicek menggunakan <em>software</em> anti-plagiasi seperti Turnitin, skor similarity-nya meledak hingga 60-80%!
                </p>

                <p class="mb-6">
                    Tinjauan pustaka yang baik bukanlah sekadar kliping kumpulan definisi dari berbagai buku yang dijejerkan tanpa makna. Bab 2 harus mencerminkan kemampuan peneliti dalam merangkum, mengevaluasi, dan mensintesis literatur yang relevan dengan topik penelitian. Bab ini menjadi fondasi teoritis yang kuat untuk mendukung argumen di Bab 1 dan analisis di Bab 4. Dalam panduan ini, kita akan membahas cara menyusun Bab 2 yang terstruktur rapi, mendalam, dan yang terpenting: aman dari jerat plagiarisme.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Apa Sebenarnya Fungsi Bab 2 (Tinjauan Pustaka)?</h2>
                <p class="mb-6">
                    Sebelum mulai mengetik, Anda harus paham esensi mengapa Bab 2 ini diwajibkan oleh kampus. Fungsinya antara lain:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Menunjukkan Posisi Penelitian Anda (State of the Art):</strong> Membuktikan kepada dosen bahwa Anda tahu perkembangan terbaru (trend) terkait topik yang Anda angkat, dan bahwa penelitian Anda bukanlah pengulangan (duplikasi) dari penelitian lama.</li>
                    <li><strong>Mendefinisikan Variabel:</strong> Memberikan batasan yang jelas mengenai variabel apa yang Anda ukur. Definisi Kinerja menurut ahli A bisa jadi berbeda dengan ahli B. Di Bab 2, Anda menetapkan definisi mana yang dipakai.</li>
                    <li><strong>Dasar Merumuskan Hipotesis:</strong> Di bab inilah Anda memaparkan alur logika deduktif, mengambil teori-teori besar, dan meruncingkannya menjadi dugaan sementara (hipotesis).</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Struktur Ideal Bab 2 Tinjauan Pustaka</h2>
                <p class="mb-6">
                    Walaupun setiap kampus memiliki pedoman penulisan (selingkung) yang sedikit berbeda, secara umum anatomi Bab 2 terdiri dari komponen-komponen berikut:
                </p>
                
                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">A. Landasan Teori (Kajian Teoretik)</h3>
                <p class="mb-6">
                    Bagian ini berisi definisi, konsep, indikator, dan teori-teori yang relevan dengan variabel penelitian. Urutan pembahasannya disarankan mulai dari variabel terikat (Dependen / Y) terlebih dahulu, baru kemudian variabel bebas (Independen / X). Jangan lupa cantumkan <strong>Grand Theory</strong> (teori utama yang memayungi seluruh konsep).
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">B. Penelitian Terdahulu yang Relevan</h3>
                <p class="mb-6">
                    Ini adalah bagian yang merangkum minimal 3 hingga 5 jurnal (artikel ilmiah) terdahulu yang mirip dengan riset Anda. Formatnya seringkali disajikan dalam bentuk narasi paragraf atau tabel matriks (Nama Peneliti, Tahun, Judul, Metode, Hasil Utama, dan Persamaan/Perbedaan dengan riset Anda). Ini penting untuk menunjukkan letak <strong>Novelty</strong> (kebaruan) riset Anda.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">C. Kerangka Pemikiran / Konseptual</h3>
                <p class="mb-6">
                    Berisi alur logika yang menghubungkan variabel-variabel penelitian berdasarkan teori dan riset terdahulu, diakhiri dengan bagan skematis.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">D. Hipotesis Penelitian (Khusus Kuantitatif)</h3>
                <p class="mb-6">
                    Pernyataan singkat, padat, dan jelas mengenai dugaan hubungan atau pengaruh antar variabel yang nantinya akan dibuktikan kebenarannya secara empiris di Bab 4.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Rahasia Menulis Bab 2 Lolos Turnitin (Teknik Parafrase)</h2>
                <p class="mb-6">
                    Ini adalah bagian paling krusial. Sistem Turnitin akan menandai blok teks yang memiliki kemiripan struktur kalimat dengan database internet. Mengutip langsung (copy-paste lalu memberi tanda kutip) diperbolehkan, tetapi sangat dibatasi persentasenya. Teknik terbaik agar aman dari Turnitin adalah <strong>Parafrase</strong> dan <strong>Sintesis</strong>.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Teknik 1: Parafrase Tingkat Lanjut</h3>
                <p class="mb-6">
                    Parafrase berarti menulis ulang gagasan/ide orang lain menggunakan gaya bahasa Anda sendiri TANPA mengubah maknanya. Jangan hanya mengganti 1-2 kata dengan sinonim (ini masih akan terdeteksi Turnitin).
                    <br><br>
                    <strong>Teks Asli (Plagiat jika di-copas):</strong> "Pemasaran digital adalah suatu aktivitas promosi sebuah merek ataupun produk/jasa menggunakan media elektronik atau digital untuk menjangkau target pasar secara lebih luas dan efisien" (Kotler, 2021).
                    <br><br>
                    <strong>Teks Hasil Parafrase (Aman Turnitin):</strong> Menurut Kotler (2021), pemanfaatan platform elektronik dalam upaya memperkenalkan produk maupun merek ke audiens yang lebih masif dengan biaya yang efektif sering dikenal dengan istilah pemasaran digital.
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Teknik 2: Sintesis (Menggabungkan Beberapa Pendapat)</h3>
                <p class="mb-6">
                    Ini adalah level tertinggi dalam menulis Bab 2 yang sangat disukai dosen. Daripada Anda menulis definisi satu per satu (menurut A begini, menurut B begini), lebih baik Anda gabungkan maknanya menjadi satu paragraf yang kuat.
                    <br><br>
                    <strong>Contoh Sintesis:</strong> "Berdasarkan definisi yang dipaparkan oleh beberapa ahli (Kotler, 2021; Tjiptono, 2022; Assauri, 2020), dapat ditarik kesimpulan bahwa pemasaran digital merupakan strategi komunikasi perusahaan yang memanfaatkan teknologi internet guna menciptakan interaksi dua arah dengan konsumen secara lebih terukur."
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Sumber Referensi yang Wajib Dihindari!</h2>
                <p class="mb-6">
                    Kualitas skripsi Anda dinilai dari kualitas daftar pustakanya. Dosen sangat anti melihat referensi yang berasal dari sumber tidak kredibel. Saat menyusun Bab 2, <strong>JANGAN PERNAH</strong> mengutip dari:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li>Blog pribadi (Blogspot, WordPress, Medium) yang penulisnya tidak jelas kredibilitas akademiknya.</li>
                    <li>Wikipedia (karena siapa saja bisa menyunting kontennya).</li>
                    <li>Makalah mahasiswa lain yang diunggah di situs berbagi dokumen (seperti Academia.edu atau Scribd) yang belum melalui proses <em>peer-review</em>.</li>
                    <li>Buku teks yang sudah terlalu usang (aturan emasnya adalah menggunakan literatur maksimal 10 tahun terakhir, kecuali untuk "Grand Theory" klasik).</li>
                </ul>
                <p class="mb-6">
                    Prioritaskan mengutip dari Jurnal Internasional terindeks Scopus, Jurnal Nasional terindeks SINTA (minimal SINTA 3 atau 4), Buku Teks cetak terbitan penerbit resmi (Erlangga, Rajawali, dll), dan publikasi resmi dari lembaga pemerintah (BPS, Bank Indonesia).
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Kesimpulan</h2>
                <p class="mb-6">
                    Menyusun Tinjauan Pustaka (Bab 2) memang membutuhkan kesabaran membaca dan ketekunan mengetik. Berhentilah mencari jalan pintas dengan copy-paste. Terapkan teknik membaca cepat (skimming), lakukan parafrase dengan bahasa akademik Anda sendiri, dan gunakan aplikasi manajemen referensi (Mendeley atau Zotero) agar penyusunan daftar pustaka nanti otomatis dan rapi. Bab 2 yang kuat akan membuat argumen penelitian Anda tidak mudah dipatahkan saat sidang!
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-file-pen"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Stres Karena Bab 2 Selalu Plagiat dan Turnitin Merah?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Sudah bolak-balik revisi Bab 2 tapi skor Turnitin masih mentok di atas 40%? Kesulitan mencari jurnal Sinta/Scopus yang sesuai dengan variabel penelitian Anda? Waktu pendaftaran sidang sudah mepet?
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Tenang, tim <strong>Pena Elit</strong> siap memberikan solusi instan dan profesional! Kami menawarkan layanan <strong>Penyusunan Bab 2 Eksklusif dan Jasa Parafrase Penurunan Turnitin</strong>. Tim penulis akademik kami yang berpengalaman akan merombak total struktur kalimat Bab 2 Anda secara manual (bukan dengan software spin artikel yang hasilnya berantakan), menjamin skor similarity turun drastis di bawah standar kampus (biasanya &lt; 20%), lengkap dengan garansi dan tambahan pencarian jurnal referensi internasional terbaru.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20jasa%20parafrase%20Turnitin%20dan%20bantuan%20penyusunan%20Bab%202%20yang%20anti%20plagiat." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Pesan Jasa Penurunan Turnitin
                    </a>
                </div>
    `
  },
  {
    filename: 'tips-lulus-sidang-skripsi-dengan-nilai-a.html',
    title: 'Tips dan Trik Lulus Sidang Skripsi dengan Nilai A (Cumlaude)',
    desc: 'Rahasia mendapatkan nilai A saat sidang skripsi komprehensif. Mulai dari persiapan mental, teknik presentasi, hingga cara meyakinkan dosen penguji yang killer.',
    h1: 'Bongkar Rahasia Lulus Sidang Skripsi dengan Nilai A Sempurna: Trik Psikologis & Teknis yang Jarang Diketahui',
    category: 'Sidang Skripsi',
    date: '31 Agustus 2026',
    icon: 'fa-medal',
    color: 'bg-teal-50',
    iconColor: 'text-teal-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Mendapatkan predikat lulus sidang skripsi saja sudah menjadi kelegaan luar biasa bagi seorang mahasiswa. Namun, bagi sebagian mahasiswa yang ambisius, sekadar "lulus" tidaklah cukup. Meraih nilai skripsi "A" (Sangat Memuaskan) adalah target puncak demi mengamankan predikat kelulusan <em>Cumlaude</em> dan mempercantik transkrip nilai akademik sebagai modal utama bersaing di dunia kerja nanti.
                </p>

                <p class="mb-6">
                    Lalu, apakah nilai A di ruang sidang skripsi hanya diperuntukkan bagi mahasiswa jenius yang memiliki IPK 4.0? Tentu tidak! Kenyataannya, banyak mahasiswa dengan naskah skripsi pas-pasan berhasil memukau dosen dan membawa pulang nilai A berkat strategi presentasi yang brilian. Sebaliknya, naskah skripsi yang brilian bisa mendapat nilai B atau bahkan C karena mahasiswa gagal meyakinkan penguji akibat demam panggung dan cara komunikasi yang buruk. Dalam artikel eksklusif ini, kita akan membongkar strategi psikologis dan teknis untuk meretas jalan menuju nilai A di sidang skripsi!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Formula Penilaian Sidang: Apa yang Sebenarnya Dinilai Dosen?</h2>
                <p class="mb-6">
                    Sebelum maju perang, Anda harus tahu kriteria kemenangan. Penilaian sidang skripsi umumnya dibagi ke dalam tiga komponen besar dengan bobot persentase tertentu (bisa berbeda antar kampus):
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Kualitas Naskah (Bobot 30-40%):</strong> Menilai tata bahasa, format penulisan, kelengkapan literatur, orisinalitas ide, dan ketepatan metodologi.</li>
                    <li><strong>Teknik Presentasi (Bobot 20-30%):</strong> Menilai kualitas desain slide PowerPoint (PPT), intonasi suara, <em>body language</em>, ketepatan waktu, dan penguasaan panggung.</li>
                    <li><strong>Kemampuan Argumentasi / Tanya Jawab (Bobot 30-40%):</strong> Ini adalah penentu utama! Menilai seberapa logis dan teoritis Anda dalam mempertahankan argumen, menjawab sanggahan dosen, dan kemampuan berpikir kritis (problem solving).</li>
                </ul>
                <p class="mb-6">
                    Untuk mendapat nilai A, Anda harus tampil dominan di komponen Tanya Jawab dan Presentasi, meskipun naskah Anda mungkin memiliki sedikit kekurangan ketikan (typo).
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Trik Menyusun Slide Presentasi (PPT) yang Memukau "First Impression"</h2>
                <p class="mb-6">
                    Kesan pertama sangat menentukan arah mood dosen penguji. Dosen sangat benci melihat slide presentasi yang isinya 100% teks <em>copy-paste</em> dari Microsoft Word.
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Terapkan Aturan 10-20-30 (Modifikasi):</strong> Idealnya gunakan maksimal 15 slide untuk waktu 15 menit.</li>
                    <li><strong>Visualisasikan Data:</strong> Jangan tampilkan tabel SPSS yang rumit. Ubah tabel menjadi diagram batang, pie chart, atau infografis yang mudah dicerna mata dalam 3 detik.</li>
                    <li><strong>Gunakan Kontras Warna yang Profesional:</strong> Hindari template bawaan PPT yang norak. Gunakan skema warna yang elegan (misal: Navy Blue dan Putih) dan font sans-serif yang bersih (seperti Montserrat, Roboto, atau Open Sans).</li>
                    <li><strong>Satu Slide, Satu Pesan Utama:</strong> Biarkan ruang kosong (white space) yang banyak agar mata audiens fokus pada poin utama.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Strategi Psikologis Menghadapi Dosen Penguji "Killer"</h2>
                <p class="mb-6">
                    Dosen penguji memiliki beragam karakter, mulai dari yang suportif hingga yang bertipe "penyerang" (killer). Menghadapi tipe penyerang butuh trik psikologis khusus:
                </p>
                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">A. Lakukan "Academic Aikido" (Jangan Melawan Arus)</h3>
                <p class="mb-6">
                    Saat dosen killer memberikan kritik tajam yang menyudutkan ("Metode kamu ini salah total, kamu ngerti metodologi gak sih?"), <strong>jangan pernah memotong pembicaraannya dan jangan merespons dengan emosi atau nada tinggi!</strong> Dengarkan sampai selesai.
                    Lalu, gunakan teknik Aikido: setujui argumennya, lalu belokkan ke arah referensi Anda.
                    <br><br>
                    <em>"Terima kasih atas koreksinya yang sangat membuka wawasan saya, Bapak. Saya sangat setuju bahwa metode A lebih presisi. Namun, alasan spesifik saya menggunakan metode B saat ini adalah berdasarkan rujukan dari jurnal (Sebutkan Nama Penulis dan Tahun), yang mana dalam batasan penelitian dan anggaran waktu yang sempit, metode B dianggap masih memadai untuk menjawab rumusan masalah. Namun, saya akan mencatat masukan Bapak sebagai saran untuk perbaikan ke depannya."</em>
                </p>

                <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">B. Jadilah Ahli Pembuat Umpan (Baiting)</h3>
                <p class="mb-6">
                    Anda bisa mengontrol arah pertanyaan dosen dengan menyisipkan pernyataan "gantung" saat presentasi, agar dosen penasaran dan bertanya mengenai hal yang <strong>sudah Anda siapkan jawabannya</strong>. Misalnya, di slide presentasi Bab 4, Anda sebutkan: "Ada satu fenomena unik dan anomali yang saya temukan selama wawancara di lapangan." (tapi jangan jelaskan detailnya). Dosen hampir pasti akan memancing, "Fenomena unik apa yang kamu maksud?" Boom! Anda sudah siap dengan jawaban memukau yang berpotensi mendulang skor tinggi.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Penguasaan Substansi (Hard Skills) yang Wajib Dimiliki</h2>
                <p class="mb-6">
                    Trik komunikasi tidak akan berguna jika kepala Anda kosong. Untuk mengunci nilai A, pastikan Anda hafal di luar kepala mengenai 4 hal ini:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Grand Theory:</strong> Pahami siapa pencetus teorinya, kapan diciptakan, dan apa bunyi postulat/asumsi dasar teori tersebut.</li>
                    <li><strong>Justifikasi Pemilihan Sampel:</strong> Alasan rasional mengapa objek X yang dipilih, dan mengapa jumlah sampel sekian.</li>
                    <li><strong>Interpretasi Angka Statistik:</strong> Paham membaca nilai p-value (signifikansi), R-Square, t-hitung, dan F-hitung tanpa harus membaca catatan.</li>
                    <li><strong>Rekomendasi Manajerial:</strong> Saran yang konkrit, tidak mengawang-awang, dan benar-benar bisa dipraktikkan oleh instansi/perusahaan tempat Anda meneliti.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Kesimpulan</h2>
                <p class="mb-6">
                    Meraih nilai A dalam sidang skripsi membutuhkan perpaduan antara ketekunan akademis, kemampuan desain visual, dan keluwesan diplomasi komunikasi. Anggaplah sidang skripsi bukan sebagai pengadilan yang menakutkan, melainkan sebagai sebuah panggung pertunjukan di mana Anda adalah aktor utamanya dan sutradaranya. Berikan penampilan terbaik Anda yang tak terlupakan bagi dewan penguji!
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-ranking-star"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Ingin Tampil Memukau Tanpa Perlu Pusing Bikin Slide Presentasi?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Anda mungkin menguasai materi, tapi jika slide presentasi Anda terlihat murahan dan membosankan, dosen penguji akan malas mendengarkan sejak menit pertama. Sayangnya, membuat infografis PPT yang profesional membutuhkan waktu dan keahlian desain.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Serahkan beban tersebut kepada tim desain dan akademisi <strong>Pena Elit</strong>! Kami menawarkan <strong>Layanan Pembuatan Slide PPT Presentasi Sidang Skripsi Premium</strong>. Kami akan meringkas ratusan halaman skripsi Anda menjadi 15-20 slide PPT yang super estetik, berkelas, lengkap dengan infografis, chart dinamis, dan animasi profesional yang dijamin akan membuat dosen penguji terkesan. Bonus: Kami juga akan menyusunkan naskah teks pidato (speaker notes) apa saja yang harus Anda ucapkan di tiap slidenya!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20ingin%20memesan%20jasa%20pembuatan%20PPT%20Presentasi%20Sidang%20Skripsi%20yang%20profesional." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Pesan Jasa Pembuatan PPT Sidang
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
                <span class="inline-block ${article.color} text-${article.color.replace('bg-', '').replace('-50', '')}-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">${article.category}</span>
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

console.log('All 4 SEO articles generated successfully!');
