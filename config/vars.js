const dotenv = require('dotenv');
const path = require('path');

dotenv.load({
  path: path.join(__dirname, '../.env')
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo: {
    uri: process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI
  }
}
