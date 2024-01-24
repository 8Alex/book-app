import { FC } from 'react';
import BookList from '../BookList/BookList';
import { IBook } from '../../store/types';
import Loader from '../../ui/Loader/Loader';
import './RecommendationsBlock.scss';

interface RecommendationsBlockProps {
  books: IBook[];
  loading: boolean;
}

const RecommendationsBlock: FC<RecommendationsBlockProps> = ({
  books,
  loading,
}) => {
  return (
    <div className='main__recommended recommended'>
      <div className='recommended__header header-block'>
        Recommended for you
      </div>
      {loading && (
        <div className='recommended__loader loader-block'>
          <Loader />
        </div>
      )}
      <BookList books={books} />
    </div>
  );
};

export default RecommendationsBlock;
