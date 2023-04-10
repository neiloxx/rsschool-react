import '@testing-library/jest-dom';
import axios from 'axios';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CardsField', () => {
  const TEST_CARD = {
    id: '15',
    name: 'Alien Rick',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/15',
    created: '2017-11-04T20:56:13.215Z',
  };

  it('should render character card', () => {
    render(<CharacterCard name={TEST_CARD.name} species={TEST_CARD.species} />);
    expect(screen.getByText(TEST_CARD.name)).toBeInTheDocument();
    expect(screen.getByText(TEST_CARD.species)).toBeInTheDocument();
  });

  it('should send request on card click', async () => {
    mockedAxios.get.mockRejectedValueOnce({});
    render(<CharacterCard name={TEST_CARD.name} species={TEST_CARD.species} id={TEST_CARD.id} />);
    const card = screen.getByAltText(TEST_CARD.name);
    fireEvent.click(card);
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });
});
