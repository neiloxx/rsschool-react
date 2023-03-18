import BaseLayout from 'pages/BaseLayout';
import pages from 'pages/index';

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
        path: '/about',
        element: <pages.AboutPage />,
      },
    ],
  },
];
