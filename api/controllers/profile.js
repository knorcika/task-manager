const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');

module.exports = {
  list: function (req, res) {
    Profile.find({}, function (err, examples) {
      if (!!err) {
        return res.send(err);
      }
      return res.send(examples);
    });
  },
  create: function (req, res) {
    Profile.create({name: req.query.name, gender: req.query.gender, age: req.query.age, address: req.query.address, email: req.query.email}, function (err, profile) {
      if (!!err) {
        res.send(err);
      } else {
        res.send(profile);
      }
    })
  }
};