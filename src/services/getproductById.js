import { axiosInstance } from '../api/axiosInstance.js';

export const getProductId = async (id) => {
  try {
    const res = await axiosInstance.get(`products/${id}`);
    return res.data.data.product;
  } catch (error) {
    console.error(error);
  }
};
