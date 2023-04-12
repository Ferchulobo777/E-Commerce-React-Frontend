import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user.slice';
import cart from './slices/cartSlice';

const store = configureStore({
  reducer: {
    user,
    cart,
  },
});

export default store;
