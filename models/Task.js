const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
//  There is no need for key, because all mongodb object automatically get one objectId (_id).
  name: {type: String},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Task', TaskSchema);

module.exports = TaskSchema;