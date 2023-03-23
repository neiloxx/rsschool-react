import React from 'react';

import { CardType } from 'types/types';

import './Card.scss';

export default class Card extends React.Component<CardType> {
  render() {
    return (
      <div className={'card'}>
        <h3 className={'card__title'}>{this.props.title}</h3>
        <img src={this.props.thumbnailUrl} className={'image'} alt={this.props.title} />
        <div className={'card__description'}>
          <p className={'card__description-count'}>
            <strong>Page Count:</strong> {this.props.pageCount}
          </p>
          <p className={'card__description-count'}>
            <strong>Authors:</strong> {this.props.authors}
          </p>
          <p className={'card__description-text'}>{this.props.shortDescription}</p>
        </div>
      </div>
    );
  }
}
