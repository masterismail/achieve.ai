import Image from "next/image";
import SideNavbar from "../src/app/components/side-navbar";
import ListboxComponent from "../src/app/components/listbox";
import supabase from "@/app/supabaseclient";

import { getUserGoals, postUserGoal } from "@/app/utils";

import Goals from "@/app/components/goals";
import GoalType from "@/app/components/goalsType";

import Layout from "@/app/components/layout";
import BasicModal from "@/app/components/goalmodal";
import React, { useEffect, useState } from "react";

async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log("Error logging out:", error.message);
}

export default function Home() {
  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);
  // I was intending on keeping high-level state here // State changing functions

  // Goals state
  const [goalsList, setGoalsList] = React.useState<GoalType[]>([]);

  const fetchUpdateData = async () => {
    var goals = await getUserGoals();
    if (goals) {
      setGoalsList(goals);
      console.log("goals", goals);
    }
  };

  const appendGoalsList = async (goal: GoalType) => {
    try {
      const goalFromDB = await postUserGoal(goal);
      setGoalsList([...goalsList, ...goalFromDB]);
    } catch (err) {
      // TODO NOTIFY user that something went wrong. show notification
      console.error("err in #appendGoalsList", err);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchUpdateData();
    })();
  }, []);

  return (
    <div>
      <BasicModal
        modalState={modalState}
        openModal={openModal}
        closeModal={closeModal}
        appendGoalsList={appendGoalsList}
      />
      <Goals openModal={openModal} goalsList={goalsList} />
    </div>
  );
}
