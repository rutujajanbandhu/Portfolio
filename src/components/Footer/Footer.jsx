import styles from './Footer.module.css';
import { profile } from '../../data/content.js';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.mark}>RJ</span>
          <span className={styles.copy}>© {new Date().getFullYear()} {profile.name}. Crafted with care.</span>
        </div>
        <div className={styles.right}>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
