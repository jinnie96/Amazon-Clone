import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './404Page.css'

const Handle404 = () => {

    return (
        <div className='handleError'>
            <NavLink to='/'>
                <div className='sorry'>
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png'></img>
                </div>
                <div className='dogSorry'>
                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/113._TTD_.jpg'></img>
                </div>
            </NavLink>
        </div>
    )
}

export default Handle404
