import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, role, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log to console (always — visible in Vercel function logs)
    console.log('New demo request:', {
      name: `${firstName} ${lastName}`,
      email,
      company,
      role,
      message,
      receivedAt: new Date().toISOString(),
    });

    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Pipe-Up <noreply@pipe-up.ca>',
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Demo request — ${firstName} ${lastName} at ${company}`,
      text: [
        `Name:    ${firstName} ${lastName}`,
        `Email:   ${email}`,
        `Company: ${company}`,
        `Role:    ${role || 'Not specified'}`,
        `Message: ${message || 'None'}`,
      ].join('\n'),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
