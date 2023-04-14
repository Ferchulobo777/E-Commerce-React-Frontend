import React, { useState } from 'react';
import Footer from './Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Layout = () => {
  const navigate = useNavigate();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const isLogged = useSelector(state => state.user.isLogged);
  const cartHandleClick = () => {
    if (isLogged) setIsCartVisible(!isCartVisible)
    else navigate('/login');
  };

  return (
    <>
      <Header cartHandleClick={cartHandleClick} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default Layout;
