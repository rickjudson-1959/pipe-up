import styles from './Features.module.css';

const features = [
  {
    icon: '📋',
    title: 'Field Reconciliation Engine',
    body: "Compare contractor billing or progress claims against your inspector's independent daily record. Works across T&M, Target Priced, and Lump Sum base lay contracts.",
    tag: 'Core feature',
  },
  {
    icon: '🔍',
    title: 'OCR Ticket Extraction',
    body: 'Upload any contractor PDF — LEM sheets, daily tickets, equipment logs — and structured data is extracted automatically via AI vision. No rekeying.',
    tag: 'AI-powered',
  },
  {
    icon: '⚡',
    title: 'Variance & Claim Detection',
    body: "Discrepancies between what the contractor billed or claimed and what your inspector recorded are flagged instantly — whether it's hours, equipment, KP progress, or quantities.",
    tag: 'Real-time',
  },
  {
    icon: '📝',
    title: 'Inspector Field Journal',
    body: 'A purpose-built daily reporting tool for your inspectors. GPS-synced KP, voice input, and structured field data that feeds directly into reconciliation.',
    tag: 'Field tool',
  },
  {
    icon: '🔒',
    title: 'Audit-Locked Billing',
    body: 'Every billing decision is logged with a full audit trail. The review-to-approval gate cannot be bypassed — giving you a defensible record for any dispute.',
    tag: 'Compliance',
  },
  {
    icon: '📊',
    title: 'Dispute Tracking',
    body: 'Formal dispute workflow built in — log the issue, attach supporting records, track status, and generate a summary report for contractor negotiation.',
    tag: 'Owner protection',
  },
];

export default function Features() {
  return (
    <section id="features" className="padded">
      <div className="container">
        <div className={styles.intro}>
          <div>
            <p className="section-label">Platform features</p>
            <h2 className="section-head">
              Everything your owner rep<br />team needs on any job.
            </h2>
          </div>
          <p className="section-sub">
            Purpose-built for pipeline construction oversight — T&amp;M, Target
            Priced, and Lump Sum — not adapted from generic project management
            software.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.body}>{f.body}</p>
              <span className={styles.tag}>{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
