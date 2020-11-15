import { createFeatureSelector, createSelector } from '@ngrx/store';
import {initialState, State,bookFeatureKey} from '../reducers/book.reducer'
import { cartItemsFeatureKey, CartItemState,  selectAllCartItems, selectCartItemIds, selectCartItemTotal } from '../reducers/cart-item.reducer';
import { collectionItemsFeatureKey, CollectionItemState, selectAllCollectionItems, selectCollectionItemIds } from '../reducers/collection-item.reducer';

export const books = createFeatureSelector<State>(
    bookFeatureKey,
);
export const cartBooks = createFeatureSelector<CartItemState>(
    cartItemsFeatureKey,
);
export const collectionBooks = createFeatureSelector<CollectionItemState>(
    collectionItemsFeatureKey,
);

export const bookList = createSelector(
    books,
    (state: State) => state.list
)
export const selectedBook = createSelector(
    books,
    (state: State) => state.selectedBook
)

export const userDetails = createSelector(
    books,
    (state: State) => state.billingDetails
)

export const cartItemId = createSelector(
    cartBooks,
    selectCartItemIds
)
export const cartLength = createSelector(
    cartBooks,
    selectCartItemTotal
)

export const cartItems = createSelector(
    cartBooks,
    selectAllCartItems   
);
// export const cartItems = createSelector(
//     cartItemId,
//     bookList,
//     (cartItem: any, list: any) => {
//         if(cartItem?.length && list?.length){
//             const booksInCart = [];
//              cartItem.forEach(id => {
//                  list.find(book => {
//                     if(book.id === id){
//                         booksInCart.push(book);
//                         return true;
//                     }
//                 })
//             })
//             return booksInCart;
//         }
//     }
// );

export const collectionItemId = createSelector(
    collectionBooks,
    selectCollectionItemIds
)
export const collectionItems = createSelector(
    collectionBooks,
    selectAllCollectionItems
    

)
// export const collectionItems = createSelector(
//     collectionItemId,bookList,
//     (collectionItem: any,list)=>{
//         if(collectionItem?.length && list?.length){
//             const booksPurchased = [];
//             collectionItem.forEach(id => {
//                  list.find((book: any) => {
//                     if(book.id === id){
//                         booksPurchased.push(book);
//                         return true;
//                     }
//                 })
//             })
//             return booksPurchased;
//         }
//     }

// )
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