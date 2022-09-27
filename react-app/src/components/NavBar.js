
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  const [searchTerm, setSearchTerm] = useState('')
  const [searchedTerms, setSearchedTerms] = useState([])
  const [searchClicked, setSearchClicked] = useState(false)

  const domain = window.location.origin
  const getSearchList = async(term) => {
    if (!term) {
      setSearchedTerms([])
      return
    }
    setSearchedTerms([])
    const response = await fetch(domain + `/api/products/search/${term}`)
    if (response.ok) {
      let arr = []
      const data = await response.json()
      for (const key in data) {
        setSearchedTerms(arr => [...arr, [data[key].id, data[key].name]])
      }
    }

  }
  const updateSearch = async(e) => {
    setSearchTerm(e.target.value)
    getSearchList(e.target.value)
  }
  window.addEventListener('click', function(event){
    if (event.target.className === 'search') {
      setSearchClicked(true)
    } else {
      setSearchClicked(false)
    }
  });
    return (
    <nav>
      <div className="navBar">
        <div className='amazonLogoDiv'>
          <NavLink class='amznLogo' to='/' exact={true} activeClassName='active'>
            <img id="logo" src='https://i.ibb.co/gmV9mQF/amazon-logo.jpg'></img>
          </NavLink>
        </div>
        <div className='searchResultList'>
        <div className="searchBar">
          <input className="search" value={searchTerm} onChange={updateSearch}></input>
          <img id="searchBtn" src="https://i.ibb.co/5Wy8tZH/b96782d0ab0ea492dabcf4a0f00698d2-removebg-preview.jpg"></img>
        </div>
        {
          (searchedTerms.length > 0 && searchClicked) && (
          <div className='searchResults'>
            {searchedTerms.map(term => (
                <NavLink id='term' to={`/books/${term[0]}`}>
                    {term[1]}
                </NavLink>
        ))}
          </div>
          )
        }
          </div>
        <div className="rightSide">
        {!user && (
          <div class="greeting">
            <div className='loginBtn'>
              <NavLink to='/login' exact={true} activeClassName='active' id="navOptions">
                Hello, Sign in
              </NavLink>
            </div>
            <div className='signUpBtn'>
              <NavLink to='/sign-up' exact={true} activeClassName='active' id="navOptions">
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
        {user && (
            <div className='helloUserDiv'>
              <NavLink to='/' exact={true} activeClassName='active' id="navOptions">
                Hello, {user.username}
              </NavLink>
            </div>
        )}
        <div className="cart">
          <NavLink to='/cart' exact={true} activeClassName='active' id="navOptions">
            Cart
          </NavLink>
        </div>
        {user && (
          <div className='logoutBtn'>
            <LogoutButton />
          </div>
        )}
        {!user && (
          <div className='demoBtn'>
          <DemoButton />
        </div>
        )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
