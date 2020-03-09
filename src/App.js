import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"

import Header from './components/header';
import Homepage from './pages/Homepage';
import ShopPage from './pages/Shoppage';
import SignInSignUp from './pages/signin-signup';
import { auth } from './services/firebase'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return () => unsub()
  }, [])

  return (
    <div>
      <Header user={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
