/**
 * contactService.js
 * 
 * An abstraction layer for the contact form submission.
 * This ensures the UI is decoupled from the actual email provider API.
 */

export const contactService = {
  /**
   * Submits a message from the contact form.
   * @param {Object} data - The form data (name, email, message)
   * @returns {Promise<Object>} The result of the submission { success, error }
   */
  async sendMessage(data) {
    // Simulate network latency for the UI loading state
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // TODO: Replace this simulated logic with your actual email provider API
      // e.g., EmailJS, Formspree, SendGrid, custom backend, etc.
      
      // Simulated success condition:
      if (!data.name || !data.email || !data.message) {
        throw new Error('Please fill out all fields.');
      }
      
      // Simulated error condition (if email is exactly 'error@test.com'):
      if (data.email === 'error@test.com') {
        throw new Error('Simulated API failure.');
      }

      console.log('Frontend Demo: Message not delivered (No backend connected)', data);
      
      return { success: true };
    } catch (error) {
      console.error('Contact submission error:', error);
      return { 
        success: false, 
        error: error.message || 'Something went wrong. Please try again later.' 
      };
    }
  }
};
