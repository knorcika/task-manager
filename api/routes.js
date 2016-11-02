'use strict';

// Express
const express = require('express');
const router = express.Router();

// Controllers
const example = require('./controllers/example');
const profile = require('./controllers/profile');
const task = require('./controllers/task');

// Routes
router.get('/', function (req, res) {
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


router.get('/profiles', profile.list);
router.post('/profiles', profile.create);
router.put('/profiles/:profileId', profile.update);
router.delete('/profiles/:profileId', profile.delete);


router.get('/tasks', task.list);
router.post('/tasks', task.create);
router.put('/tasks/:taskId', task.update);
router.delete('/tasks/:taskId', task.delete);

module.exports = router;