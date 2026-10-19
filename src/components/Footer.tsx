import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-quote">
            HAPPY ANNIVERSARY Rala and Radia — WISHING YOU ALL A LIFETIME FULL OF LOVE
          </div>
          <div className="footer-credits">
            Reverse-engineered design system by{' '}
            <a href="https://year-of-love.exploresyndrome.com/" target="_blank" rel="noopener noreferrer">
              WA Studio Syndromes
            </a>{' '}
            · Crafted with care by Antigravity in Next.js
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            &copy; {currentYear} HAPPY ANNIVERSARY Rala and Radia. Built on a 4px baseline grid without blur filters.
          </div>
        </div>
      </div>
    </footer>
  );
}
