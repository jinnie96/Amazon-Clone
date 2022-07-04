import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Footer.css'

const Footer = () => {

    return (
        <div>
            <div className="top">Back to top</div>
            <div className="bottom">
               <div className="get">
                   <h1>Get to Know Us</h1>
                   <div>
                       <p>Careers</p>
                       <p>Amazon Newsletter</p>
                       <p>About Amazon</p>
                       <p>Sustainability</p>
                       <p>Press Center</p>
                       <p>Investor Relations</p>
                       <p>Amazon Devices</p>
                       <p>Amazon Science</p>

                   </div>
               </div>
               <div className='make'>
                    <h1>Make Money with Us</h1>
                    <div>
                        <p>Sell products on Amazon</p>
                        <p>Sell apps on Amazon</p>
                        <p>Supply to Amazon</p>
                        <p>Become an Affiliate</p>
                        <p>Become a Delivery Driver</p>
                        <p>Start a package delivery business</p>
                        <p>Advertise Your Products</p>
                        <p>Self-Publish with Us</p>
                        <p>Host an Amazon Hub</p>
                    </div>
               </div>
               <div className='amazon'>
                    <h1>Amazon Payments Products</h1>
                    <div>
                        <p>Amazon Rewards Visa Signature Cards</p>
                        <p>Amazon Store Card</p>
                        <p>Amazon Secured Card</p>
                        <p>Amazon Business Card</p>
                        <p>Shop with Points</p>
                        <p>Credit card Marketplace</p>
                        <p>Reload Your Balance</p>
                        <p>Amazon Currency Converter</p>
                    </div>
               </div>
               <div className='let'>
                    <h1>Let Us Help You</h1>
                    <div>
                        <p>Amazon and COVID-19</p>
                        <p>Your Account</p>
                        <p>Your Orders</p>
                        <p>Shipping Rates & Policies</p>
                        <p>Amazon Prime</p>
                        <p>Returns & Replacements</p>
                        <p>Manage Your Content and Devices</p>
                        <p>Amazon Assistant</p>
                        <p>Help</p>
                    </div>
               </div>
            </div>
        </div>

    )
}

export default Footer
