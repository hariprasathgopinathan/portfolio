import React, { useState, useEffect } from 'react';
import './Hero.css';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/* ── Premium GitHub Icon (circular design) ── */
const HeroGitHubIcon = () => (
  <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heroGhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="17" fill="none" stroke="url(#heroGhGrad)" strokeWidth="0.8" opacity="0.2">
      <animate attributeName="r" values="15;17;15" dur="3.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.2;0.08;0.2" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <path d="M20 6C12.27 6 6 12.27 6 20c0 6.19 4.01 11.44 9.58 13.29.7.13.96-.3.96-.67 0-.33-.01-1.42-.02-2.58-3.9.85-4.72-1.65-4.72-1.65-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.14 3.28 1.52 4.08 1.16.13-.91.49-1.52.89-1.87-3.11-.35-6.38-1.56-6.38-6.93 0-1.53.55-2.78 1.44-3.76-.14-.36-.63-1.78.14-3.71 0 0 1.17-.38 3.84 1.43a13.3 13.3 0 0 1 3.5-.47c1.19.01 2.38.16 3.5.47 2.66-1.81 3.83-1.43 3.83-1.43.77 1.93.29 3.35.14 3.71.9.98 1.44 2.23 1.44 3.76 0 5.38-3.28 6.57-6.4 6.92.5.43.95 1.29.95 2.6 0 1.88-.02 3.39-.02 3.85 0 .38.25.81.97.67C29.99 31.44 34 26.19 34 20c0-7.73-6.27-14-14-14z"
          fill="url(#heroGhGrad)" opacity="0.9" />
    <circle cx="32" cy="9" r="1.2" fill="#e2e8f0" opacity="0.45">
      <animate attributeName="opacity" values="0.45;0.1;0.45" dur="2.8s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/* ── Premium LinkedIn Icon (circular design, no box) ── */
const HeroLinkedInIcon = () => (
  <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heroLiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="heroLiShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="17" fill="none" stroke="url(#heroLiGrad)" strokeWidth="0.8" opacity="0.2">
      <animate attributeName="r" values="15;17;15" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.2;0.08;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
    {/* Circular background */}
    <circle cx="20" cy="20" r="13" fill="url(#heroLiGrad)" opacity="0.12" />
    <circle cx="20" cy="20" r="13" fill="none" stroke="url(#heroLiGrad)" strokeWidth="1.2" />
    {/* "in" letterform */}
    <circle cx="14.5" cy="15" r="1.6" fill="url(#heroLiShine)" />
    <rect x="13" y="18" width="3" height="9" rx="0.8" fill="url(#heroLiShine)" />
    <path d="M19 18v9h3v-5.5c0-1.8 1.2-2.5 2.2-2.5 1.2 0 1.8.8 1.8 2.2V27h3v-6c0-3.2-1.8-4.2-3.8-4.2-1.8 0-2.8.9-3.2 1.6V18h-3z" 
          fill="url(#heroLiShine)" />
    <circle cx="33" cy="8" r="1.2" fill="#60a5fa" opacity="0.45">
      <animate attributeName="opacity" values="0.45;0.1;0.45" dur="2.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const HeroEmailIcon = () => (
  <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heroMailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="17" fill="none" stroke="url(#heroMailGrad)" strokeWidth="0.8" opacity="0.2">
      <animate attributeName="r" values="15;17;15" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.2;0.08;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="20" cy="20" r="13" fill="url(#heroMailGrad)" opacity="0.12" />
    <circle cx="20" cy="20" r="13" fill="none" stroke="url(#heroMailGrad)" strokeWidth="1.2" />
    <path d="M12 15 l8 6 l8 -6" fill="none" stroke="url(#heroMailGrad)" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="11" y="14" width="18" height="12" rx="2" fill="none" stroke="url(#heroMailGrad)" strokeWidth="1.5" />
    <circle cx="33" cy="8" r="1.2" fill="#a78bfa" opacity="0.45">
      <animate attributeName="opacity" values="0.45;0.1;0.45" dur="2.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const ROLES = [
  "Software Developer",
  "Full-Stack Engineer",
  "Problem Solver"
];

const Hero = () => {
  const { contact, projects, education, achievements } = PORTFOLIO_DATA;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = ROLES[roleIndex];

    if (isDeleting) {
      setDisplayText(prev => prev.substring(0, prev.length - 1));
      timer = setTimeout(() => {}, 50); // Deleting speed
    } else {
      setDisplayText(currentRole.substring(0, displayText.length + 1));
      timer = setTimeout(() => {}, 100); // Typing speed
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before delete
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);


  return (
    <section id="home" className="hero">
      <div className="hero__container">
        
        {/* Content Left */}
        <div className="hero__content">
          <div className="hero__greeting">
            HELLO, I'M <span className="hero__wave">👋</span>
          </div>
          
          <h1 className="hero__name">
            HARIPRASATH G
          </h1>
          
          <div className="hero__roles">
            <span className="hero__role-prefix">I'm a</span>
            <span className="hero__role-arrow">→</span>
            <span className="hero__role typewriter">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </div>
          
          <p className="hero__description">
            Building practical <span className="text-purple">web applications</span> while strengthening <span className="text-purple">programming</span>, problem-solving and <span className="text-purple">software development</span> fundamentals.
          </p>
          
          <div className="hero__cta">
            <a href="#projects" className="hero__btn-explore" style={{ textDecoration: 'none' }}>
              Explore My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Social Links — below Explore */}
          <div className="hero__socials">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hero__social-link hero__social-link--github" aria-label="GitHub">
              <HeroGitHubIcon />
              <span>GitHub</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link hero__social-link--linkedin" aria-label="LinkedIn">
              <HeroLinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${contact.email}`} className="hero__social-link hero__social-link--email" aria-label="Email">
              <HeroEmailIcon />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Artwork Right */}
        <div className="hero__artwork">
          <div className="hero__logo-container">
            <div className="hero__logo-ring hero__logo-ring--outer"></div>
            <div className="hero__logo-ring hero__logo-ring--inner"></div>
            <div className="hero__logo-orb">
              <img src="/logo.png" alt="HP Logo" className="hero__logo-img" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
