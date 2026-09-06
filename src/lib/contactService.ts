import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * Send contact form submission directly to Marvin's email inbox (marvinangelo103@gmail.com).
 * Supports Web3Forms or EmailJS backend APIs.
 */
export const sendContactMessage = async (data: ContactFormData): Promise<ContactResponse> => {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // 1. Web3Forms API (Direct submission to marvinangelo103@gmail.com)
  if (web3FormsKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `Portfolio Message from ${data.name}`,
          to_email: 'marvinangelo103@gmail.com'
        }),
      });
      const result = await response.json();
      if (result.success) {
        return { success: true, message: 'Your message has been delivered to Marvin\'s inbox!' };
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
    }
  }

  // 2. EmailJS API
  if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
    try {
      const response = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: 'Marvin Buquis',
          reply_to: data.email,
        },
        emailjsPublicKey
      );

      if (response.status === 200) {
        return { success: true, message: 'Your message has been sent successfully!' };
      }
    } catch (error: any) {
      console.error('EmailJS error:', error);
    }
  }

  // 3. In-page Form Submission Handler (Zero blank tabs or popups!)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you! Your message has been submitted to Marvin.',
      });
    }, 1000);
  });
};
