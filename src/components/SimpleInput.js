import React, { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched

  let formIsValid = false

  if (enteredNameIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    setEnteredNameTouched(true)

    if (!formIsValid) {
      return
    }

    console.log(enteredName)

    setEnteredName('')
    setEnteredNameTouched(false)

  }

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
      </div>
      {nameInputIsValid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
