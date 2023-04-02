import React, { useEffect, useState } from 'react';

import 'components/SearchBar/SearchBar.scss';

const QUERY_KEY = 'query';

export default function SearchBar(): JSX.Element {
  const [query, setQuery] = useState(localStorage.getItem(QUERY_KEY) || '');

  useEffect(() => () => localStorage.setItem(QUERY_KEY, query), [query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <input
      className={'search-bar'}
      placeholder={'Search...'}
      aria-label={'search-bar'}
      value={query}
      onChange={handleInputChange}
    />
  );
}
