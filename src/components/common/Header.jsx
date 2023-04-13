import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isVisible, setIsVisible }) => {
  return (
    <header className="flex flex-row mb-6 header w-full sticky top-0 h-28 z-50">
      <nav className="flex flex-row flex-wrap gap-2 lg:gap-20 w-full items-center border-4 border-orange-400 outline outline-black rounded-sm">
        <h2 className="flex w-1/2 text-2xl text-white p-4 sm:text-3xl sm:1/2">
          <Link to="/">e-commerce</Link>
        </h2>
        <Link to="/login">
          <button className="flex justify-center items-center p-4 h-full button text-white text-2xl sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 2xl:ml-28">
            <i className="fa-solid fa-user mask"></i>
          </button>
        </Link>
        <Link to="/purchases">
          <button className="p-4  h-full button text-white text-2xl flex justify-center items-center sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 2xl:ml-28">
            <i className="fa-solid fa-store mask"></i>
          </button>
        </Link>
        <button
          className="p-4 h-full button text-white text-2xl flex justify-center items-center sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 2xl:ml-28"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <i className="fa-solid fa-cart-shopping mask"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
