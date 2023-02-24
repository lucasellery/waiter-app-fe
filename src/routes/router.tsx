import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import ErrorPage from '../pages/ErrorPage';
import { Historic } from '../pages/Historic';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'orders',
        element: <Home />,
      },
      {
        path: 'historic',
        element: <Historic />,
      },
    ]
  }
]);
