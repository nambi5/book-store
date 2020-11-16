import { reducer,  collectionItemState } from '../reducers/collection-item.reducer';

describe('CollectionItem Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(collectionItemState, action);

      expect(result).toBe(collectionItemState);
    });
  });
});
