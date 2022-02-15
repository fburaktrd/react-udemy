import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  
  
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername,enteredAge);
    if(setEnteredAge.trim().length === 0 || setEnteredUsername.trim().length ===0){
        return;
    }
    if(setEnteredAge < 1){
        return;
    }
    
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event)=>{
      setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" value = {enteredUsername} type="text" onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" value = {enteredAge} type="number" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
