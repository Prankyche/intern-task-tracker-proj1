const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed', 'blocked'],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high']
    },
    deadline: {
        type: Date
    }
});
module.exports = mongoose.model('Tasks', taskSchema);