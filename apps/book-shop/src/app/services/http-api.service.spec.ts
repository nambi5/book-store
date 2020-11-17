import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpApiService } from './http-api.service';
import { HttpClient } from '@angular/common/http';
import { Books } from '../models/book-search.model';

describe('HttpApiService', () => {
  let service: HttpApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(HttpApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return books list when getBook api called',() =>{
    const dummyData = {id:'712323121'};
    const searchTerm = "";
    service
      .getBooks(searchTerm)
      .subscribe((books: Books) => {
        expect(books).toEqual(dummyData);
      });

    const request = httpMock.expectOne(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    expect(request.request.method).toBe('GET');
    request.flush(dummyData);
  })
});
