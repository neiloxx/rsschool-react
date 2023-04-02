import Card from 'components/Card/Card';

import 'components/CardsField/CardsField.scss';
import React from 'react';
import { CardType } from 'types/types';

type CardsFieldType = {
  cards: CardType[];
};

export default function CardsField({ cards }: CardsFieldType): JSX.Element {
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
