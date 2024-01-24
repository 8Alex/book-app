import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchRecommendedBooks,
  fetchTopSellersBooks,
} from '../../store/bookSlice';
import CentreBlock from '../../components/CentreBlock/CentreBlock';
import TopSellersBlock from '../../components/TopSellersBlock/TopSellersBlock';
import RecommendationsBlock from '../../components/RecommendationsBlock/RecommendationsBlock';
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import './MainPage.scss';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  const { loading, recommendedBooks, topSellersBooks } = useAppSelector(
    (state) => state.books
  );

  useEffect(() => {
    dispatch(fetchRecommendedBooks());
    dispatch(fetchTopSellersBooks());
  }, [dispatch]);

  return (
    <div className='main'>
      <div className='main__container'>
        <CentreBlock />
        <TopSellersBlock books={topSellersBooks} loading={loading} />
        <RecommendationsBlock books={recommendedBooks} loading={loading} />
        <NewsBlock />
      </div>
    </div>
  );
};

export default MainPage;
