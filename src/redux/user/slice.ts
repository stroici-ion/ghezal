import { createSlice } from '@reduxjs/toolkit';

import { IUserState } from './types';

const initialState: IUserState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
