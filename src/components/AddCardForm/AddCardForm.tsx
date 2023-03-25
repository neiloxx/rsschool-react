import Popup from 'components/Popup/Popup';
import Dropdown from 'components/ui/dropdown/Dropdown';
import FileInput from 'components/ui/inputs/FileInput';
import React from 'react';
import generateId from 'utils/generateId';

import Form from 'components/Form/Form';
import Switch from 'components/ui/inputs/Switch';
import TextInput from 'components/ui/inputs/TextInput';
import CheckboxField from 'components/ui/inputs/CheckboxField';
import DateInput from 'components/ui/inputs/DateInput';

import { CardType, FormErrorsType } from 'types/types';
import {
  validateAuthors,
  validateCategories,
  validateImage,
  validatePublishDate,
  validateTitle,
} from 'helpers/validators';
import { fields } from './formFields';

import './AddCardForm.scss';

type AddCardFormProps = {
  addCard: (card: CardType) => void;
};

type FormState = {
  errors: { [x: string]: string[] };
  isPopupOpened: boolean;
};

export default class AddCardForm extends React.Component<AddCardFormProps> {
  form: React.RefObject<HTMLFormElement> = React.createRef();
  validators = {
    authors: () => validateAuthors(fields.authors.refProp.current!.value),
    title: () => validateTitle(fields.title.refProp.current!.value),
    date: () =>
      validatePublishDate(
        `${fields.date.refProp.current!.value}`,
        this.getCheckedValue(fields.switch.refProps).join('')
      ),
    categories: () => validateCategories(this.getCheckedValue(fields.checkbox.refProps)),
    thumbnailUrl: () => validateImage(fields.thumbnailUrl.refProp.current?.files),
  };

  state: FormState = {
    errors: {},
    isPopupOpened: false,
  };

  getCheckedValue = (refProps: React.RefObject<HTMLInputElement>[]): string[] => {
    const checkedRefs = refProps.filter((el) => el.current?.checked);
    return checkedRefs.map((el) => el.current!.value);
  };

  getImageUrl = () => {
    const files = fields.thumbnailUrl.refProp.current?.files;
    const file = files && files[0];
    return file ? URL.createObjectURL(file) : undefined;
  };

  getValues = (): CardType => {
    return {
      authors: fields.authors.refProp.current!.value,
      categories: this.getCheckedValue(fields.checkbox.refProps),
      id: generateId(),
      language: fields.dropdown.refProp.current!.value,
      publishedDate: fields.date.refProp.current?.value,
      status: this.getCheckedValue(fields.switch.refProps).join(''),
      thumbnailUrl: this.getImageUrl(),
      title: fields.title.refProp.current!.value,
    };
  };

  onFormError = (errors: FormErrorsType) => {
    this.setState({ errors: { ...errors } });
  };

  onFormSuccess = () => {
    this.props.addCard(this.getValues());
    this.setState({ errors: {} });
    this.setState({ isPopupOpened: true });
  };

  render() {
    return (
      <>
        <Form
          refProp={this.form}
          onFormError={this.onFormError}
          onFormSuccess={this.onFormSuccess}
          validators={this.validators}
        >
          <TextInput
            id={fields.title.id}
            label={fields.title.label}
            refProp={fields.title.refProp}
            errors={this.state.errors.title}
          />
          <TextInput
            id={fields.authors.id}
            label={fields.authors.label}
            refProp={fields.authors.refProp}
            errors={this.state.errors.authors}
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
          <Dropdown
            id={fields.dropdown.id}
            label={fields.dropdown.label}
            options={fields.dropdown.options}
            refProp={fields.dropdown.refProp}
          />
          <FileInput
            id={fields.thumbnailUrl.id}
            label={fields.thumbnailUrl.label}
            formats={fields.thumbnailUrl.formats}
            refProp={fields.thumbnailUrl.refProp}
            errors={this.state.errors.thumbnailUrl}
          />
          <button type={'submit'}>Submit</button>
        </Form>
        {this.state.isPopupOpened && (
          <Popup>
            <p>Your data has been saved!</p>
            <button
              onClick={() => {
                this.setState({ isPopupOpened: false });
                this.form.current?.reset();
              }}
            >
              Ok
            </button>
          </Popup>
        )}
      </>
    );
  }
}
