import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../reducers/book.reducer';
import * as bookAction from '../actions/book.actions';
import { bookList, selectedBook, userDetails } from '../selectors/book.selectors';

@Injectable({
  providedIn: 'root'
})
export class BookFacade {
  bookList$ = this.store?.select(bookList);
  userDetails$ = this.store.select(userDetails);
  selectedBook$ = this.store?.select(selectedBook);

  constructor(private store: Store<State>) { }

  lookBooks(searchTerm:string){
    return this.store?.dispatch(bookAction.loadBooks({searchTerm}))
  }
  setSearchTerm(searchTerm:string){
    return this.store?.dispatch(bookAction.setSearchTerm({data:searchTerm}));
  }
  setSelectedBook(book){
    return this.store?.dispatch(bookAction.setSelectedBook({data:book}));
  }
  clearSelectedState(){
    return this.store?.dispatch(bookAction.clearSelectedItem())
  }
  addBillingDetails(billingDetails){
    return this.store.dispatch(bookAction.addBillingDetails({ info: billingDetails }))
  }
}
