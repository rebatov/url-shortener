const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlCounterSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 111
  }
}, {
  timestamps: true,
  collection: 'counter',
});

module.exports = mongoose.model('UrlCounter', UrlCounterSchema);