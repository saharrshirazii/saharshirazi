import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = 'saharr.shirazii@gmail.com'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body ?? {}

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message.' })
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact email', error)
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' })
  }
}
