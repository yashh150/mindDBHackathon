const express = require('express');
const router = express.Router();
const { createJob } = require('../controllers/jobController');

// Define the route for creating a job
router.post('/dashboard/createJob', createJob);

module.exports = router;
