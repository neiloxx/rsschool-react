const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = 1900;

const isRequired = (value: string | undefined): boolean => {
  return !!value;
};

const isMinLength = (value: number, minLength: number): boolean => {
  return value >= minLength;
};

const isMaxLength = (value: number, minLength: number): boolean => {
  return value <= minLength;
};

const isYearValid = (value: string): boolean => {
  const year = new Date(value).getFullYear();
  return year >= MIN_YEAR && year <= MAX_YEAR;
};

const isPublished = (value: string): boolean => value === 'published';

const isDateValid = (value: string): boolean => !Number.isNaN(new Date(value));

const checkRules = (rules: (string | boolean)[]) =>
  rules.filter((rule) => typeof rule === 'string') as string[];

export const validateTitle = (v: string): string[] => {
  const rules = [
    isRequired(v) || 'Title is required',
    isMinLength(v.length, 3) || `Title must be at least 3 characters long`,
    isMaxLength(v.length, 20) || `Title must be at most 20 characters long`,
  ];
  return checkRules(rules);
};

export const validatePublishDate = (v: string, status: string): string[] => {
  const rules: (string | boolean)[] = isPublished(status)
    ? [
        isDateValid(v) || 'Use a valid Date',
        isYearValid(v) || `Use year between ${MIN_YEAR} and ${MAX_YEAR}`,
      ]
    : [!isPublished(status) && !!v && 'The book should be published to have a date'];
  return checkRules(rules);
};

export const validateCategories = (v: string[]) => {
  const rules = [!!v.length || 'Choose at least one category'];
  return checkRules(rules);
};
