import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import './App.css';
import Header from './components/header/';
import HomePage from './components/home/';
import ShopPage from './components/shop/';
import SigninSignup from './components/register/';
import CheckoutPage from './components/checkout/';
import { selectCurrentUser } from './store/user/selectors';
import { checkUserSession } from './store/user/actions';

function App() {
  const user = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => user ? <Redirect to='/' /> : <SigninSignup />} />
        </Switch>
      </>
  );
}

export default App;
