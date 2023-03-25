export type CardType = {
  authors?: string[];
  categories: string[];
  id: string;
  language: string;
  publishedDate?: string;
  shortDescription?: string;
  status: string;
  thumbnailUrl?: string;
  title: string;
};

export type FormErrorsType = { [x: string]: string[] };
