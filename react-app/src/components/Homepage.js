import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/products'

function Homepage() {
  const [products, setProducts] = useState([]);
  const productsObj = {}
  const dispatch = useDispatch()
  const productsState = useSelector(state => state.products);

  useEffect(() => {
    async function fetchData() {
      const data = await dispatch(getAllProducts())
      console.log(data)
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
        setProducts(productsObj.products)
      console.log(products)
    }
    fetchData();
  });

//   const productComponents = productsState.map((product, i) => {
//     return (
//         <h1>hi</h1>
//     //   <li key={user.id}>
//     //     <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
//     //   </li>
//     );
//   });

  return (
    <>
      <h1>{productsState.undefined}</h1>
      <p>
        <ul>
            {
                Object.keys(productsObj).map((key, i) => {
                    console.log("!!!!!!!!!!!", productsObj[i])
                    return(
                        <li key={i}>{productsObj[i]}</li>
                    )
                })
            }
        </ul>
      </p>
      {/* <ul>{productComponents}</ul> */}
    </>
  );
}

export default Homepage;
