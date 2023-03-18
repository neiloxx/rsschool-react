import React from 'react';
import Header from 'components/header/Header';
import { Outlet } from 'react-router-dom';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className={'main'}>
          <Outlet />
        </main>
      </>
    );
  }
}
