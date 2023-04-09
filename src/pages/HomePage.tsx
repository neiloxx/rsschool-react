import { getCharacters } from 'api/api';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { CharacterCardType } from 'types/types';

export default function HomePage(): JSX.Element {
  const [characters, setCharacters] = useState<CharacterCardType[]>([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <SearchBar />
      <div className="cards">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            image={char.image}
          />
        ))}
      </div>
    </>
  );
}
