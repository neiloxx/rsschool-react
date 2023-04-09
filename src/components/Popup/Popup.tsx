import React from 'react';

import './Popup.scss';

type PopupPropsType = {
  children: React.ReactNode;
  onBackgroundCLick?: () => void;
};

export default function Popup({ children, onBackgroundCLick }: PopupPropsType): JSX.Element {
  return (
    <div className={'popup-wrapper'} onClick={onBackgroundCLick}>
      <div className={'popup'} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
