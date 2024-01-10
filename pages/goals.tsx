import Image from 'next/image';
import SideNavbar from '../src/app/components/side-navbar'; 
import ListboxComponent from '../src/app/components/listbox';
import supabase from '@/app/supabaseclient';
import Goals from '@/app/components/goals';
import GoalType from '@/app/components/goalsType';

import Layout from '@/app/components/layout';
import BasicModal from '@/app/components/goalmodal';
import React from 'react';

async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log('Error logging out:', error.message);
}

export default function Home() {
  // I was intending on keeping high-level state here // State changing functions
  // Modal state
  const [modalState, setModalState] = React.useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  // Goals state
  const [goalsList, setGoalsList] = React.useState([
    { goal_title: 'Make a house', deadline: 'Tue Jan 19 2024 20:42:24`', description: '', priority: '', created_timestamp: `Tue Jan 09 2024 20:42:24`  },
    { goal_title: 'Build a zoo', deadline: 'Tue Jan 29 2024 20:42:24`', description: '', priority: '', created_timestamp: `Tue Jan 09 2024 20:42:24` },
    { goal_title: 'Start a zoom call', deadline: 'Tue Feb 03 2024 20:42:24`', description: '', priority: '', created_timestamp:`Tue Jan 09 2024 20:42:24` }
  ]);

  
  const appendGoalsList = (goal: GoalType) => { 
    goalsList.push(goal)
  }

  return (
    <div>
      <BasicModal
        modalState={modalState}
        openModal={openModal}
        closeModal={closeModal}
        appendGoalsList={appendGoalsList}
      />
      <Goals
        openModal={openModal}
        goalsList={goalsList}
      />
    </div>
  );
}
