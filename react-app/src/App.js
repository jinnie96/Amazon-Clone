import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import ProductPage from './components/ProductPage'
import User from './components/User';
import Homepage from './components/Homepage';
import Cart from './components/Cart'
import NewReview from './components/NewReview';
import EditReview from './components/EditReview'
import { authenticate } from './store/session';
import OrderConfirmation from './components/OrderConfirmation';
import LinksFooter from './components/LinksFooter';
import AddedToCart from './components/AddedToCart';
import CategoryPage from './components/CategoryPage'
import BestDeals from './components/BestDeals';
import ByReview from './components/ByReview';
import FantasyGenre from './components/NavBarLinks/Categories/FantasyGenre';
import MysteryGenre from './components/NavBarLinks/Categories/MysteryGenre';
import ActionGenre from './components/NavBarLinks/Categories/ActionGenre';
import BiographyGenre from './components/NavBarLinks/Categories/BiographyGenre';
import ChildrensGenre from './components/NavBarLinks/Categories/ChildrensGenre';
import CookBookGenre from './components/NavBarLinks/Categories/CookBookGenre';
import HistoryGenre from './components/NavBarLinks/Categories/HistoryGenre';
import HorrorGenre from './components/NavBarLinks/Categories/HorrorGenre';
import LitFictionGenre from './components/NavBarLinks/Categories/LitFictionGenre';
import MangaGenre from './components/NavBarLinks/Categories/MangaGenre';
import PoetryGenre from './components/NavBarLinks/Categories/PoetryGenre';
import SciFiGenre from './components/NavBarLinks/Categories/SciFiGenre';

import FourPlus from './components/NavBarLinks/Rating/FourPlus';
import ThreePlus from './components/NavBarLinks/Rating/ThreePlus';
import TwoPlus from './components/NavBarLinks/Rating/TwoPlus';
import OnePlus from './components/NavBarLinks/Rating/OnePlus';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <NavBar />
          <Homepage />
          <Footer />
          <LinksFooter />
        </Route>
        <ProtectedRoute path='/books/:id' exact={true}>
          <NavBar />
          <ProductPage />
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/fiction/:id' exact={true}>
          <NavBar />
          <ProductPage />
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/cart' exact={true} >
          <NavBar />
          <Cart/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/review/:id' exact={true} >
          <NavBar />
          <NewReview/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/books/edit-review/:id' exact={true} >
          <NavBar />
          <EditReview/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/confirmation' exact={true} >
          <NavBar />
          <OrderConfirmation/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/added' exact={true} >
          <NavBar />
          <AddedToCart/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Fantasy' exact={true} >
          <NavBar />
          <FantasyGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Mystery' exact={true} >
          <NavBar />
          <MysteryGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Action' exact={true} >
          <NavBar />
          <ActionGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Biography' exact={true} >
          <NavBar />
          <BiographyGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Childrens' exact={true} >
          <NavBar />
          <ChildrensGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/CookBooks' exact={true} >
          <NavBar />
          <CookBookGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/History' exact={true} >
          <NavBar />
          <HistoryGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Horror' exact={true} >
          <NavBar />
          <HorrorGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Lit-Fiction' exact={true} >
          <NavBar />
          <LitFictionGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Manga' exact={true} >
          <NavBar />
          <MangaGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Poetry' exact={true} >
          <NavBar />
          <PoetryGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/category/Sci-Fi' exact={true} >
          <NavBar />
          <SciFiGenre/>
          <Footer />
          <LinksFooter />
        </ProtectedRoute>

        <ProtectedRoute path='/deals' exact={true} >
          <NavBar />
          <BestDeals />
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/byRating/FourStars' exact={true} >
          <NavBar />
          <FourPlus />
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/byRating/ThreeStars' exact={true} >
          <NavBar />
          <ThreePlus />
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/byRating/TwoStars' exact={true} >
          <NavBar />
          <TwoPlus />
          <Footer />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/byRating/OneStar' exact={true} >
          <NavBar />
          <OnePlus />
          <Footer />
          <LinksFooter />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
