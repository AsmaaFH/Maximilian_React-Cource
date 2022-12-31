import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enterdNameTouched, setEnterdNameTouched] = useState(false);

  const [enteredAddress, setEnteredAddress] = useState('');
  const [enterdAddressTouched, setEnterdAddressTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvlaid = !enteredNameIsValid && enterdNameTouched;

  const enteredAddressIsValid = enteredAddress.trim() !== '';
  const addressInputIsInvlaid = !enteredAddressIsValid && enterdAddressTouched;

  const formIsValid = enteredNameIsValid && enteredAddressIsValid;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnterdNameTouched(true);
  };

  const addressInputChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAddress(event.target.value);
  };

  const addressInputBlurHandler = () => {
    setEnterdAddressTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
  };

  const nameInputClasses = nameInputIsInvlaid ? 'form-control invalid' : 'form-control';
  const addressInputClasses = addressInputIsInvlaid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvlaid && <p className="error-text">Name must not be empty!</p>}

      <div className={addressInputClasses}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          onChange={addressInputChangeHandler}
          onBlur={addressInputBlurHandler}
        />
      </div>
      {addressInputIsInvlaid && <p className="error-text">Address must not be empty!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
