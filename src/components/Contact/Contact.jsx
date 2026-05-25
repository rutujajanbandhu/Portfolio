import styles from './Contact.module.css';
import { profile } from '../../data/content.js';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.inner} reveal`}>
          <span className={styles.index}>06 / Contact</span>
          <h2 className={styles.title}>
            Have an idea worth <br />
            <span className={styles.titleAccent}>building?</span>
          </h2>
          <p className={styles.sub}>
            I'm open to interesting AI/ML problems, voice-agent collaborations and product work.
            The fastest way to reach me is email.
          </p>

          <a href={`mailto:${profile.email}`} className={styles.emailBtn}>
            <span>{profile.email}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <div className={styles.socials}>
            <a href={profile.resume} download target="_blank" rel="noreferrer">Resume</a>
            <span>·</span>
            <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <span>·</span>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>·</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
