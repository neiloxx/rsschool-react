import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from 'router/routes';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter(routesConfig);
const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
