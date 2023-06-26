import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductFromCart,
  updateQuantityProductCart,
} from '../../store/slices/cart.slice';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.cart.loading);

  const deleteHandleClick = () => {
    dispatch(deleteProductFromCart({ token, cartProductId: product.cartId }));
  };

  const updateHandleClick = () => {
    dispatch(
      updateQuantityProductCart({ token, cartProductId: product.cartId, quantity }),
    );
  };

  const lessOne = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) setQuantity(newQuantity);
  };
  return (
    <article>
      <div className="relative flex flex-row gap-5">
        <div className="w-3/4 h-1/2 object-contain">
          <img src={product.images[2].url} alt={product.title} />
        </div>
        <div>
          <h2>{product.title}</h2>
          <div className="flex flex-row gap-2 mt-2">
            <button
              className="flex items-center justify-center text-2xl bg-orange-400 w-10 rounded-lg py-1 border border-black btn-search font-black"
              onClick={lessOne}
            >
              -
            </button>
            <span className="text-2xl bg-white border-2 border-black rounded w-10 text-center text-orange-400 py-1">
              {quantity}
            </span>
            <button
              className="text-center text-2xl bg-orange-400 w-10 rounded-lg py-1 border border-black btn-search font-bold"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center mt-16">
          <button
            className="w-10 h-10 bg-blue-500 text-white btn-search rounded p-1"
            onClick={updateHandleClick}
            disabled={loading}
          >
            <i className="bx bxs-cart-add mask"></i>
          </button>
          <button
            className="bg-red-500 w-10 h-10 text-white btn-search rounded p-1"
            onClick={deleteHandleClick}
            disabled={loading}
          >
            <i className="bx bxs-trash mask"></i>
          </button>
        </div>
      </div>
      <p className="text-right mt-2">
        <span>Total: </span>
        <span>${product.quantity * Number(product.price)}</span>
      </p>
    </article>
  );
};

export default CartProduct;
