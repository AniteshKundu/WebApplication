const Task = require('../models/Task');

const createTask = async (req, res) => {
    try {
        const { title, description, deadline } = req.body;
        const task = new Task({ title, description, deadline, owner: req.user._id });
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        if (task.owner.toString() !== req.user._id) {
            return res.status(403).send('You are not authorized to update this task.');
        }
        Object.assign(task, req.body);
        await task.save();
        res.send(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        if (task.owner.toString() !== req.user._id) {
            return res.status(403).send('You are not authorized to delete this task.');
        }
        await task.remove();
        res.send({ message: 'Task deleted' });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ owner: req.user._id });
        res.send(tasks);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getSharedTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ sharedWith: req.user._id });
        res.send(tasks);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { createTask, updateTask, deleteTask, getUserTasks, getSharedTasks };
