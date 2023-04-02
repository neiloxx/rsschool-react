import 'pages/NotFoundPage/NotFoundPage.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  return (
    <main className={'main-nfp'}>
      <h2 className={'main-nfp__title'}>Oops, page not found</h2>
      <div className={'main-nfp__image'} />
      <NavLink className={'main-nfp__link'} to={'/'}>
        Go home
      </NavLink>
    </main>
  );
}
