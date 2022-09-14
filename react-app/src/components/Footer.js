import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Footer.css'

const Footer = () => {
    const scrollTop = function () {
        window.scrollTo(0,0);
    }

    return (
        <div className='footerDiv'>
            <div className="top" onClick={scrollTop}>Back to top</div>
            <div className="bottom">
               <div className="get">
                   <h1 id="head">More projects by developer</h1>
                   <div className='linksToFooter'>
                       <a href='http://insta-clone-group.herokuapp.com'><p>Instaclone</p></a>
                       <a href='https://remember-the-grapes.herokuapp.com/'><p>Remember the Grapes</p></a>

                   </div>
               </div>
               <div className='make'>
                    <h1 id="head">Technologies Used</h1>
                    <div className='linksToFooter'>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Javascript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Flask</p>
                        <p>PostgreSQL</p>
                        <p>SQLAlchemy</p>
                        <p>Git</p>
                    </div>
               </div>
               <div className='amazon'>
                    <h1 id="head">Connect with the developer</h1>
                    <div className='linksToFooter'>
                        <a href='https://github.com/jinnie96/'><p>Github</p></a>
                        <a href='https://angel.co/u/karandeep-singh-83'><p>AngelList</p></a>
                        <a href='https://www.linkedin.com/in/karandeep-singh-600852a8/'><p>LinkedIn</p></a>
                        <a href='https://jinnie96.github.io'><p>Personal Website</p></a>
                    </div>
               </div>
            </div>
            <div className="logo">
                <img id='amazonLogo' src='https://i.ibb.co/gmV9mQF/amazon-logo.jpg'></img>
                <div className='copyRight'>© 2022 Amazun</div>
            </div>
        </div>

    )
}

export default Footer
