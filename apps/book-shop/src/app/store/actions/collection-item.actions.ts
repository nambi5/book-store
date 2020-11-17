import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { CollectionItem } from '../models/collection-item.model';

export const loadCollectionItems = createAction(
  '[CollectionItem/API] Load CollectionItems', 
  props<{ collectionItems: CollectionItem[] }>()
);

export const addCollectionItem = createAction(
  '[CollectionItem/API] Add CollectionItem',
  props<{ collectionItem: CollectionItem }>()
);

export const addCollectionItems = createAction(
  '[CollectionItem/API] Add CollectionItems',
  props<{ collectionItems: CollectionItem[] }>()
);

export const deleteCollectionItem = createAction(
  '[CollectionItem/API] Delete CollectionItem',
  props<{ id: string }>()
);

export const deleteCollectionItems = createAction(
  '[CollectionItem/API] Delete CollectionItems',
  props<{ ids: string[] }>()
);

export const clearCollectionItems = createAction(
  '[CollectionItem/API] Clear CollectionItems'
);
