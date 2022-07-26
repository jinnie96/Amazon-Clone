import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './ProductPage.css'
import { getSingleProduct } from '../store/products';
import { addtoCart } from '../store/carts';
import { getAllReviews } from '../store/reviews';

const ProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    let productObj
    useEffect(() => {
        dispatch(getSingleProduct(id))
        dispatch(getAllReviews(id))
    }, [dispatch, id])
    const product = useSelector(state => state.products.id)
    // productObj = product[Object.keys(product)[0]];
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user.id)
    console.log("reviews", reviews)
    console.log(product, "BEFORE!")
    console.log("KEYSsSSSS", Object.keys(reviews))
    console.log(id)

    const addCart = () => {
        dispatch(addtoCart(id))
    }
    return (
        <>
        {/* <div className='product'>
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
                <button id='cartAdd' onClick={addCart}>Add to Cart</button>
                <button id='buy'>Buy Now</button>
                <h3>Secure transaction</h3>
            </div>
        </div> */}
        <div className='reviews'>
            <div className='leftSide'>
                <div>
                    <h1 id='title'>Customer Reviews</h1>
                    <div className='stars'>
                        <p>*</p>
                        <p>*</p>
                        <p>*</p>
                        <p>*</p>
                        <p>*</p>
                    </div>
                    <h2>blank out of blank</h2>
                </div>
                <div className='ratings'>
                    <div className='five'>
                        <h3 id='starTitle'>5 star</h3>
                        <div className='rating5'></div>
                    </div>
                    <div className='four'>
                        <h3 id='starTitle'>4 star</h3>
                        <div className='rating4'></div>
                    </div>
                    <div className='three'>
                        <h3 id='starTitle'>3 star</h3>
                        <div className='rating3'></div>
                    </div>
                    <div className='two'>
                        <h3 id='starTitle'>2 star</h3>
                        <div className='rating2'></div>
                    </div>
                    <div className='one'>
                        <h3 id='starTitle'>1 star</h3>
                        <div className='rating1'></div>
                    </div>
                </div>
            </div>
            <div className='rightSide'>
                <h1>Top reviews from the United States</h1>
                <div className='reviewsInfo'>
                {
                    Object.keys(reviews).map((key,i)=>{
                        return (
                            <div className='reviewDetail'>
                                <h1 key={i}>{reviews[key][i].rating}</h1>
                                <h2 key={i}>{reviews[key][i].title}</h2>
                                <h3 key={i}>{reviews[key][i].description}</h3>
                                {reviews[key][i].reviewer_id === user &&
                                    <div>
                                        <NavLink to={'edit-review/' + id}>
                                            <button>Edit Review</button>
                                        </NavLink>
                                            <button>Delete Review</button>
                                    </div>
                            }
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
        <div>
            <h1>Review this product</h1>
            <h2>Share your thoughts with other customers</h2>
            <p>review</p>
            <NavLink to={'/review/' + id}>
                <p>Write a customer review</p>
            </NavLink>
        </div>
        </>
    )
}

export default ProductPage;
