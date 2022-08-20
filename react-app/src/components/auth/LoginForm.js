import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import DemoButton from './DemoButton';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUser = async (e) => {
     e.preventDefault()
    await dispatch(login('demo@aa.io', 'password'))
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='fullPage'>
    <div className='fullFormDiv'>
      <div className='signUpLogoDiv'>
        <img id='signUpLogo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'></img>
      </div>
      <div className='topHalf'>

      <div className='signUpformDiv'>
        <div>
          <h1 id='createAccount'>Sign in</h1>
        </div>
        <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='emailInput'>
        <label id='emailLabel' htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          id='emailInputTag'
        />
      </div>
      <div className='passwordInput'>
        <label id='passwordLabel' htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          id='passwordInputTag'
        />
        <button id='loginBtn' type='submit'>Login</button>
        <button id='loginBtn' onClick={demoUser}>Demo</button>
        {/* <div className='demoBtn'>
          <DemoButton />
        </div> */}
        {/* <button id='loginBtn' type='submit'>Demo User</button> */}
      </div>
    </form>
      </div>
      <div className='conditionsDiv'><h3 id='conditions'>By continuing, you agree to Amazon's <span id='conditionSpan'>Conditions of<br></br> Use</span> and <span id='privacySpan'>Privacy Notice.</span></h3></div>
      {/* <hr></hr>
      <div className='signInDirectDiv'>
        <h3 id='signInDirect'>Already have an account? <NavLink to='login'><span id='signInLink'>Sign-in</span></NavLink></h3>
      </div> */}
      </div>
    </div>
      <div className='createLinkDiv'>
        <h2 id='amazonNew'><span id='newToAmazon'>New to Amazon?</span></h2>
      </div>
      <div className='createNewAcc'>
        <NavLink to='/sign-up'>
          <button id='createAccBtn'>Create your Amazon account</button>
        </NavLink>
      </div>
    <div className='bottomHalf'>
      <div className='footerLinks'>
        <h3 id='conditionUse'>Conditions of Use</h3>
        <h3 id='privacyNotice'>Privacy Notice</h3>
        <h3 id='helpLink'>Help</h3>
      </div>
      <div>
        <h3 id='copyright'>© 1996-2022, Amazon.com, Inc. or its affiliates</h3>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;
