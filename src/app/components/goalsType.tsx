export default interface GoalType {
  question: string;
  deadline: string;
  description: string;
  priority: string;
  created_timestamp: string;
  status: string;
  goal_id?: number;
}
