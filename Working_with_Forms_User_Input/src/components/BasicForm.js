import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
    isValid: nameIsValid
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
    isValid: lastNameIsValid
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    isValid: emailIsValid
  } = useInput(value => value.includes("@"));


 

  let formIsValid = false;

  if(nameIsValid && lastNameIsValid && emailIsValid){
    formIsValid = true;
  }

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const lastNameClasses = lastNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const formSubmitHandler= (event) =>{
    event.preventDefault();

    if(!formIsValid){
      return;
    }
    console.log(enteredName,enteredLastName,enteredEmail);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
          {nameHasError && <p className="error-text">Name must not be empty.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName}/>
          {lastNameHasError && <p className="error-text">Last name must not be empty.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
        {emailHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
