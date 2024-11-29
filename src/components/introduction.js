import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import profilePic from "../imgs/profile.svg";
import Weixin from "../imgs/weixin.jpg";
import styles from "@styles/introduction.module.scss";

export default function Introduction() {
  const [position, setPosition] = useState("前端开发");
  const positionLabel = "前端开发";
  const connectLabel = "联系我";
  useEffect(() => {
    const timer = setTimeout(() => {
      if (position === "前端开发") {
        setPosition(connectLabel);
      } else {
        setPosition(positionLabel);
      }
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [position]);
  const [weixinDiaplay, setWeixinDiaplay] = useState("none");
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
    { value: "所在地区：", label: "石家庄市" }
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
          <div
            className={`${
              position === "前端开发" ? styles.position : styles.connect
            }`}
          >
            <span
              onClick={() =>
                position === "联系我" &&
                (weixinDiaplay === "none"
                  ? setWeixinDiaplay("block")
                  : setWeixinDiaplay("none"))
              }
            >
              {position}
            </span>
            <Image
              src={Weixin}
              alt="weixin"
              width={0}
              height={0}
              style={{ display: weixinDiaplay, width: "100%", height: "auto" }}
            />
          </div>
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
