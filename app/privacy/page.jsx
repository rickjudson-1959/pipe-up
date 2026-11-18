import Link from 'next/link';
import LegalPage, { legalStyles as s } from '@/components/LegalPage';
import { LEGAL_NAME, LEGAL_ADDRESS, PRIVACY_EMAIL, GOVERNING_PROVINCE } from '@/lib/legal';

export const metadata = {
  title: 'Privacy Policy | Pipe-Up',
  description: 'How Pipe-Up collects, uses, protects and shares personal information.',
};

export default function PrivacyPage() {
  const mail = <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>;
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy explains how {LEGAL_NAME} (&quot;Pipe-Up&quot;, &quot;we&quot;, &quot;us&quot;) handles personal information on this website
        (pipe-up.ca) and in the Pipe-Up platform (app.pipe-up.ca). We follow Canada&apos;s Personal Information Protection and Electronic
        Documents Act (PIPEDA) and {GOVERNING_PROVINCE}&apos;s Personal Information Protection Act.
      </p>

      <h2>1. Who is responsible</h2>
      <p>
        <strong>On this website</strong>, we decide what is collected and why, and we are responsible for it.
      </p>
      <p>
        <strong>In the platform</strong>, each client company (an owner organization or its contractor) decides what its people enter and
        upload. We hold and process that information for the client, under our agreement with them. If you use the platform through your
        employer or a client, questions about your information may also go to that company. We will help them answer.
      </p>

      <h2>2. What we collect</h2>
      <p><strong>On this website</strong></p>
      <ul>
        <li>What you type into the demo request form: first and last name, work email, company, role and your message.</li>
        <li>Basic technical information our hosting provider records when you visit, such as your IP address, browser and the pages requested.</li>
      </ul>
      <p><strong>In the platform</strong></p>
      <ul>
        <li><strong>Account details:</strong> name, work email, role, company and project access.</li>
        <li><strong>Field records:</strong> daily inspection reports, photos (which can carry the GPS location and time they were taken),
          digital signatures, timesheets, ticket and LEM records, and documents your company uploads.</li>
        <li><strong>Location:</strong> when you allow it, your device&apos;s location, used to fill in local weather and place records on the
          project map.</li>
        <li><strong>Inspector invoicing:</strong> for independent inspectors who invoice through the platform, business contact details,
          banking details for payment, and credentials and certificates with their expiry dates.</li>
        <li><strong>Activity records:</strong> who created, changed, approved or signed what, and when. These form the audit trail that makes
          the records trustworthy.</li>
        <li><strong>On your device:</strong> drafts and offline copies are kept in your browser&apos;s storage so you can work without a
          connection. They stay on that device until they are sent or cleared.</li>
      </ul>
      <p>We do not sell personal information, and we do not use it for advertising.</p>

      <h2>3. Why we use it</h2>
      <ul>
        <li>To run the platform: sign-in, access by company and project, field reporting, reconciliation, dashboards and document control.</li>
        <li>To keep records accurate and accountable, including the audit trail and the certification of submitted reports.</li>
        <li>To send service email, such as invitations, approvals, reminders and summaries.</li>
        <li>To answer demo requests and other messages you send us.</li>
        <li>To keep the service secure, find and fix problems, and support users.</li>
        <li>To meet legal, regulatory and contractual obligations.</li>
      </ul>

      <h2>4. AI features</h2>
      <p>
        Some features use artificial intelligence: reading text from uploaded tickets, LEMs and invoices, checking field records against
        project documents, and answering questions from your company&apos;s documents. To do this, the relevant text or image is sent to the AI
        provider listed below for that request only. Under these providers&apos; business terms, what we send is not used to train their
        models. The images are not stored in
        our database (only the original file in your company&apos;s storage). AI results can be wrong and are always for a person to review.
      </p>

      <h2>5. Who we share it with</h2>
      <p>
        Each company&apos;s information is kept separate from every other company&apos;s, and within a company, by project. We share personal
        information only with the service providers that run the platform for us, under contracts that limit their use of it:
      </p>
      <table className={s.table}>
        <thead><tr><th>Provider</th><th>What they do for us</th></tr></thead>
        <tbody>
          <tr><td>Supabase</td><td>Database, sign-in and file storage</td></tr>
          <tr><td>Vercel</td><td>Hosting for this website and the platform</td></tr>
          <tr><td>Resend</td><td>Sending email</td></tr>
          <tr><td>Anthropic</td><td>AI reading and analysis of documents, tickets and photos</td></tr>
          <tr><td>OpenAI</td><td>Search indexing of uploaded documents</td></tr>
          <tr><td>OpenWeather</td><td>Local weather for field reports</td></tr>
          <tr><td>Mapbox and Google</td><td>Map images on the project map</td></tr>
        </tbody>
      </table>
      <p>
        We may also disclose information when the law requires it, to protect people&apos;s safety, or as part of a sale or reorganization
        of our business, in which case the information stays protected under this policy.
      </p>

      <h2>6. Where it is stored</h2>
      <p>
        Our service providers may store and process information outside Canada, including in the United States. While it is there, it may
        be accessible to that country&apos;s courts and authorities under its laws.
      </p>

      <h2>7. How we protect it</h2>
      <ul>
        <li>Encryption in transit, and access rules in the database that keep each company&apos;s records separate.</li>
        <li>Access by role and by project, so people see only what their job requires.</li>
        <li>An audit trail of changes, and a tamper-evident fingerprint on every submitted report.</li>
        <li>Secret keys kept on our servers, never in the browser.</li>
      </ul>
      <p>
        No system is perfectly secure. If a breach creates a real risk of significant harm, we will notify the people affected, the client
        company and the Privacy Commissioner as the law requires.
      </p>

      <h2>8. How long we keep it</h2>
      <p>
        Platform records are kept for as long as the client&apos;s agreement with us is in place, and afterwards for as long as the client
        directs or the law requires. Project records are often kept for years for regulatory and contract reasons. At the end of an agreement
        the client can receive a full export of its records. Demo requests are kept for up to two years unless you become a client.
      </p>

      <h2>9. Your choices and rights</h2>
      <p>
        You can ask to see the personal information we hold about you, to correct it, or to withdraw consent where that is possible without
        stopping the service. Some records, such as signed reports and the audit trail, cannot be changed or deleted, because their value
        depends on being complete; we can add a correction note instead. Write to {mail}. We answer within 30 days. If you are not satisfied,
        you may contact the Office of the Privacy Commissioner of Canada or the Office of the Information and Privacy Commissioner of{' '}
        {GOVERNING_PROVINCE}.
      </p>

      <h2>10. Cookies and browser storage</h2>
      <p>
        This website does not use advertising or tracking cookies. The platform uses your browser&apos;s storage to keep you signed in, to
        remember settings, and to hold drafts and offline copies.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update this policy. The effective date at the top shows the latest version. If a change is significant, we will tell client
        companies before it takes effect.
      </p>

      <h2>12. Contact</h2>
      <p>
        Privacy questions and requests: {mail}<br />
        {LEGAL_NAME}, {LEGAL_ADDRESS}
      </p>
      <p>See also our <Link href="/terms">Terms of Use</Link>.</p>
    </LegalPage>
  );
}
