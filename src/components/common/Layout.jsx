import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center mb-10 bg-black h-20">
        Header
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="flex flex-col justify-start items-center mt-10 bg-black h-52">
        Footer
      </footer>
    </>
  );
};

export default Layout;
