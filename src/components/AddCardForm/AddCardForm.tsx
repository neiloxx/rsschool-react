import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import generateId from 'utils/generateId';

import Popup from 'components/Popup/Popup';
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
import { CardType, FormCardType } from 'types/types';

import { fields } from './formFields';

import './AddCardForm.scss';

type AddCardFormProps = {
  addCard: (card: CardType) => void;
};

export default function AddCardForm({ addCard }: AddCardFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormCardType>();

  const [isPopupOpened, setPopupOpened] = useState<boolean>(false);
  const status = watch('status');

  const onSubmit = ({
    authors,
    title,
    thumbnailUrl,
    publishedDate,
    categories,
    status,
    language,
  }: FormCardType) => {
    const file = thumbnailUrl ? thumbnailUrl[0] : undefined;
    const imageURL = file ? URL.createObjectURL(file) : undefined;
    addCard({
      id: generateId(),
      authors,
      title,
      publishedDate,
      categories,
      status,
      language,
      thumbnailUrl: imageURL,
    });
    setPopupOpened(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          id={fields.title.id}
          label={fields.title.label}
          errors={errors.title?.message}
          register={() => register('title', fields.title.validationRules)}
        />
        <TextInput
          id={fields.authors.id}
          label={fields.authors.label}
          errors={errors.authors?.message}
          register={() => register('authors', fields.authors.validationRules)}
        />
        <Switch
          id={fields.switch.id}
          labels={fields.switch.labels}
          register={() => register('status')}
        />
        <DateInput
          id={fields.date.id}
          label={fields.date.label}
          errors={status === 'published' ? errors.publishedDate?.message : undefined}
          register={() =>
            register('publishedDate', {
              disabled: status === 'unpublished',
              ...fields.date.validationRules,
            })
          }
        />
        <CheckboxField
          id={fields.checkbox.id}
          labels={fields.checkbox.labels}
          errors={errors.categories?.message}
          register={() => register('categories', fields.checkbox.validationRules)}
        />
        <Dropdown
          id={fields.dropdown.id}
          label={fields.dropdown.label}
          options={fields.dropdown.options}
          register={() => register('language', { required: true })}
        />
        <FileInput
          id={fields.thumbnailUrl.id}
          label={fields.thumbnailUrl.label}
          formats={fields.thumbnailUrl.formats}
          errors={errors.thumbnailUrl?.message}
          register={() => register('thumbnailUrl', fields.thumbnailUrl.validationRules)}
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
              reset();
            }}
          />
        </Popup>
      )}
    </>
  );
}
