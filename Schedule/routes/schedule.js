const express = require('express');
const router = express.Router();
const scheduleController = require('../controller/schedule');

router.get('/slots', scheduleController.getSlots);
router.post('/book', scheduleController.bookSlot);

module.exports = router;