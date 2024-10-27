import styles from "@styles/projects.module.scss";
import Image from "next/image";
import oasis from "../imgs/oasis.svg";
import click from "../imgs/click.svg";
import favicon from "../../public/favicon.png";
function IntroduceCard(props) {
  return (
    <div className={`${styles.introduceCard}`}>
      <div className={`${styles.cardTitle}`}>{props.title}</div>
      <div className={`${styles.cardContent}`}>{props.content}</div>
      <div className={`${styles.cardFoot}`}>{props.foot}</div>
    </div>
  );
}
function CardContent(props) {
  return props.list.map((item, index) => (
    <IntroduceCard
      key={index}
      title={item.title}
      content={item.content}
      foot={item.foot}
    />
  ));
}
const oasisTitle = (
  <a
    href="https://www.oasisscan.com/"
    target="_blank"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Image src={oasis} alt="oasis" height={40} />
    <Image src={click} alt="" width={20} height={20} />
  </a>
);
const myhomepageTitle = (
  <a
    href="https://bcy-resume.romever.fun/"
    target="_blank"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Image src={favicon} alt="myhomepage" height={24} />
      <span>My Homepage</span>
    </div>
    <Image src={click} alt="" width={20} height={20} />
  </a>
);
const projList = [
  {
    title: oasisTitle,
    content:
      "这是一个区块链项目，基础项目是名为oasis的区块链公链。此项目是以社区身份开发的区块链浏览器，从众多竞争者中脱颖而出，此浏览器目前是项目方主推浏览器，知名加密货币交易所币安的oasis默认跳转浏览器。",
    foot: "技术栈：vue、iView、Nuxt、highCharts",
  },
  {
    title: myhomepageTitle,
    content:
      "这是我的个人主页，大家可以访问了解我的个人信息、工作技能、参与项目、工作经历等。",
      foot: "技术栈：react、next、material"
  },
  {
    title: "人力智慧运营",
    content:
      "这是一个河北联通的人力管理系统，基于vue框架进行开发。涉及员工管理、薪酬管理等人力相关功能。开发周期长达五年，功能页面多达近千，涉及各类技术栈。",
    foot: "技术栈：vue、ant-design、eCharts",
  },
  {
    title: "人力专区",
    content:
      "这是一个河北联通的人力管理H5系统，嵌入在多个联通APP当中，方便用户在手机上进行人力相关信息查看操作。",
    foot: "技术栈：vue、vant",
  },
];
export default function Projects() {
  return (
    <div className={`${styles.projects}`}>
      <div className={`${styles.title}`}>
        Featured <span className={`${styles.title_color}`}>Projects</span>
      </div>
      <div className={`${styles.content}`}>
        <div>
          {
            <CardContent
              list={projList.slice(0, Math.ceil(projList.length / 2))}
            />
          }
        </div>
        <div>
          {
            <CardContent
              list={projList.slice(
                Math.ceil(projList.length / 2),
                projList.length
              )}
            />
          }
        </div>
        {/* {projList.map((item, index) => (
          <IntroduceCard
            key={index}
            title={item.title}
            content={item.content}
          />
        ))} */}
      </div>
    </div>
  );
}
