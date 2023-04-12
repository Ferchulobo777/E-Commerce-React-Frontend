import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="flex flex-row mb-6 header w-full fixed top-0">
      <div className="flex flex-row flex-wrap gap-6 w-full items-center border-4 border-orange-400 outline outline-black rounded-sm">
        <h2 className="flex w-1/2 text-2xl text-white p-4 sm:text-3xl sm:1/2">
          e-commerce
        </h2>
        <button className="flex justify-center items-center p-4 h-full button text-white text-2xl sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 2xl:ml-28">
          <Link to="/login">
            <i className="fa-solid fa-user mask"></i>
          </Link>
        </button>
        <button className="p-4  h-full button text-white text-2xl flex justify-center items-center sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 2xl:ml-28">
          <i className="fa-solid fa-store mask"></i>
        </button>
        <button className="p-4 h-full button text-white text-2xl flex justify-center items-center sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 2xl:ml-28">
          <i className="fa-solid fa-cart-shopping mask"></i>
        </button>
      </div>
    </section>
  );
};

export default Header;
