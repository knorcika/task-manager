'use strict';

// Express
const express = require('express');
const router = express.Router();

// Controllers
const example = require('./controllers/example');
const task = require('./controllers/task');
const profile = require('./controllers/profile');

// Routes
router.get('/', function(req, res){
  res.send('Hello Wolrd!');
});

// get examples
// type: get
router.get('/examples', example.list);

// create example
// type: post
// URL: localhost:3000/examples
// body = {"name": "Name", "price": "10"}
router.post('/examples', example.create);

// update example
// type: patch
// URL: localhost:3000/examples/57c18c90caa2e6141fab4962
// body = {"name": "Name", "price": "10"}
router.put('/examples/:exampleId', example.update);

// update example
// type: delete
// URL: localhost:3000/examples/57c18c90caa2e6141fab4962
router.delete('/examples/:exampleId', example.delete);

router.get('/profile', profile.list);

router.get('/profile/create', profile.create);

router.get('/task', task.list);

router.get('/task/create', task.create);

module.exports = router;