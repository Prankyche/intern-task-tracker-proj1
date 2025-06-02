const User = require('../models/User');
const bcrypt = require('bcryptjs');
exports.addIntern = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        });
    }catch (error) {
        res.status(400).json({message: error.message});
    }
};