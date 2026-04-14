import styles from './FieldTools.module.css';

const features = [
  { title: 'Full offline PWA', desc: 'Reports saved to device when offline. Photos stored locally. Automatic sync when connectivity returns.' },
  { title: 'OCR ticket scanning', desc: "Photo the contractor's daily ticket. AI extracts all labour and equipment entries automatically." },
  { title: 'GPS-tagged photos', desc: 'Every work photo captures EXIF geolocation. KP auto-populated from GPS coordinates.' },
  { title: 'AI field guide assistant', desc: 'Floating assistant with full API 1169 knowledge base. Ask questions about specs, procedures, or your current report.' },
  { title: 'Project-matched classifications', desc: "Labour and equipment classifications imported from your contractor's rate sheet. Exact match every time." },
  { title: 'iOS & Android optimized', desc: '44px touch targets, notch-safe layout, installable to home screen. Feels native on any device.' },
];

export default function FieldTools() {
  return (
    <section id="field" className={`sec alt ${styles.section}`}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <p className="label">Built for the field</p>
            <h2 className="h2">Works where your<br />inspectors work.</h2>
            <p className={`lead ${styles.leadSpaced}`}>
              Most construction software is built for the office. Pipe-Up is built
              for inspectors standing in a ditch at KP 24+600 with one bar of signal.
            </p>
            <div className={styles.features}>
              {features.map((f) => (
                <div key={f.title} className={styles.feature}>
                  <h4 className={styles.featureTitle}>{f.title}</h4>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.dot} style={{ background: '#ff5f57' }} />
              <div className={styles.dot} style={{ background: '#febc2e' }} />
              <div className={styles.dot} style={{ background: '#28c840' }} />
              <span className={styles.mockupLabel}>Inspector Report — Field Entry</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.statusBar}>
                <span>● Online — Auto-sync enabled</span>
              </div>
              {[
                ['Inspector', 'C. Barta'],
                ['Date', 'April 14, 2026'],
                ['Pipeline', 'Mid-Route'],
                ['Activity', 'Welding — Mainline'],
                ['KP Range', '24+400 → 24+850'],
                ['Metres Today', '450 m'],
                ['Labour (RT)', '22 personnel'],
                ['Equipment', '14 units'],
              ].map(([label, val]) => (
                <div key={label} className={styles.row}>
                  <span className={styles.rowLabel}>{label}</span>
                  <span className={styles.rowVal}>{val}</span>
                </div>
              ))}
              <div className={styles.row}>
                <span className={styles.rowLabel}>Health score</span>
                <span className={styles.rowGreen}>94% — Strong</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
