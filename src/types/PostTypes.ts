export type PostT = {
  id: string;
  author: string;
  authorEmail: string;
  title: string;
  article: string;
  date: string;
  imageUrl: string;
};

export type Card = {
  author: string;
  title: string;
  article: string;
  imageUrl: string;
  key: number;
};

export type Query = {
  id: string;
};
