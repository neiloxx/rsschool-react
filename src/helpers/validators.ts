const isRequired = (value: string | undefined): boolean => {
  return !!value;
};

const isMinLength = (value: number, minLength: number): boolean => {
  return value >= minLength;
};

const isMaxLength = (value: number, minLength: number): boolean => {
  return value <= minLength;
};

export const validateTitle = (v: string) => {
  const rules = [
    isRequired(v) || 'Title is required',
    isMinLength(v.length, 3) || `Title must be at least 3 characters long`,
    isMaxLength(v.length, 20) || `Title must be at most 20 characters long`,
  ];
  return rules.filter((rule) => typeof rule === 'string');
};
