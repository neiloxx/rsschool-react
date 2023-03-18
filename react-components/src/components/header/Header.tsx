import { NavLink } from 'react-router-dom';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className={'header'}>
        <NavLink to={'./'}>Home</NavLink>
        <NavLink to={'./about'}>Home</NavLink>
      </header>
    );
  }
}
