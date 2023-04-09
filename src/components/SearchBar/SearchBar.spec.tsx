import '@testing-library/jest-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SearchBar', () => {
  const query = 'query';

  beforeEach(() => render(<SearchBar onSearch={jest.fn} query={''} />));

  it('should render SearchBar', () => {
    expect(screen.getByLabelText('search-bar'));
  });

  it('should change searchBar value', () => {
    const input: HTMLInputElement = screen.getByLabelText('search-bar');

    expect(input.value).toBe('');

    fireEvent.change(screen.getByLabelText('search-bar'), {
      target: { value: query },
    });

    expect(input.value).toBe(query);
  });
});
