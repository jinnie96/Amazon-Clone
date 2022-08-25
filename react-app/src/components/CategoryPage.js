import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './CategoryPage.css'
import { getSingleProduct } from '../store/products';
import { addtoCart, getCarts } from '../store/carts';
import { getAllProducts } from '../store/products';
import { getAllReviews, deleteOneReview } from '../store/reviews';

const CategoryPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        (async() => {
          await dispatch(getAllProducts());
        })();
      }, []);
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart);
    const products = useSelector(state =>state.products)
    console.log(products)
    console.log((window.location.pathname).slice(10))
    return (
        <div>
            <h1 id='genreType'>{window.location.pathname.slice(10)}</h1>
            <div>
                <h2 id='bestSellers'>Best Sellers</h2>
            </div>
            <div className='categoryBooks'>
            {/* {
            Object.keys(products).map((oneKey,i)=>{
                console.log("ONEKEY", products[oneKey].category.includes(window.location.pathname.slice(10).toLowerCase()))
                // {
                    products[oneKey].category.includes(window.location.pathname.slice(10).toLowerCase() && (
                        <h3>{products[oneKey].category}</h3>
                    ))

                // }
                // subTotal += (cart[oneKey].quantity)
                // total += parseFloat(cart[oneKey].price * cart[oneKey].quantity)
            })
            } */}
            {Object.keys(products).map((oneKey, i) => (
                console.log(products[oneKey].category.includes(window.location.pathname.slice(10).toLowerCase()))
                // {products[oneKey].category.includes(window.location.pathname.slice(10).toLowerCase()) && (
                //     <div key={i}>{products[oneKey].name}</div>

                // )}
            ))}

            </div>
        </div>
    )
}

export default CategoryPage
