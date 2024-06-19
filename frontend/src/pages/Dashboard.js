import React from 'react';
import TaskList from '../components/Tasks/TaskList';
import AddTask from '../components/Tasks/AddTask';
import SharedTasks from '../components/Tasks/SharedTasks';

const Dashboard = () => {
  return (
    <div>
      <h2>My Tasks</h2>
      <AddTask />
      <TaskList />
      <h2>Shared Tasks</h2>
      <SharedTasks />
    </div>
  );
  
};

export default Dashboard;
