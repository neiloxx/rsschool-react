import React from 'react';
import { FormErrorsType } from 'types/types';

type FormProps = {
  children: React.ReactNode;
  onFormError: (errors: FormErrorsType) => void;
  onFormSuccess: () => void;
  refProp?: React.RefObject<HTMLFormElement>;
  validators?: { [x: string]: () => string[] };
};

export default class Form extends React.Component<FormProps> {
  validators = {
    ...this.props.validators,
  };

  errors: FormErrorsType = {};

  validate = (): void => {
    for (const validator in this.validators) {
      this.errors[validator] = this.validators[validator]();
    }
  };

  isFormValid = (): boolean => {
    for (const error in this.errors) {
      if (this.errors[error].length) {
        return false;
      }
    }
    return true;
  };

  handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    this.validate();
    this.isFormValid() ? this.props.onFormSuccess() : this.props.onFormError(this.errors);
  };

  render() {
    const { children, refProp } = this.props;

    return (
      <form
        className={'form'}
        ref={refProp}
        role="form"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <div className={'form-inner'}>{children}</div>
      </form>
    );
  }
}
