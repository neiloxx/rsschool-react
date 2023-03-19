import Card from 'components/Card/Card';
import React from 'react';
import data from 'api/data.json';

import './CardsField.scss';

export default class CardsField extends React.Component {
  render() {
    return (
      <div className={'cards'}>
        {data.map((el, idx) => (
          <Card
            key={`${el.title}-${idx}`}
            title={el.title}
            thumbnailUrl={el.thumbnailUrl}
            authors={el.authors.join(', ')}
            shortDescription={el.shortDescription}
            pageCount={el.pageCount}
          />
        ))}
      </div>
    );
  }
}
