import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/products'
import { getCarts } from '../store/carts';
import './Homepage.css'
// import { NavLink } from "react-router-dom";

function Homepage() {
  const [products, setProducts] = useState();
  const productsArr = []
  const dispatch = useDispatch()
  const productsState = useSelector(state => state.products);
  const user= useSelector(state => state.session.user.id)

  useEffect(() => {
    async function fetchData() {
        console.log("UUUSSSSERRR", user)
        dispatch(getCarts(user))
      const data = await dispatch(getAllProducts())
      setProducts(data)
      console.log(((data)))
      console.log(products)
      for (let key in data) {
          console.log(data[key].photourl)
          productsArr.push(data[key].photourl)
          console.log(productsArr)
      }
      console.log(productsArr)
      console.log(productsState)
    }
    fetchData();
  }, []);

  const productComponents = productsArr.map((product, i) => {
      console.log(product)
      console.log(productsArr)
    return (
        // <h1>hi</h1>
      <li key={product.id}>
        <NavLink to={`/products/${product.id}`}>hi</NavLink>
      </li>
    );
  });

  return (
    <>
        {/* <ul>
            <img src='https://m.media-amazon.com/images/I/61s248JDH+L._AC_SX522_.jpg'></img>
            <img src='https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_.jpg'></img>
            <img src='https://m.media-amazon.com/images/I/61iqsjK1JtL._AC_SX466_.jpg'></img>
        </ul> */}
        <div className='banner'>
            <img id="homePic" src ="https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/TIN-332%20Books%20from_large.jpg?itok=7QRVhctV"></img>
        </div>
        <div className='categoryTitle'><h1>Shop by Category:</h1></div>
        <div className="categories">
            <div className="sports">
                <div className="sportsTitle">
                    Fantasy
                </div>
                <div class="sportsPics">
                    <NavLink to={'sports/1'}><img id="gameOfThrones" src="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"></img></NavLink>
                    <NavLink to={'sports/2'}><img id="nameOfWind" src="https://images-na.ssl-images-amazon.com/images/I/91b8oNwaV1L.jpg"></img></NavLink>
                    <NavLink to={'sports/3'}><img id="lordOfTheRings" src="https://images-na.ssl-images-amazon.com/images/I/71jLBXtWJWL.jpg"></img></NavLink>
                    <NavLink to={'sports/4'}><img id="colorOfMagic" src="https://images-na.ssl-images-amazon.com/images/I/91u24IHWS8L.jpg"></img></NavLink>
                </div>
            </div>
            <div className="books">
                <div className="booksTitle">
                    Science Fiction
                </div>
                <div class="booksPics">
                    <NavLink to={'books/1'}><img id="nineEightFour" src="https://images-na.ssl-images-amazon.com/images/I/81StSOpmkjL.jpg"></img></NavLink>
                    <NavLink to={'books/2'}><img id="fahrenheit" src="https://www.arts.gov/sites/default/files/Fahrenheit%20451%20Cover.jpg"></img></NavLink>
                    <NavLink to={'books/3'}><img id="braveNewWorld" src="https://images-na.ssl-images-amazon.com/images/I/81zE42gT3xL.jpg"></img></NavLink>
                    <NavLink to={'books/4'}><img id="dune" src="https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg"></img></NavLink>
                </div>
            </div>
            <div className="games">
                <div className="gamesTitle">
                    Mystery
                </div>
                <div class="gamesPics">
                    <NavLink to={'games/1'}><img id='moonstone' src='https://images-na.ssl-images-amazon.com/images/I/41sxrEkyqdL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'></img></NavLink>
                    <NavLink to={'games/2'}><img id='scarlett' src='https://images-na.ssl-images-amazon.com/images/I/51-oCW5syML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'></img></NavLink>
                    <NavLink to={'games/3'}><img id='express' src='https://images-na.ssl-images-amazon.com/images/I/51r0M+3m6FL._SY344_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'games/4'}><img id='poisonedChocolate' src='https://images-na.ssl-images-amazon.com/images/I/3135Nx9adoL._SX322_BO1,204,203,200_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="computers">
                <div className="computersTitle">
                    Horror
                </div>
                <div class="computersPics">
                    <NavLink to={'computers/1'}><img id='salem' src='https://images-na.ssl-images-amazon.com/images/I/51rGHSSyvxL._SX301_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'computers/2'}><img id='river' src='https://images-na.ssl-images-amazon.com/images/I/517JeY9HK8L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'></img></NavLink>
                    <NavLink to={'computers/3'}><img id='beloved' src='https://images-na.ssl-images-amazon.com/images/I/41Rdzbiqh7L._SX322_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'computers/4'}><img id='exorcist' src='https://images-na.ssl-images-amazon.com/images/I/3178if2aHgL._SX326_BO1,204,203,200_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="cellPhones">
                <div className="cellPhoneTitle">
                    Biography
                </div>
                <div class="cellPhonePics">
                    <NavLink to={'phones/1'}><img id='iphone13' src='https://images-na.ssl-images-amazon.com/images/I/71e7d9fm8ZL.jpg'></img></NavLink>
                    <NavLink to={'phones/2'}><img id='galaxy20' src='https://images-na.ssl-images-amazon.com/images/I/51K6Bsvbn6L._SX303_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'phones/3'}><img id='galaxya13' src='https://images-na.ssl-images-amazon.com/images/I/51pJwB1hlPL._SX331_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'phones/4'}><img id='oneplus' src='https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    Children's
                </div>
                <div class="clothingPics">
                    <NavLink to={'clothes/1'}><img id='jeans' src='https://images-na.ssl-images-amazon.com/images/I/41QZuBj-CPL._SX355_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/2'}><img id='jacket' src='https://images-na.ssl-images-amazon.com/images/I/61h8i3yRK4L._SY498_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/3'}><img id='tshirt' src='https://images-na.ssl-images-amazon.com/images/I/41iOgxrCIzL._SX352_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/4'}><img id='sweats' src='https://m.media-amazon.com/images/I/91JmRQ7Pq6L._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    Manga
                </div>
                <div class="clothingPics">
                    <NavLink to={'clothes/1'}><img id='jeans' src='https://images-na.ssl-images-amazon.com/images/I/51r5Zr3BzCL._SX331_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/2'}><img id='jacket' src='https://images-na.ssl-images-amazon.com/images/I/518KKkmd1fL._SX329_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/3'}><img id='tshirt' src='https://m.media-amazon.com/images/I/912xRMMra4L._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/4'}><img id='sweats' src='https://m.media-amazon.com/images/I/81Lc+Yln3gL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    Literary Fiction
                </div>
                <div class="clothingPics">
                    <NavLink to={'clothes/1'}><img id='jeans' src='https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/2'}><img id='jacket' src='https://m.media-amazon.com/images/I/61z0MrB6qOS._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/3'}><img id='tshirt' src='https://m.media-amazon.com/images/I/71nXPGovoTL._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/4'}><img id='sweats' src='https://m.media-amazon.com/images/I/71wdbkiRokL._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    History
                </div>
                <div class="clothingPics">
                    <NavLink to={'clothes/1'}><img id='jeans' src='https://m.media-amazon.com/images/I/81nQ+oGgI3L._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/2'}><img id='jacket' src='https://m.media-amazon.com/images/I/81suQvII3OL._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/3'}><img id='tshirt' src='https://m.media-amazon.com/images/I/71yj2989nlL._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/4'}><img id='sweats' src='https://m.media-amazon.com/images/I/716pfhoGO5L._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    Cookbooks
                </div>
                <div class="clothingPics">
                    <NavLink to={'clothes/1'}><img id='jeans' src='https://m.media-amazon.com/images/I/919UvuYjlDL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/2'}><img id='jacket' src='https://m.media-amazon.com/images/I/71qoy2ekFWL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/3'}><img id='tshirt' src='https://m.media-amazon.com/images/I/91osDWcy6jL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                    <NavLink to={'clothes/4'}><img id='sweats' src='https://m.media-amazon.com/images/I/811f5vGNQEL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    Action & Adventure
                </div>
                <div class="clothingPics">
                    <NavLink to={'clothes/1'}><img id='jeans' src='https://m.media-amazon.com/images/I/51IP1vp4DbL.jpg'></img></NavLink>
                    <NavLink to={'clothes/2'}><img id='jacket' src='https://m.media-amazon.com/images/I/51AnJ9aDFeL.jpg'></img></NavLink>
                    <NavLink to={'clothes/3'}><img id='tshirt' src='https://m.media-amazon.com/images/I/51oXWVUbqwL.jpg'></img></NavLink>
                    <NavLink to={'clothes/4'}><img id='sweats' src='https://m.media-amazon.com/images/I/51Hz0EZtrxL.jpg'></img></NavLink>
                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    Poetry
                </div>
                <div class="clothingPics">
                    <NavLink to={'clothes/1'}><img id='jeans' src='https://images-na.ssl-images-amazon.com/images/I/41J43ERHtLL._SX321_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/2'}><img id='jacket' src='https://images-na.ssl-images-amazon.com/images/I/41zLDmfXMIL._SX311_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/3'}><img id='tshirt' src='https://images-na.ssl-images-amazon.com/images/I/51S8fUZ6nfL._SX331_BO1,204,203,200_.jpg'></img></NavLink>
                    <NavLink to={'clothes/4'}><img id='sweats' src='https://images-na.ssl-images-amazon.com/images/I/416ZrnNLj6L._SX321_BO1,204,203,200_.jpg'></img></NavLink>
                </div>
            </div>

        </div>
      {/* <ul>{productComponents}</ul> */}
    </>
  );
}

export default Homepage;
