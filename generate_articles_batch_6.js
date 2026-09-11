const fs = require('fs');
const path = require('path');

const headerTemplate = fs.readFileSync(path.join(__dirname, 'template_header.txt'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, 'template_footer.txt'), 'utf8');

const articles = [
  {
    filename: 'cara-membuat-kuesioner-skripsi.html',
    title: 'Cara Membuat Kuesioner Skripsi yang Valid dan Menarik Responden',
    desc: 'Panduan lengkap cara membuat kuesioner penelitian skripsi kuantitatif yang valid, reliabel, dan mudah diisi oleh responden. Lengkap dengan contohnya.',
    h1: 'Cara Membuat Kuesioner Skripsi Kuantitatif yang Pasti Valid & Reliabel',
    category: 'Olah Data',
    date: '11 September 2026',
    icon: 'fa-list-check',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Bagi mahasiswa yang mengambil penelitian kuantitatif, kuesioner (angket) adalah senjata utama untuk mendapatkan data. Namun, masalah yang sering terjadi adalah kuesioner tidak valid saat diuji, atau responden malas mengisinya karena terlalu panjang dan membingungkan.
                </p>

                <p class="mb-6">
                    Kuesioner yang buruk akan menghasilkan data yang bias (tidak akurat), yang pada akhirnya akan membuat pengolahan data SPSS Anda hancur berantakan. Oleh karena itu, menyusun kuesioner tidak boleh asal <em>copy-paste</em>. Anda harus mengetahui trik dan kaidah akademisnya.
                </p>
                <p class="mb-6">
                    Dalam panduan ini, kita akan membahas cara membuat kuesioner penelitian skripsi yang baik, valid, dan berpeluang besar diisi penuh oleh responden.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Pahami Indikator dari Definisi Operasional Variabel</h2>
                <p class="mb-6">
                    Kesalahan terbesar mahasiswa adalah membuat pertanyaan kuesioner berdasarkan imajinasi semata. Ingat, setiap pertanyaan dalam kuesioner <strong>wajib</strong> diturunkan dari <strong>Indikator Variabel</strong> yang ada di Bab 3 (Definisi Operasional).
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li>Contoh Variabel: Kualitas Pelayanan (Service Quality)</li>
                    <li>Indikator: <em>Tangibles, Reliability, Responsiveness, Assurance, Empathy</em> (Teori Parasuraman).</li>
                    <li>Pertanyaan harus mewakili kelima indikator tersebut. Misalnya untuk indikator <em>Tangibles</em> (Bukti Fisik), pertanyaannya bisa berupa: "Fasilitas ruang tunggu di klinik X sangat nyaman dan bersih."</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Gunakan Skala Pengukuran yang Tepat (Skala Likert)</h2>
                <p class="mb-6">
                    Dalam riset ilmu sosial, Skala Likert adalah yang paling populer karena mudah dipahami dan diolah ke dalam data interval/rasio. Biasanya menggunakan rentang 4 hingga 5 poin.
                </p>
                <p class="mb-6">
                    <strong>Contoh Skala 5 Poin (Sangat Disarankan):</strong><br>
                    1 = Sangat Tidak Setuju (STS)<br>
                    2 = Tidak Setuju (TS)<br>
                    3 = Netral (N) / Ragu-Ragu (R)<br>
                    4 = Setuju (S)<br>
                    5 = Sangat Setuju (SS)
                </p>
                <p class="mb-6">
                    <em>Tips:</em> Hindari penggunaan kalimat pertanyaan (Tanya Jawab), lebih baik gunakan kalimat pernyataan berskala. (Misalnya bukan "Apakah Anda puas?", tapi "Saya merasa puas dengan layanan ini").
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Hindari "Double-Barreled Questions"</h2>
                <p class="mb-6">
                    Double-barreled question adalah satu kalimat yang menanyakan <strong>dua hal sekaligus</strong>. Ini sangat membingungkan responden.
                </p>
                <p class="mb-6">
                    ❌ <strong>Salah:</strong> "Apakah staf melayani dengan cepat dan ramah?" (Bagaimana jika stafnya ramah tapi lambat? Responden akan bingung mau jawab apa).<br>
                    ✅ <strong>Benar:</strong> Pecah menjadi dua: <br>
                    1. Staf melayani dengan cepat. <br>
                    2. Staf bersikap ramah kepada pelanggan.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Lakukan Uji Coba (Pilot Test) Sebelum Disebar Luas</h2>
                <p class="mb-6">
                    Jangan langsung menyebar 100 kuesioner ke responden utama! Lakukan <strong>Pilot Test</strong> dengan menyebarkannya ke 30 orang terlebih dahulu untuk dilakukan uji Validitas dan Reliabilitas di SPSS.
                </p>
                <p class="mb-6">
                    Jika ada item pertanyaan yang "Gugur" (Tidak Valid), Anda bisa menghapus atau merevisi kalimatnya sebelum disebar ke responden sungguhan (n=100+). Ini akan sangat menghemat waktu Anda ke depannya.
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-chart-bar"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Pusing Kuesioner Banyak yang Tidak Valid?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Membuat indikator kuesioner yang sesuai standar teori seringkali memusingkan, apalagi jika saat diuji di SPSS ternyata datanya merah semua (tidak valid/reliabel).
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Tim <strong>Pena Elit</strong> menyediakan layanan <strong>Konsultasi & Pembuatan Kuesioner Skripsi</strong>, di mana kami akan menyusunkan daftar pernyataan kuesioner berdasarkan Grand Theory yang valid, beserta jasa olah data hingga Bab 4 selesai. Kami jamin data Anda akan lulus uji asumsi klasik dan linear berganda!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bantuan%20membuat%20kuesioner%20dan%20olah%20data%20SPSS." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasikan Kuesioner Saya
                    </a>
                </div>
    `
  },
  {
    filename: 'contoh-kata-pengantar-skripsi.html',
    title: 'Contoh Kata Pengantar Skripsi yang Baik, Benar, dan Menyentuh',
    desc: 'Cara menyusun kata pengantar skripsi yang baik dan benar. Urutan ucapan terima kasih untuk dosen, keluarga, hingga pacar agar formal namun tetap berkesan.',
    h1: 'Cara Membuat & Contoh Kata Pengantar Skripsi yang Benar',
    category: 'Panduan Menulis',
    date: '11 September 2026',
    icon: 'fa-envelope-open-text',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Kata Pengantar adalah salah satu halaman krusial di bagian awal (halaman romawi) skripsi. Meski tidak dinilai secara akademis seperti Bab 4, halaman ini adalah "panggung" bagi penulis untuk mengekspresikan rasa syukur dan berterima kasih kepada pihak-pihak yang telah berjasa selama masa perkuliahan.
                </p>

                <p class="mb-6">
                    Banyak mahasiswa bingung: Bagaimana urutan ucapan terima kasih yang benar? Bolehkan menyebutkan nama pacar atau artis idola? Di artikel ini, kita akan membahas format baku penulisan kata pengantar skripsi beserta contoh yang bisa langsung Anda <em>copy-paste</em>.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Urutan Standar Ucapan Terima Kasih (Acknowledgment)</h2>
                <p class="mb-6">
                    Dalam budaya akademik Indonesia, terdapat hierarki kehormatan (protokoler) yang wajib dipatuhi saat menyebut nama. Berikut adalah urutan baku dari yang paling atas hingga ranah personal:
                </p>
                <ol class="list-decimal pl-6 mb-6 text-slate-700 space-y-2 font-medium">
                    <li>Rektor / Direktur Universitas.</li>
                    <li>Dekan Fakultas.</li>
                    <li>Ketua Program Studi (Kaprodi).</li>
                    <li><strong>Dosen Pembimbing Utama & Pendamping (Sangat Penting!).</strong></li>
                    <li>Dosen Penguji Sidang (opsional, jika sudah sidang akhir).</li>
                    <li>Seluruh Dosen dan Staf Tata Usaha (Akademik) Fakultas.</li>
                    <li>Orang Tua dan Keluarga (Ranah Personal dimulai dari sini).</li>
                    <li>Teman Angkatan / Sahabat Seperjuangan.</li>
                    <li>Pihak lain yang mendukung (Pacar, Organisasi, dsb).</li>
                </ol>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Tips Menulis Kata Pengantar yang Elegan</h2>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Gunakan Gelar Lengkap:</strong> Pastikan Anda menulis gelar dosen (Prof., Dr., S.E., M.Si.) secara benar tanpa salah ketik (typo). Salah gelar sangat fatal bagi beberapa dosen.</li>
                    <li><strong>Jangan Terlalu Alay:</strong> Boleh berterima kasih pada pacar atau kucing peliharaan, tapi ingat ini adalah karya ilmiah. Gunakan bahasa yang formal dan elegan, hindari panggilan <em>slang</em> atau curhatan berlebihan yang bisa memicu teguran dari dosen penguji.</li>
                    <li><strong>Panjang Maksimal:</strong> Usahakan Kata Pengantar tidak melebihi 2 halaman kertas A4.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Contoh Teks Kata Pengantar Skripsi (Template)</h2>
                <div class="bg-slate-100 p-6 rounded-xl text-slate-700 font-serif italic mb-6">
                    <p class="mb-4 text-center font-bold">KATA PENGANTAR</p>
                    <p class="mb-4">Puji syukur ke hadirat Allah SWT Tuhan Yang Maha Esa, karena atas berkat dan rahmat-Nya, penulis dapat menyelesaikan penyusunan skripsi yang berjudul <strong>"Pengaruh Strategi Pemasaran Digital terhadap Keputusan Pembelian Gen Z pada Industri Kopi Susu di Jakarta"</strong>. Skripsi ini disusun sebagai salah satu syarat untuk memperoleh gelar Sarjana Manajemen (S.M) pada Program Studi Manajemen, Fakultas Ekonomi, Universitas Maju Bangsa.</p>
                    <p class="mb-4">Penulis menyadari bahwa proses penyelesaian skripsi ini tidak lepas dari bimbingan, arahan, dan dukungan moril dari berbagai pihak. Oleh karena itu, pada kesempatan ini penulis mengucapkan terima kasih yang sebesar-besarnya kepada:</p>
                    <ol class="list-decimal pl-6 mb-4 space-y-2">
                        <li>Bapak Prof. Dr. Budi Santoso, M.M., selaku Rektor Universitas Maju Bangsa.</li>
                        <li>Ibu Dr. Siti Aminah, S.E., M.Si., selaku Dekan Fakultas Ekonomi.</li>
                        <li>Bapak Dr. Hendra Gunawan, M.M., selaku Dosen Pembimbing yang telah meluangkan waktu, tenaga, dan pikiran untuk memberikan bimbingan yang sangat berharga dengan penuh kesabaran.</li>
                        <li>Segenap Dosen Program Studi Manajemen yang telah membekali penulis dengan ilmu pengetahuan selama masa perkuliahan.</li>
                        <li>Kedua orang tua tercinta, Bapak dan Ibu, yang tiada henti mendoakan, membiayai, dan memberikan kasih sayang luar biasa. Skripsi ini adalah persembahan kecil untuk membalas keringat kalian.</li>
                        <li>Sahabat-sahabat perjuangan angkatan 2022 (terutama Rina, Andi, dan Kevin) yang selalu menjadi teman diskusi dan penawar stres selama revisi.</li>
                    </ol>
                    <p class="mb-4">Penulis menyadari bahwa skripsi ini masih jauh dari kata sempurna. Oleh karena itu, kritik dan saran yang membangun sangat diharapkan. Akhir kata, semoga skripsi ini dapat memberikan manfaat bagi pengembangan ilmu pengetahuan dan pembaca sekalian.</p>
                    <div class="text-right mt-8">
                        <p>Jakarta, 11 September 2026</p>
                        <br><br>
                        <p class="font-bold">Penulis</p>
                    </div>
                </div>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-file-word"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Capek Merapikan Format Word (Daftar Isi, Margin, Penomoran)?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Sudah pusing mikirin isi skripsi, masih harus pusing ngurusin format halaman Romawi vs Arab, daftar isi otomatis, daftar tabel, dan margin yang berantakan tiap kali dipindah laptop?
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Serahkan saja urusan <em>formatting</em> ke ahlinya! <strong>Pena Elit</strong> menyediakan <a href="jasa-format-template-skripsi.html" class="text-brand-600 font-bold hover:underline">Jasa Formatting Skripsi Express (1 Malam Selesai)</a>. Kami akan merapikan naskah Anda agar 100% <em>layout</em>-nya mematuhi pedoman penulisan skripsi kampus Anda, lengkap dengan daftar pustaka Mendeley otomatis.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20jasa%20merapikan%20format%20Word%20skripsi%20saya%20agar%20rapi%20otomatis." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Rapikan Skripsi Saya Sekarang
                    </a>
                </div>
    `
  },
  {
    filename: 'cara-membuat-kesimpulan-dan-saran-skripsi.html',
    title: 'Cara Membuat Kesimpulan dan Saran Skripsi (Bab 5) yang Benar',
    desc: 'Bab 5 Skripsi sering direvisi karena kesimpulan tidak menjawab rumusan masalah. Simak cara mudah menyusun kesimpulan dan saran skripsi yang cepat ACC dosen.',
    h1: 'Cara Menyusun Bab 5: Kesimpulan dan Saran Skripsi Anti Revisi',
    category: 'Tips Menulis',
    date: '11 September 2026',
    icon: 'fa-check-double',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Bab 5 (Kesimpulan dan Saran) adalah garis finish dari perjuangan panjang menyusun skripsi. Anehnya, meskipun ini adalah bab terpendek (biasanya hanya 2-3 halaman), masih banyak mahasiswa yang terkena revisi mayor pada bagian ini.
                </p>

                <p class="mb-6">
                    Penyebab utamanya sepele: <strong>Kesimpulan mereka tidak menjawab Rumusan Masalah</strong>, melainkan hanya mengulang-ulang narasi atau menjiplak mentah-mentah abstrak dan Bab 4. Bab 5 harus ditulis dengan pola pikir deduktif yang presisi. Berikut adalah panduan menyusun Bab 5 yang pasti akan di-ACC oleh Dosen Penguji!
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Aturan Emas Kesimpulan: Menjawab Rumusan Masalah</h2>
                <p class="mb-6">
                    Satu-satunya fungsi utama Kesimpulan adalah menjawab pertanyaan yang Anda ajukan di Bab 1 (Rumusan Masalah). Polanya sangat sederhana: <strong>Jika Rumusan Masalah ada 3, maka poin Kesimpulan WAJIB ada 3.</strong>
                </p>
                <p class="mb-6">
                    <strong>Contoh Pola yang Benar:</strong><br>
                    <em>Rumusan Masalah 1:</em> Apakah Harga berpengaruh terhadap Kepuasan Pelanggan?<br>
                    <em>Kesimpulan 1:</em> Harga memiliki pengaruh positif dan signifikan terhadap Kepuasan Pelanggan dengan nilai signifikansi 0,002. Artinya, semakin bersaing harga yang ditawarkan, maka kepuasan pelanggan akan semakin meningkat.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Jangan Menaruh Tabel, Rumus, atau Referensi Baru di Bab 5</h2>
                <p class="mb-6">
                    Kesalahan fatal mahasiswa adalah memasukkan kutipan teori (menurut pakar A...) atau memindahkan tabel regresi besar dari Bab 4 ke Bab 5. Kesimpulan harus berupa <strong>sintesa tekstual</strong>. Cukup sebutkan temuan akhirnya saja berupa narasi deskriptif. Jika ada data statistik, tuliskan angka finalnya (nilai t-hitung atau p-value) secara naratif dalam kalimat, bukan dalam bentuk tabel.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Menyusun "Saran" yang Logis (Actionable)</h2>
                <p class="mb-6">
                    Bagian Saran tidak boleh klise seperti: "Saran untuk perusahaan agar lebih baik lagi ke depannya." Saran harus bersifat aplikatif, spesifik, dan <strong>berbasis dari kelemahan/temuan riset Anda</strong>.
                </p>
                <p class="mb-6">
                    Saran umumnya dibagi menjadi tiga pilar utama:
                </p>
                <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                    <li><strong>Bagi Perusahaan / Objek Penelitian (Aspek Praktis):</strong> Contoh: "Karena dimensi 'Keandalan' mendapatkan skor terendah dalam kuesioner, disarankan agar Perusahaan X mengadakan pelatihan service-excellence bulanan bagi staf garda depan."</li>
                    <li><strong>Bagi Peneliti Selanjutnya (Aspek Teoritis):</strong> Contoh: "Disarankan untuk menambah variabel Promosi atau menggunakan metode kualitatif (wawancara) agar mendapatkan insight perilaku konsumen yang lebih mendalam yang tidak bisa dipotret dengan angket."</li>
                    <li><strong>Bagi Akademisi/Kampus:</strong> (Opsional) Saran pemanfaatan teori untuk modul pembelajaran ke depan.</li>
                </ul>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Gunakan Gaya Bahasa Penegas (Assertive)</h2>
                <p class="mb-6">
                    Di Bab 5, Anda adalah "ahli" dari fenomena yang Anda teliti. Gunakan kata-kata yang mantap dan meyakinkan seperti <em>"membuktikan bahwa", "menunjukkan secara empiris", "berdampak krusial", "mengkonfirmasi teori"</em>. Hindari kata-kata ragu seperti <em>"mungkin", "sepertinya",</em> atau <em>"kurang lebih"</em>.
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-flag-checkered"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Sudah Sampai Bab Akhir Namun Stuck Tak Bisa Lanjut?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Seringkali mahasiswa kehilangan energi di Bab 4 dan 5 karena harus merangkai hasil uji statistik (angka) menjadi kalimat akademis yang nyambung dengan teori di Bab 2.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Jangan biarkan skripsimu mangkrak di garis finish! <strong>Pena Elit</strong> menyediakan layanan <strong>Penyusunan Pembahasan Bab 4 & Bab 5</strong>. Kami akan membantu mengubah <em>output</em> SPSS/data mentahmu menjadi narasi analisis yang mendalam, tajam, komprehensif, dan siap disidangkan di hadapan dosen penguji killer sekalipun!
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20butuh%20bantuan%20menyelesaikan%20Bab%204%20dan%205%20skripsi%20saya." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Bantu Selesaikan Bab Akhir Saya
                    </a>
                </div>
    `
  },
  {
    filename: 'tips-memilih-dosen-pembimbing-skripsi.html',
    title: 'Tips Memilih Dosen Pembimbing Skripsi (Dosbing) yang Tepat',
    desc: 'Salah pilih dosen pembimbing bisa membuat skripsi molor bertahun-tahun. Ketahui tips dan strategi jitu memilih dospem yang responsif, asyik, dan cepat ACC.',
    h1: 'Strategi Memilih Dosen Pembimbing Skripsi Agar Cepat Lulus & Anti Stres',
    category: 'Tips Kampus',
    date: '11 September 2026',
    icon: 'fa-user-tie',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
    body: `
                <p class="lead text-xl text-slate-600 mb-8 font-medium">
                    Ada sebuah pepatah di kalangan mahasiswa akhir: <em>"Skripsi yang baik adalah skripsi yang selesai, dan skripsi yang selesai bergantung pada mood Dosen Pembimbing."</em> Ya, dosen pembimbing (dospem) adalah dewa penentu nasib kelulusan Anda!
                </p>

                <p class="mb-6">
                    Bagi kampus yang memberikan kebebasan mahasiswa untuk "memesan" atau mengajukan nama dospem secara mandiri (tidak di-plot otomatis oleh prodi), ini adalah sebuah privilese (keuntungan) yang harus dimanfaatkan sebaik mungkin. Salah memilih dospem bisa berarti terjebak dalam siklus revisi tiada henti, di-ghosting berbulan-bulan, hingga depresi akademik.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Sesuaikan Bidang Keahlian (Kepakaran) Dosen</h2>
                <p class="mb-6">
                    Ini adalah hukum pertama dan utama. Jika judul Anda tentang Manajemen Pemasaran Digital, jangan pernah memilih dosen yang spesialisasi S2/S3-nya di Manajemen Keuangan, sebaik apapun beliau. 
                </p>
                <p class="mb-6">
                    Jika dipaksakan, dosen akan bingung saat membimbing Anda, dan pada akhirnya Anda akan diminta merombak seluruh judul agar sesuai dengan apa yang beliau pahami. <strong>Cara Cek:</strong> Lihat profil dosen di website prodi atau cari namanya di Google Scholar (SINTA) untuk melihat publikasi riset terakhir beliau tentang apa.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Cari Tahu "Tipe" Dosen dari Kating (Kakak Tingkat)</h2>
                <p class="mb-6">
                    Intelijen terbaik di kampus adalah kating yang baru saja wisuda! Tanyakan pada mereka karakter dosen yang Anda incar. Apakah beliau tipe dosen "Perfeksionis-Killer", "Santai tapi Susah Ditemui", "Fast Respon", atau "Gila Format"?
                </p>
                <p class="mb-6">
                    Pilihlah dosen yang memiliki keseimbangan antara ketelitian akademis dengan <strong>aksesibilitas</strong> (mudah ditemui dan membalas chat WhatsApp). Dosen pintar tapi tidak punya waktu luang untuk membimbing justru akan memperlambat kelulusan Anda.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Hindari Dosen yang Memiliki Jabatan Struktural Tinggi</h2>
                <p class="mb-6">
                    Kecuali Anda memiliki privilege atau kedekatan khusus, sebaiknya hindari memilih Rektor, Dekan, Wakil Dekan, atau pejabat kampus lainnya sebagai pembimbing. Mengapa? <strong>Waktu mereka sangat terbatas.</strong>
                </p>
                <p class="mb-6">
                    Dosen dengan jabatan birokrasi sibuk rapat senat, perjalanan dinas, dan akreditasi. Seringkali jadwal bimbingan Anda akan dibatalkan mendadak berkali-kali. Pilihlah dosen biasa (fungsional) yang fokus mengajar dan meneliti di kampus sehari-hari.
                </p>

                <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. "Lamar" Dosen dengan Proposal yang Sudah Matang</h2>
                <p class="mb-6">
                    Dosen favorit pasti menjadi rebutan puluhan mahasiswa. Kuota mereka akan cepat penuh. Bagaimana cara agar beliau mau menerima Anda di bawah bimbingannya? <strong>Datanglah dengan persiapan!</strong>
                </p>
                <p class="mb-6">
                    Jangan temui dosen incaran Anda dengan tangan kosong dan bertanya, "Pak, saya bingung mau teliti apa." Datanglah dengan membawa <strong>Mini Proposal</strong> (3 halaman berisi Latar Belakang Singkat, Rumusan Masalah, dan Model Penelitian). Dosen sangat menyukai mahasiswa proaktif dan memiliki inisiatif tinggi. Mereka akan langsung menandatangani form kesediaan membimbing karena tahu Anda tidak akan merepotkan.
                </p>

                <div class="bg-brand-50 rounded-2xl p-6 md:p-8 mt-10 border border-brand-100 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-brand-100 opacity-50 text-9xl">
                        <i class="fa-solid fa-mug-hot"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 relative z-10">Sudah Terlanjur Dapat Dosen "Killer" & Skripsi Sering Dicoret?</h3>
                    <p class="text-slate-700 mb-5 relative z-10">
                        Dapat dosen perfeksionis yang sering menyuruh rombak total, merevisi tiada henti, atau memarahi Anda di grup bimbingan? Tenang, Anda tidak harus menghadapi tekanan itu sendirian.
                    </p>
                    <p class="text-slate-700 mb-6 relative z-10">
                        Jadikan <strong>Pena Elit</strong> sebagai <strong>Shadow-Advisor (Pembimbing Bayangan)</strong> Anda! Kami siap menelaah coretan revisi dari dosen Anda, merumuskan <em>counter-argument</em> yang elegan, dan merevisi naskah skripsi Anda dengan standar akademis tinggi (High-End) yang pasti memuaskan ego dosen killer sekalipun.
                    </p>
                    <a href="https://wa.me/6281770450775?text=Halo%20Admin%20Pena%20Elit%2C%20saya%20punya%20kendala%20banyak%20revisi%20dari%20dosen%20pembimbing%20dan%20butuh%20bantuan." target="_blank" class="inline-block bg-brand-900 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-brand-800 transition-colors relative z-10">
                        <i class="fa-brands fa-whatsapp mr-2"></i> Konsultasi Revisi Dosen Disini
                    </a>
                </div>
    `
  }
];

articles.forEach(article => {
  let head = headerTemplate.replace(/<title>.*<\/title>/, '<title>' + article.title + ' - Pena Elit Akademika</title>');
  head = head.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + article.desc + '">');
  head = head.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + article.title + ' - Pena Elit">');
  head = head.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + article.desc + '">');

  const htmlContent = head + `
    <section class="pt-28 pb-10 lg:pt-36 lg:pb-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Breadcrumbs -->
            <nav class="text-sm text-slate-500 mb-8 font-medium">
                <a href="index.html" class="hover:text-brand-600 transition-colors">Beranda</a> 
                <span class="mx-2"><i class="fa-solid fa-chevron-right text-xs"></i></span> 
                <a href="blog.html" class="hover:text-brand-600 transition-colors">Blog</a>
                <span class="mx-2"><i class="fa-solid fa-chevron-right text-xs"></i></span>
                <span class="text-slate-800">` + article.title + `</span>
            </nav>

            <!-- Article Header -->
            <div class="mb-10 text-center">
                <span class="inline-block ` + article.color + ` text-` + article.color.replace('bg-', '').replace('-50', '') + `-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">` + article.category + `</span>
                <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                    ` + article.h1 + `
                </h1>
                <div class="flex items-center justify-center text-sm text-slate-500 space-x-4">
                    <span class="flex items-center"><i class="fa-solid fa-calendar mr-2"></i> ` + article.date + `</span>
                    <span class="flex items-center"><i class="fa-solid fa-user-pen mr-2"></i> Tim Pena Elit</span>
                </div>
            </div>

            <!-- Hero Image -->
            <div class="rounded-3xl overflow-hidden shadow-xl mb-12 h-64 md:h-96 ` + article.color + ` flex items-center justify-center border border-slate-100">
                <i class="fa-solid ` + article.icon + ` text-9xl ` + article.iconColor + `"></i>
            </div>

            <!-- Article Content -->
            <article class="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-700">
` + article.body + `
            
                <!-- Artikel Terkait -->
                <div class="mt-12 mb-8 border-t border-slate-100 pt-10">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><i class="fa-solid fa-book-open text-brand-600"></i> Baca Juga Artikel Terkait:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <a href="alasan-judul-skripsi-sering-ditolak.html" class="group block border border-slate-200 rounded-2xl p-5 hover:border-brand-500 hover:shadow-lg transition-all bg-white">
                            <span class="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 block">Konsultasi Skripsi</span>
                            <h4 class="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">5 Alasan Mengapa Judul Skripsi Sering Ditolak Dosen</h4>
                            <p class="text-sm text-slate-500">Baca artikel <i class="fa-solid fa-arrow-right ml-1"></i></p>
                        </a>
                        <a href="tips-lulus-skripsi-cepat.html" class="group block border border-slate-200 rounded-2xl p-5 hover:border-brand-500 hover:shadow-lg transition-all bg-white">
                            <span class="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 block">Tips Akademik</span>
                            <h4 class="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">7 Tips Lulus Skripsi Cepat Tanpa Pusing Revisi</h4>
                            <p class="text-sm text-slate-500">Baca artikel <i class="fa-solid fa-arrow-right ml-1"></i></p>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </section>
` + footerTemplate;

  fs.writeFileSync(path.join(__dirname, article.filename), htmlContent);
  console.log('Generated:', article.filename);
});

console.log('All 4 new batch articles generated successfully!');
