'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Types.ObjectId;
module.exports = {
  example0: {
    _id: ObjectId(),
    name: 'Example0',
    price: 50
  },
  example1: {
    _id: ObjectId(),
    name: 'Example1',
    price: 55
  }
};