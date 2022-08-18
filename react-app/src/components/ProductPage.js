import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './ProductPage.css'
import { getSingleProduct } from '../store/products';
import { addtoCart, getCarts } from '../store/carts';
import { getAllReviews, deleteOneReview } from '../store/reviews';

const ProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    let productObj
    useEffect(() => {
        dispatch(getSingleProduct(id))
        dispatch(getAllReviews(id))
        // getStarsForReview()
    }, [dispatch, id])
    const product = useSelector(state => state.products.id)
    console.log(product)
    if (product) {
        productObj = product[Object.keys(product)[0]];
    }
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user.id)
    // const [hasReview, setHasReview] = useState(false)
    let hasReview = false
    useEffect(() => {
        if (Object.keys(reviews)) {
            for (let i = 0; i < 1; i++) {
                let count = 0
                console.log(Object.keys(reviews))
                let key = reviews[Object.keys(reviews)[i]]
                console.log(key, "THIS")
                if (key) {
                    console.log(key[0].reviewer_id === user)
                    if (key[0].reviewer_id === user) {
                        hasReview = true
                    }
                }
            }
        }
    }, [])
    let averageRating = 0
    console.log("reviews", reviews)
    console.log(product, "BEFORE!")
    console.log("KEYSsSSSS", Object.keys(reviews))
    console.log(id)
    let reviewObj = {}
    let amountReviews = 0

    if (Object.keys(reviews)) {
        for (let i = 0; i < 1; i++) {
            let count = 0
            console.log(Object.keys(reviews))
            let key = reviews[Object.keys(reviews)[i]]
            console.log(key, "THIS")
            if (key) {
                console.log(key[0].reviewer_id === user)
                if (key[0].reviewer_id === user) {
                    hasReview = true
                }
                for (let j = 0; j < key.length; j++) {
                    if (!reviewObj[key[j].rating]) reviewObj[key[j].rating] = 1
                    else reviewObj[key[j].rating]++
                    averageRating += key[j].rating
                    count++
                    amountReviews++
                }
            }
            averageRating = Math.round((averageRating/count) * 10) / 10
        }
    }
    let rating5 = reviewObj[5] ? Math.round((reviewObj[5]/amountReviews) * 100) : 0
    let rating4 = reviewObj[4] ? Math.round((reviewObj[4]/amountReviews) * 100) : 0
    let rating3 = reviewObj[3] ? Math.round((reviewObj[3]/amountReviews) * 100) : 0
    let rating2 = reviewObj[2] ? Math.round((reviewObj[2]/amountReviews) * 100) : 0
    let rating1 = reviewObj[1] ? Math.round((reviewObj[1]/amountReviews) * 100) : 0
    let starImg = '&#9733;'
    let starDiv = document.querySelector('.starsCustomers')
    console.log(starDiv, averageRating, ";;;;;;;;;")
    // if (starDiv) starDiv.innerHTML = ''
    let fiveBool = false
    let fourBool = false
    let threeBool = false
    let twoBool = false
    let oneBool = false
    let zeroBool = false

    if (averageRating >= 4.5) {
        // const star = document.createElement('img')
        // star.src = 'https://www.clipartmax.com/middle/m2H7K9m2b1K9m2m2_3-star-reviews-five-stars-rating/'
        // star.style.color = 'blue'
        // star.id = 'averageReviewStar'
        // starDiv.appendChild(star)
        fiveBool = true
        fourBool = false
        threeBool = false
        twoBool = false
        oneBool = false
        zeroBool = false
    }
    if (averageRating >= 3.5 && averageRating < 4.5) {
        // const star = document.createElement('img')
        // star.src = 'https://www.clipartmax.com/middle/m2i8H7A0A0Z5b1d3_4-stars-four-out-of-five-stars/'
        // star.style.color = 'blue'
        // star.id = 'averageReviewStar'
        // starDiv.appendChild(star)
        fiveBool = false
        fourBool = true
        threeBool = false
        twoBool = false
        oneBool = false
        zeroBool = false
    }
    if (averageRating >= 2.5 && averageRating < 3.5) {
        // const star = document.createElement('img')
        // star.src = 'https://www.clipartmax.com/png/small/253-2532437_3-star-reviews-five-stars-rating.png'
        // star.style.color = 'blue'
        // star.id = 'averageReviewStar'
        // starDiv.appendChild(star)
        fiveBool = false
        fourBool = false
        threeBool = true
        twoBool = false
        oneBool = false
        zeroBool = false
    }
    if (averageRating >= 1.5 && averageRating < 2.5) {
        // const star = document.createElement('img')
        // star.src = 'https://i.ibb.co/JRbbH09/Screen-Shot-2022-08-12-at-9-28-33-PM-removebg-preview.jpg'
        // star.style.color = 'blue'
        // star.id = 'averageReviewStar'
        // starDiv.appendChild(star)
        fiveBool = false
        fourBool = false
        threeBool = false
        twoBool = true
        oneBool = false
        zeroBool = false
    }
    if (averageRating < 1.5) {
        // const star = document.createElement('img')
        // star.src = 'https://s3.amazonaws.com/hoth.bizango/images/414129/one-star_rating_feature.jpg'
        // star.style.color = 'blue'
        // star.id = 'averageReviewStar'
        // starDiv.appendChild(star)
        fiveBool = false
        fourBool = false
        threeBool = false
        twoBool = false
        oneBool = true
        zeroBool = false
    }
    if (averageRating < .5 || !averageRating) {
        fiveBool = false
        fourBool = false
        threeBool = false
        twoBool = false
        oneBool = false
        zeroBool = true
    }

    function getStarsForReview () {
        // for (let i = 1; i <= 5; i++) {
        //     console.log(starDiv, i, Math.round(averageRating))
        //     if (i < Math.round(averageRating) && starDiv) {
        //         const star = document.createElement('img')
        //         star.innerHTML = 'https://cdn.pixabay.com/photo/2020/04/26/11/56/amazon-stars-5094895_1280.png'
        //         star.style.color = 'orange'
        //         starDiv.appendChild(star)
        //         console.log(starDiv)
        //     } else if (i >= Math.round(averageRating) && starDiv) {
        //         const star = document.createElement('span')
        //         star.innerText = starImg
        //         star.style.color = 'grey'
        //         starDiv.appendChild(star)
        //         console.log(starDiv)
        //     }
        // }
    }
    console.log(averageRating, "AVERAGE")
    console.log(reviewObj, "OBJ")
    const addCart = async() => {
        await dispatch(addtoCart(id))
        await dispatch(getCarts(user))
    }

    const deleteReview = (e) => {
        console.log(e.target)
        dispatch(deleteOneReview(e.target.id))
        // window.location.href = `/sports/${id}`
    }

    const five = document.querySelector('.rating5')
    const four = document.querySelector('.rating4')
    const three = document.querySelector('.rating3')
    const two = document.querySelector('.rating2')
    const one = document.querySelector('.rating1')

    if (five) five.style.backgroundImage = 'linear-gradient(90deg, #FFA41D ' + rating5 + '%, #FFFFFF 0%)'
    if (four) four.style.backgroundImage = 'linear-gradient(90deg, #FFA41D ' + rating4 + '%, #FFFFFF 0%)'
    if (three) three.style.backgroundImage = 'linear-gradient(90deg, #FFA41D ' + rating3 + '%, #FFFFFF 0%)'
    if (two) two.style.backgroundImage = 'linear-gradient(90deg, #FFA41D ' + rating2 + '%, #FFFFFF 0%)'
    if (one) one.style.backgroundImage = 'linear-gradient(90deg, #FFA41D ' + rating1 + '%, #FFFFFF 0%)'

        // console.log(reviewObj[5] ? Math.round((reviewObj[5]/amountReviews) * 100) : 0)
        // four.style.backgroundImage = 'linear-gradient(90deg, #FFA41D 50%, #FFFFFF 50%)'

    document.addEventListener('DOMContentLoaded', function() {
        getStarsForReview()
    }, false);

    return (
        <>
        {productObj &&
            <div className='product'>
                <div className="image">
                    <img id='prodImage'src={productObj.photourl}></img>
                </div>
                <div className='productDetails'>
                    <h1 id='productName'>{productObj.name}</h1>
                    <div id='author'>
                        <h2 id='by'>by&nbsp;</h2>
                        <h2 id='onlyName'>{productObj.name}</h2>
                    </div>
                    <div className='ratingStars'>
                        <div className='stars'>
                            {/* <i className="fa-solid fa-plus"></i> */}
                            {fiveBool && (
                            // <h1>5</h1>
                            <img id='averageReviewStar' src="https://i.ibb.co/JRbbH09/Screen-Shot-2022-08-12-at-9-28-33-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {fourBool && (
                            <img id='averageReviewStar' src="https://i.ibb.co/dk3ZZbn/Screen-Shot-2022-08-12-at-9-28-57-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {threeBool && (
                            <img id='averageReviewStar' src="https://i.ibb.co/RgTb9MT/Screen-Shot-2022-08-12-at-9-29-12-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {twoBool && (
                            <img id='averageReviewStar' src="https://i.ibb.co/P5Fmjdd/Screen-Shot-2022-08-12-at-9-29-23-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {oneBool && (
                            <img id='averageReviewStar' src="https://i.ibb.co/kgBYWdH/Screen-Shot-2022-08-12-at-9-29-37-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {zeroBool && (
                            <h1>0</h1>
                            // <img src="https://www.clipartmax.com/png/small/67-676994_4-stars-four-out-of-five-stars.png" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        </div>
                        <div id='amountRatings'>
                            {amountReviews} ratings
                        </div>
                    </div>
                    <h1 id='productDescription'>{productObj.description}</h1>
                    {/* <h1 id='productId'>{productObj.id}</h1> */}
                </div>
                <div className='price'>
                    <div className='priceDiv'>
                        <h1 id='price'>${productObj.price}</h1>
                    </div>
                    <h2 id='stock'>In Stock.</h2>
                    <div className='cartBtns'>
                        <button id='cartAdd' onClick={addCart}>Add to Cart</button>
                        <NavLink to='/confirmation'><button id='buy'>Buy Now</button></NavLink>
                    </div>
                    <div class='secureTrans'>
                        <img id='lockIcon' src='data:image/png;base64,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'></img>
                        <h3 id='secure'>Secure transaction</h3>
                    </div>
                </div>
            </div>
        }
        <div className='reviews'>
            <div className='leftSide'>
                <div>
                    <h1 id='title'>Customer Reviews</h1>
                    <div className='starsCustomers'>
                        {/* <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span> */}
                        {fiveBool && (
                            // <h1>5</h1>
                            <img id='averageReviewStar' src="https://i.ibb.co/JRbbH09/Screen-Shot-2022-08-12-at-9-28-33-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {fourBool && (
                            <img id='averageReviewStar' src="https://i.ibb.co/dk3ZZbn/Screen-Shot-2022-08-12-at-9-28-57-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {threeBool && (
                            <img id='averageReviewStar' src="https://i.ibb.co/RgTb9MT/Screen-Shot-2022-08-12-at-9-29-12-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {twoBool && (
                            <img id='averageReviewStar' src="https://i.ibb.co/P5Fmjdd/Screen-Shot-2022-08-12-at-9-29-23-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {oneBool && (
                            <img id='averageReviewStar' src="https://i.ibb.co/kgBYWdH/Screen-Shot-2022-08-12-at-9-29-37-PM-removebg-preview.jpg" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        {zeroBool && (
                            <h1>0</h1>
                            // <img src="https://www.clipartmax.com/png/small/67-676994_4-stars-four-out-of-five-stars.png" alt="4 Stars - Four Out Of Five Stars @clipartmax.com"></img>
                        )}
                        <h2 id='average'>{averageRating ? averageRating : "N/A"} out of 5</h2>
                    </div>
                        <h2 id='totalReviews'>{amountReviews ? amountReviews : 0} global ratings</h2>
                </div>
                <div className='ratings'>
                    <div className='five'>
                        <h3 id='starTitle'>5 star</h3>
                        <div className='rating5'></div>
                        <h3 id='percentage'>{reviewObj[5] ? Math.round((reviewObj[5]/amountReviews) * 100) : 0}%</h3>
                    </div>
                    <div className='four'>
                        <h3 id='starTitle'>4 star</h3>
                        <div className='rating4'></div>
                        <h3 id='percentage'>{reviewObj[4] ? Math.round((reviewObj[4]/amountReviews) * 100) : 0}%</h3>
                    </div>
                    <div className='three'>
                        <h3 id='starTitle'>3 star</h3>
                        <div className='rating3'></div>
                        <h3 id='percentage'>{reviewObj[3] ? Math.round((reviewObj[3]/amountReviews) * 100) : 0}%</h3>
                    </div>
                    <div className='two'>
                        <h3 id='starTitle'>2 star</h3>
                        <div className='rating2'></div>
                        <h3 id='percentage'>{reviewObj[2] ? Math.round((reviewObj[2]/amountReviews)*100) : 0}%</h3>
                    </div>
                    <div className='one'>
                        <h3 id='starTitle'>1 star</h3>
                        <div className='rating1'></div>
                        <h3 id='percentage'>{reviewObj[1] ? Math.round((reviewObj[1]/amountReviews) * 100) : 0}%</h3>
                    </div>
                </div>
                <div className='newReviewDiv'>
                    <h1 id='reviewText'>Review this product</h1>
                    <h2 id='thoughts'>Share your thoughts with other customers</h2>
                    {!hasReview && (
                        <NavLink to={'/review/' + id}>
                            <button id='customerBtn'>Write a customer review</button>
                        </NavLink>
                    )}
                </div>

            </div>
            <div className='rightSideReviews'>
                <div id='topReviews'>Top reviews from the United States</div>
                <div className='reviewsInfo'>
                    {console.log("EEEEEEEEEEEEE",  reviews)}
                {
                    Object.keys(reviews).map((key,i)=>{
                        return (
                            <div className='reviewDetail'>
                                <div class='userInfo'>
                                    <div className='info'>
                                    <img id='profilePic' src='https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'></img>
                                    <h3 id='reviewUser'>{reviews[key][i].username}</h3>
                                    </div>
                                    <div class='editDiv'>
                                    {reviews[key][i].reviewer_id === user &&
                                        <div className='editDelBtns'>
                                            <NavLink to={'edit-review/' + reviews[key][i].id}>
                                                <button id={reviews[key][i].id} className='editReviewButton'>Edit Review</button>
                                            </NavLink>
                                                {/* <button id='deleteRevBtn' onClick={deleteReview}>Delete Review</button> */}
                                        </div>
                                    }
                                    </div>
                                </div>
                                {/* <h1 key={i} id={reviews[key][i].id}>{reviews[key][i].rating}</h1> */}
                                <div className='starsTitle'>
                                    <p>&#9733;</p>
                                    <p>&#9733;</p>
                                    <p>&#9733;</p>
                                    <p>&#9733;</p>
                                    <p>&#9733;</p>
                                    <h2 key={i} id='reviewTitle'>{reviews[key][i].title}</h2>
                                </div>
                                <h3 key={i} id='reviewsDescription'>{reviews[key][i].description}</h3>
                                {reviews[key][i].reviewer_id === user &&
                                    <div className='editDelBtns'>
                                        {/* <NavLink to={'edit-review/' + reviews[key][i].id}>
                                            <button id='editRevBtn'>Edit Review</button>
                                        </NavLink> */}
                                            <button id={reviews[key][i].id} className='deleteReviewButton' onClick={deleteReview}>Delete Review</button>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage;
