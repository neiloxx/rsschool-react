export type CardType = {
  authors: string;
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

export type FormCardType = {
  authors: string;
  categories: string[];
  id: string;
  language: string;
  publishedDate?: string;
  shortDescription?: string;
  status: string;
  thumbnailUrl: FileList;
  title: string;
};

export type CharacterCardType = {
  id?: string;
  name?: string;
  status?: string;
  species?: string;
  image?: string;
  episode?: string[];
  gender?: string;
  location?: { name: string };
};
