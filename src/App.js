import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import './App.css';
import Header from './components/header';
import Homepage from './pages/Homepage';
import ShopPage from './pages/Shoppage';
import SignInSignUp from './pages/Signin-signup';
import Checkoutpage from './pages/Checkoutpage';
import { auth, createUserProfileDocument } from './services/firebase'
import { setCurrentUser } from './store/user/actions'
import { selectCurrentUser } from './store/user/selectors'

function App() {
  const [loading, setLoading] = useState(true)
  const user = useSelector(selectCurrentUser)
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
        <Route exact path='/checkout' component={Checkoutpage} />
        <Route exact path='/signin' render={() => user ? <Redirect to='/' /> : <SignInSignUp />} />
      </Switch>
    </div>
  );
}

export default App;
