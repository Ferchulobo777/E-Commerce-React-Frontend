import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import ProtectedRoute from '../components/common/ProtectedRoute';
import Home from '../views/Home';
import Login from '../views/Login';
import Purchases from '../views/Purchases';
import ProductDetail from '../views/ProductDetail';
import NotFound from '../views/NotFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/purchases',
        element: (
          <ProtectedRoute>
            <Purchases />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
