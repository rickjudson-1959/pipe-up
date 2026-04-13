import Link from 'next/link';
import Logo from './Logo';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.brand}>
        <Logo size={32} />
        <div>
          <span className={styles.brandName}>Pipe-Up</span>
          <span className={styles.brandTag}>Lead. Connect. Learn.</span>
        </div>
      </Link>

      <div className={styles.links}>
        <Link href="#how">How it works</Link>
        <Link href="#features">Features</Link>
        <Link href="#contact">Demo</Link>
        <a href="mailto:rjudson@protonmail.com">Contact</a>
      </div>

      <span className={styles.copy}>
        © {year} Pipe-Up · pipe-up.ca
      </span>
    </footer>
  );
}
