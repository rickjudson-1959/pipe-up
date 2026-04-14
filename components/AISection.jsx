import styles from './AISection.module.css';

const aiPoints = [
  {
    title: 'Agent Watcher — real-time anomaly detection',
    body: '7 automated checks run against every submitted ticket: WPS material mismatches, hours exceeding thresholds, KP boundary violations, management drag spikes, and more. Flags issues before they become disputes.',
  },
  {
    title: 'Claude Vision OCR — zero manual entry',
    body: 'Upload any contractor PDF — LEM sheets, daily tickets, equipment logs — and structured billing data is extracted automatically. Labour names, classifications, RT/OT hours, rates, and totals.',
  },
  {
    title: 'AI-generated daily narratives',
    body: 'The Chief Inspector dashboard generates AI executive summaries from all inspector reports — key focus points, safety status, production highlights — ready to publish or deliver to ownership.',
  },
  {
    title: 'Regulatory compliance automation',
    body: 'Scripts parse environmental permit PDFs from your provincial or state regulator and cross-reference daily crew KP positions against regulatory zone types. Generates compliance maps and Word reports with crew-level alerts.',
  },
];

const flags = [
  { type: 'crit', label: 'Critical', title: 'WPS material mismatch detected', sub: 'X65 Steel used with WPS-02 — only X70/X80 approved · Block #3, KP 24+600' },
  { type: 'warn', label: 'Warning', title: 'Hours exceeded — 147% of standard workday', sub: 'Mainline spread · 14.2 avg billed hrs · Ticket #1042' },
  { type: 'warn', label: 'Warning', title: 'Management drag spike — 34% of labour flagged', sub: 'Permit delay · 11 workers standing by · KP 31+100–31+800' },
  { type: 'ok', label: 'Clear', title: 'All other tickets within parameters', sub: '18 tickets reviewed · 2 flags requiring attention' },
];

export default function AISection() {
  return (
    <section id="ai" className={`sec alt ${styles.section}`}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <p className="label">AI capabilities</p>
            <h2 className="h2">Intelligence built into<br />every layer.</h2>
            <p className={`lead ${styles.leadSpaced}`}>
              Pipe-Up uses AI throughout the platform — not as a chatbot feature,
              but embedded in the workflows that matter most to owner organizations.
            </p>
            <div className={styles.list}>
              {aiPoints.map((p) => (
                <div key={p.title} className={styles.item}>
                  <div className={styles.dot} />
                  <div>
                    <h4 className={styles.itemTitle}>{p.title}</h4>
                    <p className={styles.itemBody}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualHeader}>
              <div className={styles.pulse} />
              <span>AI Agent — live monitoring</span>
            </div>
            {flags.map((f) => (
              <div key={f.title} className={`${styles.flag} ${styles[f.type]}`}>
                <span className={`${styles.flagBadge} ${styles[`badge_${f.type}`]}`}>{f.label}</span>
                <div>
                  <p className={styles.flagTitle}>{f.title}</p>
                  <p className={styles.flagSub}>{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
