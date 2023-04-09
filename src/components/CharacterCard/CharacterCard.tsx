import { getCharacter } from 'api/api';
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cardDetails, setCardDetails] = useState<CharacterCardType | null>(null);

  const onCardClick = () => {
    setIsLoading(true);
    id &&
      getCharacter(id).then((card) => {
        setCardDetails(card);
        setIsLoading(false);
      });
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
          {isLoading ? <p>Progressing...</p> : <CardDetails {...cardDetails} />}
        </Popup>
      )}
    </>
  );
}
