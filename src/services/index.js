const Url = require('../models/url');

const post = params => new Promise((resolve, reject) => {
  const url = new Url(params.data);
  url.save((err, result) => {
    if (err) {
      return reject({
        code: 500,
        error: true,
        success: false,
        message: 'Cannot save the URL',
      });
    }
    resolve(result);
  });
});


const get = params => new Promise((resolve, reject) => {
  const query = params.query;
  Url.findOne(query).then(result => {
    if (!result) {
      return reject({
        code: 404,
        message: 'Short Url does not exist',
        error: true,
        success: false,
      });
    }
    resolve(result);
  }).catch(err => {
    return reject(500).send({
      code: 500,
      message: 'Database query error',
      error: true,
      success: false,
    });
  });
});

module.exports = {
  post,
  get,
};