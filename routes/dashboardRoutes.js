const express = require('express');
const router = express.Router();
const {getDashboard} = require('../apis/dashboard');
router.get('/', getDashboard);
module.exports = router;