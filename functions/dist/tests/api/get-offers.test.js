"use strict";

const expect = require('chai').expect;

const supertest = require('supertest');

let promise = null;
describe('API get-all-offers end-point', () => {
  before(() => {
    const api = supertest('http://localhost:5000/api/v1');
    promise = api.get('/offers/all').set('Accept', 'application/json').catch(error => {
      throw error;
    });
  });
  it('Response should be an array', () => {
    promise.then(response => {
      expect(response.body).to.be.an.instanceof(Array);
    });
  });
  it('Response should have property id', () => {
    promise.then(response => {
      expect(response.body[0]).to.have.own.property('id');
    });
  });
  it('Response should have a length greather than 0', () => {
    promise.then(response => {
      expect(response.body).to.have.lengthOf.above(0);
    });
  });
});