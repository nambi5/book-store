import * as request from 'supertest';
import * as express from 'express';
import * as main from '../../main';

describe('book controller', () => {
  const app = express();
  it('get book list 400 error type', (done) => {
    request(main.app)
      .get('/book/search/')
      .expect(400)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
  it('get book list 200 response type', (done) => {
    request(main.app)
      .get('/book/search/test')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
});
