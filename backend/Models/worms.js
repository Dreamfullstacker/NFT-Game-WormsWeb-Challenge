const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let wormsSchema = new Schema({
  id: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  tokenId: {
    type: Number
  }
}, {
  collection: 'worms'
})

module.exports = mongoose.model('Worms', wormsSchema)