import Image from "next/image";
import SideNavbar from "../src/app/components/side-navbar";
import ListboxComponent from "../src/app/components/listbox";
import supabase from "@/app/supabaseclient";

import { getUserGoals, postUserGoal } from "@/app/utils";

import Goals from "@/app/components/goals";
import GoalType from "@/app/components/goalsType";

import Layout from "@/app/components/layout";
import BasicModal from "@/app/components/goalmodal";
import React, { useEffect } from "react";

async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log("Error logging out:", error.message);
}

export default function Home() {
  const [modalState, setModalState] = React.useState(false);
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

  useEffect(() => {
    fetchUpdateData();
  }, []);

  const appendGoalsList = async (goal: GoalType) => {
    try {
      var goalFromDB = await postUserGoal(goal);
      setGoalsList([...goalsList, ...goalFromDB]);
    } catch (err) {
      console.error("err in #appendGoalsList", err);
      // TODO NOTIFY user that something went wrong. show notification
    }
  };

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
