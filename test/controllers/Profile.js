'use strict';
const chai = require('chai');
const expect = chai.expect;
const Request = require('../tools/request');
const profileFixtures = require('../fixtures/Profile');

describe('Profile', () => {

  describe('#list', () => {
    it('should return list of profiles', done => {
      let path = '/profiles';
      new Request()
        .get(path)
        .send()
        .then(result => {
          expect(result.length).to.equal(3);
          done();
        })
        .catch(done);
    });
  });

  describe('#create', () => {
    it('should create new profile', done => {
      let path = '/profiles';
      let data = {
        name: 'Teszt Elekne Proba Anna',
        gender: 'female',
        age: 24,
        address: 'Ady Endre 16',
        email: 'tesztne@teszt.hu'
      };
      new Request()
        .post(path)
        .data(data)
        .send()
        .then(result => {
          expect(result).to.include.keys('_id', 'name', 'gender', 'age', 'address', 'email', 'createdAt');
          expect(result.name).to.equal(data.name);
          expect(result.gender).to.equal(data.gender);
          expect(result.age).to.equal(data.age);
          expect(result.address).to.equal(data.address);
          expect(result.email).to.equal(data.email);
          done();
        })
        .catch(done);
    });
  });


  describe('#update', () => {
    it('should update an profile', done => {
      let path = '/profiles/'+profileFixtures.profile0._id.toString();
      let data = {name: 'Test Elek22222', age: 27};
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
    it('should delete an profile', done => {
      let path = '/profiles/'+profileFixtures.profile0._id.toString();
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


