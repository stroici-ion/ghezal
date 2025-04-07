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
    selectProduct: (state, action: PayloadAction<TProduct>) => {
      state.selectedCartItem = {
        id: Math.random(),
        product: action.payload,
        selectedColor: '#d38232',
        selectedMaterial: 'wood',
        count: 1,
      };
    },
    addCartItem: (state, action: PayloadAction<TCartItem>) => {
      state.cartItems.push(action.payload);
    },
    setSelectedCartItem: (state, action: PayloadAction<TCartItem>) => {
      state.selectedCartItem = action.payload;
    },
    setCartItem: (state, action: PayloadAction<TCartItem>) => {
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id ? action.payload : cartItem
      );
    },
  },
});

export const { setCartItems, selectProduct, addCartItem, setCartItem, setSelectedCartItem } = cartSlice.actions;

export default cartSlice.reducer;
