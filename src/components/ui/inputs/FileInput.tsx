import * as React from 'react';
import { FieldValues } from 'react-hook-form';

import './FileInput.scss';
import './inputs.scss';

type InputProps = {
  id?: string;
  label?: string;
  formats?: string;
  errors?: string;
  register?: () => FieldValues;
};

export default function FileInput({
  id,
  label,
  formats,
  register,
  errors,
}: InputProps): JSX.Element {
  return (
    <div className={'field-wrapper file'}>
      <label htmlFor={id} className={'file-label'}>
        <span>{label}</span>
        <input
          id={id}
          type={'file'}
          className={'file-input'}
          accept={formats}
          data-testid={id}
          {...(register && register())}
        />
      </label>
      <p className={'field-error'}>{errors}</p>
    </div>
  );
}
