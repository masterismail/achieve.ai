import type { NextPage } from "next";
import styles from "./layout.module.css";

const Layout: NextPage = () => {
  return (
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
                  src="logo.svg"
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
        <div className={styles.frame14} />
      </div>
    </div>
  );
};

export default Layout;
