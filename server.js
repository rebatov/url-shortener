const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const config = require('./src/config');

const logger = require('./src/config/logger')

const app = require('./src/app.js');


const {
  MONGO_URI,
  SERVER_PORT
} = config

function start() {
  app.listen(SERVER_PORT, () => {
    logger.info(` Server is running on: ${SERVER_PORT}`);
  });
}

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true
// });
logger.info(`Connecting to ${MONGO_URI}`);
mongoose.connect(MONGO_URI);
start();

// const db = mongoose.connection;
// db.on('error', (err) => {
//   logger.error('Cannot connect to the database');
// })

// db.once('open', (open) => {
//   logger.info('Database connection successful');
//   start();
// });