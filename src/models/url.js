const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UrlCounter = require('./urlCounter')

const UrlSchema = new Schema({
  _id: {
    type: Number
  },
  url: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  collection: 'url',
});


/* 
Presave to populate the count onto the _id
*/
UrlSchema.pre('save', function (next) { // no arrow cause of lexical scoping
  const url = this;
  const params = {
    query: {
      _id: 'urlCount'
    },
    options: {
      new: true,
      upsert: true,
    }
  };
  UrlCounter.findOneAndUpdate(params.query, {
    $inc: {
      count: 1
    }
  }, params.options, (err, urlCounter) => {
    if (err) return next(err);
    url._id = urlCounter.count;
    next();
  })
});

module.exports = mongoose.model('Url', UrlSchema);