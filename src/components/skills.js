import React, { useState } from "react";
import styles from "@styles/skills.module.scss";
import Image from "next/image";
import html from "../imgs/skill/html.svg";
import css from "../imgs/skill/css.svg";
import javascript from "../imgs/skill/javascript.svg";
import vue from "../imgs/skill/vue.svg";
import axios from "../imgs/skill/axios.svg";
import webpack from "../imgs/skill/webpack.svg";
import figma from "../imgs/skill/figma.svg";
import echarts from "../imgs/skill/echarts.svg";
import highcharts from "../imgs/skill/highcharts.svg";
import element from "../imgs/skill/element.svg";
import antd from "../imgs/skill/antd.svg";
import iview from "../imgs/skill/iview.svg";
import git from "../imgs/skill/git.svg";
import node from "../imgs/skill/node.svg";
import react from "../imgs/skill/react.svg";
import reactnative from "../imgs/skill/reactnative.svg";

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
    { label: "了解", index: 3, skills: [{ label: "React Native", src: reactnative }] },
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
            <div className={`${styles.imgDiv}`}>
              <Image src={item.src} alt={item.label} />
            </div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
