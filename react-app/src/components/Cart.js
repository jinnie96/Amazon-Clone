import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'
import { deleteCarts, editCartQuantity, getCarts } from '../store/carts';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const user= useSelector(state => state.session.user.id)
    console.log(cart, "@@@")
    const dispatch = useDispatch()
    let total = 0
    let subTotal = 0
    useEffect(() => {
        (async() => {
        })();
    }, [dispatch]);

    if (cart) {
        // subTotal = Object.keys(cart).length
        Object.keys(cart).map((oneKey,i)=>{
            console.log("ONEKEY", cart[oneKey].quantity)
            subTotal += (cart[oneKey].quantity)
            total += parseFloat(cart[oneKey].price * cart[oneKey].quantity)
        })
    }
    console.log(total)

    const changeQuantity = (e) => {
        console.log(e.target.value, e.target.className)
        dispatch(editCartQuantity(e.target.value, e.target.className))
        dispatch(getCarts(user))
        // window.location.href = `/`
        // window.location.href = '/cart'
    }

    const deleteProduct = (e) => {
        console.log(e.target.id)
        const id = e.target.id
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
                                <p id={cart[oneKey].id} className='deleteProdCart' onClick={deleteProduct}>Delete</p>
                                <select class={cart[oneKey].id} onChange={changeQuantity}>
                                    <option value='1'>Qty: 1</option>
                                    <option value='2'>Qty: 2</option>
                                    <option value='3'>Qty: 3</option>
                                    <option value='4'>Qty: 4</option>
                                    <option value='5'>Qty: 5</option>
                                    <option value='6'>Qty: 6</option>
                                    <option value='7'>Qty: 7</option>
                                    <option value='8'>Qty: 8</option>
                                    <option value='9'>Qty: 9</option>
                                </select>
                            </div>
                            <div className='priceDiv'>
                                <p id='productPrice'>${cart[oneKey].price}</p>
                            </div>
                        </div>
                    )
                })
                }
            <div className='subTotalDiv'>
                <h3 id='subTotalCost'>Subtotal ({subTotal} items): </h3>
                <h3 id='totalCost'>${total}</h3>
            </div>
            </div>
        </div>

    )
}

export default Cart
