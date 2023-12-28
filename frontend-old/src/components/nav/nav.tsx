import styles from './nav.module.css'

export default function Nav() {
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <a href="/" />
        </h1>

        <nav>
          <ul>
            <li><a href="">생각하기</a></li>
            <li><a href="/ws/new">만들기</a></li>
            <li><a href="">공유하기</a></li>
            <li><a href="">커뮤니티</a></li>
          </ul>
        </nav>

        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <a className={styles.icon}>
              <img className={styles.search} src="https://playentry.org/img/IcoTopSearch.svg" alt="" />
            </a>

            {/* isLogined */}
            {/* <a className={styles.icon}>
              <img className={styles.notice} src="https://playentry.org/img/IcoTopAlarm.svg" alt="" />
            </a>
            <a className={styles.icon} href="/">
              <img className={styles.profile} src="https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg" alt="" />
            </a> */}

            <a className={styles.icon} href="">
              <div className={styles.login}>로그인</div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}