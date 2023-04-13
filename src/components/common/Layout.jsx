import React, { useState } from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Cart from './Cart';

const Layout = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  return (
    <>
      <Header isVisible={isCartVisible} setIsVisible={setIsCartVisible} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default Layout;
