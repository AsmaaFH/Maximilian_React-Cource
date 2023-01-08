import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h3>An Error Occured!</h3>
        <h5>{error.message}</h5>
        <div>
          status: <h4>{error.status}</h4>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
