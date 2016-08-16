'use strict';

// Express
const express = require('express');
const router = express.Router();

// Controllers

const example = require('./controllers/example');
const profile = require('./controllers/profile');

// Routes
router.get('/', function(req, res){
  res.send('Hello Wolrd!');
});

// get examples
router.get('/examples', example.list);

// create example by query string. URL: localhost:3000/examples/create?name=Banana&price=20
router.get('/examples/create', example.create);


router.get('/profile', profile.list);


router.get('/profile/create', profile.create);

module.exports = router;