import { useEffect ,useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if(enteredNameIsValid){
    formIsValid=true;
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
    setEnteredNameTouched(false);
  };

    const nameInputBlurHandler = event =>{
      setEnteredNameTouched(true);

    };



  const nameInputClass = nameInputIsInvalid ? "form-control invalid" : "form-control";

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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
