import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/products'
import { getCarts } from '../store/carts';
import './Homepage.css'
import SideBar from './SideBar';
// import { NavLink } from "react-router-dom";

function Homepage() {
//   const [products, setProducts] = useState();
  const productsArr = []
  const dispatch = useDispatch()
  const products= useSelector(state => state.products);
  const user= useSelector(state => state.session.user)
//   const products = useSelector(state => state.products)
const [deals, setDeals] = useState([])

useEffect(() => {
    (async() => {
      await dispatch(getAllProducts());
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

//   useEffect(() => {
//     async function fetchData() {
//         // console.log("UUUSSSSERRR", user)
//         if (user) dispatch(getCarts(user.id))
//       const data = await dispatch(getAllProducts())
//       setProducts(data)
//       // console.log(((data)))
//       // console.log(products)
//       for (let key in data) {
//           // console.log(data[key])
//           productsArr.push(data[key])
//           // console.log(productsArr)
//       }
//       // console.log(productsArr)
//       // console.log(productsState)
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     (async() => {
//         const deal = []
//         Object.keys(products).map((key, i) => {
//             // console.log('vvvvvvvvvvv', products[key])
//             deal.push(products[key])
//         })
//         // console.log(deal)
//         setDeals(deal)
//     })();
//   }, []);


  const productComponents = productsArr.map((product, i) => {
      // console.log(product)
      // console.log(productsArr)
    return (
        // <h1>hi</h1>
      <li key={product.id}>
        <NavLink to={`/products/${product.id}`}>hi</NavLink>
      </li>
    );
  });

  return (
    <>
        {/* <ul>
            <img src='https://m.media-amazon.com/images/I/61s248JDH+L._AC_SX522_.jpg'></img>
            <img src='https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_.jpg'></img>
            <img src='https://m.media-amazon.com/images/I/61iqsjK1JtL._AC_SX466_.jpg'></img>
        </ul> */}

        <h1 id='booksAt'>Books at Amazon</h1>
        <div className='banner'>
                <h3 id='exploreBooks'>Explore Books by Category</h3>
                {/* <img id="homePic" src ="https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/TIN-332%20Books%20from_large.jpg?itok=7QRVhctV"></img> */}
            </div>
            <div className='categoryList'>
                <NavLink id='navLink' to='/category/Fantasy'>
                    <div className='fantasyDiv>'>
                        <img src='https://i.ibb.co/WVbyPQF/imageedit-2-4521847632.jpg'></img>
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
                        <img src='https://48b6yd3iigex2rv7g41h5sts-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/what-is-a-mystery.jpg'></img>
                        <div className='mysteryName'>

                            <h3 id='categoryName'>Mystery</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Horror'>
                    <div className='horrorDiv>'>
                        <img src='https://puzzleboxhorror.com/wp-content/uploads/2020/07/horror-book-and-skull-scaled.jpeg'></img>
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
                        <img src='https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2OTMwMTMxNDAxNDUxNDA4/5-reasons-l-knew-light-was-kira-in-death-note.jpg'></img>
                        <div className='mangaName'>
                            <h3 id='categoryName'>Manga</h3>

                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Literary-Fiction'>
                    <div className='litFictionDiv>'>
                        <img src='https://s26162.pcdn.co/wp-content/uploads/2020/12/Fiction-2020.png'></img>
                        <div className='litFictionName'>

                            <h3 id='categoryName'>Literary Fiction</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/History'>
                    <div className='historyDiv>'>
                        <img src='http://cdn2.mhpbooks.com/2016/01/HistoryBook.gif'></img>
                        <div className='historyName'>
                            <h3 id='categoryName'>History</h3>

                        </div>
                    </div>
                </NavLink>
                <NavLink id='navLink' to='/category/Cookbooks'>
                    <div className='cookbookDiv>'>
                        <img src='https://img.freepik.com/premium-vector/cartoon-little-girl-cooking-making-cake_29190-7102.jpg?w=2000'></img>
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
                        <img src='https://self-publishingschool.com/wp-content/uploads/2019/05/how-to-write-poetry.jpg'></img>
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
                <NavLink className='navDiv' to='/byRating/4'>
                    <img id='bottomBannerPic' src='https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/bhp/BOTYSF22_tile.jpg'></img>
                </NavLink>
                <NavLink to='/category/Children'>
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
                        // {products[oneKey].price < 10 &&
                        // <div>
                                // {// console.log('fffffffffff', oneKey)}
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
                            // </div>
                                    // }

                                    // )}
                                    ))}
                                    </div>
                )}

                    {/* </div> */}

                </div>

                    {/* <div className="sports">
                        <div className="sportsTitle">
                            Fantasy
                        </div>
                        <div class="sportsPics">
                            <NavLink to={'books/1'}><img id="gameOfThrones" src="https://m.media-amazon.com/images/I/81VqkhMFpuL._AC_UY218_.jpg"></img></NavLink>
                            <NavLink to={'books/2'}><img id="nameOfWind" src="https://images-na.ssl-images-amazon.com/images/I/91b8oNwaV1L.jpg"></img></NavLink>
                            <NavLink to={'books/3'}><img id="lordOfTheRings" src="https://images-na.ssl-images-amazon.com/images/I/71jLBXtWJWL.jpg"></img></NavLink>
                            <NavLink to={'books/4'}><img id="colorOfMagic" src="https://images-na.ssl-images-amazon.com/images/I/91u24IHWS8L.jpg"></img></NavLink>
                        </div>
                    </div>
                    <div className="books">
                        <div className="booksTitle">
                            Science Fiction
                        </div>
                        <div class="booksPics">
                            <NavLink to={'books/5'}><img id="nineEightFour" src="https://images-na.ssl-images-amazon.com/images/I/81StSOpmkjL.jpg"></img></NavLink>
                            <NavLink to={'books/6'}><img id="fahrenheit" src="https://www.arts.gov/sites/default/files/Fahrenheit%20451%20Cover.jpg"></img></NavLink>
                            <NavLink to={'books/7'}><img id="braveNewWorld" src="https://images-na.ssl-images-amazon.com/images/I/81zE42gT3xL.jpg"></img></NavLink>
                            <NavLink to={'books/8'}><img id="dune" src="https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg"></img></NavLink>
                        </div>
                    </div>
                    <div className="games">
                        <div className="gamesTitle">
                            Mystery
                        </div>
                        <div class="gamesPics">
                            <NavLink to={'books/9'}><img id='moonstone' src='https://images-na.ssl-images-amazon.com/images/I/41sxrEkyqdL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'></img></NavLink>
                            <NavLink to={'books/10'}><img id='scarlett' src='https://images-na.ssl-images-amazon.com/images/I/51-oCW5syML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'></img></NavLink>
                            <NavLink to={'books/11'}><img id='express' src='https://images-na.ssl-images-amazon.com/images/I/51r0M+3m6FL._SY344_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/12'}><img id='poisonedChocolate' src='https://images-na.ssl-images-amazon.com/images/I/3135Nx9adoL._SX322_BO1,204,203,200_.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="computers">
                        <div className="computersTitle">
                            Horror
                        </div>
                        <div class="computersPics">
                            <NavLink to={'books/13'}><img id='salem' src='https://images-na.ssl-images-amazon.com/images/I/51rGHSSyvxL._SX301_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/14'}><img id='river' src='https://images-na.ssl-images-amazon.com/images/I/517JeY9HK8L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'></img></NavLink>
                            <NavLink to={'books/15'}><img id='beloved' src='https://images-na.ssl-images-amazon.com/images/I/41Rdzbiqh7L._SX322_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/16'}><img id='exorcist' src='https://images-na.ssl-images-amazon.com/images/I/3178if2aHgL._SX326_BO1,204,203,200_.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="cellPhones">
                        <div className="cellPhoneTitle">
                            Biography
                        </div>
                        <div class="cellPhonePics">
                            <NavLink to={'books/17'}><img id='einstein' src='https://images-na.ssl-images-amazon.com/images/I/71e7d9fm8ZL.jpg'></img></NavLink>
                            <NavLink to={'books/18'}><img id='malcolm' src='https://images-na.ssl-images-amazon.com/images/I/51K6Bsvbn6L._SX303_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/19'}><img id='noah' src='https://images-na.ssl-images-amazon.com/images/I/51pJwB1hlPL._SX331_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/20'}><img id='jobs' src='https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="clothingTitle">
                            Children's
                        </div>
                        <div class="clothingPics">
                            <NavLink to={'books/21'}><img id='seuss' src='https://images-na.ssl-images-amazon.com/images/I/41QZuBj-CPL._SX355_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/22'}><img id='berenstein' src='https://images-na.ssl-images-amazon.com/images/I/61h8i3yRK4L._SY498_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/23'}><img id='wimpy' src='https://images-na.ssl-images-amazon.com/images/I/41iOgxrCIzL._SX352_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/24'}><img id='treehouse' src='https://m.media-amazon.com/images/I/91JmRQ7Pq6L._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="clothingTitle">
                            Manga
                        </div>
                        <div class="clothingPics">
                            <NavLink to={'books/25'}><img id='titan' src='https://images-na.ssl-images-amazon.com/images/I/51r5Zr3BzCL._SX331_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/26'}><img id='onepiece' src='https://images-na.ssl-images-amazon.com/images/I/518KKkmd1fL._SX329_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/27'}><img id='naruto' src='https://m.media-amazon.com/images/I/912xRMMra4L._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/28'}><img id='dragonball' src='https://m.media-amazon.com/images/I/81Lc+Yln3gL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="clothingTitle">
                            Literary Fiction
                        </div>
                        <div class="clothingPics">
                            <NavLink to={'books/29'}><img id='mockingbird' src='https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/30'}><img id='gatsby' src='https://m.media-amazon.com/images/I/61z0MrB6qOS._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/31'}><img id='catcherRye' src='https://m.media-amazon.com/images/I/71nXPGovoTL._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/32'}><img id='animalFarm' src='https://m.media-amazon.com/images/I/71wdbkiRokL._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="clothingTitle">
                            History
                        </div>
                        <div class="clothingPics">
                            <NavLink to={'books/33'}><img id='sapiens' src='https://m.media-amazon.com/images/I/81nQ+oGgI3L._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/34'}><img id='genghis' src='https://m.media-amazon.com/images/I/81suQvII3OL._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/35'}><img id='hundredObjects' src='https://m.media-amazon.com/images/I/71yj2989nlL._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/36'}><img id='turningBack' src='https://m.media-amazon.com/images/I/716pfhoGO5L._AC_UY436_FMwebp_QL65_.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="clothingTitle">
                            Cookbooks
                        </div>
                        <div class="clothingPics">
                            <NavLink to={'books/37'}><img id='islands' src='https://m.media-amazon.com/images/I/919UvuYjlDL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/38'}><img id='griddle' src='https://m.media-amazon.com/images/I/71qoy2ekFWL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/39'}><img id='simple' src='https://m.media-amazon.com/images/I/91osDWcy6jL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                            <NavLink to={'books/40'}><img id='farmhouse' src='https://m.media-amazon.com/images/I/811f5vGNQEL._AC_UL640_FMwebp_QL65_.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="clothingTitle">
                            Action & Adventure
                        </div>
                        <div class="clothingPics">
                            <NavLink to={'books/41'}><img id='darkSky' src='https://m.media-amazon.com/images/I/51IP1vp4DbL.jpg'></img></NavLink>
                            <NavLink to={'books/42'}><img id='unknownWoman' src='https://m.media-amazon.com/images/I/51AnJ9aDFeL.jpg'></img></NavLink>
                            <NavLink to={'books/43'}><img id='man' src='https://m.media-amazon.com/images/I/51oXWVUbqwL.jpg'></img></NavLink>
                            <NavLink to={'books/44'}><img id='creed' src='https://m.media-amazon.com/images/I/51Hz0EZtrxL.jpg'></img></NavLink>
                        </div>
                    </div>
                    <div className="clothing">
                        <div className="clothingTitle">
                            Poetry
                        </div>
                        <div class="clothingPics">
                            <NavLink to={'books/45'}><img id='honey' src='https://images-na.ssl-images-amazon.com/images/I/41J43ERHtLL._SX321_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/46'}><img id='connection' src='https://images-na.ssl-images-amazon.com/images/I/41zLDmfXMIL._SX311_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/47'}><img id='odyssey' src='https://images-na.ssl-images-amazon.com/images/I/51S8fUZ6nfL._SX331_BO1,204,203,200_.jpg'></img></NavLink>
                            <NavLink to={'books/48'}><img id='flowers' src='https://images-na.ssl-images-amazon.com/images/I/416ZrnNLj6L._SX321_BO1,204,203,200_.jpg'></img></NavLink>
                        </div>
                    </div> */}

                </div>
        </div>
        </div>
      {/* <ul>{productComponents}</ul> */}
    </>
  );
}

export default Homepage;
