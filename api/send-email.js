export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, message, context } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  if (process.env.RESEND_API_KEY) {
    try {
      const Resend = require('resend').default;
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `NexMindMatrix <no-reply@${process.env.VERCEL_URL || 'nexmindmatrix.local'}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `Contact form: ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Context:</strong> ${context || ''}</p><p><strong>Message:</strong><br/>${message}</p>`
      });
      return res.status(200).json({ success: true });
    } catch (e) { console.error(e); return res.status(500).json({ error: 'Resend error' }); }
  }
  if (process.env.SENDGRID_API_KEY) {
    try {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      await sgMail.send({
        to: process.env.RECEIVER_EMAIL,
        from: process.env.SENDER_EMAIL || 'no-reply@'+(process.env.VERCEL_URL || 'nexmindmatrix.local'),
        subject: `Contact form: ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Context:</strong> ${context || ''}</p><p><strong>Message:</strong><br/>${message}</p>`
      });
      return res.status(200).json({ success: true });
    } catch (e) { console.error(e); return res.status(500).json({ error: 'SendGrid error' }); }
  }
  return res.status(500).json({ error: 'No email provider configured' });
}
