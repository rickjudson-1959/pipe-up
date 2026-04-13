import { NextResponse } from 'next/server';

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

    // ── Option A: Log to console (works immediately, no setup needed) ──
    console.log('📬 New demo request:', {
      name: `${firstName} ${lastName}`,
      email,
      company,
      role,
      message,
      receivedAt: new Date().toISOString(),
    });

    // ── Option B: Send email via Resend (uncomment when ready) ──
    // 1. npm install resend
    // 2. Add RESEND_API_KEY and CONTACT_TO_EMAIL to .env.local
    // 3. Uncomment below:
    //
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Pipe-Up <noreply@pipe-up.ca>',
    //   to: process.env.CONTACT_TO_EMAIL,
    //   subject: `Demo request — ${firstName} ${lastName} at ${company}`,
    //   text: `
    //     Name:    ${firstName} ${lastName}
    //     Email:   ${email}
    //     Company: ${company}
    //     Role:    ${role || 'Not specified'}
    //     Message: ${message || 'None'}
    //   `,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
