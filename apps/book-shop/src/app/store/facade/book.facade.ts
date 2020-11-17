import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../reducers/book.reducer';
import * as bookAction from '../actions/book.actions';
import { bookList, selectedBook } from '../selectors/book.selectors';

@Injectable({
  providedIn: 'root'
})
export class BookFacade {
  bookList$ = this.store?.select(bookList);
  selectedBook$ = this.store?.select(selectedBook);

  constructor(private store: Store<State>) { }

  lookBooks(searchTerm:string){
    this.store?.dispatch(bookAction.loadBooks({searchTerm}))
  }
  setSearchTerm(searchTerm:string){
    this.store?.dispatch(bookAction.setSearchTerm({data:searchTerm}));
  }
  setSelectedBook(book){
    this.store?.dispatch(bookAction.setSelectedBook({data:book}));
  }
  clearSelectedState(){
    this.store?.dispatch(bookAction.clearSelectedItem())
  }
}
