import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/slices/user.slice';
import { useLoaderData, Form } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { loadCartProducts } from '../store/slices/cart.slice';

const Home = () => {
  const dispatch = useDispatch();
  const { isLogged, token } = useSelector((state) => state.user);
  const { products, categories, category, title } = useLoaderData();
  const [categoryValue, setCategoryValue] = useState(category ?? null);
  const [nameValue, setNameValue] = useState(title ?? '');

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };

  useEffect(() => {
    if (isLogged) dispatch(loadCartProducts(token));
  }, [dispatch, isLogged, token]);

  useEffect(() => {
    setCategoryValue(category);
  }, [category]);

  useEffect(() => {
    setNameValue(title);
  }, [title]);

  return (
    <section className="mt-10 flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center w-full ">
        {isLogged && (
          <div className="flex justify-center items-center flex-row gap-5 mb-5">
            <i className="fa-solid fa-user text-4xl mt-4 text-orange-400 mask"></i>
            <button
              className="bg-red-500 font-semibold w-20 h-10 hover:saturate-200 border border-black hover:font-bold mt-4 rounded-lg flex justify-center items-center btn-search"
              onClick={() => dispatch(reset())}
            >
              <i className="fa-solid fa-right-from-bracket text-2xl"></i>
            </button>
          </div>
        )}
        <Form className="flex flex-col w-11/12 items-center login rounded-lg mb-10 justify-center lg:flex-row lg:gap-32">
          <div className="w-full lg:w-1/2 h-12 flex flex-row gap-2 justify-center mt-5">
            <input
              type="search"
              value={nameValue}
              onChange={handleChangeName}
              name="title"
              placeholder="what are you looking for?"
              className="p-2 w-60 h-12 sm:w-96 border-4 border-orange-400 rounded-lg placeholder:text-md sm:placeholder:text-xl placeholder:mask"
            />
            <button className="w-16 h-12 bg-orange-400 rounded-lg btn-search">
              <i className="fa-solid fa-magnifying-glass mask"></i>
            </button>
          </div>
          <fieldset className="flex flex-col justify-left items-left gap-6 font-bold w-1/2 login rounded-lg p-4 mb-10 mt-5 lg:w-1/4">
            <legend className="flex text-left text-2xl mask w-full">Category</legend>
            {categories.map((category) => (
              <div key={category.id}>
                <label
                  htmlFor={category.id + category.name}
                  className={
                    categoryValue?.id === category.id
                      ? 'text-orange-400 font-bold cursor-pointer'
                      : 'cursor-pointer'
                  }
                >
                  {category.name}
                </label>
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={categoryValue?.id === category.id}
                  id={category.id + category.name}
                  style={{ display: 'none' }}
                  onChange={() => {
                    setCategoryValue(category);
                  }}
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-orange-500 w-32 h-10 rounded-lg font-semibold text-xl border border-black login btn-search"
            >
              Filter
            </button>
          </fieldset>
        </Form>
      </section>
      <section className="w-full flex px-2 py-2 flex-col">
        <ul className="flex flex-row flex-wrap justify-evenly items-center gap-4 w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        {!products.length && (
          <p className="flex w-full justify-center items-center text-xl text-orange-400 font-bold">
            No product matches the search parameter{' '}
            <span className="text-red-500">"{nameValue}"</span>
          </p>
        )}
      </section>
    </section>
  );
};

export default Home;
