import React from 'react';
import { Link, Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link to={'/welcome/user'}>user</Link>

      <Route path={'/welcome/user'}>
        <p>User Inside Welcome</p>
      </Route>
    </>
  );
};

export default Welcome;
