import styles from './Audience.module.css';

const audiences = [
  {
    title: "Pipeline Owner Executives",
    points: [
      "Independent verification of contractor billing and progress claims — on any contract type",
      "Defensible audit trail for every field decision and approval",
      "Cost and progress variance reporting across the full project spread",
      "Owner-side field data your contractor never controls",
    ],
  },
  {
    title: "Owner's Construction Managers & Reps",
    points: [
      "Side-by-side comparison of contractor claims vs. inspector field record",
      "Automated variance flagging across T&M, Target Priced, and Lump Sum",
      "Inspector daily reports feed directly into claim and billing review",
      "Dispute log with supporting document attachments",
    ],
  },
];

export default function Audience() {
  return (
    <section id="audience" className={`padded ${styles.section}`}>
      <div className="container">
        <p className="section-label">Who it&apos;s for</p>
        <h2 className="section-head">
          Built for owner organizations<br />running field construction.
        </h2>
        <div className={styles.grid}>
          {audiences.map((a) => (
            <div key={a.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <ul className={styles.list}>
                {a.points.map((point) => (
                  <li key={point} className={styles.item}>
                    <div className={styles.check}>✓</div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
