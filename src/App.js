import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"

import Header from './components/header';
import Homepage from './pages/Homepage';
import ShopPage from './pages/Shoppage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
