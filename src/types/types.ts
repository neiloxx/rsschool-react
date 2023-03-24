export type CardType = {
  id: string;
  title?: string;
  status?: string;
  thumbnailUrl?: string;
  authors?: string[];
  shortDescription?: string;
  pageCount?: number;
};

export type FormErrorsType = { [x: string]: string[] };
