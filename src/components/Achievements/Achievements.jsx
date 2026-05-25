import styles from './Achievements.module.css';
import { achievements } from '../../data/content.js';

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.index}>05 / Recognition</span>
          <h2 className={styles.title}>Milestones.</h2>
          <span className={styles.divider} />
        </div>

        <ul className={styles.list}>
          {achievements.map((a, i) => (
            <li key={a.title} className={`${styles.item} reveal`}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.body}>
                <h3>{a.title}</h3>
                <p>{a.detail}</p>
              </div>
              <span className={styles.arrow}>↗</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
