import React, { useEffect, useRef, useState } from 'react';

import 'components/SearchBar/SearchBar.scss';

const QUERY_KEY = 'query';

export default function SearchBar(): JSX.Element {
  const [query, setQuery] = useState<string>(localStorage.getItem(QUERY_KEY) || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const queryToSave = { ...inputRef };
    return () => localStorage.setItem(QUERY_KEY, queryToSave.current?.value || '');
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <input
      className={'search-bar'}
      placeholder={'Search...'}
      aria-label={'search-bar'}
      value={query}
      ref={inputRef}
      onChange={handleInputChange}
    />
  );
}
