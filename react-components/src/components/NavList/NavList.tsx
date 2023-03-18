import { NavLink } from 'react-router-dom';
import React from 'react';

import './NavList.scss';

const NAV_ROUTES = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/about',
    title: 'About',
  },
];

export default class NavList extends React.Component {
  render() {
    return (
      <nav className={'nav'}>
        <ul className={'nav__list'}>
          {NAV_ROUTES.map((route, idx) => (
            <li className={'nav__list-item'} key={`${route.title}-${idx}`}>
              <NavLink className={'nav__list-link'} to={route.to}>
                {route.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
