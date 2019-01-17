const Url = require('../models/url');

const isValidUrl = require('../utils/isValidUrl')

const {
  encoder,
  decoder
} = require('../utils');


/* 
Saves the long URL and returns the short URL after encoding the ID
*/
const postUrl = (req, res) => {
  if (!req.body.url) {
    return res.status(400).send({
      message: 'Invalid request',
      error: true,
      success: false,
    });
  }
  const url = req.body.url;
  const valid = isValidUrl(url);
  if (!valid) {
    return res.status(406).send({
      message: 'Invalid URL',
      error: true,
      success: false,
    });
  }

  const dbEntry = new Url(req.body);
  dbEntry.save((err, result) => {
    if (err) {
      return res.status(500).send({
        message: 'Cannot save the URL',
        error: true,
        success: false,
      });
    }
    if (result) {
      const code = encoder(result._id);
      const data = {
        code,
        url: `${req.protocol}://${req.get('host')}/${code}`,
      };
      return res.status(200).send({
        message: 'Cannot save the URL',
        data,
        error: false,
        success: true,
      });
    }
  });
}


/* 
Redirects the short URL if it is valid!
*/
const getUrl = (req, res) => {
  if (!req.params.code) {
    return res.status(400).send({
      message: 'Invalid request',
      error: true,
      success: false,
    });
  }
  const id = decoder(req.params.code);
  Url.findOne({
    _id: id
  }).then(result => {
    if (!result) {
      return res.status(404).send({
        message: 'Short Url does not exist',
        error: true,
        success: false,
      });
    }
    res.status(302).redirect(result.url);
  }).catch(err => {
    return res.status(500).send({
      message: 'Database query error',
      error: true,
      success: false,
    });
  });
}

module.exports = {
  postUrl,
  getUrl,
}