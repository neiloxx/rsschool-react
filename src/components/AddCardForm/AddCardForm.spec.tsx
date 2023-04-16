import '@testing-library/jest-dom';
import React from 'react';
import AddCardForm from 'components/AddCardForm/AddCardForm';
import { fields } from 'components/AddCardForm/formFields';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';

describe('Card', () => {
  const TEST_DATA = fields;

  it('should render form fields', () => {
    renderWithProviders(<AddCardForm />);
    for (const value of Object.values(TEST_DATA)) {
      expect(screen.getByTestId(value.id)).toBeInTheDocument();
    }
  });
});
