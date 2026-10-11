import React from 'react';
import './About.css';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import profilePhoto from '../assets/profile2.jpg';

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const About = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="about showcase-section">
      <div className="showcase-section__container">
        
        {/* Section Header */}
        <div className="showcase-section__header">
          <h2 className="showcase-section__title">
            About <span className="showcase-section__title-accent">Me</span>
          </h2>
          <p className="showcase-section__subtitle">
            Driven by Passion, Powered by Code.
          </p>
        </div>

        <div className="about__container">
        
        {/* Left: Avatar with Planetary Rings */}
        <div className="about__visual">
          <div className="about__planetary-system">
            
            {/* The Rings */}
            <div className="planet-ring planet-ring-1"></div>
            <div className="planet-ring planet-ring-2"></div>
            <div className="planet-ring planet-ring-3"></div>
            
            {/* Small orbiting planets */}
            <div className="orbit-orb orb-1"></div>
            <div className="orbit-orb orb-2"></div>
            <div className="orbit-orb orb-3"></div>

            {/* Avatar Center */}
            <div className="about__avatar-container">
              <img src={profilePhoto} alt="Profile" className="about__avatar-img" />
            </div>

          </div>
        </div>

        {/* Right: Content */}
        <div className="about__content">
          
          <div className="about__text">
            <p>
              I am Hariprasath G, a final-year <span className="text-orange">Computer Science</span> and Business Systems student at Sri Sairam Engineering College. I am interested in <span className="text-blue">software development</span>, programming, problem solving and building practical <span className="text-gold">web applications</span>.
            </p>
            <p>
              Strengthening <span className="text-orange">Java</span> and software development fundamentals while building <span className="text-blue">responsive web experiences</span> with modern <span className="text-gold">frontend technologies</span>.
            </p>
          </div>

          <div className="about__meta">
            <div className="meta-item">
              <span className="meta-icon"><LocationIcon /></span>
              <span className="meta-text">{about.location}</span>
            </div>
            
            <div className="meta-item">
              <span className="meta-icon"><CodeIcon /></span>
              <span className="meta-text">Code. Learn. Repeat.</span>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default About;
