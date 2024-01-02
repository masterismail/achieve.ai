import type { NextPage } from "next";
import styles from "./goals.module.css";





const Goals: NextPage = () => {
  return (
    <div className={styles.div}>
      <div className={styles.frame}>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.frame1} />
          <div className={styles.frame2}>
            <div className={styles.autoLayoutVertical}>
              <div className={styles.autoLayoutVertical1}>
                <div className={styles.autoLayoutVertical2}>
                  <img
                    className={styles.screenshotFrom2023123016Icon}
                    alt=""
                    src="/logo.svg"
                  />
                  <div className={styles.autoLayoutVertical3}>
                    <button className={styles.autoLayoutHorizontal1}>
                      <div className={styles.frame3}>
                        <img
                          className={styles.award21}
                          alt=""
                          src="/award.svg"
                        />
                      </div>
                      <div className={styles.goals}>Goals</div>
                    </button>
                    <button className={styles.autoLayoutHorizontal2}>
                      <div className={styles.frame3}>
                        <div className={styles.frame5}>
                          <img
                            className={styles.planning1Icon}
                            alt=""
                            src="/planning.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.tasks}>Tasks</div>
                    </button>
                    <button className={styles.frame6}>
                      <div className={styles.frame7}>
                        <div className={styles.frame8} />
                      </div>
                      <img
                        className={styles.statistics1Icon}
                        alt=""
                        src="/statistics.svg"
                      />
                      <div className={styles.dashboard}>Dashboard</div>
                      <div className={styles.frame9} />
                    </button>
                  </div>
                </div>
                <div className={styles.frame10}>
                  <div className={styles.rectangle} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame11}>
          <div className={styles.frame12}>
            <div className={styles.frame13}>
              <img className={styles.frameIcon} alt="" src="/profile.png" />
            </div>
          </div>
          <div className={styles.frame14}>
            <div className={styles.autoLayoutHorizontal3}>
              <div className={styles.frame15}>
                <div className={styles.getStarted}>Get Started</div>
              </div>
            </div>
            <div className={styles.autoLayoutHorizontal4}>
              <button className={styles.frame16}>
                <img className={styles.frameIcon1} alt="" src="/frame@2x.png" />
                <div className={styles.createANew}>Create a New Goal</div>
              </button>
            </div>
            <div className={styles.autoLayoutHorizontal5} />
            <div className={styles.wallet}>
              <div className={styles.priorityParent}>
                <div className={styles.priority}>{`Priority : `}</div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector@2x.png"
                />
                <textarea className={styles.text} />
              </div>
              <div className={styles.walletHeader}>
                <div className={styles.iconTitle}>
                  <a className={styles.loose10Kg}>Loose 10 Kg Weight</a>
                </div>
                <div className={styles.createdDecember28Container}>
                  <span>Created</span>
                  <span className={styles.span}> December 28, 2023</span>
                </div>
                <div className={styles.december282023Parent}>
                  <textarea
                    className={styles.december2820231}
                    placeholder="December 28, 2023"
                  />
                  <div className={styles.deadline}>
                    <span>Deadline</span>
                    <span className={styles.span}>{` : `}</span>
                  </div>
                </div>
              </div>
              <div className={styles.progressStatus}>
                <div className={styles.progressInformation}>
                  <div className={styles.div1}>
                    <span className={styles.span1}>{`30 `}</span>
                    <span className={styles.span2}>/ 100</span>
                  </div>
                  <div className={styles.nominal}>30%</div>
                </div>
                <div className={styles.progressVisual}>
                  <div className={styles.progressBar}>
                    <div className={styles.background} />
                    <div className={styles.progress} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
