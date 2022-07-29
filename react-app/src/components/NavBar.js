
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css'
import User from './User';


const NavBar = () => {
  const user = useSelector(state => state.session.user)
  console.log(user)
  return (
    <nav>
      <div className="navBar">
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img id="logo" src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png'></img>
          </NavLink>
        </div>
        <div className='delivery'>
          {/* <div className='deliveryBoxOne'> */}
            <div className='deliveryIcon'>
              <img id='locationIcon' src='https://kronospan-express.com/public/krono/img/icons/placeholder_blk.png'></img>
            </div>
            <div class='deliveryName'>
              Deliver to {user.username}
            </div>
          {/* </div> */}
          <div class='cityName'>

          </div>
        </div>
        <div className="searchBar">
          <input className="search"></input>
          <img id="searchBtn" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTc5LjQ1IDU3OS40NWMtMTEuODg3IDExLjg4Ny0zMS4xMTMgMTEuODg3LTQyLjk1MyAwbC04NC45NjEtODQuOTYxYy0yOS43ODkgMjEuMjE1LTY2LjE2IDMzLjgxMi0xMDUuNTIgMzMuODEyLTEwMC42OCAwLTE4Mi4zMy04MS42NDUtMTgyLjMzLTE4Mi4zMyAwLTEwMC42OCA4MS42NDUtMTgyLjMzIDE4Mi4zMy0xODIuMzMgMTAwLjY4IDAgMTgyLjMzIDgxLjY0NSAxODIuMzMgMTgyLjMzIDAgMzkuMzU1LTEyLjU5OCA3NS43MjctMzMuODEyIDEwNS41Mmw4NC45MTQgODQuOTE0YzExLjg0IDExLjkzIDExLjg0IDMxLjE2IDAgNDMuMDQ3em0tODEuNTA0LTIzMy40OGMwLTgzLjkxOC02OC4wMDgtMTUxLjkzLTE1MS45My0xNTEuOTMtODMuOTE4IDAtMTUxLjk3IDY4LjA1NS0xNTEuOTcgMTUxLjkzIDAgODMuODcxIDY4LjAwOCAxNTEuOTMgMTUxLjkzIDE1MS45MyA4My45MTggMCAxNTEuOTctNjguMDA4IDE1MS45Ny0xNTEuOTN6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="></img>
        </div>
        <div className="rightSide">
        {!user && (
          <div class="greeting">
            <div>
              <NavLink to='/login' exact={true} activeClassName='active' id="navOptions">
                Hello, Sign in
              </NavLink>
            </div>
            <div>
              <NavLink to='/sign-up' exact={true} activeClassName='active' id="navOptions">
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
        {user && (
          <div className="greeting">
            <div>
              <NavLink to='/' exact={true} activeClassName='active' id="navOptions">
                Hello, {user.username}
              </NavLink>
            </div>
          </div>
        )}
        <div className="order">
          <NavLink to='/orders' exact={true} activeClassName='active' id="navOptions">
            Returns
          </NavLink>
          <NavLink to='/orders' exact={true} activeClassName='active' id="navOptions">
            & Orders
          </NavLink>
        </div>
        <div className="cart">
          <NavLink to='/cart' exact={true} activeClassName='active' id="navOptions">
            Cart
          </NavLink>
        </div>
        {user && (
          <div>
            <LogoutButton />
          </div>
        )}
        {!user && (
          <div>
          <DemoButton />
        </div>
        )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
