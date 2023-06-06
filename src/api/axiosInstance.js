import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://ecommerce-react-nodejs.onrender.com',
});