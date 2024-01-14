import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GoalType from "./goalsType";
import type { NextPage } from "next";
import styles from "./frame.module.css";
import supabase from "../supabaseclient";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type FrameType = {
  appendGoalsList: (goal: GoalType) => void;
};

const Frame: React.FC<FrameType> = ({ appendGoalsList }) => {
  const [inputValue, setInputValue] = useState("");
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");

  const [userId, setUserId] = useState<string | null>(null);

  const handleInsert = async () => {
    const payload = {
      //       // Define the structure of your data here based on your table columns
      goal_title: inputValue || "example title",
      deadline: input1Value || "example deadline",
      description: input2Value || "example description",
      priority: input3Value || "example priority",
      created_timestamp: new Date().toISOString(),
    };
    console.log("submitted goal form! payload to send to supabase", payload);
    appendGoalsList(payload);
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.groupParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.goalParent}>
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
            <button className={styles.button} onClick={handleInsert}>
              <div className={styles.label}>Yes, confirm</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type BasicModalType = {
  openModal: () => void;
  closeModal: () => void;
  modalState: boolean;
  appendGoalsList: (goal: GoalType) => void;
};

const BasicModal: NextPage<BasicModalType> = ({
  openModal,
  closeModal,
  modalState,
  appendGoalsList,
}) => {
  return (
    <div className={styles.container}>
      <button onClick={openModal} className={styles.buttondefaultprimaryiconTe}>
        <img className={styles.iconplus} alt="" src="/Vector.svg" />
        <div className={styles.add}>Add</div>
      </button>
      <Modal
        open={modalState}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Frame appendGoalsList={appendGoalsList} />
      </Modal>
    </div>
  );
};

export default BasicModal;
