import React from 'react';

type SwitchType = {
  id: string;
  labels: string[];
  refProps: React.RefObject<HTMLInputElement>[];
};

type TextInputType = {
  id: string;
  label: string;
  refProp: React.RefObject<HTMLInputElement>;
};

type FieldsType = {
  switch: SwitchType;
  text: TextInputType;
};

export const fields: FieldsType = {
  switch: { id: 'publish-switch', labels: ['published', 'unpublished'], refProps: [] },
  text: {
    id: 'title',
    label: 'Book Title',
    refProp: React.createRef<HTMLInputElement>(),
  },
};

const setSwitchRefs = (): void =>
  fields.switch.labels.forEach(() =>
    fields.switch.refProps.push(React.createRef<HTMLInputElement>())
  );

setSwitchRefs();
