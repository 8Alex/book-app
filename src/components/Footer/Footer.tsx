import { FC, useState } from 'react';
import logo from '../../assets/images/Logo.png';
import { instagram, google, facebook } from '../../assets/icons';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import './Footer.scss';

const Footer: FC = () => {
  const [email, setEmail] = useState('');

  const links = [
    {
      text: 'About',
      page: '',
    },
    {
      text: 'Features',
      page: '',
    },
    {
      text: 'Pricing',
      page: '',
    },
    {
      text: 'Gallery',
      page: '',
    },
    {
      text: 'Team',
      page: '',
    },
    {
      text: 'Privacy Policy',
      page: '',
    },
    {
      text: 'Terms of Use',
      page: '',
    },
    {
      text: 'Sales and Refunds',
      page: '',
    },
    {
      text: 'Legal',
      page: '',
    },
  ];

  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__body'>
          <div>
            <div className='footer__logo'>
              <img src={logo} alt='logo' />
            </div>
            <div>
              <ul className='footer__list list'>
                {links.map((link, index) => (
                  <li key={index} className='list__item'>
                    <a href='#' className='list__link'>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className='footer__subscribe-block subscribe-block'>
              <div className='subscribe-block__text'>
                Subscribe to stay tuned for new product and latest updates.
                {'\n'}
                Let’s do it!
              </div>
              <div className='subscribe-block__subscription'>
                <div className='subscribe-block__input'>
                  <Input
                    type='text'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  children={'Subscribe'}
                  className={'subscribe-block__btn'}
                />
              </div>
            </div>
            <div className='footer__icons'>
              <img src={instagram} alt='instagram' />
              <img src={google} alt='google' />
              <img src={facebook} alt='facebook' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
