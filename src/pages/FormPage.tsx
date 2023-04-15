import { useAppSelector } from 'hooks/redux';
import React from 'react';
import CardsField from 'components/CardsField/CardsField';
import AddCardForm from 'components/AddCardForm/AddCardForm';

export default function FormPage(): JSX.Element {
  const { cards } = useAppSelector((state) => state.formCardReducer);

  return (
    <>
      <h1>Form Page</h1>
      <AddCardForm />
      <CardsField cards={cards} />
    </>
  );
}
