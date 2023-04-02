import Checkbox from 'components/ui/inputs/Checkbox';
import * as React from 'react';
import './CheckboxField.scss';

import './inputs.scss';

type SwitchProps = {
  id: string;
  labels: string[];
  errors?: string[];
  getChosen?: () => React.RefObject<HTMLInputElement>;
  refProps: React.RefObject<HTMLInputElement>[];
};

export default function CheckboxField(props: SwitchProps): JSX.Element {
  const { id, labels, refProps, errors } = props;

  return (
    <div className={'field-wrapper'}>
      <p className={'field-title'}>{`${id}:`}</p>
      <div className={'checkbox-field'} data-testid={id}>
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
