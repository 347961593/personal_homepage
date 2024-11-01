import Image from "next/image";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import styles from "@styles/sidebar.module.scss";
import home from "../imgs/sidebar/home.svg";
import about from "../imgs/sidebar/about.svg";
import skills from "../imgs/sidebar/skills.svg";
import projects from "../imgs/sidebar/projects.svg";
import experience from "../imgs/sidebar/experience.svg";

export default function Sidebar() {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "#00BC91",
      fontSize: 14,
      cursor: "pointer"
    },
  }));
  const iconList = [
    { value: home, label: "home" },
    { value: about, label: "about" },
    { value: skills, label: "skills" },
    { value: projects, label: "projects" },
    { value: experience, label: "experience" },
  ];
  const handleClick = (id) => {
    const targetElement = document.getElementById(id);
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <article className={`${styles.sidebarMain}`}>
      {iconList.map((item, index) => (
        <div
          className={`${styles.imgDiv}`}
          key={item.label}
          onClick={() => handleClick(item.label)}
        >
          <LightTooltip title={item.label} placement="left">
            <Image src={item.value} alt={item.label} width={24} height={24} />
          </LightTooltip>
        </div>
      ))}
    </article>
  );
}
