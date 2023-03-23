import CardsField from 'components/CardsField/CardsField';
import React from 'react';
import AddCardForm from 'components/AddCardForm/AddCardForm';

export default class FormPage extends React.Component {
  state = {
    cards: [],
  };

  render() {
    return (
      <>
        <h1>Form Page</h1>
        <AddCardForm />
        <CardsField cards={this.state.cards} />
      </>
    );
  }
}
