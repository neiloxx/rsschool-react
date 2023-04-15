import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import CardDetails from 'components/CharacterCard/CardDetails/CardDetails';
import { responseMock } from 'mocks/apiMocks';
import { handlerGetCharacterById } from 'mocks/handlers';
import { server } from 'mocks/server';
import React from 'react';
import { renderWithProviders } from 'utils/test-utils';

describe('CardDetails', () => {
  const cards = responseMock.results[0];

  it('should render cardDetails', async () => {
    server.use(...handlerGetCharacterById);
    renderWithProviders(<CardDetails id={cards.id} />);
    await waitFor(() => {
      expect(screen.queryByText(/Location/)).toBeInTheDocument();
    });
  });
});
