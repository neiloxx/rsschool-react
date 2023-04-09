import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import HomePage from 'pages/HomePage';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HomePage', () => {
  const TEST_RESULT = {
    results: [
      {
        id: 8,
        name: 'Adjudicator Rick',
        status: 'Dead',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: { name: 'unknown', url: '' },
        location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
        image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/28'],
        url: 'https://rickandmortyapi.com/api/character/8',
        created: '2017-11-04T20:03:34.737Z',
      },
      {
        id: 15,
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
      },
    ],
  };

  it('should render nothing found on api error', async () => {
    mockedAxios.get.mockRejectedValueOnce({});
    render(<HomePage />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.queryByText('Nothing found')).toBeInTheDocument();
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });

  it('should render cards', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: TEST_RESULT });
    render(<HomePage />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.queryByText(`${TEST_RESULT.results[0].name}`)).toBeInTheDocument();
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });

  it('should render Progressing... when waits for cards', async () => {
    mockedAxios.get.mockRejectedValueOnce({});
    render(<HomePage />, { wrapper: BrowserRouter });
    expect(screen.queryByText('Progressing...')).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
