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

export default class RadioInput extends React.Component<InputProps> {
  render() {
    const { id, label, name, refProp, isChecked } = this.props;

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
          />
          <span>{label}</span>
        </label>
      </div>
    );
  }
}
