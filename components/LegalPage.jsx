import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { EFFECTIVE_DATE } from '@/lib/legal';
import styles from './LegalPage.module.css';

export default function LegalPage({ title, children }) {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.eyebrow}>Legal</div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.meta}>Effective {EFFECTIVE_DATE}</div>
        <div className={styles.body}>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export { styles as legalStyles };
