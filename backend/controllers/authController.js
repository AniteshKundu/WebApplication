const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, username, password } = req.body;
        let user = await User.findOne({ username });
        if (user) return res.status(400).send('User already exists');

        user = new User({ name, username, password });
        await user.save();

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.status(201).send({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('Invalid username or password');

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).send('Invalid username or password');

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { register, login };
