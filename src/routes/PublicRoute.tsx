import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

interface PublicRouteProps {
  element: JSX.Element;
}

const PublicRoute: FC<PublicRouteProps> = ({ element }) => {
  const { isAuth } = useAppSelector((state) => state.books);

  return !isAuth ? element : <Navigate to='/account' />;
};

export default PublicRoute;
