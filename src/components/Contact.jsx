import React, { useState } from 'react';
import './Contact.css';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/* ── Premium SVG Icons with gradients & layered design ── */
const MailIcon = () => (
  <svg viewBox="0 0 40 40" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="mailFlap" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c4b5fd" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    {/* Soft glow ring */}
    <circle cx="20" cy="20" r="18" fill="none" stroke="url(#mailGrad)" strokeWidth="1" opacity="0.3">
      <animate attributeName="r" values="16;18;16" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0.15;0.3" dur="3s" repeatCount="indefinite" />
    </circle>
    {/* Envelope body */}
    <rect x="8" y="12" width="24" height="17" rx="3.5" fill="url(#mailGrad)" opacity="0.2" />
    <rect x="8" y="12" width="24" height="17" rx="3.5" fill="none" stroke="url(#mailGrad)" strokeWidth="1.8" />
    {/* Envelope flap — open style */}
    <path d="M8.5 13 L20 22 L31.5 13" fill="none" stroke="url(#mailFlap)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Inner subtle line detail */}
    <path d="M12 26 L17 22" stroke="url(#mailGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <path d="M28 26 L23 22" stroke="url(#mailGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    {/* Floating accent dot */}
    <circle cx="33" cy="9" r="2.2" fill="#a78bfa" opacity="0.7">
      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="33" cy="9" r="1" fill="#c4b5fd" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 40 40" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="locGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <radialGradient id="locGlow" cx="50%" cy="35%" r="50%">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Ambient glow */}
    <circle cx="20" cy="15" r="14" fill="url(#locGlow)">
      <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite" />
    </circle>
    {/* Pin body */}
    <path d="M20 4C13.4 4 8 9.1 8 15.3C8 23.5 20 36 20 36S32 23.5 32 15.3C32 9.1 26.6 4 20 4Z" 
          fill="url(#locGrad)" opacity="0.15" />
    <path d="M20 4C13.4 4 8 9.1 8 15.3C8 23.5 20 36 20 36S32 23.5 32 15.3C32 9.1 26.6 4 20 4Z" 
          fill="none" stroke="url(#locGrad)" strokeWidth="1.8" />
    {/* Inner circle — dual ring */}
    <circle cx="20" cy="15" r="5" fill="none" stroke="url(#locGrad)" strokeWidth="1.6" />
    <circle cx="20" cy="15" r="2" fill="#22d3ee" opacity="0.8" />
    {/* Crosshair lines */}
    <line x1="20" y1="8" x2="20" y2="11" stroke="#22d3ee" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    <line x1="20" y1="19" x2="20" y2="22" stroke="#22d3ee" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    <line x1="13" y1="15" x2="16" y2="15" stroke="#22d3ee" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    <line x1="24" y1="15" x2="27" y2="15" stroke="#22d3ee" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    {/* Pulse ring animation */}
    <circle cx="20" cy="15" r="5" fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity="0">
      <animate attributeName="r" values="5;10;5" dur="2.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 40 40" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="checkShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6ee7b7" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
    </defs>
    {/* Outer orbit ring */}
    <circle cx="20" cy="20" r="16" fill="none" stroke="url(#checkGrad)" strokeWidth="1" opacity="0.25" strokeDasharray="4 4">
      <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="20s" repeatCount="indefinite" />
    </circle>
    {/* Main shield / badge circle */}
    <circle cx="20" cy="20" r="12" fill="url(#checkGrad)" opacity="0.12" />
    <circle cx="20" cy="20" r="12" fill="none" stroke="url(#checkGrad)" strokeWidth="1.8" />
    {/* Checkmark — bold & rounded */}
    <path d="M13.5 20.5 L17.5 24.5 L26.5 15.5" 
          stroke="url(#checkShine)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Sparkle accents */}
    <circle cx="33" cy="8" r="1.5" fill="#34d399" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="7" cy="32" r="1" fill="#6ee7b7" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.5s" repeatCount="indefinite" />
    </circle>
    {/* Small star-burst */}
    <line x1="34" y1="30" x2="36" y2="28" stroke="#34d399" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
    <line x1="34" y1="30" x2="36" y2="32" stroke="#34d399" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
    <line x1="34" y1="30" x2="32" y2="30" stroke="#34d399" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 40 40" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ghGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <radialGradient id="ghGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Ambient pulse ring */}
    <circle cx="20" cy="20" r="18" fill="none" stroke="url(#ghGrad)" strokeWidth="0.8" opacity="0.2">
      <animate attributeName="r" values="16;19;16" dur="3.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.25;0.08;0.25" dur="3.5s" repeatCount="indefinite" />
    </circle>
    {/* Glow backdrop */}
    <circle cx="20" cy="20" r="14" fill="url(#ghGlow)" />
    {/* GitHub Octocat mark — accurate path */}
    <path d="M20 6C12.27 6 6 12.27 6 20c0 6.19 4.01 11.44 9.58 13.29.7.13.96-.3.96-.67 0-.33-.01-1.42-.02-2.58-3.9.85-4.72-1.65-4.72-1.65-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.14 3.28 1.52 4.08 1.16.13-.91.49-1.52.89-1.87-3.11-.35-6.38-1.56-6.38-6.93 0-1.53.55-2.78 1.44-3.76-.14-.36-.63-1.78.14-3.71 0 0 1.17-.38 3.84 1.43a13.3 13.3 0 0 1 3.5-.47c1.19.01 2.38.16 3.5.47 2.66-1.81 3.83-1.43 3.83-1.43.77 1.93.29 3.35.14 3.71.9.98 1.44 2.23 1.44 3.76 0 5.38-3.28 6.57-6.4 6.92.5.43.95 1.29.95 2.6 0 1.88-.02 3.39-.02 3.85 0 .38.25.81.97.67C29.99 31.44 34 26.19 34 20c0-7.73-6.27-14-14-14z"
          fill="url(#ghGrad)" opacity="0.9" />
    {/* Shine highlight on top */}
    <path d="M14 12c2-1.5 5-2 6-2s4 .5 6 2" stroke="#f8fafc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" fill="none" />
    {/* Sparkle accent */}
    <circle cx="33" cy="9" r="1.5" fill="#e2e8f0" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.8s" repeatCount="indefinite" />
    </circle>
    <circle cx="8" cy="33" r="1" fill="#cbd5e1" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3.2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 40 40" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="liShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
      <radialGradient id="liGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Ambient pulse ring */}
    <circle cx="20" cy="20" r="18" fill="none" stroke="url(#liGrad)" strokeWidth="0.8" opacity="0.2">
      <animate attributeName="r" values="16;19;16" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.25;0.08;0.25" dur="3s" repeatCount="indefinite" />
    </circle>
    {/* Glow backdrop */}
    <circle cx="20" cy="20" r="14" fill="url(#liGlow)" />
    {/* Circular background instead of box */}
    <circle cx="20" cy="20" r="13" fill="url(#liGrad)" opacity="0.12" />
    <circle cx="20" cy="20" r="13" fill="none" stroke="url(#liGrad)" strokeWidth="1.4" />
    {/* "in" letterform — accurate LinkedIn mark */}
    {/* Dot + vertical bar for "i" */}
    <circle cx="14.5" cy="15" r="1.6" fill="url(#liShine)" />
    <rect x="13" y="18" width="3" height="9" rx="0.8" fill="url(#liShine)" />
    {/* "n" shape */}
    <path d="M19 18v9h3v-5.5c0-1.8 1.2-2.5 2.2-2.5 1.2 0 1.8.8 1.8 2.2V27h3v-6c0-3.2-1.8-4.2-3.8-4.2-1.8 0-2.8.9-3.2 1.6V18h-3z" 
          fill="url(#liShine)" />
    {/* Sparkle accents */}
    <circle cx="34" cy="8" r="1.3" fill="#60a5fa" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="7" cy="33" r="1" fill="#93c5fd" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const DoneAllIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 7 11 14 7.5 10.5" />
    <polyline points="22 7 15 14 13 12" />
    <polyline points="4 12 7 15 8.5 13.5" />
  </svg>
);

const Contact = () => {
  const { contact, about } = PORTFOLIO_DATA;
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      console.log('Frontend Demo: Form validation passed, but no backend is connected.');
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        {/* Ambient glow */}
        <div className="contact-card__glow" />

        <div className="contact-card__grid">
          {/* ── Left Column: Info ── */}
          <div className="contact-info">
            <div className="contact-info__top">
              <h2 className="contact-info__title">
                Let's Build Something{' '}
                <span className="contact-info__title-gradient">Impactful</span>.
              </h2>
              <p className="contact-info__desc">
                Have an opening, an upcoming software hackathon, or a web project you'd like to collaborate on? My inbox is always active and open for discussion.
              </p>
            </div>

            {/* Channel Pills — Email, GitHub, LinkedIn */}
            <div className="contact-channels">
              <a href={`mailto:${contact.email}`} className="contact-channel">
                <div className="contact-channel__icon contact-channel__icon--violet">
                  <MailIcon />
                </div>
                <div className="contact-channel__text">
                  <span className="contact-channel__label">Direct Email</span>
                  <span className="contact-channel__value">{contact.email}</span>
                </div>
              </a>

              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-channel">
                <div className="contact-channel__icon contact-channel__icon--slate">
                  <GitHubIcon />
                </div>
                <div className="contact-channel__text">
                  <span className="contact-channel__label">GitHub</span>
                  <span className="contact-channel__value">Projects & Source Code</span>
                </div>
              </a>

              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-channel">
                <div className="contact-channel__icon contact-channel__icon--blue">
                  <LinkedInIcon />
                </div>
                <div className="contact-channel__text">
                  <span className="contact-channel__label">LinkedIn</span>
                  <span className="contact-channel__value">Professional Network</span>
                </div>
              </a>

              {/* Info Pills — Current Base & Work Readiness */}
              <div className="contact-socials">
                <div className="contact-social-pill contact-social-pill--cyan">
                  <div className="contact-social-pill__icon">
                    <LocationIcon />
                  </div>
                  <div className="contact-social-pill__col">
                    <span className="contact-social-pill__label">Current Base</span>
                    <span className="contact-social-pill__text">{about.location || 'Chennai, India'}</span>
                  </div>
                </div>
                <div className="contact-social-pill contact-social-pill--green">
                  <div className="contact-social-pill__icon">
                    <CheckIcon />
                  </div>
                  <div className="contact-social-pill__col">
                    <span className="contact-social-pill__label">Work Readiness</span>
                    <span className="contact-social-pill__text contact-social-pill__text--cyan">Internships • Full-time 2025</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info__footer">
              Typically responds within 24 hours.
            </div>
          </div>

          {/* ── Right Column: Form ── */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-name">Your Name</label>
                  <input
                    className="contact-form__input"
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Hariprasath"
                    required
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-email">Your Email</label>
                  <input
                    className="contact-form__input"
                    id="contact-email"
                    type="email"
                    placeholder="e.g. hariprasath@email.com"
                    required
                    disabled={formStatus !== 'idle'}
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-subject">Subject</label>
                <input
                  className="contact-form__input"
                  id="contact-subject"
                  type="text"
                  placeholder="Collaboration, Full-Stack Opportunity, or Tech Chat"
                  required
                  disabled={formStatus !== 'idle'}
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-message">Message Content</label>
                <textarea
                  className="contact-form__input contact-form__textarea"
                  id="contact-message"
                  placeholder="Share project scope, timeline, or just say hello..."
                  rows="4"
                  required
                  disabled={formStatus !== 'idle'}
                />
              </div>

              <div className="contact-form__actions">
                <button
                  type="submit"
                  className="contact-form__submit"
                  disabled={formStatus !== 'idle'}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>Transmit Message</span>
                      <SendIcon />
                    </>
                  )}
                  {formStatus === 'sending' && <span>Transmitting...</span>}
                  {formStatus === 'success' && <span>Message Sent!</span>}
                </button>
              </div>

              {/* Success notification */}
              {formStatus === 'success' && (
                <div className="contact-form__success">
                  <DoneAllIcon />
                  <span>Message dispatched successfully! Hariprasath will connect with you soon.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
