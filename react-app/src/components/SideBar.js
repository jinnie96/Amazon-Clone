import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './OrderConfirmation.css'
import { getSingleProduct } from '../store/products';
import { addtoCart, getCarts } from '../store/carts';
import { getAllReviews, deleteOneReview } from '../store/reviews';

const SideBar = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user)
    console.log(user)
    return (
        <div className='sideBar'>
            <div className='categorySection'>
                <h1>Shop by category</h1>
                <h3>Fantasy</h3>
                <h3>Science Fiction</h3>
                <h3>Mystery</h3>
                <h3>Horror</h3>
                <h3>Biography</h3>
                <h3>Children's</h3>
                <h3>Manga</h3>
                <h3>Literary Fiction</h3>
                <h3>History</h3>
                <h3>Cookbooks</h3>
                <h3>Action/Adventure</h3>
                <h3>Poetry</h3>
            </div>
        </div>
    )
}

export default SideBar
