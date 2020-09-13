"use strict";

const expect = require('chai').expect;

const supertest = require('supertest');

const api = supertest('http://localhost:5000/api/v1');
let promise = null;
describe('API put-offer end-point', () => {
  // TODO: before running the test, make sure documenId exists
  const mockDocumentId = "5c007f32-ccb4-4712-86e2-4dccc7a90acb"; // TODO: documentId should be placed in the body of request, to keep both ids same 
  // request without specifying id fails

  mockOffer = {
    id: mockDocumentId,
    title: 'Senior Java Developer',
    category: 'Technology',
    companyName: 'Oracle',
    companySize: 768,
    salaryCurrency: 'USD',
    salary: 14540
  };
  before(() => {
    promise = api.put(`/offers/${mockDocumentId}`).send(mockOffer).catch(error => {
      throw error;
    });
  });
  it('Salary should be updated according to mockOffer', () => {
    api.get(`/offers/${mockDocumentId}`).set('Accept', 'application/json').then(response => {
      expect(response.body.salary).to.equal(mockOffer.salary);
    });
  });
  it('Response serverError should return false', () => {
    promise.then(response => {
      expect(response.serverError).to.be.false;
    });
  });
  it('Response should be ok', () => {
    promise.then(response => {
      expect(response.ok).to.be.true;
    });
  });
});