const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {type: String},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Task', TaskSchema);
module.exports = TaskSchema;