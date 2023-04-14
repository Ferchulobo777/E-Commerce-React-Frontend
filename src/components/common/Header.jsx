import React from 'react';
import Sound from './Sound';
import sound from '../../assets/audio/Compras.mp3';
import { Link } from 'react-router-dom';

const Header = ({ cartHandleClick }) => {
  return (
    <header className="flex flex-row mb-6 header w-full sticky top-0 h-28 z-50">
      <nav className="flex flex-row flex-wrap w-full items-center border-4 border-orange-400 outline outline-black rounded-sm">
        <h2 className="flex w-1/2 text-xl text-white p-3 sm:text-3xl 2xl:text-5xl">
          <Link to="/">e-commerce</Link>
        </h2>
        <Sound autoPlay src={sound} />
        <Link to="/login">
          <button className="flex justify-center items-center p-3 h-full button text-white text-2xl sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-14">
            <i className="fa-solid fa-user mask"></i>
          </button>
        </Link>
        <Link to="/purchases">
          <button className="p-3 h-full button text-white text-2xl flex justify-center items-center sm:mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-14">
            <i className="fa-solid fa-store mask"></i>
          </button>
        </Link>
        <button
          className="p-3 h-full button text-white text-2xl flex justify-center items-center sm:mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-14"
          onClick={cartHandleClick}
        >
          <i className="fa-solid fa-cart-shopping mask"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
