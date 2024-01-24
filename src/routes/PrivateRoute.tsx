import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
  const { isAuth } = useAppSelector((state) => state.books);

  return isAuth ? element : <Navigate to='/login' />;
};

export default PrivateRoute;
