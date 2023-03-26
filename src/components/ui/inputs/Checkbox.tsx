import * as React from 'react';

import './inputs.scss';
import './Checkbox.scss';

type InputProps = {
  id?: string;
  label?: string;
  errors?: string[];
  refProp?: React.RefObject<HTMLInputElement>;
};

export default class Checkbox extends React.Component<InputProps> {
  render() {
    const { id, label, refProp, errors } = this.props;

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
}
