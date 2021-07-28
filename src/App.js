import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Client from './components/Client';
import Register from './components/Register';
import Instructor from './components/Instructor';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className = 'header'>
    <Switch>

      <Route exact path = '/'>
        <Home/>
      </Route>

      <Route path = '/Login'>
        <Login />
      </Route>

      <Route path = '/Register'>
        <Register />
      </Route>

      <Route path = '/Client'>
        <Client />
      </Route>

      <Route path = '/Instructor'>
        <Instructor />
      </Route>

    </Switch>
    </div>
  );
}

export default App;