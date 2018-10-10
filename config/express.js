const express = require('express');
const bodyParser = require('body-parser');
// const error = require('../api/middlewares/error');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// use error handling middleware here

// research the 'morgan' package for logging

module.exports = app;
