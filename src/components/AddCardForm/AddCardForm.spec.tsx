import '@testing-library/jest-dom';
import React from 'react';
import AddCardForm from 'components/AddCardForm/AddCardForm';
import { fields } from 'components/AddCardForm/formFields';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  const TEST_DATA = fields;

  const addCard = jest.fn();

  beforeEach(() => render(<AddCardForm addCard={addCard} />));

  it('should render form fields', () => {
    for (const value of Object.values(TEST_DATA)) {
      expect(screen.getByTestId(value.id)).toBeInTheDocument();
    }
  });
});
