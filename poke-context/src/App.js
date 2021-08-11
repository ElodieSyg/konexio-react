import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Home from './view/Home';
import Login from './view/Login';
import LogContext from './components/LogContext';
import HistoryContext from './components/HistoryContext';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (  
    <div>
      <BrowserRouter>
        <LogContext>
          <HistoryContext>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path ='/login' component={Login}/>
            </Switch>
          </HistoryContext>
        </LogContext>
      </BrowserRouter>
    </div>
  );
};

export default App;