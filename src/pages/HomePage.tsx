import data from 'api/data.json';
import CardsField from 'components/CardsField/CardsField';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';

export default function HomePage(): JSX.Element {
  return (
    <>
      <h1>Home Page</h1>
      <SearchBar />
      <CardsField cards={data} />
    </>
  );
}
