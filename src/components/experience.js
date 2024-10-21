import styles from "@styles/experience.module.scss";
export default function Experience() {
  return (
    <div className={`${styles.experience}`}>
      <div className={`${styles.title}`}>
        Work <span className={`${styles.title_color}`}>Experience</span>
      </div>
      <div className={`${styles.content}`}>内容</div>
    </div>
  );
}
