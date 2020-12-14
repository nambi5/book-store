import * as testRequest from 'supertest';
import * as express from 'express';
import * as bookRoute from './book.route';
import * as main from '../../main';
describe('Test routes', () => {
  const app = express();
  it('GET /search/', (done) => {
    testRequest(main.app).get('/book/search/')
    .expect(400)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });
  it('GET /search/:searchterm', (done) => {
    testRequest(main.app).get('/book/search/123')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });
});
