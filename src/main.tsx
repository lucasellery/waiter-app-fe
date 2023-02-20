import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { router } from './routes/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
