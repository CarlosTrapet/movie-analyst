const mongoose = require('mongoose');
const { mongo, env } = require('./vars');

// override mongoose promise to ES6 Promise

mongoose.promise = Promise;

mongoose.connection.on('error', (err) => {
  console.error(`ERROR connecting to MongoDB ${err}`)
});

if (env === 'development') {
  mongoose.set('debug', true);
}

let connect = () => {
  const dbConnectionString = mongo.uri;

  mongoose.connect(dbConnectionString, {
    keepAlive: 1,
    useMongoClient: true,
    reconnectTries: 2,
    reconnectInterval: 1000
  }).then( () => {
    console.info(`Successfully connected to ${dbConnectionString}`);
  }).catch( (err) => {
    console.error(`ERROR connecting to ${dbConnectionString}, ${err}`);
  });
};

module.exports = {
  connect
}
