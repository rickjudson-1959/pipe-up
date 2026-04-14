import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.grid} />
      <div className={styles.inner}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} />
          Purpose-built for pipeline construction
        </div>
        <h1 className={styles.h1}>
          The complete oversight platform<br />
          for <em className={styles.em}>pipeline construction.</em>
        </h1>
        <p className={styles.sub}>
          From inspector field reports to executive dashboards, LEM reconciliation
          to project handover — Pipe-Up gives owner organizations a single,
          AI-powered platform for every phase of construction oversight.
        </p>
        <div className={styles.actions}>
          <Link href="#contact" className="btn-primary">Request a demo →</Link>
          <Link href="#platform" className="btn-ghost">Explore the platform</Link>
        </div>
        <p className={styles.ctaSub}>
          15-minute technical walkthrough. No obligation.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <label>Activity types</label>
            <span>29</span>
            <p>Specialized inspection logs</p>
          </div>
          <div className={styles.stat}>
            <label>User roles</label>
            <span>9</span>
            <p>Purpose-built dashboards</p>
          </div>
          <div className={styles.stat}>
            <label>Contract types</label>
            <span>Any</span>
            <p>T&amp;M, Target, Lump Sum</p>
          </div>
          <div className={styles.stat}>
            <label>Capability</label>
            <span>AI</span>
            <p>OCR, agent watcher, narratives</p>
          </div>
        </div>
      </div>
    </section>
  );
}
