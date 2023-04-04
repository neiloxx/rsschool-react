import * as React from 'react';
import { FieldValues } from 'react-hook-form';

import './inputs.scss';

type InputProps = {
  id?: string;
  label?: string;
  errors?: string;
  register?: () => FieldValues;
};

export default function DateInput({ id, label, register, errors }: InputProps): JSX.Element {
  return (
    <div className={'field-wrapper date'}>
      <label htmlFor={id} className={'date-label'}>
        <span>{label}</span>
        <input
          id={id}
          type={'date'}
          className={'date-input'}
          data-testid={id}
          {...(register && register())}
        />
      </label>
      <p className={'field-error'}>{errors}</p>
    </div>
  );
}
