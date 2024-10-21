import styles from "@styles/projects.module.scss";
export default function Projects() {
  return (
    <div className={`${styles.projects}`}>
      <div className={`${styles.title}`}>
        Featured <span className={`${styles.title_color}`}>Projects</span>
      </div>
      <div className={`${styles.content}`}>内容</div>
    </div>
  );
}
