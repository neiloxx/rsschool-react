import React from 'react';

import Card from 'components/Card/Card';
import { CardType } from 'types/types';

import 'components/CardsField/CardsField.scss';

type CardsFieldType = {
  cards: CardType[];
};

export default class CardsField extends React.Component<CardsFieldType> {
  data = this.props.cards;

  render() {
    return (
      <div className={'cards'}>
        {this.data.map((el, idx) => (
          <Card
            key={`${el.title}-${idx}`}
            title={el.title}
            thumbnailUrl={el.thumbnailUrl}
            authors={el.authors}
            shortDescription={el.shortDescription}
            pageCount={el.pageCount}
          />
        ))}
      </div>
    );
  }
}
