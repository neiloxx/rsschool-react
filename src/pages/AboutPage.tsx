import data from 'api/data.json';
import CardsField from 'components/CardsField/CardsField';
import React from 'react';

export default function AboutPage(): JSX.Element {
  return (
    <>
      <h1>About Page</h1>
      <CardsField cards={data} />
    </>
  );
}
