import { useState } from 'react';
import styles from './Navbar.module.css';
import useActiveSection from '../../hooks/useActiveSection.js';

const sections = ['home', 'about', 'experience', 'skills', 'projects', 'achievements', 'contact'];

export default function Navbar() {
  const active = useActiveSection(sections);
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <a href="#home" className={styles.brand}>
        <span className={styles.brandMark}>RJ</span>
        <span className={styles.brandName}>Rutuja</span>
      </a>

      <nav className={`${styles.links} ${open ? styles.open : ''}`}>
        {sections.slice(1).map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? styles.active : ''}
            onClick={() => setOpen(false)}
          >
            <span className={styles.dot} />
            {id}
          </a>
        ))}
      </nav>

      <button
        className={styles.menuBtn}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={open ? styles.barOpen1 : ''} />
        <span className={open ? styles.barOpen2 : ''} />
      </button>
    </header>
  );
}
