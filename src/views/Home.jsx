import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../store/slices/user.slice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      <button
        className="bg-red-500 font-semibold w-40 h-10 hover:saturate-200 border border-black hover:font-bold"
        onClick={() => dispatch(reset())}
      >
        LogOut
      </button>
    </div>
  );
};

export default Home;
