const express = require('express');
const router = express.Router();
const {addIntern } = require('../apis/users');

router.post('/', addIntern);
module.exports = router;