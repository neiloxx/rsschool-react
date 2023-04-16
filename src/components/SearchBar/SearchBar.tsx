import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';

import 'components/SearchBar/SearchBar.scss';
import { searchBarSlice } from 'store/reducers/searchBarSlice';

export default function SearchBar(): JSX.Element {
  const query = useAppSelector((state) => state.searchBarSlice.query);
  const [searchQuery, setSearchQuery] = useState<string>(query);

  const { setQuery } = searchBarSlice.actions;
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => dispatch(setQuery(searchQuery));

  const handlePressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={'search-wrapper'} onKeyDown={handlePressEnter}>
      <input
        className={'search-bar'}
        placeholder={'Search...'}
        aria-label={'search-bar'}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className={'search-button'} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
