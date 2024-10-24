import Image from "next/image";
import styles from "@styles/about.module.scss";
import right from "../imgs/right.gif";

export default function About() {
  const introduction =
    "您好，我叫白晨阳，我正在求职前端开发工作。我的工作能力包括：";
  const advantagesList = [
    "系统性前端知识与技术。",
    "良好的沟通协调能力。",
    "涉及各类技术栈的前端开发项目经验。",
  ];
  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.title}`}>
        About <span className={`${styles.title_color}`}>Me</span>
      </div>
      <div>{introduction}</div>
      {advantagesList.map((item, index) => (
        <div className={`${styles.desc}`} key={index}>
          <Image src={right} alt="" width={32} height={32} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
