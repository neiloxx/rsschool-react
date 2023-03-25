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
            authors={el.authors}
            categories={el.categories}
            id={el.id}
            key={`${el.title}-${el.id}`}
            language={el.language}
            publishedDate={el.publishedDate}
            shortDescription={el.shortDescription}
            status={el.status}
            thumbnailUrl={el.thumbnailUrl}
            title={el.title}
          />
        ))}
      </div>
    );
  }
}
