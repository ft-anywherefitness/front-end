import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Client from './components/Client';
import Register from './components/Register';
import Instructor from './components/Instructor';
import {Route, Switch} from 'react-router-dom'

import { useState } from 'react'

function App() {

  const [loggedUser, setLoggedUser] = useState([])

  return (
    <div className = 'header'>
    <Switch>

      <Route exact path = '/'>
        <Home/>
      </Route>

      <Route path = '/Login'>
        <Login 
          setLog={setLoggedUser}
        />
      </Route>

      <Route path = '/Register'>
        <Register />
      </Route>

      <Route path = '/Client'>
        <Client 
          loggedIn={loggedUser}
        />
      </Route>

      <Route path = '/Instructor'>
        <Instructor 
          loggedIn={loggedUser}
        />
      </Route>

    </Switch>
    </div>
  );
}

export default App;