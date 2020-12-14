import * as testRequest from 'supertest';
import * as express from 'express';
import * as main from '../../main';
import * as bookController from './book.controller'
import {books, formattedBooks} from '../../../fake-db/fake-book'
const nock = require('nock');

describe('book controller', () => {
  beforeEach(()=>{
    nock('https://www.googleapis.com').get('/books/v1/volumes?q=test').reply(200,books);
    nock('https://www.googleapis.com').get('/books/v1/volumes?q=error').reply(500,new Error());
  })
  const app = express();
  it('get book list 400 error type', (done) => {
    testRequest(main.app)
      .get('/book/search/')
      .expect(400)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
  it('get book list 200 response type', (done) => {
    testRequest(main.app)
      .get('/book/search/test')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.response).toEqual(formattedBooks)
        done();
      });
  });
  it('get Error 500 for internal server error', (done) => {
   
    testRequest(main.app)
      .get('/book/search/error')
      .expect(500)
      .end((err, res) => {
        // if (err) throw err;
        done();
      });
  });
  it('should reformate the book object to single level', () => {
    
    const filterBookInfoMockReturn = bookController.filterBookInfo(books.items);
    expect(filterBookInfoMockReturn).toEqual(formattedBooks)
  })
});
