import React from 'react';

const Header = () => {
  return (
    <section className="flex flex-row mb-6 header w-full">
      <div className="flex flex-row flex-wrap gap-6 w-full items-center border-4 border-white outline outline-black rounded-sm">
        <h2 className="flex w-3/4 text-3xl text-white p-4">e-commerce</h2>
        <button className="flex justify-center items-center p-4 h-full button text-white text-2xl">
          <i className="fa-solid fa-user"></i>
        </button>
        <button className="p-4  h-full button text-white text-2xl flex justify-center items-center">
          <i className="fa-solid fa-store"></i>
        </button>
        <button className="p-4 h-full button text-white text-2xl flex justify-center items-center">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </section>
  );
};

export default Header;
