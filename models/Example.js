const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ExampleSchema = new Schema({
//  There is no need for key, because all mongodb object automatically get one objectId (_id).
  name: {type: String},
  price: {type: Number},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Example', ExampleSchema);

module.exports = ExampleSchema;