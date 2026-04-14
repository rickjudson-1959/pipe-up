import styles from './Modules.module.css';

const modules = [
  {
    icon: '📋',
    name: 'Inspector Field Journal',
    desc: '29 activity types with specialized logs. GPS-synced KP, photo capture, digital signatures, quality checklists, and full offline PWA capability for remote field conditions.',
    tag: 'Core module',
    featured: true,
  },
  {
    icon: '🔍',
    name: 'LEM Reconciliation',
    desc: '4-panel visual comparison: contractor LEM vs. contractor ticket vs. inspector photo vs. costed report. AI-powered OCR extraction with fuzzy name matching and variance flagging.',
    tag: 'AI-powered',
  },
  {
    icon: '📊',
    name: 'Executive Dashboards',
    desc: 'CMT, EVM, Earned Value Management, and FEED Intelligence modules. Real-time progress tracking, cost variance, and EPCM accuracy grading across the full project spread.',
    tag: 'Real-time',
  },
  {
    icon: '🤖',
    name: 'AI Agent Watcher',
    desc: 'Real-time anomaly detection across all submitted tickets. Flags WPS material mismatches, excessive hours, KP boundary violations, and management drag — automatically.',
    tag: 'AI-powered',
  },
  {
    icon: '📁',
    name: 'Document Control',
    desc: 'Project Document Vault with ITP sign-off matrix, transmittal generator, owner DC compatibility, and full project handover package with SHA-256 integrity verification.',
    tag: 'Compliance',
  },
  {
    icon: '⚡',
    name: 'Welding Chief Dashboard',
    desc: 'Welder performance tracking, WPS compliance monitoring, repair rate analysis, and AI-generated daily welding reports with digital signature for turnover documentation.',
    tag: 'Role-based',
  },
  {
    icon: '💰',
    name: 'Inspector Invoicing',
    desc: "Complete payroll pipeline for owner's inspectors. Timesheet entry, rate card configuration, hire-on packages, and PDF invoice generation with approval workflow.",
    tag: 'Finance',
  },
  {
    icon: '🗺️',
    name: 'Regulatory Compliance',
    desc: 'Automated permit parsing against daily crew KP positions. Generates compliance maps and Word reports flagging fisheries windows, environmental zones, and ground disturbance permits — sourced from your provincial or state environmental agency permits.',
    tag: 'Automated',
  },
];

export default function Modules() {
  return (
    <section id="platform" className={`sec ${styles.section}`}>
      <div className="wrap">
        <div className={styles.intro}>
          <div>
            <p className="label">Platform overview</p>
            <h2 className="h2">One platform.<br />Every phase of construction.</h2>
          </div>
          <p className={`lead ${styles.introLead}`}>
            Pipe-Up is not a billing tool with extra features. It&apos;s a purpose-built
            operating system for pipeline construction oversight — built from 20+ years
            of field experience.
          </p>
        </div>
        <div className={styles.grid}>
          {modules.map((m) => (
            <div key={m.name} className={`${styles.card} ${m.featured ? styles.featured : ''}`}>
              <div className={styles.icon}>{m.icon}</div>
              <p className={styles.name}>{m.name}</p>
              <p className={styles.desc}>{m.desc}</p>
              <span className={styles.tag}>{m.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
