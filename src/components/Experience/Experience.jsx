import styles from './Experience.module.css';
import { experience } from '../../data/content.js';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.index}>02 / Experience</span>
          <h2 className={styles.title}>Where I've built.</h2>
          <span className={styles.divider} />
        </div>

        <ol className={styles.timeline}>
          {experience.map((item, i) => (
            <li key={i} className={`${styles.item} reveal`}>
              <div className={styles.left}>
                <span className={styles.period}>{item.period}</span>
              </div>
              <div className={styles.dot} />
              <div className={styles.right}>
                <h3 className={styles.role}>{item.role}</h3>
                <div className={styles.company}>{item.company}</div>
                <ul className={styles.points}>
                  {item.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
