import { FC } from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage: FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className='error-block'>
        <div className='error-block__container_navigation'>
          <h1>Oops!</h1>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
          {error.data?.message && <p>{error.data.message}</p>}
        </div>
      </div>
    );
  } else {
    return (
      <div className='error-block'>
        <div className='error-block__container'>
          <div className='error-block__body'>Something went wrong</div>
        </div>
      </div>
    );
  }
};

export default ErrorPage;
