/**
 * Year of Love - Interactive Application Logic
 * Adheres strictly to the Year of Love design system
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Footer Year ---
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     1. MATCHMAKER QUIZ DATA & LOGIC
     ========================================================================== */
  const quizQuestions = [
    {
      id: 1,
      title: "Bagaimana cara Rala & Radia paling suka menghabiskan quality time?",
      options: [
        {
          key: "A",
          title: "Kencan Santai & Cerita Mendalam",
          description: "Ngopi hangat berdua, ngobrol dari hati ke hati, dan menikmati senja tanpa terburu-buru.",
          image: "assets/cabin_retreat.jpg",
          energy: "Hangat & Intim"
        },
        {
          key: "B",
          title: "Petualangan Spontan & Kulineran",
          description: "Menjelajahi tempat baru, mencoba kuliner seru, dan membuat memori tak terlupakan berdua.",
          image: "assets/explorer_adventure.jpg",
          energy: "Ceria & Petualang"
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
          energy: "Penuh Kasih & Kesetiaan"
        },
        {
          key: "B",
          title: "Canda Tawa & Humor Tanpa Henti",
          description: "Selalu bisa bikin satu sama lain tersenyum bahkan di hari yang paling melelahkan.",
          energy: "Ceria & Menghangatkan"
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
          energy: "Romantis & Menenangkan"
        },
        {
          key: "B",
          title: "Pondok Syahdu di Atas Awan",
          description: "Udara sejuk pegunungan, selimut hangat, dan langit malam bertabur bintang.",
          energy: "Damai & Abadi"
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
          energy: "Satu Frekuensi"
        },
        {
          key: "B",
          title: "Saat Bekerjasama Kompak",
          description: "Menjadi tim terbaik yang saling melengkapi kekurangan dan merayakan kelebihan.",
          energy: "Sinergi Sempurna"
        }
      ]
    },
    {
      id: 5,
      title: "Harapan terindah untuk babak perjalanan Rala & Radia selanjutnya:",
      options: [
        {
          key: "A",
          title: "Tumbuh Bersama Meraih Masa Depan",
          description: "Saling menggenggam erat mewujudkan setiap mimpi besar yang pernah dirajut berdua.",
          energy: "Harapan & Masa Depan"
        },
        {
          key: "B",
          title: "Cinta yang Semakin Kuat Setiap Harinya",
          description: "Menua bersama dengan rasa syukur, ketulusan, dan cinta yang tak pernah pudar.",
          energy: "Abadi & Penuh Berkah"
        }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  const userAnswers = [];

  // Quiz DOM Elements
  const quizActiveView = document.getElementById('quizActiveView');
  const quizResultView = document.getElementById('quizResultView');
  const quizStepText = document.getElementById('quizStepText');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const quizQuestionTitle = document.getElementById('quizQuestionTitle');
  const quizOptionsContainer = document.getElementById('quizOptionsContainer');
  const quizPrevBtn = document.getElementById('quizPrevBtn');
  const quizNextBtn = document.getElementById('quizNextBtn');
  const quizRetakeBtn = document.getElementById('quizRetakeBtn');
  const quizPinResultBtn = document.getElementById('quizPinResultBtn');

  function renderQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    quizStepText.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    quizProgressBar.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
    quizQuestionTitle.textContent = q.title;

    // Reset next button state
    quizPrevBtn.disabled = currentQuestionIndex === 0;
    quizNextBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
    quizNextBtn.textContent = (currentQuestionIndex === quizQuestions.length - 1) ? 'See Match Result →' : 'Next Question →';

    // Clear and build options
    quizOptionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `quiz-option-card ${userAnswers[currentQuestionIndex] === idx ? 'selected' : ''}`;
      card.id = `quizOption_${currentQuestionIndex}_${idx}`;

      let imgHtml = '';
      if (opt.image) {
        imgHtml = `
          <div class="option-img-wrapper">
            <img src="${opt.image}" alt="${opt.title}" class="option-img" loading="lazy">
          </div>
        `;
      }

      card.innerHTML = `
        ${imgHtml}
        <div class="option-title">${opt.title}</div>
        <p class="option-description">${opt.description}</p>
        <div class="option-select-hint">
          <span>● Energy: ${opt.energy}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        userAnswers[currentQuestionIndex] = idx;
        document.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        quizNextBtn.disabled = false;
        createFloatingHearts(card, 3);
      });

      quizOptionsContainer.appendChild(card);
    });
  }

  quizPrevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  });

  quizNextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showQuizResult();
    }
  });

  function showQuizResult() {
    quizActiveView.style.display = 'none';
    quizResultView.style.display = 'block';

    // Calculate dynamic archetypes based on choices
    const countA = userAnswers.filter(ans => ans === 0).length;
    let archetype = "The Soul Adventurer & Cozy Dreamer";
    let score = "99.4%";
    let desc = "You balance bold curiosity with the warmth of a peaceful hearth. One provides the spark of exploration, while the other builds the foundation of gentle comfort. Together, you form an unstoppable, loving duality.";
    let traitEnergy = "Warm & Exploratory";
    let traitConflict = "Humor & Teamwork";
    let traitLanguage = "Quality Time & Deep Talks";

    if (countA >= 4) {
      archetype = "The Sanctuary Keepers";
      score = "99.8%";
      desc = "Your love thrives in peaceful sanctuaries, deliberate acts of care, and shared moments of quiet understanding. A rock of steadfast devotion.";
      traitEnergy = "Serene & Grounded";
      traitConflict = "Patience & Logic";
      traitLanguage = "Acts of Service";
    } else if (countA <= 1) {
      archetype = "The Wildfire Innovators";
      score = "98.9%";
      desc = "Spontaneous, vivid, and always surprising each other. Life is a grand canvas of unplanned journeys, quick wit, and endless celebration.";
      traitEnergy = "High-Spirited & Bold";
      traitConflict = "Playful Banter";
      traitLanguage = "Physical Touch & Surprises";
    }

    document.getElementById('resultArchetypeTitle').textContent = archetype;
    document.getElementById('resultScoreValue').textContent = score;
    document.getElementById('resultDescriptionText').textContent = desc;
    document.getElementById('traitEnergy').textContent = traitEnergy;
    document.getElementById('traitConflict').textContent = traitConflict;
    document.getElementById('traitLanguage').textContent = traitLanguage;

    // Trigger celebratory confetti / heart burst
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createFloatingHearts(quizResultView, 2);
      }, i * 70);
    }
  }

  quizRetakeBtn.addEventListener('click', () => {
    userAnswers.length = 0;
    currentQuestionIndex = 0;
    quizResultView.style.display = 'none';
    quizActiveView.style.display = 'block';
    renderQuestion();
  });

  quizPinResultBtn.addEventListener('click', () => {
    const archetype = document.getElementById('resultArchetypeTitle').textContent;
    const score = document.getElementById('resultScoreValue').textContent;
    addLoveNote({
      author: "Matchmaker Quiz",
      category: "Anniversary",
      message: `We got ${score} Compatibility: "${archetype}"! Pure magic celebrating HAPPY 2ND ANNIVERSARY Rala and Radia.`,
      likes: 12
    });
    showToast("Result pinned to the Wall of Love! 💖");
    // Scroll smoothly to wall
    document.getElementById('wall').scrollIntoView({ behavior: 'smooth' });
  });

  // Initial render of question
  renderQuestion();

  /* ==========================================================================
     2. WALL OF LOVE SYSTEM (Storage, Rendering, Filtering, Liking)
     ========================================================================== */
  const defaultNotes = [
    {
      id: "note-1",
      author: "Lee & Eden",
      category: "Anniversary",
      message: "365 days of building side by side. From early design iterations to unforgettable laughs, every single moment with you is my greatest work.",
      likes: 42,
      liked: false,
      date: "Oct 15"
    },
    {
      id: "note-2",
      author: "Sam & Jordan",
      category: "Adventures",
      message: "Here's to our spontaneous mountain getaway when the GPS died and we had the best evening of our lives stargazing.",
      likes: 29,
      liked: false,
      date: "Oct 12"
    },
    {
      id: "note-3",
      author: "The Wordsmith",
      category: "Sweet",
      message: "If my love for you were code, it would run in an infinite loop without ever encountering a memory leak. Forever yours.",
      likes: 38,
      liked: false,
      date: "Oct 10"
    },
    {
      id: "note-4",
      author: "Maya K.",
      category: "Humor",
      message: "I love you even when you steal the blanket and pretend you're asleep. That's real, unconditional commitment.",
      likes: 56,
      liked: false,
      date: "Oct 08"
    },
    {
      id: "note-5",
      author: "Alex",
      category: "Anniversary",
      message: "Happy Anniversary to my best friend, my rock, and the reason I smile at my phone like a goofball every day.",
      likes: 64,
      liked: false,
      date: "Oct 05"
    },
    {
      id: "note-6",
      author: "Robin & Charlie",
      category: "Sweet",
      message: "Thank you for holding my hand in every room we walk into. You make the whole world feel safe and bright.",
      likes: 31,
      liked: false,
      date: "Sep 28"
    }
  ];

  // Load from localStorage or defaults
  let notes = [];
  try {
    const saved = localStorage.getItem('year_of_love_notes');
    notes = saved ? JSON.parse(saved) : defaultNotes;
  } catch (e) {
    notes = defaultNotes;
  }

  function saveNotes() {
    try {
      localStorage.setItem('year_of_love_notes', JSON.stringify(notes));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  const loveNotesGrid = document.getElementById('loveNotesGrid');
  const wallFilterContainer = document.getElementById('wallFilterContainer');
  let currentFilter = 'all';

  function renderWall() {
    loveNotesGrid.innerHTML = '';
    const filtered = currentFilter === 'all' 
      ? notes 
      : notes.filter(n => n.category.toLowerCase() === currentFilter.toLowerCase());

    filtered.forEach(note => {
      const card = document.createElement('article');
      card.className = 'love-card';
      card.id = `noteCard_${note.id}`;

      card.innerHTML = `
        <div>
          <div class="love-card-header">
            <span class="love-card-author">${escapeHtml(note.author)}</span>
            <span class="love-card-tag">${escapeHtml(note.category)}</span>
          </div>
          <p class="love-card-body">"${escapeHtml(note.message)}"</p>
        </div>
        <div class="love-card-footer">
          <span>${note.date || 'Today'}</span>
          <button type="button" class="love-like-btn ${note.liked ? 'liked' : ''}" aria-label="Like this love note">
            <span>${note.liked ? '❤️' : '🤍'}</span>
            <span class="like-count">${note.likes}</span>
          </button>
        </div>
      `;

      const likeBtn = card.querySelector('.love-like-btn');
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!note.liked) {
          note.likes += 1;
          note.liked = true;
        } else {
          note.likes -= 1;
          note.liked = false;
        }
        saveNotes();
        renderWall();
        createFloatingHearts(likeBtn, 4);
      });

      loveNotesGrid.appendChild(card);
    });

    // Update note counter stat
    const statNotesCounter = document.getElementById('statNotesCounter');
    if (statNotesCounter) {
      statNotesCounter.textContent = notes.length;
    }
  }

  // Filter pills event handling
  if (wallFilterContainer) {
    wallFilterContainer.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        wallFilterContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentFilter = pill.getAttribute('data-filter');
        renderWall();
      });
    });
  }

  function addLoveNote(newNoteData) {
    const newNote = {
      id: 'note-' + Date.now(),
      author: newNoteData.author,
      category: newNoteData.category || 'Sweet',
      message: newNoteData.message,
      likes: newNoteData.likes || 1,
      liked: true,
      date: 'Just now'
    };
    notes.unshift(newNote);
    saveNotes();
    renderWall();
  }

  // Initial render of notes
  renderWall();

  /* ==========================================================================
     3. MODAL DIALOG (WRITE NOTE)
     ========================================================================== */
  const modalBackdrop = document.getElementById('loveNoteModalBackdrop');
  const openModalBtns = [
    document.getElementById('openNoteModalBtnNav'),
    document.getElementById('openNoteModalBtnWall'),
    document.getElementById('heroLovePledgeBtn')
  ];
  const closeModalBtn = document.getElementById('closeNoteModalBtn');
  const cancelModalBtn = document.getElementById('cancelNoteModalBtn');
  const loveNoteForm = document.getElementById('loveNoteForm');

  function openModal() {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.getElementById('noteAuthor').focus();
    }, 100);
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    loveNoteForm.reset();
  }

  openModalBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', openModal);
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  loveNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = document.getElementById('noteAuthor').value.trim();
    const category = document.getElementById('noteCategory').value;
    const message = document.getElementById('noteMessage').value.trim();

    if (!author || !message) return;

    addLoveNote({ author, category, message });
    closeModal();
    showToast("Your love note was pinned to the wall! 💖");
    createFloatingHearts(document.getElementById('openNoteModalBtnWall'), 6);
  });

  /* ==========================================================================
     4. FAQ ACCORDION LOGIC
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ==========================================================================
     5. TOAST NOTIFICATIONS & FLOATING HEARTS
     ========================================================================== */
  const toastEl = document.getElementById('toastNotice');
  let toastTimer;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  function createFloatingHearts(targetEl, count = 3) {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const heartSymbols = ['💖', '💕', '✨', '🌸', '❤️'];

    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      
      const offsetX = (Math.random() - 0.5) * 60;
      const startX = rect.left + rect.width / 2 + offsetX;
      const startY = rect.top + window.scrollY;

      heart.style.left = `${startX}px`;
      heart.style.top = `${startY}px`;
      heart.style.fontSize = `${16 + Math.random() * 12}px`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1200);
    }
  }

  /* ==========================================================================
     6. ANIMATED NUMBER COUNTERS
     ========================================================================== */
  function animateValue(element, start, end, duration, suffix = '') {
    if (!element) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const val = Math.floor(progress * (end - start) + start);
      element.textContent = val.toLocaleString() + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const statDays = document.getElementById('statDaysCounter');
  const statSmiles = document.getElementById('statSmilesCounter');

  let statsAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        animateValue(statDays, 0, 365, 1200, '+');
        animateValue(statSmiles, 800, 1420, 1400);
      }
    });
  }, { threshold: 0.2 });

  const statsStrip = document.getElementById('statsStrip');
  if (statsStrip) {
    observer.observe(statsStrip);
  }

  // Utility to escape HTML strings safely
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});
