import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './CategoryPage.css'
import { getSingleProduct } from '../store/products';
import { addtoCart, getCarts } from '../store/carts';
import { getAllProducts } from '../store/products';
import { getAllReviews, deleteOneReview } from '../store/reviews';
import SideBar from './SideBar';
const CategoryPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        (async() => {
          await dispatch(getAllProducts());
        })();
      }, []);
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart);
    const products = useSelector(state =>state.products)
    console.log(products)
    console.log((window.location.pathname).slice(10))
    return (
        <div className='categoryPage'>
            <div className='sideBarDiv'>
                <SideBar />
            </div>
            <div>
                <h1 id='genreType'>{window.location.pathname.slice(10)}</h1>
                <div>
                    <h2 id='bestSellers'>Best Sellers</h2>
                </div>
                <div className='categoryBooks'>
                {Object.keys(products).map((oneKey, i) => (
                    // {products[oneKey].category.includes(window.location.pathname.slice(10).toLowerCase()) && (
                        // console.log(products[oneKey])

                        <NavLink className='productGenreBox' to={'/books/' + oneKey}>
                            <div key={i}>
                                <div className='bookPic'>
                                    <img id='photoSize' src={products[oneKey].photourl}></img>
                                </div>
                                <div className='bookPrice'>
                                    ${products[oneKey].price}
                                </div>
                                <div className='bookTitle'>
                                    {products[oneKey].name}
                                </div>
                                <div className='bookAuth'>
                                    by {products[oneKey].author}
                                </div>
                                <div className='bookRatings'>
                                    {/* by {products[oneKey].rating} */}
                                    {products[oneKey].rating >= 4.5 && (
                                        <img id='averageReviewStar' src="https://i.ibb.co/23qphks/Screen-Shot-2022-08-21-at-8-26-27-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                    )}
                                    {(products[oneKey].rating >= 3.5 && products[oneKey].rating < 4.5) && (
                                        <img id='averageReviewStar' src="https://i.ibb.co/dk3ZZbn/Screen-Shot-2022-08-12-at-9-28-57-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                    )}
                                    {(products[oneKey].rating >= 2.5 && products[oneKey].rating < 3.5) && (
                                        <img id='averageReviewStar' src="https://i.ibb.co/RgTb9MT/Screen-Shot-2022-08-12-at-9-29-12-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                    )}
                                    {(products[oneKey].rating >= 1.5 && products[oneKey].rating < 2.5) && (
                                        <img id='averageReviewStar' src="https://i.ibb.co/P5Fmjdd/Screen-Shot-2022-08-12-at-9-29-23-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                    )}
                                    {(products[oneKey].rating >= .5 && products[oneKey].rating < 1.5) && (
                                        <img id='averageReviewStar' src="https://i.ibb.co/kgBYWdH/Screen-Shot-2022-08-12-at-9-29-37-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                    )}
                                    {(products[oneKey].rating < .5 || !products[oneKey].rating) && (
                                        <img id='averageReviewStar' src="https://i.ibb.co/mFVwGzC/Screen-Shot-2022-08-21-at-8-15-46-PM.png" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                    )}
                                </div>
                            </div>
                        </NavLink>

                    // )}
                ))}

                </div>
            </div>
        </div>
    )
}

export default CategoryPage
