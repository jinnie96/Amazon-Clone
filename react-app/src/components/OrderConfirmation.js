import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OrderConfirmation.css'

const OrderConfirmation = () => {
    const dispatch = useDispatch()
    const user= useSelector(state => state.session.user)
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
