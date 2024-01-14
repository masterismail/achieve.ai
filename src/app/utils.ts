import GoalType from "./components/goalsType";
import supabase from "./supabaseclient";

export const getUserGoals: () => Promise<Array<any> | null> = async () => {
  let { data, error } = await supabase.from("goals").select("*");
  console.log("data", data);
  if (error) {
    console.error("Error", error);
    throw error;
  }
  return data;
};

export const postUserGoal: (g: GoalType) => Promise<Array<GoalType>> = async (
  goalDetails: GoalType
) => {
  const { data, error } = await supabase
    .from("goals")
    .insert([{ ...goalDetails }])
    .select();
  if (error) {
    console.error("error", error);
    throw error;
  }
  return data;
};
