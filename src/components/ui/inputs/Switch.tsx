import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import RadioInput from 'components/ui/inputs/RadioInput';

import './inputs.scss';
import './Switch.scss';

type SwitchProps = {
  id: string;
  labels: string[];
  errors?: string[];
  register?: () => FieldValues;
};

export default function Switch({ id, labels, register, errors }: SwitchProps): JSX.Element {
  return (
    <div className={'field-wrapper'}>
      <div className={'switch'} data-testid={id}>
        {labels.map((label, idx) => (
          <RadioInput
            key={`${id}-${label}`}
            id={`${id}-${label}`}
            label={label}
            isChecked={!idx}
            register={register}
          />
        ))}
      </div>
      <p className={'field-error'}>{errors && errors.join(', ')}</p>
    </div>
  );
}
