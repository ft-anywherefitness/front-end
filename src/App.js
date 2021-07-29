import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Client from './components/Client';
import Register from './components/Register';
import Instructor from './components/Instructor';
import {Route, Link, Switch} from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'


const StyledHome = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  img{
      margin-top: 2%;
      width: 70%;
  }
  button{
      margin: 1.2%;
      padding: 0.5%;
      background-color: white;
      justify-content:center;
      border-radius:5px;
      background-color:#ccccff;
      width:15%
  }
  button:hover{
      background-color: grey;
      color: white;
  }
  p{
      margin: 2%;
  }
`


function App() {

  const [loggedUser, setLoggedUser] = useState([])

  return (
    <div className = 'header'>
      <StyledHome>
        <div className = 'home-page'>
            <header className = 'home-header'>
                <h1>Anywhere Fitness</h1>

                <Link to= '/'>
                <button>Home</button>
                </Link>

                <Link to= '/Login'>
                <button>Login</button>
                </Link>

                <Link to = '/Register'>
                <button>Register</button>
                </Link>

                <Link to= '/Client'>
                <button>Client</button>
                </Link>

                <Link to = '/Instructor'>
                <button>Instructor</button> 
                </Link>
            </header>
        </div>
    </StyledHome>

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