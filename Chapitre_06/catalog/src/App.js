import React from "react";
// Comonents 
import Home from "./components/Home";
import CardMovie from "./components/CardMovie";
// React-router-dom
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/:id" component={CardMovie}/>
    </Switch>
  </BrowserRouter>
);

export default App;