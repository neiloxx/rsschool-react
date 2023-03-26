import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from 'components/Card/Card';

describe('Card', () => {
  const TEST_DATA = {
    id: 'id',
    title: 'Title',
    thumbnailUrl: 'thumbnailUrl',
    authors: 'authors',
    shortDescription: 'shortDescription',
    categories: ['Data Science'],
    language: 'English',
    status: 'published',
  };

  beforeEach(() => render(<Card {...TEST_DATA} />));

  it('should render card', () => {
    expect(screen.getByText(TEST_DATA.title)).toBeInTheDocument();
    expect(screen.getByText(TEST_DATA.authors)).toBeInTheDocument();
    expect(screen.getByText(TEST_DATA.shortDescription)).toBeInTheDocument();
    expect(screen.getByText(TEST_DATA.language)).toBeInTheDocument();
    expect(screen.getByText(TEST_DATA.status)).toBeInTheDocument();
  });

  it('should create image and fill alt attribute in it', () => {
    expect(screen.getByAltText(TEST_DATA.title)).toBeInTheDocument();
  });
});
