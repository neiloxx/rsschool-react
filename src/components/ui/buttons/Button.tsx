import React from 'react';

import './Button.scss';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  innerText: string;
  onClick?: () => void;
};

export default function Button(props: ButtonProps): JSX.Element {
  const { type, innerText, onClick } = props;

  return (
    <button className={'button'} type={type} onClick={onClick}>
      {innerText}
    </button>
  );
}
