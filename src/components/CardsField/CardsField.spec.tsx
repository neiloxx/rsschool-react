import '@testing-library/jest-dom';
import React from 'react';
import CardsField from 'components/CardsField/CardsField';
import { render, screen } from '@testing-library/react';

import mockedData from 'api/data.json';

describe('CardsField', () => {
  const TEST_CARD = mockedData[0];

  beforeEach(() => render(<CardsField cards={[TEST_CARD]} />));

  it('should render CardsField', () => {
    expect(screen.getByText(TEST_CARD.title)).toBeInTheDocument();
    expect(screen.getByText(TEST_CARD.authors)).toBeInTheDocument();
    expect(screen.getByText(TEST_CARD.shortDescription)).toBeInTheDocument();
  });
});
