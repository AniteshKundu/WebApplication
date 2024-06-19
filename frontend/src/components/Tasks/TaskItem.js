import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.deadline).toLocaleString()}</p>
      <p>Owner: {task.owner.name}</p>
    </div>
  );
};

export default TaskItem;
