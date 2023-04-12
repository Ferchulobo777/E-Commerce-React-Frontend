import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
