// Logika Kuis Rekomendasi KB (WHO Medical Eligibility Criteria)
// Puskesmas Pracimantoro 1, Wonogiri — Format Minimalis Tanpa Icon

const QUIZ_QUESTIONS = [
  {
    id: "paritas",
    step: 1,
    number: "01",
    title: "Jumlah anak dan rencana kehamilan berikutnya",
    subtitle: "Menentukan kesesuaian antara metode jangka panjang (MKJP) dan jangka pendek.",
    options: [
      {
        value: "anak_1_2_jarak",
        label: "Sudah memiliki 1–2 anak, ingin memberi jarak 2–5 tahun",
        desc: "Fokus pada pengasuhan anak sebelum merencanakan kehamilan berikutnya."
      },
      {
        value: "anak_cukup_stop",
        label: "Sudah memiliki 2 anak atau lebih, tidak berencana hamil lagi",
        desc: "Membutuhkan proteksi kontrasepsi jangka panjang dengan efektivitas tertinggi."
      },
      {
        value: "tunda_awal",
        label: "Belum memiliki anak, ingin menunda kehamilan sementara (kurang dari 2 tahun)",
        desc: "Membutuhkan metode dengan pemulihan fertilitas cepat."
      }
    ]
  },
  {
    id: "menyusui",
    step: 2,
    number: "02",
    title: "Status pemberian Air Susu Ibu (ASI)",
    subtitle: "Komponen estrogen pada kontrasepsi tertentu dapat menekan volume produksi ASI.",
    options: [
      {
        value: "busui_eksklusif",
        label: "Sedang menyusui bayi usia di bawah 6 bulan (ASI Eksklusif)",
        desc: "Wajib memilih alokon yang tidak mengandung hormon estrogen."
      },
      {
        value: "busui_lanjut",
        label: "Masih menyusui anak usia di atas 6 bulan (sudah mendapat MPASI)",
        desc: "Prioritas tetap menjaga kesinambungan laktasi."
      },
      {
        value: "tidak_menyusui",
        label: "Tidak sedang dalam masa menyusui",
        desc: "Tidak memiliki restriksi terkait hormon penghambat laktasi."
      }
    ]
  },
  {
    id: "riwayat_kesehatan",
    step: 3,
    number: "03",
    title: "Riwayat kondisi klinis dan tekanan darah",
    subtitle: "Penapisan awal keselamatan sistem kardiovaskular dan metabolisme tubuh.",
    options: [
      {
        value: "sehat",
        label: "Kondisi sehat normal (Tekanan darah di bawah 130/80 mmHg)",
        desc: "Tidak ada riwayat hipertensi atau penyakit kronis vaskular."
      },
      {
        value: "hipertensi",
        label: "Riwayat tekanan darah tinggi / Hipertensi (tensi di atas 140/90 mmHg)",
        desc: "Kontraindikasi untuk kontrasepsi hormonal kombinasi (estrogen)."
      },
      {
        value: "migrain",
        label: "Riwayat sakit kepala sebelah berat (Migrain)",
        desc: "Kontrasepsi estrogen sebaiknya dihindari untuk keamanan pembuluh darah otak."
      },
      {
        value: "takut_gemuk",
        label: "Kekhawatiran terhadap kenaikan berat badan atau gangguan kulit",
        desc: "Prioritas pada kontrasepsi non-hormonal."
      }
    ]
  },
  {
    id: "gaya_hidup",
    step: 4,
    number: "04",
    title: "Preferensi kepatuhan pemakaian kontrasepsi",
    subtitle: "Menyesuaikan dengan rutinitas harian untuk mencegah kegagalan akibat kelalaian.",
    options: [
      {
        value: "suka_praktis",
        label: "Preferensi jangka panjang (Satu kali tindakan untuk beberapa tahun)",
        desc: "Bebas dari jadwal kontrol bulanan atau keharusan minum obat harian."
      },
      {
        value: "sering_lupa",
        label: "Cenderung lupa jadwal obat atau memiliki aktivitas padat",
        desc: "Hindari metode oral harian demi mencegah kebobolan."
      },
      {
        value: "siap_rutin",
        label: "Siap disiplin konsumsi obat harian atau kontrol faskes setiap bulan",
        desc: "Menghendaki siklus haid bulanan yang tetap teratur."
      }
    ]
  }
];

function analyzeQuizAnswers(answers) {
  const paritas = answers.paritas || "anak_1_2_jarak";
  const menyusui = answers.menyusui || "tidak_menyusui";
  const kesehatan = answers.riwayat_kesehatan || "sehat";
  const gayaHidup = answers.gaya_hidup || "suka_praktis";

  let utama = [];
  let alternatif = [];
  let dihindari = [];
  let catatanKhusus = [];

  // HIPERTENSI ATAU MIGRAIN
  if (kesehatan === "hipertensi" || kesehatan === "migrain") {
    utama.push({
      alokonId: "iud",
      alasan: "IUD Copper T 100% bebas hormon, tidak meningkatkan risiko vaskular, dan aman bagi tekanan darah."
    });
    alternatif.push({
      alokonId: "implan",
      alasan: "Mengandung progestin dosis rendah tanpa estrogen, relatif aman untuk hipertensi terkontrol."
    });
    alternatif.push({
      alokonId: "kondom",
      alasan: "Metode barier fisik tanpa efek samping kardiovaskular."
    });
    dihindari.push({
      alokonId: "suntik1",
      alasan: "Komponen estrogen meningkatkan risiko peningkatan tekanan darah dan beban kerja vaskular."
    });
    dihindari.push({
      alokonId: "pil",
      alasan: "Pil kombinasi memiliki potensi komplikasi vaskular pada pasien hipertensi."
    });
    catatanKhusus.push("Riwayat tekanan darah tinggi merupakan indikasi kuat untuk memprioritaskan IUD non-hormonal.");
  }
  // IBU MENYUSUI EKSKLUSIF (< 6 BULAN)
  else if (menyusui === "busui_eksklusif") {
    utama.push({
      alokonId: "iud",
      alasan: "Pilihan utama masa laktasi: Bebas hormon, tidak mempengaruhi volume maupun komposisi ASI."
    });
    utama.push({
      alokonId: "implan",
      alasan: "Hormon progestin murni tidak mengganggu laktasi."
    });
    alternatif.push({
      alokonId: "suntik3",
      alasan: "Aman untuk laktasi, perhatikan potensi perubahan siklus menstruasi."
    });
    dihindari.push({
      alokonId: "suntik1",
      alasan: "Estrogen menekan hormon prolaktin dan menurunkan produksi ASI pada bayi usia di bawah 6 bulan."
    });
    dihindari.push({
      alokonId: "pil",
      alasan: "Pil kombinasi berisiko menurunkan kuantitas ASI."
    });
    catatanKhusus.push("Hindari kontrasepsi berestrogen selama masa pemberian ASI eksklusif.");
  }
  // PRAKTIS JANGKA PANJANG / SERING LUPA / PARITAS TINGGI
  else if (gayaHidup === "suka_praktis" || gayaHidup === "sering_lupa" || paritas === "anak_cukup_stop") {
    utama.push({
      alokonId: "iud",
      alasan: "Metode Kontrasepsi Jangka Panjang (MKJP) efektif 5–8 tahun tanpa beban kepatuhan rutin."
    });
    utama.push({
      alokonId: "implan",
      alasan: "Perlindungan efektif 3 tahun dengan angka kegagalan sangat minimal."
    });
    alternatif.push({
      alokonId: "suntik3",
      alasan: "Pilihan berkala per 12 minggu bila belum siap dengan tindakan IUD atau implan."
    });
    if (gayaHidup === "sering_lupa") {
      dihindari.push({
        alokonId: "pil",
        alasan: "Pil oral memiliki angka kegagalan tinggi jika tidak dikonsumsi pada jam yang sama setiap hari."
      });
      catatanKhusus.push("Hindari metode oral harian bila memiliki kecenderungan lupa jadwal minum.");
    }
  }
  // KEKHAWATIRAN BERAT BADAN
  else if (kesehatan === "takut_gemuk") {
    utama.push({
      alokonId: "iud",
      alasan: "Satu-satunya metode jangka panjang yang 100% bebas hormon sehingga tidak mempengaruhi nafsu makan atau berat badan."
    });
    alternatif.push({
      alokonId: "implan",
      alasan: "Dosis progestin sangat rendah, efek pada massa tubuh lebih minimal dibanding suntik 3 bulan."
    });
    dihindari.push({
      alokonId: "suntik3",
      alasan: "Suntik 3 bulan memiliki korelasi tertinggi terhadap kenaikan massa tubuh akibat retensi cairan dan stimulasi nafsu makan."
    });
    catatanKhusus.push("IUD Copper T adalah solusi optimal bagi pasien yang memprioritaskan stabilitas berat badan.");
  }
  // DEFAULT
  else {
    if (gayaHidup === "siap_rutin") {
      utama.push({
        alokonId: "suntik1",
        alasan: "Mempertahankan keteraturan siklus haid bulanan pada pasien dengan tekanan darah normal."
      });
      utama.push({
        alokonId: "pil",
        alasan: "Pemulihan kesuburan sangat cepat pasca penghentian, cocok bagi yang berdisiplin tinggi."
      });
      alternatif.push({
        alokonId: "iud",
        alasan: "Pilihan bebas repot jangka panjang bila ingin beralih."
      });
    } else {
      utama.push({
        alokonId: "iud",
        alasan: "Perlindungan jangka panjang bebas hormon 5–8 tahun, gratis dengan BPJS."
      });
      utama.push({
        alokonId: "implan",
        alasan: "Perlindungan 3 tahun dengan tingkat efektivitas 99.5%."
      });
      alternatif.push({
        alokonId: "suntik3",
        alasan: "Injeksi berkala per 12 minggu di Puskesmas."
      });
    }
  }

  const uniqueUtama = filterUniqueAlokon(utama);
  const uniqueAlternatif = filterUniqueAlokon(alternatif.filter(a => !uniqueUtama.some(u => u.alokonId === a.alokonId)));
  const uniqueDihindari = filterUniqueAlokon(dihindari.filter(d => !uniqueUtama.some(u => u.alokonId === d.alokonId)));

  return {
    jawabanBunda: answers,
    rekomendasiUtama: uniqueUtama,
    rekomendasiAlternatif: uniqueAlternatif,
    sebaiknyaDihindari: uniqueDihindari,
    catatanKhusus: catatanKhusus
  };
}

function filterUniqueAlokon(list) {
  const seen = new Set();
  return list.filter(item => {
    if (seen.has(item.alokonId)) return false;
    seen.add(item.alokonId);
    return true;
  });
}

function generateWhatsAppConsultationMessage(result, namaBunda = "Pasien", usiaBunda = "") {
  const ans = result.jawabanBunda;
  
  let labelParitas = ans.paritas === "anak_cukup_stop" ? "Sudah cukup anak" : 
                     ans.paritas === "anak_1_2_jarak" ? "Menjarangkan anak (2-5 tahun)" : "Menunda kehamilan awal";
  let labelMenyusui = ans.menyusui === "busui_eksklusif" ? "Menyusui Bayi < 6 Bulan (ASI Eksklusif)" : 
                      ans.menyusui === "busui_lanjut" ? "Menyusui Anak > 6 Bulan" : "Tidak menyusui";
  let labelKesehatan = ans.riwayat_kesehatan === "hipertensi" ? "Riwayat Tekanan Darah Tinggi (Hipertensi)" : 
                       ans.riwayat_kesehatan === "migrain" ? "Riwayat Sakit Kepala Sebelah (Migrain)" : 
                       ans.riwayat_kesehatan === "takut_gemuk" ? "Kekhawatiran kenaikan berat badan" : "Normal / Sehat";
  let labelGaya = ans.gaya_hidup === "suka_praktis" ? "Preferensi jangka panjang" : 
                  ans.gaya_hidup === "sering_lupa" ? "Cenderung lupa jadwal obat" : "Siap kontrol berkala";

  const namaUtama = result.rekomendasiUtama.map(item => {
    const data = window.DATA_ALOKON.find(a => a.id === item.alokonId);
    return data ? data.nama : item.alokonId;
  }).join(" atau ");

  let text = `Yth. Dokter Puskesmas Pracimantoro 1,%0A%0A`;
  text += `Saya ingin berkonsultasi mengenai pelayanan KB. Berikut ringkasan penapisan awal dari website Pilih KB Bunda:%0A%0A`;
  text += `- Nama: ${encodeURIComponent(namaBunda || "Pasien")}%0A`;
  if (usiaBunda) text += `- Usia: ${encodeURIComponent(usiaBunda)} tahun%0A`;
  text += `- Rencana Anak: ${encodeURIComponent(labelParitas)}%0A`;
  text += `- Status Laktasi: ${encodeURIComponent(labelMenyusui)}%0A`;
  text += `- Riwayat Klinis: ${encodeURIComponent(labelKesehatan)}%0A`;
  text += `- Pola Kepatuhan: ${encodeURIComponent(labelGaya)}%0A%0A`;
  text += `Hasil Rekomendasi Sistem:%0A${encodeURIComponent(namaUtama)}%0A%0A`;
  text += `Kapan jadwal pelayanan terbaik bagi saya untuk melakukan pemeriksaan fisik dan pemasangan di Puskesmas Pracimantoro 1? Terima kasih.`;

  return text;
}

window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.analyzeQuizAnswers = analyzeQuizAnswers;
window.generateWhatsAppConsultationMessage = generateWhatsAppConsultationMessage;
