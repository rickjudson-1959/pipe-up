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
          <span className={styles.name}>Pipe-Up</span>
          <span className={styles.tag}>Lead. Connect. Learn.</span>
        </div>
      </Link>
      <div className={styles.links}>
        <Link href="#platform">Platform</Link>
        <Link href="#ai">AI Features</Link>
        <Link href="#roles">Who It&apos;s For</Link>
        <Link href="#field">Field Tools</Link>
        <Link href="#contact">Demo</Link>
        <a href="mailto:rjudson@protonmail.com">Contact</a>
      </div>
      <span className={styles.copy}>© {year} Pipe-Up · pipe-up.ca</span>
    </footer>
  );
}
