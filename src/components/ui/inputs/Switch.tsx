import RadioInput from 'components/ui/inputs/RadioInput';
import * as React from 'react';

import './inputs.scss';
import './Switch.scss';

type SwitchProps = {
  id: string;
  labels: string[];
  errors?: string[];
  getChosen?: () => React.RefObject<HTMLInputElement>;
  refProps: React.RefObject<HTMLInputElement>[];
};

export default class Switch extends React.Component<SwitchProps> {
  render() {
    const { id, labels, refProps, errors } = this.props;

    return (
      <div className={'field-wrapper'}>
        <div className={'switch'}>
          {labels.map((label, idx) => (
            <RadioInput
              key={`${id}-${label}`}
              id={`${id}-${label}`}
              label={label}
              name={id}
              isChecked={!idx}
              refProp={refProps[idx]}
            />
          ))}
        </div>
        <p className={'field-error'}>{errors && errors.join(', ')}</p>
      </div>
    );
  }
}
