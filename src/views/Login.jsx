import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      <p className="text-center font-bold text-4xl mt-48">
        Welcome! Enter your email and password to continue
      </p>
      <div className="bg-blue-300 w-3/4 mt-20 rounded-lg border-2 border-black">
        <h2 className="text-center font-bold p-4 text-lg">Test Data</h2>
        <p className="text-center p-4 font-semibold text-md mx-2">Email: fernando@gmail.com</p>
        <p className="text-center p-4 font-semibold text-lg">Password: fer1234</p>
      </div>
      <LoginForm />
      {isUserLogged && <Navigate to="/" replace />}
    </div>
  );
};

export default Login;
