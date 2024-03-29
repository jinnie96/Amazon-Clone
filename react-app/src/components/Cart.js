import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'
import { deleteCarts, editCartQuantity, getCarts, deleteAllCart } from '../store/carts';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const user= useSelector(state => state.session.user.id)
    const dispatch = useDispatch()
    let total = 0
    let subTotal = 0
    let count = 1
    useEffect(() => {
        if (cart) {
            Object.keys(cart).map((oneKey,i)=>{
                subTotal += (cart[oneKey].quantity)
                total += parseFloat(cart[oneKey].price * cart[oneKey].quantity)
            })
        }
    });

    useEffect(() => {
        (async() => {
          await dispatch(getCarts(user))
        })();
      }, []);

    const getCartQuantity = async() => {
        await dispatch(getCarts(user))
    }
    const changeQuantity = async(e) => {
        count++
        await dispatch(editCartQuantity(e.target.value, e.target.className))
        getCartQuantity(user)
    }

    const deleteProduct = async(e) => {
        const id = e.target.id
        await dispatch(deleteCarts(id))
        await dispatch(getCarts(user))
    }

    const deleteAllCarts = async(e) => {
        await dispatch(deleteAllCart(e.target.id))
        await dispatch(getCarts(user))
    }

    return (
        <div className='page'>
            <h1 id='cartShopTitle'>Shopping Cart</h1>
            <div className='priceTagDiv'>
                {Object.keys(cart).length > 2 && (
                    <h3 id='priceTag'>Price</h3>
                )}
            </div>
                {Object.keys(cart).length <= 2 && (
                    <div className='emptyCartDiv'>
                        <h1 id='emptyCart'>Your cart is empty!</h1>
                    </div>
                )}
            <div>
                {
                Object.keys(cart).map((oneKey,i)=>{
                    {if(parseInt(oneKey)) {
                        return (
                            <div>
                                <div className='productBox'>
                                <img id='photoUrl'src={cart[oneKey].photourl}></img>
                                <div className='cartProductInfo'>
                                    <p key={i} id='productName'>{cart[oneKey].name}</p>
                                    <p id='authorName'>by {cart[oneKey].author}</p>
                                    <p id='instock'>In Stock</p>
                                    <p id='paperback'>Paperback</p>
                                    <p id='returns'>FREE RETURNS</p>
                                    <p id={cart[oneKey].id} className='deleteProdCart' onClick={deleteProduct}>Delete</p>
                                    <select class={cart[oneKey].id} id='quantity' onChange={changeQuantity}>
                                        <option disabled selected value={cart[oneKey].quantity}>Qty: {cart[oneKey].quantity}</option>
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
            {Object.keys(cart).length > 2 && (
                <div className='subTotalDiv'>
                    <h3 id='subTotalCost'>Subtotal ({cart.count} items): &nbsp; </h3>
                    <h3 id='totalCost'>${cart.total}</h3>
                </div>

            )}
            </div>
            <div className='submitOrder'>
                {Object.keys(cart).length > 2 && (
                    <NavLink to='confirmation'><button id={user} className='placeOrderBtn' onClick={deleteAllCarts}>Place your order</button></NavLink>
                )}
            </div>
        </div>

    )
}

export default Cart
