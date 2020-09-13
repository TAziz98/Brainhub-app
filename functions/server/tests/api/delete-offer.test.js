const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:5000/api/v1');
let promise = null;

describe('API delete-offer end-point', () => {

   // TODO: before running the test, make sure documenId exists
  const mockDocumentId = "2b10ad2f-9192-4825-a32c-a00f72469fb9";
  const mockSalary = 14540;
  before(() => {
    promise = api
      .delete(`/offers/${mockDocumentId}`)
      .send(mockOffer)
      .catch(error => { throw error });
  });

  it('Offer should be deleted, which had salary according to mockOffer', () => {
    api
      .get(`/offers/${mockDocumentId}`)
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.body.salary).to.equal(mockSalary);
      })
  })

  it('Response text should include', () => {
    promise
      .then(response => {
        expect(response.text).to.include('succeefully deleted');
      })
  })

  it('Response should return status of 200', () => {
    promise
    .then(response => {
      expect(response.status).to.equal(200);
    })
  })
})