import { FC } from 'react';
import logo from '../../assets/images/Logo.png';
import Nav from '../../ui/Nav/Nav';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: FC = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__body'>
          <Link to='/' className='header__logo'>
            <img src={logo} alt='logo' />
          </Link>
          <div className='header__menu menu'>
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
