const Task = require('../models/Task');
exports.assignTask = async (requestAnimationFrame,res) => {
    const { title, description, assignedTo, status, priority, deadline } = requestAnimationFrame.body;
    try {
        const newTask = await Task.create({
            title,
            description,
            assignedTo,
            status,
            priority,
            deadline
        })
        res.status(201).json({
            _id: newTask.id,
            title: newTask.title,
            description: newTask.description,
            assignedTo: newTask.assignedTo,
            status: newTask.status,
            priority: newTask.priority,
            deadline: newTask.deadline
        });
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.updateTask = async (req, res) => {
    const {status } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true}
        );
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
};
exports.getTaskByIntern = async (req,res) => {
    try {
        const tasks = await Task.find({ assignedTo: req.params.id });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};