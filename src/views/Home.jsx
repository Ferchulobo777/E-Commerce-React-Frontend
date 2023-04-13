import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/slices/user.slice';
import { Form, useLoaderData } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const { products, categories, category, title } = useLoaderData();

  const [categoryValue, setcategoryValue] = useState(category || null);
  const [nameValue, setnameValue] = useState(title ?? '');

  const handleChangeName = (e) => {
    setnameValue(e.target.value);
  };

  useEffect(() => {
    setnameValue(title);
  }, [title]);

  return (
    <section className="mt-40 flex flex-col justify-center items-center">
      {isLogged && (
        <button
          className="bg-red-500 font-semibold w-20 h-10 hover:saturate-200 border border-black hover:font-bold mb-20 mt-4 rounded-lg flex justify-center items-center"
          onClick={() => dispatch(reset())}
        >
          <i className="fa-solid fa-right-from-bracket text-2xl"></i>
        </button>
      )}
      <section>
        <Form>
          <div className="w-full flex flex-row gap-2">
            <input
              type="search"
              value={nameValue}
              onChange={handleChangeName}
              name="title"
              placeholder="what are you looking for?"
              className="p-2 w-60 sm:w-96 border-4 border-orange-400 rounded-lg placeholder:text-md sm:placeholder:text-xl "
            />
            <button className="w-16 bg-orange-400 rounded-lg btn-search">
              <i className="fa-solid fa-magnifying-glass mask"></i>
            </button>
          </div>
          <fieldset>
            <legend>Category</legend>
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
                    setcategoryValue(category);
                  }}
                />
              </div>
            ))}
          </fieldset>
          <button type="submit" className="bg-blue-500">
            Filter
          </button>
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
