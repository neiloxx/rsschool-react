import React from 'react';
import { charactersAPI } from 'services/charactersService';

import { CharacterCardType } from 'types/types';

import './CardDetails.scss';

type CardDetailsType = CharacterCardType;

export default function CardDetails({ id }: CardDetailsType): JSX.Element {
  const {
    data: character,
    isFetching,
    isError,
  } = charactersAPI.useFetchCharacterByIdQuery(`${id}`);

  return (
    <div className={'card-details'}>
      {isError ? (
        <p>Nothing found</p>
      ) : isFetching ? (
        <p>Progressing...</p>
      ) : (
        character && (
          <>
            <h3 className={'card-details__title'}>{character.name}</h3>
            <img src={character.image} className={'card-details__image'} alt={character.name} />
            <div className={'card__description'}>
              <p className={'card__description-field'}>
                <strong>Species:</strong> {character.species}
              </p>
              <p className={'card__description-field'}>
                <strong>Status:</strong> {character.status}
              </p>
              <p className={'card__description-field'}>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p className={'card__description-field'}>
                <strong>Episodes:</strong> {character.episode?.length}
              </p>
              <p className={'card__description-field'}>
                <strong>Location:</strong> {character.location?.name}
              </p>
            </div>
          </>
        )
      )}
    </div>
  );
}
