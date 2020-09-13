"use strict";

const expect = require('chai').expect;

const supertest = require('supertest');

const api = supertest('http://localhost:5000/api/v1');
let promise = null;
describe('API get-single-offer end-point', () => {
  before(() => {
    // TODO: before running the test, make sure documenId exists
    const mockDocumentId = "2432f315-bdb8-4a87-b113-5980a33ba846";
    promise = api.get(`/offers/${mockDocumentId}`).set('Accept', 'application/json').catch(error => {
      throw error;
    });
  });
  it('Response should be an object', () => {
    promise.then(response => {
      expect(response.body).to.be.an.instanceof(Object);
    });
  });
  it('Response should not be empty', () => {
    promise.then(response => {
      expect(response.body).to.not.be.empty;
    });
  });
  it('Response should have property title', () => {
    promise.then(response => {
      expect(response.body).to.have.own.property('title');
    });
  });
});