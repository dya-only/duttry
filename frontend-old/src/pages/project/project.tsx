import styles from './project.module.css';

export default function Project() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.logo}></div>
        </div>
        <input className={styles.name} type="text" maxlength="30" value="성민이 바보" />

        <div className={styles.menuContainer}>
          <div className={styles.menuBtnContainer}>
            <a href="" className={`${styles.menuBtn} ${styles.blockBtn}`}></a>
            <a href="" className={`${styles.menuBtn} ${styles.fileBtn}`}></a>
            <a href="" className={`${styles.menuBtn} ${styles.saveBtn}`}></a>
            <a href="" className={`${styles.menuBtn} ${styles.helpBtn}`}></a>
            <div className={styles.printBtn}></div>

            <hr />

            <div className={styles.prevBtn}></div>
            <div className={styles.nextBtn}></div>

            <hr />

            <div className={styles.dropContainer}>
              <div className={styles.drop}>
                <span className={styles.dropType}>기본형</span>
              </div>
            </div>

            <hr />

            <div className={styles.dropContainer}>
              <div className={styles.drop}>
                <span className={styles.dropType}>dya_only</span>
              </div>
            </div>

            <hr />

            <div className={styles.langBtnContainer}>
              <div className={styles.langBtnInner}>
                <div className={styles.langBtn}>
                  <span className={styles.langType}>한국어</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sceneContainer}>
          <div className={styles.sortable}>
            <div className={styles.rcsCustomScroll} style={{ height: '100%' }}>
              <div className={styles.rcsOuterContainer} style={{ height: '100%' }}>
                <div className={styles.rcsInnerContainer} style={{ height: '100%', marginRight: '-20px' }}>
                  <div style={{ height: '100%', overflowY: 'visible', marginRight: '20px' }}>
                    <div className={styles.sortable__de989}>
                      <div>
                        <div className={styles.sortableItem}>
                          <div id="7dwq" className={styles.selectedScene}>
                            <span className={styles.entrySceneLeftWorkspace}></span>
                            <span className={styles.entrySceneInputCover}>
                              <input className={styles.entrySceneFieldWorkspace} value="장면 1" />
                            </span>
                            <span className={styles.entrySceneRemoveButtonCoverWorkspace}>
                              <button className={styles.entrySceneRemoveButtonWorkspace}></button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className={styles.addSceneBtn}></span>
        </div>
      </header>

      <div className={styles.panelContainer}>
        <div className={styles.left}>
          <div className={styles.playPanel}>
            <button className={styles.speedBtn}></button>
            <button className={styles.scaleBtn}></button>
            <button className={styles.gridBtn}></button>

            <canvas width="640" height="360"></canvas>
          </div>

          <div className={styles.engineBtnContainer}>
            <button className={styles.objectAddBtn}>오브젝트 추가하기</button>
            <button className={styles.startEngineBtn}>시작하기</button>
          </div>

          <div className={styles.objectListContainer}></div>
        </div>

        <div className={styles.right}>
          <ul className={styles.tabList}>
            <li className={styles.tabItem}>블록</li>
            <li className={`${styles.tabItem} ${styles.tabItemDisable}`}>모양</li>
            <li className={`${styles.tabItem} ${styles.tabItemDisable}`}>소리</li>
            <li className={`${styles.tabItem} ${styles.tabItemDisable}`}>속성</li>
          </ul>

          <div className={styles.workSpace}>
            <ul className={styles.blockMenuContainer}>
              {/* BlockMenu components go here */}
            </ul>

            <div className={styles.blockContainer}>
              <blockMenu logo='https://playentry.org/lib/entry-js/images/start.svg' name='시작' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/flow.svg' name='흐름' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/moving.svg' name='움직임' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/looks.svg' name='생김새' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/brush.svg' name='붓' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/sound.svg' name='소리' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/judgement.svg' name='판단' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/calc.svg' name='계산' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/variable.svg' name='자료' />
              <blockMenu logo='https://playentry.org/lib/entry-js/images/func.svg' name='함수' />
            </div>

            <div className={styles.workspacePanel}>
              {/* Background elements go here */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
