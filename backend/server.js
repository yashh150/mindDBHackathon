const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());

// Use routes
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

// Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server is running on port', port);
});
