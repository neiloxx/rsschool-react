import BaseLayout from 'components/Layouts/BaseLayout';
import pages from 'pages';
import { Navigate } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <pages.HomePage />,
      },
      {
        path: 'about',
        element: <pages.AboutPage />,
      },
      {
        path: '/form',
        element: <pages.FormPage />,
      },
    ],
  },
  {
    path: '/404',
    element: <pages.NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />,
  },
];
