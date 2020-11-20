import * as fromBook from './book.actions';

describe('loadBooks', () => {
  it('should return an action', () => {
    expect(fromBook.loadBooks({searchTerm:''}).type).toBe('[Book] Load Books');
    expect(fromBook.loadBooksSuccess({response:[]}).type).toBe('[Book] Load Books Success');
    expect(fromBook.loadBooksFailure({error:''}).type).toBe('[Book] Load Books Failure');
    expect(fromBook.setSearchTerm({data:''}).type).toBe('[Book] Set search Term');
  });
});
