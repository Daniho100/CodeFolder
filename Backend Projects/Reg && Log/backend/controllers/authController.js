const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).send('Invalid username or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        const accessToken = jwt.sign({ username: user.username, role: user.role }, process.env.ACCESS_TOKEN_SECRET);
        if (user.role === 'Admin') {
            return res.json({ message: 'Welcome admin', accessToken });
        } else {
            return res.json({ message: 'Welcome user', accessToken });
        }
    } else {
        return res.status(400).send('Invalid username or password');
    }
};


const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access Denied');

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).send('Invalid token');
    }
};


module.exports = {
    login, verifyToken
}