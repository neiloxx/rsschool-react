import React from 'react';

import './Popup.scss';

type PopupPropsType = {
  children: React.ReactNode;
  onClose?: () => void;
};

export default function Popup({ children, onClose }: PopupPropsType): JSX.Element {
  return (
    <div className={'popup-wrapper'} onClick={onClose}>
      <div className={'popup'} onClick={(e) => e.stopPropagation()}>
        <button className={'popup-closer'} onClick={onClose}>
          &#10006;
        </button>
        {children}
      </div>
    </div>
  );
}
