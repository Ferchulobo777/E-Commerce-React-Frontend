import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addProductToCart,
  updateQuantityProductCart,
} from '../../store/slices/cart.slice';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged, token } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [counter, setCounter] = useState(1);

  const cartProduct = cart.products.find((x) => x.id === product.id);

  const lessOne = () => {
    const newCounter = counter - 1;
    if (newCounter >= 1) setCounter(newCounter);
  };

  const handleAddCart = () => {
    if (!isLogged) navigate('/login');
    else if (cartProduct) {
      dispatch(
        updateQuantityProductCart({
          token,
          cartProductId: cartProduct.cartId,
          quantity: cartProduct.quantity + counter,
        }),
      );
      setCounter(1);
    } else {
      dispatch(addProductToCart({ token, productId: product.id, quantity: counter }));
      setCounter(1);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-4xl text-center mb-10">{product.brand}</h2>
      <h2 className="text-4xl text-center mb-20">{product.title}</h2>
      <Carousel
        className="flex flex-col object-contain justify-center items-center h-1/4 w-full md:w-1/2"
        showArrows={true}
      >
        {product.images?.map((img) => (
          <div
            className="w-full h-60 flex flex-row justify-center mb-5 mt-5 mx-auto"
            key={img.id}
          >
            <img
              className="w-full flex justify-center items-center object-contain"
              src={img.url}
              alt=""
            />
          </div>
        ))}
      </Carousel>
      <div className="flex flex-col">
        <h2 className="text-2xl text-center">{product.title}</h2>
        <section>
          <h2 className="mt-5 text-xl text-center">Description</h2>
          <p className="text-justify mt-5 text-lg font-semibold">{product.description}</p>
        </section>
        <section className="flex flex-row flex-wrap gap-20 justify-evenly mt-10">
          <div>
            <h2 className="text-xl text-center">Price</h2>
            <p className="text-2xl">
              <span className="text-orange-400">$</span> {product.price}
            </p>
          </div>
          <div>
            <h2 className="text-xl text-center">Quantity</h2>
            <div className="flex flex-row gap-2 mt-2">
              <button
                className="flex items-center justify-center text-2xl bg-orange-400 w-10 rounded-lg py-1 border border-black btn-search font-bold"
                onClick={lessOne}
              >
                -
              </button>
              <span className="text-2xl bg-white border-2 border-black rounded w-20 text-center text-orange-400 py-1">
                {counter}
              </span>
              <button
                className="text-center text-2xl bg-orange-400 w-10 rounded-lg py-1 border border-black btn-search font-bold"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-10">
          <button
            onClick={handleAddCart}
            disabled={cart.loading}
            className="flex justify-evenly items-center w-48 h-10 bg-orange-400 rounded-lg text-lg font-bold border-2 border-black btn-search"
          >
            Add to cart
            <i className="fa-solid fa-cart-shopping mask"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
