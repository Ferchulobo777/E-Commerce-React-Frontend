import React from 'react';

const CartProduct = ({ product }) => {
  return (
    <article>
      <div className="flex flex-row gap-5">
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
      </div>
      <p className="text-right mt-2">
        <span>Total:</span>
        <span>{product.quantity * Number(product.price)}</span>
      </p>
    </article>
  );
};

export default CartProduct;
