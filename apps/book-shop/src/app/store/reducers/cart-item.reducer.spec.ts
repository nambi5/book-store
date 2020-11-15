import { reducer, cartItemState } from '../reducers/cart-item.reducer';

describe('CartItem Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(cartItemState, action);

      expect(result).toBe(cartItemState);
    });
  });
});
