import { getCharacters } from 'api/api';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect, useRef, useState } from 'react';
import { CharacterCardType } from 'types/types';

const QUERY_KEY = 'query';

export default function HomePage(): JSX.Element {
  const [characters, setCharacters] = useState<CharacterCardType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>(localStorage.getItem(QUERY_KEY) || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const queryToSave = { ...inputRef };
    return () => localStorage.setItem(QUERY_KEY, queryToSave.current?.value || '');
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getCharacters(query)
      .then((cards) => {
        setCharacters(cards);
        setIsLoading(false);
      })
      .catch(() => {
        setCharacters([]);
        setIsLoading(false);
      });
  }, [query]);
  return (
    <>
      <h1>Home Page</h1>
      <SearchBar query={query} inputRef={inputRef} onSearch={setQuery} />
      {isLoading ? (
        <p>Progressing...</p>
      ) : (
        <div className="cards">
          {characters.length ? (
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
          ) : (
            <p>Nothing found</p>
          )}
        </div>
      )}
    </>
  );
}
