import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/products'

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
        <ul>
            <img src='https://m.media-amazon.com/images/I/61s248JDH+L._AC_SX522_.jpg'></img>
            <img src='https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_.jpg'></img>
            <img src='https://m.media-amazon.com/images/I/61iqsjK1JtL._AC_SX466_.jpg'></img>
        </ul>
      {/* <ul>{productComponents}</ul> */}
    </>
  );
}

export default Homepage;
