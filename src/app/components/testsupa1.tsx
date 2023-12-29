import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import supabase from '../supabaseclient';
import { NextPage } from 'next';

interface TableData {
    goal_id: string;
    goal_title: string ; 
    description: string ;
}

const InsertDataComponent = () => {
  const [dataToInsert, setDataToInsert] = useState<TableData>({
    goal_id: '143',
    goal_title: 'title hai dekho', 
    description: 'description hai dekho',
    // Initialize other fields with default values
  });

  const handleInsert = async () => {
    try {
      const { data, error } = await supabase
        .from('goals')
        .insert(dataToInsert);

      if (error) {
        console.error('Error inserting data:', error);
        // Handle error appropriately, e.g., display an error message to the user
      } else {
        console.log('Data inserted successfully:', data);
        // Clear input fields or perform any actions after successful insertion
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* Form fields to collect data */}
      <input type="text" value={dataToInsert.goal_id} onChange={(e) => setDataToInsert({ ...dataToInsert, goal_id: e.target.value })} />
        <input type="text" value={dataToInsert.goal_title} onChange={(e) => setDataToInsert({ ...dataToInsert, goal_title: e.target.value })} />
        <input type="text" value={dataToInsert.description} onChange={(e) => setDataToInsert({ ...dataToInsert, description: e.target.value })} />
      {/* Add more input fields for other columns */}

      <button onClick={handleInsert}>Insert Data</button>
    </div>
  );
};

export default InsertDataComponent;
