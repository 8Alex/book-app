import { FC } from 'react';
import Button from '../../ui/Button/Button';
import { useAppDispatch } from '../../store/hooks';
import { signOut } from '../../store/bookSlice';
import './Account.scss';

const Account: FC = () => {
  const dispatch = useAppDispatch();

  const logOut = () => {
    localStorage.removeItem('auth');
    dispatch(signOut());
  };

  return (
    <div className='account'>
      <div className='account__container'>
        <div className='account__body'>
          <div className='account__title'>You have successfully logged in!</div>
          <Button children={'Log out'} onClick={logOut} />
        </div>
      </div>
    </div>
  );
};

export default Account;
