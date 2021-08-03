import React from 'react';
// Components 
import Home from './view/Home';
import Weekly from './view/Weekly';
import WeeklyBattle from './view/WeeklyBattle';
import Popular from './view/Popular';
import PopularBattle from './view/PopularBattle';
import Favorites from './view/Favorites';
// React-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/weekly' component={Weekly} />
        <Route exact path='/weekly-battle' component={WeeklyBattle} />
        <Route exact path='/popular'component={Popular} />
        <Route exact path='/popular-battle' component={PopularBattle} />
        <Route exact path='/favorites' component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;