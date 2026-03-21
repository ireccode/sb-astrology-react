/**
 * Email sending utility
 * This is a simple implementation that can be extended with actual email service integration
 */

export interface EmailData {
  to: string;
  subject: string;
  formData: {
    fullName: string;
    email: string;
    phone: string;
    countryOfBirth: string;
    service: string;
    preferredDateTime: string;
    message: string;
  };
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // For now, we'll use a simple fetch to a mock endpoint
    // In production, this would integrate with Mailgun, SendGrid, or similar
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Email sent successfully',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
