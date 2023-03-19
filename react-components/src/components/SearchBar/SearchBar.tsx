import React from 'react';

import './SearchBar.scss';

const QUERY_KEY = 'query';

type SearchBarState = {
  query: string;
};

export default class SearchBar extends React.Component {
  state: SearchBarState = {
    query: localStorage.getItem(QUERY_KEY) || '',
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ query });
  };

  componentWillUnmount() {
    localStorage.setItem(QUERY_KEY, this.state.query);
  }

  render() {
    return (
      <input
        className={'search-bar'}
        placeholder={'Search...'}
        value={this.state.query}
        onChange={this.handleInputChange}
      />
    );
  }
}
