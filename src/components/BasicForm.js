import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameValueChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    valueIsValid: firstNameIsValid,
    reset: firstNameReset,
  } = useInput((value) => value.trim().length >= 2);
  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    valueIsValid: lastNameIsValid,
    reset: lastNameReset,
  } = useInput((value) => value.trim().length >= 2);
  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    valueIsValid: emailIsValid,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const fNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="fName">First Name</label>
          <input
            value={enteredFirstName}
            onChange={firstNameValueChangeHandler}
            onBlur={firstNameInputBlurHandler}
            type="text"
            id="fName"
          />
          {firstNameHasError && <p className="error-text">Invalid value!</p>}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="lName">Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameInputBlurHandler}
            type="text"
            id="lName"
          />
          {lastNameHasError && <p className="error-text">Invalid value!</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailValueChangeHandler}
          onBlur={emailInputBlurHandler}
          type="text"
          id="email"
        />
        {emailHasError && <p className="error-text">Invalid Email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
