import Introduction from '@comp/introduction.js';
import Sidebar from '@comp/sidebar.js';
import About from '@comp/about.js'
import Skills from '@comp/skills.js'
import Projects from '@comp/projects.js'
import Experience from '@comp/experience.js'
import styles from '@styles/layouts.module.scss'

export default function Layouts() {
  return (
    <article className={`${styles.layouts}`}>
      <aside className={`${styles.introduction}`}>
        <Introduction></Introduction>
      </aside>
      <main className={`${styles.main}`}>
        <div id="about">
          <About></About>
        </div>
        <div id="skills">
          <Skills></Skills>
        </div>
        <div id="projects">
          <Projects></Projects>
        </div>
        <div id="experience">
          <Experience></Experience>
        </div>
      </main>
      <aside className={`${styles.sidebar}`}>
        <Sidebar></Sidebar> 
      </aside>
    </article>
  )
}
