import React from 'react';

import { CharacterCardType } from 'types/types';

import './CardDetails.scss';

type CardDetailsType = CharacterCardType;

export default function CardDetails({
  name,
  image,
  status,
  species,
  episode,
  gender,
  location,
}: CardDetailsType): JSX.Element {
  return (
    <div className={'card-details'}>
      <h3 className={'card-details__title'}>{name}</h3>
      <img src={image} className={'card-details__image'} alt={name} />
      <div className={'card__description'}>
        <p className={'card__description-field'}>
          <strong>Species:</strong> {species}
        </p>
        <p className={'card__description-field'}>
          <strong>Status:</strong> {status}
        </p>
        <p className={'card__description-field'}>
          <strong>Gender:</strong> {gender}
        </p>
        <p className={'card__description-field'}>
          <strong>Episodes:</strong> {episode?.length}
        </p>
        <p className={'card__description-field'}>
          <strong>Location:</strong> {location?.name}
        </p>
      </div>
    </div>
  );
}
