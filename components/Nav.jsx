'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Nav.module.css';

const LINKS = [
  { href: '/#platform', label: 'Platform' },
  { href: '/#ai', label: 'AI Features' },
  { href: '/#roles', label: "Who It's For" },
  { href: '/#field', label: 'Field Tools' },
  { href: '/#contact', label: 'Demo' },
];

export default function Nav() {
  // Phones and narrow windows (900px and under): the links fold into a menu opened by the button (Rick, 2026-11-18).
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
        <Logo size={38} />
        <div className={styles.brandText}>
          <span className={styles.brandName}>Pipe-Up</span>
          <span className={styles.brandTag}>Lead. Connect. Learn.</span>
        </div>
      </Link>

      <div className={styles.links}>
        {LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
      </div>

      <div className={styles.right}>
        <Link href="/#contact" className={styles.cta} onClick={() => setOpen(false)}>
          Request a demo
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? `${styles.bars} ${styles.barsOpen}` : styles.bars} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div id="site-menu" className={styles.menu}>
          {LINKS.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
        </div>
      )}
    </nav>
  );
}
