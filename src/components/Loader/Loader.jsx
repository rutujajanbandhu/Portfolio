import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.inner}>
        <span className={styles.mark}>RJ</span>
        <div className={styles.barWrap}>
          <div className={styles.bar} />
        </div>
        <span className={styles.text}>Loading portfolio</span>
      </div>
    </div>
  );
}
