import '@testing-library/jest-dom';
import React from 'react';
import Form from './Form';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  const TEST_DATA = {
    children: <div data-testid={'children'}>children</div>,
    onSubmit: jest.fn(),
  };

  beforeEach(() => render(<Form onSubmit={TEST_DATA.onSubmit}>{TEST_DATA.children}</Form>));

  it('should render form with children', () => {
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });
});
