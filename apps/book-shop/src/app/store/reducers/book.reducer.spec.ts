import { reducer, initialState, State } from './book.reducer';
import * as bookAction from '../actions/book.actions'
describe('Book Reducer', () => {
  describe('an bookLoading action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
    it('on loadBooksSuccess', () => {
      const data: any = {
          response:[]
    }
      const action = bookAction.loadBooksSuccess(data);
      const state: State = reducer(initialState, action);
  
      expect(state.loaded).toEqual(true);
      expect(state.error).toEqual(null);
      expect(state.list).toEqual([]);
      expect(state.billingDetails).toBeNull();
      expect(state.selectedBook).toBeNull();
      expect(state.searchKey).toBe('');
    });

    it('on loadBooksFailure', () => {
      const data: any = {
          error:[]
    }
      const action = bookAction.loadBooksFailure(data);
      const state: State = reducer(initialState, action);
  
      expect(state.loaded).toEqual(false);
      expect(state.error).toEqual("Load Failed");
      expect(state.list).toEqual([]);
      expect(state.billingDetails).toBeNull();
      expect(state.selectedBook).toBeNull();
      expect(state.searchKey).toBe('');
    });
   it('on setSearctTerm', ()=>{
    const action = bookAction.setSearchTerm({data:'test'});
    const state: State = reducer(initialState, action);
    expect(state.searchKey).toBe('test');
   }) 
   it('on clearSelectedState', ()=>{
    const action = bookAction.clearSelectedItem();
    const state: State = reducer(initialState, action);
    expect(state.selectedBook).toBe(null);
   }) 
  });
});
