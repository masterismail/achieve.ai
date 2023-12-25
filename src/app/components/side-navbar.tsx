import type { NextPage } from "next";
import styles from "./side-navbar.module.css";
import Image from "next/image";

const SideNavbar: NextPage = () => {
  return (
    <div className={styles.sideNavbar}>
      <div className={styles.header}>
        <div className={styles.logoIcon}>
          <Image
            className={styles.screenshotFrom2023122414}
            alt=""
            src="/screenshot-from-20231224-144846-1@2x.png"
            width={5000}
            height={5000}
          />
          <div className={styles.iconButtonWrapper}>
            <div className={styles.iconButton}>
              <Image className={styles.iconmenu} alt="" src="/iconmenu@2x.png" width={5000} height={5000} />
            </div>
          </div>
        </div>
        <div className={styles.mainNavigation}>
          <div className={styles.mainNavigation}>
            <div className={styles.sideNavigationItem}>
              <div className={styles.iconText}>
                <Image
                  className={styles.iconhashtag}
                  alt=""
                  src="/iconhashtag@2x.png"
                  width={5000}
                  height={5000}
                />
                <div className={styles.goals}>Goals</div>
              </div>
            </div>
            <div className={styles.sideNavigationItem1}>
              <Image
                className={styles.heroiconsOutlinerectangleSt}
                alt=""
                src="/heroiconsoutlinerectanglestack@2x.png"
                width={5000}
                height={5000}
              />
              <div className={styles.iconText1}>
                <div className={styles.tasks}>Tasks</div>
              </div>
            </div>
            <div className={styles.sideNavigationItem2}>
              <Image
                className={styles.heroiconsOutlinerectangleSt}
                alt=""
                src="/heroiconsoutlinepresentationchartline@2x.png"
                width={5000}
                height={5000}
              />
              <div className={styles.iconText2}>
                <div className={styles.tasks}>Progress</div>
              </div>
            </div>
            <div className={styles.sideNavigationItem3}>
              <div className={styles.iconText}>
                <Image
                  className={styles.iconhashtag}
                  alt=""
                  src="/iconhashtag@2x.png"
                  width={5000}
                  height={5000}
                />
                <div className={styles.tasks}>
                  <p className={styles.badges}>{`Badges `}</p>
                  <p className={styles.badges}>(coming soon)</p>
                </div>
              </div>
              <div className={styles.notificationSign}>
                <div className={styles.div}>12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.sideNavigationItem4}>
          <div className={styles.iconText}>
            <Image className={styles.iconhashtag} alt="" src="/iconcog@2x.png" width={5000}
            height={5000}/>
            <div className={styles.chat1}>Settings</div>
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.line} />
        </div>
        <div className={styles.sideNavigationItem5}>
          <Image className={styles.avatarIcon} alt="" src="/avatar@2x.png" width={5000}
            height={5000} />
          <div className={styles.adrianTra}>Adrian Tra</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
