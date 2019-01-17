const MONGO_HOST = 'localhost';
const MONGO_PORT = '27017';
const DB_NAME = 'shorty';
const SERVER_PORT = 5000;

let MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${DB_NAME}`;
if (process.env.MONGO_DB_URI) {
  MONGO_URI = process.env.MONGO_DB_URI;
}
module.exports = {
  MONGO_URI,
  SERVER_PORT,
};