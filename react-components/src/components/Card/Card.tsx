import React from 'react';

import './Card.scss';

interface CardProps {
  title: string;
  thumbnailUrl: string;
  authors: string;
  shortDescription: string;
  pageCount: number;
}

export default class Card extends React.Component<CardProps> {
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
