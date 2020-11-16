import { Books } from "../../models/book-search.model";
import { initialState, State } from '../reducers/book.reducer';
import { bookList, books } from './book.selectors';


describe('Book Selectors', () => {
  it('should select the feature state', () => {
    const initialstate: State = {...initialState};
    expect(bookList.projector(initialstate)).toBe(initialstate.list);
  });
});
