import React from 'react';

import Card from 'components/Card/Card';
import { CardType } from 'types/types';

import 'components/CardsField/CardsField.scss';

type CardsFieldType = {
  cards: CardType[];
};

export default class CardsField extends React.Component<CardsFieldType> {
  render() {
    const { cards } = this.props;

    return (
      <div className={'cards'}>
        {cards.map((el) => (
          <Card
            key={`${el.title}-${el.id}`}
            id={el.id}
            title={el.title}
            publishedDate={el.publishedDate}
            status={el.status}
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
