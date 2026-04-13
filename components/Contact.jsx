'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

const ROLES = [
  'VP / Director',
  'Construction Manager',
  "Owner's Engineer",
  'Project Manager',
  'Other',
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="padded">
      <div className="container">
        <div className={styles.inner}>
          <p className="section-label">Get in touch</p>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Request a demo</h2>
            <p className={styles.cardSub}>
              Tell us about your project and we&apos;ll reach out within one
              business day to walk you through the platform.
            </p>

            {status === 'success' ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3>Request received</h3>
                <p>We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="firstName">First name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Rick"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="lastName">Last name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Judson"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <label htmlFor="email">Work email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Pembina Pipeline"
                      value={form.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="role">Your role</label>
                    <select
                      id="role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                    >
                      <option value="">Select your role</option>
                      {ROLES.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.group}>
                  <label htmlFor="message">Tell us about your project (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Contract type, project scale, current challenges verifying contractor progress or billing..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Something went wrong — please email us directly at{' '}
                    <a href="mailto:rjudson@protonmail.com">rjudson@protonmail.com</a>
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit request →'}
                </button>
              </form>
            )}

            <p className={styles.note}>
              No spam. No sales calls without permission. We respond within one
              business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
