const express = require('express');
const { createTask, updateTask, deleteTask, getUserTasks, getSharedTasks } = require('../controllers/taskController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Correctly defining the routes with callback functions
router.post('/', authMiddleware, createTask);
router.put('/:taskId', authMiddleware, updateTask);
router.delete('/:taskId', authMiddleware, deleteTask);
router.get('/user', authMiddleware, getUserTasks);
router.get('/shared', authMiddleware, getSharedTasks);

module.exports = router;
