import React from 'react';
import './Skills.css';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Reusing some SVG icons, and a generic one for others to maintain visual consistency
const SkillIcon = ({ name }) => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('react')) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (nameLower.includes('java') && !nameLower.includes('script')) {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#f89820" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.27,10.28c-0.64-1.25-2.02-1.92-3.15-2.58c-1.89-1.12-3.83-2.27-4.11-4.52C8.97,2.83,9.11,2.5,9.22,2.2 C9.28,2.02,9.15,1.83,8.97,1.82c-0.21,0-0.41,0.06-0.57,0.18C6.91,3.13,5.65,5.32,5.65,7.9c0,1.38,0.47,2.77,1.44,3.75 c-1.07-0.08-2.12-0.56-2.91-1.35C4.01,10.12,3.71,10.3,3.79,10.53c0.64,1.86,2.2,3.31,4.1,3.95c-1.32,0.15-2.61,0.03-3.83-0.34 c-0.23-0.07-0.45,0.17-0.34,0.38c0.88,1.67,2.39,2.87,4.24,3.36c-2.31,0.51-4.8,0.3-6.94-0.61c-0.25-0.11-0.52,0.15-0.37,0.38 c2.25,3.37,6.31,5.18,10.53,4.72c4.95-0.54,9.08-4.5,9.83-9.45c0.52-3.41-0.52-6.84-2.8-9.35c-0.16-0.18-0.46-0.15-0.57,0.05 C17.38,4.7,17.47,7.96,16.27,10.28z M12.8,17.3c-0.78,1.48-2.48,2.27-4.14,2.01c1.38-0.95,2.04-2.58,1.61-4.18 c1.36,0.35,2.51,1.25,3.16,2.44C13.56,17.82,13.23,17.91,12.8,17.3z"/>
      </svg>
    );
  }
  if (nameLower.includes('javascript')) {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#f7df1e" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v18H3V3zm11.75 11.53c0-.82-.6-1.32-1.74-1.76-1.1-.42-1.48-.68-1.48-1.18 0-.48.44-.8 1.15-.8.74 0 1.25.32 1.48.88l1.45-.92c-.44-1-1.43-1.63-2.92-1.63-1.6 0-2.85.9-2.85 2.45 0 1.46 1.05 1.95 2.5 2.5 1.04.38 1.42.72 1.42 1.25 0 .6-.53.96-1.3.96-.86 0-1.54-.42-1.85-1.14l-1.5 1.04c.55 1.34 1.76 1.83 3.32 1.83 1.8 0 3.02-.92 3.02-2.53zm-5.75.92V9.5H7.25v7c0 1.33.8 2.06 2.38 2.06 1.05 0 1.7-.3 2.1-.73l-1.07-1.3c-.22.25-.56.4-.95.4-.55 0-.7-.3-.7-1.46z"/>
      </svg>
    );
  }
  if (nameLower.includes('firebase')) {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffca28" d="M11.69,21.57l-8.6-14.9L2.83,6.2C2.63,5.86,2.94,5.43,3.34,5.55l8.53,2.52L11.69,21.57z"/>
        <path fill="#ffa000" d="M12.06,22.06l-0.37-0.49l7.07-13.43c0.23-0.44,0.86-0.42,1.06,0.04l2.1,4.75L12.06,22.06z"/>
        <path fill="#f57c00" d="M11.87,8.07l2.94,8.81L14.77,5.53c-0.1-0.37-0.61-0.41-0.76-0.06L11.87,8.07z"/>
        <path fill="#ffca28" d="M11.69,21.57l-3.3-17.72c-0.08-0.4,0.44-0.63,0.73-0.32L11.87,8.07L11.69,21.57z"/>
      </svg>
    );
  }
  if (nameLower === 'html') {
    return (
      <svg viewBox="0 0 384 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#e34f26" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
      </svg>
    );
  }
  if (nameLower === 'css') {
    return (
      <svg viewBox="0 0 384 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1572B6" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
      </svg>
    );
  }
  if (nameLower.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38bdf8"/>
      </svg>
    );
  }
  if (nameLower === 'git') {
    return (
      <svg viewBox="0 0 100 100" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f14e32" d="M47.78,94.94l47.16-47.16a6.83,6.83,0,0,0,0-9.66L49.46,2.64A6.83,6.83,0,0,0,39.8,2.64L2.64,39.8a6.83,6.83,0,0,0,0,9.66l45.48,45.48Z"/>
        <path fill="#fff" d="M44.75,70.52a6,6,0,1,1,6-6A6,6,0,0,1,44.75,70.52Zm12.18-12a6,6,0,1,1,6-6A6,6,0,0,1,56.93,58.53Zm-12.18,0V41.47a6.08,6.08,0,0,1-3-1.6,5.82,5.82,0,0,1-1.28-2.65L28,49.69a5.95,5.95,0,0,1,2.5,8.44,5.95,5.95,0,0,1-8.44,2.5,5.95,5.95,0,0,1-2.5-8.44,5.95,5.95,0,0,1,8.44-2.5l12.42-12.42a6.05,6.05,0,1,1,6-6V58.53a6.05,6.05,0,0,1-1.69,8A5.94,5.94,0,0,1,44.75,70.52Z"/>
      </svg>
    );
  }
  if (nameLower.includes('github')) {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    );
  }
  
  // Generic tech icon for responsive web design
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--color-accent-blue)'}}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );
};

const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <h2 className="section-title">My Technology Ecosystem</h2>
      </div>

      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card__icon">
              <SkillIcon name={skill} />
            </div>
            <span className="skill-card__name">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
