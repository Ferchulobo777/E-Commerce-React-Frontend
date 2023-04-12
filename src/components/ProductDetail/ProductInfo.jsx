import React, { useState } from 'react';

const ProductInfo = ({product}) => {
  const [counter, setCounter] = useState(1);
  const lessOne = () => {
    const newCounter = counter - 1;
    if (newCounter >= 1) setCounter(newCounter);
  };
  return (
    <section className="mt-40 flex flex-col ">
      <div>
        {product.productImgs.map((urlImg) => (
          <img className="w-1/4" src={urlImg} key={urlImg} alt="" />
        ))}
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl">{product.title}</h2>
        <section>
          <h2 className="mt-5 text-xl">Description</h2>
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
          <button className="flex justify-evenly items-center w-48 h-10 bg-orange-400 rounded-lg text-lg font-bold border-2 border-black btn-search">
            Add to cart <i className="fa-solid fa-cart-shopping mask"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
