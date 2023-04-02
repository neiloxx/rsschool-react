import React from 'react';

import './Button.scss';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  innerText: string;
  onClick?: () => void;
};

export default class Button extends React.Component<ButtonProps> {
  render() {
    const { type, innerText, onClick } = this.props;

    return (
      <button className={'button'} type={type} onClick={onClick}>
        {innerText}
      </button>
    );
  }
}
