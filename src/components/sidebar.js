import Image from 'next/image'
import styles from '@styles/sidebar.module.scss'
import about from '../imgs/about.svg'
import skills from '../imgs/skills.svg'
import projects from '../imgs/projects.svg'
import experience from '../imgs/experience.svg'

export default function Sidebar() {
    const iconList = [
        { value: about, label: 'about' },
        { value: skills, label: 'skills' },
        { value: projects, label: 'projects' },
        { value: experience, label: 'experience' }
    ]
    const handleClick = (id) => {  
        const targetElement = document.getElementById(id);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <article className={`${styles.sidebarMain}`}>
            {iconList.map((item, index) => (
                <div className={`${styles.imgDiv}`} key={item.label} onClick={() => handleClick(item.label)}>
                    <Image src={item.value} alt={item.label} />
                </div>
            ))}
        </article>
    )
}
