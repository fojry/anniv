'use client';

import React, { useState, useEffect } from 'react';

interface LoveNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (note: { author: string; category: string; message: string }) => void;
}

export default function LoveNoteModal({ isOpen, onClose, onSubmit }: LoveNoteModalProps) {
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Anniversary');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;
    onSubmit({ author: author.trim(), category, message: message.trim() });
    setAuthor('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      id="loveNoteModalBackdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalNoteTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" id="loveNoteModal">
        <div className="modal-header">
          <h3 id="modalNoteTitle" style={{ fontSize: '20px' }}>
            💌 Write a Love Note
          </h3>
          <button
            type="button"
            className="modal-close-btn"
            id="closeNoteModalBtn"
            aria-label="Close modal"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <form id="loveNoteForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="noteAuthor" className="form-label">
              Your Name or Nickname
            </label>
            <input
              type="text"
              id="noteAuthor"
              className="form-input"
              placeholder="e.g. Secret Admirer, Sam"
              required
              maxLength={40}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="noteCategory" className="form-label">
              Category Tag
            </label>
            <select
              id="noteCategory"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Anniversary">Anniversary</option>
              <option value="Sweet">Sweet</option>
              <option value="Adventures">Adventures</option>
              <option value="Humor">Humor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="noteMessage" className="form-label">
              Your Message
            </label>
            <textarea
              id="noteMessage"
              className="form-textarea"
              placeholder="Write something from the heart..."
              required
              maxLength={280}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-8)' }}>
            <button type="button" className="btn btn-ghost" id="cancelNoteModalBtn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" id="submitNoteBtn">
              Pin to Wall
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
