import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as collectionAction from '../actions/collection-item.actions';
import { CollectionItemState } from '../reducers/collection-item.reducer';
import { collectionItems } from '../selectors/book.selectors';

@Injectable({
  providedIn: 'root'
})
export class CollectionFacade {
  collectionItemList$ = this.store?.select(collectionItems);  
  constructor(private store: Store<CollectionItemState>) { }

  addItemsToCollection(res){
    this.store?.dispatch(collectionAction.addCollectionItems({collectionItems:res}))
  }
  addItemToCollection(selectedBook){
    this.store?.dispatch(collectionAction.addCollectionItem({collectionItem:selectedBook}))
  }
}
