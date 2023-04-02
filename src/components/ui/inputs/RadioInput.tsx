import * as React from 'react';

import './inputs.scss';
import './RadioInput.scss';

type InputProps = {
  id?: string;
  label?: string;
  name?: string;
  errors?: string[];
  isChecked?: boolean;
  refProp?: React.RefObject<HTMLInputElement>;
};

export default function RadioInput(props: InputProps): JSX.Element {
  const { id, label, name, refProp, isChecked } = props;

  return (
    <div className={'field-wrapper'}>
      <label htmlFor={id} className={'radio-label'}>
        <input
          id={id}
          type={'radio'}
          name={name}
          value={label}
          ref={refProp}
          className={'radio-input'}
          defaultChecked={!!isChecked}
          data-testid={id}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
