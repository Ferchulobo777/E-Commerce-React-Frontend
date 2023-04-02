import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';


const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="flex flex-col items-center justify-between w-full">
      <p>Welcome! Enter your email and password to continue</p>
      <div className="bg-blue-300 w-2/5">
        <h2 className="text-center font-bold p-4">Test Data</h2>
        <p className="text-center p-4">fernando@gmail.com</p>
        <p className="text-center p-4">fer1234</p>
      </div>
      <LoginForm />
      {isUserLogged && <Navigate to="/" replace />}
    </div>
  );
};

export default Login;
