import React, { useState } from 'react';
import { loginServices } from '../../services/loginServices';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logIn, updateToken, updateUserData } from '../../store/slices/user.slice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loginFormData, setloginFormData] = useState({
    email: '',
    password: '',
  });
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setloginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const login = async () => {
    const loginData = await loginServices(loginFormData);
    const userData = {
      id: loginData.user.id,
      firstName: loginData.user.firstName,
      lastName: loginData.user.lastName,
      email: loginData.user.email,
    };

    const token = loginData.token;

    dispatch(updateUserData(userData));
    dispatch(updateToken(token));
    dispatch(logIn());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <form
        className="flex flex-col items-center justify-center gap-8 w-3/4 h-96 bg-black/5 mt-6 mb-6 p-4 rounded-lg border-2 border-black lg:gap-10 xl:w-1/2"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="flex flex-col flex-wrap w-full gap-4 mx-auto sm:flex-row sm:gap-2 md:flex-row md:gap-2 lg:gap-2">
          <label
            htmlFor="emailId"
            className="flex flex-row flex-wrap font-semibold text-xl w-full bg-black text-white items-center justify-center rounded-md mx-auto sm:w-32 md:w-36 lg:h-10 xl:w-28"
          >
            Email{' '}
          </label>
          <input
            className="flex w-full px-2 font-semibold placeholder:text-center placeholder:text-xs rounded-lg border-2 border-black mx-auto sm:w-72 sm:placeholder:text-lg md:w-80 md:placeholder:text-xl md:mr-12 lg:mr-24 lg:w-3/5 xl:w-3/5 xl:mr-20 2xl:mr-24"
            type="email"
            id="emailId"
            placeholder="example@mi-email.com"
            name="email"
            value={loginFormData.email}
            required
          />
        </div>
        <div className="flex flex-row flex-wrap w-full gap-2">
          <label
            className="flex flex-row flex-wrap font-semibold mx-auto text-xl w-full bg-black text-white justify-center rounded-md border border-white items-center sm:w-32 md:w-36 xl:w-28"
            htmlFor="passwordId"
          >
            Password{' '}
          </label>
          <input
            className="flex flex-row w-full px-2 font-semibold border-2 border-black rounded-lg mx-auto justify-center sm:w-60 md:w-72 lg:w-3/5"
            type={showPassword ? 'text' : 'password'}
            id="passwordId"
            name="password"
            value={loginFormData.password}
            required
          />
          <button
            className="bg-blue-200 font-black text-2xl w-3/4 justify-center items-center flex p-2 rounded-lg border border-black hover:saturate-200 hover:transform hover:scale-110 sm:w-10 md:w-16 ml-8 sm:ml-0 "
            type="button"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        <button className="w-40 h-10 border border-black p-2 rounded-lg bg-blue-500 hover:saturate-200 hover:font-bold hover:transform hover:scale-110 md:text-2xl flex items-center justify-center font-bold">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
