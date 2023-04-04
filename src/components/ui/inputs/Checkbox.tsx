import * as React from 'react';
import { FieldValues } from 'react-hook-form';

import './Checkbox.scss';
import './inputs.scss';

type InputProps = {
  id?: string;
  label?: string;
  errors?: string[];
  register?: () => FieldValues;
};

export default function Checkbox({ id, label, register, errors }: InputProps): JSX.Element {
  return (
    <div className={'field-wrapper checkbox'}>
      <label htmlFor={id} className={'label'}>
        <span>{label}</span>
        <input
          id={id}
          name={id}
          type={'checkbox'}
          value={label}
          className={'checkbox-input'}
          data-testid={id}
          {...(register && register())}
        />
      </label>
      {errors && <p className={'field-error'}>{errors?.join(', ')}</p>}
    </div>
  );
}
