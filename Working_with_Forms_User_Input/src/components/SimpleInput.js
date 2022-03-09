import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    reset: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    
  } = useInput(value => value.trim() !=="");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };


  const formSubmissionHandler = (event) => {
    event.preventDefault();



    if (!enteredNameIsValid === false) {
      return;
    }

    console.log(enteredName);
    // nameInputRef.current.value = ''; SHOULDN'T USE THIS APPROACH
    resetNameInput();
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };


  const nameInputClass = nameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
