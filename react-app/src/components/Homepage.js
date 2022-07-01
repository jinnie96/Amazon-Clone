import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/products'
import './Homepage.css'

function Homepage() {
  const [products, setProducts] = useState();
  const productsArr = []
  const dispatch = useDispatch()
  const productsState = useSelector(state => state.products);

  useEffect(() => {
    async function fetchData() {
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
    //   console.log(productsState.undefined[0])
    //   const photoArr = []
    //   productsState.undefined.map((product) => {
    //     const photoIndex = product.indexOf('photourl')
    //     const photo = product.slice(photoIndex + 12, -2)
    //     console.log(product.indexOf('photourl'))
    //     console.log(photo,"PHOTOOO")
    //     photoArr.push(photo)
    // })
    // setProducts(photoArr)
    //   const response = await fetch('/api/products/');
    //   const responseData = await response.json();
    //   console.log(responseData)
    //   setProducts(responseData)
    //   console.log(products, "@@@")
    //   Object.keys(responseData).map((key, i) => {
    //       console.log(responseData[key])
    //       productsObj[key] = (responseData[key])
    //     console.log(productsObj.products)
    // })
    // setProducts(productsObj)
    //   for (let key in responseData) {
    //       console.log(key, responseData[key])
    //       setProducts({
    //           [key]: responseData[key]
    //       })
    //   }
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
        <div>
            <img id="homePic" src ="https://m.media-amazon.com/images/I/715lpDNhM1L._SX3000_.jpg"></img>
        </div>
        <div className="categories">
            <div className="sports">
                <div className="sportsTitle">
                    Sports
                </div>
                <div class="sportsPics">
                    <img id="football" src="https://www.big5sportinggoods.com/catalogimage/img/product/rwd/large/1310_14339_0004_000_large_02.jpg"></img>
                    <img id="basketball" src="https://img.lakeshorelearning.com/is/image/OCProduction/ub80?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0"></img>
                    <img id="soccerball" src="https://i5.walmartimages.com/asr/5f85d6c5-be68-4c96-9afc-7c8a7c160687.b4a9e6e6b710f197070328c909c28630.jpeg"></img>
                    <img id="tennisball" src="https://nwscdn.com/media/wysiwyg/3kf/tennis/Lifestyle.jpg"></img>
                </div>
            </div>
            <div className="books">
                <div className="booksTitle">
                    Books
                </div>
                <div class="booksPics">

                </div>
            </div>
            <div className="games">
                <div className="gamesTitle">
                    Games
                </div>
                <div class="gamesPics">

                </div>
            </div>
            <div className="computers">
                <div className="computersTitle">
                    Computers
                </div>
                <div class="computersPics">

                </div>
            </div>
            <div className="cellPhones">
                <div className="cellPhoneTitle">
                    Cell Phones
                </div>
                <div class="cellPhonePics">

                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    Clothing
                </div>
                <div class="clothingPics">

                </div>
            </div>
        </div>
      {/* <ul>{productComponents}</ul> */}
    </>
  );
}

export default Homepage;
