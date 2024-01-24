import { FC } from 'react';
import { getPagesArray } from '../../utils/pages';
import './Pagination.scss';

interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className='pagination'>
      {pagesArray.map((p) => (
        <span
          className={p === page ? 'page page__current' : 'page'}
          key={p}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
