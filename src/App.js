// import logo from './logo.svg';
import './App.css';
import InitialLogin from './InitialLogin';
import Home from './Home'
// import LoginPage from './LoginPage'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
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
    </div>
  );
}

export default App;
