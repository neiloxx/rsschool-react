import React from 'react';

import './Button.scss';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  innerText: string;
  onClick?: () => void;
};

export function Button({ type, innerText, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={'button'} type={type} onClick={onClick}>
      {innerText}
    </button>
  );
}
