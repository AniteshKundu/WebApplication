import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSharedTasks } from '../../redux/actions/taskActions';
import TaskItem from './TaskItem';

const SharedTasks = () => {
  const dispatch = useDispatch();
  const sharedTasks = useSelector((state) => state.tasks.sharedTasks);

  useEffect(() => {
    dispatch(getSharedTasks());
  }, [dispatch]);

  return (
    <div>
      {sharedTasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default SharedTasks;
