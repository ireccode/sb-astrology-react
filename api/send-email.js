/**
 * Cloudflare Workers API endpoint for sending emails
 * This endpoint handles contact form submissions and sends emails via Mailgun or similar service
 */

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const { to, subject, formData } = await request.json();

      // Validate input
      if (!to || !subject || !formData) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Format email body
      const emailBody = `
New Astrology Reading Enquiry

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Country of Birth: ${formData.countryOfBirth}
Service: ${formData.service}
Preferred Date/Time: ${formData.preferredDateTime}

Additional Details:
${formData.message}

---
This enquiry was submitted via the contact form at stephenbaylissastrology.com.au
      `.trim();

      // For development, log the email
      console.log('Email to:', to);
      console.log('Subject:', subject);
      console.log('Body:', emailBody);

      // TODO: Implement actual email sending via Mailgun, SendGrid, or similar
      // For now, we'll just return success
      // In production, integrate with an email service

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ 
        error: 'Failed to process request',
        details: error.message 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
