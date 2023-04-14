import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      <h2 className="text-center font-bold text-4xl mt-48">
        Welcome! Enter your email and password to continue
      </h2>
      <div className="bg-orange-400 w-3/4 mt-20 rounded-lg border-2 border-black lg:w-1/2 login">
        <h2 className="text-center font-bold p-4 text-xl">Test Data</h2>
        <p className="text-center p-4 font-semibold text-lg mx-2">Email: fernando@gmail.com</p>
        <p className="text-center p-4 font-semibold text-lg">Password: fer1234</p>
      </div>
      <LoginForm />
      {isUserLogged && <Navigate to="/" replace />}
    </div>
  );
};

export default Login;
