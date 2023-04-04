export const isYearValid = (value: string, minYear: number, maxYear: number): boolean => {
  const year = new Date(value).getFullYear();
  return year >= minYear && year <= maxYear;
};

export const isDateValid = (value: string): boolean => !Number.isNaN(new Date(value));

export const validateImage = (v: FileList | undefined | null) => {
  const file = v && v[0];
  return file && file.type.includes('image');
};
