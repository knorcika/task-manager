const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: {type: String},
  gender: {type: String, enum: ['male','female', 'other']},
  age: {type: Number},
  address: {type: String},
  email: {type: String},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Profile', ProfileSchema);
module.exports = ProfileSchema;