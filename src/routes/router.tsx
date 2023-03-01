import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import ErrorPage from '../pages/ErrorPage';
import { Historic } from '../pages/Historic';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Menu } from '../pages/Menu';
import { Profile } from '../pages/Profile';
import { Users } from '../pages/Users';

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
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'my-profile',
        element: <Profile />,
      },
    ]
  }
]);
