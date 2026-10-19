'use client';

import React, { useEffect, useState, useRef } from 'react';

interface HeroProps {
  onOpenNoteModal: () => void;
}

export default function Hero({ onOpenNoteModal }: HeroProps) {
  const [days, setDays] = useState(0);
  const [smiles, setSmiles] = useState(800);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate days
            let startD = 0;
            const endD = 365;
            const stepD = () => {
              startD += 7;
              if (startD >= endD) {
                setDays(endD);
              } else {
                setDays(startD);
                requestAnimationFrame(stepD);
              }
            };
            requestAnimationFrame(stepD);

            // Animate smiles
            let startS = 800;
            const endS = 1420;
            const stepS = () => {
              startS += 15;
              if (startS >= endS) {
                setSmiles(endS);
              } else {
                setSmiles(startS);
                requestAnimationFrame(stepS);
              }
            };
            requestAnimationFrame(stepS);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-header">
          <div className="hero-pill-badge">
            <span className="badge badge-warning">✨ Anniversary Edition · HAPPY ANNIVERSARY Rala and Radia</span>
          </div>

          <div className="hero-title-grid" aria-label="HAPPY ANNIVERSARY Rala and Radia Big Typography">
            <div className="hero-title-line">
              <h1>HAPPY</h1>
              <h1 className="stroke-text">HAPPY</h1>
            </div>
            <div className="hero-title-line">
              <h1>ANNIVERSARY</h1>
              <h1 className="stroke-text">ANNIVERSARY</h1>
            </div>
            <div className="hero-title-line" style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 5.5vw, 68px)', fontWeight: 900, color: '#ffc7e9', WebkitTextStroke: '2px #000', paintOrder: 'stroke fill', textShadow: '3px 3px 0 #000' }}>
                Rala <span style={{ fontSize: '0.85em', color: '#ffc7e9', WebkitTextStroke: '2px #000', paintOrder: 'stroke fill' }}>AND</span> Radia
              </span>
            </div>
          </div>

          <p className="hero-lead">
            Rayakan momen anniversary penuh cinta, tawa, dan kenangan manis. Buka album foto perjalanan dan cerita cinta terindah Rala &amp; Radia.
          </p>

          <div className="hero-actions">
            <a href="#quiz" className="btn btn-primary btn-lg" id="heroStartQuizBtn">
              Lihat Kenangan Foto ↓
            </a>
            <a href="#wall" className="btn btn-ghost btn-lg" id="heroWallBtn">
              Explore Wall of Love
            </a>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              id="heroLovePledgeBtn"
              onClick={onOpenNoteModal}
            >
              💖 Share A Whisper
            </button>
          </div>
        </div>

        {/* Featured Media Showcase Frame */}
        <div className="hero-media-wrapper">
          <img
            src="/assets/hero_couple.jpg"
            alt="A loving couple celebrating their anniversary at golden hour sunset"
            className="hero-image"
            id="heroMainImage"
          />
          <div className="hero-media-overlay">
            <div>
              <div className="hero-meta-title">Rala &amp; Radia · The Journey of Two Souls</div>
              <div className="hero-meta-subtitle">Curated with devotion on a 4px grid · Light rose surface (#ffe3f4)</div>
            </div>
            <div className="badge badge-info">
              <span>● 100% Harmonic Match</span>
            </div>
          </div>
        </div>

        {/* Live Stats Counter Strip */}
        <div className="stats-strip" id="statsStrip" ref={statsRef} aria-label="Celebration Statistics">
          <div className="stat-item">
            <div className="stat-value" id="statDaysCounter">{days}+</div>
            <div className="stat-label">Days of Devotion</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" id="statSmilesCounter">{smiles.toLocaleString()}</div>
            <div className="stat-label">Shared Laughs</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" id="statMatchScore">99.8%</div>
            <div className="stat-label">Chemistry Score</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" id="statNotesCounter">248</div>
            <div className="stat-label">Love Letters Written</div>
          </div>
        </div>
      </div>
    </section>
  );
}
