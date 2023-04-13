import { createSlice } from '@reduxjs/toolkit';
import { getCart } from '../../services/getCart';

const initialState = {
  products: [],
  loading: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartProducts(state, action) {
      state.products = action.payload;
    },
    setCartLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

const { setCartLoading, setCartProducts } = cartSlice.actions;

export const loadCartProducts = (token) => async (dispatch) => {
  //ESTABLECER EL LOADING A TRUE
  dispatch(setCartLoading(true));

  const cart = await getCart(token);
  dispatch(setCartProducts(cart));
  dispatch(setCartLoading(false));
};

export const addProductToCart =
  ({ token, quantity, productId }) =>
  async (dispatch) => {
    dispatch(setCartLoading(true));
    await addToCart({ token, quantity, productId });
    dispatch(loadCartProducts(token));
  };

export default cartSlice.reducer;
