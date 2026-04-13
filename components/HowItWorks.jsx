import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Field data is captured independently',
    body: "Inspectors log daily activities, equipment hours, and crew counts via the Pipe-Up field journal — creating an owner-side record the contractor never touches.",
  },
  {
    num: '02',
    title: 'Contractor tickets are uploaded and extracted',
    body: 'LEM sheets and daily tickets are uploaded as PDFs. OCR auto-extraction pulls structured data out — labour, equipment, materials — no manual entry required.',
  },
  {
    num: '03',
    title: 'Claims and billing are verified before you approve',
    body: 'On T&M and Target Priced jobs, the engine reconciles billing line by line. On Lump Sum and base lay contracts, progress claims are verified against your inspector\'s independent measurement. Every discrepancy is surfaced, tracked, and audit-logged.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className={`padded ${styles.section}`}>
      <div className="container">
        <p className="section-label">How it works</p>
        <h2 className="section-head">
          From the field to verified record<br />in three steps.
        </h2>
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.num}>{step.num}</div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
