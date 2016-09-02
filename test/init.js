'use strict';
let server = require('../server');
let fixtures = require('./tools/fixtures');
before((done) => {
  server.on('listening', () => {
    fixtures.clearAndLoad(done)
  })
});