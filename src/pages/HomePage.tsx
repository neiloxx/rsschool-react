import CharacterCard from 'components/CharacterCard/CharacterCard';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useRef, useState } from 'react';
import { charactersAPI } from 'services/charactersService';

const QUERY_KEY = 'query';

export default function HomePage(): JSX.Element {
  const [query, setQuery] = useState<string>(localStorage.getItem(QUERY_KEY) || '');
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isFetching, isError } = charactersAPI.useFetchCharactersQuery(query);

  const characters = data || [];

  return (
    <>
      <h1>Home Page</h1>
      <SearchBar query={query} inputRef={inputRef} onSearch={setQuery} />
      <div className="cards">
        {isError ? (
          <p>Nothing found</p>
        ) : isFetching ? (
          <p>Progressing...</p>
        ) : (
          characters.map((char) => (
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              image={char.image}
            />
          ))
        )}
      </div>
    </>
  );
}
