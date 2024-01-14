export default interface GoalType {
  goal_title: string;
  deadline: string;
  description: string;
  priority: string;
  created_timestamp: string;
  status?: string;
  goal_id?: number;
}
