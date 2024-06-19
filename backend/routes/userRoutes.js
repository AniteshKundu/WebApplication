const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', verifyToken, getUserProfile);

module.exports = router;
