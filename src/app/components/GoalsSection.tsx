// DashboardPage.tsx
"use client";
import { useEffect, useState } from 'react';
import supabase  from '../lib/supabase'; // Import the Supabase client

type Goal = {
  id: string; // Define the type of each goal object
  title: string;
  // ... other properties if needed
};

const GoalsSection = () => {
  const [goals, setGoals] = useState<Goal[]>([]); // Use explicit type annotation
  const [newGoal, setNewGoal] = useState('');

  useEffect(() => {
    async function fetchGoals() {
      try {
        const { data, error } = await supabase.from('Goals').select('*').order('created_at', { ascending: false });
        if (error) {
          throw error;
        }
        setGoals(data || []); // Use safe assignment
      } catch (error) {
        console.error('Error fetching goals:', (error as Error).message);
      }
    }

    fetchGoals();
  }, []);

  const addGoal = async () => {
    try {
      const { data, error } = await supabase.from('Goals').insert([{ title: newGoal }]);
      if (error) {
        throw error;
      }
      setGoals((prevState) => (data ? [...prevState, ...data] : prevState));
      setNewGoal('');
    } catch (error) {
      console.error('Error adding goal:', (error as Error).message);
    }
  };

  return (
    <div>
      <h2>Goals</h2>
      <input type="text" value={newGoal} onChange={(e) => setNewGoal(e.target.value)} />
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {goals.map((goal: Goal) => ( // Use type guard for map function
          <li key={goal.id}>{goal.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsSection;
