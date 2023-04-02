import { isDateValid, isYearValid, validateImage } from 'helpers/validators';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = 1900;

type MultipleItemType = {
  id: string;
  labels: string[];
  validationRules?: RegisterOptions;
};

type SingleItemType = {
  id: string;
  label: string;
  formats?: string;
  validationRules?: RegisterOptions;
};

type dropdownFieldsType = {
  id: string;
  label: string;
  options: string[];
  validationRules?: RegisterOptions;
};

type FieldsType = {
  authors: SingleItemType;
  checkbox: MultipleItemType;
  date: SingleItemType;
  dropdown: dropdownFieldsType;
  switch: MultipleItemType;
  title: SingleItemType;
  thumbnailUrl: SingleItemType;
};

const checkBoxCategories = ['Web Development', 'Mobile', 'Machine Learning', 'Data Science'];
const dropdownOptions = ['English', 'Russian', 'French', 'Spanish'];

export const fields: FieldsType = {
  switch: { id: 'publish-switch', labels: ['published', 'unpublished'] },
  title: {
    id: 'title',
    label: 'Book Title',
    validationRules: {
      required: 'Title is required',
      minLength: {
        value: 3,
        message: 'Title must be at least 3 characters long',
      },
      maxLength: {
        value: 20,
        message: 'Title must be at most 20 characters long',
      },
    },
  },
  authors: {
    id: 'authors',
    label: 'Authors',
    validationRules: {
      required: 'Authors is required',
      minLength: {
        value: 3,
        message: 'Authors initials must be at least 3 characters long',
      },
      maxLength: {
        value: 20,
        message: 'Authors initials must be at most 20 characters long',
      },
    },
  },
  date: {
    id: 'publishedDate',
    label: 'publish date',
    validationRules: {
      validate: {
        isDateValid: (v) => isDateValid(v) || 'Use a valid Date',
        isYearValid: (v) =>
          isYearValid(v, MIN_YEAR, MAX_YEAR) || `Use year between ${MIN_YEAR} and ${MAX_YEAR}`,
      },
    },
  },
  checkbox: {
    id: 'categories',
    labels: checkBoxCategories,
    validationRules: {
      required: 'Choose at least one category',
    },
  },
  dropdown: {
    id: 'language',
    label: 'Book language',
    options: dropdownOptions,
  },
  thumbnailUrl: {
    id: 'thumbnailUrl',
    label: 'Upload image',
    formats: '.jpg, .png',
    validationRules: {
      required: 'Add image',
      validate: {
        validateImage: (v) => validateImage(v) || 'Use a valid image',
      },
    },
  },
};
