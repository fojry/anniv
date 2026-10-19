import React from 'react';

export default function Milestones() {
  const milestones = [
    {
      chapter: 'Chapter 01 · Inception',
      title: 'The First Spark',
      text: 'A spontaneous late-night coffee conversation that felt like time ceased to tick. What was meant to be one hour lasted until dawn.',
    },
    {
      chapter: 'Chapter 02 · Discovery',
      title: 'Unplanned Escapes',
      text: 'Getting lost on country backroads, singing out of tune with the windows down, discovering that home is a person, not a place.',
    },
    {
      chapter: 'Chapter 03 · Roots',
      title: 'Weathering Together',
      text: 'Finding laughter during 404 errors in life. Turning burnt dinners and messy work weeks into shared giggles on the kitchen floor.',
    },
    {
      chapter: 'Chapter 04 · Forever',
      title: 'Today & The Future',
      text: 'Celebrating 365 days of mutual admiration, shared goals, and stepping together into an endless horizon of new adventures.',
    },
  ];

  return (
    <section className="section" id="milestones">
      <div className="container">
        <div className="section-header">
          <span className="badge section-tag">Our Journey</span>
          <h2 className="section-title">Chapters of Connection</h2>
          <p className="section-description">
            From the very first shy glance to endless shared dreams, every milestone has shaped these 2 wonderful years of love for Rala and Radia.
          </p>
        </div>

        <div className="timeline-grid">
          {milestones.map((m, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-step">{m.chapter}</div>
              <h3 className="timeline-title">{m.title}</h3>
              <p className="timeline-text">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
