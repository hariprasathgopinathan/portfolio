import React from 'react';
import { motion } from 'framer-motion';

/**
 * StatusChip – Small rotated pill in the top-right corner of a card.
 *
 * @param {string} status   One of: 'winner', 'live', 'featured', 'in-progress', 'recognition'
 * @param {string} label    Optional override text (defaults based on status)
 */

const STATUS_CONFIG = {
  winner:      { emoji: '🏆', label: 'Winner',      bg: 'rgba(16,185,129,0.15)', border: 'rgba(52,211,153,0.4)',  color: '#6ee7b7' },
  live:        { emoji: '🚀', label: 'Live',         bg: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.4)',  color: '#7dd3fc' },
  featured:    { emoji: '⭐', label: 'Featured',     bg: 'rgba(245,158,11,0.15)', border: 'rgba(251,191,36,0.4)',  color: '#fcd34d' },
  'in-progress': { emoji: '🔥', label: 'In Progress', bg: 'rgba(239,68,68,0.15)',  border: 'rgba(248,113,113,0.4)', color: '#fca5a5' },
  recognition: { emoji: '⭐', label: 'Recognition',  bg: 'rgba(168,85,247,0.15)', border: 'rgba(192,132,252,0.4)', color: '#d8b4fe' },
};

const StatusChip = ({ status = 'featured', label }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.featured;
  const displayLabel = label || config.label;
  const isLive = status === 'live';

  return (
    <motion.div
      className="status-chip"
      style={{
        '--chip-bg': config.bg,
        '--chip-border': config.border,
        '--chip-color': config.color,
      }}
      animate={isLive ? { scale: [1, 1.05, 1] } : {}}
      transition={isLive ? { repeat: Infinity, duration: 2, ease: 'easeInOut' } : {}}
    >
      <span className="status-chip__emoji">{config.emoji}</span>
      <span className="status-chip__label">{displayLabel}</span>
    </motion.div>
  );
};

export default StatusChip;
