import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart } from '../../store/slices/cart.slice';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.cart.loading);
  const deleteHandleClick = () => {
    dispatch(deleteProductFromCart({ token, cartProductId: product.cartId }));
  };

  return (
    <article>
      <div className="relative flex flex-row gap-5">
        <div className="w-1/3">
          <img src={product.images[0].url} alt={product.title} />
        </div>
        <div>
          <h2>{product.title}</h2>
          <div className="flex flex-row gap-2 mt-2">
            <button className="flex items-center justify-center text-2xl bg-orange-400 w-10 rounded-lg py-1 border border-black btn-search font-black">
              -
            </button>
            <span className="text-2xl bg-white border-2 border-black rounded w-10 text-center text-orange-400 py-1">
              {product.quantity}
            </span>
            <button className="text-center text-2xl bg-orange-400 w-10 rounded-lg py-1 border border-black btn-search font-bold">
              +
            </button>
          </div>
        </div>
        <button
          className="bg-red-500 text-white btn-search absolute right-0 bottom-0"
          onClick={deleteHandleClick}
          disabled={loading}
        >
          <i className="bx bxs-trash mask"></i>
        </button>
      </div>
      <p className="text-right mt-2">
        <span>Total:</span>
        <span>{product.quantity * Number(product.price)}</span>
      </p>
    </article>
  );
};

export default CartProduct;
