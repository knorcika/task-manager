const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  list: function (req, res) {
    Profile.find({}, function (err, profiles) {
      if (!!err) {
        return res.send(err);
      }
      return res.send(profiles);
    });
  },

  create: function (req, res) {
    var createParams = req.body;
    console.log(createParams);
    var data = {
      name: createParams.name,
      gender: createParams.gender,
      age: createParams.age,
      address: createParams.address,
      email: createParams.email
    };
    Profile.create(data, function (err, profiles) {
      if (!!err) {
        return res.send(err);
      }
      return res.send(profiles);
    });
  },


  update: function (req, res) {

    var profileId = req.params.profileId;
    var updateParams = req.body;
    console.log(updateParams);

    Profile.update({_id: ObjectId(profileId)}, updateParams, function (err) {
      if (!!err) {
        return res.send(err);
      }
      return res.send('success');
    })

  },


  delete: function (req, res) {

    var profileId = req.params.profileId;

    Profile.remove({_id: ObjectId(profileId)}, function (err) {
      if (!!err) {
        return res.send(err);
      }
      return res.send('success');
    })

  }


}