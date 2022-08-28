import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './SideBar.css'
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
                <h1 id='categoryShop'>Shop by category</h1>
                <div className='sideBarList'>
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
            <div className='bestDealsDiv'>
                <h1 id='bestdeals'>Deals</h1>
                <div className='dealsList'><h3>Shop the best deals</h3></div>
            </div>
            <div className='byReviewRating'>
                <h1 id='customerRating'>Avg. Customer Rating</h1>
                <div className='ratingsList'>
                    <div className='fourplus'><img id='averageReviewStar' src="https://i.ibb.co/dk3ZZbn/Screen-Shot-2022-08-12-at-9-28-57-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img> & up</div>
                    <div className='threeplus'><img id='averageReviewStar' src="https://i.ibb.co/RgTb9MT/Screen-Shot-2022-08-12-at-9-29-12-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img> & up</div>
                    <div className='twoplus'><img id='averageReviewStar' src="https://i.ibb.co/P5Fmjdd/Screen-Shot-2022-08-12-at-9-29-23-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img> & up</div>
                    <div className='oneplus'><img id='averageReviewStar' src="https://i.ibb.co/kgBYWdH/Screen-Shot-2022-08-12-at-9-29-37-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img> & up</div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
