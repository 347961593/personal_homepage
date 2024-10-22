import Image from 'next/image'
import profilePic from '../imgs/profile.svg'
import styles from '@styles/introduction.module.scss'

export default function Introduction() {
  const desc = [
    { value: 'school', label: '河北经贸大学' },
    { value: 'age', label: '31' }
  ]
  const skill = [
    { value: 'html', label: '90%' },
    { value: 'css', label: '90%' },
    { value: 'js', label: '90%' },
    { value: 'vue', label: '90%' },
    { value: 'react', label: '60%' }
  ]
  return (
    <article className={`${styles.introduction}`}>
      <div className={`${styles.introduction_top}`}>
        <div className={`${styles.imgDiv}`}>
          <Image src={profilePic} alt="Picture of the author" />
        </div>
        <div>
          <span>白晨阳</span>
          <br />
          <span>前端开发</span>
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
        <span>技能</span>
        <div className={`${styles.skill}`}>
          {skill.map((item, index) => (
            <div className={`${styles.skill_item}`} key={index}>
              <div>{item.label}</div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
