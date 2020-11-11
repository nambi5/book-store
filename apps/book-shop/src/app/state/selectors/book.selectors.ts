import { createFeatureSelector, createSelector } from '@ngrx/store';
import {initialState, State,bookFeatureKey} from '../reducers/book.reducer'

export const books = createFeatureSelector<State>(
    bookFeatureKey,
);

export const bookList = createSelector(
    books,
    (state: any) => state.list
)
export const selectedBook = createSelector(
    books,
    (state: any) => state.selectedBookId
)
export const selectedBookDetails = createSelector(
    bookList,
    (state: any, props) => {
        if(state){
          return state.find(
                (book) =>{
                    if(book.id === props){
                        return book;
                    }
                }
            )
        }
    }
)