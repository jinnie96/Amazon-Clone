import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './ProductPage.css'
import { getSingleProduct } from '../store/products';

const ProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dispatch, id])
    const product = useSelector(state => state.products.id)
    console.log(product, "BEFORE!")
    let productObj
    // if (product) {
    productObj = product[Object.keys(product)[0]];
    console.log(product[Object.keys(product)[0]], "PRODUCT@@@")
    // }
    console.log(id)
    return (
        <div className='product'>
            <div className="image">
                <img id='prodImage'src={productObj.photourl}></img>
            </div>
            <div className='productDetails'>
                <h1>{productObj.name}</h1>
                <h1>{productObj.description}</h1>
                <h1>{productObj.id}</h1>
            </div>
            <div className='price'>
                <h1 id='price'>{productObj.price}</h1>
                <h2 id='stock'>In Stock.</h2>
                <button id='cartAdd'>Add to Cart</button>
                <button id='buy'>Buy Now</button>
                <h3>Secure transaction</h3>
            </div>
        </div>
    )
}

export default ProductPage;
