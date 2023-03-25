import React from 'react';
import generateId from 'utils/generateId';

import Form from 'components/Form/Form';
import Switch from 'components/ui/inputs/Switch';
import TextInput from 'components/ui/inputs/TextInput';
import CheckboxField from 'components/ui/inputs/CheckboxField';
import DateInput from 'components/ui/inputs/DateInput';

import { CardType, FormErrorsType } from 'types/types';
import { validateCategories, validatePublishDate, validateTitle } from 'helpers/validators';
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
    date: () =>
      validatePublishDate(
        `${fields.date.refProp.current!.value}`,
        this.getCheckedValue(fields.switch.refProps).join('')
      ),
    categories: () => validateCategories(this.getCheckedValue(fields.checkbox.refProps)),
  };

  state: FormState = {
    errors: {},
  };

  getCheckedValue = (refProps: React.RefObject<HTMLInputElement>[]): string[] => {
    const checkedRefs = refProps.filter((el) => el.current?.checked);
    return checkedRefs.map((el) => el.current!.value);
  };

  getValues = (): CardType => {
    return {
      id: generateId(),
      status: this.getCheckedValue(fields.switch.refProps).join(''),
      title: fields.text.refProp.current?.value,
      publishedDate: fields.date.refProp.current?.value,
      categories: this.getCheckedValue(fields.checkbox.refProps),
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
        <DateInput
          id={fields.date.id}
          label={fields.date.label}
          refProp={fields.date.refProp}
          errors={this.state.errors.date}
        />
        <CheckboxField
          id={fields.checkbox.id}
          labels={fields.checkbox.labels}
          refProps={fields.checkbox.refProps}
          errors={this.state.errors.categories}
        />
        <button type={'submit'}>Submit</button>
      </Form>
    );
  }
}
