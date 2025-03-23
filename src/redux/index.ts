import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import products from './products/slice';
import cart from './cart/slice';
import user from './user/slice';

const store = configureStore({
  reducer: {
    products,
    cart,
    user,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
