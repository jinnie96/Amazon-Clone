import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart, "@@@")
    return (
        <div>
            {/* <h1>cart</h1> */}
            <ul>
                {
                Object.keys(cart).map((oneKey,i)=>{
                    {console.log("KEYYYY", cart[oneKey])}
                    return (
                        <li key={i}>{cart[oneKey].name}</li>
                    )
                })
                }

            </ul>
        </div>

    )
}

export default Cart
