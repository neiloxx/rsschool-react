import React from 'react';

import './Dropdown.scss';

type DropdownProps = {
  id: string;
  label?: string;
  options: string[];
  refProp: React.RefObject<HTMLSelectElement>;
};

export default class Dropdown extends React.Component<DropdownProps> {
  render() {
    const { id, label, options, refProp } = this.props;

    return (
      <div className={'dropdown'}>
        <label htmlFor={id} className={'dropdown__label'}>
          <span className={'dropdown__text'}>{`${label}:`}</span>
          <select id={id} className={'dropdown__select'} ref={refProp}>
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
}
