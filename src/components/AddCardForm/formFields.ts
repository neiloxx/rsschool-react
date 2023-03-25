import React from 'react';

type MultipleItemType = {
  id: string;
  labels: string[];
  refProps: React.RefObject<HTMLInputElement>[];
};

type SingleItemType = {
  id: string;
  label: string;
  refProp: React.RefObject<HTMLInputElement>;
};

type FieldsType = {
  switch: MultipleItemType;
  text: SingleItemType;
  date: SingleItemType;
  checkbox: MultipleItemType;
};

const checkBoxCategories = ['Web Development', 'Mobile', 'Machine Learning', 'Data Science'];

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
};

function setMultipleRefs(field: MultipleItemType): void {
  field.labels.forEach(() => field.refProps.push(React.createRef<HTMLInputElement>()));
}

setMultipleRefs(fields.switch);
setMultipleRefs(fields.checkbox);
