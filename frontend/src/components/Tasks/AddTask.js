import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/actions/taskActions';

const AddTask = () => {
  const [formData, setFormData] = useState({ title: '', description: '', deadline: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
      <input type="text" name="description" value={formData.description} onChange={handleChange} />
      <input type="datetime-local" name="deadline" value={formData.deadline} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
