const mongoose = require('mongoose');
const Example = mongoose.model('Example');

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
    Example.create({name: req.query.name, price: req.query.price}, function (err, example) {
      if (!!err) {
        res.send(err);
      } else {
        res.send(example);
      }
    })
  }
};