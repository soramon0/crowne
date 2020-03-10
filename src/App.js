import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom"

import Header from './components/header';
import Homepage from './pages/Homepage';
import ShopPage from './pages/Shoppage';
import SignInSignUp from './pages/signin-signup';
import { auth, createUserProfileDocument } from './services/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './store/user/actions'


function App() {
  const [loading, setLoading] = useState(true)
  const user = useSelector(({ user }) => user.currentUser)
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
          setLoading(false)
        })
      } else {
        setLoading(false)
      }
    })   

    return () => unsub()
  }, [dispatch])

  return (
    loading ? <p>loading...</p> : <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => user ? <Redirect to='/' /> : <SignInSignUp />} />
      </Switch>
    </div>
  );
}

export default App;
