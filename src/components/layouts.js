import Introduction from '@comp/introduction.js';
import styles from '@styles/layouts.module.scss'

export default function Layouts() {
  return (
    <article className={`${styles.layouts}`}>
      <aside className={`${styles.introduction}`}>
        <Introduction></Introduction>
      </aside>
      <main className={`${styles.main}`}>
        <div style={{ height: '200px' }}>111</div>
        <div style={{ height: '200px' }}>222</div>
        <div style={{ height: '200px' }}>333</div>
        <div style={{ height: '200px' }}>444</div>
      </main>
      <aside className={`${styles.sidebar}`}>Sidebar</aside>
    </article>
  )
}
