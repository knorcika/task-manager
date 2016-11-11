const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const ObjectId = mongoose.Types.ObjectId;
const async = require('async');

//const Profile = mongoose.model('Profile');

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

    var createParams = req.body;
    console.log(createParams);
    console.log("PROBA: " + createParams);

    Task.create({name: createParams.name}, function (err, tasks) {
      if (!!err) {
        return res.send(err);
      }
      return res.send(tasks);
    });
  },


  update: function (req, res) {

    var taskId = req.params.taskId;
    var updateParams = req.body;
    console.log(updateParams);

    Task.update({_id: ObjectId(taskId)}, updateParams, function (err) {
      if (!!err) {
        return res.send(err);
      }
      return res.send('success');
    });
  },


  delete: function (req, res) {

    var taskId = req.params.taskId;

    Task.remove({_id: ObjectId(taskId)}, function (err) {
      if (!!err) {
        return res.send(err);
      }
      return res.send('success');
    });
  },


  assign: function (req, res) {

    var taskId = req.params.taskId;
    var arrAssign = req.body.assigned;

    async.each(
      arrAssign, //items,

      function (item, callback) {
        Task.update({_id: ObjectId(taskId)}, {$addToSet: {assigned: item}}, function (err, tasks) {
          if (!!err) {
            return callback(err);
          }
          callback();
        });
      },

      function (err) {
        if (!!err) {
          return res.send(err);
        }
        return res.send('success');
      }
    );

  }

}

