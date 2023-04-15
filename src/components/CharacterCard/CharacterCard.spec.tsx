import '@testing-library/jest-dom';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import { responseMock } from 'mocks/apiMocks';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';

describe('CardsField', () => {
  const card = responseMock.results[0];

  it('should render character card', () => {
    renderWithProviders(<CharacterCard name={card.name} species={card.species} />);
    expect(screen.queryByText(`${card.name}`)).toBeInTheDocument();
    expect(screen.queryByText(`${card.species}`)).toBeInTheDocument();
  });
});
