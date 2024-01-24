import { FC } from 'react';
import { Link } from 'react-router-dom';
import { account, favorite } from '../../assets/icons';
import { Book } from 'tabler-icons-react';
import './Nav.scss';

const Nav: FC = () => {
  return (
    <div className='menu__body'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link to='login' className='menu__link'>
            <img src={account} alt='account' className='menu__link_account' />
          </Link>
        </li>
        <li className='menu__item'>
          <Link to='favorite' className='menu__link'>
            <img
              src={favorite}
              alt='favorite'
              className='menu__link_favorite'
            />
          </Link>
        </li>
        <li className='menu__item'>
          <Link to='books' className='menu__link'>
            <Book size={30} strokeWidth={1} color={'#0d0842'} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
