const service = require('../services/index');

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
  const paramsCheck = {
    query: {
      url: req.body.url,
    }
  };
  const params = {
    data: req.body,
  };


  /* 
  Sends if the shorted url is created successfully
  */
  function shortedResponse(result) {
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
  };

  service.get(paramsCheck).then(found => {
    shortedResponse(found);
  }).catch(notfound => {
    service.post(params).then(result => {
      shortedResponse(result);
    }).catch(err => {
      res.status(err.code).send(err);
    });
  })

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
  const params = {
    query: {
      _id: id,
    }
  }
  service.get(params).then(result => {
    res.status(302).redirect(result.url);
  }).catch(err => {
    res.status(err.code).send(err);
  });
}

module.exports = {
  postUrl,
  getUrl,
}