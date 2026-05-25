import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { profile } from '../../data/content.js';

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIdx((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.grid} aria-hidden />

      <div className={styles.container}>
        <span className={styles.eyebrow}>
          <span className={styles.pulse} /> {profile.availability}
        </span>

        <h1 className={styles.title}>
          <span className={styles.line}>{profile.name.split(' ')[0]}</span>
          <span className={styles.lineMuted}>{profile.name.split(' ')[1]}.</span>
        </h1>

        <div className={styles.roleWrap}>
          <span className={styles.roleLabel}>— I'm a</span>
          <div className={styles.roleSwitcher}>
            {profile.roles.map((r, i) => (
              <span
                key={r}
                className={`${styles.role} ${i === roleIdx ? styles.roleActive : ''}`}
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        <p className={styles.tagline}>{profile.tagline}</p>

        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>
            View work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className={styles.btnGhost}>Get in touch</a>
          <a
            href={profile.resume}
            className={styles.btnGhost}
            download
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>

        <div className={styles.meta}>
          <div><span>01</span> Based in {profile.location}</div>
          <div><span>02</span> AI / ML · Voice · RAG</div>
          <div><span>03</span> IIT Jodhpur · '25</div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
