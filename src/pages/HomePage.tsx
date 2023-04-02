import CardsField from 'components/CardsField/CardsField';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';

import data from 'api/data.json';

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <SearchBar />
        <CardsField cards={data} />
      </>
    );
  }
}
