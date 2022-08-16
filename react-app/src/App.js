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
      <NavBar />
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
          <Homepage />
        </ProtectedRoute>
        <ProtectedRoute path='/sports/:id' exact={true}>
          <ProductPage />
        </ProtectedRoute>
        <ProtectedRoute path='/cart' exact={true} >
          <Cart/>
        </ProtectedRoute>
        <ProtectedRoute path='/review/:id' exact={true} >
          <NewReview/>
        </ProtectedRoute>
        <ProtectedRoute path='/sports/edit-review/:id' exact={true} >
          <EditReview/>
        </ProtectedRoute>
        <ProtectedRoute path='/confirmation' exact={true} >
          <OrderConfirmation/>
        </ProtectedRoute>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
