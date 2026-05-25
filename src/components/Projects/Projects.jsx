import styles from './Projects.module.css';
import { projects, profile } from '../../data/content.js';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.index}>04 / Selected Work</span>
          <h2 className={styles.title}>
            Things I've <span className={styles.titleMuted}>shipped.</span>
          </h2>
          <span className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <article key={p.name} className={`${styles.card} reveal`}>
              <div className={styles.cardTop}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.tags}>
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>

              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.description}</p>

              {p.metrics && (
                <div className={styles.metrics}>
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className={styles.metricValue}>{m.value}</div>
                      <div className={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.actions}>
                <a href={profile.socials.github} target="_blank" rel="noreferrer">
                  GitHub
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="#contact">Discuss</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
