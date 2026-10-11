import React from 'react';
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa6';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import './Skills.css';

/**
 * Authentic multi-colored Google Firebase flame SVG logo
 * (Yellow, amber-orange, and deep red flame teardrops matching official branding)
 */
const FirebaseIcon = ({ size = 38, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 162 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    style={{ overflow: 'visible', display: 'inline-block', verticalAlign: 'middle' }}
  >
    {/* Bottom segment */}
    <path
      d="M51.2275 191.109C59.4031 194.399 68.2727 196.352 77.5857 196.677C90.1896 197.117 102.175 194.511 112.89 189.561C100.041 184.513 88.4043 177.131 78.4729 167.952C72.0352 178.26 62.5135 186.401 51.2275 191.109Z"
      fill="#FF9100"
    />
    {/* Left-middle segment (yellow) */}
    <path
      d="M78.4711 167.955C55.8006 146.988 42.0477 116.641 43.21 83.3558C43.2478 82.2749 43.3048 81.1947 43.3715 80.1148C39.3113 79.0647 35.0725 78.4239 30.7103 78.2716C24.4663 78.0535 18.4195 78.8279 12.7108 80.4355C6.659 91.0365 3.00696 103.2 2.552 116.228C1.37785 149.852 21.7254 179.231 51.2257 191.112C62.5117 186.404 72.0331 178.272 78.4711 167.955Z"
      fill="#FFC400"
    />
    {/* Right-middle overlap (orange) */}
    <path
      d="M78.472 167.954C83.7428 159.519 86.9386 149.63 87.3106 138.976C88.2893 110.95 69.4486 86.8412 43.3725 80.1137C43.3058 81.1936 43.2487 82.2738 43.211 83.3547C42.0486 116.64 55.8015 146.987 78.472 167.954Z"
      fill="#FF9100"
    />
    {/* Top/Right segment (red-orange) */}
    <path
      d="M84.3945 1.33524C69.5432 13.233 57.8158 28.9212 50.7205 46.9936C46.6583 57.3453 44.1056 68.4647 43.3603 80.1206C69.4365 86.8481 88.2772 110.957 87.2985 138.983C86.9264 149.637 83.7213 159.516 78.4599 167.961C88.391 177.149 100.028 184.522 112.877 189.57C138.667 177.649 156.965 151.996 158.025 121.654C158.711 101.995 151.158 84.4744 140.485 69.6852C129.214 54.0442 84.3945 1.33524 84.3945 1.33524Z"
      fill="#DD2C00"
    />
  </svg>
);

/**
 * Authentic brand metadata with tool titles and refined single-phrase captions
 */
const TECH_REGISTRY = {
  java: {
    displayName: 'Java',
    caption: 'Core Logic & OOP',
    Icon: FaJava,
    brandColor: '#F89820',
    glowColor: 'rgba(248, 152, 32, 0.45)',
  },
  html: {
    displayName: 'HTML',
    caption: 'Semantic Markup',
    Icon: SiHtml5,
    brandColor: '#E34F26',
    glowColor: 'rgba(227, 79, 38, 0.45)',
  },
  css: {
    displayName: 'CSS',
    caption: 'Styling & Animation',
    Icon: FaCss3Alt,
    brandColor: '#264DE4',
    glowColor: 'rgba(38, 77, 228, 0.45)',
  },
  javascript: {
    displayName: 'JavaScript',
    caption: 'Modern Scripting',
    Icon: SiJavascript,
    brandColor: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.45)',
  },
  'react.js': {
    displayName: 'React.js',
    caption: 'UI Architecture',
    Icon: SiReact,
    brandColor: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.5)',
  },
  react: {
    displayName: 'React.js',
    caption: 'UI Architecture',
    Icon: SiReact,
    brandColor: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.5)',
  },
  'tailwind css': {
    displayName: 'Tailwind CSS',
    caption: 'Modern Styling',
    Icon: SiTailwindcss,
    brandColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.45)',
  },
  git: {
    displayName: 'Git',
    caption: 'Version Control',
    Icon: SiGit,
    brandColor: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.45)',
  },
  github: {
    displayName: 'GitHub',
    caption: 'Repos & Collab',
    Icon: SiGithub,
    brandColor: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.4)',
  },
  firebase: {
    displayName: 'Firebase',
    caption: 'Backend & Cloud',
    Icon: FirebaseIcon,
    brandColor: '#FFA000',
    glowColor: 'rgba(255, 160, 0, 0.5)',
  },
};

const getTechDetails = (skillName) => {
  if (!skillName) {
    return {
      displayName: '',
      caption: '',
      Icon: null,
      brandColor: '#8B5CF6',
      glowColor: 'rgba(139, 92, 246, 0.4)',
    };
  }

  const normalized = skillName.toLowerCase().trim();
  if (TECH_REGISTRY[normalized]) return TECH_REGISTRY[normalized];

  if (normalized.includes('react')) return TECH_REGISTRY['react.js'];
  if (normalized.includes('tailwind')) return TECH_REGISTRY['tailwind css'];
  if (normalized.includes('git') && !normalized.includes('hub')) return TECH_REGISTRY['git'];
  if (normalized.includes('github')) return TECH_REGISTRY['github'];
  if (normalized.includes('java') && !normalized.includes('script')) return TECH_REGISTRY['java'];
  if (normalized.includes('script')) return TECH_REGISTRY['javascript'];
  if (normalized.includes('html')) return TECH_REGISTRY['html'];
  if (normalized.includes('css')) return TECH_REGISTRY['css'];
  if (normalized.includes('firebase')) return TECH_REGISTRY['firebase'];

  return {
    displayName: skillName,
    caption: 'Technology',
    Icon: null,
    brandColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
  };
};

const Skills = () => {
  const { skills = [] } = PORTFOLIO_DATA;

  // Split skills into exactly 2 centered horizontal lines:
  // Line 1: Java, HTML, CSS, JavaScript, React.js (5 tools)
  // Line 2: Tailwind CSS, Git, GitHub, Firebase (4 tools)
  const line1Skills = skills.slice(0, 5);
  const line2Skills = skills.slice(5);

  const renderSkillItem = (skillName) => {
    const tech = getTechDetails(skillName);
    const IconComponent = tech.Icon;

    return (
      <div
        key={skillName}
        className="skill-node-borderless"
        tabIndex={0}
        role="listitem"
        aria-label={`${tech.displayName}: ${tech.caption}`}
        style={{
          '--tech-color': tech.brandColor,
          '--tech-glow': tech.glowColor,
        }}
      >
        {/* Soft radial ambient glow */}
        <div className="skill-node-borderless__aura" aria-hidden="true" />

        {/* Brand Icon */}
        <div className="skill-node-borderless__icon-wrapper">
          <div className="skill-node-borderless__icon-halo" aria-hidden="true" />
          {IconComponent ? (
            <IconComponent size={38} className="skill-node-brand-icon" />
          ) : (
            <span>•</span>
          )}
        </div>

        {/* Title & Caption */}
        <div className="skill-node-borderless__meta">
          <span className="skill-node-borderless__name">{tech.displayName}</span>
          <span className="skill-node-borderless__caption">{tech.caption}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="skills-horizontal-section" aria-labelledby="skills-heading">
      {/* Cosmic Subtle Ambient Glows */}
      <div className="skills-horizontal-section__ambient" aria-hidden="true">
        <div className="skills-ambient-glow skills-ambient-glow--violet" />
        <div className="skills-ambient-glow skills-ambient-glow--cyan" />
      </div>

      <div className="skills-horizontal-container">
        {/* Centered Section Header */}
        <div className="skills-horizontal-header">
          <h2 id="skills-heading" className="skills-horizontal-title">
            My Technology <span className="skills-horizontal-title-gradient">Ecosystem</span>
          </h2>
        </div>

        {/* Centered 2-Line Technology Showcase */}
        <div className="skills-twoline-track" role="list">
          {/* Line 1 (5 tools) */}
          <div className="skills-twoline-row skills-twoline-row--1">
            {line1Skills.map(renderSkillItem)}
          </div>

          {/* Line 2 (4 tools) */}
          <div className="skills-twoline-row skills-twoline-row--2">
            {line2Skills.map(renderSkillItem)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
