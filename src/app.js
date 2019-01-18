const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('./config/logger')
const {
  getUrl,
  postUrl
} = require('./controllers');

app.use(bodyParser.json());

app.disable('x-powered-by') // Cannot easily identify if it is express server.

app.use(express.static(`${__dirname}/public`))

// app.get('/', (req, res) => {
//   res.status(200).send({
//     message: 'This the app endpoint!'
//   });
// });

app.get('/:code', getUrl);
app.post('/api/v1/url', postUrl);

app.all('/*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
})


module.exports = app;