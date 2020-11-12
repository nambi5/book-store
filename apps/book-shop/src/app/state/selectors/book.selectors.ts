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

export const cartItemId = createSelector(
    books,
    (state: any) => state.cartItem
)

export const cartItems = createSelector(
    cartItemId,
    bookList,
    (cartItem: any, list: any) => {
        if(cartItem?.length && list?.length){
            const booksInCart = [];
             cartItem.forEach(id => {
                 list.find(book => {
                    if(book.id === id){
                        booksInCart.push(book);
                        return true;
                    }
                })
            })
            return booksInCart;
        }
    }
);

export const collectionItemId = createSelector(
    books,
    (state: State) => state.collectionItem
)
export const collectionItems = createSelector(
    collectionItemId,bookList,
    (collectionItem: any,list)=>{
        if(collectionItem?.length && list?.length){
            const booksPurchased = [];
            collectionItem.forEach(id => {
                 list.find((book: any) => {
                    if(book.id === id){
                        booksPurchased.push(book);
                        return true;
                    }
                })
            })
            return booksPurchased;
        }
    }

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