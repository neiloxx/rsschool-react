import React from 'react';
import generateId from 'utils/generateId';

import Form from 'components/Form/Form';
import Switch from 'components/ui/inputs/Switch';
import TextInput from 'components/ui/inputs/TextInput';

import { CardType, FormErrorsType } from 'types/types';
import { validateTitle } from 'helpers/validators';
import { fields } from './formFields';

import './AddCardForm.scss';

type AddCardFormProps = {
  addCard: (card: CardType) => void;
};

type FormState = {
  errors: { [x: string]: string[] };
};

export default class AddCardForm extends React.Component<AddCardFormProps> {
  form: React.RefObject<HTMLFormElement> = React.createRef();
  validators = {
    title: () => validateTitle(`${fields.text.refProp.current!.value}`),
  };

  state: FormState = {
    errors: {},
  };

  getValues = (): CardType => {
    const currenStatusInput = fields.switch.refProps.find((el) => el.current?.checked);

    return {
      id: generateId(),
      status: currenStatusInput?.current?.value,
      title: fields.text.refProp.current?.value,
    };
  };

  onFormError = (errors: FormErrorsType) => {
    this.setState({ errors: { ...errors } });
  };

  onFormSuccess = () => {
    this.props.addCard(this.getValues());
    this.setState({ errors: {} });
    this.form.current?.reset();
  };

  render() {
    return (
      <Form
        refProp={this.form}
        onFormError={this.onFormError}
        onFormSuccess={this.onFormSuccess}
        validators={this.validators}
      >
        <TextInput
          id={fields.text.id}
          label={fields.text.label}
          refProp={fields.text.refProp}
          errors={this.state.errors.title}
        />
        <Switch
          id={fields.switch.id}
          labels={fields.switch.labels}
          refProps={fields.switch.refProps}
        />
        <button type={'submit'}>Submit</button>
      </Form>
    );
  }
}
