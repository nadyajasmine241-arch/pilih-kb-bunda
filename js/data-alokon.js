// Data Alokon Puskesmas Pracimantoro 1, Wonogiri
// Menggunakan ilustrasi medis akurat (SVG) & konten ringkas bersahabat

const DATA_ALOKON = [
  {
    id: "iud",
    nama: "IUD / Spiral (Copper T)",
    sebutan: "Metode Bebas Hormon (5 - 8 Tahun)",
    durasi: "5 - 8 Tahun",
    efektivitas: "99.4%",
    statusBpjs: "Gratis BPJS",
    tipeVisual: "iud",
    highlight: "Sangat direkomendasikan bila punya tensi tinggi, menyusui, atau tidak ingin berat badan naik.",
    ringkasan: "Alat lentur berbentuk huruf 'T' dengan lilitan kawat tembaga murni yang dipasang di dalam rahim oleh bidan/dokter.",
    plus: [
      "100% Bebas Hormon: Tidak bikin gemuk & kulit tetap bersih.",
      "Sangat aman untuk ibu menyusui dan yang punya tensi tinggi.",
      "Cukup 1 kali pasang, aktif melindungi hingga 8 tahun."
    ],
    minus: [
      "Perlu dipasang oleh dokter atau bidan terlatih di Puskesmas.",
      "Haid sedikit lebih banyak di 1–3 bulan pertama setelah pasang."
    ],
    faktaPenting: "Benang IUD sangat halus dan akan melunak di dalam liang kewanitaan, sehingga aman dan tidak mengganggu suami saat berhubungan intim."
  },
  {
    id: "implan",
    nama: "Implan / Susuk KB",
    sebutan: "Batang Lentur Lengan (3 Tahun)",
    durasi: "3 Tahun",
    efektivitas: "99.5%",
    statusBpjs: "Gratis BPJS",
    tipeVisual: "implan",
    highlight: "Sangat praktis di bawah kulit lengan, perlindungan efektif 3 tahun penuh.",
    ringkasan: "Batang kecil lentur seukuran korek api (1 atau 2 batang) yang diselipkan tepat di bawah kulit lengan atas bagian dalam.",
    catatanPuskesmas: "Di Puskesmas Pracimantoro 1, ketersediaan 1 atau 2 batang disesuaikan dengan alokasi resmi BKKBN. Keduanya sama-sama efektif melindungi selama 3 tahun.",
    plus: [
      "Pasang sekali, aman 3 tahun tanpa takut lupa jadwal.",
      "Aman untuk ibu menyusui (tidak mengandung hormon estrogen).",
      "Bunda bebas beraktivitas normal dan bekerja di ladang setelah luka kecil sembuh."
    ],
    minus: [
      "Pola haid bisa berupa flek atau jarang haid (hal ini aman secara medis).",
      "Pemasangan dan pencabutan dilakukan oleh tenaga medis di faskes."
    ],
    faktaPenting: "Implan berada aman tepat di bawah kulit lengan dalam, tidak bisa berpindah ke organ tubuh lain, dan tidak membuat lengan lemas."
  },
  {
    id: "suntik3",
    nama: "Suntik KB 3 Bulan",
    sebutan: "Suntik Progestin (Depo)",
    durasi: "3 Bulan",
    efektivitas: "97%",
    statusBpjs: "Gratis BPJS",
    tipeVisual: "suntik3",
    highlight: "Metode paling populer di masyarakat dan aman untuk ibu yang sedang menyusui.",
    ringkasan: "Injeksi hormon progestin pada otot bokong yang diulang setiap 12 minggu (3 bulan sekali).",
    plus: [
      "Aman untuk ibu menyusui (ASI tetap lancar melimpah).",
      "Cukup datang ke Puskesmas 3 bulan sekali.",
      "Membantu mengurangi nyeri haid bagi yang sering kram."
    ],
    minus: [
      "Umumnya haid berhenti sementara (ini normal, bukan darah kotor menumpuk!).",
      "Dapat memicu nafsu makan bertambah pada sebagian ibu."
    ],
    faktaPenting: "Tidak haid saat suntik 3 bulan terjadi karena dinding rahim sengaja diistirahatkan tipis, sehingga tidak ada darah yang perlu diluruhkan."
  },
  {
    id: "suntik1",
    nama: "Suntik KB 1 Bulan",
    sebutan: "Suntik Kombinasi Hormon",
    durasi: "1 Bulan",
    efektivitas: "98%",
    statusBpjs: "Gratis BPJS",
    tipeVisual: "suntik1",
    highlight: "Siklus menstruasi tetap teratur datang setiap bulan.",
    ringkasan: "Injeksi kombinasi hormon estrogen dan progestin yang diberikan setiap 30 hari sekali di faskes.",
    plus: [
      "Siklus menstruasi bulanan tetap teratur datang.",
      "Peluang hamil kembali lebih cepat setelah suntikan dihentikan."
    ],
    minus: [
      "Tidak boleh untuk ibu menyusui dengan bayi di bawah usia 6 bulan.",
      "Tidak disarankan untuk Bunda dengan tekanan darah tinggi (tensi > 140/90)."
    ],
    faktaPenting: "Bidan akan selalu memeriksa tensi darah Bunda sebelum penyuntikan demi menjaga kesehatan jantung dan pembuluh darah."
  },
  {
    id: "pil",
    nama: "Pil KB Kombinasi",
    sebutan: "Tablet Minum Harian",
    durasi: "Harian",
    efektivitas: "93 - 99%",
    statusBpjs: "Gratis BPJS",
    tipeVisual: "pil",
    highlight: "Fleksibel dan kesuburan langsung kembali segera setelah berhenti minum.",
    ringkasan: "Tablet hormon yang diminum teratur satu butir setiap hari di jam yang sama.",
    plus: [
      "Kesuburan langsung kembali saat Bunda ingin merencanakan hamil lagi.",
      "Membuat siklus haid teratur dan mengurangi kram perut."
    ],
    minus: [
      "Mudah kebobolan jika sering lupa minum atau jam minum sering berganti.",
      "Tidak cocok untuk ibu menyusui eksklusif atau yang memiliki tensi tinggi."
    ],
    faktaPenting: "Kunci keberhasilan pil adalah disiplin jam. Setel alarm pengingat di HP pada jam yang sama setiap malam."
  },
  {
    id: "kondom",
    nama: "Kondom",
    sebutan: "Pelindung Non-Hormonal",
    durasi: "Tiap Berhubungan",
    efektivitas: "85 - 98%",
    statusBpjs: "Gratis BPJS",
    tipeVisual: "kondom",
    highlight: "100% bebas hormon dan perlindungan ganda terhadap infeksi.",
    ringkasan: "Alat kontrasepsi berbahan lateks tipis yang digunakan suami saat berhubungan.",
    plus: [
      "100% Bebas Hormon: Sama sekali tanpa efek samping hormonal pada tubuh Bunda.",
      "Bisa digunakan sementara saat jeda menunggu jadwal pasang IUD atau Implan."
    ],
    minus: [
      "Sangat tergantung pada kerja sama dan pemakaian yang benar oleh suami."
    ],
    faktaPenting: "Kondom merupakan wujud kerja sama suami dalam merencanakan masa depan keluarga yang sehat."
  }
];

// Helper Generator Ilustrasi SVG Medis Akurat
function getAlokonIllustration(tipe) {
  if (tipe === "iud") {
    return `
      <svg viewBox="0 0 240 160" class="w-full h-full bg-[#fdf4f5]" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" fill="#fdf4f5"/>
        <!-- Uterus Outline (Soft) -->
        <path d="M70,30 C90,20 150,20 170,30 C190,45 180,95 130,135 C125,140 115,140 110,135 C60,95 50,45 70,30 Z" fill="#fae8eb" stroke="#f3cbd2" stroke-width="2"/>
        <!-- IUD Horizontal Arms (White Frame with Copper Windings) -->
        <rect x="85" y="44" width="70" height="8" rx="4" fill="#ffffff" stroke="#e07a8b" stroke-width="1.5"/>
        <line x1="95" y1="44" x2="95" y2="52" stroke="#d97706" stroke-width="2"/>
        <line x1="105" y1="44" x2="105" y2="52" stroke="#d97706" stroke-width="2"/>
        <line x1="135" y1="44" x2="135" y2="52" stroke="#d97706" stroke-width="2"/>
        <line x1="145" y1="44" x2="145" y2="52" stroke="#d97706" stroke-width="2"/>
        <!-- IUD Vertical Stem (Copper T Coiled) -->
        <rect x="116" y="50" width="8" height="60" rx="4" fill="#ffffff" stroke="#e07a8b" stroke-width="1.5"/>
        <!-- Copper Coiling around stem -->
        <path d="M116,56 L124,58 M116,62 L124,64 M116,68 L124,70 M116,74 L124,76 M116,80 L124,82 M116,86 L124,88 M116,92 L124,94 M116,98 L124,100" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
        <!-- Nylon Threads -->
        <path d="M120,110 Q115,130 112,150" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-dasharray="2,2"/>
        <path d="M120,110 Q125,130 128,150" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-dasharray="2,2"/>
        <text x="120" y="24" text-anchor="middle" font-size="10" font-family="Nunito" font-weight="bold" fill="#be4c60">IUD / AKDR Copper T di Dalam Rahim</text>
      </svg>
    `;
  } else if (tipe === "implan") {
    return `
      <svg viewBox="0 0 240 160" class="w-full h-full bg-[#fdf4f5]" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" fill="#fdf4f5"/>
        <!-- Lengan Atas (Arm Contour) -->
        <path d="M40,20 C80,20 180,30 210,60 C220,110 180,140 140,145 C100,148 50,140 30,130 Z" fill="#fae8eb" stroke="#f3cbd2" stroke-width="2"/>
        <!-- Subcutaneous Layer Guide -->
        <path d="M70,55 Q130,58 180,75" stroke="#e07a8b" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/>
        <!-- Implan Rod 1 (White flexible rod) -->
        <rect x="95" y="70" width="55" height="7" rx="3.5" fill="#ffffff" stroke="#be4c60" stroke-width="2"/>
        <!-- Implan Rod 2 (White flexible rod) -->
        <rect x="98" y="85" width="55" height="7" rx="3.5" fill="#ffffff" stroke="#be4c60" stroke-width="2"/>
        <text x="125" y="112" text-anchor="middle" font-size="10" font-family="Nunito" font-weight="bold" fill="#be4c60">2 Batang Lentur di Bawah Kulit Lengan</text>
        <text x="125" y="126" text-anchor="middle" font-size="9" font-family="Nunito" fill="#843443">(Panjang 4 cm, sangat lentur)</text>
      </svg>
    `;
  } else if (tipe === "suntik3") {
    return `
      <svg viewBox="0 0 240 160" class="w-full h-full bg-[#fdf4f5]" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" fill="#fdf4f5"/>
        <!-- Vial Container -->
        <rect x="95" y="45" width="50" height="75" rx="8" fill="#ffffff" stroke="#be4c60" stroke-width="2"/>
        <!-- Vial Cap & Neck -->
        <rect x="107" y="32" width="26" height="13" rx="3" fill="#e07a8b" stroke="#be4c60" stroke-width="1.5"/>
        <rect x="112" y="24" width="16" height="8" rx="2" fill="#9f3c4e"/>
        <!-- Medicine Liquid Level -->
        <path d="M96,80 L144,80 L144,115 C144,118 141,120 138,120 L102,120 C99,120 96,118 96,115 Z" fill="#fce4e8"/>
        <!-- Label -->
        <rect x="100" y="55" width="40" height="35" rx="3" fill="#fdf2f4" stroke="#f3cbd2" stroke-width="1"/>
        <text x="120" y="69" text-anchor="middle" font-size="9" font-family="Nunito" font-weight="bold" fill="#be4c60">KB 3 BLN</text>
        <text x="120" y="81" text-anchor="middle" font-size="8" font-family="Nunito" fill="#6e5f62">Progestin</text>
        <text x="120" y="142" text-anchor="middle" font-size="10" font-family="Nunito" font-weight="bold" fill="#843443">Injeksi Ulang Tiap 12 Minggu</text>
      </svg>
    `;
  } else if (tipe === "suntik1") {
    return `
      <svg viewBox="0 0 240 160" class="w-full h-full bg-[#fdf4f5]" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" fill="#fdf4f5"/>
        <!-- Vial Container -->
        <rect x="95" y="45" width="50" height="75" rx="8" fill="#ffffff" stroke="#be4c60" stroke-width="2"/>
        <rect x="107" y="32" width="26" height="13" rx="3" fill="#be4c60" stroke="#9f3c4e" stroke-width="1.5"/>
        <rect x="112" y="24" width="16" height="8" rx="2" fill="#70303b"/>
        <!-- Liquid Level -->
        <path d="M96,75 L144,75 L144,115 C144,118 141,120 138,120 L102,120 C99,120 96,118 96,115 Z" fill="#fae8eb"/>
        <!-- Label -->
        <rect x="100" y="55" width="40" height="35" rx="3" fill="#fdf2f4" stroke="#f3cbd2" stroke-width="1"/>
        <text x="120" y="69" text-anchor="middle" font-size="9" font-family="Nunito" font-weight="bold" fill="#be4c60">KB 1 BLN</text>
        <text x="120" y="81" text-anchor="middle" font-size="8" font-family="Nunito" fill="#6e5f62">Kombinasi</text>
        <text x="120" y="142" text-anchor="middle" font-size="10" font-family="Nunito" font-weight="bold" fill="#843443">Haid Bulanan Tetap Teratur</text>
      </svg>
    `;
  } else if (tipe === "pil") {
    return `
      <svg viewBox="0 0 240 160" class="w-full h-full bg-[#fdf4f5]" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" fill="#fdf4f5"/>
        <!-- Blister Pack Frame -->
        <rect x="50" y="30" width="140" height="95" rx="10" fill="#ffffff" stroke="#e07a8b" stroke-width="2"/>
        <!-- Top Label Header -->
        <rect x="50" y="30" width="140" height="22" rx="8" fill="#fae8eb"/>
        <text x="120" y="45" text-anchor="middle" font-size="9" font-family="Nunito" font-weight="bold" fill="#be4c60">BLISTER 28 HARI</text>
        <!-- Pills Grid (Circles) -->
        <!-- Row 1 -->
        <circle cx="75" cy="65" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <circle cx="95" cy="65" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <circle cx="115" cy="65" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <circle cx="135" cy="65" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <circle cx="155" cy="65" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <!-- Row 2 -->
        <circle cx="75" cy="85" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <circle cx="95" cy="85" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <circle cx="115" cy="85" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <circle cx="135" cy="85" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <circle cx="155" cy="85" r="5" fill="#f4ccd3" stroke="#be4c60" stroke-width="1.5"/>
        <!-- Row 3 (Reminder Pills) -->
        <circle cx="85" cy="105" r="5" fill="#d46376" stroke="#9f3c4e" stroke-width="1.5"/>
        <circle cx="105" cy="105" r="5" fill="#d46376" stroke="#9f3c4e" stroke-width="1.5"/>
        <circle cx="125" cy="105" r="5" fill="#d46376" stroke="#9f3c4e" stroke-width="1.5"/>
        <circle cx="145" cy="105" r="5" fill="#d46376" stroke="#9f3c4e" stroke-width="1.5"/>
        <text x="120" y="142" text-anchor="middle" font-size="10" font-family="Nunito" font-weight="bold" fill="#843443">Diminum Disiplin 1 Butir Tiap Jam Sama</text>
      </svg>
    `;
  } else {
    return `
      <svg viewBox="0 0 240 160" class="w-full h-full bg-[#fdf4f5]" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" fill="#fdf4f5"/>
        <!-- Condom Pack Packet -->
        <rect x="80" y="35" width="80" height="80" rx="8" fill="#ffffff" stroke="#be4c60" stroke-width="2"/>
        <circle cx="120" cy="75" r="24" fill="#fae8eb" stroke="#d46376" stroke-width="1.5"/>
        <circle cx="120" cy="75" r="14" fill="#ffffff" stroke="#d46376" stroke-width="1.5"/>
        <text x="120" y="138" text-anchor="middle" font-size="10" font-family="Nunito" font-weight="bold" fill="#843443">Pelindung Fisik Bebas Hormon</text>
      </svg>
    `;
  }
}

window.DATA_ALOKON = DATA_ALOKON;
window.getAlokonIllustration = getAlokonIllustration;
