import pages from 'pages/index';
import App from 'App';

export default [
  {
    path: '/',
    element: <App />,
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
