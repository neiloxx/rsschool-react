import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import 'components/Layouts/BaseLayout.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function BaseLayout(): JSX.Element {
  return (
    <>
      <Header />
      <main className={'main'}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
