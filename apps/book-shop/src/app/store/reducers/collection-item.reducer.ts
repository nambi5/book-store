import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CollectionItem } from '../models/collection-item.model';
import * as CollectionItemActions from '../actions/collection-item.actions';

export const collectionItemsFeatureKey = 'collectionItems';

export interface CollectionItemState extends EntityState<CollectionItem> {
  // additional entities state properties
}

export const collectionItemAdapter: EntityAdapter<CollectionItem> = createEntityAdapter<CollectionItem>();

export const collectionItemState: CollectionItemState = collectionItemAdapter.getInitialState({
  // additional entity state properties
});


export const collectionItemReducer = createReducer(
  collectionItemState,
  on(CollectionItemActions.addCollectionItem,
    (state, action) => collectionItemAdapter.addOne(action.collectionItem, state)
  ),
  on(CollectionItemActions.upsertCollectionItem,
    (state, action) => collectionItemAdapter.upsertOne(action.collectionItem, state)
  ),
  on(CollectionItemActions.addCollectionItems,
    (state, action) => collectionItemAdapter.addMany(action.collectionItems, state)
  ),
  on(CollectionItemActions.upsertCollectionItems,
    (state, action) => collectionItemAdapter.upsertMany(action.collectionItems, state)
  ),
  on(CollectionItemActions.updateCollectionItem,
    (state, action) => collectionItemAdapter.updateOne(action.collectionItem, state)
  ),
  on(CollectionItemActions.updateCollectionItems,
    (state, action) => collectionItemAdapter.updateMany(action.collectionItems, state)
  ),
  on(CollectionItemActions.deleteCollectionItem,
    (state, action) => collectionItemAdapter.removeOne(action.id, state)
  ),
  on(CollectionItemActions.deleteCollectionItems,
    (state, action) => collectionItemAdapter.removeMany(action.ids, state)
  ),
  on(CollectionItemActions.loadCollectionItems,
    (state, action) => collectionItemAdapter.setAll(action.collectionItems, state)
  ),
  on(CollectionItemActions.clearCollectionItems,
    state => collectionItemAdapter.removeAll(state)
  ),
);

export function reducer(state: CollectionItemState | undefined, action: Action) {
  return collectionItemReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = collectionItemAdapter.getSelectors();

// select the array of CollectionItem ids
export const selectCollectionItemIds = selectIds;
 
// select the dictionary of CollectionItem entities
export const selectCollectionItemEntities = selectEntities;
 
// select the array of users
export const selectAllCollectionItems = selectAll;
 
// select the total CollectionItem count
export const selectCollectionItemTotal = selectTotal;