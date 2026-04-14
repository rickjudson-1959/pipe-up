'use client';

import Link from 'next/link';
import Logo from './Logo';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <Logo size={38} />
        <div className={styles.brandText}>
          <span className={styles.brandName}>Pipe-Up</span>
          <span className={styles.brandTag}>Lead. Connect. Learn.</span>
        </div>
      </Link>

      <div className={styles.links}>
        <Link href="#platform">Platform</Link>
        <Link href="#ai">AI Features</Link>
        <Link href="#roles">Who It&apos;s For</Link>
        <Link href="#field">Field Tools</Link>
        <Link href="#contact">Demo</Link>
      </div>

      <Link href="#contact" className={styles.cta}>
        Request a demo
      </Link>
    </nav>
  );
}
