import React, { useEffect, useRef } from 'react';
import { Trophy, GraduationCap, Award } from 'lucide-react';
import './Projects.css'; /* Reuses shared showcase layout styles */
import './Achievements.css';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/* ── Category configuration ── */
const CATEGORY_CONFIG = {
  awards: {
    icon: Trophy,
    accent: '#3b82f6',
    meshGradient: `
      radial-gradient(ellipse at 30% 70%, rgba(59,130,246,0.15) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.08) 0%, transparent 55%),
      linear-gradient(180deg, rgba(5,8,22,0.7) 0%, rgba(11,16,32,0.95) 100%)
    `,
  },
  academic: {
    icon: GraduationCap,
    accent: '#3b82f6',
    meshGradient: `
      radial-gradient(ellipse at 30% 70%, rgba(59,130,246,0.15) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.08) 0%, transparent 55%),
      linear-gradient(180deg, rgba(5,8,22,0.7) 0%, rgba(11,16,32,0.95) 100%)
    `,
  },
  other: {
    icon: Award,
    accent: '#3b82f6',
    meshGradient: `
      radial-gradient(ellipse at 30% 70%, rgba(59,130,246,0.15) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.08) 0%, transparent 55%),
      linear-gradient(180deg, rgba(5,8,22,0.7) 0%, rgba(11,16,32,0.95) 100%)
    `,
  },
};

const getCategoryConfig = (category) => {
  const key = (category || '').toLowerCase();
  return CATEGORY_CONFIG[key] || CATEGORY_CONFIG.awards;
};

/* ── Result badge styling ── */
const getResultClass = (result) => {
  const r = (result || '').toLowerCase();
  if (r.includes('winner') || r.includes('win')) return 'showcase-badge--winner';
  if (r.includes('finalist')) return 'showcase-badge--finalist';
  if (r.includes('recognition')) return 'showcase-badge--recognition';
  return 'showcase-badge--participant';
};

/* ── Enrich achievement data with expanded descriptions ── */
const enrichAchievementData = (achievements) => {
  return achievements.map((ach) => {
    let expandedDesc = ach.description;

    if (ach.id === '01') {
      expandedDesc = 'Recognized as Top Performer at the annual college technical fest organized by Sri Sairam Engineering College. This recognition was awarded for outstanding technical contributions across multiple events, showcasing strong problem-solving capabilities and hands-on development skills. The achievement reflects consistent dedication to building quality technical solutions and active participation in the college engineering community.';
    } else if (ach.id === '02') {
      expandedDesc = 'Achieved a milestone of solving over 500 problems on the LeetCode competitive programming platform, significantly strengthening algorithmic thinking and data structure proficiency. This consistent practice across topics like arrays, trees, dynamic programming, and graph algorithms has built a strong foundation for tackling complex real-world software engineering challenges. The journey reflects discipline, persistence, and a growth-oriented mindset.';
    } else if (ach.id === '03') {
      expandedDesc = 'Actively contributed to multiple open source projects and community collaborations, gaining practical software engineering experience beyond the classroom. This involvement has provided hands-on exposure to real-world codebases, code review processes, and collaborative development workflows using Git and GitHub. The experience has been instrumental in developing professional software engineering practices and building a portfolio of meaningful contributions.';
    }

    return { ...ach, expandedDesc };
  });
};

const Achievements = () => {
  const enrichedAchievements = enrichAchievementData(PORTFOLIO_DATA.achievements);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ach-card--visible');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.ach-card');
    cards?.forEach((el) => observer.observe(el));
    return () => cards?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className="achievements-section__container">
        {/* Section Header */}
        <div className="achievements-section__header">
          <h2 className="achievements-section__title">
            Achievements that <span className="achievements-section__title-accent">Inspire</span>
          </h2>
          <p className="achievements-section__subtitle">
            Competitions, recognitions and experiences that fuel my journey.
          </p>
        </div>

        {/* Achievement Cards — Stacked, scroll-reveal */}
        <div className="achievements-stack">
          {enrichedAchievements.map((achievement, index) => {
            const config = getCategoryConfig(achievement.category);
            const IconComponent = config.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={achievement.id}
                className={`ach-card ${isEven ? 'ach-card--left' : 'ach-card--right'}`}
              >
                {/* Achievement Number */}
                <div className="ach-card__number" style={{ color: config.accent }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="ach-card__inner">
                  {/* Visual Panel */}
                  <div className={`ach-card__visual ${isEven ? '' : 'ach-card__visual--flip'}`}>
                    <div
                      className="achievement-visual"
                      style={{ '--ach-accent': config.accent }}
                    >
                      {achievement.image ? (
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="achievement-visual__img"
                          loading="lazy"
                        />
                      ) : (
                        <div className="achievement-visual__placeholder">
                          <div className="achievement-visual__mesh" style={{ background: config.meshGradient }} />
                          <div className="achievement-visual__icon-ring" style={{ '--ach-accent': config.accent }}>
                            <IconComponent size={40} style={{ color: config.accent }} />
                          </div>
                          <span className="achievement-visual__org">{achievement.organization}</span>
                          <span className="achievement-visual__year">{achievement.date}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="ach-card__content">
                    {/* Year + Status badges */}
                    <div className="ach-card__badges">
                      <span className="showcase-badge showcase-badge--year">{achievement.date}</span>
                      <span className={`showcase-badge ${getResultClass(achievement.result)}`}>
                        {(achievement.result || 'ACHIEVEMENT').toUpperCase()}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="ach-card__heading">{achievement.title}</h3>

                    {/* Expanded Description */}
                    <p className="ach-card__desc">{achievement.expandedDesc}</p>

                    {/* Category Tags */}
                    {achievement.tags && achievement.tags.length > 0 && (
                      <div className="ach-card__tags">
                        {achievement.tags.map((tag) => (
                          <span key={tag} className="category-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
