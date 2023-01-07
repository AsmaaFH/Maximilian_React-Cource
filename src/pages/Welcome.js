import { Link, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>The Welcome Page</h1>
      <Link to={'new-user'}>Go to new user</Link>

      <Outlet />
    </>
  );
};

export default Welcome;
