import React from 'react';

type FormProps = {
  children: React.ReactNode;
  onSubmit: () => void;
};

export default function Form({ children, onSubmit }: FormProps): JSX.Element {
  return (
    <form className={'form'} role="form" onSubmit={onSubmit}>
      <div className={'form-inner'}>{children}</div>
    </form>
  );
}
