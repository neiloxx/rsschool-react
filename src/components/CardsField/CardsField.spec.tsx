import '@testing-library/jest-dom';
import CardsField from 'components/CardsField/CardsField';
import React from 'react';
import { render, screen } from '@testing-library/react';

import mockedData from 'api/data.json';

describe('CardsField', () => {
  const TEST_CARD = mockedData[0];

  beforeEach(() => render(<CardsField />));

  it('should render CardsField', () => {
    expect(screen.getByText(TEST_CARD.title)).toBeInTheDocument();
    expect(screen.getByText(TEST_CARD.pageCount)).toBeInTheDocument();
    expect(screen.getByText(TEST_CARD.shortDescription)).toBeInTheDocument();
  });
});
