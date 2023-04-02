import * as React from 'react';
import './Checkbox.scss';

import './inputs.scss';

type InputProps = {
  id?: string;
  label?: string;
  errors?: string[];
  refProp?: React.RefObject<HTMLInputElement>;
};

export default function Checkbox({ id, label, refProp, errors }: InputProps): JSX.Element {
  return (
    <div className={'field-wrapper checkbox'}>
      <label htmlFor={id} className={'label'}>
        <span>{label}</span>
        <input
          id={id}
          type={'checkbox'}
          ref={refProp}
          value={label}
          className={'checkbox-input'}
          data-testid={id}
        />
      </label>
      {errors && <p className={'field-error'}>{errors?.join(', ')}</p>}
    </div>
  );
}
