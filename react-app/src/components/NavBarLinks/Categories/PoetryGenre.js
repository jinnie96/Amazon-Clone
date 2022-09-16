import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Category.css'

import { getAllProducts } from '../../../store/products'
import SideBar from '../../SideBar';
const PoetryGenre = () => {
    const dispatch = useDispatch()
    const [deals, setDeals] = useState([])
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart);
    const products = useSelector(state =>state.products)

    useEffect(() => {
        (async() => {
          window.scrollTo(0,0);
          await dispatch(getAllProducts());
          console.log(products)
        })();
      }, []);


      useEffect(() => {
        (async() => {
            const deal = []
            Object.keys(products).map((key, i) => {
                // console.log('vvvvvvvvvvv', products[key])
                if(products[key].category.includes(window.location.pathname.slice(10).toLowerCase())) deal.push(products[key])
            })
            // console.log(deal)
            setDeals(deal)
        })();
      }, [products]);


      useEffect(() => {
          const movieID = window.location.pathname.slice(10)
      });

    return (
        <div className='categoryPage'>
            <div className='sideBarDiv'>
                <SideBar />
            </div>
            <div className='dealWholePage'>
                <h1 id='genreType'>{window.location.pathname.slice(10)}</h1>
                <div>
                    <h2 id='bestSellers'>Best Sellers</h2>
                </div>
                <div className='categoryBooks'>
                {deals && (

                    <div className='listofDeals'>
                    {deals.map((oneKey, i) => (
                                    <NavLink className='productGenreBox' to={'/books/' + oneKey.id}>
                                    <div className='bookDiv' key={i}>
                                        <div className='bookPic'>
                                            <img id='photoSize' src={oneKey.photourl}></img>
                                        </div>
                                        <div className='bookPrice'>
                                            ${oneKey.price}
                                        </div>
                                        <div className='bookTitle'>
                                            {oneKey.name}
                                        </div>
                                        <div className='bookAuth'>
                                            by {oneKey.author}
                                        </div>
                                        <div className='bookRatings'>
                                            {oneKey.rating >= 4.5 && (
                                                <img id='averageReviewStar' src="https://i.ibb.co/23qphks/Screen-Shot-2022-08-21-at-8-26-27-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                            )}
                                            {(oneKey.rating >= 3.5 && oneKey.rating < 4.5) && (
                                                <img id='averageReviewStar' src="https://i.ibb.co/dk3ZZbn/Screen-Shot-2022-08-12-at-9-28-57-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                            )}
                                            {(oneKey.rating >= 2.5 && oneKey.rating < 3.5) && (
                                                <img id='averageReviewStar' src="https://i.ibb.co/RgTb9MT/Screen-Shot-2022-08-12-at-9-29-12-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                            )}
                                            {(oneKey.rating >= 1.5 && oneKey.rating < 2.5) && (
                                                <img id='averageReviewStar' src="https://i.ibb.co/P5Fmjdd/Screen-Shot-2022-08-12-at-9-29-23-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                            )}
                                            {(oneKey.rating >= .5 && oneKey.rating < 1.5) && (
                                                <img id='averageReviewStar' src="https://i.ibb.co/kgBYWdH/Screen-Shot-2022-08-12-at-9-29-37-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                            )}
                                            {(oneKey.rating < .5 || !oneKey.rating) && (
                                                <img id='averageReviewStar' src="https://i.ibb.co/mFVwGzC/Screen-Shot-2022-08-21-at-8-15-46-PM.png" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                                            )}
                                        </div>

                                    </div>
                                </NavLink>
                                    ))}
                                    </div>
                )}



                </div>
            </div>
        </div>
    )
}

export default PoetryGenre
