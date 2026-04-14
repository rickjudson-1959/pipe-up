import styles from './Roles.module.css';

const roles = [
  {
    pill: 'Executive', color: 'exec',
    title: 'Owner Executives & VPs',
    points: [
      'Real-time cost and progress visibility across the full spread',
      'FEED-to-actual spend tracking with EPCM accuracy grading',
      'Independent field verification before any invoice approval',
      'AI-generated executive summaries delivered daily',
    ],
  },
  {
    pill: 'Operations', color: 'ops',
    title: 'Construction Managers',
    points: [
      'CMT and EVM dashboards with phase-level tracking',
      'LEM reconciliation with full 4-panel visual comparison',
      'Contractor billing verified against inspector field record',
      'Capital Variance Index (CVI) for budget exposure visibility',
    ],
  },
  {
    pill: 'Field', color: 'field',
    title: 'Chief Inspectors',
    points: [
      'Daily report approval with AI anomaly flags surfaced',
      'Welding Chief sub-dashboard for WPS compliance',
      'AI-generated daily construction summary ready to publish',
      'NDT auditor access for independent weld monitoring',
    ],
  },
  {
    pill: 'Field', color: 'field',
    title: 'Field Inspectors',
    points: [
      '29 activity types with specialized log forms',
      'Full offline capability — works with no connectivity',
      'OCR ticket scanning — scan contractor ticket, auto-populate data',
      'GPS-tagged photos, digital signatures, AI field guide assistant',
    ],
  },
  {
    pill: 'QC', color: 'qc',
    title: 'Welding Chiefs',
    points: [
      'Welder performance tracking with repair rate analysis',
      'WPS compliance monitoring — material and filler validation',
      'AI-generated daily welding reports with digital signature',
      'Weld data tracking across mainline, tie-in, and section crews',
    ],
  },
  {
    pill: 'Admin', color: 'ops',
    title: 'Project Administrators',
    points: [
      'Full document vault with ITP sign-off matrix',
      'Project handover package generator with SHA-256 manifest',
      'Rate card management, user provisioning, org configuration',
      'Owner DC transmittal tracking and sync status management',
    ],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="sec">
      <div className="wrap">
        <p className="label">Who it&apos;s for</p>
        <h2 className="h2">Six roles. One platform.<br />Every perspective covered.</h2>
        <div className={styles.grid}>
          {roles.map((r) => (
            <div key={r.title} className={styles.card}>
              <span className={`${styles.pill} ${styles[r.color]}`}>{r.pill}</span>
              <h3 className={styles.title}>{r.title}</h3>
              <ul className={styles.list}>
                {r.points.map((p) => (
                  <li key={p} className={styles.item}>
                    <span className={styles.tick}>✓</span>
                    <span>{p}</span>
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
