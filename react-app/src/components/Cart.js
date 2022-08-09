import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'
import { deleteCarts, editCartQuantity, getCarts, deleteAllCart } from '../store/carts';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const user= useSelector(state => state.session.user.id)
    console.log(cart, "@@@")
    const dispatch = useDispatch()
    let total = 0
    let subTotal = 0
    let count = 1
    useEffect(() => {
        if (cart) {
            // subTotal = Object.keys(cart).length
            console.log("inside")
            Object.keys(cart).map((oneKey,i)=>{
                console.log("ONEKEY", cart[oneKey].quantity)
                subTotal += (cart[oneKey].quantity)
                total += parseFloat(cart[oneKey].price * cart[oneKey].quantity)
            })
        }
    });

    // useEffect(() => {
    //     dispatch(getCarts(user))
    // }, [count])
    console.log(total)

    const changeQuantity = async(e) => {
        count++
        console.log(e.target.value, e.target.className)
        await dispatch(editCartQuantity(e.target.value, e.target.className))
        await dispatch(getCarts(user))
        // window.location.href = `/`
        // window.location.href = '/cart'
    }

    const deleteProduct = (e) => {
        console.log(e.target.id)
        const id = e.target.id
        dispatch(deleteCarts(id))
        window.location.href = `/`
    }

    const deleteAllCarts = (e) => {
        console.log(e.target.id)
        dispatch(deleteAllCart(e.target.id))
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
                    {console.log("KEYYYY", parseInt(oneKey), oneKey, cart)}
                    // {oneKey && ()}
                    {if(parseInt(oneKey)) {
                        return (
                            <div>
                                <div className='productBox'>
                                <img id='photoUrl'src={cart[oneKey].photourl}></img>
                                <div className='cartProductInfo'>
                                    <p key={i} id='productName'>{cart[oneKey].name}</p>
                                    <p id='authorName'>by {cart[oneKey].name}</p>
                                    <p id='instock'>In Stock</p>
                                    <p id='paperback'>Paperback</p>
                                    <p id='returns'>FREE RETURNS</p>
                                    <p id={cart[oneKey].id} className='deleteProdCart' onClick={deleteProduct}>Delete</p>
                                    <select class={cart[oneKey].id} id='quantity' onChange={changeQuantity}>
                                        <option selected="selected" value={cart[oneKey].quantity}>Qty: {cart[oneKey].quantity}</option>
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
                            </div>
                        )
                    }}

                })
                }
            <div className='subTotalDiv'>
                <h3 id='subTotalCost'>Subtotal ({cart.count} items): </h3>
                <h3 id='totalCost'>${cart.total}</h3>
            </div>
            </div>
            <div className='submitOrder'>
                <button id={user} onClick={deleteAllCarts}>Submit Order</button>
            </div>
        </div>

    )
}

export default Cart
