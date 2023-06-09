import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCart, loadCartProducts } from '../../store/slices/cart.slice';
import CartProduct from './CartProduct';
import Loader from '../common/Loader';

const Cart = ({ isVisible }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart);
  const toggleTransform = isVisible ? 'translate-x-0' : 'translate-x-full';

  const total = cart.products.reduce(
    (sum, product) => sum + product.quantity * Number(product.price),
    0,
  );

  useEffect(() => {
    if (isVisible) dispatch(loadCartProducts(token));
  }, [dispatch, isVisible, token]);

  return (
    <div
      className={
        'fixed inset-0 top-20 bg-[rgba(0,0,0,0.45)] transition-transform duration-500 backdrop-blur-sm ' +
        toggleTransform
      }
    >
      <section className="absolute top-10 right-0 max-w-[350px] w-full h-full bg-orange-400/80 sm:w-1/2 lg:w-2/5 p-4 flex flex-col border-2 border-black rounded-md modal-cart overflow-y-auto">
        <h2 className="text-center text-xl font-semibold">Shopping Cart</h2>
        <div className="mt-5 flex-grow">
          {cart.loading && <Loader />}
          {!cart.loading && !cart.products.length && (
            <h2 className="text-md font-bold">Your shopping cart is empty</h2>
          )}
          {!cart.loading && cart.products.length && (
            <ul>
              {cart.products.map((product) => (
                <li key={product.id}>
                  <CartProduct product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <section className="flex justify-center w-full flex-col mb-10">
          <h2 className="text-left mt-2 flex flex-row justify-between w-full">
            <span>Total: </span>
            <span>$ {total}</span>
          </h2>
          <button
            disabled={!cart.products?.length}
            onClick={() => dispatch(buyCart({ token }))}
            className="bg-black text-orange-400 w-full p-2 font-extrabold text-2xl rounded-lg flex justify-center btn-cart"
          >
            <span className="mask">Buy Product</span>
          </button>
        </section>
      </section>
    </div>
  );
};

export default Cart;
