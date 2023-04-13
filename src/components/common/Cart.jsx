import React from 'react';

const Cart = ({ isVisible }) => {
  const toggleTransform = isVisible ? 'translate-x-0' : '';

  return (
    <div
      className={
        'fixed inset-0 top-28 bg-[rgba(0,0,0,0.45)] transition-transform duration-500 backdrop-blur-sm translate-x-full' +
        toggleTransform
      }
    >
      <section className="absolute right-0 max-w-[350px] w-full h-full bg-orange-400/80 sm:w-1/2 lg:w-2/5 p-4 flex flex-col">
        <h2>Shopping Cart</h2>
        <ul className="mt-5">
          <li>
            <article>
              <div className="flex flex-row gap-5">
                <div>
                  <img src="" alt="" />
                  <span>Image</span>
                </div>
                <div>
                  <h2>Product Name</h2>
                  <div className="flex flex-row gap-2 mt-2">
                    <button className="flex items-center justify-center text-2xl bg-orange-400 w-10 rounded-lg py-1 border border-black btn-search font-black">
                      -
                    </button>
                    <span className="text-2xl bg-white border-2 border-black rounded w-10 text-center text-orange-400 py-1">
                      1
                    </span>
                    <button className="text-center text-2xl bg-orange-400 w-10 rounded-lg py-1 border border-black btn-search font-bold">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-right mt-2">
                <span>Total:</span>$ 1000.00
              </p>
            </article>
          </li>
        </ul>
        <section className="flex justify-center w-full flex-col mt-52">
          <p className="text-left mt-2 flex flex-row justify-between w-full">
            <span>Total:</span>
            <span>$ 1000.00</span>
          </p>
          <button className="bg-black text-orange-400 w-full p-2 mt-6 font-extrabold text-2xl rounded-lg flex justify-center btn-cart">
            Buy Product
          </button>
        </section>
      </section>
    </div>
  );
};

export default Cart;
