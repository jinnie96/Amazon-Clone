import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './DemoButton.css'

const DemoButton = () => {
  const dispatch = useDispatch()
  const demoUser = async (e) => {
      e.preventDefault()
    await dispatch(login('demo@aa.io', 'password'))
  };

  return <button id='demoBtnId' onClick={demoUser}>Demo</button>;
};

export default DemoButton;
