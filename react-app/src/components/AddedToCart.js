import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './AddedToCart.css'
import { getSingleProduct } from '../store/products';
import { addtoCart, getCarts } from '../store/carts';
import { getAllReviews, deleteOneReview } from '../store/reviews';

const AddedToCart = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart);

    // console.log('addedtocart', cart)
    return (
        <div className='productAddedDiv'>
            <div className='addedToCartDiv'>
                <img id='greenCheck' src='https://www.pngall.com/wp-content/uploads/12/Green-Check-Transparent.png'></img>
                <h2 id='added'><b>Added To Cart</b></h2>
            </div>
            <div className='subTotal'>
                <h3><b>Cart Subtotal:&nbsp;${cart.total}</b></h3>
                <NavLink to='/cart'><button id='goToCart'>Go to Cart</button></NavLink>
            </div>
            {/* <div className='thankYou'>
                <h2 id='thankyouOrder'>Thank you for your order! Your order will be shipped shortly.</h2>
            </div> */}
        </div>
    )
}

export default AddedToCart
