
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
// import
import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css'
import User from './User';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  // console.log(user)

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
    debugger
    // console.log(searchedTerms, "NNN")
    // console.log((term), "LLL")
    const response = await fetch(domain + `/api/products/search/${term}`)
    if (response.ok) {
      let arr = []
      const data = await response.json()
      debugger
      // console.log("SEARCHDATA", data)
      // setSearchedTerms(data)
      for (const key in data) {
        // console.log([data[key].id, data[key].name])
        // setSearchedTerms(searchedTerms.concat(searchTerm))
        // searchedTerms.push([data[key].id, data[key].name])
        setSearchedTerms(arr => [...arr, [data[key].id, data[key].name]])
        // console.log(searchedTerms, "zzz")
      }
      // console.log(arr)
      // setSearchedTerms(arr)
      // console.log("SEADATA", searchedTerms)
    }

  }
  const updateSearch = async(e) => {
    // console.log(e.target.value)
    // debugger
    setSearchTerm(e.target.value)
    // console.log(searchTerm, "HHH")
    getSearchList(e.target.value)
  }
  // console.log("LINE", searchedTerms)

  // let searchClicked = false
  window.addEventListener('click', function(event){
    // console.log(searchClicked, event.target.className === 'search');
    if (event.target.className === 'search') {
      setSearchClicked(true)
    } else {
      setSearchClicked(false)
    }
    // console.log(searchClicked, "CLICKS")
  });
    return (
    <nav>
      <div className="navBar">
        <div className='amazonLogoDiv'>
          <NavLink class='amznLogo' to='/' exact={true} activeClassName='active'>
            <img id="logo" src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png'></img>
          </NavLink>
        </div>
        {/* <div className='delivery'>
          <div className='deliveryBoxOne'>
          <div className='deliveryBox'>
            <div className='deliveryIcon'>
              <img id='locationIcon' src='https://kronospan-express.com/public/krono/img/icons/placeholder_blk.png'></img>
            </div>
            {user && (
            <div class='deliveryName'>
              Deliver to {user.username}
            </div>

            )}
          </div>
          </div>
        </div> */}
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
            {/* <h1 id='listSearch'>hi</h1> */}
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
          // <div className="greeting">
            <div className='helloUserDiv'>
              <NavLink to='/' exact={true} activeClassName='active' id="navOptions">
                Hello, {user.username}
              </NavLink>
            </div>
          // </div>
        )}
        {/* <div className="order">
          <NavLink to='/orders' exact={true} activeClassName='active' id="navOptions">
            Returns
          </NavLink>
          <NavLink to='/orders' exact={true} activeClassName='active' id="optionsReturn">
            & Orders
          </NavLink>
        </div> */}
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
