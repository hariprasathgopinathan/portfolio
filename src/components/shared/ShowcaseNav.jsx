import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ShowcaseNav.css';

/**
 * ShowcaseNav – Prev/Next arrows + dot indicators for split-showcase sections.
 *
 * @param {number} total       Total number of items
 * @param {number} current     Current active index (0-based)
 * @param {function} onPrev    Go to previous
 * @param {function} onNext    Go to next
 * @param {function} onDotClick Jump to specific index
 * @param {string} accentColor CSS color for active dot
 */
const ShowcaseNav = ({ total, current, onPrev, onNext, onDotClick, accentColor = '#8B5CF6' }) => {
  return (
    <div className="showcase-nav" style={{ '--nav-accent': accentColor }}>
      {/* Previous */}
      <motion.button
        className="showcase-nav__arrow"
        onClick={onPrev}
        disabled={current === 0}
        aria-label="Previous item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft size={20} />
      </motion.button>

      {/* Dots */}
      <div className="showcase-nav__dots">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`showcase-nav__dot ${i === current ? 'showcase-nav__dot--active' : ''}`}
            style={i === current ? { '--dot-active': accentColor } : undefined}
            onClick={() => onDotClick(i)}
            aria-label={`Go to item ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Next */}
      <motion.button
        className="showcase-nav__arrow"
        onClick={onNext}
        disabled={current === total - 1}
        aria-label="Next item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight size={20} />
      </motion.button>
    </div>
  );
};

export default ShowcaseNav;
