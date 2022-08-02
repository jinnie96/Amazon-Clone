import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'
import { deleteCarts } from '../store/carts';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart, "@@@")
    const dispatch = useDispatch()
    let total = 0
    if (cart) {
        Object.keys(cart).map((oneKey,i)=>{
            total += parseFloat(cart[oneKey].price)
        })
    }
    console.log(total)


    const deleteProduct = (e) => {
        console.log(e.target.parentNode.firstChild.id)
        const id = e.target.parentNode.firstChild.id
        dispatch(deleteCarts(id))
    }

    return (
        <div className='page'>
            <h1 id='cartShopTitle'>Shopping Cart</h1>
            <div className='priceTagDiv'>
                <h3 id='priceTag'>Price</h3>
            </div>
            <div>
                {
                Object.keys(cart).map((oneKey,i)=>{
                    {console.log("KEYYYY", cart[oneKey])}
                    return (
                        <div className='productBox'>
                            <img id='photoUrl'src={cart[oneKey].photourl}></img>
                            <div className='cartProductInfo'>
                                <p key={i} id='productName'>{cart[oneKey].name}</p>
                                <p id='authorName'>by {cart[oneKey].name}</p>
                                <p id='instock'>In Stock</p>
                                <p id='paperback'>Paperback</p>
                                <p id='returns'>FREE RETURNS</p>
                                <p id='deleteProdCart' onClick={deleteProduct}>Delete</p>
                            </div>
                            <div className='priceDiv'>
                                <p id='productPrice'>${cart[oneKey].price}</p>
                            </div>
                        </div>
                    )
                })
                }
            <div className='subTotalDiv'>
                <h3 id='subTotalCost'>Subtotal ({Object.keys(cart).length} items): </h3>
                <h3 id='totalCost'>${total}</h3>
            </div>
            </div>
        </div>

    )
}

export default Cart
