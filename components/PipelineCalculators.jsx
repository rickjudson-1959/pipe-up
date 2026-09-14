import styles from './PipelineCalculators.module.css';

const TOOLKIT_URL = 'https://pipeline-calculators.vercel.app/';

export default function PipelineCalculators() {
  return (
    <section id="calculators" className={`sec ${styles.section}`}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <p className="label">Free tools</p>
          <h2 className="h2">Pipeline calculators</h2>
          <p className={`lead ${styles.lead}`}>
            Free field and office tools for hydrostatic test, wall thickness,
            pipe volume, gas flow, and B31G.
          </p>
        </div>
        <a
          href={TOOLKIT_URL}
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open pipeline calculators →
        </a>
      </div>
    </section>
  );
}
