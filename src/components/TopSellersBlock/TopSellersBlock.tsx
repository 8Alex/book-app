import { FC, useState } from 'react';
import { IBook } from '../../store/types';
import BookList from '../BookList/BookList';
import Loader from '../../ui/Loader/Loader';
import BookFilter from '../BookFilter/BookFilter';
import { useBooks } from '../../hooks/useBooks';
import './TopSellersBlock.scss';

interface TopSellersBlockProps {
  books: IBook[];
  loading: boolean;
}

const TopSellersBlock: FC<TopSellersBlockProps> = ({ books, loading }) => {
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedAndSearchedBooks = useBooks(books, filter.sort, filter.query);

  return (
    <div className='main__top-sellers top-sellers'>
      <div className='top-sellers__header header-block'>Top Sellers</div>
      {loading && (
        <div className='top-sellers__loader loader-block'>
          <Loader />
        </div>
      )}
      <BookFilter filter={filter} setFilter={setFilter} />
      <BookList books={sortedAndSearchedBooks} />
    </div>
  );
};

export default TopSellersBlock;
