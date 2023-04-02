import { axiosInstance } from '../api/axiosInstance';

export const loginServices = async (data) => {
  try {
    const res = await axiosInstance.post('users/login', data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
