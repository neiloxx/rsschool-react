import Footer from 'components/Footer/Footer';
import React from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

import './BaseLayout.scss';

export default class BaseLayout extends React.Component {
  render() {
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
}
