import { FC } from 'react';
import Button from '../../ui/Button/Button';
import covers from '../../assets/images/Covers.jpg';
import './CentreBlock.scss';

const CentreBlock: FC = () => {
  return (
    <div className='main__centre-block centre-block'>
      <div className='centre-block__container'>
        <div className='centre-block__body'>
          <h1 className='centre-block__title'>New Releases This Week</h1>
          <div className='centre-block__text'>
            It's time to update your reading list with some of the latest and
            greatest releases in the literary world. From heart-pumping
            thrillers to captivating memoirs, this week's new releases offer
            something for everyone
          </div>
          <Button children={'Subscribe'} />
        </div>
        <div className='centre-block__image'>
          <img src={covers} alt='cover' />
        </div>
      </div>
    </div>
  );
};

export default CentreBlock;
