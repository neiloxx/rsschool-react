import React from 'react';
import { FormErrorsType } from 'types/types';

type FormProps = {
  children: React.ReactNode;
  onFormError: (errors: FormErrorsType) => void;
  onFormSuccess: () => void;
  refProp?: React.RefObject<HTMLFormElement>;
  validators?: { [x: string]: () => string[] };
};

export default function Form({
  children,
  onFormError,
  onFormSuccess,
  validators,
  refProp,
}: FormProps): JSX.Element {
  const errors: FormErrorsType = {};

  const validate = (): void => {
    for (const validator in validators) {
      errors[validator] = validators[validator]();
    }
  };

  const isFormValid = (): boolean => {
    for (const error in errors) {
      if (errors[error].length) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    validate();
    isFormValid() ? onFormSuccess() : onFormError(errors);
  };

  return (
    <form className={'form'} ref={refProp} role="form" onSubmit={(event) => handleSubmit(event)}>
      <div className={'form-inner'}>{children}</div>
    </form>
  );
}
