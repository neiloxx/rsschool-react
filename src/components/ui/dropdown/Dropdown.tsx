import React from 'react';
import { FieldValues } from 'react-hook-form';

import './Dropdown.scss';

type DropdownProps = {
  id: string;
  label?: string;
  options: string[];
  register?: () => FieldValues;
};

export function Dropdown({ id, label, register, options }: DropdownProps): JSX.Element {
  return (
    <div className={'dropdown'} data-testid={id}>
      <label htmlFor={id} className={'dropdown__label'}>
        <span className={'dropdown__text'}>{`${label}:`}</span>
        <select id={id} className={'dropdown__select'} {...(register && register())}>
          {options.map((option) => (
            <option className={'dropdown__option'} key={`${id}-${option}`}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
