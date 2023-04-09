import React from 'react';

import { CharacterCardType } from 'types/types';

import './CharacterCard.scss';

export default function CharacterCard({ name, species, image }: CharacterCardType): JSX.Element {
  return (
    <div className={'card character'}>
      <h3 className={'card__title'}>{name}</h3>
      <img src={image} className={'image'} alt={name} />
      <div className={'card__description'}>
        <p className={'card__description-field'}>
          <strong>Species:</strong> {species}
        </p>
      </div>
    </div>
  );
}
