import CardDetails from 'components/CharacterCard/CardDetails/CardDetails';
import Popup from 'components/Popup/Popup';
import React, { useState } from 'react';

import { CharacterCardType } from 'types/types';

import './CharacterCard.scss';

export default function CharacterCard({
  id,
  name,
  species,
  image,
}: CharacterCardType): JSX.Element {
  const [isPopupOpened, setPopupOpened] = useState<boolean>(false);

  const onCardClick = () => {
    setPopupOpened(true);
  };

  return (
    <>
      <div className={'card character'} onClick={onCardClick}>
        <h3 className={'card__title'}>{name}</h3>
        <img src={image} className={'image'} alt={name} />
        <div className={'card__description'}>
          <p className={'card__description-field'}>
            <strong>Species:</strong> {species}
          </p>
        </div>
      </div>
      {isPopupOpened && (
        <Popup onClose={() => setPopupOpened(false)}>
          <CardDetails id={id} />
        </Popup>
      )}
    </>
  );
}
