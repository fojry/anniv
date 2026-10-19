'use client';

import React, { useState, useEffect } from 'react';

type AppView = 'hero' | 'memories' | 'letter' | 'wall';

interface PhotoMemory {
  id: number;
  title: string;
  tag: string;
  photo: string;
  media?: string[];
  story: string;
  whisper: string;
}

interface LoveLetter {
  id: string;
  sender: 'Radia' | 'Rala';
  recipient: 'Rala' | 'Radia';
  category: string;
  message: string;
  date: string;
  likes: number;
  liked: boolean;
}

const isVideoUrl = (url?: string) => {
  if (!url) return false;
  const lower = url.toLowerCase();
  return lower.endsWith('.webm') || lower.endsWith('.mp4');
};

const photoMemories: PhotoMemory[] = [
  {
    id: 1,
    title: 'Pertama Kali Fotobooth di Rita',
    tag: '📸 Rita Supermall · Fotobooth & TikTok',
    photo: '/assets/aniv1.jpeg',
    media: [
      '/assets/aniv1.jpeg',
      '/assets/aniv2.jpeg',
      '/assets/aniv4.jpeg',
      '/assets/aniv5.webm',
    ],
    story:
      'pertama kali kita fotobooth di ritaa, seneng banget trus jugaa abis itu dan makan banyak.!!!!! dan kita bikin tiktokkkkk',
    whisper: 'Seneng banget bisa seru-seruan, makan banyak, dan bikin tiktok bareng kamu! 💖',
  },
  {
    id: 2,
    title: 'Acara Wednesday Sency, Hutan GBK & City Light Sudirman',
    tag: '🏙️ Sency · Hutan GBK · Sudirman',
    photo: '/assets/jakartah1.jpeg',
    media: [
      '/assets/jakartah1.jpeg',
      '/assets/jakartah2.jpeg',
      '/assets/jakartah3.jpeg',
      '/assets/jakartah4.jpeg',
      '/assets/jakartah5.jpeg',
      '/assets/jakartah6.jpeg',
      '/assets/jakartah7.jpeg',
      '/assets/jakartah8.jpeg',
      '/assets/jakartah9.jpeg',
      '/assets/jakartah10.webm',
      '/assets/JAKARTAH11.webm',
      '/assets/jakartah12.webm',
    ],
    story:
      'pertama kali kita keacara wednesday di sency trus abis itu kita pergi ke hutan gbk yang jauhhh banget jalan sejauh itu trus juga kita pergi ke pamerannya sore seru bangettt, walau agak cape tapi seruuu!!!, trus malemnya kita di sudirman menikmati city light eheee',
    whisper:
      'Capek jalan sejauh itu langsung hilang begitu lihat senyummu dan indahnya city light Sudirman malam itu. ✨🌆',
  },
  {
    id: 3,
    title: 'Menemani Kamu Lomba di Unsoed Sampai Juara',
    tag: '🏆 Unsoed · Lomba & Juara',
    photo: '/assets/lomba.jpeg',
    media: [
      '/assets/lomba.jpeg',
      '/assets/lomba1.jpeg',
      '/assets/lomba2.webm',
    ],
    story:
      'menemani kamu lomba di unsoed, sebenernya aku banyak menonton kamu tapi menurut aku yang ini aku berasa berjuwang karena aku nganterin kamu trus ehehe trus sampe kamu mendapatkan juwaraaaa sangat bangga bangga bangettt dan juga aku pertama kali kenal danu juga disini',
    whisper:
      'Melihat kamu berjuang dan berdiri di podium juara bikin aku luar biasa bangga. Perjuangan nemenin dan nganterin kamu terbayar lunas! 🏆💖',
  },
  {
    id: 4,
    title: 'Hari Ulang Tahun Kamu: Zootopia 2 & Blindbox Kuromi',
    tag: '🎂 Ulang Tahun Kamu · Zootopia & Kuromi',
    photo: '/assets/ultahkamu.jpeg',
    media: [
      '/assets/ultahkamu.jpeg',
      '/assets/ultahkamu1.jpeg',
      '/assets/ultahkamu3.webm',
      '/assets/ultahkamu4.jpeg',
      '/assets/ultahkamu5.jpeg',
    ],
    story:
      'INI ULTAH KAMU!! waktu itu kita nonton zootopia2 yang ditidak disangka sangka film keduanya dan aku juga membelikan kamu blindbox kuromiii',
    whisper:
      'Selamat ulang tahun orang paling spesial! Seneng banget bisa ngerayain bareng kamu, nonton Zootopia 2, dan liat senyum bahagiamu pas dapet blindbox Kuromi. 🎁💖',
  },
  {
    id: 5,
    title: 'Kompilasi Sidang, Sempro, Semhas & Pameran Bersama',
    tag: '🎓 Sidang, Sempro & Pameran Kampus',
    photo: '/assets/pameran.jpeg',
    media: [
      '/assets/pameran.jpeg',
      '/assets/pameran2.jpeg',
      '/assets/pameran3.jpeg',
      '/assets/pameran4.jpeg',
      '/assets/pameran5.jpeg',
      '/assets/pameran6.jpeg',
    ],
    story:
      'kompilasi sidang dan pameran!!!, perjuangan kita berdarah-darah menghadapi kampus depan sawah itu, dari sempro dan semhas date!! lalu pameran bersama xixi',
    whisper:
      'Perjuangan berdarah-darah lewatin sempro, semhas date, sampai pameran bareng di kampus depan sawah itu jadi kenangan paling manis karena kita laluin berdua! 🎓✨🤍',
  },
  {
    id: 6,
    title: 'Kompilasi Foto Random & Video Bersama',
    tag: '📸 Random Moments · Foto & Video Bersama',
    photo: '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.05 (1).jpeg',
    media: [
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.05 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (2).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (3).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (4).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (5).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (6).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (7).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (8).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (9).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (10).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (11).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (12).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (13).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (14).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19 (15).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.24.19.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.36 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.36.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.37 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.38 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.38 (2).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.38.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.39 (2).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.39.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.41.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.42 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.42.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.43 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.43.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.44 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.44.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.45 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.45.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.47 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.28.47.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.34.32.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.34.40 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.34.40 (2).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.34.40.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (2).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (3).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (4).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (5).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (6).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (7).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (8).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (9).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (10).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (11).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (12).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (13).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (14).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (15).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (16).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (17).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (18).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00 (19).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.00.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.01 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.01 (2).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.01 (3).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.01 (4).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.01 (5).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.05.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.06 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.06.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.14 (2).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.14 (3).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.14 (4).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.14 (5).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.17 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.18 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.35.18.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.14 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.14.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.15.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.16 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.16.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.17 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.17.jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.18 (1).jpeg',
      '/assets/random image and vid/WhatsApp Image 2026-10-19 at 16.36.18.jpeg',
      '/assets/random image and vid/WhatsApp Video 2026-10-19 at 16.24.19.webm',
      '/assets/random image and vid/WhatsApp Video 2026-10-19 at 18.49.30.webm',
    ],
    story: '',
    whisper: '',
  },
];

const initialLetters: LoveLetter[] = [];

export default function ReverseEngineeredApp() {
  const [view, setView] = useState<AppView>('hero');
  const [heroAnimKey, setHeroAnimKey] = useState(0);
  const [currentMemoryIndex, setCurrentMemoryIndex] = useState(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const handleSelectMemory = (idx: number) => {
    setCurrentMemoryIndex(idx);
    setActiveMediaIndex(0);
  };

  const handleGoHome = () => {
    setHeroAnimKey((prev) => prev + 1);
    setView('hero');
  };

  // Message Form State: "Siapa kamu: Radia atau Rala"
  const [sender, setSender] = useState<'Radia' | 'Rala'>('Radia');
  const [customMessage, setCustomMessage] = useState('');
  const [category, setCategory] = useState('Ungkapan Hati');
  const [letters, setLetters] = useState<LoveLetter[]>(initialLetters);
  const [wallFilter, setWallFilter] = useState<'all' | 'Radia' | 'Rala'>('all');

  const currentMemory = photoMemories[currentMemoryIndex];
  const isLastSlide = currentMemoryIndex === photoMemories.length - 1;
  const mediaList =
    currentMemory.media && currentMemory.media.length > 0
      ? currentMemory.media
      : [currentMemory.photo];
  const currentMedia = mediaList[activeMediaIndex] || mediaList[0];
  const isVideo = isVideoUrl(currentMedia);

  // Aggressively preload all videos (WebM + MP4 fallback) so playback and switching are instant
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const videoUrls: string[] = [];
    photoMemories.forEach((mem) => {
      const list = mem.media && mem.media.length > 0 ? mem.media : [mem.photo];
      list.forEach((m) => {
        if (isVideoUrl(m)) {
          videoUrls.push(m);
        }
      });
    });

    videoUrls.forEach((vidUrl) => {
      // 1. Link preload tag in document.head
      try {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = vidUrl;
        link.type = vidUrl.toLowerCase().endsWith('.webm') ? 'video/webm' : 'video/mp4';
        document.head.appendChild(link);
      } catch (e) {
        // ignore
      }

      // 2. Offscreen video buffer preload
      try {
        const v = document.createElement('video');
        v.preload = 'auto';
        v.muted = true;
        v.playsInline = true;
        v.src = vidUrl;
        v.load();
      } catch (e) {
        // ignore
      }
    });
  }, []);

  // Auto-scroll active subthumbnail into view smoothly
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const activeBtn = document.querySelector('.media-subthumb-btn.active');
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeMediaIndex]);

  // Load persisted letters from localStorage on mount (clean slate initially)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Clear any old mock dummy letters
        localStorage.removeItem('anniv_love_letters');

        const saved = localStorage.getItem('anniv_love_letters_v2');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setLetters(parsed);
          }
        }
      } catch (err) {
        console.error('Failed to load letters from localStorage:', err);
      }
    }
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMessage.trim()) return;

    const newLetter: LoveLetter = {
      id: String(Date.now()),
      sender: sender,
      recipient: sender === 'Radia' ? 'Rala' : 'Radia',
      category: category,
      message: customMessage.trim(),
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      likes: 1,
      liked: false,
    };

    const updated = [newLetter, ...letters];
    setLetters(updated);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('anniv_love_letters_v2', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save letter to localStorage:', err);
      }
    }
    setCustomMessage('');
    setView('wall');
  };

  const handleLikeToggle = (id: string) => {
    const updated = letters.map((l) => {
      if (l.id === id) {
        const liked = !l.liked;
        return {
          ...l,
          liked,
          likes: (l.likes || 0) + (liked ? 1 : -1),
        };
      }
      return l;
    });
    setLetters(updated);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('anniv_love_letters_v2', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to update likes in localStorage:', err);
      }
    }
  };

  const filteredLetters =
    wallFilter === 'all'
      ? letters
      : letters.filter((l) => l.sender === wallFilter);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* =========================================================================
          VIEW 1: HERO SKY STAGE
          ========================================================================= */}
      {view === 'hero' && (
        <div key={`hero-stage-${heroAnimKey}`} className="sky-stage">
          {/* Top Header */}
          <header className="top-nav hero-nav-animate">
            <div
              className="top-logo-link"
              onClick={handleGoHome}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 800 }}
              title="Kembali ke Beranda"
            >
              <span style={{ fontSize: '20px' }}>💖</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#000', letterSpacing: '0.02em' }}>
                Rala &amp; Radia
              </span>
            </div>
            <div className="top-nav-buttons">
              <button
                type="button"
                className="pill-btn"
                onClick={handleGoHome}
                title="Putar ulang animasi pembuka"
                style={{ fontSize: '13px' }}
              >
                ✨ Replay
              </button>
              <button type="button" className="pill-btn" onClick={() => setView('wall')}>
                Wall Of Love
              </button>
              <button type="button" className="pill-btn" onClick={() => setView('memories')}>
                Kenangan Foto
              </button>
              <button type="button" className="pill-btn pill-btn-pink" onClick={() => setView('letter')}>
                Kirim Pesan 💌
              </button>
            </div>
          </header>

          {/* Floating Stickers & Rainbows with Staggered Entrance */}
          <img
            src="/assets/rainbow_top.svg"
            alt=""
            className="sticker sticker-top-rainbow hero-rainbow-top"
          />
          <img
            src="/assets/rainbow_bottom.svg"
            alt=""
            className="sticker sticker-bottom-rainbow hero-rainbow-bottom"
          />

          {/* Pop-In Floating Stickers */}
          <div
            className="sticker-pop-wrapper sticker-flower-left"
            style={{ '--sticker-pop-delay': '0.75s' } as React.CSSProperties}
          >
            <img src="/assets/flower_smiley.svg" alt="" className="sticker-inner-img sticker-flower-left-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-flower-right"
            style={{ '--sticker-pop-delay': '0.95s' } as React.CSSProperties}
          >
            <img src="/assets/flower_smiley.svg" alt="" className="sticker-inner-img sticker-flower-right-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-smiley-1"
            style={{ '--sticker-pop-delay': '0.8s' } as React.CSSProperties}
          >
            <img src="/assets/smiley.svg" alt="" className="sticker-inner-img sticker-smiley-1-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-smiley-2"
            style={{ '--sticker-pop-delay': '1.05s' } as React.CSSProperties}
          >
            <img src="/assets/smiley.svg" alt="" className="sticker-inner-img sticker-smiley-2-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-smiley-3"
            style={{ '--sticker-pop-delay': '1.2s' } as React.CSSProperties}
          >
            <img src="/assets/smiley.svg" alt="" className="sticker-inner-img sticker-smiley-3-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-smiley-4"
            style={{ '--sticker-pop-delay': '1.35s' } as React.CSSProperties}
          >
            <img src="/assets/smiley.svg" alt="" className="sticker-inner-img sticker-smiley-4-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-star-1"
            style={{ '--sticker-pop-delay': '0.7s' } as React.CSSProperties}
          >
            <img src="/assets/star.svg" alt="" className="sticker-inner-img sticker-star-1-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-star-2"
            style={{ '--sticker-pop-delay': '0.9s' } as React.CSSProperties}
          >
            <img src="/assets/star.svg" alt="" className="sticker-inner-img sticker-star-2-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-star-3"
            style={{ '--sticker-pop-delay': '1.15s' } as React.CSSProperties}
          >
            <img src="/assets/star.svg" alt="" className="sticker-inner-img sticker-star-3-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-star-4"
            style={{ '--sticker-pop-delay': '1.3s' } as React.CSSProperties}
          >
            <img src="/assets/star.svg" alt="" className="sticker-inner-img sticker-star-4-anim" />
          </div>

          <div
            className="sticker-pop-wrapper sticker-star-top"
            style={{ '--sticker-pop-delay': '0.65s' } as React.CSSProperties}
          >
            <img src="/assets/star.svg" alt="" className="sticker-inner-img sticker-star-top-anim" />
          </div>

          {/* Hero Center Content */}
          <main className="hero-center">
            <div className="hero-title-wrapper">
              {/* Floating Festive Sparkles */}
              <div className="hero-sparkle-container" aria-hidden="true">
                <span className="hero-sparkle-item" style={{ top: '-22px', left: '8%', '--sparkle-delay': '0.9s' } as React.CSSProperties}>💖</span>
                <span className="hero-sparkle-item" style={{ top: '-16px', right: '10%', '--sparkle-delay': '1.0s' } as React.CSSProperties}>✨</span>
                <span className="hero-sparkle-item" style={{ bottom: '-10px', left: '4%', '--sparkle-delay': '1.2s' } as React.CSSProperties}>🌸</span>
                <span className="hero-sparkle-item" style={{ bottom: '-8px', right: '6%', '--sparkle-delay': '1.25s' } as React.CSSProperties}>💕</span>
                <span className="hero-sparkle-item" style={{ top: '40%', left: '-30px', '--sparkle-delay': '1.1s' } as React.CSSProperties}>✨</span>
                <span className="hero-sparkle-item" style={{ top: '42%', right: '-30px', '--sparkle-delay': '1.15s' } as React.CSSProperties}>✨</span>
              </div>

              <h1 className="hero-main-title" aria-label="HAPPY ANNIVERSARY Rala and Radia">
                <span className="hero-anniv-tag">HAPPY ANNIVERSARY</span>
                <span className="hero-names-row">
                  <span className="word-name word-rala">Rala</span>
                  <span className="word-and">and</span>
                  <span className="word-name word-radia">Radia</span>
                </span>
              </h1>
            </div>

            <p className="hero-subhead">
              Rayakan momen anniversary penuh cinta, tawa, dan kenangan manis. Buka album foto kenangan berdua atau saling kirim surat cinta manis di Wall of Love!
            </p>

            <div className="hero-cta-container">
              <button type="button" className="cta-match-btn" onClick={() => setView('memories')}>
                <span>Buka Galeri Kenangan Foto</span>
                <span className="btn-heart-badge">
                  <img src="/assets/heart_badge.svg" alt="Heart" width="20" height="20" />
                </span>
              </button>

              <button
                type="button"
                className="cta-match-btn"
                style={{ backgroundColor: 'var(--bg-white)' }}
                onClick={() => setView('letter')}
              >
                <span>💌 Kirim Pesan Cinta</span>
              </button>
            </div>
          </main>

          {/* Footer Bar */}
          <footer className="site-footer-bar">
            <div className="footer-left">
              <span>HAPPY ANNIVERSARY Rala and Radia - WISHING YOU ALL A LIFETIME FULL OF LOVE 🤍</span>
            </div>
            <div className="footer-right">
              Dipersembahkan dengan segenap cinta untuk merayakan Anniversary Rala &amp; Radia (Fajry). 🤍
            </div>
          </footer>
        </div>
      )}

      {/* =========================================================================
          VIEW 2: KENANGAN FOTO (PHOTO MEMORIES GALLERY & STORIES)
          ========================================================================= */}
      {view === 'memories' && (
        <div className="sky-stage">
          <header className="top-nav">
            <div
              className="top-logo-link"
              onClick={handleGoHome}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 800 }}
              title="Kembali ke Beranda"
            >
              <span style={{ fontSize: '20px' }}>💖</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#000', letterSpacing: '0.02em' }}>
                Rala &amp; Radia
              </span>
            </div>
            <div className="top-nav-buttons">
              <button type="button" className="pill-btn" onClick={() => setView('wall')}>
                Wall Of Love
              </button>
              <button type="button" className="pill-btn pill-btn-pink" onClick={() => setView('letter')}>
                Kirim Pesan 💌
              </button>
              <button type="button" className="pill-btn" onClick={handleGoHome}>
                Kembali
              </button>
            </div>
          </header>

          <img src="/assets/flower_smiley.svg" alt="" className="sticker sticker-flower-left" />
          <img src="/assets/smiley.svg" alt="" className="sticker sticker-smiley-1" />
          <img src="/assets/star.svg" alt="" className="sticker sticker-star-2" />
          <img src="/assets/star.svg" alt="" className="sticker sticker-star-3" />

          <main className="memory-stage-wrapper">
            <div className="memory-modal-frame">
              {/* Header Meta Row (Date removed as requested) */}
              <div className="memory-header-row">
                <div className="memory-meta-left">
                  <span className="memory-counter-pill">
                    📸 Kenangan {currentMemoryIndex + 1} dari {photoMemories.length}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#555', fontWeight: 600 }}>
                  {currentMemory.tag}
                </div>
              </div>

              {/* Photo & Story Grid (Centered for last slide) */}
              <div className={`memory-content-grid ${isLastSlide ? 'memory-content-centered' : ''}`}>
                <div className={`memory-photo-frame ${isLastSlide ? 'memory-photo-frame-centered' : ''}`}>
                  {isVideo ? (
                    <video
                      key={currentMedia}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="memory-photo-img"
                      style={{ objectFit: 'contain', backgroundColor: '#000' }}
                    >
                      <source
                        src={currentMedia}
                        type={currentMedia.toLowerCase().endsWith('.webm') ? 'video/webm' : 'video/mp4'}
                      />
                      {currentMedia.toLowerCase().endsWith('.webm') && (
                        <source
                          src={currentMedia.replace(/\.webm$/i, '.mp4')}
                          type="video/mp4"
                        />
                      )}
                      Browser Anda tidak mendukung pemutar video HTML5.
                    </video>
                  ) : (
                    <img
                      key={currentMedia}
                      src={currentMedia}
                      alt={`${currentMemory.title} - ${activeMediaIndex + 1}`}
                      className="memory-photo-img"
                    />
                  )}

                  <div className="memory-photo-tag">{currentMemory.tag}</div>

                  {mediaList.length > 1 && (
                    <>
                      {/* Media Counter Pill */}
                      <div className="media-counter-pill">
                        {isVideo ? '📹 Video' : '📸 Foto'} {activeMediaIndex + 1} / {mediaList.length}
                      </div>

                      {/* Previous Media Arrow */}
                      <button
                        type="button"
                        className="media-nav-arrow media-nav-prev"
                        onClick={() =>
                          setActiveMediaIndex((prev) => (prev > 0 ? prev - 1 : mediaList.length - 1))
                        }
                        aria-label="Media sebelumnya"
                        title="Media sebelumnya"
                      >
                        ‹
                      </button>

                      {/* Next Media Arrow */}
                      <button
                        type="button"
                        className="media-nav-arrow media-nav-next"
                        onClick={() =>
                          setActiveMediaIndex((prev) => (prev < mediaList.length - 1 ? prev + 1 : 0))
                        }
                        aria-label="Media berikutnya"
                        title="Media berikutnya"
                      >
                        ›
                      </button>

                      {/* Sub-thumbnails strip */}
                      <div className="media-subthumbs-strip">
                        {mediaList.map((mUrl, mIdx) => {
                          const isItemVideo = isVideoUrl(mUrl);
                          return (
                            <button
                              key={mUrl}
                              type="button"
                              className={`media-subthumb-btn ${activeMediaIndex === mIdx ? 'active' : ''}`}
                              onClick={() => setActiveMediaIndex(mIdx)}
                              title={isItemVideo ? `Tonton Video ${mIdx + 1}` : `Lihat Foto ${mIdx + 1}`}
                              aria-label={isItemVideo ? `Tonton Video ${mIdx + 1}` : `Lihat Foto ${mIdx + 1}`}
                            >
                              {isItemVideo ? (
                                <div className="subthumb-video-placeholder">
                                  <span>▶️</span>
                                </div>
                              ) : (
                                <img src={mUrl} alt="" className="subthumb-img" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                {!isLastSlide && currentMemory.story && (
                  <div className="memory-story-col">
                    <h2 className="memory-story-title">{currentMemory.title}</h2>
                    <p className="memory-story-text">{currentMemory.story}</p>
                    {currentMemory.whisper && (
                      <div className="memory-whisper-card">
                        "{currentMemory.whisper}"
                      </div>
                    )}

                    <div style={{ marginTop: '8px', display: 'flex', gap: '10px' }}>
                      <button
                        type="button"
                        className="btn-generate-gold"
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => setView('letter')}
                      >
                        <span>💌 Tulis Pesan Cinta untuk {sender === 'Radia' ? 'Rala' : 'Radia'}</span>
                        <span>✨</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Controls & Thumbnails Strip */}
              <div className="memory-controls-bar">
                <button
                  type="button"
                  className="memory-btn-nav"
                  disabled={currentMemoryIndex === 0}
                  onClick={() => handleSelectMemory(Math.max(0, currentMemoryIndex - 1))}
                >
                  ← Sebelumnya
                </button>

                <div className="memory-thumbnails-strip">
                  {photoMemories.map((m, idx) => (
                    <button
                      key={m.id}
                      type="button"
                      className={`memory-thumb-btn ${currentMemoryIndex === idx ? 'active' : ''}`}
                      onClick={() => handleSelectMemory(idx)}
                      title={m.title}
                      aria-label={`Buka foto: ${m.title}`}
                    >
                      <img src={m.photo} alt={m.title} className="memory-thumb-img" />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="memory-btn-nav btn-primary"
                  disabled={currentMemoryIndex === photoMemories.length - 1}
                  onClick={() => handleSelectMemory(Math.min(photoMemories.length - 1, currentMemoryIndex + 1))}
                >
                  Lanjut Cerita →
                </button>
              </div>
            </div>
          </main>

          <footer className="site-footer-bar">
            <div className="footer-left">
              <span>HAPPY ANNIVERSARY Rala and Radia - WISHING YOU ALL A LIFETIME FULL OF LOVE 🤍</span>
            </div>
            <div className="footer-right">
              Kenangan {currentMemoryIndex + 1} dari {photoMemories.length} · Anniversary Rala &amp; Radia
            </div>
          </footer>
        </div>
      )}

      {/* =========================================================================
          VIEW 3: MENU KIRIM PESAN ("Siapa kamu: Radia atau Rala")
          ========================================================================= */}
      {view === 'letter' && (
        <div className="letter-form-stage">
          <header className="top-nav">
            <div
              className="top-logo-link"
              onClick={handleGoHome}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 800 }}
              title="Kembali ke Beranda"
            >
              <span style={{ fontSize: '20px' }}>💖</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#000', letterSpacing: '0.02em' }}>
                Rala &amp; Radia
              </span>
            </div>
            <div className="top-nav-buttons">
              <button type="button" className="pill-btn" onClick={() => setView('wall')}>
                Wall Of Love
              </button>
              <button type="button" className="pill-btn" onClick={() => setView('memories')}>
                Kenangan Foto
              </button>
              <button type="button" className="pill-btn pill-btn-pink" onClick={handleGoHome}>
                Home
              </button>
            </div>
          </header>

          <img src="/assets/flower_smiley.svg" alt="" className="sticker sticker-flower-left" />
          <img src="/assets/flower_smiley.svg" alt="" className="sticker sticker-flower-right" />
          <img src="/assets/smiley.svg" alt="" className="sticker sticker-smiley-1" />
          <img src="/assets/smiley.svg" alt="" className="sticker sticker-smiley-4" />
          <img src="/assets/star.svg" alt="" className="sticker sticker-star-1" />
          <img src="/assets/star.svg" alt="" className="sticker sticker-star-3" />
          <img src="/assets/rainbow_bottom.svg" alt="" className="sticker sticker-bottom-rainbow" />

          <main className="letter-form-center">
            <h1 className="letter-heading">Kirim Pesan Cinta</h1>

            <div className="openai-tagline">
              <span>💌 Khusus Berdua: Rala &amp; Radia</span>
              <span>Pesanmu akan langsung disimpan &amp; ditampilkan di The Wall of Love! 💖</span>
            </div>

            <form onSubmit={handleSendMessage}>
              <div className="letter-form-fields">
                {/* CHOICE: "Siapa kamu: Radia atau Rala" */}
                <div className="sender-selection-group">
                  <label className="sender-label">Siapa kamu?</label>
                  <div className="sender-pill-toggle">
                    <button
                      type="button"
                      className={`sender-toggle-btn ${sender === 'Radia' ? 'active' : ''}`}
                      onClick={() => setSender('Radia')}
                    >
                      <span className="sender-avatar">👦🏻</span>
                      <span className="sender-name">Radia (Fajry)</span>
                    </button>
                    <button
                      type="button"
                      className={`sender-toggle-btn ${sender === 'Rala' ? 'active' : ''}`}
                      onClick={() => setSender('Rala')}
                    >
                      <span className="sender-avatar">👧🏻</span>
                      <span className="sender-name">Rala</span>
                    </button>
                  </div>
                </div>

                {/* Recipient Indicator */}
                <div>
                  <span className="recipient-info-pill">
                    <span>💌 Penerima:</span>
                    <strong style={{ color: '#ff2e83' }}>
                      {sender === 'Radia' ? 'Untuk Rala Tersayang 💖' : 'Untuk Radia Tersayang 💖'}
                    </strong>
                  </span>
                </div>

                {/* Message Textarea */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                    Tulis Pesan Cinta Kamu *
                  </label>
                  <textarea
                    className="letter-textarea"
                    rows={5}
                    placeholder={
                      sender === 'Radia'
                        ? 'Tuliskan isi hatimu, janji manismu, atau ucapan anniversary untuk Rala tercinta...'
                        : 'Tuliskan isi hatimu, janji manismu, atau ucapan anniversary untuk Radia tercinta...'
                    }
                    required
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                  />
                </div>

                {/* Category Chips */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                    Kategori Pesan
                  </label>
                  <div className="category-chips">
                    {['Ungkapan Hati', 'Janji Manis', 'Anniversary', 'Kenangan Indah', 'Doa Bersama'].map(
                      (cat) => (
                        <button
                          key={cat}
                          type="button"
                          className={`category-chip ${category === cat ? 'active' : ''}`}
                          onClick={() => setCategory(cat)}
                        >
                          {cat}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-generate-gold" style={{ width: '100%' }}>
                <span>Kirim &amp; Tampilkan Pesan di Wall of Love</span>
                <span>💌</span>
              </button>
            </form>
          </main>

          <footer className="site-footer-bar">
            <div className="footer-left">
              <span>HAPPY ANNIVERSARY Rala and Radia - WISHING YOU ALL A LIFETIME FULL OF LOVE 🤍</span>
            </div>
            <div className="footer-right">
              Dipersembahkan dengan segenap cinta untuk merayakan Anniversary Rala &amp; Radia. 🤍
            </div>
          </footer>
        </div>
      )}

      {/* =========================================================================
          VIEW 4: WALL OF LOVE (DISPLAYING ALL MESSAGES OF RADIA & RALA)
          ========================================================================= */}
      {view === 'wall' && (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <header className="top-nav" style={{ backgroundColor: 'var(--bg-white)', borderBottom: '1px solid #eee' }}>
            <div
              className="top-logo-link"
              onClick={handleGoHome}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 800 }}
              title="Kembali ke Beranda"
            >
              <span style={{ fontSize: '20px' }}>💖</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#000', letterSpacing: '0.02em' }}>
                Rala &amp; Radia
              </span>
            </div>
            <div className="top-nav-buttons">
              <button type="button" className="pill-btn pill-btn-pink" onClick={() => setView('letter')}>
                + Tulis Pesan Baru 💌
              </button>
              <button type="button" className="pill-btn" onClick={() => setView('memories')}>
                Kenangan Foto
              </button>
              <button type="button" className="pill-btn" onClick={handleGoHome}>
                Home
              </button>
            </div>
          </header>

          <main className="wall-section" style={{ flex: 1 }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h1 className="wall-header-title">The Wall of Love</h1>
                  <p style={{ color: '#666', fontSize: '15px', maxWidth: '640px', lineHeight: 1.6 }}>
                    Papan pesan cinta khusus berdua antara <strong>Radia (Fajry)</strong> dan <strong>Rala</strong>. Setiap kata, janji manis, dan ungkapan rasa tersimpan abadi di sini. 💌✨
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-generate-gold"
                  onClick={() => setView('letter')}
                >
                  <span>+ Kirim Pesan Baru</span>
                  <span>💌</span>
                </button>
              </div>

              {/* Filter Tabs: Semua / Dari Radia / Dari Rala */}
              {letters.length > 0 && (
                <div className="wall-filter-bar">
                  <button
                    type="button"
                    className={`wall-filter-btn ${wallFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setWallFilter('all')}
                  >
                    Semua Pesan ({letters.length})
                  </button>
                  <button
                    type="button"
                    className={`wall-filter-btn ${wallFilter === 'Radia' ? 'active' : ''}`}
                    onClick={() => setWallFilter('Radia')}
                  >
                    👦🏻 Dari Radia ({letters.filter((l) => l.sender === 'Radia').length})
                  </button>
                  <button
                    type="button"
                    className={`wall-filter-btn ${wallFilter === 'Rala' ? 'active' : ''}`}
                    onClick={() => setWallFilter('Rala')}
                  >
                    👧🏻 Dari Rala ({letters.filter((l) => l.sender === 'Rala').length})
                  </button>
                </div>
              )}

              {/* Grid of Displayed Letters or Empty State */}
              {letters.length === 0 ? (
                <div className="wall-empty-state">
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>💌</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', marginBottom: '10px', color: '#000', fontWeight: 800 }}>
                    Dinding Pesan Cinta Masih Kosong
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                    Belum ada pesan cinta yang tersimpan. Setiap pesan yang kamu atau Rala kirimkan melalui menu Kirim Pesan akan langsung ditampilkan di sini! 💖
                  </p>
                  <button
                    type="button"
                    className="btn-generate-gold"
                    onClick={() => setView('letter')}
                  >
                    <span>+ Tulis Pesan Cinta Pertama Sekarang</span>
                    <span>💖</span>
                  </button>
                </div>
              ) : filteredLetters.length === 0 ? (
                <div className="wall-empty-state">
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>💭</div>
                  <p style={{ color: '#666', fontSize: '15px', marginBottom: '16px' }}>
                    Belum ada pesan cinta dari {wallFilter === 'Radia' ? 'Radia' : 'Rala'}.
                  </p>
                  <button
                    type="button"
                    className="pill-btn pill-btn-pink"
                    onClick={() => setView('letter')}
                  >
                    Kirim Pesan sebagai {wallFilter} 💌
                  </button>
                </div>
              ) : (
                <div className="wall-letters-grid">
                  {filteredLetters.map((letItem) => {
                    const isFromRadia = letItem.sender === 'Radia';
                    return (
                      <article
                        key={letItem.id}
                        className="wall-letter-card"
                        style={{
                          backgroundColor: isFromRadia ? '#fff4f9' : '#fff0f8',
                          borderColor: '#000',
                        }}
                      >
                        <div>
                          {/* Sender & Recipient Header */}
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '12px',
                              gap: '8px',
                              flexWrap: 'wrap',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span className="wall-card-sender-badge">
                                {isFromRadia ? '👦🏻 Radia' : '👧🏻 Rala'}
                              </span>
                              <span style={{ fontSize: '11px', color: '#999' }}>➔</span>
                              <span className="wall-card-recipient-badge">
                                {letItem.recipient} 💖
                              </span>
                            </div>
                            <span
                              style={{
                                fontSize: '11px',
                                background: '#fff',
                                padding: '2px 8px',
                                borderRadius: '999px',
                                border: '1px solid #000',
                                fontWeight: 600,
                              }}
                            >
                              {letItem.category}
                            </span>
                          </div>

                          {/* Exact Custom Message Body */}
                          <p
                            style={{
                              fontSize: '15px',
                              lineHeight: '1.6',
                              color: '#1a1a1a',
                              whiteSpace: 'pre-wrap',
                              fontFamily: 'var(--font-sans)',
                            }}
                          >
                            "{letItem.message}"
                          </p>
                        </div>

                        {/* Footer with Date and Like Toggle */}
                        <div
                          style={{
                            marginTop: '20px',
                            paddingTop: '12px',
                            borderTop: '1px dashed #e2e2e2',
                            fontSize: '12px',
                            color: '#666',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span>📅 {letItem.date}</span>
                          <button
                            type="button"
                            onClick={() => handleLikeToggle(letItem.id)}
                            style={{
                              background: '#fff',
                              border: '1px solid #000',
                              borderRadius: '999px',
                              padding: '3px 10px',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontSize: '12px',
                              boxShadow: '1px 1px 0 #000',
                            }}
                            aria-label="Sukai pesan ini"
                          >
                            <span>{letItem.liked ? '❤️' : '🤍'}</span>
                            <span style={{ fontWeight: 700 }}>{letItem.likes}</span>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </main>

          <footer className="site-footer-bar">
            <div className="footer-left">
              <span>HAPPY ANNIVERSARY Rala and Radia - WISHING YOU ALL A LIFETIME FULL OF LOVE 🤍</span>
            </div>
            <div className="footer-right">
              Dipersembahkan dengan segenap cinta untuk merayakan Anniversary Rala &amp; Radia. 🤍
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
