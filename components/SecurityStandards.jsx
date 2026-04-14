import styles from './SecurityStandards.module.css';

const items = [
  {
    title: 'SHA-256 Data Integrity',
    sub: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l7 4v6c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'PWA Offline Capability',
    sub: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Automated Permit Parsing',
    sub: 'Provincial & State Regulatory Standards',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path d="M14 2v6h6" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

export default function SecurityStandards() {
  return (
    <section className={`sec alt ${styles.ribbon}`}>
      <div className={`wrap ${styles.inner}`}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.text}>
              <div className={styles.title}>{item.title}</div>
              {item.sub && <div className={styles.sub}>{item.sub}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
