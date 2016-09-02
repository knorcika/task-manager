'use strict';

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const config = require('./config');
const port = process.env.API_PORT || 3000;
const env = process.env.NODE_ENV || 'local';
const app = express();
const morgan = require('morgan');

const mongoose = require('mongoose');

// require models
const models = require('require-all')(__dirname + '/models');

// export app
module.exports = app;

app.use(morgan('tiny'));

app.use(cookieParser());
// bodyParser should be above methodOverride
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text({type: 'application/x-protobuf+b64'}));
app.use(bodyParser.raw({type: 'application/x-protobuf'}));

app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// load routing
console.log('Bind routes');
app.use(require('./routes.js'));

app.use((err, req, res, next) => {
  console.log(err);
});

process.on('uncaughtException', function (err) {
  console.log(err);
});

var mongoConnection = mongoose.connect('mongodb://localhost:27017/task-manager').connection;

mongoConnection.on('open', function () {
  app.listen(port);
  app.emit('listening', null);
  console.info('Express app started on port ' + port);
});

module.exports = app;
