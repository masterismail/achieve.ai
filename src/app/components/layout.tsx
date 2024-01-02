import type { NextPage } from "next";
import styles from "./layout.module.css";
import Router from "next/router";
const Layout: NextPage = () => {

  const handleAwardClick = () => {
    // Handle click for Award button
    Router.push("/goals");
    // Add your logic here
  };

  const handleTasksClick = () => {
    // Handle click for Statistics button
    Router.push("/tasks");
    // Add your logic here
  };

  const handleStatisticsClick = () => {
    // Handle click for Statistics button
    Router.push("/progress");
    // Add your logic here
  };

  return (
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
                  <button className={styles.autoLayoutHorizontal1} onClick={handleAwardClick}>
                    <div className={styles.frame3}>
                      <img
                        className={styles.award21}
                        alt=""
                        src="/award.svg"
                      />
                    </div>
                    <div className={styles.goals}>Goals</div>
                  </button>
                  <button className={styles.autoLayoutHorizontal2} onClick={handleTasksClick}>
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
                  <button className={styles.frame6} onClick={handleStatisticsClick}>
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
    
  );
};

export default Layout;
