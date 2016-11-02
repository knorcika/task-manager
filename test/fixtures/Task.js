'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Types.ObjectId;

module.exports = {
  task0: {
    _id: ObjectId(),
    name: 'firstTask'
  },
  task1: {
    _id: ObjectId(),
    name: 'secondTask'
  }
};