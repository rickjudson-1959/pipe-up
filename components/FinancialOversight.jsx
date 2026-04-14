import styles from './FinancialOversight.module.css';

const phases = [
  { name: 'Clearing & Grading', cvi: 0.925, exposure: '$1.5M', pct: 92.5, color: '#cc5500' },
  { name: 'Stringing & Bending', cvi: 0.939, exposure: '$0.8M', pct: 93.9, color: '#cc5500' },
  { name: 'Welding', cvi: 0.904, exposure: '$3.0M', pct: 90.4, color: '#cc5500' },
  { name: 'Coating & Insp.', cvi: 0.948, exposure: '$0.4M', pct: 94.8, color: '#1a7a3a' },
  { name: 'Ditching', cvi: 0.913, exposure: '$1.3M', pct: 91.3, color: '#cc5500' },
  { name: 'HDD & Bores', cvi: 0.824, exposure: '$4.7M', pct: 82.4, color: '#cc3300', highlight: true },
];

const points = [
  'Real-time phase-level cost tracking across every construction spread',
  'Automated alert engine — 5 rules flag capital at risk, declining trends, and schedule overruns',
  'Approved capital vs projected EAC visible at a glance',
];

export default function FinancialOversight() {
  return (
    <section id="financial" className="sec">
      <div className="wrap">
        <div className={styles.grid}>
          {/* Left column — copy */}
          <div>
            <p className="label">Financial Oversight</p>
            <h2 className="h2">Capital Variance Index</h2>
            <p className={`lead ${styles.leadSpaced}`}>
              A single metric that tells you whether your project will finish over
              budget — and by how much. CVI extends standard Earned Value Management
              by factoring in schedule-driven indirect cost growth.
            </p>
            <div className={styles.points}>
              {points.map((p) => (
                <div key={p} className={styles.point}>
                  <div className={styles.dot} />
                  <p className={styles.pointText}>{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — CVI dashboard mockup */}
          <div className={styles.dashboard}>
            {/* Header */}
            <div className={styles.dashHeader}>
              <div>
                <div className={styles.dashLabel}>Capital Variance Index</div>
                <div className={styles.dashSub}>
                  Eagle Mountain Woodfibre Gas Pipeline · 49% Elapsed
                </div>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusAmber}`}>
                AMBER
              </span>
            </div>

            {/* Metric cards */}
            <div className={styles.metrics}>
              <div className={`${styles.metric} ${styles.metricApproved}`}>
                <div className={styles.metricLabel}>Approved Capital</div>
                <div className={`${styles.metricValue} ${styles.metricBlue}`}>
                  $200M
                </div>
              </div>
              <div className={`${styles.metric} ${styles.metricWarning}`}>
                <div className={styles.metricLabel}>Projected EAC</div>
                <div className={`${styles.metricValue} ${styles.metricOrange}`}>
                  $217M
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>CVI Overall</div>
                <div className={`${styles.metricValue} ${styles.metricOrange}`}>
                  0.921
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>Capital Exposure</div>
                <div className={`${styles.metricValue} ${styles.metricOrange}`}>
                  $17.1M
                </div>
              </div>
            </div>

            {/* Phase bars */}
            <div className={styles.divider} />
            <div className={styles.phasesLabel}>Phase-Level Variance</div>
            <div className={styles.phases}>
              {phases.map((p) => (
                <div
                  key={p.name}
                  className={`${styles.phase} ${p.highlight ? styles.phaseHighlight : ''}`}
                >
                  <span
                    className={`${styles.phaseName} ${p.highlight ? styles.phaseNameBold : ''}`}
                  >
                    {p.name}
                  </span>
                  <div className={styles.phaseBar}>
                    <div
                      className={styles.phaseBarFill}
                      style={{
                        width: `${p.pct}%`,
                        background: `linear-gradient(90deg, #003366 ${p.pct > 90 ? '85%' : '60%'}, ${p.color})`,
                      }}
                    />
                  </div>
                  <span className={styles.phaseCvi} style={{ color: p.color }}>
                    {p.cvi.toFixed(3)}
                  </span>
                  <span
                    className={styles.phaseExposure}
                    style={p.highlight ? { color: '#cc3300', fontWeight: 600 } : {}}
                  >
                    {p.exposure}
                  </span>
                </div>
              ))}
            </div>

            {/* Alert */}
            <div className={styles.alert}>
              <div className={styles.alertTitle}>
                HDD &amp; Bores — significantly over budget (CVI 0.824)
              </div>
              <div className={styles.alertSub}>
                $4.7M capital exposure · Indirect cost growth critical · Flagged
                for executive review
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
