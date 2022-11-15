import useInput from "../Hook/Use-Input";

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    reset: resetFirstNameInput,
    inputBlurHandler: firstNameBlurHandler
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    reset: resetLastNameInput,
    inputBlurHandler: lastNameBlurHandler
  } = useInput(value => value.trim() !== '')


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
    inputBlurHandler: emailBlurHandler
  } = useInput(value => value.includes('@'))


  let formIsValid = false

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }


  const submissionHandler = (e) => {
    e.preventDefault()

    if (!formIsValid) {
      return
    }

    console.log(enteredEmail, enteredFirstName, enteredLastName)

    resetFirstNameInput()

    resetLastNameInput()

    resetEmailInput()

  }


  const InputFirstNameClass = firstNameInputHasError ? 'form-control invalid' : 'form-control'
  const InputLastNameClass = lastNameInputHasError ? 'form-control invalid' : 'form-control'
  const InputEmailClass = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submissionHandler}>
      <div className='control-group'>
        <div className={InputFirstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameInputHasError && <p className="error-text">FirstName must not be empty</p>}
        </div>
        <div className={InputLastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameInputHasError && <p className="error-text">LastName must not be empty</p>}
        </div>
      </div>
      <div className={InputEmailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Email must be Valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
