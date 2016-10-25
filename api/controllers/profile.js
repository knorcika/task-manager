const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    list: function(req, res){
        Profile.find({}, function (err, profiles){
            if(!!err){
                return res.send(err);
            }
            return res.send(profiles);
        });
    },

    create: function(req, res){
        var createParams = req.body;
        console.log(createParams);
        Profile.create({name: createParams.name,gender: createParams.gender, age: createParams.age, address: createParams.address, email: createParams.email}, function(err, profiles){
            if(!!err){
                return res.send(err);
            }
            return res.send(profiles);
        });
    }
}