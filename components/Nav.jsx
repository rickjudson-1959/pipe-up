'use client';

import Link from 'next/link';
import Logo from './Logo';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <Logo size={40} />
        <div className={styles.brandText}>
          <span className={styles.brandName}>Pipe-Up</span>
          <span className={styles.brandTag}>Lead. Connect. Learn.</span>
        </div>
      </Link>

      <div className={styles.links}>
        <Link href="#how">How it works</Link>
        <Link href="#features">Features</Link>
        <Link href="#audience">Who it&apos;s for</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <Link href="#contact" className={styles.cta}>
        Request a demo
      </Link>
    </nav>
  );
}
