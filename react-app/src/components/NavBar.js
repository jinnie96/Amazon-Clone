
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img id="logo" src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png'></img>
          </NavLink>
        </div>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active' id="navOptions">
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active' id="navOptions">
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to='/orders' exact={true} activeClassName='active' id="navOptions">
            Orders
          </NavLink>
        </div>
        <div>
          <NavLink to='/cart' exact={true} activeClassName='active' id="navOptions">
            Cart
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
        <div>
          <DemoButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
