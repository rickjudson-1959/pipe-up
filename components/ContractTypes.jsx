import styles from './ContractTypes.module.css';

const contracts = [
  {
    badge: 'T&M / LEM-Based',
    color: 'blue',
    title: 'Time & Material',
    desc: 'Full LEM reconciliation with 4-panel visual comparison, OCR-extracted billing data, line-by-line variance flagging, and invoice gate enforcement. Every hour verified before approval.',
  },
  {
    badge: 'Target Priced',
    color: 'teal',
    title: 'Target Price Contracts',
    desc: 'Track actual field spend against the target price in real time. FEED Intelligence module connects pre-construction estimates to actual LEM spend for ongoing cost performance visibility.',
  },
  {
    badge: 'Lump Sum / Base Lay',
    color: 'purple',
    title: 'Lump Sum & Base Lay',
    desc: "Progress claims verified against your inspector's independent KP measurement. No more accepting a contractor's claimed progress without an independent field record to back it up.",
  },
];

export default function ContractTypes() {
  return (
    <section className="sec">
      <div className="wrap">
        <p className="label">Contract type coverage</p>
        <h2 className="h2">One platform for<br />every contract structure.</h2>
        <div className={styles.grid}>
          {contracts.map((c) => (
            <div key={c.title} className={styles.card}>
              <span className={`${styles.badge} ${styles[c.color]}`}>{c.badge}</span>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.desc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
