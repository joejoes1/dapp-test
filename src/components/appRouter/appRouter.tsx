import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../homePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
