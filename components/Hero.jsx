import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.gridLines} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Built for pipeline owner reps
        </div>

        <h1 className={styles.heading}>
          What did your contractor<br />
          <span className={styles.accent}>actually do today?</span>
        </h1>

        <p className={styles.sub}>
          Pipe-Up gives owner reps an independent field record — so you can verify
          progress claims, reconcile billing, and protect your organization on any
          contract type.
        </p>

        <div className={styles.actions}>
          <Link href="#contact" className="btn-primary">
            Request a demo →
          </Link>
          <Link href="#features" className="btn-outline">
            See the features
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <label>Works on</label>
            <span>Any</span>
            <p>Contract type</p>
          </div>
          <div className={styles.stat}>
            <label>Record</label>
            <span>Independent</span>
            <p>Owner-side field data</p>
          </div>
          <div className={styles.stat}>
            <label>Built by</label>
            <span>20+ yrs</span>
            <p>Pipeline field experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
