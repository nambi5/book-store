import * as testRequest from 'supertest';
import * as express from 'express';
import * as main from '../../main';
import { books } from 'apps/api/fake-db/fake-book';
const nock = require('nock');
describe('Test routes', () => {
  const app = express();
  beforeEach(()=>{
      nock('https://www.googleapis.com').get('/books/v1/volumes?q=test').reply(200,books);
  })
  it('GET /search/', (done) => {
    testRequest(main.app).get('/book/search/')
    .expect(400)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });
  it('GET /search/:searchterm', (done) => {
    testRequest(main.app).get('/book/search/test')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });
});
