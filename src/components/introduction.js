import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import profilePic from "../imgs/profile.svg";
import styles from "@styles/introduction.module.scss";

export default function Introduction() {
  const [position, setPosition] = useState("前端开发");
  // const latestPosition = useRef(position);
  // const positionLabel = "前端开发";

  // useEffect(() => {
  //   latestPosition.current = position;
  // }, [position]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     let label =
  //       latestPosition.current +
  //       positionLabel.charAt(latestPosition.current.length);
  //     setPosition(label);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  useEffect(() => {
    for (let i = 0; i < skill.length; i++) {
      var canvas = document.getElementById("canvas" + i);
      var value = canvas.innerHTML;
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      let x = 36;
      let y = 36;
      let radius = 34;
      let startAngle = +Math.PI;
      let endAngle = 2 * Math.PI * value + Math.PI;

      ctx.font = "normal 16px sans-serif";
      ctx.fillText(value * 100 + "%", 20, 42);
      ctx.strokeStyle = "#00bc91";
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.stroke();
    }
  }, []);
  const desc = [
    { value: "学校：", label: "河北经贸大学" },
    { value: "学历：", label: "本科" },
    { value: "出生年月：", label: "199303" },
  ];
  const skill = [
    { value: "html", label: 0.9 },
    { value: "css", label: 0.9 },
    { value: "js", label: 0.9 },
    { value: "vue", label: 0.9 },
    { value: "react", label: 0.6 },
  ];
  return (
    <article className={`${styles.introduction}`}>
      <div className={`${styles.introduction_top}`}>
        <div className={`${styles.imgDiv}`}>
          <Image src={profilePic} alt="Picture of the author" />
        </div>
        <div className={`${styles.label}`}>
          <div className={`${styles.name}`}>白晨阳</div>
          <div className={`${styles.position}`}>{position}</div>
        </div>
      </div>
      <div className={`${styles.introduction_center}`}>
        {desc.map((item, index) => (
          <div className={`${styles.desc}`} key={index}>
            <span>{item.value}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.introduction_bottom}`}>
        <span>技能：</span>
        <div className={`${styles.skills}`}>
          {skill.map((item, index) => (
            <div className={`${styles.skill}`} key={index}>
              {/* <div>{item.label}</div> */}
              <canvas id={"canvas" + index} width="72" height="72">
                {item.label}
              </canvas>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
