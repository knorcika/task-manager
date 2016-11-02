'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Types.ObjectId;

module.exports = {
  profile0: {
    _id: ObjectId(),
    name: 'Teszt Elek',
    gender: 'male',
    age: 25,
    address: 'Ady Endre 16',
    email: 'tesztelek@teszt.hu'
  },
  profile1: {
    _id: ObjectId(),
    name: 'Beta Eva',
    gender: 'female',
    age: 19,
    address: 'Petofi Sandor 67',
    email: 'beta@gmail.com'
  },
  profile2: {
    _id: ObjectId(),
    name: 'Alfa Andras',
    gender: 'male',
    age: 32,
    address: 'Csillag ter 4',
    email: 'alfa@gmail.com'
  }
};
