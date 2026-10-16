/**
 * contactService.js
 *
 * Email delivery via EmailJS (browser-only, no backend needed).
 * 
 * ─── SETUP (one-time) ────────────────────────────────────────────────────────
 * 1. Create a free account at https://www.emailjs.com/
 * 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
 * 3. Create an Email Template with these template variables:
 *      {{from_name}}   → sender's name
 *      {{from_email}}  → sender's email (set as Reply-To)
 *      {{subject}}     → email subject
 *      {{message}}     → message body
 *    Copy the Template ID.
 * 4. Go to Account → API Keys → copy your Public Key.
 * 5. Replace the three placeholder values below with your real credentials.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import emailjs from '@emailjs/browser';

// ── Paste YOUR credentials here ──────────────────────────────────────────────
const SERVICE_ID  = 'service_uh5k4ak';   // e.g. 'service_abc123'
const TEMPLATE_ID = 'template_2clhxs3';  // e.g. 'template_xyz789'
const PUBLIC_KEY  = 'J1lGthx7hehc8BKBL';   // e.g. 'abcDEFghiJKL'
// ─────────────────────────────────────────────────────────────────────────────

export const contactService = {
  /**
   * Sends an email via EmailJS using the contact form data.
   * @param {{ name: string, email: string, subject: string, message: string }} data
   * @returns {Promise<{ success: boolean, error?: string }>}
   */
  async sendMessage(data) {
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: 'Please fill out all required fields.' };
    }

    // Guard: remind developer to add real credentials
    if (
      SERVICE_ID === 'YOUR_SERVICE_ID' ||
      TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      console.warn(
        '[ContactService] EmailJS credentials not configured yet.\n' +
        'Open src/services/contactService.js and replace the placeholder values.'
      );
      return {
        success: false,
        error: 'Email service is not configured yet. Please add your EmailJS credentials.',
      };
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    data.name,
          email:   data.email,
          title:   data.subject || '(No subject)',
          message: data.message,
        },
        PUBLIC_KEY
      );
      return { success: true };
    } catch (err) {
      console.error('[ContactService] EmailJS error:', err);
      return {
        success: false,
        error: err?.text || 'Message could not be sent. Please try again later.',
      };
    }
  },
};
