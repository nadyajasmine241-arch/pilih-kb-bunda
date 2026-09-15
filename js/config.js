// Konfigurasi Utama Website Pilih KB Bunda
// Puskesmas Pracimantoro 1, Kabupaten Wonogiri

const APP_CONFIG = {
  appName: "Pilih KB Bunda",
  tagline: "Panduan Sahabat Bunda Memilih Kontrasepsi Aman & Tepat",
  puskesmas: {
    name: "Puskesmas Pracimantoro 1",
    district: "Kecamatan Pracimantoro, Kabupaten Wonogiri",
    address: "Jl. Raya Pracimantoro - Wonogiri, Pracimantoro, Wonogiri",
    bpjsCoveredNotice: "Semua Pelayanan & Alat KB di Puskesmas Pracimantoro 1 GRATIS dengan BPJS / KIS",
    schedule: [
      { day: "Senin - Kamis", hours: "08.00 - 12.00 WIB", service: "Pelayanan Poli KIA / KB" },
      { day: "Jumat", hours: "08.00 - 11.00 WIB", service: "Pelayanan Poli KIA / KB & Konseling" },
      { day: "Sabtu", hours: "08.00 - 11.30 WIB", service: "Pelayanan Poli KIA / KB" }
    ]
  },
  contact: {
    doctorName: "Dokter Puskesmas Pracimantoro 1",
    phoneDisplay: "0897-3281-555",
    whatsappNumber: "628973281555", // Format internasional tanpa simbol +
    getWhatsAppUrl: function(customText) {
      const encoded = encodeURIComponent(customText || "Halo Dokter Puskesmas Pracimantoro 1, saya ingin konsultasi mengenai pilihan KB.");
      return `https://wa.me/${this.whatsappNumber}?text=${encoded}`;
    }
  },
  meta: {
    author: "Tim Medis Puskesmas Pracimantoro 1",
    version: "1.0.0",
    updateYear: 2026
  }
};

// Export untuk akses global
window.APP_CONFIG = APP_CONFIG;
