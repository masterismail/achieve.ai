import type { NextPage } from "next";
import { useCallback } from "react";
import { useState } from 'react'; 
import supabase from "../supabaseclient";
import styles from "/home/tahseer/Desktop/Workshop/achieve.ai/src/app/components/mainpage.module.css";
import { useRouter } from "next/navigation";

const Frame: NextPage = () => {
  const router = useRouter();

  const redirectToSignup = () => {
    router.push("/auth/signup"); // Replace "/goals" with the actual route for Goals page
  };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState<string | null>(null);
  
    const handleSignup = async () => {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: "someone@gmail.com",
          password: "password",
        });
  
        if (error) {
          console.error('Signup error:', error);
          setSignupError(error.message);
        } else {
          console.log('Signup successful!');
          // Perform actions after successful signup
        }
      } catch (error) {
        console.error('Signup error:', error);
        setSignupError('Failed to sign up. Please try again.');
      }
    };

  return (

    <div className={styles.div}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <b className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </b>
            <div className={styles.autoLayoutVertical}>
              <button
                className={styles.autoLayoutHorizontal}
                data-scroll-to="autoLayoutHorizontal"
                
              >
                <div className={styles.frame3}>
                  <b className={styles.whatCanI}>
                    What can I create with Copy.ai?
                  </b>
                  <div className={styles.div1}>+</div>
                </div>
              </button>
              <button className={styles.autoLayoutHorizontal}>
                <div className={styles.frame3}>
                  <b className={styles.whatCanI}>How much does it cost?</b>
                  <div className={styles.div1}>+</div>
                </div>
              </button>
              <button className={styles.autoLayoutHorizontal}>
                <div className={styles.frame3}>
                  <b className={styles.whatLanguagesDoes}>
                    What languages does it support?
                  </b>
                  <div className={styles.div1}>+</div>
                </div>
              </button>
              <button className={styles.autoLayoutHorizontal}>
                <div className={styles.frame3}>
                  <b className={styles.canIGet}>
                    Can I get a demo of the product?
                  </b>
                  <div className={styles.div1}>+</div>
                </div>
              </button>
              <button className={styles.autoLayoutHorizontal}>
                <div className={styles.frame3}>
                  <b className={styles.whereCanIContainer}>
                    <p className={styles.whereCanI}>
                      Where can I learn more about copywriting or
                      entrepreneurship?
                    </p>
                  </b>
                  <div className={styles.div1}>+</div>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.frame8}>
            <div className={styles.frame9}>
              <div className={styles.frame10}>
                <div className={styles.frame11}>
                  <div className={styles.product}>Product</div>
                  <div className={styles.frame12}>
                    <div className={styles.copyaiReviews}>Copy.ai Reviews</div>
                    <div className={styles.copyaiVsJasperai}>
                      Copy.ai vs Jasper.ai
                    </div>
                    <div className={styles.copyaiApi}>Copy.ai API</div>
                    <div className={styles.alternatives}>Alternatives</div>
                    <div className={styles.templates}>Templates</div>
                    <div className={styles.writeIn25}>
                      Write in 25+ Languages
                    </div>
                    <div className={styles.useFreeAi}>Use Free AI Tools</div>
                  </div>
                </div>
                <div className={styles.frame13}>
                  <div className={styles.company}>Company</div>
                  <div className={styles.frame14}>
                    <div className={styles.blog}>Blog</div>
                    <div className={styles.press}>Press</div>
                    <div className={styles.careers}>Careers</div>
                    <div className={styles.community}>Community</div>
                    <div className={styles.creatorProgram}>Creator Program</div>
                    <div className={styles.twitter}>Twitter</div>
                    <div className={styles.linkedin}>LinkedIn</div>
                    <div className={styles.affiliateProgram}>
                      Affiliate Program
                    </div>
                  </div>
                </div>
                <div className={styles.frame15}>
                  <div className={styles.support}>Support</div>
                  <div className={styles.frame16}>
                    <div className={styles.weeklyDemos}>Weekly Demos</div>
                    <div className={styles.contactUs}>Contact Us</div>
                    <div className={styles.reportABug}>Report a Bug</div>
                    <div className={styles.reportAnOutage}>
                      Report an Outage
                    </div>
                    <div className={styles.requestANew}>
                      Request a New Feature
                    </div>
                  </div>
                </div>
                <div className={styles.frame17}>
                  <div className={styles.useCases}>Use Cases</div>
                  <div className={styles.frame18}>
                    <div className={styles.forBlogWriters}>
                      For Blog Writers
                    </div>
                    <div className={styles.forSocialMedia}>
                      For Social Media Managers
                    </div>
                    <div className={styles.forEmailMarketers}>
                      For Email Marketers
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame19}>
                <div className={styles.autoLayoutHorizontal5}>
                  <div className={styles.frame20}>
                    <div className={styles.autoLayoutHorizontal6}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/frame@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.frame20}>
                    <div className={styles.autoLayoutHorizontal6}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/frame@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.frame20}>
                    <div className={styles.autoLayoutHorizontal6}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/logo.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frame23}>
                  <div className={styles.copyaiInc}>© 2023 CopyAI, Inc.</div>
                  <div className={styles.privacyNotice}>Privacy Notice</div>
                  <div className={styles.termsOfService}>Terms of Service</div>
                  <div className={styles.status}>Status</div>
                  <img
                    className={styles.screenshotFrom2023122415}
                    alt=""
                    src="/logod.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frame24}>
            <div className={styles.frame25}>
              <img className={styles.frameIcon3} alt="" src="/logo.png" />
            </div>
            <div className={styles.autoLayoutHorizontal9}>
              <img className={styles.frameIcon4} alt="" src="/logo.png" />
            </div>
          </div>
          <b className={styles.seeHowIt}>See How It Works !!</b>
        </div>
        <div className={styles.frame26}>
          <div className={styles.frame27}>
            <div className={styles.frame28} />
            <button className={styles.screenshotFrom20231224151} />
            <div className={styles.frame29} />
            <div className={styles.frame30}>
              <button className={styles.login}>Login</button>
              <button className={styles.autoLayoutHorizontal10} onClick={redirectToSignup}>
                <div className={styles.getStarted}>Get Started ― It's Free</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame31} />
    </div>
  );
};


export default Frame;
