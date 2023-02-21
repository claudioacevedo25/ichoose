import styles from './skeleton.module.css'

export const Skeleton = () => (
  <div className={styles.loader}>
    <div className={styles.wrapper}>
      <div className={styles.line_1} />
      <div className={styles.line_2} />
      <div className={styles.line_3} />
      <div className={styles.line_4} />
    </div>
  </div>
)
