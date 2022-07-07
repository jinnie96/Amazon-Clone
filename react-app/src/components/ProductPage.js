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
    const product = useSelector(state => state)
    console.log(product, "PRODUCT@@@")
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])
    console.log(id)
    return (
        <h1>{id}</h1>
    )
}

export default ProductPage;
