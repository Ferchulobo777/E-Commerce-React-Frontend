import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { isLogged, token } = useSelector((state) => state.user);
  const handleAddProductBtn = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      key={product.id}
      onClick={() => navigate(`/products/${product.id}`)}
      className="w-11/12 sm:w-3/5 lg:w-2/5 xl:w-1/4 bg-white p-10 cursor-pointer product-card m-10 object-contain"
    >
      <div>
        <img
          className="w-52 h-40 flex justify-center items-center"
          src={product.images[0].url}
          alt={product.title}
        />
      </div>
      <div>
        <h2 className="text-semibold text-xl mt-5">{product.title}</h2>
        <div className="flex flex-row justify-between mt-3">
          <h3 className="mask text-xl font-semibold">Price</h3>
          <p className="text-xl font-semibold">
            <span className="text-orange-400 text-xl font-bold">$</span> {product.price}
          </p>
        </div>
        <button
          onClick={handleAddProductBtn}
          className="cursor-pointer w-3/4 h-16 bg-orange-400 rounded-lg btn-search mt-5 font-bold ml-5"
        >
          Add to Cart <i className="fa-solid fa-cart-shopping mask"></i>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
