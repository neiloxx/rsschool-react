import * as React from 'react';

import './inputs.scss';
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
      <div className={'field-wrapper'}>
        <label htmlFor={id} className={'text-input-label'}>
          <span>{label}</span>
          <input
            id={id}
            type={'text'}
            placeholder={placeholder}
            ref={refProp}
            className={'text-input'}
          />
        </label>
        <p className={'field-error'}>{errors && errors.join(', ')}</p>
      </div>
    );
  }
}
