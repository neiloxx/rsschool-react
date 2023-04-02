import * as React from 'react';
import './FileInput.scss';

import './inputs.scss';

type InputProps = {
  id?: string;
  label?: string;
  formats?: string;
  errors?: string[];
  refProp?: React.RefObject<HTMLInputElement>;
};

export default function FileInput(props: InputProps): JSX.Element {
  const { id, label, refProp, formats, errors } = props;

  return (
    <div className={'field-wrapper file'}>
      <label htmlFor={id} className={'file-label'}>
        <span>{label}</span>
        <input
          id={id}
          type={'file'}
          ref={refProp}
          className={'file-input'}
          accept={formats}
          data-testid={id}
        />
      </label>
      <p className={'field-error'}>{errors && errors.join(', ')}</p>
    </div>
  );
}
