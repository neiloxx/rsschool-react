import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavList from 'components/NavList/NavList';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Card', () => {
  const TEST_DATA = {
    home: 'Home',
    about: 'About',
  };

  beforeEach(() => render(<NavList />, { wrapper: BrowserRouter }));

  it('should render NavList', () => {
    expect(screen.getByText(TEST_DATA.home)).toBeInTheDocument();
    expect(screen.getByText(TEST_DATA.about)).toBeInTheDocument();
  });

  it('should navigate on the page', async () => {
    const user = userEvent.setup();

    const firstActiveItem = screen.getByText(TEST_DATA.home);
    const secondActiveItem = screen.getByText(TEST_DATA.about);

    expect(firstActiveItem.className.split(' ').includes('active')).toBe(true);
    expect(secondActiveItem.className.split(' ').includes('active')).toBe(false);

    await user.click(screen.getByText(/About/i));

    expect(firstActiveItem.className.split(' ').includes('active')).toBe(false);
    expect(secondActiveItem.className.split(' ').includes('active')).toBe(true);
  });
});
