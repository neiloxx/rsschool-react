import 'components/Header/Header.scss';
import NavList from 'components/NavList/NavList';
import React from 'react';

export default function Header(): JSX.Element {
  return (
    <header className={'header'}>
      <div className={'header-inner'}>
        <NavList />
      </div>
    </header>
  );
}
