'use strict';

const chai = require('chai');
const expect = chai.expect;
const Request = require('../tools/request');
const exampleFixtures = require('../fixtures/Example');

describe('Example', () => {

  describe('#list', () => {
    it('should return list of examples', done => {
      let path = '/examples';
      new Request()
        .get(path)
        .send()
        .then(result => {
          expect(result.length).to.equal(2);
          done();
        })
        .catch(done);
    });
  });

  describe('#create', () => {
    it('should create new example', done => {
      let path = '/examples';
      let data = {name: 'Test Name', price: 101};
      new Request()
        .post(path)
        .data(data)
        .send()
        .then(result => {
          expect(result).to.include.keys('_id', 'name', 'price', 'createdAt');
          expect(result.name).to.equal(data.name);
          expect(result.price).to.equal(data.price);
          done();
        })
        .catch(done);
    });
  });

  describe('#update', () => {
    it('should update an example', done => {
      let path = '/examples/'+exampleFixtures.example0._id.toString();
      let data = {name: 'Test Name', price: 101};
      new Request()
        .put(path)
        .data(data)
        .send()
        .then(result => {
          expect(result).to.equal('success');
          done();
        })
        .catch(done);
    });
  });

  describe('#delete', () => {
    it('should delete an example', done => {
      let path = '/examples/'+exampleFixtures.example0._id.toString();
      new Request()
        .delete(path)
        .send()
        .then(result => {
          expect(result).to.equal('success');
          done();
        })
        .catch(done);
    });
  });
});