// JobModel.js

const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  job_title: String,
  jd: String,
  weights: [Number],
  status: String // Assuming r_id is related to some user identifier
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
