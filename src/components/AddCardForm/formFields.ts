import React from 'react';

type MultipleItemType = {
  id: string;
  labels: string[];
  refProps: React.RefObject<HTMLInputElement>[];
};

type SingleItemType = {
  id: string;
  label: string;
  formats?: string;
  refProp: React.RefObject<HTMLInputElement>;
};

type dropdownFieldsType = {
  id: string;
  label: string;
  options: string[];
  refProp: React.RefObject<HTMLSelectElement>;
};

type FieldsType = {
  checkbox: MultipleItemType;
  date: SingleItemType;
  dropdown: dropdownFieldsType;
  switch: MultipleItemType;
  text: SingleItemType;
  thumbnailUrl: SingleItemType;
};

const checkBoxCategories = ['Web Development', 'Mobile', 'Machine Learning', 'Data Science'];
const dropdownOptions = ['English', 'Russian', 'French', 'Spanish'];

export const fields: FieldsType = {
  switch: { id: 'publish-switch', labels: ['published', 'unpublished'], refProps: [] },
  text: {
    id: 'title',
    label: 'Book Title',
    refProp: React.createRef<HTMLInputElement>(),
  },
  date: {
    id: 'publish-date',
    label: 'publish date',
    refProp: React.createRef<HTMLInputElement>(),
  },
  checkbox: {
    id: 'categories',
    labels: checkBoxCategories,
    refProps: [],
  },
  dropdown: {
    id: 'language',
    label: 'Book language',
    options: dropdownOptions,
    refProp: React.createRef<HTMLSelectElement>(),
  },
  thumbnailUrl: {
    id: 'card-image',
    label: 'Upload image',
    formats: '.jpg, .png',
    refProp: React.createRef<HTMLInputElement>(),
  },
};

function setMultipleRefs(field: MultipleItemType): void {
  field.labels.forEach(() => field.refProps.push(React.createRef<HTMLInputElement>()));
}

setMultipleRefs(fields.switch);
setMultipleRefs(fields.checkbox);
