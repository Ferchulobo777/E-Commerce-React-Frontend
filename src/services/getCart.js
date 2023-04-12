import { AxiosInstance } from '../api/axiosInstance';

export const getCart = async (token) => {
  try {
    const res = await AxiosInstance.get('cart', {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error(error);
  }
};
