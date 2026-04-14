import styles from './FounderAuthority.module.css';

export default function FounderAuthority() {
  return (
    <section className={`sec alt ${styles.section}`}>
      <div className={`wrap ${styles.inner}`}>
        <p className="label">Built by Construction Managers</p>
        <blockquote className={styles.quote}>
          Developed from over 20 years of Construction Management experience,
          Pipe-Up was engineered to provide owner organizations with the technical
          oversight necessary to protect project capital. Our platform provides a
          single source of truth from the ditch to the boardroom.
        </blockquote>
      </div>
    </section>
  );
}
