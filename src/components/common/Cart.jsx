import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartProducts } from '../../store/slices/cartSlice';
import CartProduct from './CartProduct';
import Loader from '../common/Loader';

const Cart = ({ isVisible }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart);
  const toggleTransform = isVisible ? 'translate-x-0' : '';

  useEffect(() => {
    //Ejecutar carga de los productos del Carrito
    if (isVisible) dispatch(loadCartProducts(token));
  }, [isVisible]);

  return (
    <div
      className={
        'fixed inset-0 top-28 bg-[rgba(0,0,0,0.45)] transition-transform duration-500 backdrop-blur-sm translate-x-full' +
        toggleTransform
      }
    >
      <section className="absolute right-0 max-w-[350px] w-full h-full bg-orange-400/80 sm:w-1/2 lg:w-2/5 p-4 flex flex-col border-2 border-black rounded-md modal-cart">
        <h2 className="text-center text-xl font-semibold">Shopping Cart</h2>
        <div className="mt-5 flex-grow">
          {cart.loading && <Loader />}
          {!cart.loading && !cart.products.length && (
            <h2 className="text-md font-bold">Your cart es Empty</h2>
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
        <section className="flex justify-center w-full flex-col mt-52">
          <h2 className="text-left mt-2 flex flex-row justify-between w-full">
            <span>Total:</span>
            <span>$ 1000.00</span>
          </h2>
          <button className="bg-black text-orange-400 w-full p-2 mt-6 font-extrabold text-2xl rounded-lg flex justify-center btn-cart">
            <span className="mask">Buy Product</span>
          </button>
        </section>
      </section>
    </div>
  );
};

export default Cart;
