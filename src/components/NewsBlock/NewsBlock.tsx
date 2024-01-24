import { FC } from 'react';
import news_one from '../../assets/images/Photo news one.jpg';
import news_two from '../../assets/images/Photo news two.jpg';
import './NewsBlock.scss';

const NewsBlock: FC = () => {
  return (
    <div className='main__news news'>
      <div className='news__container'>
        <div className='news__header header-block'>News</div>
        <div className='news__body'>
          <div className='news__column'>
            <div className='news__item'>
              <div className='news__content'>
                <div className='news__title'>
                  The Books You Need to Read in 2023
                </div>
                <div className='news__line'></div>
                <div className='news__text'>
                  His is the blog we know you've all been waiting for. We
                  present the top 10 titles for 2023 in fiction, non-fiction and
                  children's books; a glorious mix of masterful storytelling,
                  compelling subject matter and page-turning thrills...
                </div>
              </div>
              <div className='news__image'>
                <img src={news_one} alt='news' />
              </div>
            </div>
          </div>
          <div className='news__column'>
            <div className='news__item'>
              <div className='news__content'>
                <div className='news__title'>
                  February's Best Children's Books
                </div>
                <div className='news__line'></div>
                <div className='news__text'>
                  Some of the finest children's authors currently writing have
                  books publishing this month, from Natasha Farrant to Elle
                  McNicoll and from Tahereh Mafi to Harriet Muncaster. Across
                  all areas and age ranges there are plenty of fantastic
                  titles...
                </div>
              </div>
              <div className='news__image'>
                <img src={news_two} alt='news' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
