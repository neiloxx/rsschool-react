import 'components/NavList/NavList.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NAV_ROUTES = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/about',
    title: 'About',
  },
  {
    to: '/form',
    title: 'Form',
  },
];

export default function NavList(): JSX.Element {
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
