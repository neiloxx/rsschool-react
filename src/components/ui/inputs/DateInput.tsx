import * as React from 'react';

import './inputs.scss';
import './DateInput.scss';

type InputProps = {
  id?: string;
  label?: string;
  errors?: string[];
  refProp?: React.RefObject<HTMLInputElement>;
};

export default class DateInput extends React.Component<InputProps> {
  render() {
    const { id, label, refProp, errors } = this.props;

    return (
      <div className={'field-wrapper date'}>
        <label htmlFor={id} className={'date-label'}>
          <span>{label}</span>
          <input id={id} type={'date'} ref={refProp} className={'date-input'} />
        </label>
        <p className={'field-error'}>{errors && errors.join(', ')}</p>
      </div>
    );
  }
}
