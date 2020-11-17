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

export const collectionItemId = createSelector(
    collectionBooks,
    selectCollectionItemIds
)
export const collectionItems = createSelector(
    collectionBooks,
    selectAllCollectionItems
)