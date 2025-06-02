const express = require('express');
const router = express.Router();
const {
    assignTask,
    updateTask,
    getTaskByIntern
}   = require('../apis/tasks');

router.post('/', assignTask);
router.patch('/:id', updateTask);
router.get('/intern/:id', getTaskByIntern);
module.exports = router;
