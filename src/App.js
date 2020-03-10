import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"

import Header from './components/header';
import Homepage from './pages/Homepage';
import ShopPage from './pages/Shoppage';
import SignInSignUp from './pages/signin-signup';
import { auth, createUserProfileDocument } from './services/firebase'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './store/user/actions'


function App() {  
  const dispatch = useDispatch()

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)  
       
        userRef.onSnapshot(snapshot => {
          const user = {
            id: snapshot.id,
            ...snapshot.data()
          }

          dispatch(setCurrentUser(user))
        })
      }
    })

    return () => unsub()
  }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
