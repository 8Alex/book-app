import { FC } from 'react';
import BookItem from '../BookItem/BookItem';
import { IBook } from '../../store/types';
import book_cover from '../../assets/images/Book_cover.jpg';
import './BookList.scss';

interface BookListProps {
  books: IBook[];
}

const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <div className='card-block'>
      <div className='card-block__container'>
        <div className='card-block__body'>
          {books.length ? (
            books.map((book) => (
              <BookItem
                key={book.id}
                authors={book.volumeInfo.authors}
                categories={book.volumeInfo.categories}
                description={book.volumeInfo.description}
                thumbnail={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : book_cover
                }
                title={book.volumeInfo.title}
                id={book.id}
              />
            ))
          ) : (
            <div className='error'>Something went wrong.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookList;
