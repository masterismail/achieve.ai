import type { NextPage } from "next";
import styles from "./footer.module.css";

const Frame1: NextPage = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.product}>Product</div>
          <div className={styles.frame3}>
            <div className={styles.copyaiReviews}>Copy.ai Reviews</div>
            <div className={styles.copyaiVsJasperai}>Copy.ai vs Jasper.ai</div>
            <div className={styles.copyaiApi}>Copy.ai API</div>
            <div className={styles.alternatives}>Alternatives</div>
            <div className={styles.templates}>Templates</div>
            <div className={styles.writeIn25}>Write in 25+ Languages</div>
            <div className={styles.useFreeAi}>Use Free AI Tools</div>
          </div>
        </div>
        <div className={styles.frame4}>
          <div className={styles.company}>Company</div>
          <div className={styles.frame5}>
            <div className={styles.blog}>Blog</div>
            <div className={styles.press}>Press</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.community}>Community</div>
            <div className={styles.creatorProgram}>Creator Program</div>
            <div className={styles.twitter}>Twitter</div>
            <div className={styles.linkedin}>LinkedIn</div>
            <div className={styles.affiliateProgram}>Affiliate Program</div>
          </div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.support}>Support</div>
          <div className={styles.frame7}>
            <div className={styles.weeklyDemos}>Weekly Demos</div>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.reportABug}>Report a Bug</div>
            <div className={styles.reportAnOutage}>Report an Outage</div>
            <div className={styles.requestANew}>Request a New Feature</div>
          </div>
        </div>
        <div className={styles.frame8}>
          <div className={styles.useCases}>Use Cases</div>
          <div className={styles.frame9}>
            <div className={styles.forBlogWriters}>For Blog Writers</div>
            <div className={styles.forSocialMedia}>
              For Social Media Managers
            </div>
            <div className={styles.forEmailMarketers}>For Email Marketers</div>
          </div>
        </div>
      </div>
      <div className={styles.frame10}>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.frame11}>
            <div className={styles.autoLayoutHorizontal1}>
              <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
            </div>
          </div>
          <div className={styles.frame11}>
            <div className={styles.autoLayoutHorizontal1}>
              <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
            </div>
          </div>
          <div className={styles.frame11}>
            <div className={styles.autoLayoutHorizontal1}>
              <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.frame14}>
          <div className={styles.copyaiInc}>© 2023 CopyAI, Inc.</div>
          <div className={styles.privacyNotice}>Privacy Notice</div>
          <div className={styles.termsOfService}>Terms of Service</div>
          <div className={styles.status}>Status</div>
          <img
            className={styles.screenshotFrom2023122415}
            alt=""
            src="/screenshot-from-20231224-150033-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame1;
