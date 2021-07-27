import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Register from './Register'


export default function App() {

  return (

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
     
    </div>
    </Router>
  );
}


