import React from 'react';
import { motion } from 'framer-motion';

/**
 * TechTag – Branded technology tag with icon + tinted background.
 *
 * @param {string} tech  The technology name (e.g. "React.js", "Tailwind CSS")
 * @param {number} index Stagger index for animation delay
 */

const TECH_BRAND = {
  'react':       { icon: '⚛️',  bg: 'rgba(0,216,255,0.10)',  border: 'rgba(0,216,255,0.30)',  color: '#00d8ff' },
  'react.js':    { icon: '⚛️',  bg: 'rgba(0,216,255,0.10)',  border: 'rgba(0,216,255,0.30)',  color: '#00d8ff' },
  'javascript':  { icon: '🟨',  bg: 'rgba(247,223,30,0.10)', border: 'rgba(247,223,30,0.30)', color: '#f7df1e' },
  'js':          { icon: '🟨',  bg: 'rgba(247,223,30,0.10)', border: 'rgba(247,223,30,0.30)', color: '#f7df1e' },
  'tailwind css': { icon: '🌊', bg: 'rgba(56,178,172,0.10)', border: 'rgba(56,178,172,0.30)', color: '#38b2ac' },
  'tailwind':    { icon: '🌊',  bg: 'rgba(56,178,172,0.10)', border: 'rgba(56,178,172,0.30)', color: '#38b2ac' },
  'css':         { icon: '🎨',  bg: 'rgba(21,114,182,0.10)', border: 'rgba(21,114,182,0.30)', color: '#38bdf8' },
  'html':        { icon: '🔶',  bg: 'rgba(227,79,38,0.10)',  border: 'rgba(227,79,38,0.30)',  color: '#e34f26' },
  'java':        { icon: '☕',  bg: 'rgba(248,152,32,0.10)', border: 'rgba(248,152,32,0.30)', color: '#f89820' },
  'git':         { icon: '📦',  bg: 'rgba(240,80,50,0.10)',  border: 'rgba(240,80,50,0.30)',  color: '#f05032' },
  'github':      { icon: '🐙',  bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.20)', color: '#e2e8f0' },
  'firebase':    { icon: '🔥',  bg: 'rgba(255,202,40,0.10)', border: 'rgba(255,202,40,0.30)', color: '#ffca28' },
  'node.js':     { icon: '🟢',  bg: 'rgba(104,159,56,0.10)', border: 'rgba(104,159,56,0.30)', color: '#68a038' },
  'python':      { icon: '🐍',  bg: 'rgba(55,118,171,0.10)', border: 'rgba(55,118,171,0.30)', color: '#3776ab' },
  'typescript':  { icon: '🔷',  bg: 'rgba(49,120,198,0.10)', border: 'rgba(49,120,198,0.30)', color: '#3178c6' },
};

const getDefault = () => ({
  icon: '⚡',
  bg: 'rgba(148,163,184,0.08)',
  border: 'rgba(148,163,184,0.25)',
  color: '#94a3b8',
});

const TechTag = ({ tech, index = 0 }) => {
  const brand = TECH_BRAND[tech.toLowerCase()] || getDefault();

  return (
    <motion.span
      className="tech-tag"
      style={{
        '--tag-bg': brand.bg,
        '--tag-border': brand.border,
        '--tag-color': brand.color,
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <span className="tech-tag__icon">{brand.icon}</span>
      <span className="tech-tag__label">{tech}</span>
    </motion.span>
  );
};

export default TechTag;
