import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddProductBtn = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      key={product.id}
      onClick={() => navigate(`/products/${product.id}`)}
      className="max-w-[250px] bg-slate-400 p-4 cursor-pointer product-card"
    >
      <div className="h-3/4">
        <img src={product.productImgs[0]} alt={product.title} />
      </div>
      <div>
        <h2 className="text-semibold text-xl">{product.title}</h2>
        <div>
          <h3>Price</h3>
          <p>$ {product.price}</p>
        </div>
        <button
          onClick={handleAddProductBtn}
          className="cursor-pointer w-2/5 bg-orange-400 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
