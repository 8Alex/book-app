import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErorPage/ErrorPage';
import MainPage from '../pages/MainPage/MainPage';
import BookListPage from '../pages/BookListPage/BookListPage';
import BookPage from '../pages/BookPage/BookPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../pages/Login/Login';
import Account from '../pages/Account/Account';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: 'books',
            element: <BookListPage />,
          },
          {
            path: 'books/:id',
            element: <BookPage />,
          },
          {
            path: 'login',
            element:  <PublicRoute element={<Login />} />,
          },
          {
            path: 'account',
            element: <PrivateRoute element={<Account />} />,
          },
        ],
      },
    ],
  },
]);
