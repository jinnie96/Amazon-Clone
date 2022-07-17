import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'
import { deleteCarts } from '../store/carts';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart, "@@@")
    const dispatch = useDispatch()


    const deleteProduct = (e) => {
        console.log(e.target.parentNode.firstChild.id)
        const id = e.target.parentNode.firstChild.id
        dispatch(deleteCarts(id))
    }

    return (
        <div>
            {/* <h1>cart</h1> */}
            <ul>
                {
                Object.keys(cart).map((oneKey,i)=>{
                    {console.log("KEYYYY", cart[oneKey])}
                    return (
                        <div className='productBox'>
                            <li key={i} id={i}>{cart[oneKey].name}</li>
                            <p id='deleteBtn' onClick={deleteProduct}>Delete</p>
                        </div>
                    )
                })
                }

            </ul>
        </div>

    )
}

export default Cart
