import React, { useState } from 'react';
import CardsField from 'components/CardsField/CardsField';
import AddCardForm from 'components/AddCardForm/AddCardForm';
import { CardType } from 'types/types';

export default function FormPage(): JSX.Element {
  const [cards, setCards] = useState<CardType[]>([]);

  const addCard = (card: CardType) => {
    setCards([...cards, card]);
  };

  return (
    <>
      <h1>Form Page</h1>
      <AddCardForm addCard={addCard} />
      <CardsField cards={cards} />
    </>
  );
}
