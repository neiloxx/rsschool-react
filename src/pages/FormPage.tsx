import React from 'react';
import CardsField from 'components/CardsField/CardsField';
import AddCardForm from 'components/AddCardForm/AddCardForm';
import { CardType } from 'types/types';

export default class FormPage extends React.Component {
  state = {
    cards: [],
  };

  addCard = async (card: CardType) => {
    const cards = [...this.state.cards, card];
    await this.setState({ cards });
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
