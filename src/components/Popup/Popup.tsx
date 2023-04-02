import React from 'react';

import './Popup.scss';

type PopupPropsType = {
  children: React.ReactNode;
};

export default function Popup({ children }: PopupPropsType): JSX.Element {
  return (
    <div className={'popup-wrapper'}>
      <div className={'popup'}>{children}</div>
    </div>
  );
}
