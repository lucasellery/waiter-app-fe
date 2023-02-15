import {
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from 'react-router-dom';
import { App } from '../App';
import ErrorPage from '../pages/ErrorPage';
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
      <Route
        path='/home'
        element={<App />}
        errorElement={<ErrorPage />}
      />
    </>
  )
);
