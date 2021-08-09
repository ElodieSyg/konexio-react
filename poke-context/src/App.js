import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Home from './view/Home';
import Login from './view/Login';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path ='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;