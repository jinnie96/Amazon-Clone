import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './AddedToCart.css'

const AddedToCart = () => {
    const cart = useSelector(state => state.cart);

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
        </div>
    )
}

export default AddedToCart
