import Checkbox from 'components/ui/inputs/Checkbox';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';

import './inputs.scss';
import './CheckboxField.scss';

type SwitchProps = {
  id: string;
  labels: string[];
  errors?: string;
  getChosen?: () => React.RefObject<HTMLInputElement>;
  register?: () => FieldValues;
};

export default function CheckboxField({ id, labels, register, errors }: SwitchProps): JSX.Element {
  return (
    <div className={'field-wrapper'}>
      <p className={'field-title'}>{`${id}:`}</p>
      <div className={'checkbox-field'} data-testid={id}>
        {labels.map((label) => (
          <Checkbox
            key={`${id}-${label}`}
            id={`${id}-${label}`}
            label={label}
            register={register}
          />
        ))}
      </div>
      {<p className={'field-error'}>{errors}</p>}
    </div>
  );
}
