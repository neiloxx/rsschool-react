import React from 'react';

import './Popup.scss';

type PopupPropsType = {
  children: React.ReactNode;
};

export default function Popup(props: PopupPropsType): JSX.Element {
  const { children } = props;

  return (
    <div className={'popup-wrapper'}>
      <div className={'popup'}>{children}</div>
    </div>
  );
}
