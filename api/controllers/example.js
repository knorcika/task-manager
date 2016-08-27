const mongoose = require('mongoose');
const Example = mongoose.model('Example');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  list: function (req, res) {
    Example.find({}, function (err, examples) {
      if (!!err) {
        return res.send(err);
      }
      return res.send(examples);
    });
  },

  create: function (req, res) {
    var createParams = req.body;
    console.log(createParams);
    Example.create({name: createParams.name, price: createParams.price}, function (err, example) {
      if (!!err) {
        return res.send(err);
      }
      return res.send(example);
    })
  },

  update: function (req, res) {
    var exampleId = req.params.exampleId;
    var updateParams = req.body;
    console.log(updateParams);
    Example.update({_id: ObjectId(exampleId)}, updateParams, function (err) {
      if (!!err) {
        return res.send(err);
      }
      return res.send('success');
    })
  },

  delete: function (req, res) {
    var exampleId = req.params.exampleId;
    Example.remove({_id: ObjectId(exampleId)}, function(err){
      if(!!err){
        return res.send(err);
      }
      return res.send('success');
    })
  }
};