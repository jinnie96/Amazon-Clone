import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/products'
import { getCarts } from '../store/carts';
import './Homepage.css'
// import { NavLink } from "react-router-dom";

function Homepage() {
  const [products, setProducts] = useState();
  const productsArr = []
  const dispatch = useDispatch()
  const productsState = useSelector(state => state.products);
  const user= useSelector(state => state.session.user.id)

  useEffect(() => {
    async function fetchData() {
        console.log("UUUSSSSERRR", user)
        dispatch(getCarts(user))
      const data = await dispatch(getAllProducts())
      setProducts(data)
      console.log(((data)))
      console.log(products)
      for (let key in data) {
          console.log(data[key].photourl)
          productsArr.push(data[key].photourl)
          console.log(productsArr)
      }
      console.log(productsArr)
      console.log(productsState)
    }
    fetchData();
  }, []);

  const productComponents = productsArr.map((product, i) => {
      console.log(product)
      console.log(productsArr)
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
        <div>
            <img id="homePic" src ="https://m.media-amazon.com/images/I/715lpDNhM1L._SX3000_.jpg"></img>
        </div>
        <div className="categories">
            <div className="sports">
                <div className="sportsTitle">
                    Sports
                </div>
                <div class="sportsPics">
                    <NavLink to={'sports/1'}><img id="football" src="https://www.big5sportinggoods.com/catalogimage/img/product/rwd/large/1310_14339_0004_000_large_02.jpg"></img></NavLink>
                    <NavLink to={'sports/2'}><img id="basketball" src="https://img.lakeshorelearning.com/is/image/OCProduction/ub80?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0"></img></NavLink>
                    <NavLink to={'sports/3'}><img id="soccerball" src="https://i5.walmartimages.com/asr/5f85d6c5-be68-4c96-9afc-7c8a7c160687.b4a9e6e6b710f197070328c909c28630.jpeg"></img></NavLink>
                    <NavLink to={'sports/4'}><img id="tennisball" src="https://nwscdn.com/media/wysiwyg/3kf/tennis/Lifestyle.jpg"></img></NavLink>
                </div>
            </div>
            <div className="books">
                <div className="booksTitle">
                    Books
                </div>
                <div class="booksPics">
                    <NavLink to={'books/1'}><img id="lifeOfPi" src="https://m.media-amazon.com/images/I/81E9oNSK3bL._AC_UY218_.jpg"></img></NavLink>
                    <NavLink to={'books/2'}><img id="holes" src="https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780440414803/primary/renditions/700"></img></NavLink>
                    <NavLink to={'books/3'}><img id="tanehisi" src="https://images.penguinrandomhouse.com/cover/9780812993547"></img></NavLink>
                    <NavLink to={'books/4'}><img id="harryPotter" src="https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg"></img></NavLink>
                </div>
            </div>
            <div className="games">
                <div className="gamesTitle">
                    Games
                </div>
                <div class="gamesPics">
                    <NavLink to={'games/1'}><img id='xbox' src='https://m.media-amazon.com/images/I/61s248JDH+L._AC_SX522_.jpg'></img></NavLink>
                    <NavLink to={'games/2'}><img id='ps5' src='https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_.jpg'></img></NavLink>
                    <NavLink to={'games/3'}><img id='oculus' src='https://m.media-amazon.com/images/I/61iqsjK1JtL._AC_SX466_.jpg'></img></NavLink>
                    <NavLink to={'games/4'}><img id='nintendo' src='https://m.media-amazon.com/images/I/61-PblYntsL._AC_SX466_.jpg'></img></NavLink>
                </div>
            </div>
            <div className="computers">
                <div className="computersTitle">
                    Computers
                </div>
                <div class="computersPics">
                    <NavLink to={'computers/1'}><img id='macPro' src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_IE?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654014007483'></img></NavLink>
                    <NavLink to={'computers/2'}><img id='windows' src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKwKp'></img></NavLink>
                    <NavLink to={'computers/3'}><img id='macStudio' src='https://cdn.vox-cdn.com/thumbor/vcUwv5tYo460czHHqCvWYS3WMrQ=/0x35:678x487/1400x1050/filters:focal(0x35:678x487):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49940293/2016-06-23_at_4.17_PM.0.0.png'></img></NavLink>
                    <NavLink to={'computers/4'}><img id='windows2' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477103cv16d.jpg'></img></NavLink>
                </div>
            </div>
            <div className="cellPhones">
                <div className="cellPhoneTitle">
                    Cell Phones
                </div>
                <div class="cellPhonePics">
                    <NavLink to={'phones/1'}><img id='iphone13' src='https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-midnight-09142021?hei=400'></img></NavLink>
                    <NavLink to={'phones/2'}><img id='galaxy20' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412545cv11d.jpg'></img></NavLink>
                    <NavLink to={'phones/3'}><img id='galaxya13' src='https://image-us.samsung.com/SamsungUS/home/mobile/phones/pdp/galaxy-a13-5g/gallery/green/SM-A136ULGAATT-1.jpg?$product-details-jpg$'></img></NavLink>
                    <NavLink to={'phones/4'}><img id='oneplus' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457034_sd.jpg;maxHeight=640;maxWidth=550'></img></NavLink>
                </div>
            </div>
            <div className="clothing">
                <div className="clothingTitle">
                    Clothing
                </div>
                <div class="clothingPics">
                    <NavLink to={'clothes/1'}><img id='jeans' src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fba%2F9d%2Fba9d9c48e4847ae9e18b3ed23d10878f6c758e38.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'></img></NavLink>
                    <NavLink to={'clothes/2'}><img id='jacket' src='https://cache.mrporter.com/variants/images/13452677151412507/in/w560_q60.jpg'></img></NavLink>
                    <NavLink to={'clothes/3'}><img id='tshirt' src='https://media.istockphoto.com/photos/front-back-and-34-views-of-white-tshirt-on-isolated-on-white-hip-hop-picture-id1225397516?k=20&m=1225397516&s=612x612&w=0&h=Ubp9vHi5pL2_8AyXgbpqM-kO17dpKsYBqzwG3VZ5cg8='></img></NavLink>
                    <NavLink to={'clothes/4'}><img id='sweats' src='https://m.media-amazon.com/images/I/614cbwtCbML._AC_UX679_.jpg'></img></NavLink>
                </div>
            </div>
        </div>
      {/* <ul>{productComponents}</ul> */}
    </>
  );
}

export default Homepage;
