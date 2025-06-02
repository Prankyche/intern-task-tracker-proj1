const mongoose = require('mongoose');
const tasklogSchema = new mongoose.Schema({
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tasks'
    },
    oldStatus: {
        type: String
    },
    newStatus: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('TaskLogs', tasklogSchema);