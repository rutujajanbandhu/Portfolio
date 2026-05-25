import styles from './About.module.css';
import { about } from '../../data/content.js';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.index}>01 / About</span>
          <h2 className={styles.title}>
            Building AI systems that <span className={styles.titleMuted}>ship in the real world.</span>
          </h2>
          <span className={styles.divider} />
        </div>

        <div className={styles.body}>
          <div className={`${styles.bodyText} reveal`}>
            {about.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="reveal">
            <div className={styles.statsLabel}>— Impact so far</div>
            <div className={styles.stats}>
              {about.stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
