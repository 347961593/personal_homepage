import styles from "@styles/projects.module.scss";
import Image from "next/image";
import oasis from "../imgs/oasis.svg";
import click from "../imgs/click.svg";
function IntroduceCard(props) {
  return (
    <div className={`${styles.introduceCard}`}>
      <div className={`${styles.cardTitle}`}>{props.title}</div>
      <div className={`${styles.cardContent}`}>{props.content}</div>
    </div>
  );
}
const oasisTitle = (
  <a href="https://www.oasisscan.com/" target="_blank" style={{display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
    <Image src={oasis} alt="oasis" height={40} />
    <Image src={click} alt="" width={20} height={20} />
  </a>
);
const projList = [
  {
    title: oasisTitle,
    content:
      "这是一个区块链项目，基础项目是名为oasis的区块链公链。此项目是以社区身份开发的区块链浏览器，从众多竞争者中脱颖而出，此浏览器目前是项目方主推浏览器，知名加密货币交易所币安的oasis默认跳转浏览器。",
  },
  {
    title: "人力智慧运营",
    content:
      "这是一个河北联通的人力管理系统，基于vue框架进行开发。涉及员工管理、薪酬管理等人力相关功能。开发周期长达五年，功能页面多达近千，涉及各类技术栈。",
  },
  {
    title: "人力专区",
    content:
      "这是一个河北联通的人力管理H5系统，嵌入在多个联通APP当中，方便用户在手机上进行人力相关信息查看操作。",
  },
];
export default function Projects() {
  return (
    <div className={`${styles.projects}`}>
      <div className={`${styles.title}`}>
        Featured <span className={`${styles.title_color}`}>Projects</span>
      </div>
      <div className={`${styles.content}`}>
        {projList.map((item, index) => (
          <IntroduceCard
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
