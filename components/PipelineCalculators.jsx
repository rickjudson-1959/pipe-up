import styles from './PipelineCalculators.module.css';

const CALCULATOR_URL =
  'https://pipeline-calculators.vercel.app/calculators/hydrostatic-test';

export default function PipelineCalculators() {
  return (
    <section id="calculators" className={`sec ${styles.section}`}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <p className="label">Free tool</p>
          <h2 className="h2">Hydrostatic test calculator</h2>
          <p className={`lead ${styles.lead}`}>
            A free hydrostatic test calculator for field and office use.
          </p>
        </div>
        <a
          href={CALCULATOR_URL}
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open free hydrostatic calculator →
        </a>
      </div>
    </section>
  );
}
