import * as React from 'react';

import './inputs.scss';

type InputProps = {
  id?: string;
  label?: string;
  errors?: string[];
  refProp?: React.RefObject<HTMLInputElement>;
};

export default function DateInput({ id, label, refProp, errors }: InputProps): JSX.Element {
  return (
    <div className={'field-wrapper date'}>
      <label htmlFor={id} className={'date-label'}>
        <span>{label}</span>
        <input id={id} type={'date'} ref={refProp} className={'date-input'} data-testid={id} />
      </label>
      <p className={'field-error'}>{errors && errors.join(', ')}</p>
    </div>
  );
}
