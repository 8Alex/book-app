import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooksById } from '../../store/bookSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Loader from '../../ui/Loader/Loader';
import './BookPage.scss';
import { ExternalLink } from 'tabler-icons-react';

const BookPage: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { item, loading } = useAppSelector((state) => state.books);

  console.log(item);

  useEffect(() => {
    if (params.id) dispatch(fetchBooksById(params.id));
  }, [dispatch, params.id]);

  return (
    <div className='book'>
      <div className='book__container'>
        <div className='book__body'>
          {loading && (
            <div className='book__loader loader-block'>
              <Loader />
            </div>
          )}
          <div className='book__item'>
            <div className='book__image'>
              <img src={item?.volumeInfo.imageLinks.thumbnail} />
              <div className='book__link'>
                <a href={item?.volumeInfo.previewLink}>
                  <ExternalLink size={25} strokeWidth={2} color={'#0d0842'} />
                  More info
                </a>
              </div>
            </div>
            <div className='book__content'>
              <div className='book__title'>{item?.volumeInfo.title}</div>
              <div className='book__author'>{item?.volumeInfo.authors}</div>
              <div className='book__description'>
                {item?.volumeInfo.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
