import { RootState } from '..';

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectSelectedCartItem = (state: RootState) => state.cart.selectedCartItem;
