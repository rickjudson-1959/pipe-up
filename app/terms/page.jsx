import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { LEGAL_NAME, LEGAL_ADDRESS, PRIVACY_EMAIL, GOVERNING_PROVINCE } from '@/lib/legal';

export const metadata = {
  title: 'Terms of Use | Pipe-Up',
  description: 'The terms for using the Pipe-Up website and platform.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        These terms apply to the Pipe-Up website (pipe-up.ca) and the Pipe-Up platform (app.pipe-up.ca), provided by {LEGAL_NAME}{' '}
        (&quot;Pipe-Up&quot;, &quot;we&quot;, &quot;us&quot;). By using either, you agree to them. If your company has a signed agreement
        with us, that agreement governs where it differs from these terms.
      </p>

      <h2>1. The service</h2>
      <p>
        Pipe-Up is a platform for pipeline construction oversight: inspector field reports, ticket and LEM reconciliation, invoicing,
        document control, dashboards and AI-assisted checks. We may improve, change or retire features over time, and will give client
        companies reasonable notice of changes that take away something they rely on.
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>Access is by invitation. Your company decides who is invited and what each person can see.</li>
        <li>Keep your sign-in details private and tell us or your company administrator right away if you think someone else has used them.</li>
        <li>You are responsible for what is done under your account. Your company is responsible for its users.</li>
      </ul>

      <h2>3. Your company&apos;s records</h2>
      <p>
        Your company owns the records, photos and documents it puts into the platform. We use them only to provide and support the service
        for your company, as described in our <Link href="/privacy">Privacy Policy</Link>. We never share them with another client. At the end
        of an agreement, your company can receive a full export.
      </p>
      <p>
        Your company confirms it has the right to upload what it uploads, including documents licensed from others, and that its people have
        been told how their information is used.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>access another company&apos;s or project&apos;s records, or try to get around access controls;</li>
        <li>enter false records, or alter or remove signed records or the audit trail;</li>
        <li>upload malicious code, overload the service, or test its security without our written permission;</li>
        <li>copy, resell or reverse engineer the platform, or use it to build a competing product;</li>
        <li>upload material you have no right to share, such as a standard licensed to one person only.</li>
      </ul>

      <h2>5. AI features and professional judgement</h2>
      <p>
        AI features can make mistakes. Their results are aids to review, not decisions. Inspection, engineering, safety, quality and payment
        decisions remain the responsibility of qualified people on the project. Pipe-Up does not replace an inspector, engineer, or any
        regulatory requirement.
      </p>

      <h2>6. Availability</h2>
      <p>
        We work to keep the service available and to protect records, including offline entry in the field. The service is provided
        &quot;as is&quot; and &quot;as available&quot;: we do not promise it will be uninterrupted or error free, except as set out in a signed
        agreement with your company.
      </p>

      <h2>7. Fees</h2>
      <p>Fees, payment terms and service levels are set in your company&apos;s agreement or order with us.</p>

      <h2>8. Our property</h2>
      <p>
        The platform, its software, design and content (other than your company&apos;s records) belong to Pipe-Up or its licensors. You
        receive a right to use it while your company&apos;s agreement is in place, and nothing more.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the extent the law allows, Pipe-Up is not liable for indirect, consequential or lost-profit damages, and our total liability for
        any claim is limited to the fees your company paid us in the twelve months before the claim, unless a signed agreement says
        otherwise.
      </p>

      <h2>10. Suspension and ending</h2>
      <p>
        We may suspend an account that breaks these terms or puts the service or other clients at risk, and will tell the company
        administrator why. Your company may stop using the service as set out in its agreement.
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may update these terms. The effective date at the top shows the latest version. If a change is significant, we will tell client
        companies before it takes effect.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These terms are governed by the laws of {GOVERNING_PROVINCE} and the federal laws of Canada that apply there, and disputes go to the
        courts of {GOVERNING_PROVINCE}.
      </p>

      <h2>13. Contact</h2>
      <p>
        {LEGAL_NAME}, {LEGAL_ADDRESS}<br />
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
      </p>
    </LegalPage>
  );
}
