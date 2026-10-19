'use client';

import React, { useState } from 'react';

export interface LoveNote {
  id: string;
  author: string;
  category: string;
  message: string;
  likes: number;
  liked: boolean;
  date: string;
}

interface WallOfLoveProps {
  notes: LoveNote[];
  onLikeToggle: (id: string, e: React.MouseEvent<HTMLButtonElement>) => void;
  onOpenNoteModal: () => void;
}

export default function WallOfLove({ notes, onLikeToggle, onOpenNoteModal }: WallOfLoveProps) {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Anniversary', 'Sweet', 'Adventures', 'Humor'];

  const filteredNotes = filter === 'all'
    ? notes
    : notes.filter((n) => n.category.toLowerCase() === filter.toLowerCase());

  return (
    <section className="section" id="wall">
      <div className="container">
        <div className="section-header">
          <span className="badge section-tag">Community Wall</span>
          <h2 className="section-title">The Wall of Love</h2>
          <p className="section-description">
            Whispers, anniversary promises, and sweet memories. Read letters celebrating Rala and Radia's anniversary and leave your own heartfelt wish.
          </p>
        </div>

        <div className="wall-actions-bar">
          <div className="filter-pills" id="wallFilterContainer">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${filter.toLowerCase() === cat.toLowerCase() ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Notes' : cat}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="btn btn-primary btn-pill"
            id="openNoteModalBtnWall"
            onClick={onOpenNoteModal}
          >
            + Write a Love Note
          </button>
        </div>

        {/* Notes Grid */}
        <div className="wall-grid" id="loveNotesGrid">
          {filteredNotes.map((note) => (
            <article key={note.id} className="love-card" id={`noteCard_${note.id}`}>
              <div>
                <div className="love-card-header">
                  <span className="love-card-author">{note.author}</span>
                  <span className="love-card-tag">{note.category}</span>
                </div>
                <p className="love-card-body">"{note.message}"</p>
              </div>
              <div className="love-card-footer">
                <span>{note.date || 'Today'}</span>
                <button
                  type="button"
                  className={`love-like-btn ${note.liked ? 'liked' : ''}`}
                  onClick={(e) => onLikeToggle(note.id, e)}
                  aria-label="Like this love note"
                >
                  <span>{note.liked ? '❤️' : '🤍'}</span>
                  <span className="like-count">{note.likes}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
