'use client';

import React from 'react';

interface NavigationProps {
  onOpenNoteModal: () => void;
}

export default function Navigation({ onOpenNoteModal }: NavigationProps) {
  return (
    <header className="site-nav" id="mainHeader">
      <div className="container">
        <div className="nav-inner">
          <a href="#hero" className="brand-logo" id="navBrandLogo" aria-label="HAPPY ANNIVERSARY Rala and Radia Home">
            <svg className="brand-heart" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>HAPPY ANNIVERSARY Rala and Radia</span>
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li><a href="#quiz" className="nav-link" id="linkNavQuiz">Kenangan Foto</a></li>
              <li><a href="#wall" className="nav-link" id="linkNavWall">Wall of Love</a></li>
              <li><a href="#milestones" className="nav-link" id="linkNavMilestones">Milestones</a></li>
              <li><a href="#faq" className="nav-link" id="linkNavFaq">FAQ</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-secondary btn-pill"
              id="openNoteModalBtnNav"
              onClick={onOpenNoteModal}
            >
              + Leave Note
            </button>
            <a href="#quiz" className="btn btn-primary btn-pill" id="navQuizCta">
              Lihat Kenangan
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
