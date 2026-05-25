import styles from './Skills.module.css';
import { skills } from '../../data/content.js';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.index}>03 / Skills</span>
          <h2 className={styles.title}>The toolkit.</h2>
          <span className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {skills.map((g) => (
            <div key={g.group} className={`${styles.card} reveal`}>
              <div className={styles.cardHead}>
                <span className={styles.cardLabel}>{g.group}</span>
                <span className={styles.cardCount}>{String(g.items.length).padStart(2, '0')}</span>
              </div>
              <ul className={styles.chips}>
                {g.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
