import NavList from 'components/NavList/NavList';
import React from 'react';

import 'components/Header/Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={'header'}>
        <div className={'header-inner'}>
          <NavList />
        </div>
      </header>
    );
  }
}
