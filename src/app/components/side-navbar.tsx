import type { NextPage } from "next";
import StateDefaultTypeMainSize from "./state-default-type-main-size.module.css";
import styles from "./side-navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";


const SideNavbar: NextPage = () => {
  const router = useRouter();

  const redirectToGoals = () => {
    router.push("/goals"); // Replace "/goals" with the actual route for Goals page
  };
  
  const redirectToIndex = () => {
    router.push("/"); // Replace "/goals" with the actual route for Goals page
  };

  const redirectToSettings = () => {
    router.push("/settings"); // Replace "/goals" with the actual route for Goals page
  };

  const redirectToProfile = () => {
    router.push("/profile"); // Replace "/goals" with the actual route for Goals page
  };

  const redirectToTasks = () => {
    router.push("/tasks"); // Replace "/tasks" with the actual route for Tasks page
  };

  const redirectToProgress = () => {
    router.push("/progress"); // Replace "/progress" with the actual route for Progress page
  };

  return (

    <div className={styles.sideNavbar}>
      <div className={styles.header}>
        <div className={styles.logoIcon} onClick={redirectToIndex}>
          <Image
            className={styles.screenshotFrom2023122414}
            alt=""
            src="/screenshot-from-20231224-144846-1@2x.png"
            width={2000}
            height={2000}
          />
          <div className={styles.iconButtonWrapper}>
            <StateDefaultTypeMainSize
              itemCode="/iconmenu@2x.png"
              stateDefaultTypeMainSizeBackgroundColor="#4f46e5"
            />
          </div>
        </div>
        <div className={styles.mainNavigation}> 
          <div className={styles.mainNavigation}>
            <button className={styles.sideNavigationItem} onClick={redirectToGoals}>
              <Image
                className={styles.heroiconsOutlinerocketLaunc}
                alt=""
                src="/heroiconsoutlinerocketlaunch@2x.png"
                width={2000}
                height={2000}
              />
              <div className={styles.iconText}>
                <div className={styles.goals}>Goals</div>
              </div>
            </button>
            <button className={styles.sideNavigationItem1} onClick={redirectToTasks}>
              <Image
                className={styles.heroiconsOutlinerocketLaunc}
                alt=""
                src="/heroiconsoutlinerectanglestack@2x.png"
                width={2000}
                height={2000}
              />
              <div className={styles.iconText}>
                <div className={styles.goals}>Tasks</div>
              </div>
            </button>
            <button className={styles.sideNavigationItem2} onClick={redirectToProgress} >
              <Image
                className={styles.heroiconsOutlinerocketLaunc}
                alt=""
                src="/heroiconsoutlinepresentationchartline@2x.png"
                width={2000}
                height={2000}
              />
              <div className={styles.iconText2}>
                <div className={styles.goals}>Progress</div>
              </div>
            </button>
            <button className={styles.sideNavigationItem3} onClick={redirectToProgress}>
              <div className={styles.iconText3}>
                <Image
                  className={styles.iconhashtag}
                  alt=""
                  src="/iconhashtag@2x.png"
                  width={2000}
                  height={2000}
                />
                <div className={styles.chat}>
                  <p className={styles.badges}>{`Badges `}</p>
                  <p className={styles.badges}>(coming soon)</p>
                </div>
              </div>
              <div className={styles.notificationSign}>
                <div className={styles.div}>12</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.sideNavigationItem4} onClick={redirectToSettings}>
          <div className={styles.iconText3}>
            <Image className={styles.iconhashtag} alt="" src="/iconcog@2x.png" width={2000}
            height={2000} />
            <div className={styles.chat1}>Settings</div>
          </div>
        </button>
        <div className={styles.divider}>
          <div className={styles.line} />
        </div>
        <button className={styles.sideNavigationItem1} onClick={redirectToProfile}>
          <Image className={styles.avatarIcon} alt="" src="/avatar@2x.png" width={2000}
            height={2000}/>
          <div className={styles.adrianTra}>Adrian Tra</div>
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
