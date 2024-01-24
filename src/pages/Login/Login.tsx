import { FC, FormEvent, useState } from 'react';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { useAppDispatch } from '../../store/hooks';
import { signIn } from '../../store/bookSlice';
import './Login.scss';

const Login: FC = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem('auth', 'true');
    dispatch(signIn());
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__body'>
          <form className='login__form' onSubmit={submit}>
            <Input
              type='text'
              placeholder='Login'
              value={login}
              onChange={changeLogin}
            />
            <Input
              type='password'
              placeholder='Password'
              value={password}
              onChange={changePassword}
            />
            <Button children={'Log in'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
