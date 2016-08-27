'use strict';

const async = require('async');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
let fixturesDir = path.join(appRoot.toString(), 'test', 'fixtures');

/**
 * Clear all models
 * @param call - callback
 */
function clearAll(call) {
  async.each(mongoose.models, (model, cb) => {
    model.remove({}, cb)
  }, call)
}

/**
 * Load fixtures
 * @param call - callback
 */
function loadFixtures(call) {
  async.waterfall([
    cb => {
      let fixtures = fs.readdirSync(fixturesDir);
      fixtures = fixtures.filter(fixture => {
        return fixture.endsWith('.js');
      });
      fixtures = fixtures.map(fixture => path.parse(fixture).name);
      cb(null, fixtures);
    },
    (fixtures, cb) => {
      async.each(fixtures, (fixtureName, next) => {
        try {
          let fixture = require(path.join(fixturesDir, fixtureName));
          _createDocuments(fixtureName, fixture, next);
        } catch (err) {
          console.log(`Error during load fixture: ${fixtureName}`)
          next();
        }
      }, () => {
        cb();
      });
    }
  ], call)
}

/**
 * Create new documents
 * @param modelName - model name
 * @param fixture - fixture Object
 * @param call - callback
 * @private
 */
function _createDocuments(modelName, fixture, call) {
  async.each(fixture, (data, cb) => {
    mongoose.model(modelName).create(data, cb);
  }, call);
}

/**
 * Clear and Load all fixtures
 * @param call - callback
 */
function clearAndLoad(call) {
  async.waterfall([
    cb => {
      clearAll(cb)
    },
    cb => {
      loadFixtures(cb)
    }
  ], call)
}

module.exports = {
  clearAll: clearAll,
  loadFixtures: loadFixtures,
  clearAndLoad: clearAndLoad,
};