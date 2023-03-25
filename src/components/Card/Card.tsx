import React from 'react';

import { CardType } from 'types/types';

import './Card.scss';

export default class Card extends React.Component<CardType> {
  render() {
    const {
      authors,
      categories,
      language,
      publishedDate,
      shortDescription,
      status,
      thumbnailUrl,
      title,
    } = this.props;

    return (
      <div className={'card'}>
        <h3 className={'card__title'}>{title}</h3>
        <img src={thumbnailUrl} className={'image'} alt={title} />
        <div className={'card__description'}>
          <p className={'card__description-field'}>
            <strong>Language:</strong> {language}
          </p>
          <p className={'card__description-field'}>
            <strong>Authors:</strong> {authors?.join(', ')}
          </p>
          <p className={'card__description-field status'}>
            <strong>Status:</strong> <span>{status}</span>
          </p>
          <p className={'card__description-field'}>
            <strong>Date:</strong> {publishedDate || 'To be announced'}
          </p>
          <p className={'card__description-field categories'}>
            <strong>Categories:</strong> <span>{categories.join(', ')}</span>
          </p>
          <p className={'card__description-text'}>{shortDescription}</p>
        </div>
      </div>
    );
  }
}
