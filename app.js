const { port, env } = require('./config/vars');
const app = require('./config/express');
const mongoose = require('mongoose');

// mongoose.connect();

app.listen(port, () => console.info(`Server started on port ${port} (${env})`));

module.exports = app;
