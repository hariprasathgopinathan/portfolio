import React, { useEffect, useRef } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import BrowserFrame from './shared/BrowserFrame';
import TechTag from './shared/TechTag';
import './shared/BrowserFrame.css';
import './shared/SharedComponents.css';
import './Projects.css';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/* ── Local SVG Icons ── */
const OriginalGithubIcon = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ── Enriched project data with key highlights ── */
const enrichProjectData = (projects) => {
  return projects.map((project) => {
    let highlights = [];
    const desc = project.description || '';

    if (project.title.toLowerCase().includes('expense') || project.id === '01' || project.id === '02') {
      highlights = [
        'Persistent data via localStorage — survives refresh',
        'Category-based expense filtering and totals',
        'Fully responsive mobile-first design approach',
        'Clean vanilla JS without framework overhead',
      ];
    } else {
      // Fallback: split description into highlight-like phrases
      highlights = desc.split(/[.,]/).filter(s => s.trim().length > 10).map(s => s.trim());
      if (highlights.length < 2) {
        highlights = ['Designed with modern best practices', 'Built for performance and accessibility'];
      }
    }

    return { ...project, highlights };
  });
};

/* ── Accent color per category ── */
const getAccentColor = (category) => {
  const cat = (category || '').toLowerCase();
  if (cat.includes('mobile')) return '#10b981';
  if (cat.includes('web')) return '#8B5CF6';
  if (cat.includes('ai')) return '#a855f7';
  return '#22D3EE';
};

const Projects = () => {
  const enrichedProjects = enrichProjectData(PORTFOLIO_DATA.projects);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('proj-card--visible');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.proj-card');
    cards?.forEach((el) => observer.observe(el));
    return () => cards?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-section__container">
        {/* Section Header */}
        <div className="projects-section__header">
          <h2 className="projects-section__title">
            Projects that create <span className="projects-section__title-accent">Impact</span>
          </h2>
          <p className="projects-section__subtitle">
            Turning ideas into real-world solutions through code, design and curiosity.
          </p>
        </div>

        {/* Project Cards — Stacked, scroll-reveal */}
        <div className="projects-stack">
          {enrichedProjects.map((project, index) => {
            const accent = getAccentColor(project.category);
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`proj-card ${isEven ? 'proj-card--left' : 'proj-card--right'}`}
              >
                {/* Project Number */}
                <div className="proj-card__number" style={{ color: accent }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="proj-card__inner">
                  {/* Image Panel */}
                  <div className={`proj-card__visual ${isEven ? '' : 'proj-card__visual--flip'}`}>
                    <BrowserFrame
                      imageSrc={project.image || ''}
                      title={project.title}
                      liveUrl={project.liveUrl}
                      accentColor={accent}
                    />

                    {/* Action Buttons */}
                    <div className="proj-card__actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="glass-btn glass-btn--primary"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="glass-btn glass-btn--github"
                        >
                          <OriginalGithubIcon size={20} />
                          <span>Codebase</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="proj-card__content">
                    {/* Category + Status */}
                    <div className="proj-card__badges">
                      <span className="showcase-badge showcase-badge--category">{project.category}</span>
                      <span className="showcase-badge showcase-badge--status" style={{ '--badge-accent': accent }}>
                        {project.liveUrl ? 'LIVE' : 'IN DEVELOPMENT'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="proj-card__heading">{project.title}</h3>

                    {/* Description */}
                    <p className="proj-card__desc">{project.description}</p>

                    {/* Key Highlights */}
                    <div className="proj-card__highlights">
                      <span className="proj-card__highlights-label">CORE CAPABILITIES</span>
                      <div className="proj-card__highlights-grid">
                        {project.highlights.map((item, i) => (
                          <div key={i} className="proj-card__highlight-item">
                            <ChevronRight size={14} className="proj-card__highlight-icon" style={{ color: accent }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="proj-card__tags">
                      {project.technologies.map((tech, i) => (
                        <TechTag key={tech} tech={tech} index={i} />
                      ))}
                    </div>
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

export default Projects;
