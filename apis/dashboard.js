const User = require('../models/User');
const Task = require('../models/Task');

exports.getDashboard = async (req,res) => {
    try {
        const interns = await User.find({ role: 'intern' });
        const progress = await Promise.all(interns.map(async (intern) => {
            const tasks = await Task.find({ assignedTo: intern._id });
            return {
                id: intern._id,
                name: intern.name,
                totalTasks: tasks.length,
                completedTasks: tasks.filter(task => task.status === 'completed').length,
                inProgressTasks: tasks.filter(task => task.status === 'in progress').length,
                pendingTasks: tasks.filter(task => task.status === 'pending').length
            };
        }
    ));
        res.json(progress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};