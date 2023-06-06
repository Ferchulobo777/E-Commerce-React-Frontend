import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPurchases } from '../services/getPurchase';

const Purchases = () => {
  const token = useSelector((state) => state.user.token);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const loadPurchases = async () => {
      const purchases = await getPurchases(token);
      setPurchases(purchases);
    };
    loadPurchases();
  }, []);

  return (
    <section>
      <h2 className="text-4xl text-center p-2 m-8">Purchases</h2>
      <ul className="overflow-y-auto">
        {purchases?.map((purchase) => (
          <li key={purchase.id}>
            <div className="flex justify-between items-center pb-2 px-4">
              <div>
                <img
                  src={purchase.product?.productImgs[2]?.url}
                  alt={purchase.product?.title}
                  className="w-24 h-24 object-contain rounded"
                />
              </div>
              <div className="ml-4 text-center">
                <h2 className="text-lg">{purchase.product?.title}</h2>
                <h2 className="text-gray-500">{purchase.product?.brand}</h2>
              </div>
              <div className="flex-shrink-0">
                <p className="text-lg font-medium">${purchase.product?.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Purchases;