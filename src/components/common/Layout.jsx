import React, { useState } from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Cart from './Cart';

const Layout = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  return (
    <>
      <Header isVisible={isCartVisible} setIsVisible={setCartVisible} />
      <main>
        <Outlet />
        <Cart isVisible={isCartVisible} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
