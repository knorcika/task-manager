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
    Profile.create({name: req.query.name, price: req.query.price}, function (err, profil) {
      if (!!err) {
        res.send(err);
      } else {
        res.send(profile);
      }
    })
  }
};