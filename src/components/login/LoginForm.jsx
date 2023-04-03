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
      id: loginData.data.user.id,
      firstName: loginData.data.user.firstName,
      lastName: loginData.data.user.lastName,
      email: loginData.data.user.email,
    };

    const token = loginData.data.token;

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
        className="flex flex-col items-center justify-center gap-8 w-3/4 h-96 bg-black/5 mt-6 mb-6 p-4 rounded-lg border-2 border-black"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="flex flex-col flex-wrap w-full gap-4 mx-auto">
          <label
            htmlFor="emailId"
            className="flex flex-row flex-wrap font-bold text-xl w-full bg-black text-white items-center justify-center rounded-md mx-auto"
          >
            Email{' '}
          </label>
          <input
            className="flex w-full px-2 font-semibold placeholder:text-center placeholder:text-xs rounded-lg border-2 border-black mx-auto"
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
            className="flex flex-row flex-wrap font-bold mx-auto text-xl w-full bg-black text-white justify-center rounded-md border border-white items-center"
            htmlFor="passwordId"
          >
            Password{' '}
          </label>
          <div className="flex flex-row flex-wrap gap-2 w-full">
            <input
              className="flex flex-row w-full px-2 font-semibold border-2 border-black rounded-lg mx-auto justify-center mt-2 mb-2"
              type={showPassword ? 'text' : 'password'}
              id="passwordId"
              name="password"
              value={loginFormData.password}
              required
            />
          </div>
          <div className="flex w-1/2 justify-center items-center ml-16">
            <button
              className="bg-blue-200 font-black text-2xl w-3/4 justify-center items-center flex p-2 rounded-lg border border-black hover:saturate-200 hover:transform hover:scale-110"
              type="button"
              onClick={handlePasswordVisibility}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
        </div>
        <button className="w-40 h-10 border border-black p-2 rounded-lg bg-blue-500 hover:saturate-200 font-semibold hover:font-bold hover:transform hover:scale-110">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
