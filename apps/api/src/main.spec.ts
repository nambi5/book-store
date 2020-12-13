import * as express from 'express';
import * as request from 'supertest';
import * as main from './main';
describe('app initialization', () => {
  it('GET /', (done) => {
    request(main.app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });
});
