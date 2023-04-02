import React from 'react';

import './Popup.scss';

type PopupPropsType = {
  children: React.ReactNode;
};

export default class Popup extends React.Component<PopupPropsType> {
  render() {
    const { children } = this.props;

    return (
      <div className={'popup-wrapper'}>
        <div className={'popup'}>{children}</div>
      </div>
    );
  }
}
