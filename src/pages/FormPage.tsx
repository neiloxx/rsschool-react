import React from 'react';
import CardsField from 'components/CardsField/CardsField';
import AddCardForm from 'components/AddCardForm/AddCardForm';
import { CardType } from 'types/types';

export default class FormPage extends React.Component {
  state = {
    cards: [],
  };

  addCard = (card: CardType) => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  render() {
    return (
      <>
        <h1>Form Page</h1>
        <AddCardForm {...this.props} addCard={this.addCard} />
        <CardsField cards={this.state.cards} />
      </>
    );
  }
}
