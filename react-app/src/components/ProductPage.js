import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './ProductPage.css'
import { getSingleProduct } from '../store/products';

const ProductPage = () => {
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.id)
    console.log(product, "BEFORE")
    const productObj = product[Object.keys(product)[0]];
    console.log(product[Object.keys(product)[0]], "PRODUCT@@@")
    console.log(id)
    return (
        <div>
            <h1>{productObj.description}</h1>
            <h1>{productObj.id}</h1>
            <img src={productObj.photourl}></img>
            <h1>{productObj.name}</h1>
            <h1>{productObj.price}</h1>
        </div>
    )
}

export default ProductPage;
