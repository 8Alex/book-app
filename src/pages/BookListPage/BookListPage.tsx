import { FC, useEffect, useState } from 'react';
import Loader from '../../ui/Loader/Loader';
import BookList from '../../components/BookList/BookList';
import Pagination from '../../ui/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchBooks } from '../../store/bookSlice';
import { getPageCount } from '../../utils/pages';
import './BookListPage.scss';

const BookListPage: FC = () => {
  const dispatch = useAppDispatch();

  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(24);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);

  const { loading, results } = useAppSelector((state) => state.books);

  const changePage = (page: number) => {
    setIndex(limit * (page - 1));
    setPage(page);
  };

  // const lastElement = useRef() as MutableRefObject<HTMLInputElement>;

  // useObserver(lastElement, page < totalPages, loading, () => {
  //   setPage(page + 1);
  // });

  useEffect(() => {
    dispatch(fetchBooks({ limit, index }));
  }, [dispatch, limit, index]);

  useEffect(() => {
    setTotalPages(getPageCount(100, limit));
  }, [limit]);

  return (
    <div className='bookList'>
      <div className='bookList__container'>
        <div className='bookList__body'>
          {loading && (
            <div className='bookList__loader loader-block'>
              <Loader />
            </div>
          )}
          <BookList books={results} />
          {/* <div ref={lastElement} style={{ height: 20, background: 'red' }} /> */}
          <div className='bookList__pagination'>
            <Pagination
              totalPages={totalPages}
              page={page}
              changePage={changePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListPage;
