import * as React from 'react';
import { FieldValues } from 'react-hook-form';

import './inputs.scss';
import './RadioInput.scss';

type InputProps = {
  id?: string;
  label?: string;
  errors?: string[];
  isChecked?: boolean;
  register?: () => FieldValues;
};

export default function RadioInput({ id, label, register, isChecked }: InputProps): JSX.Element {
  return (
    <div className={'field-wrapper'}>
      <label htmlFor={id} className={'radio-label'}>
        <input
          id={id}
          type={'radio'}
          name={id}
          value={label}
          className={'radio-input'}
          defaultChecked={!!isChecked}
          data-testid={id}
          {...(register && register())}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
