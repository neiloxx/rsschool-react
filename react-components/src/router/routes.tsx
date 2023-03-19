import BaseLayout from 'components/Layouts/BaseLayout';
import pages from 'pages/index';
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
