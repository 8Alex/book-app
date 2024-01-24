export interface IBook {
  id: string;
  volumeInfo: {
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    previewLink: string;
    title: string;
  };
}

export interface BooksState {
  results: IBook[];
  item: IBook | null;
  recommendedBooks: IBook[];
  topSellersBooks: IBook[];
  error: string | null;
  loading: boolean;
  totalItems: number;
  isAuth: boolean;
}

export interface Params {
  limit: number;
  index: number;
}
