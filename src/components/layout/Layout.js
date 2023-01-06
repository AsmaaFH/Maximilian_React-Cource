import React from 'react';
import Footer from './Footer';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <div className={classes.main}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
