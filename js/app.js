// Logika Antarmuka & Router Aplikasi Pilih KB Bunda
// Puskesmas Pracimantoro 1, Kabupaten Wonogiri
// Desain Modern Soft Pink, Rounded Typography, Visual Gambar Menarik

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

let currentView = "home";
let quizState = {
  step: 1,
  answers: {},
  result: null
};

function initApp() {
  renderPuskesmasInfo();
  setupNavigation();
  renderKatalogAlokon();
  renderMitosList();
  setupQuiz();
  setupContactForm();
  
  handleHashNavigation();
  window.addEventListener("hashchange", handleHashNavigation);
}

function renderPuskesmasInfo() {
  const config = window.APP_CONFIG;
  if (!config) return;

  document.querySelectorAll(".puskesmas-name").forEach(el => el.textContent = config.puskesmas.name);
  document.querySelectorAll(".puskesmas-district").forEach(el => el.textContent = config.puskesmas.district);
  document.querySelectorAll(".doctor-phone").forEach(el => el.textContent = config.contact.phoneDisplay);

  const waHeroBtn = document.getElementById("btn-wa-hero");
  if (waHeroBtn) {
    waHeroBtn.href = config.contact.getWhatsAppUrl("Halo Dokter Puskesmas Pracimantoro 1, saya ingin konsultasi mengenai pilihan KB.");
  }
}

function setupNavigation() {
  const navLinks = document.querySelectorAll("[data-nav]");
  navLinks.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = btn.getAttribute("data-nav");
      switchView(targetView);
      window.location.hash = targetView;
    });
  });
}

function handleHashNavigation() {
  const hash = window.location.hash.replace("#", "");
  const validViews = ["home", "quiz", "katalog", "mitos", "panduan", "kontak"];
  if (validViews.includes(hash)) {
    switchView(hash);
  } else {
    switchView("home");
  }
}

function switchView(viewName) {
  currentView = viewName;
  
  document.querySelectorAll(".page-view").forEach(view => {
    view.classList.add("hidden");
  });

  const activeView = document.getElementById(`view-${viewName}`);
  if (activeView) {
    activeView.classList.remove("hidden");
    activeView.classList.add("view-enter");
  }

  // Update Nav Desktop & Mobile Bottom Bar
  document.querySelectorAll("[data-nav]").forEach(btn => {
    const isTarget = btn.getAttribute("data-nav") === viewName;
    if (btn.classList.contains("nav-item-bottom")) {
      const iconSvg = btn.querySelector("svg");
      const textSpan = btn.querySelector(".nav-text");
      if (isTarget) {
        btn.classList.add("text-[#d46376]");
        btn.classList.remove("text-slate-400");
        if (textSpan) textSpan.classList.add("font-extrabold");
        if (iconSvg) iconSvg.classList.add("stroke-[2.5px]");
      } else {
        btn.classList.remove("text-[#d46376]");
        btn.classList.add("text-slate-400");
        if (textSpan) textSpan.classList.remove("font-extrabold");
        if (iconSvg) iconSvg.classList.remove("stroke-[2.5px]");
      }
    } else if (btn.classList.contains("nav-item-desktop")) {
      if (isTarget) {
        btn.classList.add("nav-link-active");
      } else {
        btn.classList.remove("nav-link-active");
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render Katalog Alokon dengan Gambar Menarik & Teks Ringkas
function renderKatalogAlokon(filterCategory = "all") {
  const container = document.getElementById("katalog-container");
  if (!container) return;

  const data = window.DATA_ALOKON || [];
  const filtered = filterCategory === "all" ? data : data.filter(item => {
    if (filterCategory === "non-hormonal") return item.id === "iud" || item.id === "kondom";
    if (filterCategory === "hormonal") return item.id !== "iud" && item.id !== "kondom";
    if (filterCategory === "mkjp") return item.id === "iud" || item.id === "implan";
    return true;
  });

  container.innerHTML = filtered.map(item => {
    const plusItems = item.plus.map(p => `
      <li class="text-xs text-slate-700 flex items-start gap-1.5 leading-snug">
        <span class="text-[#d46376] font-bold select-none">•</span>
        <span>${p}</span>
      </li>
    `).join("");

    const minusItems = item.minus.map(m => `
      <li class="text-xs text-slate-500 flex items-start gap-1.5 leading-snug">
        <span class="text-slate-400 font-bold select-none">•</span>
        <span>${m}</span>
      </li>
    `).join("");

    return `
      <div class="rounded-box flex flex-col justify-between">
        <div>
          <!-- Gambar Menarik -->
          <div class="h-44 w-full overflow-hidden bg-slate-100 relative">
            <img src="${item.image}" alt="${item.nama}" class="img-cover hover:scale-105 transition-transform duration-300">
            <div class="absolute top-3 left-3">
              <span class="badge-pill badge-green shadow-sm">${item.statusBpjs}</span>
            </div>
            <div class="absolute top-3 right-3">
              <span class="badge-pill bg-white/95 text-slate-800 shadow-sm">Durasi: ${item.durasi}</span>
            </div>
          </div>

          <!-- Konten Ringkas -->
          <div class="p-5 space-y-3">
            <div>
              <h3 class="text-lg font-bold text-slate-900 leading-tight">${item.nama}</h3>
              <p class="text-xs text-[#d46376] font-semibold">${item.sebutan}</p>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed">${item.ringkasan}</p>

            ${item.catatanPuskesmas ? `
              <div class="p-2.5 bg-[#fdf2f4] rounded-xl text-xs text-slate-700 leading-snug border border-[#f3cbd2]">
                <strong class="text-slate-900">Catatan Puskesmas:</strong> ${item.catatanPuskesmas}
              </div>
            ` : ""}

            <div class="space-y-2 pt-1">
              <div>
                <span class="text-[11px] font-extrabold uppercase tracking-wide text-slate-500 block mb-1">Kelebihan:</span>
                <ul class="space-y-1">
                  ${plusItems}
                </ul>
              </div>

              <div class="pt-1.5 border-t border-slate-100">
                <span class="text-[11px] font-extrabold uppercase tracking-wide text-slate-400 block mb-1">Hal yang Perlu Diketahui:</span>
                <ul class="space-y-1">
                  ${minusItems}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="p-5 pt-0">
          <a href="${window.APP_CONFIG.contact.getWhatsAppUrl(`Halo Dokter Puskesmas Pracimantoro 1, saya ingin konsultasi mengenai ${item.nama}.`)}" 
             target="_blank" rel="noopener noreferrer"
             class="btn-rounded-outline w-full text-xs text-center py-2.5">
            Tanya Dokter tentang ${item.nama}
          </a>
        </div>
      </div>
    `;
  }).join("");

  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("[data-filter]").forEach(b => {
        b.classList.remove("bg-[#d46376]", "text-white");
        b.classList.add("bg-white", "text-slate-600");
      });
      btn.classList.add("bg-[#d46376]", "text-white");
      btn.classList.remove("bg-white", "text-slate-600");
      renderKatalogAlokon(btn.getAttribute("data-filter"));
    };
  });
}

// Render Mitos vs Fakta Ringkas
function renderMitosList() {
  const container = document.getElementById("mitos-container");
  if (!container) return;

  const list = window.DATA_MITOS || [];
  container.innerHTML = list.map((item, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    return `
      <div class="rounded-box p-5 md:p-6 mb-3">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-[#d46376]">Mitos #${num}</span>
          <span class="badge-pill badge-pink">Penjelasan Medis</span>
        </div>
        
        <h3 class="text-base font-extrabold text-slate-900 mb-2 leading-snug">
          "${item.mitos}"
        </h3>

        <div class="p-3.5 bg-[#fdf2f4] rounded-xl border border-[#f3cbd2] space-y-1">
          <p class="text-xs font-extrabold text-[#d46376] uppercase tracking-wide">${item.fakta}</p>
          <p class="text-xs text-slate-700 leading-relaxed">${item.penjelasan}</p>
          ${item.tipsDokter ? `
            <p class="text-xs text-slate-500 italic pt-1">
              <strong>Saran Bidan/Dokter:</strong> ${item.tipsDokter}
            </p>
          ` : ""}
        </div>
      </div>
    `;
  }).join("");
}

// Logika Kuis Interaktif
function setupQuiz() {
  const startBtn = document.getElementById("btn-start-quiz");
  if (startBtn) {
    startBtn.onclick = () => {
      quizState.step = 1;
      quizState.answers = {};
      renderQuizStep();
    };
  }

  const restartBtn = document.getElementById("btn-restart-quiz");
  if (restartBtn) {
    restartBtn.onclick = () => {
      quizState.step = 1;
      quizState.answers = {};
      document.getElementById("quiz-result-card").classList.add("hidden");
      document.getElementById("quiz-intro-card").classList.remove("hidden");
      document.getElementById("quiz-step-card").classList.add("hidden");
    };
  }
}

function renderQuizStep() {
  const questions = window.QUIZ_QUESTIONS;
  const currentQ = questions.find(q => q.step === quizState.step);

  document.getElementById("quiz-intro-card").classList.add("hidden");
  document.getElementById("quiz-result-card").classList.add("hidden");
  
  const stepCard = document.getElementById("quiz-step-card");
  stepCard.classList.remove("hidden");
  stepCard.classList.add("view-enter");

  const totalSteps = questions.length;
  document.getElementById("quiz-step-indicator").textContent = `Langkah ${currentQ.step} dari ${totalSteps}`;

  document.getElementById("quiz-question-title").textContent = currentQ.title;
  document.getElementById("quiz-question-subtitle").textContent = currentQ.subtitle;

  const optionsContainer = document.getElementById("quiz-options-container");
  optionsContainer.innerHTML = currentQ.options.map(opt => `
    <button type="button" data-val="${opt.value}" 
            class="quiz-option-btn w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-[#d46376] hover:bg-[#fdf2f4]/60 transition-all">
      <div class="font-extrabold text-slate-900 text-sm leading-snug mb-0.5">${opt.label}</div>
      <div class="text-xs text-slate-500 leading-normal">${opt.desc}</div>
    </button>
  `).join("");

  optionsContainer.querySelectorAll(".quiz-option-btn").forEach(btn => {
    btn.onclick = () => {
      const val = btn.getAttribute("data-val");
      quizState.answers[currentQ.id] = val;

      btn.classList.add("border-[#d46376]", "bg-[#fdf2f4]");

      setTimeout(() => {
        if (quizState.step < totalSteps) {
          quizState.step++;
          renderQuizStep();
        } else {
          finishQuiz();
        }
      }, 200);
    };
  });

  const backBtn = document.getElementById("quiz-back-btn");
  if (quizState.step > 1) {
    backBtn.classList.remove("hidden");
    backBtn.onclick = () => {
      quizState.step--;
      renderQuizStep();
    };
  } else {
    backBtn.classList.add("hidden");
  }
}

function finishQuiz() {
  const stepCard = document.getElementById("quiz-step-card");
  stepCard.classList.add("hidden");

  const result = window.analyzeQuizAnswers(quizState.answers);
  quizState.result = result;

  renderQuizResult(result);
}

function renderQuizResult(result) {
  const resultCard = document.getElementById("quiz-result-card");
  resultCard.classList.remove("hidden");
  resultCard.classList.add("view-enter");

  const utamaContainer = document.getElementById("result-utama-container");
  utamaContainer.innerHTML = result.rekomendasiUtama.map(item => {
    const data = window.DATA_ALOKON.find(a => a.id === item.alokonId);
    if (!data) return "";
    return `
      <div class="p-5 rounded-2xl bg-gradient-to-br from-[#d46376] to-[#be4c60] text-white shadow-md mb-3">
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <span class="text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
            Paling Cocok Buat Bunda
          </span>
          <span class="text-xs font-semibold bg-black/15 px-2.5 py-0.5 rounded-full">Durasi: ${data.durasi}</span>
        </div>
        <h3 class="text-xl font-black mb-0.5">${data.nama}</h3>
        <p class="text-xs text-white/90 font-medium mb-2">${data.sebutan}</p>
        <p class="text-xs bg-white/10 p-3 rounded-xl border border-white/20 leading-relaxed mb-2">
          <strong>Alasan:</strong> ${item.alasan}
        </p>
        <span class="text-xs text-white/90">Layanan: ${data.statusBpjs} di Puskesmas Pracimantoro 1</span>
      </div>
    `;
  }).join("");

  const altContainer = document.getElementById("result-alternatif-container");
  if (result.rekomendasiAlternatif.length > 0) {
    document.getElementById("section-alternatif").classList.remove("hidden");
    altContainer.innerHTML = result.rekomendasiAlternatif.map(item => {
      const data = window.DATA_ALOKON.find(a => a.id === item.alokonId);
      if (!data) return "";
      return `
        <div class="p-3 rounded-xl border border-slate-200 bg-white mb-2">
          <div class="flex items-center justify-between">
            <span class="font-extrabold text-slate-900 text-xs">${data.nama}</span>
            <span class="text-[11px] text-slate-500 font-semibold">${data.durasi}</span>
          </div>
          <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">${item.alasan}</p>
        </div>
      `;
    }).join("");
  } else {
    document.getElementById("section-alternatif").classList.add("hidden");
  }

  const hindariContainer = document.getElementById("result-hindari-container");
  if (result.sebaiknyaDihindari.length > 0) {
    document.getElementById("section-hindari").classList.remove("hidden");
    hindariContainer.innerHTML = result.sebaiknyaDihindari.map(item => {
      const data = window.DATA_ALOKON.find(a => a.id === item.alokonId);
      if (!data) return "";
      return `
        <div class="p-3 rounded-xl border border-rose-200 bg-rose-50/70 mb-2">
          <span class="font-extrabold text-rose-900 text-xs">${data.nama}</span>
          <p class="text-xs text-rose-800 mt-0.5 leading-relaxed">${item.alasan}</p>
        </div>
      `;
    }).join("");
  } else {
    document.getElementById("section-hindari").classList.add("hidden");
  }

  const waBtn = document.getElementById("btn-send-quiz-wa");
  if (waBtn) {
    waBtn.onclick = () => {
      const namaInput = document.getElementById("input-nama-bunda").value.trim() || "Bunda";
      const usiaInput = document.getElementById("input-usia-bunda").value.trim() || "";
      const text = window.generateWhatsAppConsultationMessage(result, namaInput, usiaInput);
      const url = `https://wa.me/${window.APP_CONFIG.contact.whatsappNumber}?text=${text}`;
      window.open(url, "_blank");
    };
  }

  const printBtn = document.getElementById("btn-print-result");
  if (printBtn) {
    printBtn.onclick = () => {
      window.print();
    };
  }
}

function setupContactForm() {
  const directWaBtn = document.getElementById("btn-direct-wa");
  if (directWaBtn) {
    directWaBtn.onclick = () => {
      const nama = document.getElementById("kontak-nama").value.trim() || "Bunda";
      const pesan = document.getElementById("kontak-pesan").value.trim();
      let text = `Halo Dokter Puskesmas Pracimantoro 1, perkenalkan saya ${nama}.%0A%0A`;
      if (pesan) {
        text += `Pertanyaan:%0A${encodeURIComponent(pesan)}%0A%0A`;
      } else {
        text += `Saya ingin berkonsultasi mengenai pelayanan KB di Puskesmas Pracimantoro 1.%0A%0A`;
      }
      text += `Terima kasih banyak, Dok.`;
      window.open(`https://wa.me/${window.APP_CONFIG.contact.whatsappNumber}?text=${text}`, "_blank");
    };
  }
}
