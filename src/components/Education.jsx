import React, { useEffect, useRef, useState } from 'react';
import './Education.css';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/* ── SVG Icons ── */
const GradCapIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
    <circle cx="22" cy="16" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4h6v4" />
    <path d="M10 10h1" />
    <path d="M14 10h1" />
    <path d="M10 14h1" />
    <path d="M14 14h1" />
  </svg>
);

const Education = () => {
  const { education } = PORTFOLIO_DATA;
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [glowStat, setGlowStat] = useState(null);

  const college = education.find((e) => e.type === 'college');
  const school = education.find((e) => e.type === 'school');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('edu-visible');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.edu-tl-item');
    cards?.forEach((el) => observer.observe(el));
    return () => cards?.forEach((el) => observer.unobserve(el));
  }, []);



  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section id="education" className="education" ref={sectionRef}>
      {/* Section Header */}
      <div className="edu-section-header">
        <h2 className="edu-section-title">
          Education & <span className="edu-title-accent">Credentials</span>
        </h2>
        <p className="edu-section-subtitle">
          Structured engineering grounding combined with rigorous semester-by-semester academic excellence.
        </p>
      </div>

      {/* Alternating Timeline */}
      <div className="edu-timeline">
        {/* Center spine */}
        <div className="edu-timeline__spine" />

        {/* LEFT CARD — College */}
        {college && (
          <div
            className={`edu-tl-item edu-tl-item--left ${activeCard === 'college' ? 'edu-tl-item--active' : ''}`}
            onClick={() => handleCardClick('college')}
          >
            {/* Dot on the spine */}
            <div className="edu-tl-dot edu-tl-dot--cyan">
              <div className="edu-tl-dot__pulse" />
              <div className="edu-tl-dot__core" />
            </div>

            {/* Connector arm */}
            <div className="edu-tl-arm edu-tl-arm--left" />

            {/* Frame Card */}
            <div className="edu-frame edu-frame--cyan">
              {/* Animated corner frames */}
              <span className="edu-frame__corner edu-frame__corner--tl" />
              <span className="edu-frame__corner edu-frame__corner--tr" />
              <span className="edu-frame__corner edu-frame__corner--bl" />
              <span className="edu-frame__corner edu-frame__corner--br" />

              <div className="edu-frame__glow edu-frame__glow--cyan" />

              <div className="edu-frame__inner">
                {/* Header */}
                <div className="edu-frame__header">
                  <span className="edu-frame__badge edu-frame__badge--cyan">Undergraduate Degree</span>
                  <span className="edu-frame__period">{college.period}</span>
                </div>

                <h3 className="edu-frame__title">B.Tech in Computer Science and Business Systems</h3>
                <p className="edu-frame__institution edu-frame__institution--cyan">
                  <span className="edu-frame__institution-icon edu-frame__institution-icon--cyan">
                    <GradCapIcon />
                  </span>
                  <span className="edu-frame__institution-name">Sri Sairam Engineering College, Chennai</span>
                </p>

                {/* Stats */}
                <div
                  className={`edu-frame__stats edu-frame__stats--clickable ${glowStat === 'cgpa' ? 'edu-frame__stats--glow-cyan' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setGlowStat(glowStat === 'cgpa' ? null : 'cgpa'); }}
                >
                  <span className="edu-frame__stat-label">CGPA</span>
                  <span className="edu-frame__stat-val">
                    {college.cgpa}
                  </span>
                </div>

                {/* Semester Grid */}
                <div className="edu-frame__section">
                  <span className="edu-frame__section-label">Semester-wise Performance</span>
                  <div className="edu-sem-grid">
                    {college.semesters.map((s) => (
                      <div key={s.sem} className={`edu-sem ${s.gpa !== null ? 'edu-sem--highlight' : 'edu-sem--empty'}`}>
                        <span className="edu-sem__label">Sem {s.sem}</span>
                        <span className="edu-sem__gpa">{s.gpa !== null ? s.gpa : '—'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="edu-frame__footer">
                  <span className="edu-frame__tag edu-frame__tag--cyan">B.Tech CSBS</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RIGHT CARD — School */}
        {school && (
          <div
            className={`edu-tl-item edu-tl-item--right ${activeCard === 'school' ? 'edu-tl-item--active' : ''}`}
            onClick={() => handleCardClick('school')}
          >
            {/* Dot on the spine */}
            <div className="edu-tl-dot edu-tl-dot--violet">
              <div className="edu-tl-dot__pulse" />
              <div className="edu-tl-dot__core" />
            </div>

            {/* Connector arm */}
            <div className="edu-tl-arm edu-tl-arm--right" />

            {/* Frame Card */}
            <div className="edu-frame edu-frame--violet">
              <span className="edu-frame__corner edu-frame__corner--tl" />
              <span className="edu-frame__corner edu-frame__corner--tr" />
              <span className="edu-frame__corner edu-frame__corner--bl" />
              <span className="edu-frame__corner edu-frame__corner--br" />


              <div className="edu-frame__inner">
                {/* Header */}
                <div className="edu-frame__header">
                  <span className="edu-frame__badge edu-frame__badge--violet">Higher Secondary (HSC)</span>
                  <span className="edu-frame__period">{school.period}</span>
                </div>

                <h3 className="edu-frame__title">Higher Secondary Certificate</h3>
                <p className="edu-frame__institution edu-frame__institution--violet">
                  <span className="edu-frame__institution-icon edu-frame__institution-icon--violet">
                    <SchoolIcon />
                  </span>
                  <span className="edu-frame__institution-name">Saradha Vidhyala Matric Hr. Sec. School</span>
                </p>

                {/* Stats */}
                <div
                  className={`edu-frame__stats edu-frame__stats--clickable ${glowStat === 'pct' ? 'edu-frame__stats--glow-violet' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setGlowStat(glowStat === 'pct' ? null : 'pct'); }}
                >
                  <span className="edu-frame__stat-label">Percentage</span>
                  <span className="edu-frame__stat-val">
                    {school.percentage.toFixed(2)}%
                  </span>
                </div>

                {/* Subject Pills */}
                <div className="edu-frame__section">
                  <span className="edu-frame__section-label">Core Subjects</span>
                  <div className="edu-pill-row">
                    <span className="edu-pill">Mathematics</span>
                    <span className="edu-pill">Physics</span>
                    <span className="edu-pill">Computer Science</span>
                    <span className="edu-pill">Chemistry</span>
                  </div>
                </div>

                <div className="edu-frame__footer">
                  <span className="edu-frame__tag edu-frame__tag--violet">Class XII Distinction</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
