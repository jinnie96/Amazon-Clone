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
        <ProtectedRoute path='/' exact={true} >
          <NavBar />
          <Homepage />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/books/:id' exact={true}>
          <NavBar />
          <ProductPage />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/fiction/:id' exact={true}>
          <NavBar />
          <ProductPage />
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/cart' exact={true} >
          <NavBar />
          <Cart/>
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/review/:id' exact={true} >
          <NavBar />
          <NewReview/>
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/sports/edit-review/:id' exact={true} >
          <NavBar />
          <EditReview/>
          <LinksFooter />
        </ProtectedRoute>
        <ProtectedRoute path='/confirmation' exact={true} >
          <NavBar />
          <OrderConfirmation/>
          <LinksFooter />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
