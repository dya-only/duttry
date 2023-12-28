import { Fragment } from 'react'
import Nav from '../../components/nav/nav'
import styles from './MainPage.module.css'

export default function MainPage() {
  return (
    <Fragment>
      <Nav />

      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.textbox}>
              <strong className={styles.titleStyle}>엔트리 10주년 '브랜드 필름'</strong>
              <p className={styles.subTitleStyle}>가슴이 웅장해지는 48초, 지금 확인해 보세요!</p>
              <a className={styles.bannerBtn} href="https://campaign.naver.com/entry-10th-anniversary/">자세히 보기</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.staffContainer}>
        <div className={styles.staff}>
          {/* Staff content */}
        </div>
      </div>

      <div className={styles.popularContainer}>
        <div className={styles.popularMenu}>
          <h2>인기 작품</h2>
          <a href="/" className={styles.popularBtn}>
            <span>더 보기</span>
          </a>
        </div>
      </div>
    </Fragment>
  )
}