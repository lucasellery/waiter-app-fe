import {
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from 'react-router-dom';
import { App } from '../App';
import ErrorPage from '../pages/ErrorPage';
import { Historic } from '../pages/Historic';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={<Login />}
        index
        errorElement={<ErrorPage />}
      />
      <Route element={<App />}>
        <Route
          path='/dashboard'
          element={<Home />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/historic'
          element={<Historic />}
        />
      </Route>
    </>
  )
);
