export type CardType = {
  authors?: string[];
  categories: string[];
  id: string;
  pageCount?: number;
  publishedDate?: string;
  shortDescription?: string;
  status?: string;
  thumbnailUrl?: string;
  title?: string;
};

export type FormErrorsType = { [x: string]: string[] };
