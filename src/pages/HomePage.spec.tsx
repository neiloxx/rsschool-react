import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { responseMock } from 'mocks/apiMocks';
import { handlerError, handlerGetCharacters } from 'mocks/handlers';
import { server } from 'mocks/server';
import HomePage from 'pages/HomePage';
import React from 'react';
import { renderWithProviders } from 'utils/test-utils';

describe('HomePage', () => {
  const cards = responseMock.results;

  it('should render nothing found on api error', async () => {
    server.use(...handlerError);
    renderWithProviders(<HomePage />);
    await waitFor(() => {
      expect(screen.queryByText(/Nothing found/i)).toBeInTheDocument();
    });
  });

  it('should render cards', async () => {
    server.use(...handlerGetCharacters);
    renderWithProviders(<HomePage />);
    await waitFor(() => {
      cards.forEach((card) => expect(screen.queryByText(`${card.name}`)).toBeInTheDocument());
    });
  });

  it('should open popup on card click', async () => {
    server.use(...handlerGetCharacters);
    renderWithProviders(<HomePage />);
    await waitFor(async () => {
      const card = screen.getByText(`${cards[0].name}`);
      expect(card).toBeInTheDocument();
      fireEvent.click(card);
      await waitFor(() => expect(screen.getByText(/Location/i)).toBeInTheDocument());
    });
  });
});
