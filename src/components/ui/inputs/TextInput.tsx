import * as React from 'react';

import './TextInput.scss';

type InputProps = {
  id: string;
  label: string;
  errors?: string[];
  refProp?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
};

export default class TextInput extends React.Component<InputProps> {
  render() {
    const { id, placeholder, label, errors, refProp } = this.props;

    return (
      <div className={'input-wrapper'}>
        <label htmlFor={id} className={'text-input-label'}>
          <span className={'text-input-label__text'}>{label}</span>
          <input
            id={id}
            type={'text'}
            placeholder={placeholder}
            ref={refProp}
            className={'text-input'}
          />
        </label>
        <p className={'text-input-error'}>{errors && errors.join(', ')}</p>
      </div>
    );
  }
}
