import { useContext, useRef, useState } from 'react';
import AuthContext from '../../store/auth-context';
import { API_KEY } from '../../API_KEY';

import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (!isLoggedIn) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const switchAuthModeHandler = (event) => {
    event.preventDefault();

    console.log(emailInputRef.current.value);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLoggedIn ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{!isLoggedIn ? 'Login' : 'Create Account'}</button>
          <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
            {!isLoggedIn ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
