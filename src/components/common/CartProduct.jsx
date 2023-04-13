import React from 'react';

const CartProduct = ({ product }) => {
  return (
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
  );
};

export default CartProduct;
