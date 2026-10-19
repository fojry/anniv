'use client';

import React, { useState } from 'react';

export interface QuizOption {
  key: string;
  title: string;
  description: string;
  image?: string;
  energy: string;
  componentMatch: string;
}

export interface Question {
  id: number;
  title: string;
  options: QuizOption[];
}

export const allTenQuestions: Question[] = [
  {
    id: 1,
    title: "Bagaimana cara Rala & Radia paling suka menghabiskan quality time?",
    options: [
      {
        key: "A",
        title: "Kencan Santai & Cerita Mendalam",
        description: "Ngopi hangat berdua, ngobrol dari hati ke hati, dan menikmati senja tanpa terburu-buru.",
        image: "/assets/cabin_retreat.jpg",
        energy: "Hangat & Intim",
        componentMatch: "Soulmates & Best Friends"
      },
      {
        key: "B",
        title: "Petualangan Spontan & Kulineran",
        description: "Menjelajahi tempat baru, mencoba kuliner seru, dan membuat memori tak terlupakan.",
        image: "/assets/explorer_adventure.jpg",
        energy: "Ceria & Petualang",
        componentMatch: "The Adventure Duo"
      }
    ]
  },
  {
    id: 2,
    title: "Rahasia cinta Rala & Radia tetap awet dan manis selama 2 tahun ini:",
    options: [
      {
        key: "A",
        title: "Saling Mendengarkan & Selalu Ada",
        description: "Menjadi rumah ternyaman untuk pulang, saling mendukung dalam segala suka dan duka.",
        energy: "Penuh Kasih & Kesetiaan",
        componentMatch: "Cozy Harmony"
      },
      {
        key: "B",
        title: "Canda Tawa & Humor Tanpa Henti",
        description: "Selalu bisa bikin satu sama lain tersenyum bahkan di hari yang paling melelahkan.",
        energy: "Ceria & Menghangatkan",
        componentMatch: "Laughter & Sunshine"
      }
    ]
  },
  {
    id: 3,
    title: "Destinasi liburan impian anniversary untuk Rala & Radia:",
    options: [
      {
        key: "A",
        title: "Private Villa di Tepi Pantai",
        description: "Menikmati sunset keemasan berdua dengan deburan ombak dan angin sore yang syahdu.",
        image: "/assets/cabin_retreat.jpg",
        energy: "Romantis & Menenangkan",
        componentMatch: "The Sunset Dreamers"
      },
      {
        key: "B",
        title: "Pondok Syahdu di Atas Awan",
        description: "Udara sejuk pegunungan, selimut hangat, dan langit malam bertabur bintang.",
        image: "/assets/explorer_adventure.jpg",
        energy: "Damai & Abadi",
        componentMatch: "Forever & Always"
      }
    ]
  },
  {
    id: 4,
    title: "Kapan chemistry Rala & Radia terasa paling magis?",
    options: [
      {
        key: "A",
        title: "Saat Bertatapan & Saling Mengerti",
        description: "Cukup satu tatapan mata lembut, sudah tahu persis apa yang ada di hati pasangan.",
        energy: "Satu Frekuensi",
        componentMatch: "Soulmates & Best Friends"
      },
      {
        key: "B",
        title: "Saat Bekerjasama Kompak",
        description: "Menjadi tim terbaik yang saling melengkapi kekurangan dan merayakan kelebihan.",
        energy: "Sinergi Sempurna",
        componentMatch: "Dynamic Synergy"
      }
    ]
  },
  {
    id: 5,
    title: "Lagu atau melodi yang paling pas menggambarkan cinta Rala & Radia:",
    options: [
      {
        key: "A",
        title: "Akustik Manis yang Menentramkan",
        description: "Melodi lembut seperti pelukan hangat di sore hari yang damai dan penuh syukur.",
        energy: "Lembut & Puitis",
        componentMatch: "Sweet Serendipity"
      },
      {
        key: "B",
        title: "Harmoni Ceria Penuh Senyuman",
        description: "Irama optimis yang bikin hati selalu berdegup bahagia setiap kali mengingatnya.",
        energy: "Penuh Gairah & Semangat",
        componentMatch: "Laughter & Sunshine"
      }
    ]
  },
  {
    id: 6,
    title: "Bentuk perhatian kecil yang paling meluluhkan hati:",
    options: [
      {
        key: "A",
        title: "Pesan Kejutan & Doa Tulus",
        description: "Kata-kata manis tak terduga yang mengingatkan betapa berharganya kehadiran pasangan.",
        energy: "Menyentuh Hati",
        componentMatch: "Sweet Serendipity"
      },
      {
        key: "B",
        title: "Hadir Sepenuhnya Saat Dibutuhkan",
        description: "Meluangkan waktu dan memberikan pelukan ternyaman tanpa perlu diminta.",
        energy: "Perlindungan & Kenyamanan",
        componentMatch: "Cozy Harmony"
      }
    ]
  },
  {
    id: 7,
    title: "Jika kisah cinta 2 tahun Rala & Radia adalah sebuah buku cerita:",
    options: [
      {
        key: "A",
        title: "Kisah Romansa Epik Penuh Keajaiban",
        description: "Bab demi bab membuktikan bahwa cinta tulus selalu menemukan jalannya untuk mekar.",
        energy: "Abadi & Menginspirasi",
        componentMatch: "Forever & Always"
      },
      {
        key: "B",
        title: "Jurnal Petualangan Dua Sahabat Sejati",
        description: "Kombinasi terbaik antara cinta romantis dan persahabatan yang tak pernah membosankan.",
        energy: "Seru & Sahabat Hidup",
        componentMatch: "The Adventure Duo"
      }
    ]
  },
  {
    id: 8,
    title: "Cara Rala & Radia melewati perbedaan pendapat:",
    options: [
      {
        key: "A",
        title: "Bicara Lembut dengan Hati Terbuka",
        description: "Saling introspeksi, berpegangan tangan, dan selalu mencari solusi bersama.",
        energy: "Dewasa & Bijaksana",
        componentMatch: "Dynamic Synergy"
      },
      {
        key: "B",
        title: "Diakhiri Senyuman & Pelukan Erat",
        description: "Karena cinta dan kebersamaan mereka jauh lebih besar dari perbedaan apa pun.",
        energy: "Damai & Tulus",
        componentMatch: "Soulmates & Best Friends"
      }
    ]
  },
  {
    id: 9,
    title: "Momen favorit yang paling dirindukan berdua:",
    options: [
      {
        key: "A",
        title: "Momen Sunyi Penuh Makna",
        description: "Duduk berdampingan menikmati secangkir teh tanpa perlu banyak kata, hanya rasa syukur.",
        energy: "Syahdu & Bermakna",
        componentMatch: "The Sunset Dreamers"
      },
      {
        key: "B",
        title: "Bercanda Lepas Sampai Terpingkal",
        description: "Ketawa bareng membicarakan hal-hal lucu yang cuma mereka berdua yang paham.",
        energy: "Bahagia & Santai",
        componentMatch: "Laughter & Sunshine"
      }
    ]
  },
  {
    id: 10,
    title: "Harapan terindah untuk babak perjalanan Rala & Radia selanjutnya:",
    options: [
      {
        key: "A",
        title: "Tumbuh Bersama Meraih Masa Depan",
        description: "Saling menggenggam erat mewujudkan setiap mimpi besar yang pernah dirajut berdua.",
        energy: "Harapan & Masa Depan",
        componentMatch: "Forever & Always"
      },
      {
        key: "B",
        title: "Cinta yang Semakin Kuat Setiap Harinya",
        description: "Menua bersama dengan rasa syukur, ketulusan, dan cinta yang tak pernah pudar.",
        energy: "Abadi & Penuh Berkah",
        componentMatch: "Soulmates & Best Friends"
      }
    ]
  }
];

interface QuizProps {
  onPinResult: (resultText: string) => void;
}

export default function Quiz({ onPinResult }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = allTenQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / allTenQuestions.length) * 100;
  const currentSelection = userAnswers[currentIndex];

  const handleSelect = (optionIndex: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const updated = [...userAnswers];
    updated[currentIndex] = optionIndex;
    setUserAnswers(updated);
    spawnHearts(e.currentTarget, 3);
  };

  const handleNext = () => {
    if (currentIndex < allTenQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRetake = () => {
    setUserAnswers([]);
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  // Determine top matched component
  const selectedOptions = userAnswers.map((ans, qIdx) => allTenQuestions[qIdx]?.options[ans]).filter(Boolean);
  const componentCounts: Record<string, number> = {};
  selectedOptions.forEach((opt) => {
    componentCounts[opt.componentMatch] = (componentCounts[opt.componentMatch] || 0) + 1;
  });

  const topComponent = Object.entries(componentCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Soulmates & Best Friends";

  const countA = userAnswers.filter((ans) => ans === 0).length;
  let archetype = `Sinergi Cinta: ${topComponent}`;
  let score = `${(94 + (countA * 0.6)).toFixed(1)}%`;
  let desc = `Kalian mencerminkan esensi dari ${topComponent}. 2 tahun perjalanan Rala dan Radia membuktikan indahnya cinta yang saling mengisi, saling memahami, dan bertumbuh bersama.`;
  let traitEnergy = countA >= 5 ? "Hangat & Penuh Makna" : "Ceria & Penuh Kejutan";
  let traitConflict = countA >= 5 ? "Kelemahlembutan & Sabar" : "Humor & Saling Mendukung";
  let traitLanguage = "Quality Time & Pelukan Hangat";

  function spawnHearts(el: HTMLElement, count: number) {
    const rect = el.getBoundingClientRect();
    const symbols = ['💖', '💕', '✨', '🌸', '❤️'];
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      const startX = rect.left + rect.width / 2 + (Math.random() - 0.5) * 60;
      const startY = rect.top + window.scrollY;
      heart.style.left = `${startX}px`;
      heart.style.top = `${startY}px`;
      heart.style.fontSize = `${16 + Math.random() * 12}px`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1200);
    }
  }

  return (
    <section className="section" id="quiz">
      <div className="container">
        <div className="section-header">
          <span className="badge section-tag">Anniversary Special · 10 Pertanyaan Cinta</span>
          <h2 className="section-title">All About Anniversary Rala &amp; Radia</h2>
          <p className="section-description">
            Rayakan 2 tahun penuh cinta! Jawab 10 pertanyaan manis ini untuk mengetahui profil sinergi cinta dan harmoni perjalanan Rala &amp; Radia.
          </p>
        </div>

        <div className="quiz-container" id="quizAppContainer">
          {!isCompleted ? (
            <div id="quizActiveView">
              <div className="quiz-top-bar">
                <span className="quiz-progress-text" id="quizStepText">
                  Question {currentIndex + 1} of {allTenQuestions.length}
                </span>
                <div className="quiz-progress-track">
                  <div className="quiz-progress-bar" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>

              <h3 className="quiz-question-title" id="quizQuestionTitle">
                {currentQ.title}
              </h3>

              <div className="quiz-options-grid" id="quizOptionsContainer">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = currentSelection === idx;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      className={`quiz-option-card ${isSelected ? 'selected' : ''}`}
                      id={`quizOption_${currentIndex}_${idx}`}
                      onClick={(e) => handleSelect(idx, e)}
                    >
                      {opt.image && (
                        <div className="option-img-wrapper">
                          <img src={opt.image} alt={opt.title} className="option-img" />
                        </div>
                      )}
                      <div className="option-title">{opt.title}</div>
                      <p className="option-description">{opt.description}</p>
                      <div className="option-select-hint">
                        <span>● Synergy: {opt.componentMatch} ({opt.energy})</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="quiz-controls">
                <button
                  type="button"
                  className="btn btn-ghost"
                  id="quizPrevBtn"
                  disabled={currentIndex === 0}
                  onClick={handlePrev}
                >
                  ← Back
                </button>
                <div className="text-muted" style={{ fontSize: '13px' }} id="quizHintText">
                  Click a card to choose your answer
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="quizNextBtn"
                  disabled={currentSelection === undefined}
                  onClick={handleNext}
                >
                  {currentIndex === allTenQuestions.length - 1 ? 'See Match Result →' : 'Next Question →'}
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-result-view" id="quizResultView">
              <span className="badge badge-warning result-badge">🎉 Perfect Match Found</span>
              <h2 className="result-headline" id="resultArchetypeTitle">
                {archetype}
              </h2>

              <div className="result-compatibility-score" id="resultScorePill">
                <span>💖 Match Compatibility:</span>
                <span id="resultScoreValue">{score}</span>
              </div>

              <p className="result-description" id="resultDescriptionText">
                {desc}
              </p>

              <div className="result-traits-grid" id="resultTraitsGrid">
                <div className="trait-card">
                  <div className="trait-label">Primary Energy</div>
                  <div className="trait-value" id="traitEnergy">{traitEnergy}</div>
                </div>
                <div className="trait-card">
                  <div className="trait-label">Conflict Solver</div>
                  <div className="trait-value" id="traitConflict">{traitConflict}</div>
                </div>
                <div className="trait-card">
                  <div className="trait-label">Matched Component</div>
                  <div className="trait-value" id="traitComponent">{topComponent}</div>
                </div>
              </div>

              <div className="result-actions">
                <button type="button" className="btn btn-secondary btn-lg" id="quizRetakeBtn" onClick={handleRetake}>
                  ↻ Retake Quiz
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  id="quizPinResultBtn"
                  onClick={() => onPinResult(`Match Result: ${score} with ${topComponent}! Curated for HAPPY ANNIVERSARY Rala and Radia.`)}
                >
                  💌 Pin Result to Wall of Love
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
