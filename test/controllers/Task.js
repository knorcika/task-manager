'use strict';

const chai = require('chai');
const expect = chai.expect;
const Request = require('../tools/request');
const taskFixtures = require('../fixtures/Task');
const async = require('async');

describe('Task', () => {

  describe('#list', () => {
    it('should return list of tasks', done => {
      let path = '/tasks';
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
    it('should create new task', done => {
      let path = '/tasks';
      let data = {
        name: 'New Task'
      };
      new Request()
        .post(path)
        .data(data)
        .send()
        .then(result => {
          expect(result).to.include.keys('_id', 'name', 'createdAt');
          expect(result.name).to.equal(data.name);
          done();
        })
        .catch(done);
    });
  });


  describe('#update', () => {
    it('should update an task', done => {
      let path = '/tasks/' + taskFixtures.task0._id.toString();
      let data = {name: 'NewTaskName'};
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
    it('should delete an task', done => {
      let path = '/tasks/' + taskFixtures.task0._id.toString();
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


  describe('#assign', () => {
    it('add assign', done => {
      let path = '/tasks/' + taskFixtures.task1._id.toString();
      let data = {assigned: ['2', '1']};
      new Request()
        .post(path)
        .data(data)
        .send()
        .then(result => {
          expect(result).to.equal('success');
          done();
        })
        .catch(done);
    });
  });

  describe('#assign', () => {
    it('add assign', done => {
      let path = '/tasks/' + taskFixtures.task1._id.toString();
      let data = {assigned: ['3', '1']};
      new Request()
        .post(path)
        .data(data)
        .send()
        .then(result => {
          expect(result).to.equal('success');
          done();
        })
        .catch(done);
    });
  });



});