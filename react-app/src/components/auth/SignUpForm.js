import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [fullname, setFullName] = useState([])
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(fullname, username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords must match.'])
    }
  };

  const updateFullName = (e) => {
    setFullName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='fullPage'>
      <div className='fullFormDiv'>
        <div className='signUpLogoDiv'>
          <img id='signUpLogo' src='https://i.ibb.co/4Z5F4wQ/Amazon-20logo.jpg'></img>
        </div>
        <div className='topHalf'>

        <div className='signUpformDiv'>
          <div>
            <h1 id='createAccount'>Create account</h1>
          </div>
          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div id='errorMsg' key={ind}>{error}</div>
              ))}
            </div>
            <div className='nameInput'>
              <label id='nameLabel'><b>Your name</b></label>
              <input
                type='text'
                name='fullname'
                onChange={updateFullName}
                value={fullname}
                placeholder='First and last name'
                id='nameInputTag'
              ></input>
            </div>
            <div className='userNameInput'>
              <label id='userLabel'>User Name</label>
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                id='userInputTag'
              ></input>
            </div>
            <div className='emailInput'>
              <label id='emailLabel'>Email</label>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                id='emailInputTag'
              ></input>
            </div>
            <div className='passwordInput'>
              <label id='passwordLabel'>Password</label>
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                id='passwordInputTag'
              ></input>
            </div>
            <div className='repeatInput'>
              <label id='reEnterLabel'>Re-enter Password</label>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                id='repeatInputTag'
              ></input>
            </div>
            <button id='signupBtn' type='submit'>Create Account</button>
          </form>
        </div>
        <div><h3 id='conditions'>By creating an account, you agree to Amazun's<br></br> <span id='conditionSpan'>Conditions of Use</span> and <span id='privacySpan'>Privacy Notice.</span></h3></div>
        <hr></hr>
        <div className='signInDirectDiv'>
          <h3 id='signInDirect'>Already have an account? <NavLink to='/login'><span id='signInLink'>Sign-in</span></NavLink></h3>
        </div>
        </div>
      </div>
      <div className='bottomHalf'>
        <div className='footerLinks'>
          <h3 id='conditionUse'>Conditions of Use</h3>
          <h3 id='privacyNotice'>Privacy Notice</h3>
          <h3 id='helpLink'>Help</h3>
        </div>
        <div>
          <h3 id='copyright'>© 1996-2022, Amazun.com, Inc. or its affiliates</h3>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
