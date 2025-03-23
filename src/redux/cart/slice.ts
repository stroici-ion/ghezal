import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartState, TCartItem } from './types';
import { TProduct } from '../products/types';

const initialState: ICartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<[]>) => {
      state.cartItems = action.payload;
    },
    addCartItem: (state, action: PayloadAction<TProduct>) => {
      state.selectedCartItem = {
        product: action.payload,
        selectedColor: 'white',
        selectedMaterial: 'wood',
        count: 1,
      };
    },
  },
});

export const { setCartItems, addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
