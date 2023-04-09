import React, { useState } from 'react';

import 'components/SearchBar/SearchBar.scss';

type SearchBarType = {
  inputRef?: React.RefObject<HTMLInputElement>;
  onSearch: (query: string) => void;
  query: string;
};

export default function SearchBar({ inputRef, onSearch, query }: SearchBarType): JSX.Element {
  const [searchQuery, setQuery] = useState<string>(query);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => onSearch(searchQuery);

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
        ref={inputRef}
        onChange={handleInputChange}
      />
      <button className={'search-button'} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
