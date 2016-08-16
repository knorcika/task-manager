const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: {type: String},
  price: {type: Number},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Profile', ProfileSchema);

module.exports = ProfileSchema;