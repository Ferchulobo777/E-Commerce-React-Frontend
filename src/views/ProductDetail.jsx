import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductId } from '../services/getproductById';
import { getAllProducts } from '../services/getAllProducts';
import { getCategories } from '../services/getCategories';
import ProductCard from '../components/common/ProductCard';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import Loader from '../components/common/Loader';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const productData = await getProductId(id);
      const categoryId = productData.categoryId;

      const relatedProductsData = await getAllProducts({
        categoryId,
      });

      const relatedProductsWithoutTargetProduct = relatedProductsData.filter(
        (product) => product.id !== productData.id,
      );

      setProduct(productData);
      setRelatedProducts(relatedProductsWithoutTargetProduct);
    };

    loadData();
  }, [id]);

  return (
    <div className="p-6">
      {!product ? <Loader /> : <ProductInfo product={product} />}
      <section className="w-full flex flex-col">
        <ul className="flex flex-row flex-wrap justify-evenly items-center gap-4 w-full">
          <h2 className="text-2xl text-center mt-10 w-full">Discover similar items</h2>
          {!relatedProducts ? (
            <Loader />
          ) : (
            relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default ProductDetail;
