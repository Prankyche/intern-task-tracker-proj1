const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['intern', 'admin'],
        default: 'intern'
    }
});
module.exports = mongoose.model('User', userschema);