import * as React from 'react';
import { FieldValues } from 'react-hook-form';

import './inputs.scss';
import './TextInput.scss';

type InputProps = {
  id: string;
  label: string;
  errors?: string;
  placeholder?: string;
  register?: () => FieldValues;
};

export default function TextInput({
  id,
  placeholder,
  label,
  register,
  errors,
}: InputProps): JSX.Element {
  return (
    <div className={'field-wrapper'}>
      <label htmlFor={id} className={'text-input-label'}>
        <span>{label}</span>
        <input
          id={id}
          type={'text'}
          name={id}
          placeholder={placeholder}
          className={'text-input'}
          data-testid={id}
          {...(register && register())}
        />
      </label>
      <p className={'field-error'}>{errors}</p>
    </div>
  );
}
