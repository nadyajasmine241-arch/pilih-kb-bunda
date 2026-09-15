// Data Alokon Puskesmas Pracimantoro 1, Wonogiri
// Format Ringkas & Padat dengan Gambar Menarik

const DATA_ALOKON = [
  {
    id: "iud",
    nama: "IUD / Spiral (Copper T)",
    sebutan: "Metode Bebas Hormon",
    durasi: "5 - 8 Tahun",
    efektivitas: "99.4%",
    statusBpjs: "Gratis BPJS",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    highlight: "Pilihan nomor satu bila punya tensi tinggi, menyusui, atau tidak ingin gemuk.",
    ringkasan: "Alat kecil lentur berlapis tembaga yang dipasang di dalam rahim oleh bidan/dokter.",
    plus: [
      "100% Bebas Hormon: Tidak bikin gemuk & kulit tetap bersih.",
      "Sangat aman untuk darah tinggi dan ibu menyusui.",
      "Perlindungan panjang hingga 8 tahun, kesuburan cepat kembali."
    ],
    minus: [
      "Perlu pemasangan oleh tenaga medis di Puskesmas.",
      "Haid sedikit lebih banyak di 1–3 bulan pertama."
    ],
    faktaPenting: "Benang IUD sangat halus dan melunak di dalam vagina, sehingga tidak mengganggu suami saat berhubungan intim."
  },
  {
    id: "implan",
    nama: "Implan / Susuk KB",
    sebutan: "Batang Lentur Lengan (1 atau 2 Batang)",
    durasi: "3 Tahun",
    efektivitas: "99.5%",
    statusBpjs: "Gratis BPJS",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    highlight: "Sangat praktis di bawah kulit lengan, efektivitas pencegahan tertinggi.",
    ringkasan: "Batang lentur kecil seukuran korek api yang diselipkan di lengan atas bagian dalam.",
    catatanPuskesmas: "Jenis 1 atau 2 batang disesuaikan dengan alokasi resmi BKKBN. Keduanya sama-sama melindungi 3 tahun.",
    plus: [
      "Pasang sekali, aman 3 tahun tanpa repot.",
      "Aman untuk ibu menyusui (tanpa hormon estrogen).",
      "Bebas beraktivitas dan kerja di ladang setelah luka sembuh."
    ],
    minus: [
      "Pola haid bisa berupa flek atau tidak haid sementara (hal ini aman).",
      "Pemasangan & pencabutan dilakukan dokter/bidan."
    ],
    faktaPenting: "Implan terpasang aman di bawah kulit, tidak bisa jalan-jalan ke organ tubuh lain dan tidak bikin tangan lemas."
  },
  {
    id: "suntik3",
    nama: "Suntik KB 3 Bulan",
    sebutan: "Suntik Progestin (Depo)",
    durasi: "3 Bulan",
    efektivitas: "97%",
    statusBpjs: "Gratis BPJS",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=600&q=80",
    highlight: "Paling populer di masyarakat dan aman untuk ibu menyusui.",
    ringkasan: "Suntikan hormon progestin di bokong setiap 12 minggu sekali.",
    plus: [
      "Aman untuk ibu menyusui (ASI tetap lancar).",
      "Cukup kontrol 3 bulan sekali ke Puskesmas.",
      "Dapat mengurangi nyeri haid."
    ],
    minus: [
      "Umumnya haid berhenti sementara (ini normal, bukan darah kotor tertimbun).",
      "Dapat memicu kenaikan berat badan pada sebagian ibu."
    ],
    faktaPenting: "Tidak haid karena dinding rahim sengaja diistirahatkan tipis, jadi memang tidak ada darah yang terbentuk."
  },
  {
    id: "suntik1",
    nama: "Suntik KB 1 Bulan",
    sebutan: "Suntik Kombinasi",
    durasi: "1 Bulan",
    efektivitas: "98%",
    statusBpjs: "Gratis BPJS",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    highlight: "Cocok bagi yang ingin siklus haid tetap teratur tiap bulan.",
    ringkasan: "Suntikan kombinasi hormon estrogen & progestin setiap 30 hari.",
    plus: [
      "Siklus menstruasi tetap teratur datang tiap bulan.",
      "Kesuburan lebih cepat kembali setelah berhenti."
    ],
    minus: [
      "Tidak boleh untuk ibu menyusui bayi di bawah 6 bulan.",
      "Tidak boleh untuk ibu dengan riwayat darah tinggi (tensi > 140/90)."
    ],
    faktaPenting: "Bidan akan selalu mengecek tensi sebelum suntik demi keamanan pembuluh darah Bunda."
  },
  {
    id: "pil",
    nama: "Pil KB Kombinasi",
    sebutan: "Tablet Minum Harian",
    durasi: "Harian",
    efektivitas: "93 - 99%",
    statusBpjs: "Gratis BPJS",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    highlight: "Sangat fleksibel, kesuburan langsung kembali begitu berhenti minum.",
    ringkasan: "Tablet hormon yang diminum satu butir setiap hari di jam yang sama.",
    plus: [
      "Kesuburan langsung kembali saat berhenti minum.",
      "Membuat siklus haid teratur dan mengurangi kram."
    ],
    minus: [
      "Mudah kebobolan jika sering lupa minum obat.",
      "Tidak cocok untuk busui eksklusif & tensi tinggi."
    ],
    faktaPenting: "Kunci keberhasilan pil adalah disiplin jam. Setel alarm di HP pada waktu yang sama setiap malam."
  },
  {
    id: "kondom",
    nama: "Kondom",
    sebutan: "Pelindung Non-Hormonal",
    durasi: "Tiap Berhubungan",
    efektivitas: "85 - 98%",
    statusBpjs: "Gratis BPJS",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
    highlight: "100% bebas hormon dan melindungi ganda dari infeksi.",
    ringkasan: "Alat kontrasepsi barier berbahan lateks tipis yang digunakan suami.",
    plus: [
      "100% Bebas Hormon: Tanpa efek samping fisik pada Bunda.",
      "Bisa digunakan sebagai KB sementara saat jeda ganti metode."
    ],
    minus: [
      "Tergantung pada kerja sama dan pemakaian benar oleh suami."
    ],
    faktaPenting: "Kondom adalah bentuk kerja sama nyata suami dan istri dalam merencanakan keluarga sehat."
  }
];

window.DATA_ALOKON = DATA_ALOKON;
