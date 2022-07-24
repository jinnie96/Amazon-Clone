import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const NewReview = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.id)
    console.log(product, "PRODUCTREVIEW")

    return (
        <div className='reviewForm'>
            <div>Create Review</div>
            <div className='picInfo'>
                <img src={product.photourl}></img>
                <h3>{product.name}</h3>
            </div>
            <div className='rating'>
                
            </div>
        </div>
    )
}

export default NewReview;
