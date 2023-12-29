import type { NextPage } from "next";
import { useState } from "react";
import styles from "/home/tahseer/Desktop/Workshop/achieve.ai/src/app/components/mainpage.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Frame: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");
  
  return (
    <div className={styles.frameParent}>
      <div className={styles.groupParent} >
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.goalParent} >
              <div className={styles.goal}>Goal</div>
              <div className={styles.text14px}>goal likhna dekho</div>
              <div className={styles.textParent}>
                <div className={styles.text}>
                  <div className={styles.text14px1} />
                </div>
                <input
                  className={styles.input}
                  placeholder="Your Name"
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>
              <div className={styles.label}>Yes, confirm</div>
              <div className={styles.iconcontainer}>
                
              </div>
            </button>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.deadlineToCompleteThisGoalParent}>
              <div className={styles.deadlineToComplete}>
                Deadline To Complete This Goal
              </div>
              <div className={styles.textGroup}>
                <div className={styles.text}>
                  <div className={styles.text14px1} />
                </div>
                <input
                  className={styles.input}
                  placeholder="Your Name"
                  type="text"
                  value={input1Value}
                  onChange={(event) => setInput1Value(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              <div className={styles.label}>Yes, confirm</div>
              <div className={styles.iconcontainer}>
               
              </div>
            </button>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.deadlineToCompleteThisGoalParent}>
              <div className={styles.deadlineToComplete}>Goal Description</div>
              <div className={styles.textGroup}>
                <div className={styles.text}>
                  <div className={styles.text14px3} />
                </div>
                <input
                  className={styles.input}
                  placeholder="Goal Description"
                  type="text"
                  value={input2Value}
                  onChange={(event) => setInput2Value(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              <div className={styles.label}>Yes, confirm</div>
              <div className={styles.iconcontainer}>
                
              </div>
            </button>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.deadlineToCompleteThisGoalParent}>
              <div
                className={styles.deadlineToComplete}
              >{`Priority Level `}</div>
              <div className={styles.textGroup}>
                <div className={styles.text}>
                  <div className={styles.text14px1} />
                </div>
                <input
                  className={styles.input}
                  placeholder="Your Name"
                  type="text"
                  value={input3Value}
                  onChange={(event) => setInput3Value(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              <div className={styles.label}>Yes, confirm</div>
              <div className={styles.iconcontainer}>
                
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
