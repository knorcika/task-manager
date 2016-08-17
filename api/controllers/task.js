const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
  list: function (req, res) {
    Task.find({}, function (err, tasks) {
      if (!!err) {
        return res.send(err);
      }
      return res.send(tasks);
    });
  },
  create: function (req, res) {
    Task.create({name: req.query.name }, function (err, task) {
      if (!!err) {
        res.send(err);
      } else {
        res.send(task);
      }
    })
  }
};