import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoButton'
import { useDispatch, useSelector } from 'react-redux';
import './BestDeals.css'
import SideBar from './SideBar';

const ByReview = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const reviews = useSelector(state => state.reviews)
    const user= useSelector(state => state.session.user)
    const products=useSelector(state => state.products)

    const [deals, setDeals] = useState([])
    console.log(window.location.pathname.slice(-1))
    useEffect(() => {
        (async() => {
            const deal = []
            Object.keys(products).map((key, i) => {
                console.log('vvvvvvvvvvv', products[key])
                if(products[key].rating >= window.location.pathname.slice(-1)) deal.push(products[key])
            })
            console.log(deal)
            setDeals(deal)
        })();
      }, []);

    console.log(user)
    return (
        <div className='categoryPage'>
            <div className='sideBarDiv'>
                <SideBar />
            </div>
            <div className='dealWholePage'>
                {/* <h1 id='genreType'>{window.location.pathname.slice(10)}</h1> */}
                <div>
                    <h2 id='bestSellers'>Shop best value deals</h2>

                </div>
                <div className='categoryBooks'>
                    {/* <div> */}
                        {console.log(deals, ")))))))))")}
                {deals && (

                    <div className='listofDeals'>
                    {deals.map((oneKey, i) => (
                        // {products[oneKey].price < 10 &&
                        // <div>
                                // {console.log('fffffffffff', oneKey)}
                                    <NavLink className='productGenreBox' to={'/books/' + oneKey.id}>
                                    <div key={i}>
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
                                    </div>
                                </NavLink>
                            // </div>
                                    // }

                                    // )}
                                    ))}
                                    </div>
                )}

                    {/* </div> */}

                </div>
            </div>
        </div>
    )
}

export default ByReview
