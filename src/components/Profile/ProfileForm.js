import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import { API_KEY } from '../../API_KEY';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    let passwordValue = newPasswordInputRef.current.value;

    // value validation

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: passwordValue,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json().then((data) => console.log(data)));
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPasswordInputRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button onClick={submitHandler}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
