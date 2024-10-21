import React, { useState } from "react";
import styles from "@styles/skills.module.scss";
import Image from "next/image";
import html from "../imgs/skills/html.svg";
import css from "../imgs/skills/css.svg";
import javascript from "../imgs/skills/javascript.svg";
import vue from "../imgs/skills/vue.svg";
import axios from "../imgs/skills/axios.svg";
import webpack from "../imgs/skills/webpack.svg";
import figma from "../imgs/skills/figma.svg";
import echarts from "../imgs/skills/echarts.svg";
import highcharts from "../imgs/skills/highcharts.svg";
import element from "../imgs/skills/element.svg";
import antd from "../imgs/skills/antd.svg";
import iview from "../imgs/skills/iview.svg";
import git from "../imgs/skills/git.svg";
import node from "../imgs/skills/node.svg";
import react from "../imgs/skills/react.svg";
import reactnative from "../imgs/skills/reactnative.svg";

export default function Skills() {
  const [skilledIndex, setSkilledIndex] = useState(0);
  const skilledList = [
    {
      label: "熟练掌握",
      index: 0,
      skills: [
        { label: "Html", src: html },
        { label: "CSS", src: css },
        { label: "JavaScript", src: javascript },
        { label: "Vue", src: vue },
        { label: "Axios", src: axios },
        { label: "webpack", src: webpack },
        { label: "ECcharts", src: echarts },
        { label: "HighCharts", src: highcharts },
        { label: "Element", src: element },
        { label: "Ant Design", src: antd },
        { label: "iView", src: iview },
      ],
    },
    {
      label: "常用",
      index: 1,
      skills: [
        { label: "git", src: git },
        { label: "node", src: node },
        { label: "Figma", src: figma },
      ],
    },
    { label: "熟悉", index: 2, skills: [{ label: "React", src: react }] },
    {
      label: "了解",
      index: 3,
      skills: [{ label: "React Native", src: reactnative }],
    },
  ];
  const handleClick = (index) => {
    setSkilledIndex(index);
  };
  return (
    <div className={`${styles.skills}`}>
      <div className={`${styles.title}`}>
        <span className={`${styles.title_left}`}>
          My <span className={`${styles.title_color}`}>Skills</span>
        </span>
        <div className={`${styles.title_right}`}>
          {skilledList.map((item, index) => (
            <div
              key={index}
              className={
                skilledIndex === item.index
                  ? `${styles.tab} ${styles.active}`
                  : `${styles.tab}`
              }
              onClick={() => handleClick(item.index)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.content}`}>
        {skilledList[skilledIndex].skills.map((item, index) => (
          <div className={`${styles.iconAndLabel}`} key={index}>
            <Image src={item.src} alt={item.label} width={64} height={64} />
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
