import * as testRequest from 'supertest';
import * as express from 'express';
import * as main from '../../main';
import * as bookController from './book.controller'
import { Book } from '@book-store/ui';

describe('book controller', () => {
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
    const book = [{
      id:'123',
      volumeInfo:{
      title: 'title',
      description: 'description',
      imageLinks: null,
      authors: null,
      averageRating: 0,
      publisher: 'publisher',
      pageCount: 0,
      language: 'language',
      previewLink:'previewLink'
      }
    }];
    // spyOn(bookController, 'requestExternalAPI').and.callFake()
    testRequest(main.app)
      .get('/book/search/test')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
  it('get Error 500 for internal server error', (done) => {
   
    spyOn(bookController, 'requestExternalAPI').and.callFake(
      () => {
        throw {code:500,error:'Internal server error'}
      }
    )
    testRequest(main.app)
      .get('/book/search/test')
      .expect(500)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
  it('should reformate the book object to single level', () => {
    const book = [{
      id:'123',
      volumeInfo:{
      title: 'title',
      description: 'description',
      imageLinks: null,
      authors: null,
      averageRating: 0,
      publisher: 'publisher',
      pageCount: 0,
      language: 'language',
      previewLink:'previewLink'
      }
    }];
    const formattedBooks:Book[]=[{
      id:'123',
      title:'title',
      description: 'description',
      imageLinks: null,
      authors: null,
      averageRating: 0,
      publisher: 'publisher',
      pageCount: 0,
      language: 'language',
      previewLink:'previewLink'
    }]
    const filterBookInfoMockReturn = bookController.filterBookInfo(book);
    expect(filterBookInfoMockReturn).toEqual(formattedBooks)
  })
});
