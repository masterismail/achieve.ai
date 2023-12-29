import { useEffect, useState } from 'react';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import  supabase from '../supabaseclient.js'

// Interface for your table data
interface TableRow {
  goal_id: string;
  user_id: number;
  goal_title: string | null; 
  description: string | null;
  status: string | null;
  deadline: string | null; 
  progress_metrics: string | null; 
  priority: string | null;
  id: number;
}

const TableComponent: React.FC = () => {
  const [tableData, setTableData] = useState<TableRow[]>([]);

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchTableData = async () => {
      try {
        const { data, error } = await supabase.from('goals').select('*');
        if (error) {
          throw error;
        }
        if (data) {
          setTableData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', (error as Error).message);
      }
    };

    // Fetch data when component mounts
    fetchTableData();
  }, []);

  return (
    <div>
      <h2>Your Table</h2>
      <table>
        <thead>
          <tr>
            <th>Goal Title</th>
            <th>Goal ID</th>
            <th>User ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Progress Metrics</th>
            <th>Priority</th>
            {/* Add more <th> for additional columns */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.goal_title}</td>
              <td>{row.goal_id}</td>
              <td>{row.user_id}</td>
              <td>{row.description}</td>
              <td>{row.status}</td>
                <td>{row.deadline}</td>
               
                <td>{row.priority}</td>

              {/* Render additional columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
