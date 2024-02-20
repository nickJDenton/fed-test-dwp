const request = require('supertest');
const app = require('../app.js');

describe('GET /', function() {
  it('successfully loads page', function() {
    return request(app)
      .get('/')
      .expect(200)
  })
})

describe('POST /', function() {
  it('successfully loads addresses page', function() {
    return request(app)
      .post('/addresses')
      .send({postcode: 'ls1 4pp'})
      .expect(200)
  })
})

describe('POST /', function() {
  it('page is made up of text/HTML', function() {
    return request(app)
      .post('/addresses')
      .send({postcode: 'ls1 4pp'})
      .expect('Content-Type', "text/html; charset=utf-8")
  })
})

describe('POST /', function() {
  it('successfully redirects to enter postcode screen when no postcode is entered', function() {
    return request(app)
      .post('/addresses')
      .send({postcode: ''})
      .expect(302)
      .expect('Location', '/')
  })
})



