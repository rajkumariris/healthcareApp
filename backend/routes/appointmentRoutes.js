const express = require('express');
const router = express.Router();
const { CreateAppointment } = require('../controllers/appointmentController');
const auth = require('../middleware/authMiddleware');
router.post('/create', auth, CreateAppointment);

module.exports = router;