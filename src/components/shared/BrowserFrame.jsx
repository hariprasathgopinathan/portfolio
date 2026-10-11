import React from 'react';
import './BrowserFrame.css';

/**
 * BrowserFrame – macOS-style browser chrome wrapping project visuals.
 * If `imageSrc` is provided, renders the screenshot; otherwise renders
 * a styled gradient placeholder with the project title lockup.
 */
const BrowserFrame = ({ imageSrc, title, liveUrl, accentColor = 'rgba(139,92,246,0.5)' }) => {
  return (
    <div className="browser-frame" style={{ '--frame-accent': accentColor }}>
      {/* macOS traffic-light chrome */}
      <div className="browser-frame__chrome">
        <div className="browser-frame__dots">
          <span className="browser-frame__dot browser-frame__dot--red" />
          <span className="browser-frame__dot browser-frame__dot--yellow" />
          <span className="browser-frame__dot browser-frame__dot--green" />
        </div>
        <div className="browser-frame__url-bar">
          <span className="browser-frame__url-text">
            {liveUrl ? liveUrl.replace(/^https?:\/\//, '') : `${(title || 'app').toLowerCase().replace(/\s+/g, '-')}.dev`}
          </span>
        </div>
      </div>

      {/* Viewport area */}
      <div className="browser-frame__viewport">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="browser-frame__screenshot"
            loading="lazy"
          />
        ) : (
          /* Gradient placeholder with title lockup */
          <div className="browser-frame__placeholder">
            <div className="browser-frame__placeholder-mesh" />
            <div className="browser-frame__placeholder-content">
              <div className="browser-frame__placeholder-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="browser-frame__placeholder-title">{title}</span>
              <span className="browser-frame__placeholder-sub">Project Preview</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BrowserFrame;
