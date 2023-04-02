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
        className="flex flex-col items-center justify-between w-full h-96"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div>
          <label htmlFor="emailId">Email: </label>
          <input
            type="email"
            id="emailId"
            placeholder="example@miemail.com"
            name="email"
            value={loginFormData.email}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordId">Password: </label>
          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="passwordId"
              name="password"
              value={loginFormData.password}
              required
            />
            <button type="button" onClick={handlePasswordVisibility}>
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
        </div>
        <button className="w-40 h-10 border border-black p-2 rounded-lg bg-blue-500 hover:saturate-200 font-semibold hover:font-bold">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
