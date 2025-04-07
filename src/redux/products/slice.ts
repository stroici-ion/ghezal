import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProductsState } from './types';

import l1 from '../../images/products/lamps_01.png';
import c1 from '../../images/products/chairs_01.png';
import t1 from '../../images/products/tables_01.png';
import s1 from '../../images/products/02.png';

const initialState: IProductsState = {
  products: [
    {
      id: 0,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1, l1, l1, l1],
      price: 699,
      colors: ['#d38232', '#2d2d2d', '#e9d758', '#e1d4c4', '#d9d9d9'],
    },
    {
      id: 1,
      title: 'Scaun de bucătărie',
      imageUrls: [c1, c1, c1],
      price: 559,
    },
    {
      id: 2,
      title: 'Masa de birou',
      imageUrls: [t1, t1, t1],
      price: 3699,
    },
    {
      id: 3,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
    {
      id: 4,
      title: 'Multietajera sertare',
      imageUrls: [s1, s1, s1],
      price: 999,
    },
    {
      id: 5,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
    {
      id: 6,
      title: 'Scaun de bucătărie',
      imageUrls: [c1, c1, c1],
      price: 559,
    },
    {
      id: 7,
      title: 'Masa de birou',
      imageUrls: [t1, t1, t1],
      price: 3699,
    },
    {
      id: 8,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
    {
      id: 9,
      title: 'Multietajera sertare',
      imageUrls: [s1, s1, s1],
      price: 999,
    },
    {
      id: 10,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
    {
      id: 11,
      title: 'Scaun de bucătărie',
      imageUrls: [c1, c1, c1],
      price: 559,
    },
    {
      id: 12,
      title: 'Masa de birou',
      imageUrls: [t1, t1, t1],
      price: 3699,
    },
    {
      id: 13,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
    {
      id: 14,
      title: 'Multietajera sertare',
      imageUrls: [s1, s1, s1],
      price: 999,
    },
    {
      id: 15,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
    {
      id: 16,
      title: 'Scaun de bucătărie',
      imageUrls: [c1, c1, c1],
      price: 559,
    },
    {
      id: 17,
      title: 'Masa de birou',
      imageUrls: [t1, t1, t1],
      price: 3699,
    },
    {
      id: 18,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
    {
      id: 19,
      title: 'Multietajera sertare',
      imageUrls: [s1, s1, s1],
      price: 999,
    },
    {
      id: 20,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
    {
      id: 21,
      title: 'Scaun de bucătărie',
      imageUrls: [c1, c1, c1],
      price: 559,
    },
    {
      id: 22,
      title: 'Masa de birou',
      imageUrls: [t1, t1, t1],
      price: 3699,
    },
    {
      id: 23,
      title: 'Lampă pe picior',
      imageUrls: [l1, l1, l1],
      price: 699,
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
