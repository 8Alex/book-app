import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';
import { signIn } from './store/bookSlice';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(signIn());
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
