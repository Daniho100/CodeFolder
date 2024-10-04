import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

export const login = async(req, res) =>{
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('Invalid username or password');
    
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send('Invalid username or password');
    
        const token = jwt.sign({ userId: user._id, username: user.name }, process.env.SECRETKEY);
        res.header('Authorization', `Bearer ${token}`).send(token);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
}

export const registerUser = async(req, res) =>{
    try {
        const {name, phone, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            phone,
            password: hashedPassword,
        })
        await user.save();
        res.status(201).json(user)
    } catch(error) {
        console.error(error);
        res.status(500).send('Server error')
    }
}
