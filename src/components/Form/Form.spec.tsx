import '@testing-library/jest-dom';
import React from 'react';
import Form from './Form';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

describe('Card', () => {
  const TEST_DATA = {
    children: <div data-testid={'children'}>children</div>,
    onFormError: jest.fn(),
    onFormSuccess: jest.fn(),
    validators: {
      some: () => [''],
    },
    errors: {},
  };

  beforeEach(() =>
    render(
      <Form onFormError={TEST_DATA.onFormError} onFormSuccess={TEST_DATA.onFormSuccess}>
        {TEST_DATA.children}
      </Form>
    )
  );

  it('should render form with children', () => {
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });

  it('should call onFormSuccess on submit if success', async () => {
    const form = await screen.findByRole('form');
    expect(TEST_DATA.onFormSuccess).toBeCalledTimes(0);
    fireEvent.submit(form);
    expect(TEST_DATA.onFormSuccess).toBeCalledTimes(1);
  });

  it('should call onFormError on submit if errors', async () => {
    cleanup();
    render(
      <Form
        onFormError={TEST_DATA.onFormError}
        onFormSuccess={TEST_DATA.onFormSuccess}
        validators={TEST_DATA.validators}
      >
        {TEST_DATA.children}
      </Form>
    );
    const form = await screen.findByRole('form');
    expect(TEST_DATA.onFormError).toBeCalledTimes(0);
    fireEvent.submit(form);
    expect(TEST_DATA.onFormError).toBeCalledTimes(1);
  });
});
