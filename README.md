# 🌸 Pilih KB Bunda — Puskesmas Pracimantoro 1, Wonogiri

Website edukasi interaktif dan *Decision Support System* sederhana untuk membantu ibu-ibu (Bunda) di wilayah kerja **Puskesmas Pracimantoro 1, Kabupaten Wonogiri** dalam memilih metode kontrasepsi (KB) yang paling aman, nyaman, dan minim efek samping.

---

## ✨ Fitur Utama

1. **🎯 Kuis Rekomendasi KB Mandiri ("Cek KB Bunda")**:
   - Mengadopsi kriteria medis **WHO Medical Eligibility Criteria (MEC)** & Roda KLOP Kemenkes.
   - Menyaring kondisi penting: jumlah anak/rencana hamil, status menyusui eksklusif (< 6 bulan), riwayat tensi tinggi/hipertensi, serta gaya hidup.
   - Menghasilkan rekomendasi: **Pilihan Paling Cocok**, **Alternatif Aman**, dan **Sebaiknya Dihindari** (beserta alasan medis yang mudah dipahami).
   - Dilengkapi tombol instan **"Kirim Hasil ke WhatsApp Dokter"** yang menyusun template pesan rapi.
2. **📖 Katalog Pilihan KB Puskesmas**:
   - Detail lengkap alokon yang tersedia: **IUD / AKDR (Copper T)**, **Implan / Susuk (1 atau 2 Batang)**, **Suntik KB 3 Bulan**, **Suntik KB 1 Bulan**, **Pil KB Kombinasi**, dan **Kondom**.
   - Penjelasan transparan kelebihan (plus), kekurangan (minus), durasi proteksi, dan status **100% GRATIS dengan BPJS / KIS**.
3. **💡 Mitos vs Fakta Seputar KB**:
   - Membongkar ketakutan lokal: apakah IUD berkarat/pindah organ, apakah implan membuat tangan lemas untuk kerja di sawah/kebun, dan meluruskan mitos darah kotor tertimbun akibat suntik 3 bulan.
4. **🩺 Panduan Kunjungan & Pasang Nyaman**:
   - Berkas yang perlu dibawa (KTP, BPJS/KIS, Buku KIA).
   - Waktu terbaik pasang IUD (hari terakhir haid).
   - Tips relaksasi menghilangkan fobia rasa sakit saat pemasangan.
5. **📞 Kontak & Jadwal Poli KIA / KB**:
   - Terhubung langsung ke WhatsApp dokter: `0897-3281-555`.

---

## 📁 Struktur Berkas Proyek

```text
pilih-kb-bunda/
├── index.html              # Halaman utama dengan arsitektur Multi-View (SPA)
├── vercel.json             # Konfigurasi routing & security headers Vercel
├── package.json            # Metadata proyek
├── README.md               # Dokumentasi proyek & panduan deploy
├── css/
│   └── styles.css          # Styling kustom (font, bayangan, mobile bottom-bar)
└── js/
    ├── config.js           # Konfigurasi Puskesmas & No. WhatsApp Dokter
    ├── data-alokon.js      # Database detail alat & obat kontrasepsi Puskesmas
    ├── data-mitos.js       # Database mitos vs fakta seputar KB
    ├── quiz-engine.js      # Logika rekomendasi KB (WHO MEC) & format pesan WA
    └── app.js              # Router tampilan & event listener interaktif
```

---

## 🚀 Cara Menjalankan & Menguji di Komputer Lokal

Karena proyek ini berbasis web modern mandiri (*zero-build static site*), Anda dapat membukanya secara langsung:

### Opsi 1: Menggunakan Python (Tersedia Bawaan)
Buka PowerShell / Terminal di dalam folder `pilih-kb-bunda`, lalu jalankan:
```bash
python -m http.server 3000
```
Buka browser di alamat: [http://localhost:3000](http://localhost:3000)

### Opsi 2: Buka Berkas Langsung di Browser
Cukup klik ganda (double-click) pada berkas `index.html` untuk langsung melihat dan menguji tampilannya di Chrome, Edge, atau Firefox.

---

## 🌐 Cara Deploy ke Vercel (Gratis Permanen)

### Metode 1: Lewat GitHub (Paling Direkomendasikan & Otomatis)
1. Buat repositori baru di akun GitHub Anda (misal: `pilih-kb-bunda`).
2. Unggah/push seluruh folder `pilih-kb-bunda` ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi website Pilih KB Bunda Puskesmas Pracimantoro 1"
   git branch -M main
   git remote add origin https://github.com/USERNAME/pilih-kb-bunda.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
4. Klik tombol **"Add New..."** → **"Project"**.
5. Pilih repositori `pilih-kb-bunda`, biarkan pengaturan default (Framework Preset: *Other*), lalu klik **"Deploy"**.
6. Dalam hitungan detik, website Anda sudah aktif secara online dengan domain HTTPS gratis (contoh: `pilih-kb-bunda.vercel.app`).

### Metode 2: Menggunakan Vercel CLI (Dari Terminal)
Jika Anda memiliki Node.js & npm:
```bash
npm install -g vercel
cd pilih-kb-bunda
vercel
```
Ikuti petunjuk di layar, tekan enter untuk memilih pengaturan default.

---

## ⚙️ Kustomisasi Data & Kontak

Jika nantinya ada pergantian nomor telepon atau jadwal layanan, Anda cukup mengedit berkas `js/config.js`:
```javascript
contact: {
  phoneDisplay: "0897-3281-555",
  whatsappNumber: "628973281555" // Ganti nomor di sini tanpa simbol '+'
}
```

---

*Dikembangkan oleh Tim Medis Puskesmas Pracimantoro 1, Kabupaten Wonogiri.*
