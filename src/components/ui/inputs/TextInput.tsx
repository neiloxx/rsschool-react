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

export default function TextInput({
  id,
  placeholder,
  label,
  errors,
  refProp,
}: InputProps): JSX.Element {
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
          data-testid={id}
        />
      </label>
      <p className={'field-error'}>{errors && errors.join(', ')}</p>
    </div>
  );
}
