import { useEffect ,useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid=true;
  }

  const emailChangeHandler=(event) => {
    setEnteredEmail(event.target.value);
  }

  const emailBlurHandler=(event)=>{
    setEnteredEmailTouched(true);
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid === false){
      return;
    }

    console.log(enteredName);
    // nameInputRef.current.value = ''; SHOULDN'T USE THIS APPROACH
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    
  };

    const nameInputBlurHandler = event =>{
      setEnteredNameTouched(true);
    };



  const nameInputClass = nameInputIsInvalid ? "form-control invalid" : "form-control";
  const emailInputClass = emailInputIsInvalid ? "form-control invalid" : "form-control";


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
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
      {emailInputIsInvalid && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
