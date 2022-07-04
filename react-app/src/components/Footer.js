import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Footer.css'

const Footer = () => {

    return (
        <div>
            <div className="top">Back to top</div>
            <div className="bottom">
               <div className="get">Get to Know Us</div>
            </div>
        </div>

    )
}

export default Footer
