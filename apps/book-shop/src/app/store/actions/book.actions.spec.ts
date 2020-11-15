import * as fromBook from './book.actions';

describe('loadBooks', () => {
  it('should return an action', () => {
    expect(fromBook.loadBooks({searchTerm:''}).type).toBe('[Book] Load Books');
  });
});
