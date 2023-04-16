import CharacterCard from 'components/CharacterCard/CharacterCard';
import SearchBar from 'components/SearchBar/SearchBar';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { charactersAPI } from 'services/charactersService';

export default function HomePage(): JSX.Element {
  const query = useAppSelector((state) => state.searchBarSlice.query);
  const { data, isFetching, isError } = charactersAPI.useFetchCharactersQuery(query);

  const characters = data || [];

  return (
    <>
      <h1>Home Page</h1>
      <SearchBar />
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
