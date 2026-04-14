import styles from './HowItWorks.module.css';

const steps = [
  {
    n: '01',
    title: 'Inspectors capture independent field data',
    body: 'Activity logs, equipment hours, quality checklists, GPS-tagged photos, and digital signatures — entered once in the field, available everywhere in real time.',
  },
  {
    n: '02',
    title: 'Contractor tickets are uploaded and OCR-extracted',
    body: 'LEM sheets and daily tickets are uploaded as PDFs. Claude Vision extracts structured billing data automatically — labour, equipment, rates, and totals. No manual entry.',
  },
  {
    n: '03',
    title: 'Variances and claims are verified before approval',
    body: "The reconciliation engine compares contractor data against your inspector's independent record. Every discrepancy is flagged, tracked, and audit-logged before any approval.",
  },
  {
    n: '04',
    title: 'Executives see the full picture in real time',
    body: 'EVM, cost variance, FEED-to-actual spend tracking, and AI-generated daily narratives — so project leadership always knows where the project stands and what\'s at risk.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className={`sec alt ${styles.section}`}>
      <div className="wrap">
        <p className="label">How it works</p>
        <h2 className="h2">Field data flows up.<br />Owner decisions flow down.</h2>
        <div className={styles.steps}>
          {steps.map((s) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.num}>{s.n}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
