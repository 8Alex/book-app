import { useMemo } from 'react';
import { IBook } from '../store/types';

export const useSortedBooks = (books: IBook[], sort: string) => {
  const sortedBooks = useMemo(() => {
    if (sort) {
      if (sort === 'title') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return [...books].sort((a: any, b: any) =>
          a.volumeInfo[sort].localeCompare(b.volumeInfo[sort])
        );
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return [...books].sort((a: any, b: any) =>
          a.volumeInfo[sort].join().localeCompare(b.volumeInfo[sort].join())
        );
      }
    }
    return books;
  }, [sort, books]);

  return sortedBooks;
};

export const useBooks = (books: IBook[], sort: string, query: string) => {
  const sortedBooks = useSortedBooks(books, sort);

  const sortedAndSearchedBooks = useMemo(() => {
    return sortedBooks.filter((book) =>
      book.volumeInfo.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedBooks]);

  return sortedAndSearchedBooks;
};
