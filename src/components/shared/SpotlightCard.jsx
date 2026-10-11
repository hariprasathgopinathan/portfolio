import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * SpotlightCard — Reusable glassmorphic card with:
 *  - Cursor-tracking radial-gradient spotlight on hover
 *  - Subtle 3D tilt (rotateX/Y capped at 6deg)
 *  - Hover lift (translateY(-6px))
 *  - Exact glassmorphism recipe from spec
 *
 *  @param {string}  className   Additional class names
 *  @param {string}  accentColor CSS color for border glow on hover (e.g. "rgba(6,182,212,0.4)")
 *  @param {object}  style       Additional inline styles
 *  @param {boolean} enableTilt  Whether to enable 3D tilt (default true)
 *  @param {object}  motionProps Extra Framer Motion props (whileInView, variants, etc.)
 */
const SpotlightCard = ({
  children,
  className = '',
  accentColor = 'rgba(139,92,246,0.4)',
  style = {},
  enableTilt = true,
  motionProps = {},
  ...rest
}) => {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: '50%', y: '50%' });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlight({ x: `${x}px`, y: `${y}px` });

    if (enableTilt) {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const maxDeg = 6;
      const ry = ((x - cx) / cx) * maxDeg;
      const rx = -((y - cy) / cy) * maxDeg;
      setTilt({ rx, ry });
    }
  }, [enableTilt]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
    setSpotlight({ x: '50%', y: '50%' });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--spotlight-x': spotlight.x,
        '--spotlight-y': spotlight.y,
        '--accent-glow': accentColor,
        transform: enableTilt
          ? `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
          : undefined,
        ...style,
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      {...motionProps}
      {...rest}
    >
      {/* Spotlight overlay */}
      <div
        className="spotlight-card__spotlight"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      {/* Hover border glow */}
      <div
        className="spotlight-card__border-glow"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      {children}
    </motion.div>
  );
};

export default SpotlightCard;
