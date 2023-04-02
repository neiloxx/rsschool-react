import '@testing-library/jest-dom';
import BaseLayout from 'components/Layouts/BaseLayout';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('CardsField', () => {
  it('should render base elements', () => {
    const { container } = render(<BaseLayout />, { wrapper: BrowserRouter });
    expect(container.childNodes.length).toBeTruthy();
  });
});
