import * as React from 'react';

import Checkbox from 'components/ui/inputs/Checkbox';

import './inputs.scss';
import 'components/ui/inputs/CheckboxField.scss';

type SwitchProps = {
  id: string;
  labels: string[];
  errors?: string[];
  getChosen?: () => React.RefObject<HTMLInputElement>;
  refProps: React.RefObject<HTMLInputElement>[];
};

export default class CheckboxField extends React.Component<SwitchProps> {
  render() {
    const { id, labels, refProps, errors } = this.props;

    return (
      <div className={'field-wrapper'}>
        <p className={'field-title'}>{`${id}:`}</p>
        <div className={'checkbox-field'}>
          {labels.map((label, idx) => (
            <Checkbox
              key={`${id}-${label}`}
              id={`${id}-${label}`}
              label={label}
              refProp={refProps[idx]}
            />
          ))}
        </div>
        {<p className={'field-error'}>{errors?.join(', ')}</p>}
      </div>
    );
  }
}
