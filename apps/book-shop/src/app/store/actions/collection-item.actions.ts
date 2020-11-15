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

export const upsertCollectionItem = createAction(
  '[CollectionItem/API] Upsert CollectionItem',
  props<{ collectionItem: CollectionItem }>()
);

export const addCollectionItems = createAction(
  '[CollectionItem/API] Add CollectionItems',
  props<{ collectionItems: CollectionItem[] }>()
);

export const upsertCollectionItems = createAction(
  '[CollectionItem/API] Upsert CollectionItems',
  props<{ collectionItems: CollectionItem[] }>()
);

export const updateCollectionItem = createAction(
  '[CollectionItem/API] Update CollectionItem',
  props<{ collectionItem: Update<CollectionItem> }>()
);

export const updateCollectionItems = createAction(
  '[CollectionItem/API] Update CollectionItems',
  props<{ collectionItems: Update<CollectionItem>[] }>()
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
