import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/products'
import { getCarts } from '../store/carts';
import './Homepage.css'
import SideBar from './SideBar';

function Homepage() {
  const productsArr = []
  const dispatch = useDispatch()
  const products= useSelector(state => state.products);
  const user= useSelector(state => state.session.user)
const [deals, setDeals] = useState([])

useEffect(() => {
    (async() => {
      await dispatch(getAllProducts());
      if (user) {
          await dispatch(getCarts(user.id))
      }
    })();
  }, []);


  useEffect(() => {
    (async() => {
        const deal = []
        Object.keys(products).map((key, i) => {
            // console.log('vvvvvvvvvvv', products[key])
            deal.push(products[key])
        })
        // console.log(deal)
        setDeals(deal)
    })();
  }, [products]);


  const productComponents = productsArr.map((product, i) => {
    return (
        // <h1>hi</h1>
      <li key={product.id}>
        <NavLink to={`/products/${product.id}`}>hi</NavLink>
      </li>
    );
  });

  return (
    <>

        <h1 id='booksAt'>Books at Amazun</h1>
        <div className='banner'>
                <h3 id='exploreBooks'>Explore Books by Category</h3>
            </div>
            <div className='categoryList'>
                <NavLink id='navLink' to='/category/Fantasy'>
                    <div className='fantasyDiv>'>
                        <img src='https://mvlteenvoice.files.wordpress.com/2013/11/harry_potter_kazu_kibuishi.jpg'></img>
                        <div className='fantasyName'>
                            <h3 id='categoryName'>Fantasy</h3>

                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Sci-Fi'>
                    <div className='sciFiDiv>'>
                        <img src='https://thumbs.dreamstime.com/z/book-icon-concept-science-fiction-genre-open-literary-81641039.jpg'></img>
                        <div className='sciFiName'><h3 id='categoryName'>Science Fiction</h3></div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Mystery'>
                    <div className='mysteryDiv>'>
                        <img src='http://sherlockwebquest.weebly.com/uploads/1/3/7/0/13703805/3464358.png'></img>
                        <div className='mysteryName'>

                            <h3 id='categoryName'>Mystery</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Horror'>
                    <div className='horrorDiv>'>
                        <img src='https://i.pinimg.com/originals/2d/1c/ca/2d1ccab3d4ae904157d912ee012372b1.jpg'></img>
                        <div className='horrorName'>
                            <h3 id='categoryName'>Horror</h3>

                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Biography'>
                    <div className='biographyDiv>'>
                        <img src='https://image.shutterstock.com/image-illustration/biography-book-260nw-176418089.jpg'></img>
                        <div className='biographyName'>

                            <h3 id='categoryName'>Biography</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Childrens'>
                    <div className='childrensDiv>'>
                        <img src='https://www.mrsjudyaraujo.com/wp-content/uploads/vectorstock_21648326-289x300.jpg'></img>
                        <div className='childrensName'>
                            <h3 id='categoryName'>Children's</h3>

                        </div>
                    </div>
                </NavLink>
            </div>

            <div className='categoryListTwo'>
                <NavLink id='navLink' to='/category/Manga'>
                    <div className='mangaDiv>'>
                        <img src='https://cdn.dribbble.com/users/1325222/screenshots/6500297/100_.png?compress=1&resize=400x300'></img>
                        <div className='mangaName'>
                            <h3 id='categoryName'>Manga</h3>

                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Literary-Fiction'>
                    <div className='litFictionDiv>'>
                        <img src='https://48b6yd3iigex2rv7g41h5sts-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/what-is-literary-fiction.jpg'></img>
                        <div className='litFictionName'>

                            <h3 id='categoryName'>Literary Fiction</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/History'>
                    <div className='historyDiv>'>
                        <img src='https://media.istockphoto.com/vectors/on-patrol-vector-id131723828?k=20&m=131723828&s=612x612&w=0&h=n4Ve2Slwv1G6z1mnO1dEG8LfHJtG4iE9ghZ-JuSDzeY='></img>
                        <div className='historyName'>
                            <h3 id='categoryName'>History</h3>

                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Cookbooks'>
                    <div className='cookbookDiv>'>
                        <img src='https://i.pinimg.com/736x/c8/f8/eb/c8f8eb1dce1ab744af209842847db4b2.jpg'></img>
                        <div className='cookbookName'>

                            <h3 id='categoryName'>Cookbooks</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Action'>
                    <div className='actionDiv>'>
                        <img src='https://img.freepik.com/free-vector/guys-playing-knights-fighting-cartoon-illustration_74855-14394.jpg?w=2000'></img>
                        <div className='actionName'>

                            <h3 id='categoryName'>Action & Adventure</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Poetry'>
                    <div className='poetryDiv>'>
                        <img src='https://talkstar-assets.s3.amazonaws.com/production/playlists/playlist_697/a96f0391-83e8-45a3-bc6a-f1c571b78239/poetry_by_women_SQ.jpg'></img>
                        <div className='poetryName'>
                            <h3 id='categoryName'>Poetry</h3>

                        </div>
                    </div>
                </NavLink>
            </div>

        <div className='bodyPage'>
        <SideBar />
        <div className='nextToSide'>

            <div className='topBanner'>
                    <img id='topBannerPic' src='https://i.ibb.co/z8YRM6r/20220801-US-PRR-KU-Banner-Summer-Reading-Phase-3-1500x300-rev.jpg'></img>
            </div>
            <div className='bottomBanner'>
                <NavLink className='navDiv' to='/byRating/FourStars'>
                    <img id='bottomBannerPic' src='https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/bhp/BOTYSF22_tile.jpg'></img>
                </NavLink>
                <NavLink to='/category/Childrens'>
                    <img id='bottomBannerPic' src='https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/bhp/Kids_tile.jpg'></img>
                </NavLink>
                <NavLink to='/deals'>
                    <img id='bottomBannerPic' src='https://i.ibb.co/YfXXVcR/Screen-Shot-2022-08-29-at-10-36-48-PM.png'></img>
                </NavLink>
            </div>
                <div className='categoryTitle'><h1 id='topPicks'>Top picks for you</h1></div>
                <div className="categories">
                <div className='categoryBooks'>
                {deals && (

                    <div className='listofDeals'>
                    {deals.map((oneKey, i) => (
                                    <NavLink className='productGenreBox' to={'/books/' + oneKey.id}>
                                    <div key={i} className='bookBorder'>
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
        </div>
    </>
  );
}

export default Homepage;
