<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
import InitialLogin from './InitialLogin';
import Home from './Home'
// import LoginPage from './LoginPage'
import {Route, Switch} from 'react-router-dom'
=======
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Register from './Register'


export default function App() {
>>>>>>> b9d26d699de0a8d9f4129956f8a6c01060d0435a

  return (
<<<<<<< HEAD
    <div className = 'header'>
    <Switch>
      <Route exact path = '/'>
        <Home/>
      </Route>

      <Route path = '/Login'>
        <InitialLogin />
        {/* <LoginPage /> */}
      </Route>
    </Switch>
=======

    <Router>
    <div className="App">
      <nav>
        <Link to ='/register'>Register</Link>
      </nav>

      <Switch>

        <Route path ='/register'>
          <Register />
        </Route>

      </Switch>
     
>>>>>>> b9d26d699de0a8d9f4129956f8a6c01060d0435a
    </div>
    </Router>
  );
}


