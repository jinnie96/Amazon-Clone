import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './OrderConfirmation.css'
import { getSingleProduct } from '../store/products';
import { addtoCart, getCarts } from '../store/carts';
import { getAllReviews, deleteOneReview } from '../store/reviews';

const OrderConfirmation = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user)
    // console.log(user)
    return (
        <div className='confirmationPage'>
            <div className='usernameConfirmation'>
                <h2 id='greeting'>Hello {user.username},</h2>
            </div>
            <div className='orderIsConfirmed'>
                <i id='checkmark' class="fa-solid fa-check"></i>
                <h2 id='orderConfirmed'>Your order is confirmed!</h2>
            </div>
            <div className='thankYou'>
                <h2 id='thankyouOrder'>Thank you for your order! Your order will be shipped shortly.</h2>
            </div>
        </div>
    )
}

export default OrderConfirmation
