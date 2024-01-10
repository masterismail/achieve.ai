import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import type { NextPage } from 'next';
import styles from './frame.module.css';
import supabase from '../supabaseclient';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Frame: React.FC = ({ 
  appendGoalsList
}) => {
  const [inputValue, setInputValue] = useState('');
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');

  const [userId, setUserId] = useState<string | null>(null);

  const handleInsert = async () => {
    const payload = {
    //       // Define the structure of your data here based on your table columns
          goal_title: inputValue,
          deadline: input1Value,
          description: input2Value,
          priority: input3Value,
    }
    console.log('submitted goal form! payload to send to supabase', payload)
    alert("form submitted!")
    appendGoalsList(payload)
    // try {
      
    //   const { data, error } = await supabase.from('goals').insert([
    //     {
    //       // Define the structure of your data here based on your table columns
    //       goal_title: inputValue,
    //       deadline: input1Value,
    //       description: input2Value,
    //       priority: input3Value,
    //       // ... other columns ...
    //     },
    //   ]);
    //   if (error) {
    //     throw error;
    //   }
    //   console.log('Inserted data:', data);
    // } catch (error) {
    //   console.error('Error inserting data:', error);
    // }
  };

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

const BasicModal = ({ 
  openModal, closeModal, modalState, 
  appendGoalsList,
}) => {
    return (
      <div className={styles.container} >
        <button onClick={openModal}  className={styles.buttondefaultprimaryiconTe}>
          <img className={styles.iconplus} alt="" src="/Vector.svg" />
          <div className={styles.add}>Add</div>
        </button>
        <Modal
          open={modalState}
          onClose={
            closeModal
          }
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >   
          <Frame
            appendGoalsList={appendGoalsList}
          />
        </Modal>
      </div>
  );
};

export default BasicModal;
