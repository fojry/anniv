'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is the philosophy behind HAPPY ANNIVERSARY Rala and Radia?',
    answer:
      'HAPPY ANNIVERSARY Rala and Radia is a celebration of joyful connection, commemorating beautiful memories together with thoughtful stories, subtle pastel surfaces (#ffe3f4), and interactive storytelling.',
  },
  {
    question: 'How does the Matchmaker calculate compatibility?',
    answer:
      'Our algorithm correlates cognitive pacing, vacation styles, work-life energy, and emotional reactions to life\'s little unexpected moments to produce a uniquely resonant profile.',
  },
  {
    question: 'Can I add custom love notes to the Wall?',
    answer:
      'Yes! Simply click "+ Write a Love Note". Your message is instantly pinned to the board with interactive like counters saved locally.',
  },
  {
    question: 'Why is the design strictly following a 4px baseline?',
    answer:
      'Every margin, padding, border radius, and gap is calibrated in multiples of 4px to deliver visual rhythm, crisp layout harmony, and unmatched typographic elegance.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="badge section-tag">Curious Minds</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about the HAPPY ANNIVERSARY Rala and Radia celebration and design.
          </p>
        </div>

        <div className="faq-list" id="faqContainer">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
