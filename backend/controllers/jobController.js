
// jobController.js

const Job = require('../models/job');

const createJob = async (req, res) => {
  try {
    const { job_title, jd, weights, status, r_id } = req.body;
    
    const newJob = new Job({
      job_title,
      jd,
      weights,
      status,
    });

    const savedJob = await newJob.save();
    res.status(200).json(savedJob._id); // Sending the job ID as a response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { createJob };
