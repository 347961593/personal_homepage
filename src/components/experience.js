import styles from "@styles/experience.module.scss";
export default function Experience() {
  const workList = [
    {
      time: "2022.07-2023.09",
      position: "前端开发",
      company: "北京东方国信科技股份有限公司",
    },
    {
      time: "2021.05-2022.06",
      position: "前端开发",
      company: "石家庄众烁网络科技有限公司",
    },
    {
      time: "2019.01-2019.12",
      position: "理财顾问",
      company: "兴业证券河北分公司",
    },
    {
      time: "2015.07-2018.12",
      position: "客户经理",
      company: "工商银行邯郸分行",
    },
  ];
  const educationList = [
    {
      time: "2011.09-2015.06",
      school: "河北经贸大学",
      major: "资产评估-学士",
    },
    {
      time: "2008.09-2011.06",
      school: "邯郸四中",
      major: "理科",
    },
  ];
  return (
    <div className={`${styles.experience}`}>
      <div className={`${styles.title}`}>
        Work & Education{" "}
        <span className={`${styles.title_color}`}>Experience</span>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.contentLeft}`}>
          {workList.map((item, index) => (
            <div className={`${styles.detail}`} key={index}>
              <div className={`${styles.time}`}>{item.time}</div>
              <div className={`${styles.company}`}>
                <div>{item.position}</div>
                <div>{item.company}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.contentRight}`}>
          {educationList.map((item, index) => (
            <div className={`${styles.detail}`} key={index}>
              <div className={`${styles.time}`}>{item.time}</div>
              <div className={`${styles.school}`}>
                <div>{item.school}</div>
                <div>{item.major}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
