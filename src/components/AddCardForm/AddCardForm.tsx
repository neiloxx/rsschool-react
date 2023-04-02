import React, { useState } from 'react';
import Popup from 'components/Popup/Popup';
import generateId from 'utils/generateId';

import Form from 'components/Form/Form';
import {
  Switch,
  CheckboxField,
  TextInput,
  DateInput,
  FileInput,
  Dropdown,
  Button,
} from 'components/ui/index';

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

export default function AddCardForm({ addCard }: AddCardFormProps) {
  const [errors, setErrors] = useState<{ [x: string]: string[] }>({});
  const [isPopupOpened, setPopupOpened] = useState<boolean>(false);

  const form: React.RefObject<HTMLFormElement> = React.createRef();
  const validators = {
    authors: () => validateAuthors(fields.authors.refProp.current!.value),
    title: () => validateTitle(fields.title.refProp.current!.value),
    date: () =>
      validatePublishDate(
        `${fields.date.refProp.current!.value}`,
        getCheckedValue(fields.switch.refProps).join('')
      ),
    categories: () => validateCategories(getCheckedValue(fields.checkbox.refProps)),
    thumbnailUrl: () => validateImage(fields.thumbnailUrl.refProp.current?.files),
  };

  const getCheckedValue = (refProps: React.RefObject<HTMLInputElement>[]): string[] => {
    const checkedRefs = refProps.filter((el) => el.current?.checked);
    return checkedRefs.map((el) => el.current!.value);
  };

  const getImageUrl = () => {
    const files = fields.thumbnailUrl.refProp.current?.files;
    const file = files && files[0];
    return file ? URL.createObjectURL(file) : undefined;
  };

  const getValues = (): CardType => {
    return {
      authors: fields.authors.refProp.current!.value,
      categories: getCheckedValue(fields.checkbox.refProps),
      id: generateId(),
      language: fields.dropdown.refProp.current!.value,
      publishedDate: fields.date.refProp.current?.value,
      status: getCheckedValue(fields.switch.refProps).join(''),
      thumbnailUrl: getImageUrl(),
      title: fields.title.refProp.current!.value,
    };
  };

  const onFormError = (errors: FormErrorsType) => {
    setErrors({ ...errors });
  };

  const onFormSuccess = () => {
    addCard(getValues());
    setErrors({});
    setPopupOpened(true);
  };

  return (
    <>
      <Form
        refProp={form}
        onFormError={onFormError}
        onFormSuccess={onFormSuccess}
        validators={validators}
      >
        <TextInput
          id={fields.title.id}
          label={fields.title.label}
          refProp={fields.title.refProp}
          errors={errors.title}
        />
        <TextInput
          id={fields.authors.id}
          label={fields.authors.label}
          refProp={fields.authors.refProp}
          errors={errors.authors}
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
          errors={errors.date}
        />
        <CheckboxField
          id={fields.checkbox.id}
          labels={fields.checkbox.labels}
          refProps={fields.checkbox.refProps}
          errors={errors.categories}
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
          errors={errors.thumbnailUrl}
        />
        <Button type="submit" innerText="Add card" />
      </Form>
      {isPopupOpened && (
        <Popup>
          <p>Your data has been saved!</p>
          <Button
            type="button"
            innerText="good"
            onClick={() => {
              setPopupOpened(false);
              form.current?.reset();
            }}
          />
        </Popup>
      )}
    </>
  );
}
