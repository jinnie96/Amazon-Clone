import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './404Page.css'
import { getSingleProduct } from '../store/products';
import { addtoCart, getCarts } from '../store/carts';
import { getAllReviews, deleteOneReview } from '../store/reviews';

const Handle404 = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart);

    // console.log('addedtocart', cart)
    return (
        <div className='handleError'>
            <NavLink to='/'>
                <div className='sorry'>
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png'></img>
                </div>
                <div className='dogSorry'>
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/113._TTD_.jpg'></img>
                </div>
            </NavLink>
            {/* <div className='thankYou'>
                <h2 id='thankyouOrder'>Thank you for your order! Your order will be shipped shortly.</h2>
            </div> */}
        </div>
    )
}

export default Handle404
