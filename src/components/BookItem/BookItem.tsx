import { FC } from 'react';
import { Link } from 'react-router-dom';
import './BookItem.scss';

interface BookItemProps {
  authors: string[];
  categories: string[];
  description: string;
  thumbnail: string;
  title: string;
  id: string;
}

const BookItem: FC<BookItemProps> = ({ authors, thumbnail, title, id }) => {
  return (
    <div className='card__column'>
      <div className='card__item'>
        <Link to={`/books/${id}`} className='card__image'>
          <img src={thumbnail} alt='cover' />
        </Link>
        <div className='card__content'>
          <Link to={`/books/${id}`} className='card__link'>
            {title}
          </Link>
          <div className='card__text'>{authors}</div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
