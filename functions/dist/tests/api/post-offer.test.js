"use strict";

const expect = require('chai').expect;

const supertest = require('supertest');

const api = supertest('http://localhost:5000/api/v1');
let promise = null;
describe('API post-offer end-point', () => {
  mockOffer = {
    title: 'Junior Developer',
    category: 'Technology',
    companyName: 'Milod co',
    companySize: 400,
    salaryCurrency: 'TJS',
    salary: 10000
  };
  before(() => {
    promise = api.post('/offers').send(mockOffer).catch(error => {
      throw error;
    });
  });
  it('Response text should be a string', () => {
    promise.then(response => {
      expect(response.text).to.be.a('string');
    });
  });
  it('Response status should be 200 (ok)', () => {
    promise.then(response => {
      expect(response.status).to.equal(200);
    });
  });
  it('Response text should include', () => {
    promise.then(response => {
      expect(response.text).to.include('succeefully published');
    });
  });
});