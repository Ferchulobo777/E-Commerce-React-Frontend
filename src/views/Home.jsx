import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/slices/user.slice';
import { Form, useLoaderData } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const { products, categories, category } = useLoaderData();

  const [categoryValue, setcategoryValue] = useState(category || null);
  const [nameValue, setnameValue] = useState('');

  const handleChangeName = (e) => {
    setnameValue(e.target.value);
    setcategoryValue(null);
  };

  return (
    <section className="mt-40 flex flex-col justify-center items-center">
      <h1 className="flex">Home</h1>
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
          <div>
            <input
              type="search"
              value={nameValue}
              onChange={handleChangeName}
              placeholder="what are you looking for?"
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
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
                    setnameValue('');
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
      <section className="w-full flex px-8 py-2">
        <ul className="flex flex-row flex-wrap justify-evenly items-center w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Home;
